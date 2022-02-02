namespace FTTBlazor.Components.Forms.Select
{
    public partial class FTTSelectEnums<T> : ComponentBase where T : struct, IConvertible
    {
        [Parameter]
        public string Label { get; set; }

        [Parameter]
        public EventCallback OnItemSelected { get; set; }

        [Parameter]
        public string Size { get; set; } = "4";

        [Parameter]
        public bool BorderRight { get; set; }

        [Parameter]
        public bool IsReadOnly
        {
            get => _IsReadOnly;
            set => _IsReadOnly = value;
        }
        private bool _IsReadOnly;

        private string StyleIsReadOnly => _IsReadOnly ? "not-allowed" : "";

        [Parameter]
        public T Value
        {
            get => Enum.Parse<T>(strEnum);
            set
            {

                if (strEnum == value.ToString())
                {
                    return;
                }

                if (!string.IsNullOrEmpty(value.ToString()))
                {
                    data_id = value.ToString();
                }
                else
                {
                    data_id = "00000000-0000-0000-0000-000000000000";
                }


                strEnum = value.ToString();
                ValueChanged.InvokeAsync(value);

                OnItemSelected.InvokeAsync(null);
            }
        }

        [Parameter]
        public EventCallback<T> ValueChanged { get; set; }

        [Parameter]
        public bool Required { get; set; } = false;

        private string strEnum;

        public string data_id { get; set; } = "00000000-0000-0000-0000-000000000000";

        private string _id { get; set; }

        public IEnumerable<T> DataSource { get; set; }

        private Guid _dataid;

        private string BorderRightCssClass => BorderRight ? "ftt-blazor-border-right" : "";

        private List<KeyValuePair<string, object>> attributes;

        protected override async Task OnInitializedAsync()
        {
            await base.OnInitializedAsync();

            DataSource = Enum.GetValues(typeof(T)).Cast<T>().ToArray();

            _id = Guid.NewGuid().ToString();

            attributes = new List<KeyValuePair<string, object>>();

            if (Required)
            {
                attributes.Add(new KeyValuePair<string, object>("required", "required"));
            }
        }

        protected override void OnInitialized()
        {
            base.OnInitialized();
        }

        protected virtual bool ValidateCurrentValue(T value)
        {
            return true;
        }

    }
}