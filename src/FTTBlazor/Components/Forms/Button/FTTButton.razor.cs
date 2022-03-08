using Microsoft.AspNetCore.Components;
using System;
using System.Threading.Tasks;

namespace FTTBlazor
{
    public partial class FTTButton : ComponentBase
    {
        /// <summary>
        /// Disable the component
        /// </summary>
        [Parameter]
        public bool IsReadOnly
        {
            get => _IsReadOnly;
            set => _IsReadOnly = value;
        }
        private bool _IsReadOnly;

        /// <summary>
        /// Label text
        /// </summary>
        [Parameter]
        public string Label
        {
            get => _label;
            set => _label = value;
        }
        private string _label;

        /// <summary>
        /// Add the onclick method call
        /// </summary>
        [Parameter]
        public EventCallback OnClick { get; set; }

        /// <summary>
        /// Component size
        /// </summary>
        [Parameter]
        public string Size { get; set; } = "4";

        /// <summary>
        /// Defines the BUTTON type
        /// </summary>
        [Parameter]
        public ButtonType Type { get; set; } = ButtonType.button;

        private string _id { get; set; }

        protected override async Task OnInitializedAsync()
        {
            _id = Guid.NewGuid().ToString();
        }

        protected override async Task OnParametersSetAsync()
        {

        }
    }

    public enum ButtonType
    {
        button,
        submit
    }
}
