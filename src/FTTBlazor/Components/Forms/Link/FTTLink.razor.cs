using FTTBlazor.Common.Core;
using Microsoft.AspNetCore.Components;
using System;

namespace FTTBlazor
{
    public partial class FTTLink<T> : ComponentBase where T : FTTEntity
    {
        /// <summary>
        /// Add modal content
        /// </summary>
        [Parameter]
        public RenderFragment Body { get; set; }

        /// <summary>
        /// Add modal footer content
        /// </summary>
        [Parameter]
        public RenderFragment Footer { get; set; }

        /// <summary>
        /// Set modal title and LINK label
        /// </summary>
        [Parameter]
        public string Title { get; set; }

        /// <summary>
        /// Set the link name
        /// </summary>
        [Parameter]
        public string LabelLink { get; set; }

        /// <summary>
        /// Component size in view page
        /// </summary>
        [Parameter]
        public string Size { get; set; } = "4";

        /// <summary>
        /// LINK icon
        /// </summary>
        [Parameter]
        public string Icon { get; set; } = "visibility";

        /// <summary>
        /// Binds a value to a variable
        /// </summary>
        [Parameter]
        public bool BorderRight { get; set; } = false;
        private string BorderRightCssClass => BorderRight ? "ftt-blazor-border-right" : "";

        private string _id { get; set; } = Guid.NewGuid().ToString();

        private bool DialogIsOpen { get; set; }

        protected override void OnInitialized()
        {
            base.OnInitialized();
        }
    }
}