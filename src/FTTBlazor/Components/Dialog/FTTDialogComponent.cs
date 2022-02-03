using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FTTBlazor.Components.Dialog
{
    public class FTTDialogComponent : FTTBaseDialog
    {
        [JSInvokable]
        public async Task DialogClosedHandler()
        {
            _isOpen = false;
            await IsOpenChanged.InvokeAsync(false);
            StateHasChanged();
        }

        [JSInvokable]
        public async Task DialogOpenedHandler()
        {
            _isOpen = true;
            await IsOpenChanged.InvokeAsync(true);
            StateHasChanged();
        }

        [Parameter]
        public RenderFragment ChildContent { get; set; }

        [Parameter]
        public bool IsOpen
        {
            get => _isOpen;
            set
            {
                if (IsOpen != value)
                {
                    _isOpen = value;
                    CallAfterRender(async () =>
                    {
                        await JsInvokeAsync<object>("FTTBlazor.Dialog.setIsOpen", Ref, value);
                    });
                }
            }
        }

        [Parameter]
        public EventCallback<bool> IsOpenChanged { get; set; }

        [Parameter]
        public bool CanBeClosed
        {
            get => _canBeClosed;
            set
            {
                if (CanBeClosed == value)
                {
                    return;
                }

                _canBeClosed = value;
                CallAfterRender(async () =>
                {
                    await JsInvokeAsync<object>("FTTBlazor.Dialog.setCanBeClosed", Ref, value);
                });
            }
        }

        public string SurfaceClass { get; set; }

        public string SurfaceStyle { get; set; }

        public const bool CanBeClosedDefault = true;

        private bool _canBeClosed = CanBeClosedDefault;

        private bool _isOpen;

        private DotNetObjectReference<FTTDialogComponent> dotNetObjectRef;

        protected FTTClassMapper SurfaceClassMapper { get; } = new FTTClassMapper();

        protected FTTStyleMapper SurfaceStyleMapper { get; } = new FTTStyleMapper();

        public FTTDialogComponent()
        {
            SurfaceClassMapper
                .Add("ftt-blazor-dialog__surface")
                .Get(() => SurfaceClass);

            SurfaceStyleMapper
                .Get(() => SurfaceStyle);

            ClassMapper.Add("ftt-blazor-dialog");
            CallAfterRender(async () =>
            {
                dotNetObjectRef ??= CreateDotNetObjectRef(this);
                await JsInvokeAsync<object>("FTTBlazor.Dialog.init", Ref, dotNetObjectRef);
            });
        }

        public override void Dispose()
        {
            base.Dispose();
            DisposeDotNetObjectRef(dotNetObjectRef);
        }
    }

    public class FTTStyleMapper : FTTBaseMapper
    {
        public string AsString()
        {
            return string.Join("; ", Items.Select(i => i()).Where(i => i != null));
        }
    }

    public class FTTClassMapper : FTTBaseMapper
    {
        public string AsString()
        {
            return string.Join(" ", Items.Select(i => i()).Where(i => i != null));
        }
    }

    public class FTTBaseMapper
    {
        public List<Func<string>> Items = new List<Func<string>>();
    }

    public static class BaseMapperExtensions
    {
        public static T Add<T>(this T m, string name) where T : FTTBaseMapper
        {
            m.Items.Add(() => name);
            return m;
        }

        public static T Get<T>(this T m, Func<string> funcName) where T : FTTBaseMapper
        {
            m.Items.Add(funcName);
            return m;
        }
    }
}