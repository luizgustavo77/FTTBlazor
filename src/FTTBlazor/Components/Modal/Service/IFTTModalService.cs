using System;

namespace FTTBlazor.Components.Modal.Service
{
    public interface IFTTModalService
    {
        FTTModalReference Show(Type Screen, string Title, Guid Id, bool isReadOnly = false);

        FTTModalReference Show(Type Screen, string Title, object Item, bool isReadOnly = false);

        FTTModalReference Show(Type Screen, string Title);
    }
}
