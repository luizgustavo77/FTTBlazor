using System.Linq;

namespace FTTBlazorComponent
{
    public class StyleMapper : BaseMapper
    {
        public string AsString()
        {
            return string.Join("; ", Items.Select(i => i()).Where(i => i != null));
        }
    }
}