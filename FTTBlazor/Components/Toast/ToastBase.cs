using Microsoft.AspNetCore.Components;
using System;

namespace FTTBlazor
{
    public class ToastBase : ComponentBase, IDisposable
    {
        [Inject] FTTToastService ToastService { get; set; }

        protected string Heading { get; set; }
        protected string Message { get; set; }
        protected bool IsVisible { get; set; }
        protected string BackgroundCssClass { get; set; }
        protected string IconCssClass { get; set; }

        protected override void OnInitialized()
        {
            ToastService.OnShow += ShowToast;
            ToastService.OnHide += HideToast;
        }

        private void ShowToast(string message, FTTToastEnum level)
        {
            BuildToastSettings(level, message);
            IsVisible = true;
            InvokeAsync(StateHasChanged);
        }

        private void HideToast()
        {
            IsVisible = false;
            InvokeAsync(StateHasChanged);
        }

        private void BuildToastSettings(FTTToastEnum level, string message)
        {
            switch (level)
            {
                case FTTToastEnum.Info:
                    BackgroundCssClass = "toast-info";
                    IconCssClass = "info";
                    Heading = "Info";
                    break;
                case FTTToastEnum.Success:
                    BackgroundCssClass = "toast-success";
                    IconCssClass = "check_circle";
                    Heading = "Success";
                    break;
                case FTTToastEnum.Warning:
                    BackgroundCssClass = "toast-warning";
                    IconCssClass = "warning";
                    Heading = "Warning";
                    break;
                case FTTToastEnum.Error:
                    BackgroundCssClass = "toast-danger";
                    IconCssClass = "error";
                    Heading = "Error";
                    break;
            }

            Message = message;
        }

        public void Dispose()
        {
            ToastService.OnShow -= ShowToast;
        }
    }
    public enum FTTToastEnum
    {
        Info,
        Success,
        Warning,
        Error
    }
}
