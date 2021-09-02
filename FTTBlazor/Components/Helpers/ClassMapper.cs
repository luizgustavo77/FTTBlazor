using System.Linq;

namespace FTTBlazorComponent
{
    public class ClassMapper : BaseMapper
    {
        public string AsString()
        {
            return string.Join(" ", Items.Select(i => i()).Where(i => i != null));
        }
    }
}