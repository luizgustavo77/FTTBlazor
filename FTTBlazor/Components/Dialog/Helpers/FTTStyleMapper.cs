using System.Linq;

namespace FTTBlazor
{
    public class FTTStyleMapper : FTTBaseMapper
    {
        public string AsString()
        {
            return string.Join("; ", Items.Select(i => i()).Where(i => i != null));
        }
    }
}