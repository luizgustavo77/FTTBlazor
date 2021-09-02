using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FTTBlazorComponent
{
    public abstract class BaseComponent : ComponentBase, IDisposable
    {
        [Inject]
        protected IJSRuntime Js { get; set; }

        protected bool Rendered { get; private set; }

        protected bool Disposed { get; private set; }

        [Parameter]
        public ForwardRef RefBack { get; set; }

        private readonly Queue<Func<Task>> afterRenderCallQueue = new Queue<Func<Task>>();

        protected async override Task OnAfterRenderAsync(bool firstRender)
        {
            Rendered = true;
            await base.OnAfterRenderAsync(firstRender);
            if (firstRender)
            {
                await Task.CompletedTask;
            }

            if (afterRenderCallQueue.Count > 0)
            {
                var actions = afterRenderCallQueue.ToArray();
                afterRenderCallQueue.Clear();

                foreach (var action in actions)
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
}
