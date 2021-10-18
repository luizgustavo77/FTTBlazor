using System;

namespace FTTBlazor.Components.Modal
{
    public class FTTModalResult
    {
        public object Data { get; }
        public Type DataType { get; }
        public bool Cancelled { get; }
        public bool Deleted { get; }

        public FTTModalResult(object data, Type resultType, bool cancelled, bool deleted)
        {
            Data = data;
            DataType = resultType;
            Cancelled = cancelled;
            Deleted = deleted;
        }

        public static FTTModalResult Ok<T>(T result) => Ok(result, default);

        public static FTTModalResult Ok<T>(T result, Type modalType) => new FTTModalResult(result, modalType, false, false);

        public static FTTModalResult Delete() => new FTTModalResult(default, typeof(object), false, true);

        public static FTTModalResult Cancel() => new FTTModalResult(default, typeof(object), true, false);
    }
}
