using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FTTBlazor
{
    public partial class FTTCheckbox : ComponentBase
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
        public bool Value
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
                OnValueChanged.InvokeAsync(null);
            }
        }
        private bool _value;

        /// <summary>
        /// Method callback when value has changed
        /// </summary>
        [Parameter]
        public EventCallback<bool> ValueChanged { get; set; }

        /// <summary>
        /// Callback method can be added to the OnValueChanged attribute
        /// </summary>
        [Parameter]
        public EventCallback OnValueChanged { get; set; }

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

        /// <summary>
        /// Determines whether filling in the field is mandatory or not
        /// </summary>
        [Parameter]
        public bool Required { get; set; } = false;

        /// <summary>
        /// Binds a value to a variable
        /// </summary>
        [Parameter]
        public bool BorderRight { get; set; }
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
