using Microsoft.AspNetCore.Components;
using System;

namespace FTTBlazor.Components.Modal.Service
{
    public class FTTModalService : IFTTModalService
    {
        internal event Action<FTTModalReference> OnModalInstanceAdded;

        internal event Action<FTTModalReference, FTTModalResult> OnModalCloseRequested;

        private FTTModalReference ShowModal(Type contentComponent, string title, FTTModalParameters parameters, FTTModalOptions options)
        {
            if (!typeof(ComponentBase).IsAssignableFrom(contentComponent))
            {
                throw new ArgumentException($"{contentComponent.FullName} must be a Blazor Component");
            }

            var modalInstanceId = Guid.NewGuid();
            var modalContent = new RenderFragment(builder =>
            {
                var i = 0;
                builder.OpenComponent(i++, contentComponent);
                foreach (var parameter in parameters._parameters)
                {
                    builder.AddAttribute(i++, parameter.Key, parameter.Value);
                }
                builder.CloseComponent();
            });
            var modalInstance = new RenderFragment(builder =>
            {
                builder.OpenComponent<FTTModalInstance>(0);
                builder.AddAttribute(1, "Options", options);
                builder.AddAttribute(2, "Title", title);
                builder.AddAttribute(3, "Content", modalContent);
                builder.AddAttribute(4, "uId", modalInstanceId);
                builder.CloseComponent();
            });
            var modalReference = new FTTModalReference(modalInstanceId, modalInstance, this);

            OnModalInstanceAdded?.Invoke(modalReference);

            return modalReference;
        }

        public FTTModalReference Show(Type Screen, string Title, Guid Id, bool isReadOnly = false)
        {
            var parameters = new FTTModalParameters();

            parameters.Add("Id", Id);


            var opts = new FTTModalOptions() { Class = Screen.Name.ToString() };

            return ShowModal(Screen, Title, parameters, opts);
        }

        public FTTModalReference Show(Type Screen, string Title, object Item, bool isReadOnly = false)
        {
            var parameters = new FTTModalParameters();

            parameters.Add("Item", Item);

            var opts = new FTTModalOptions() { Class = Screen.Name.ToString() };

            return ShowModal(Screen, Title, parameters, opts);
        }

        public FTTModalReference Show(Type Screen, string Title)
        {
            var parameters = new FTTModalParameters();

            var opts = new FTTModalOptions() { Class = Screen.Name.ToString() };

            return ShowModal(Screen, Title, parameters, opts);
        }

        internal void Close(FTTModalReference modal)
        {
            Close(modal, FTTModalResult.Ok<object>(null));
        }

        internal void Close(FTTModalReference modal, FTTModalResult result)
        {
            OnModalCloseRequested?.Invoke(modal, result);
        }
    }
}
