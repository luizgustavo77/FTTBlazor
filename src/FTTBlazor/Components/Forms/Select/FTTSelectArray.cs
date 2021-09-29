using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FTTBlazor.Components.Forms.Select
{
    public partial class FTTSelectArray : ComponentBase
    {
        [Parameter]
        public EventCallback OnItemSelected { get; set; }

        [Parameter]
        public string Size { get; set; } = "4";

        [Parameter]
        public bool BorderRight { get; set; }

        private string BorderRightCssClass { get { return BorderRight ? "nexto-border-right" : ""; } }

        [Parameter]
        public bool IsReadOnly
        {
            get { return _IsReadOnly; }
            set { _IsReadOnly = value; }
        }

        private bool _IsReadOnly;

        private string StyleIsReadOnly { get { return _IsReadOnly ? "not-allowed" : ""; } }

        [Parameter]
        public string Value { get; set; }

        public string _Value
        {
            get { return _value; }
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

                    if (_value == value) return;

                    _value = value;
                    ValueChanged.InvokeAsync(value);
                }

            }
        }

        [Parameter]
        public EventCallback<string> ValueChanged { get; set; }

        [Parameter]
        public string Label { get; set; }

        [Parameter]
        public bool Required { get; set; } = false;

        [Parameter]
        public string[] Data { get; set; }

        public string[] DataSource { get; set; }

        private string _value = "";

        private Guid _dataid;

        public string data_id { get; set; } = "00000000-0000-0000-0000-000000000000";

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

            // attributes.Add(new KeyValuePair<string, object>("data-desc", DataDesc));

            _id = Guid.NewGuid().ToString();
        }

        protected virtual bool ValidateCurrentValue(string value)
        {
            return true;
        }
    }
}