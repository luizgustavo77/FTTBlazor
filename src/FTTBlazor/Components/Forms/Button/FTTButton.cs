namespace FTTBlazor.Components.Forms.Button
{
    public partial class FTTButton : ComponentBase
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
        public EventCallback OnClick { get; set; }

        [Parameter]
        public string Size { get; set; } = "4";

        [Parameter]
        public ButtonType Type { get; set; } = ButtonType.button;

        private string _id { get; set; }

        protected override async Task OnInitializedAsync()
        {
            _id = Guid.NewGuid().ToString();
        }

        protected override async Task OnParametersSetAsync()
        {

        }
    }

    public enum ButtonType
    {
        button,
        submit
    }
}
