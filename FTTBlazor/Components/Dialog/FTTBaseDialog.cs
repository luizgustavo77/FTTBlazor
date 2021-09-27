﻿using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace FTTBlazor
{
    public class FTTBaseDialog : BaseDomComponent
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
                    return;

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

        private DotNetObjectReference<FTTBaseDialog> dotNetObjectRef;

        protected FTTClassMapper SurfaceClassMapper { get; } = new FTTClassMapper();

        protected FTTStyleMapper SurfaceStyleMapper { get; } = new FTTStyleMapper();

        public FTTBaseDialog()
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
}