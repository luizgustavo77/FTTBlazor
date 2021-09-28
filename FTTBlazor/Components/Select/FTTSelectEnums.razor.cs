using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace FTTBlazor.Components.Select
{


    public partial class FTTSelectEnums<T> : ComponentBase where T : struct, IConvertible
    {
        public bool Show { get; set; }

        protected override void OnInitialized()
        {
            base.OnInitialized();
        }


        private string strEnum;

        private bool _IsReadOnly;

        [Parameter]
        public bool IsReadOnly
        {
            get { return _IsReadOnly; }
            set { _IsReadOnly = value; }
        }


        [Parameter]
        public T Value
        {
            get { return Enum.Parse<T>(strEnum); }
            set {  

                if (strEnum == value.ToString()) return;



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

        public string data_id { get; set; } = "00000000-0000-0000-0000-000000000000";


        [Parameter]
        public EventCallback<T> ValueChanged { get; set; }



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

            // attributes.Add(new KeyValuePair<string, object>("data-desc", DataDesc));

        }

        private string _id { get; set; }

        [Parameter]
        public string Title { get; set; }

        [Parameter]
        public bool Disabled { get; set; } = false;


        public IEnumerable<T> DataSource { get; set; }

        [Parameter]
        public bool Required { get; set; } = false;

        private List<KeyValuePair<string, object>> attributes;
        protected virtual bool ValidateCurrentValue(T value)
        {
            return true;
        }

        private Guid _dataid;


        [Parameter] public EventCallback OnItemSelected { get; set; }


        [Parameter]
        public string Size { get; set; } = "4";

        [Parameter]
        public bool BorderRight { get; set; }

        private string BorderRightCssClass { get { return BorderRight ? "nexto-border-right" : ""; } }




    }

}