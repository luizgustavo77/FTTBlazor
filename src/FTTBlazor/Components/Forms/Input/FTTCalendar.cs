using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FTTBlazor.Components.Forms.Input
{
    public partial class FTTCalendar : ComponentBase
    {
        [Parameter]
        public bool IsReadOnly
        {
            get { return _IsReadOnly; }
            set { _IsReadOnly = value; }
        }
        private bool _IsReadOnly;

        [Parameter]
        public string Label
        {
            get { return _label; }
            set { _label = value; }
        }
        private string _label;

        [Parameter]
        public DateTime? Value
        {
            get { return _value; }
            set
            {
                if (value.HasValue)
                {


                    if (_value == value.Value) return;

                    _value = value.Value;
                }
                else
                {
                    _value = new DateTime();
                }
            }
        }
        private DateTime _value;

        [Parameter]
        public EventCallback<DateTime> ValueChanged { get; set; }

        [Parameter]
        public bool Required { get; set; } = false;

        [Parameter]
        public string Size { get; set; } = "4";

        [Parameter]
        public bool BorderRight { get; set; }
        private string BorderRightCssClass { get { return BorderRight ? "ftt-blazor-border-right" : ""; } }

        [Parameter]
        public string Pattern { get; set; } = "";

        private string _id { get; set; }

        string StyleReadOnly { get { return _IsReadOnly ? "cursor: not-allowed" : ""; } }

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
