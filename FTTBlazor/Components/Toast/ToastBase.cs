using Microsoft.AspNetCore.Components;
using System;

namespace FTTBlazor
{
    public class ToastBase : ComponentBase, IDisposable
    {
        [Inject] ToastService ToastService { get; set; }

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

        private void ShowToast(string message, ToastEnum level)
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

        private void BuildToastSettings(ToastEnum level, string message)
        {
            switch (level)
            {
                case ToastEnum.Info:
                    BackgroundCssClass = "toast-info";
                    IconCssClass = "info";
                    Heading = "Info";
                    break;
                case ToastEnum.Success:
                    BackgroundCssClass = "toast-success";
                    IconCssClass = "check_circle";
                    Heading = "Success";
                    break;
                case ToastEnum.Warning:
                    BackgroundCssClass = "toast-warning";
                    IconCssClass = "warning";
                    Heading = "Warning";
                    break;
                case ToastEnum.Error:
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
}
