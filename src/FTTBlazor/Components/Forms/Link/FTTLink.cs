using FTTBlazor.Core;
using Microsoft.AspNetCore.Components;
using System;

namespace FTTBlazor.Components.Forms.Link
{
    public partial class FTTLink<T> : ComponentBase where T : FTTEntity
    {
        [Parameter]
        public RenderFragment Body { get; set; }

        [Parameter]
        public RenderFragment Footer { get; set; }

        [Parameter]
        public string Title { get; set; }

        [Parameter]
        public string LabelLink { get; set; }

        [Parameter]
        public string Size { get; set; } = "4";

        [Parameter]
        public string Icon { get; set; } = "visibility";

        [Parameter]
        public bool BorderRight { get; set; } = false;
        private string BorderRightCssClass { get { return BorderRight ? "ftt-blazor-border-right" : ""; } }

        private string _id { get; set; } = Guid.NewGuid().ToString();

        bool DialogIsOpen { get; set; }

        protected override void OnInitialized()
        {
            base.OnInitialized();
        }
    }
}