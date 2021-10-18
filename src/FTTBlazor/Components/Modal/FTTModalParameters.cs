using System.Collections.Generic;

namespace FTTBlazor.Components.Modal
{
    public class FTTModalParameters
    {
        internal Dictionary<string, object> _parameters;

        public FTTModalParameters()
        {
            _parameters = new Dictionary<string, object>();
        }

        public FTTModalParameters(string parameterName, object value)
        {
            _parameters = new Dictionary<string, object>();
            _parameters[parameterName] = value;
        }

        public void Add(string parameterName, object value)
        {
            _parameters[parameterName] = value;
        }

        public T Get<T>(string parameterName)
        {
            if (_parameters.TryGetValue(parameterName, out var value))
            {
                return (T)value;
            }
            
            throw new KeyNotFoundException($"{parameterName} não existe no FTTModalParameters");
        }

        public T TryGet<T>(string parameterName)
        {
            if (_parameters.TryGetValue(parameterName, out var value))
            {
                return (T)value;
            }

            return default;
        }
    }
}
