namespace FTTBlazor.Components.Forms.Input
{
    public partial class FTTCheckbox : ComponentBase
    {
        [Parameter]
        public bool IsReadOnly
        {
            get => _IsReadOnly;
            set => _IsReadOnly = value;
        }
        private bool _IsReadOnly;

        [Parameter]
        public string Label
        {
            get => _label;
            set => _label = value;
        }
        private string _label;

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

        [Parameter]
        public EventCallback<bool> ValueChanged { get; set; }

        [Parameter]
        public EventCallback OnValueChanged { get; set; }

        [Parameter]
        public string Size { get; set; } = "4";

        [Parameter]
        public string Pattern { get; set; } = "";

        [Parameter]
        public bool Required { get; set; } = false;

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
