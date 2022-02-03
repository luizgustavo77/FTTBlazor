using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FTTBlazor
{
    public abstract class FTTBaseDialog : ComponentBase, IDisposable
    {
        [Inject]
        protected IJSRuntime Js { get; set; }

        [Parameter]
        public string Id { get; set; } = "FTTBlazor_id_" + Guid.NewGuid();

        [Parameter(CaptureUnmatchedValues = true)]
        public Dictionary<string, object> Attributes { get; set; }

        [Parameter]
        public string Class { get; set; }

        private ElementReference _ref;

        public virtual ElementReference Ref
        {
            get => _ref;
            set
            {
                _ref = value;
                RefBack?.Set(value);
            }
        }

        protected FTTClassMapper ClassMapper { get; } = new FTTClassMapper();

        protected FTTStyleMapper StyleMapper = new FTTStyleMapper();
        protected bool Rendered { get; private set; }

        protected bool Disposed { get; private set; }

        [Parameter]
        public FTTForwardRef RefBack { get; set; }

        private readonly Queue<Func<Task>> afterRenderCallQueue = new Queue<Func<Task>>();

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            Rendered = true;
            await base.OnAfterRenderAsync(firstRender);
            if (firstRender)
            {
                await Task.CompletedTask;
            }

            if (afterRenderCallQueue.Count > 0)
            {
                Func<Task>[] actions = afterRenderCallQueue.ToArray();
                afterRenderCallQueue.Clear();

                foreach (Func<Task> action in actions)
                {
                    if (Disposed)
                    {
                        return;
                    }

                    await action();
                }
            }
        }

        protected void CallAfterRender(Func<Task> action)
        {
            afterRenderCallQueue.Enqueue(action);
        }

        protected virtual Task OnFirstAfterRenderAsync()
        {
            return Task.CompletedTask;
        }

        public void InvokeStateHasChanged()
        {
            InvokeAsync(() =>
            {
                try
                {
                    if (!Disposed)
                    {
                        StateHasChanged();
                    }
                }
                catch (Exception)
                {
                }
            });
        }

        public virtual void Dispose()
        {
            Disposed = true;
        }

        protected async Task<T> JsInvokeAsync<T>(string code, params object[] args)
        {
            try
            {
                return await Js.InvokeAsync<T>(code, args);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        protected DotNetObjectReference<T> CreateDotNetObjectRef<T>(T value) where T : class
        {
            return DotNetObjectReference.Create(value);
        }

        protected void DisposeDotNetObjectRef<T>(DotNetObjectReference<T> value) where T : class
        {
            value?.Dispose();
        }
    }
    public class FTTForwardRef : ForwardRef<ElementReference>
    {
    }

    public class ForwardRef<T>
    {
        private T _current;

        public void Set(T value)
        {
            _current = value;
        }
    }
}
