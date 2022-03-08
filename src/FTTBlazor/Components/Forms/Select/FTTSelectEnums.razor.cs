using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FTTBlazor
{
    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T">Enum that will assemble the DDL (Data Definition Language)</typeparam>
    public partial class FTTSelectEnums<T> : ComponentBase where T : struct, IConvertible
    {
        /// <summary>
        /// Label text
        /// </summary>
        [Parameter]
        public string Label { get; set; }

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
        ///  Binds a value to a variable that can be used in the "OnItemSelected" call
        /// </summary>
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

        /// <summary>
        /// Boolean attribute that specifies that the field must be filled out before submitting the form
        /// </summary>
        [Parameter]
        public bool Required { get; set; } = false;

        private string strEnum;

        public string data_id { get; set; } = "00000000-0000-0000-0000-000000000000";

        private string _id { get; set; }

        public IEnumerable<T> DataSource { get; set; }

        private readonly Guid _dataid;

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