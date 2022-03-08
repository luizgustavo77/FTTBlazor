using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FTTBlazor
{
    public partial class FTTSelectArray : ComponentBase
    {
        /// <summary>
        /// Allows calling a method when switching items
        /// </summary>
        [Parameter]
        public EventCallback OnItemSelected { get; set; }

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
        /// Boolean value that makes the element not mutable (the user can not edit it)
        /// </summary>
        [Parameter]
        public bool IsReadOnly
        {
            get => _IsReadOnly;
            set => _IsReadOnly = value;
        }
        private bool _IsReadOnly;

        private string StyleIsReadOnly => _IsReadOnly ? "not-allowed" : "";

        /// <summary>
        /// Binds a value to a variable that can be used in the "OnItemSelected" call
        /// </summary>
        [Parameter]
        public string Value { get; set; }
        public string _Value
        {
            get => _value;
            set
            {

                if (value != null)
                {


                    if (!string.IsNullOrEmpty(value))
                    {
                        data_id = value;
                    }
                    else
                    {
                        data_id = "00000000-0000-0000-0000-000000000000";
                    }

                    if (_value == value)
                    {
                        return;
                    }

                    _value = value;
                    ValueChanged.InvokeAsync(value);
                }

            }
        }

        [Parameter]
        public EventCallback<string> ValueChanged { get; set; }

        /// <summary>
        /// Label text
        /// </summary>
        [Parameter]
        public string Label { get; set; }

        /// <summary>
        /// Boolean attribute that specifies that the field must be filled out before submitting the form
        /// </summary>
        [Parameter]
        public bool Required { get; set; } = false;

        /// <summary>
        /// Defines the name of the variable that will assemble the DDL (Data Definition Language)
        /// </summary>
        [Parameter]
        public string[] Data { get; set; }

        public string[] DataSource { get; set; }

        private string _value = "";

        public string data_id { get; set; } = "00000000-0000-0000-0000-000000000000";

        private readonly Guid _dataid;

        private string _id { get; set; }

        private List<KeyValuePair<string, object>> attributes;

        protected override void OnInitialized()
        {
            base.OnInitialized();
        }

        protected override async Task OnInitializedAsync()
        {
            await base.OnInitializedAsync();

            DataSource = Data;

            _Value = Value;

            attributes = new List<KeyValuePair<string, object>>();

            if (Required)
            {
                attributes.Add(new KeyValuePair<string, object>("required", "required"));
            }

            _id = Guid.NewGuid().ToString();
        }

        protected virtual bool ValidateCurrentValue(string value)
        {
            return true;
        }
    }
}