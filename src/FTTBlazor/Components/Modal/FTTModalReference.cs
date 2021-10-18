using Microsoft.AspNetCore.Components;
using System;
using System.Threading.Tasks;
using FTTBlazor.Components.Modal.Service;

namespace FTTBlazor.Components.Modal
{
    public class FTTModalReference
    {
        private readonly TaskCompletionSource<FTTModalResult> _resultCompletion = new TaskCompletionSource<FTTModalResult>();

        private readonly Action<FTTModalResult> _closed;

        private readonly FTTModalService _modalService;

        public FTTModalReference(Guid modalInstanceId, RenderFragment modalInstance, FTTModalService modalService)
        {
            Id = modalInstanceId;
            ModalInstance = modalInstance;
            _closed = HandleClosed;
            _modalService = modalService;
        }

        public void Close()
        {
            _modalService.Close(this);
        }

        public void Close(FTTModalResult result)
        {
            _modalService.Close(this, result);
        }

        private void HandleClosed(FTTModalResult obj)
        {
            _ = _resultCompletion.TrySetResult(obj);
        }

        internal Guid Id { get; }

        internal RenderFragment ModalInstance { get; }

        public Task<FTTModalResult> Result => _resultCompletion.Task;

        internal void Dismiss(FTTModalResult result)
        {
            _closed.Invoke(result);
        }
    }
}
