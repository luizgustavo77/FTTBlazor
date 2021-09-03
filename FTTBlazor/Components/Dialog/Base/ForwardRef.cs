using Microsoft.AspNetCore.Components;

namespace FTTBlazor
{
    public class ForwardRef : ForwardRef<ElementReference>
    {
    }

    public class ForwardRef<T>
    {
        private T _current;

        public void Set(T value)
        {
            _current = value;
        }
    }
}