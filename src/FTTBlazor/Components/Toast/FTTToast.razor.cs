using Microsoft.AspNetCore.Components;
using System;

namespace FTTBlazor.Components.Toast
{
    public partial class FTTToast : ComponentBase, IDisposable
    {
        [Inject] private FTTToastService ToastService { get; set; }

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

        /// <summary>
        /// 
        /// </summary>
        /// <param name="message">Message that will be displayed when loading the Toast component</param>
        /// <param name="level">Notification type. The accepted notification types</param>
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
                    BackgroundCssClass = "ftt-blazor-toast-info";
                    IconCssClass = "info";
                    Heading = "Info";
                    break;
                case FTTToastEnum.Success:
                    BackgroundCssClass = "ftt-blazor-toast-success";
                    IconCssClass = "check_circle";
                    Heading = "Success";
                    break;
                case FTTToastEnum.Warning:
                    BackgroundCssClass = "ftt-blazor-toast-warning";
                    IconCssClass = "warning";
                    Heading = "Warning";
                    break;
                case FTTToastEnum.Error:
                    BackgroundCssClass = "ftt-blazor-toast-danger";
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
