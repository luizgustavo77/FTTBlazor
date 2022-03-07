using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FTTBlazor.Components.Forms.Input
{
    public partial class FTTInput : ComponentBase
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
        public string Value
        {
            get => _value;
            set
            {
                if (_value == value)
                {
                    return;
                }

                if (Type == InputType.Money)
                {
                    value = FormatMoney(value);
                }
                else if (Type == InputType.Phone)
                {
                    value = FormatPhoneNumber(value);
                }
                else if (Type == InputType.CNPJ)
                {
                    value = FormatCNPJ(value);
                }
                else if (Type == InputType.CPF)
                {
                    value = FormatCPF(value);
                }
                else if (Type == InputType.Percentage)
                {
                    value = FormatPercentage(value);
                }
                else if (Type == InputType.CEP)
                {
                    value = FormatCEP(value);
                }

                _value = value;
                ValueChanged.InvokeAsync(value);
            }
        }
        private string _value;

        /// <summary>
        /// Method callback when value has changed
        /// </summary>
        [Parameter]
        public EventCallback<string> ValueChanged { get; set; }

        /// <summary>
        /// Callback method can be added to the FocusOut attribute
        /// </summary>
        [Parameter]
        public EventCallback<string> OnFocusOut { get; set; }

        /// <summary>
        /// Callback method can be added to the OnInput attribute
        /// </summary>
        [Parameter]
        public EventCallback<string> OnInput { get; set; }

        /// <summary>
        /// Sets the element size
        /// </summary>
        [Parameter]
        public string Size { get; set; } = "4";

        /// <summary>
        /// Validation pattern for input content
        /// </summary>
        [Parameter]
        public string Pattern { get; set; } = "";

        [Parameter]
        public string MaxLength { get; set; }

        /// <summary>
        /// Determines whether filling in the field is mandatory or not
        /// </summary>
        [Parameter]
        public bool Required { get; set; } = false;

        /// <summary>
        /// Adds a border on the right
        /// </summary>
        [Parameter]
        public bool BorderRight { get; set; }

        /// <summary>
        /// Determines the input type
        /// </summary>
        [Parameter]
        public InputType Type { get; set; } = InputType.Input;

        /// <summary>
        /// Icon can be added at the end of the input
        /// </summary>
        [Parameter]
        public string Icon { get; set; }

        /// <summary>
        /// Callback method can be added to the icon IconClick attribute
        /// </summary>
        [Parameter]
        public EventCallback IconClick { get; set; }

        /// <summary>
        /// Add a set of styles to the component
        /// </summary>
        [Parameter]
        public string CssClass { get; set; }

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

        public static string FormatMoney(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
            {
                return "";
            }

            try
            {
                input = input.Trim();

                if (input.Length >= 2)
                {
                    input = input.Replace(",", "");
                    input = input.Insert(input.Length - 2, ",");
                }

                if (input.Length < 7)
                {
                    input = input.Replace(".", "");
                }
                else
                {
                    if (input.Length >= 7 && input.Length < 11)
                    {
                        input = input.Replace(".", "");
                        input = input.Insert(input.Length - 6, ".");
                    }

                    else if (input.Length >= 11 && input.Length < 14)
                    {
                        input = input.Replace(".", "");
                        input = input.Insert(input.Length - 6, ".");
                        input = input.Insert(input.Length - 10, ".");
                    }

                    else if (input.Length >= 15 && input.Length < 18)
                    {
                        input = input.Replace(".", "");
                        input = input.Insert(input.Length - 6, ".");
                        input = input.Insert(input.Length - 10, ".");
                        input = input.Insert(input.Length - 14, ".");
                    }

                    else if (input.Length >= 19)
                    {
                        input = input.Replace(".", "");
                        input = input.Insert(input.Length - 6, ".");
                        input = input.Insert(input.Length - 10, ".");
                        input = input.Insert(input.Length - 14, ".");
                        input = input.Insert(input.Length - 18, ".");
                    }
                }
                return input;
            }
            catch
            {
                return "";
            }
        }

        public static string FormatPhoneNumber(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
            {
                return "";
            }

            try
            {
                input = input.Trim();
                if (input.Length == 0 || input.Length == 1)
                {
                    input = "(" + input;
                }

                if (input.Length == 3)
                {
                    input += ")";
                }

                if (input.Length == 8)
                {
                    input += "-";
                }

                return input;
            }
            catch
            {
                return "";
            }
        }

        public static string FormatCNPJ(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
            {
                return "";
            }

            try
            {
                input = input.Trim();
                if (input.Length == 2 || input.Length == 6)
                {
                    input += ".";
                }

                if (input.Length == 10)
                {
                    input += "/";
                }

                if (input.Length == 15)
                {
                    input += "-";
                }

                return input;
            }
            catch
            {
                return "";
            }
        }

        public static string FormatCPF(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
            {
                return "";
            }

            try
            {
                input = input.Trim();
                if (input.Length == 3 || input.Length == 7)
                {
                    input += ".";
                }

                if (input.Length == 11)
                {
                    input += "-";
                }

                return input;
            }
            catch
            {
                return "";
            }
        }

        public static string FormatPercentage(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
            {
                return "";
            }

            try
            {
                input = input.Trim();
                input.Replace("%", "");
                if (input.Length >= 3)
                {
                    input = input.Replace(",", "");
                    input = input.Insert(input.Length - 3, ".");
                }
                if (input.Length > 6)
                {
                    input.Remove(0, 1);
                }

                return input + "%";
            }
            catch
            {
                return "";
            }
        }

        public static string FormatCEP(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
            {
                return "";
            }

            try
            {
                input = input.Trim();
                if (input.Length == 5)
                {
                    input += "-";
                }

                return input;
            }
            catch
            {
                return "";
            }
        }
    }

    public enum InputType
    {
        Input,
        TextArea,
        Color,
        Time,
        Phone,
        Money,
        Email,
        CNPJ,
        CPF,
        Percentage,
        CEP
    }
}
