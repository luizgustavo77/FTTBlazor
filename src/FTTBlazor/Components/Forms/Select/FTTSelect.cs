using FTTBlazor.Common.Core;

namespace FTTBlazor.Components.Forms.Select
{
    public partial class FTTSelect<T> : ComponentBase where T : FTTEntity
    {
        [Parameter]
        public string DataSourceEndpoint { get; set; }

        [Parameter]
        public string TokenProvider { get; set; }

        [Parameter]
        public Func<T, bool> Filter { get; set; }

        [Parameter]
        public bool IsReadOnly
        {
            get => _IsReadOnly;
            set => _IsReadOnly = value;
        }

        private bool _IsReadOnly;

        [Parameter]
        public string Label { get; set; }

        [Parameter]
        public string DataId
        {
            get => _dataid;

            set
            {
                _dataid = value;
                ItemId = value;
            }
        }

        private string _dataid;

        [Parameter]
        public EventCallback OnItemSelected { get; set; }

        [Parameter]
        public EventCallback<string> DataIdChanged { get; set; }

        [Parameter]
        public string DataDesc
        {
            get => _datadesc;

            set => _datadesc = value;
        }

        private string _datadesc = "";

        [Parameter]
        public string Size { get; set; } = "4";

        [Parameter]
        public EventCallback<string> DataDescChanged { get; set; }

        [Parameter]
        public bool BorderRight { get; set; }

        private string BorderRightCssClass => BorderRight ? "ftt-blazor-border-right" : "";

        [Parameter]
        public string DataSourceDescField { get; set; } = "Name";

        [Parameter]
        public IEnumerable<T> DataSource { get; set; }

        [Parameter]
        public bool Required { get; set; } = false;

        private string _id { get; set; }

        private List<KeyValuePair<string, object>> attributes;

        public string _ItemId = "";

        public string ItemId
        {
            get => _ItemId;
            set
            {
                _ItemId = value;
                if (DataId != value)
                {
                    ChangedItem();
                }
            }
        }

        protected override void OnInitialized()
        {
            base.OnInitialized();
        }

        protected override async Task OnInitializedAsync()
        {
            await base.OnInitializedAsync();

            _id = Guid.NewGuid().ToString();

            attributes = new List<KeyValuePair<string, object>>();

            if (Required)
            {
                attributes.Add(new KeyValuePair<string, object>("required", "required"));
            }

            await loadData();
        }

        private async Task loadData()
        {

            if (DataSourceEndpoint != null)
            {
                var client = new HttpClient();

                if (!string.IsNullOrWhiteSpace(TokenProvider))
                {
                    Console.WriteLine("Tem token");
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", TokenProvider);
                }

                Console.WriteLine("Fazendo requisição");
                var list = await client.GetFromJsonAsync<IEnumerable<T>>(DataSourceEndpoint);

                Console.WriteLine("Pego e veio: " + list.Count());
                DataSource = list;
                if (Filter != null)
                {
                    DataSource = DataSource.Where(Filter);
                }

            }
        }

        protected virtual bool ValidateCurrentValue(T value)
        {
            return true;
        }

        private void ChangedItem()
        {
            if (!string.IsNullOrEmpty(_ItemId) && _ItemId != "00000000-0000-0000-0000-000000000000")
            {
                var curritem = DataSource.FirstOrDefault(e => e.Id == _ItemId);

                var datadesc = (string)typeof(T).GetProperty(DataSourceDescField).GetValue(curritem);

                if (DataId != _ItemId)
                {
                    DataIdChanged.InvokeAsync(_ItemId);
                    OnItemSelected.InvokeAsync(null);
                }

                if (DataDesc != datadesc)
                {
                    DataDescChanged.InvokeAsync(datadesc);
                }
            }
        }
    }
}