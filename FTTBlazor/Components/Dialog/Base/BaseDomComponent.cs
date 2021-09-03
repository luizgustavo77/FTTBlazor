using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;

namespace FTTBlazor
{
    public abstract class BaseDomComponent : BaseComponent
    {
        [Parameter]
        public string Id { get; set; } = "FTTBlazor_id_" + Guid.NewGuid();

        [Parameter(CaptureUnmatchedValues = true)]
        public Dictionary<string, object> Attributes { get; set; }

        [Parameter]
        public string Class { get; set; }

        private ElementReference _ref;

        public virtual ElementReference Ref
        {
            get => _ref;
            set
            {
                _ref = value;
                RefBack?.Set(value);
            }
        }

        protected ClassMapper ClassMapper { get; } = new ClassMapper();

        protected StyleMapper StyleMapper = new StyleMapper();
    }
}