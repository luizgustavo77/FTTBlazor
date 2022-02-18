using FTTBlazor.Common.Core;
using FTTBlazor.Components.Toast;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace FTTBlazor.Components.Crud
{
    public partial class FTTCrud<Interface> : ComponentBase where Interface : FTTEntity
    {
        public FTTCrud()
        {
            Item = (Interface)Activator.CreateInstance(typeof(Interface));
        }

        public FTTCrud(HttpClient httpClient) : this()
        {
            Http = httpClient;
        }

        [Inject]
        private HttpClient Http { get; set; }

        [Inject]
        private IJSRuntime js { get; set; }

        [Inject]
        private NavigationManager Nav { get; set; }

        [Inject]
        protected FTTToastService Toaster { get; set; }

        [Parameter]
        public RenderFragment<Interface> ModalContent { get; set; }

        [Parameter]
        public Func<Interface, bool> Filter { get; set; }

        [Parameter]
        public Func<Interface, Task<Interface>> OnBeforeAdd { get; set; }

        [Parameter]
        public int PageSize { get; set; } = 50;

        [Parameter]
        public string Endpoint { get; set; }

        [Parameter]
        public EventCallback OnAddClick { get; set; }

        [Parameter]
        public string Title { get; set; }

        [Parameter]
        public bool CanDelete { get; set; } = true;

        [Parameter]
        public bool CanCreate { get; set; } = true;

        [Parameter]
        public bool CanEdit { get; set; } = true;

        [Parameter]
        public bool CanRead { get; set; } = true;

        [Parameter]
        public List<FTTGridColumn> Columns { get; set; } = null;

        [Parameter]
        public string Token { get; set; }

        private int curPage { get; set; }

        private bool ModalIsOpen { get; set; }

        public IEnumerable<Interface> DataSource { get; set; }
        public IEnumerable<Interface> _ItemList { get; set; }
        public IEnumerable<Interface> ItemList
        {
            get => _ItemList;
            set => _ItemList = value;
        }

        public Interface Item { get; set; } = null;

        public int totalPages { get; set; }

        private bool ModalDeleteIsOpen = false;

        private bool IsNew = false;

        protected bool isMenuVisible { get; set; }

        public string FileMenuPosition { get; set; } = "";

        public Dictionary<string, string> SearchParams { get; set; } = new Dictionary<string, string>();

        public string Url { get; set; }

        private HttpResponseMessage __result;
        public HttpResponseMessage result
        {
            get => __result;
            set
            {
                if ((value.StatusCode == System.Net.HttpStatusCode.OK) || (value.StatusCode == System.Net.HttpStatusCode.NoContent))
                {
                    Toaster.ShowToast("Operação realizada com sucesso.", FTTToastEnum.Success);
                }
                else
                {
                    Toaster.ShowToast("Falha ao Realizar a Operação. Motivo: " + value.ReasonPhrase, FTTToastEnum.Error);
                }
            }
        }

        public void closeWindow()
        {
            ModalIsOpen = false;
            ModalDeleteIsOpen = false;
        }

        public void AddFilter(string value, string field)
        {
            try
            {
                if (SearchParams.ContainsKey(field))
                {
                    SearchParams.Remove(field);
                }

                if (!string.IsNullOrWhiteSpace(value))
                {
                    SearchParams.Add(field, value);
                }

                if (SearchParams.Count == 0)
                {
                    ItemList = DataSource;
                }
                else
                {
                    ItemList = ApplyFilters();
                }

                StateHasChanged();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message + ex.StackTrace);
            }
        }


        public IEnumerable<Interface> ApplyFilters()
        {
            IEnumerable<Interface> resultlist = DataSource;

            foreach (KeyValuePair<string, string> item in SearchParams)
            {
                Console.WriteLine("item: " + item.Key + " " + item.Value);
                IQueryable<Interface> query = resultlist.AsQueryable().Where(e => e.GetType().GetProperty(item.Key).GetValue(e) != null);
                bool isBoolean = false;
                if (query.Any(e => bool.TryParse(e.GetType().GetProperty(item.Key).GetValue(e).ToString(), out isBoolean)))
                {
                    bool value = item.Value.ToString().ToLower().Contains("s") ? true : false;

                    resultlist = query.Where(e => (bool)e.GetType().GetProperty(item.Key).GetValue(e) == value);
                }
                else
                {
                    resultlist = query.Where(e => e.GetType().GetProperty(item.Key).GetValue(e).ToString().ToLower().Contains(item.Value.ToLower()));
                }
            }

            return resultlist;
        }

        public static async Task SaveAs(IJSRuntime js, string filename, string data)
        {
            await js.InvokeAsync<object>(
                "saveAsFile",
                filename,
                data);
        }

        private void DownloadFile()
        {
            if (Columns == null)
            {
                return;
            }

            string text = "";

            foreach (FTTGridColumn col in Columns)
            {
                text += col.FieldDescription + ";";
            }

            text += "\r\n";

            foreach (Interface item in ItemList)
            {
                foreach (FTTGridColumn col in Columns)
                {
                    try
                    {
                        text += item.GetType().GetProperty(col.FieldName).GetValue(item).ToString() + ";";
                    }
                    catch (Exception)
                    {
                        //Console.WriteLine("Erro ao exportar dados");
                        text += ";";
                    }
                }

                text += "\r\n";
            }

            byte[] bytes = System.Text.Encoding.UTF8.GetBytes(text);
            SaveAs(js, "dados.csv", text);
        }

        protected override async Task OnParametersSetAsync()
        {
            if (Nav.Uri != Url)
            {
                Url = Nav.Uri;
            }

            await LoadDataAsync(false);
        }

        public async Task LoadDataAsync(bool isReload = false, bool IsLoadMore = false)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(Token))
                {
                    Http.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", Token);
                }

                string endpointUsed = Endpoint;

                endpointUsed = endpointUsed + "?pagesize=" + PageSize.ToString() + "&currentpage=" + curPage.ToString();

                IEnumerable<Interface> items = await Http.GetFromJsonAsync<IEnumerable<Interface>>(endpointUsed);

                if (IsLoadMore)
                {
                    if (items.Count() == 0)
                    {
                        Toaster.ShowToast("Não tem mais items!", FTTToastEnum.Warning);
                        curPage = (curPage - 1);
                        return;
                    }
                }

                ItemList = items;

                if (Filter != null)
                {
                    ItemList = ItemList.Where(Filter);
                }

                DataSource = ItemList;
            }
            catch (Exception ex)
            {
                Toaster.ShowToast("Erro Load Data: " + ex.Message, FTTToastEnum.Warning);
            }

            base.StateHasChanged();
        }

        private async Task OkClickDelete()
        {
            try
            {
                ModalDeleteIsOpen = false;

                if (!string.IsNullOrWhiteSpace(Token))
                {
                    Http.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", Token);
                }

                string url = Endpoint + "\\" + Convert.ToString(Item.GetType().GetProperty("Id").GetValue(Item, null));
                result = await Http.DeleteAsync(url);

                await LoadDataAsync(false);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw;
            }
        }

        private void OpenDialogAdd()
        {
            Item = (Interface)Activator.CreateInstance(typeof(Interface));
            IsNew = true;
            ModalIsOpen = true;
        }

        private void OpenDialogDelete(Interface DeleteItem)
        {
            Item = DeleteItem;
            ModalDeleteIsOpen = true;
            ModalIsOpen = false;
        }

        private void OpenDialog(Interface OpenItem)
        {
            Item = OpenItem;
            IsNew = false;
            ModalIsOpen = true;
        }

        public string RetornaValores(FTTGridColumn col, Interface item)
        {
            string ret = "";

            try
            {
                if (col.FieldType == FTTFieldType.Money)
                {
                    ret = "R$ " + FTTBlazor.Components.Forms.Input.FTTInput.FormatMoney(item.GetType().GetProperty(col.FieldName).GetValue(item).ToString());
                    //ret = string.Format(CultureInfo.GetCultureInfo("pt-BR"), "R$ {0:#.###,##}", item.GetType().GetProperty(col.FieldName).GetValue(item).ToString());
                }
                else if (item.GetType().GetProperty(col.FieldName).PropertyType == typeof(DateTime))
                {
                    DateTime data = (DateTime)item.GetType().GetProperty(col.FieldName).GetValue(item);

                    if (data.ToString("dd/MM/yyyy") == "01/01/0001" && data.ToShortTimeString() != "00:00")
                    {
                        ret = data.ToShortTimeString();
                    }
                    else if (data.ToString("dd/MM/yyyy") != "01/01/0001")
                    {
                        ret = data.ToString("dd/MM/yyyy");
                    }
                }
                else if (item.GetType().GetProperty(col.FieldName).PropertyType == typeof(bool))
                {
                    bool data = ((bool)item.GetType().GetProperty(col.FieldName).GetValue(item));

                    if (data)
                    {
                        ret = "Sim";
                    }
                    else
                    {
                        ret = "Não";
                    }
                }
                else
                {
                    ret = item.GetType().GetProperty(col.FieldName).GetValue(item).ToString();
                }
            }
            catch (Exception)
            {
                return "";
            }

            return ret;
        }

        public async Task Save()
        {
            __result = null;

            IsNew = string.IsNullOrWhiteSpace(Item?.Id);

            if (!string.IsNullOrWhiteSpace(Token))
            {
                Http.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", Token);
            }

            if (IsNew)
            {
                result = await Http.PostAsJsonAsync<Interface>(Endpoint, Item);

                try
                {
                    Interface newitem = await __result.Content.ReadFromJsonAsync<Interface>();
                    Item = newitem;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
            else
            {
                result = await Http.PutAsJsonAsync<Interface>(Endpoint, Item);
            }

            await LoadDataAsync(false);
            ModalIsOpen = false;
            StateHasChanged();
        }
    }

    public class FTTGridColumn
    {
        public string FieldName { get; set; }

        public FTTFieldType FieldType { get; set; }

        public string FieldDescription { get; set; }

        public Type ModalPage { get; set; } = null;
    }

    public enum FTTFieldType
    {
        Nenhum,
        Money
    }
}