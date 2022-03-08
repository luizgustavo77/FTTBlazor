using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FTTBlazor
{
    public partial class FTTNumber : ComponentBase
    {
        /// <summary>
        /// Boolean value that makes the element not mutable (the user can not edit it)
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
        /// Binds a value to a variable
        /// </summary>
        [Parameter]
        public int Value
        {
            get => _value;
            set
            {
                if (_value == value)
                {
                    return;
                }

                _value = value;
                ValueChanged.InvokeAsync(value);
            }
        }
        private int _value;

        /// <summary>
        /// Method callback when value has changed
        /// </summary>
        [Parameter]
        public EventCallback<int> ValueChanged { get; set; }

        /// <summary>
        /// Callback method can be added to the FocusOut attribute
        /// </summary>
        [Parameter]
        public EventCallback<int> OnFocusOut { get; set; }

        /// <summary>
        /// Callback method can be added to the OnInput attribute
        /// </summary>
        [Parameter]
        public EventCallback<int> OnInput { get; set; }

        /// <summary>
        /// Sets the element size
        /// </summary>
        [Parameter]
        public string Size { get; set; } = "4";

        /// <summary>
        /// Validation pattern for input content
        /// </summary>
        [Parameter]
        public string Pattern { get; set; } = "";

        [Parameter]
        public string MaxLength { get; set; }

        /// <summary>
        /// Determines whether filling in the field is mandatory or not
        /// </summary>
        [Parameter]
        public bool Required { get; set; } = false;

        /// <summary>
        /// Adds a border on the right
        /// </summary>
        [Parameter]
        public bool BorderRight { get; set; }

        /// <summary>
        /// Determines the input type
        /// </summary>
        [Parameter]
        public InputType Type { get; set; } = InputType.Input;

        /// <summary>
        /// Icon can be added at the end of the input
        /// </summary>
        [Parameter]
        public string Icon { get; set; }

        /// <summary>
        /// Callback method can be added to the icon IconClick attribute
        /// </summary>
        [Parameter]
        public EventCallback IconClick { get; set; }

        /// <summary>
        /// Add a set of styles to the component
        /// </summary>
        [Parameter]
        public string CssClass { get; set; }

        private string BorderRightCssClass => BorderRight ? "ftt-blazor-border-right" : "";

        private List<KeyValuePair<string, object>> attributes;

        private string _id { get; set; }

        protected override async Task OnInitializedAsync()
        {
            attributes = new List<KeyValuePair<string, object>>();

            if (Required)
            {
                attributes.Add(new KeyValuePair<string, object>("required", "required"));
            }

            if (!string.IsNullOrEmpty(Pattern))
            {
                attributes.Add(new KeyValuePair<string, object>("pattern", Pattern));
            }

            _id = Guid.NewGuid().ToString();
        }

        protected override async Task OnParametersSetAsync()
        {

        }
    }
}
