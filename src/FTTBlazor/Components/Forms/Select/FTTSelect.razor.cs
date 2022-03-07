using FTTBlazor.Common.Core;
using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace FTTBlazor.Components.Forms.Select
{
    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T">Entity that will assemble the DDL (Data Definition Language)</typeparam>
    public partial class FTTSelect<T> : ComponentBase where T : FTTEntity
    {
        /// <summary>
        /// Endpoint to make a GET request
        /// </summary>
        [Parameter]
        public string DataSourceEndpoint { get; set; }

        /// <summary>
        /// Adds a JWT to the request
        /// </summary>
        [Parameter]
        public string TokenProvider { get; set; }

        /// <summary>
        /// Specifies a filter to return those elements for which the expression is true
        /// </summary>
        [Parameter]
        public Func<T, bool> Filter { get; set; }

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
        public string Label { get; set; }

        /// <summary>
        /// Binds the id veriable to the component
        /// </summary>
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

        /// <summary>
        /// Allows calling a method when switching items
        /// </summary>
        [Parameter]
        public EventCallback OnItemSelected { get; set; }

        [Parameter]
        public EventCallback<string> DataIdChanged { get; set; }

        /// <summary>
        /// Binds the descriptions variable to the component
        /// </summary>
        [Parameter]
        public string DataDesc
        {
            get => _datadesc;

            set => _datadesc = value;
        }
        private string _datadesc = "";

        /// <summary>
        /// Sets the element size
        /// </summary>
        [Parameter]
        public string Size { get; set; } = "4";

        [Parameter]
        public EventCallback<string> DataDescChanged { get; set; }

        /// <summary>
        /// Adds a border on the right
        /// </summary>
        [Parameter]
        public bool BorderRight { get; set; }
        private string BorderRightCssClass => BorderRight ? "ftt-blazor-border-right" : "";

        /// <summary>
        /// Defines the name of the bariable that will show in the DDL
        /// </summary>
        [Parameter]
        public string DataSourceDescField { get; set; } = "Name";

        [Parameter]
        public IEnumerable<T> DataSource { get; set; }

        /// <summary>
        /// Boolean attribute that specifies that the field must be filled out before submitting the form
        /// </summary>
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
                HttpClient client = new HttpClient();

                if (!string.IsNullOrWhiteSpace(TokenProvider))
                {
                    Console.WriteLine("Tem token");
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", TokenProvider);
                }

                Console.WriteLine("Fazendo requisição");
                IEnumerable<T> list = await client.GetFromJsonAsync<IEnumerable<T>>(DataSourceEndpoint);

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
                T curritem = DataSource.FirstOrDefault(e => e.Id == _ItemId);

                string datadesc = (string)typeof(T).GetProperty(DataSourceDescField).GetValue(curritem);

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