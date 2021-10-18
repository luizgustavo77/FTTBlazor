using FTTBlazor.Components.Modal.Service;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.ObjectModel;
using System.Linq;

namespace FTTBlazor.Components.Modal
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddModalService(this IServiceCollection services)
        {
            return services.AddScoped<IFTTModalService, FTTModalService>();
        }
    }

    public partial class FTTModal : ComponentBase
    {
        [Inject] 
        private IFTTModalService ModalService { get; set; }

        [Inject] 
        private NavigationManager NavigationManager { get; set; }

        [Parameter] 
        public bool? HideHeader { get; set; }

        [Parameter] 
        public bool? HideCloseButton { get; set; }

        [Parameter] 
        public bool? DisableBackgroundCancel { get; set; }

        [Parameter] 
        public FTTModalPosition? Position { get; set; }

        [Parameter] 
        public string Class { get; set; }

        private readonly Collection<FTTModalReference> Modals = new Collection<FTTModalReference>();
        private readonly FTTModalOptions GlobalFTTModalOptions = new FTTModalOptions();

        protected override void OnInitialized()
        {
            ((FTTModalService)ModalService).OnModalInstanceAdded += Update;
            ((FTTModalService)ModalService).OnModalCloseRequested += CloseInstance;
            NavigationManager.LocationChanged += CancelModals;

            GlobalFTTModalOptions.Class = Class;
            GlobalFTTModalOptions.DisableBackgroundCancel = DisableBackgroundCancel;
            GlobalFTTModalOptions.HideCloseButton = HideCloseButton;
            GlobalFTTModalOptions.HideHeader = HideHeader;
            GlobalFTTModalOptions.Position = Position;
        }

        internal void CloseInstance(FTTModalReference modal, FTTModalResult result)
        {
            DismissInstance(modal.Id, result);
        }

        internal void CloseInstance(Guid Id)
        {
            DismissInstance(Id, FTTModalResult.Ok<object>(null));
        }

        internal void CancelInstance(Guid Id)
        {
            DismissInstance(Id, FTTModalResult.Cancel());
        }

        internal void DismissInstance(Guid Id, FTTModalResult result)
        {
            var reference = Modals.SingleOrDefault(x => x.Id == Id);

            if (reference != null)
            {
                reference.Dismiss(result);
                Modals.Remove(reference);
                this.StateHasChanged();
            }
        }

        private async void CancelModals(object sender, LocationChangedEventArgs e)
        {
            foreach (var modalReference in Modals)
            {
                modalReference.Dismiss(FTTModalResult.Cancel());
            }

            Modals.Clear();
            await InvokeAsync(StateHasChanged);
        }

        private async void Update(FTTModalReference modalReference)
        {
            Modals.Add(modalReference);
            await InvokeAsync(StateHasChanged);
        }
    }
    
    public class FTTModalOptions
    {
        public FTTModalPosition? Position { get; set; }
        public string Class { get; set; }
        public bool? DisableBackgroundCancel { get; set; }
        public bool? HideHeader { get; set; }
        public bool? HideCloseButton { get; set; }
    }

    public enum FTTModalPosition
    {
        Center,
        TopLeft,
        TopRight,
        BottomLeft,
        BottomRight
    }
}
