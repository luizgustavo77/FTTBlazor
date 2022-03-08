using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FTTBlazor
{
    public partial class FTTCalendar : ComponentBase
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
        public DateTime? Value
        {
            get => _value;
            set
            {
                if (value.HasValue)
                {


                    if (_value == value.Value)
                    {
                        return;
                    }

                    _value = value.Value;
                }
                else
                {
                    _value = new DateTime();
                }
            }
        }
        private DateTime _value;

        /// <summary>
        /// Method callback when value has changed
        /// </summary>
        [Parameter]
        public EventCallback<DateTime> ValueChanged { get; set; }

        /// <summary>
        /// Determines whether filling in the field is mandatory or not
        /// </summary>
        [Parameter]
        public bool Required { get; set; } = false;

        /// <summary>
        /// Sets the element size
        /// </summary>
        [Parameter]
        public string Size { get; set; } = "4";

        /// <summary>
        /// Adds a border on the right
        /// </summary>
        [Parameter]
        public bool BorderRight { get; set; }
        private string BorderRightCssClass => BorderRight ? "ftt-blazor-border-right" : "";

        /// <summary>
        /// Validation pattern for input content
        /// </summary>
        [Parameter]
        public string Pattern { get; set; } = "";

        private string _id { get; set; }

        private string StyleReadOnly => _IsReadOnly ? "cursor: not-allowed" : "";

        private List<KeyValuePair<string, object>> attributes;

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
