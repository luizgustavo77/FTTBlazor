using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;

namespace FTTBlazor
{
    public abstract class FTTBaseDomComponent : FTTBaseComponent
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

        protected FTTClassMapper ClassMapper { get; } = new FTTClassMapper();

        protected FTTStyleMapper StyleMapper = new FTTStyleMapper();
    }
}