using FTTBlazor.Components.Modal.Service;
using FTTBlazor.Core;
using Microsoft.AspNetCore.Components;
using System;
using System.Threading.Tasks;

namespace FTTBlazor.Components.Forms.Link
{
    public partial class FTTLink<T> : ComponentBase where T : Entity
    {
        [Inject]
        private IFTTModalService Modal { get; set; }

        [Parameter]
        public Type LinkModal { get; set; }

        [Parameter]
        public string Title { get; set; }

        [Parameter]
        public string LabelLinkWihtoutItem { get; set; }

        [Parameter]
        public string Size { get; set; } = "4";

        [Parameter]
        public string Icon { get; set; } = "visibility";

        [Parameter]
        public bool BorderRight { get; set; } = false;

        [Parameter]
        public T LinkItem { get; set; }

        private string _id { get; set; } = Guid.NewGuid().ToString();

        private string BorderRightCssClass { get { return BorderRight ? "ftt-blazor-border-right" : ""; } }

        public async Task OpenModal()
        {
            var modal = Modal.Show(LinkModal, Title, LinkItem);
            var modalresult = await modal.Result;

            if (!modalresult.Cancelled)
            {

            }
        }
    }
}