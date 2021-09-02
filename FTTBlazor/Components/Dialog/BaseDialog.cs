using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace FTTBlazorComponent
{
    public class BaseDialog : BaseDomComponent
    {
        [JSInvokable]
        public async Task MatDialogClosedHandler()
        {
            _isOpen = false;
            await IsOpenChanged.InvokeAsync(false);
            StateHasChanged();
        }

        [JSInvokable]
        public async Task MatDialogOpenedHandler()
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
                        await JsInvokeAsync<object>("FTTBlazor.matDialog.setIsOpen", Ref, value);
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
                    return;

                _canBeClosed = value;
                CallAfterRender(async () =>
                {
                    await JsInvokeAsync<object>("FTTBlazor.matDialog.setCanBeClosed", Ref, value);
                });
            }
        }

        [Parameter]
        public string SurfaceClass { get; set; }

        [Parameter]
        public string SurfaceStyle { get; set; }

        public const bool CanBeClosedDefault = true;

        private bool _canBeClosed = CanBeClosedDefault;

        private bool _isOpen;

        private DotNetObjectReference<BaseDialog> dotNetObjectRef;

        protected ClassMapper SurfaceClassMapper { get; } = new ClassMapper();

        protected StyleMapper SurfaceStyleMapper { get; } = new StyleMapper();

        public BaseDialog()
        {
            SurfaceClassMapper
                .Add("mdc-dialog__surface")
                .Get(() => SurfaceClass);

            SurfaceStyleMapper
                .Get(() => SurfaceStyle);

            ClassMapper.Add("mdc-dialog");
            CallAfterRender(async () =>
            {
                dotNetObjectRef ??= CreateDotNetObjectRef(this);
                await JsInvokeAsync<object>("FTTBlazor.matDialog.init", Ref, dotNetObjectRef);
            });
        }

        public override void Dispose()
        {
            base.Dispose();
            DisposeDotNetObjectRef(dotNetObjectRef);
        }
    }
}