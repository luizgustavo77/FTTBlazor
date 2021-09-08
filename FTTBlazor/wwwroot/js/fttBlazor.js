! function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function (e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 98)
}([function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.__extends = function (t, e) {
        function n() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, e.__rest = function (t, e) {
        var n = {};
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(t); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]])
        }
        return n
    }, e.__decorate = function (t, e, n, r) {
        var o, a = arguments.length,
            s = a < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : i(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
        else
            for (var c = t.length - 1; 0 <= c; c--)(o = t[c]) && (s = (a < 3 ? o(s) : 3 < a ? o(e, n, s) : o(e, n)) || s);
        return 3 < a && s && Object.defineProperty(e, n, s), s
    }, e.__param = function (t, e) {
        return function (n, i) {
            e(n, i, t)
        }
    }, e.__metadata = function (t, e) {
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : i(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
    }, e.__awaiter = function (t, e, n, i) {
        return new (n = n || Promise)((function (r, o) {
            function a(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : ((e = t.value) instanceof n ? e : new n((function (t) {
                    t(e)
                }))).then(a, s)
            }
            c((i = i.apply(t, e || [])).next())
        }))
    }, e.__generator = function (t, e) {
        var n, i, r, o, a = {
            label: 0,
            sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function s(o) {
            return function (s) {
                return function (o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                        switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = 0 < (r = a.trys).length && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1], r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = e.call(t, a)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                            n = r = 0
                        }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }, e.__createBinding = function (t, e, n, i) {
        void 0 === i && (i = n), t[i] = e[n]
    }, e.__exportStar = function (t, e) {
        for (var n in t) "default" === n || e.hasOwnProperty(n) || (e[n] = t[n])
    }, e.__values = a, e.__read = s, e.__spread = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(s(arguments[e]));
        return t
    }, e.__spreadArrays = function () {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
        var i = Array(t),
            r = 0;
        for (e = 0; e < n; e++)
            for (var o = arguments[e], a = 0, s = o.length; a < s; a++, r++) i[r] = o[a];
        return i
    }, e.__await = c, e.__asyncGenerator = function (t, e, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var i, r = n.apply(t, e || []),
            o = [];
        return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function () {
            return this
        }, i;

        function a(t) {
            r[t] && (i[t] = function (e) {
                return new Promise((function (n, i) {
                    1 < o.push([t, e, n, i]) || s(t, e)
                }))
            })
        }

        function s(t, e) {
            try {
                (n = r[t](e)).value instanceof c ? Promise.resolve(n.value.v).then(u, l) : d(o[0][2], n)
            } catch (t) {
                d(o[0][3], t)
            }
            var n
        }

        function u(t) {
            s("next", t)
        }

        function l(t) {
            s("throw", t)
        }

        function d(t, e) {
            t(e), o.shift(), o.length && s(o[0][0], o[0][1])
        }
    }, e.__asyncDelegator = function (t) {
        var e, n;
        return e = {}, i("next"), i("throw", (function (t) {
            throw t
        })), i("return"), e[Symbol.iterator] = function () {
            return this
        }, e;

        function i(i, r) {
            e[i] = t[i] ? function (e) {
                return (n = !n) ? {
                    value: c(t[i](e)),
                    done: "return" === i
                } : r ? r(e) : e
            } : r
        }
    }, e.__asyncValues = function (t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var e, n = t[Symbol.asyncIterator];
        return n ? n.call(t) : (t = a(t), e = {}, i("next"), i("throw"), i("return"), e[Symbol.asyncIterator] = function () {
            return this
        }, e);

        function i(n) {
            e[n] = t[n] && function (e) {
                return new Promise((function (i, r) {
                    ! function (t, e, n, i) {
                        Promise.resolve(i).then((function (e) {
                            t({
                                value: e,
                                done: n
                            })
                        }), e)
                    }(i, r, (e = t[n](e)).done, e.value)
                }))
            }
        }
    }, e.__makeTemplateObject = function (t, e) {
        return Object.defineProperty ? Object.defineProperty(t, "raw", {
            value: e
        }) : t.raw = e, t
    }, e.__importStar = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }, e.__importDefault = function (t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }, e.__classPrivateFieldGet = function (t, e) {
        if (e.has(t)) return e.get(t);
        throw new TypeError("attempted to get private field on non-instance")
    }, e.__classPrivateFieldSet = function (t, e, n) {
        if (e.has(t)) return e.set(t, n), n;
        throw new TypeError("attempted to set private field on non-instance")
    };
    var r = function (t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    },
        o = function () {
            return e.__assign = o = Object.assign || function (t) {
                for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }, o.apply(this, arguments)
        };

    function a(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            i = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function () {
                return t && i >= t.length && (t = void 0), {
                    value: t && t[i++],
                    done: !t
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function s(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var i, r, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || 0 < e--) && !(i = o.next()).done;) a.push(i.value)
        } catch (t) {
            r = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (n = o.return) && n.call(o)
            } finally {
                if (r) throw r.error
            }
        }
        return a
    }

    function c(t) {
        return this instanceof c ? (this.v = t, this) : new c(t)
    }
    e.__assign = o
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function () {
        function t(t) {
            void 0 === t && (t = {}), this.adapter = t
        }
        return Object.defineProperty(t, "cssClasses", {
            get: function () {
                return {}
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "strings", {
            get: function () {
                return {}
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "numbers", {
            get: function () {
                return {}
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "defaultAdapter", {
            get: function () {
                return {}
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.init = function () { }, t.prototype.destroy = function () { }, t
    }();
    e.MDCFoundation = i, e.default = i
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCComponent = void 0;
    var i = n(0),
        r = n(1),
        o = function () {
            function t(t, e) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                this.root = t, this.initialize.apply(this, (0, i.__spread)(n)), this.foundation = void 0 === e ? this.getDefaultFoundation() : e, this.foundation.init(), this.initialSyncWithDOM()
            }
            return t.attachTo = function (e) {
                return new t(e, new r.MDCFoundation({}))
            }, t.prototype.initialize = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
            }, t.prototype.getDefaultFoundation = function () {
                throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")
            }, t.prototype.initialSyncWithDOM = function () { }, t.prototype.destroy = function () {
                this.foundation.destroy()
            }, t.prototype.listen = function (t, e, n) {
                this.root.addEventListener(t, e, n)
            }, t.prototype.unlisten = function (t, e, n) {
                this.root.removeEventListener(t, e, n)
            }, t.prototype.emit = function (t, e, n) {
                var i;
                void 0 === n && (n = !1), "function" == typeof CustomEvent ? i = new CustomEvent(t, {
                    bubbles: n,
                    detail: e
                }) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, n, !1, e), this.root.dispatchEvent(i)
            }, t
        }();
    e.MDCComponent = o, e.default = o
}, function (t, e, n) {
    "use strict";

}, function (t, e, n) {
    "use strict";

    function i(t, e) {
        return (t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.closest = function (t, e) {
        if (t.closest) return t.closest(e);
        for (var n = t; n;) {
            if (i(n, e)) return n;
            n = n.parentElement
        }
        return null
    }, e.matches = i, e.estimateScrollWidth = function (t) {
        var e = t;
        if (null !== e.offsetParent) return e.scrollWidth;
        var n = e.cloneNode(!0);
        n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
        var i = n.scrollWidth;
        return document.documentElement.removeChild(n), i
    }
}, function (t, e, n) {
    "use strict";

}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.applyPassive = function (t) {
        return void 0 === t && (t = window), !! function (t) {
            void 0 === t && (t = window);
            var e = !1;
            try {
                var n = {
                    get passive() {
                        return !(e = !0)
                    }
                },
                    i = function () { };
                t.document.addEventListener("test", i, n), t.document.removeEventListener("test", i, n)
            } catch (t) {
                e = !1
            }
            return e
        }(t) && {
            passive: !0
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i, r, o = {
        CLOSED_EVENT: "MDCMenuSurface:closed",
        OPENED_EVENT: "MDCMenuSurface:opened",
        FOCUSABLE_ELEMENTS: ["button:not(:disabled)", '[href]:not([aria-disabled="true"])', "input:not(:disabled)", "select:not(:disabled)", "textarea:not(:disabled)", '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")
    };
    ! function (t) {
        t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL"
    }(i || (e.CornerBit = i = {})),
        function (t) {
            t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END"
        }(r || (e.Corner = r = {})), e.cssClasses = {
            ANCHOR: "ftt-blazor-menu-surface--anchor",
            ANIMATING_CLOSED: "ftt-blazor-menu-surface--animating-closed",
            ANIMATING_OPEN: "ftt-blazor-menu-surface--animating-open",
            FIXED: "ftt-blazor-menu-surface--fixed",
            IS_OPEN_BELOW: "ftt-blazor-menu-surface--is-open-below",
            OPEN: "ftt-blazor-menu-surface--open",
            ROOT: "ftt-blazor-menu-surface"
        }, e.strings = o, e.numbers = {
            TRANSITION_OPEN_DURATION: 120,
            TRANSITION_CLOSE_DURATION: 75,
            MARGIN_TO_EDGE: 32,
            ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: .67
        }, e.CornerBit = i, e.Corner = r
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        FIXED_CLASS: "ftt-blazor-top-app-bar--fixed",
        FIXED_SCROLLED_CLASS: "ftt-blazor-top-app-bar--fixed-scrolled",
        SHORT_CLASS: "ftt-blazor-top-app-bar--short",
        SHORT_COLLAPSED_CLASS: "ftt-blazor-top-app-bar--short-collapsed",
        SHORT_HAS_ACTION_ITEM_CLASS: "ftt-blazor-top-app-bar--short-has-action-item"
    }, e.numbers = {
        DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
        MAX_TOP_APP_BAR_HEIGHT: 128
    }, e.strings = {
        ACTION_ITEM_SELECTOR: ".ftt-blazor-top-app-bar__action-item",
        NAVIGATION_EVENT: "MDCTopAppBar:nav",
        NAVIGATION_ICON_SELECTOR: ".ftt-blazor-top-app-bar__navigation-icon",
        ROOT_SELECTOR: ".ftt-blazor-top-app-bar",
        TITLE_SELECTOR: ".ftt-blazor-top-app-bar__title"
    }
}, function (t, e, n) {
    "use strict";

    function i(t, n) {
        if (t) return t[e.FTTBlazorInstance] = n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.FTTBlazor = e.setFTTBlazorInstance = e.getFTTBlazorInstance = e.FTTBlazorInstance = void 0, e.FTTBlazorInstance = "$FTTBlazorInstance", e.getFTTBlazorInstance = function (t) {
        if (t) return t[e.FTTBlazorInstance]
    }, e.setFTTBlazorInstance = i, e.FTTBlazor = function (t) {
        i(this.ref = t, this)
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        LIST_ITEM_ACTIVATED_CLASS: "ftt-blazor-list-item--activated",
        LIST_ITEM_CLASS: "ftt-blazor-list-item",
        LIST_ITEM_DISABLED_CLASS: "ftt-blazor-list-item--disabled",
        LIST_ITEM_SELECTED_CLASS: "ftt-blazor-list-item--selected",
        LIST_ITEM_TEXT_CLASS: "ftt-blazor-list-item__text",
        LIST_ITEM_PRIMARY_TEXT_CLASS: "ftt-blazor-list-item__primary-text",
        ROOT: "ftt-blazor-list"
    },
        r = {
            ACTION_EVENT: "MDCList:action",
            ARIA_CHECKED: "aria-checked",
            ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
            ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
            ARIA_CURRENT: "aria-current",
            ARIA_DISABLED: "aria-disabled",
            ARIA_ORIENTATION: "aria-orientation",
            ARIA_ORIENTATION_HORIZONTAL: "horizontal",
            ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
            ARIA_SELECTED: "aria-selected",
            CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
            CHECKBOX_SELECTOR: 'input[type="checkbox"]',
            CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + i.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + i.LIST_ITEM_CLASS + " a\n  ",
            FOCUSABLE_CHILD_ELEMENTS: "\n    ." + i.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + i.LIST_ITEM_CLASS + " a,\n    ." + i.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + i.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled)\n  ',
            RADIO_SELECTOR: 'input[type="radio"]'
        };
    e.strings = r, e.cssClasses = i, e.numbers = {
        UNSET_INDEX: -1,
        TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCListFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(12),
        a = n(10),
        s = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        }(n(119)),
        c = n(61),
        u = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.wrapFocus_ = !1, r.isVertical_ = !0, r.isSingleSelectionList_ = !1, r.selectedIndex_ = a.numbers.UNSET_INDEX, r.focusedItemIndex = a.numbers.UNSET_INDEX, r.useActivatedClass_ = !1, r.ariaCurrentAttrValue_ = null, r.isCheckboxList_ = !1, r.isRadioList_ = !1, r.hasTypeahead = !1, r.typeaheadState = s.initState(), r.sortedIndexByFirstChar = new Map, r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "strings", {
                get: function () {
                    return a.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return a.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return a.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClassForElementIndex: function () { },
                        focusItemAtIndex: function () { },
                        getAttributeForElementIndex: function () {
                            return null
                        },
                        getFocusedElementIndex: function () {
                            return 0
                        },
                        getListItemCount: function () {
                            return 0
                        },
                        hasCheckboxAtIndex: function () {
                            return !1
                        },
                        hasRadioAtIndex: function () {
                            return !1
                        },
                        isCheckboxCheckedAtIndex: function () {
                            return !1
                        },
                        isFocusInsideList: function () {
                            return !1
                        },
                        isRootFocused: function () {
                            return !1
                        },
                        listItemAtIndexHasClass: function () {
                            return !1
                        },
                        notifyAction: function () { },
                        removeClassForElementIndex: function () { },
                        setAttributeForElementIndex: function () { },
                        setCheckedCheckboxOrRadioAtIndex: function () { },
                        setTabIndexForListItemChildren: function () { },
                        getPrimaryTextAtIndex: function () {
                            return ""
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.layout = function () {
                0 !== this.adapter.getListItemCount() && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList_ = !0 : this.adapter.hasRadioAtIndex(0) && (this.isRadioList_ = !0), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()))
            }, e.prototype.setWrapFocus = function (t) {
                this.wrapFocus_ = t
            }, e.prototype.setVerticalOrientation = function (t) {
                this.isVertical_ = t
            }, e.prototype.setSingleSelection = function (t) {
                this.isSingleSelectionList_ = t
            }, e.prototype.setHasTypeahead = function (t) {
                (this.hasTypeahead = t) && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex())
            }, e.prototype.isTypeaheadInProgress = function () {
                return this.hasTypeahead && s.isTypingInProgress(this.typeaheadState)
            }, e.prototype.setUseActivatedClass = function (t) {
                this.useActivatedClass_ = t
            }, e.prototype.getSelectedIndex = function () {
                return this.selectedIndex_
            }, e.prototype.setSelectedIndex = function (t) {
                this.isIndexValid_(t) && (this.isCheckboxList_ ? this.setCheckboxAtIndex_(t) : this.isRadioList_ ? this.setRadioAtIndex_(t) : this.setSingleSelectionAtIndex_(t))
            }, e.prototype.handleFocusIn = function (t, e) {
                0 <= e && (this.focusedItemIndex = e, this.adapter.setTabIndexForListItemChildren(e, "0"))
            }, e.prototype.handleFocusOut = function (t, e) {
                var n = this;
                0 <= e && this.adapter.setTabIndexForListItemChildren(e, "-1"), setTimeout((function () {
                    n.adapter.isFocusInsideList() || n.setTabindexToFirstSelectedItem_()
                }), 0)
            }, e.prototype.handleKeydown = function (t, e, n) {
                var i = this,
                    r = "ArrowLeft" === (0, o.normalizeKey)(t),
                    u = "ArrowUp" === (0, o.normalizeKey)(t),
                    l = "ArrowRight" === (0, o.normalizeKey)(t),
                    d = "ArrowDown" === (0, o.normalizeKey)(t),
                    f = "Home" === (0, o.normalizeKey)(t),
                    p = "End" === (0, o.normalizeKey)(t),
                    h = "Enter" === (0, o.normalizeKey)(t),
                    _ = "Spacebar" === (0, o.normalizeKey)(t);
                if (this.adapter.isRootFocused()) {
                    if (u || p ? (t.preventDefault(), this.focusLastElement()) : (d || f) && (t.preventDefault(), this.focusFirstElement()), this.hasTypeahead) {
                        var m = {
                            event: t,
                            focusItemAtIndex: function (t) {
                                i.focusItemAtIndex(t)
                            },
                            focusedItemIndex: -1,
                            isTargetListItem: e,
                            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                            isItemAtIndexDisabled: function (t) {
                                return i.adapter.listItemAtIndexHasClass(t, a.cssClasses.LIST_ITEM_DISABLED_CLASS)
                            }
                        };
                        s.handleKeydown(m, this.typeaheadState)
                    }
                } else {
                    var g = this.adapter.getFocusedElementIndex();
                    if (!(-1 === g && (g = n) < 0)) {
                        if (this.isVertical_ && d || !this.isVertical_ && l) (0, c.preventDefaultEvent)(t), this.focusNextElement(g);
                        else if (this.isVertical_ && u || !this.isVertical_ && r) (0, c.preventDefaultEvent)(t), this.focusPrevElement(g);
                        else if (f) (0, c.preventDefaultEvent)(t), this.focusFirstElement();
                        else if (p) (0, c.preventDefaultEvent)(t), this.focusLastElement();
                        else if ((h || _) && e) {
                            var C = t.target;
                            if (C && "A" === C.tagName && h) return;
                            if ((0, c.preventDefaultEvent)(t), this.adapter.listItemAtIndexHasClass(g, a.cssClasses.LIST_ITEM_DISABLED_CLASS)) return;
                            this.isTypeaheadInProgress() || (this.isSelectableList_() && this.setSelectedIndexOnAction_(g), this.adapter.notifyAction(g))
                        }
                        this.hasTypeahead && (m = {
                            event: t,
                            focusItemAtIndex: function (t) {
                                i.focusItemAtIndex(t)
                            },
                            focusedItemIndex: this.focusedItemIndex,
                            isTargetListItem: e,
                            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                            isItemAtIndexDisabled: function (t) {
                                return i.adapter.listItemAtIndexHasClass(t, a.cssClasses.LIST_ITEM_DISABLED_CLASS)
                            }
                        }, s.handleKeydown(m, this.typeaheadState))
                    }
                }
            }, e.prototype.handleClick = function (t, e) {
                t !== a.numbers.UNSET_INDEX && (this.setTabindexAtIndex_(t), this.focusedItemIndex = t, this.adapter.listItemAtIndexHasClass(t, a.cssClasses.LIST_ITEM_DISABLED_CLASS) || (this.isSelectableList_() && this.setSelectedIndexOnAction_(t, e), this.adapter.notifyAction(t)))
            }, e.prototype.focusNextElement = function (t) {
                var e = t + 1;
                if (this.adapter.getListItemCount() <= e) {
                    if (!this.wrapFocus_) return t;
                    e = 0
                }
                return this.focusItemAtIndex(e), e
            }, e.prototype.focusPrevElement = function (t) {
                var e = t - 1;
                if (e < 0) {
                    if (!this.wrapFocus_) return t;
                    e = this.adapter.getListItemCount() - 1
                }
                return this.focusItemAtIndex(e), e
            }, e.prototype.focusFirstElement = function () {
                return this.focusItemAtIndex(0), 0
            }, e.prototype.focusLastElement = function () {
                var t = this.adapter.getListItemCount() - 1;
                return this.focusItemAtIndex(t), t
            }, e.prototype.setEnabled = function (t, e) {
                this.isIndexValid_(t) && (e ? (this.adapter.removeClassForElementIndex(t, a.cssClasses.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, a.strings.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, a.cssClasses.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, a.strings.ARIA_DISABLED, "true")))
            }, e.prototype.setSingleSelectionAtIndex_ = function (t) {
                if (this.selectedIndex_ !== t) {
                    var e = a.cssClasses.LIST_ITEM_SELECTED_CLASS;
                    this.useActivatedClass_ && (e = a.cssClasses.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex_ !== a.numbers.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex_, e), this.adapter.addClassForElementIndex(t, e), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t
                }
            }, e.prototype.setAriaForSingleSelectionAtIndex_ = function (t) {
                this.selectedIndex_ === a.numbers.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, a.strings.ARIA_CURRENT));
                var e = null !== this.ariaCurrentAttrValue_,
                    n = e ? a.strings.ARIA_CURRENT : a.strings.ARIA_SELECTED;
                this.selectedIndex_ !== a.numbers.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
                var i = e ? this.ariaCurrentAttrValue_ : "true";
                this.adapter.setAttributeForElementIndex(t, n, i)
            }, e.prototype.setRadioAtIndex_ = function (t) {
                this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), this.selectedIndex_ !== a.numbers.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, a.strings.ARIA_CHECKED, "false"), this.adapter.setAttributeForElementIndex(t, a.strings.ARIA_CHECKED, "true"), this.selectedIndex_ = t
            }, e.prototype.setCheckboxAtIndex_ = function (t) {
                for (var e = 0; e < this.adapter.getListItemCount(); e++) {
                    var n = !1;
                    0 <= t.indexOf(e) && (n = !0), this.adapter.setCheckedCheckboxOrRadioAtIndex(e, n), this.adapter.setAttributeForElementIndex(e, a.strings.ARIA_CHECKED, n ? "true" : "false")
                }
                this.selectedIndex_ = t
            }, e.prototype.setTabindexAtIndex_ = function (t) {
                this.focusedItemIndex === a.numbers.UNSET_INDEX && 0 !== t ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : 0 <= this.focusedItemIndex && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), this.adapter.setAttributeForElementIndex(t, "tabindex", "0")
            }, e.prototype.isSelectableList_ = function () {
                return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_
            }, e.prototype.setTabindexToFirstSelectedItem_ = function () {
                var t = 0;
                this.isSelectableList_() && ("number" == typeof this.selectedIndex_ && this.selectedIndex_ !== a.numbers.UNSET_INDEX ? t = this.selectedIndex_ : this.selectedIndex_ instanceof Array && 0 < this.selectedIndex_.length && (t = this.selectedIndex_.reduce((function (t, e) {
                    return Math.min(t, e)
                })))), this.setTabindexAtIndex_(t)
            }, e.prototype.isIndexValid_ = function (t) {
                var e = this;
                if (t instanceof Array) {
                    if (!this.isCheckboxList_) throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
                    return 0 === t.length || t.some((function (t) {
                        return e.isIndexInRange_(t)
                    }))
                }
                if ("number" != typeof t) return !1;
                if (this.isCheckboxList_) throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
                return this.isIndexInRange_(t)
            }, e.prototype.isIndexInRange_ = function (t) {
                var e = this.adapter.getListItemCount();
                return 0 <= t && t < e
            }, e.prototype.setSelectedIndexOnAction_ = function (t, e) {
                void 0 === e && (e = !0), this.isCheckboxList_ ? this.toggleCheckboxAtIndex_(t, e) : this.setSelectedIndex(t)
            }, e.prototype.toggleCheckboxAtIndex_ = function (t, e) {
                var n = this.adapter.isCheckboxCheckedAtIndex(t);
                e && (n = !n, this.adapter.setCheckedCheckboxOrRadioAtIndex(t, n)), this.adapter.setAttributeForElementIndex(t, a.strings.ARIA_CHECKED, n ? "true" : "false");
                var i = this.selectedIndex_ === a.numbers.UNSET_INDEX ? [] : this.selectedIndex_.slice();
                n ? i.push(t) : i = i.filter((function (e) {
                    return e !== t
                })), this.selectedIndex_ = i
            }, e.prototype.focusItemAtIndex = function (t) {
                this.setTabindexAtIndex_(t), this.adapter.focusItemAtIndex(t), this.focusedItemIndex = t
            }, e.prototype.typeaheadMatchItem = function (t, e, n) {
                var i = this;
                void 0 === n && (n = !1);
                var r = {
                    focusItemAtIndex: function (t) {
                        i.focusItemAtIndex(t)
                    },
                    focusedItemIndex: e || this.focusedItemIndex,
                    nextChar: t,
                    sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                    skipFocus: n,
                    isItemAtIndexDisabled: function (t) {
                        return i.adapter.listItemAtIndexHasClass(t, a.cssClasses.LIST_ITEM_DISABLED_CLASS)
                    }
                };
                return s.matchItem(r, this.typeaheadState)
            }, e.prototype.typeaheadInitSortedIndex = function () {
                return s.initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex)
            }, e.prototype.clearTypeaheadBuffer = function () {
                s.clearBuffer(this.typeaheadState)
            }, e
        }(r.MDCFoundation);
    e.MDCListFoundation = u, e.default = u
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.normalizeKey = s, e.isNavigationEvent = function (t) {
        return a.has(s(t))
    };
    var i = e.KEY = {
        UNKNOWN: "Unknown",
        BACKSPACE: "Backspace",
        ENTER: "Enter",
        SPACEBAR: "Spacebar",
        PAGE_UP: "PageUp",
        PAGE_DOWN: "PageDown",
        END: "End",
        HOME: "Home",
        ARROW_LEFT: "ArrowLeft",
        ARROW_UP: "ArrowUp",
        ARROW_RIGHT: "ArrowRight",
        ARROW_DOWN: "ArrowDown",
        DELETE: "Delete",
        ESCAPE: "Escape"
    },
        r = new Set;
    r.add(i.BACKSPACE), r.add(i.ENTER), r.add(i.SPACEBAR), r.add(i.PAGE_UP), r.add(i.PAGE_DOWN), r.add(i.END), r.add(i.HOME), r.add(i.ARROW_LEFT), r.add(i.ARROW_UP), r.add(i.ARROW_RIGHT), r.add(i.ARROW_DOWN), r.add(i.DELETE), r.add(i.ESCAPE);
    var o = new Map;
    o.set(8, i.BACKSPACE), o.set(13, i.ENTER), o.set(32, i.SPACEBAR), o.set(33, i.PAGE_UP), o.set(34, i.PAGE_DOWN), o.set(35, i.END), o.set(36, i.HOME), o.set(37, i.ARROW_LEFT), o.set(38, i.ARROW_UP), o.set(39, i.ARROW_RIGHT), o.set(40, i.ARROW_DOWN), o.set(46, i.DELETE), o.set(27, i.ESCAPE);
    var a = new Set;

    function s(t) {
        var e = t.key;
        return r.has(e) ? e : o.get(t.keyCode) || i.UNKNOWN
    }
    a.add(i.PAGE_UP), a.add(i.PAGE_DOWN), a.add(i.END), a.add(i.HOME), a.add(i.ARROW_LEFT), a.add(i.ARROW_UP), a.add(i.ARROW_RIGHT), a.add(i.ARROW_DOWN)
}, function (t, e, n) {
    "use strict";
    var i;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
        function (t) {
            t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM"
        }(i || (e.DefaultFocusState = i = {})), e.cssClasses = {
            MENU_SELECTED_LIST_ITEM: "ftt-blazor-menu-item--selected",
            MENU_SELECTION_GROUP: "ftt-blazor-menu__selection-group",
            ROOT: "ftt-blazor-menu"
        }, e.strings = {
            ARIA_CHECKED_ATTR: "aria-checked",
            ARIA_DISABLED_ATTR: "aria-disabled",
            CHECKBOX_SELECTOR: 'input[type="checkbox"]',
            LIST_SELECTOR: ".ftt-blazor-list",
            SELECTED_EVENT: "MDCMenu:selected"
        }, e.numbers = {
            FOCUS_ROOT_INDEX: -1
        }, e.DefaultFocusState = i
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = e.InteractionTrigger = void 0;
    ! function (t) {
        t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY"
    }(i || (e.InteractionTrigger = i = {})), e.strings = {
        ARIA_HIDDEN: "aria-hidden",
        INTERACTION_EVENT: "MDCChipTrailingAction:interaction",
        NAVIGATION_EVENT: "MDCChipTrailingAction:navigation",
        TAB_INDEX: "tabindex"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = e.Direction = void 0;
    ! function (t) {
        t.LEFT = "left", t.RIGHT = "right"
    }(i || (e.Direction = i = {}));
    var r = e.EventSource = void 0;
    ! function (t) {
        t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none"
    }(r || (e.EventSource = r = {}));
    var o = e.strings = {
        ADDED_ANNOUNCEMENT_ATTRIBUTE: "data-ftt-blazor-chip-added-announcement",
        ARIA_CHECKED: "aria-checked",
        ARROW_DOWN_KEY: "ArrowDown",
        ARROW_LEFT_KEY: "ArrowLeft",
        ARROW_RIGHT_KEY: "ArrowRight",
        ARROW_UP_KEY: "ArrowUp",
        BACKSPACE_KEY: "Backspace",
        CHECKMARK_SELECTOR: ".ftt-blazor-chip__checkmark",
        DELETE_KEY: "Delete",
        END_KEY: "End",
        ENTER_KEY: "Enter",
        ENTRY_ANIMATION_NAME: "ftt-blazor-chip-entry",
        HOME_KEY: "Home",
        IE_ARROW_DOWN_KEY: "Down",
        IE_ARROW_LEFT_KEY: "Left",
        IE_ARROW_RIGHT_KEY: "Right",
        IE_ARROW_UP_KEY: "Up",
        IE_DELETE_KEY: "Del",
        INTERACTION_EVENT: "MDCChip:interaction",
        LEADING_ICON_SELECTOR: ".ftt-blazor-chip__icon--leading",
        NAVIGATION_EVENT: "MDCChip:navigation",
        PRIMARY_ACTION_SELECTOR: ".ftt-blazor-chip__primary-action",
        REMOVED_ANNOUNCEMENT_ATTRIBUTE: "data-ftt-blazor-chip-removed-announcement",
        REMOVAL_EVENT: "MDCChip:removal",
        SELECTION_EVENT: "MDCChip:selection",
        SPACEBAR_KEY: " ",
        TAB_INDEX: "tabindex",
        TRAILING_ACTION_SELECTOR: ".ftt-blazor-chip-trailing-action",
        TRAILING_ICON_INTERACTION_EVENT: "MDCChip:trailingIconInteraction",
        TRAILING_ICON_SELECTOR: ".ftt-blazor-chip__icon--trailing"
    },
        a = (e.cssClasses = {
            CHECKMARK: "ftt-blazor-chip__checkmark",
            CHIP_EXIT: "ftt-blazor-chip--exit",
            DELETABLE: "ftt-blazor-chip--deletable",
            EDITABLE: "ftt-blazor-chip--editable",
            EDITING: "ftt-blazor-chip--editing",
            HIDDEN_LEADING_ICON: "ftt-blazor-chip__icon--leading-hidden",
            LEADING_ICON: "ftt-blazor-chip__icon--leading",
            PRIMARY_ACTION: "ftt-blazor-chip__primary-action",
            PRIMARY_ACTION_FOCUSED: "ftt-blazor-chip--primary-action-focused",
            SELECTED: "ftt-blazor-chip--selected",
            TEXT: "ftt-blazor-chip__text",
            TRAILING_ACTION: "ftt-blazor-chip__trailing-action",
            TRAILING_ICON: "ftt-blazor-chip__icon--trailing"
        }, e.navigationKeys = new Set);
    a.add(o.ARROW_LEFT_KEY), a.add(o.ARROW_RIGHT_KEY), a.add(o.ARROW_DOWN_KEY), a.add(o.ARROW_UP_KEY), a.add(o.END_KEY), a.add(o.HOME_KEY), a.add(o.IE_ARROW_LEFT_KEY), a.add(o.IE_ARROW_RIGHT_KEY), a.add(o.IE_ARROW_DOWN_KEY), a.add(o.IE_ARROW_UP_KEY);
    var s = e.jumpChipKeys = new Set;
    s.add(o.ARROW_UP_KEY), s.add(o.ARROW_DOWN_KEY), s.add(o.HOME_KEY), s.add(o.END_KEY), s.add(o.IE_ARROW_UP_KEY), s.add(o.IE_ARROW_DOWN_KEY)
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.util = void 0;
    var i = n(3);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(38);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(5);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }));
    var a = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }(n(17));
    e.util = a
}, function (t, e, n) {
    "use strict";
    var i;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.supportsCssVariables = function (t, e) {
        void 0 === e && (e = !1);
        var n, r = t.CSS;
        if ("boolean" == typeof i && !e) return i;
        if (!r || "function" != typeof r.supports) return !1;
        var o = r.supports("--css-vars", "yes"),
            a = r.supports("(--css-vars: yes)") && r.supports("color", "#00000000");
        return n = o || a, e || (i = n), n
    }, e.getNormalizedEventCoords = function (t, e, n) {
        if (!t) return {
            x: 0,
            y: 0
        };
        var i, r, o = e.x,
            a = e.y,
            s = o + n.left,
            c = a + n.top;
        return "touchstart" === t.type ? (i = t.changedTouches[0].pageX - s, r = t.changedTouches[0].pageY - c) : (i = t.pageX - s, r = t.pageY - c), {
            x: i,
            y: r
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getCorrectPropertyName = function (t, e) {
        if (o(t) && e in i) {
            var n = t.document.createElement("div"),
                r = i[e],
                a = r.standard,
                s = r.prefixed;
            return a in n.style ? a : s
        }
        return e
    }, e.getCorrectEventName = function (t, e) {
        if (o(t) && e in r) {
            var n = t.document.createElement("div"),
                i = r[e],
                a = i.standard,
                s = i.prefixed;
            return i.cssProperty in n.style ? a : s
        }
        return e
    };
    var i = {
        animation: {
            prefixed: "-webkit-animation",
            standard: "animation"
        },
        transform: {
            prefixed: "-webkit-transform",
            standard: "transform"
        },
        transition: {
            prefixed: "-webkit-transition",
            standard: "transition"
        }
    },
        r = {
            animationend: {
                cssProperty: "animation",
                prefixed: "webkitAnimationEnd",
                standard: "animationend"
            },
            animationiteration: {
                cssProperty: "animation",
                prefixed: "webkitAnimationIteration",
                standard: "animationiteration"
            },
            animationstart: {
                cssProperty: "animation",
                prefixed: "webkitAnimationStart",
                standard: "animationstart"
            },
            transitionend: {
                cssProperty: "transition",
                prefixed: "webkitTransitionEnd",
                standard: "transitionend"
            }
        };

    function o(t) {
        return Boolean(t.document) && "function" == typeof t.document.createElement
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        ANIM_CHECKED_INDETERMINATE: "ftt-blazor-checkbox--anim-checked-indeterminate",
        ANIM_CHECKED_UNCHECKED: "ftt-blazor-checkbox--anim-checked-unchecked",
        ANIM_INDETERMINATE_CHECKED: "ftt-blazor-checkbox--anim-indeterminate-checked",
        ANIM_INDETERMINATE_UNCHECKED: "ftt-blazor-checkbox--anim-indeterminate-unchecked",
        ANIM_UNCHECKED_CHECKED: "ftt-blazor-checkbox--anim-unchecked-checked",
        ANIM_UNCHECKED_INDETERMINATE: "ftt-blazor-checkbox--anim-unchecked-indeterminate",
        BACKGROUND: "ftt-blazor-checkbox__background",
        CHECKED: "ftt-blazor-checkbox--checked",
        CHECKMARK: "ftt-blazor-checkbox__checkmark",
        CHECKMARK_PATH: "ftt-blazor-checkbox__checkmark-path",
        DISABLED: "ftt-blazor-checkbox--disabled",
        INDETERMINATE: "ftt-blazor-checkbox--indeterminate",
        MIXEDMARK: "ftt-blazor-checkbox__mixedmark",
        NATIVE_CONTROL: "ftt-blazor-checkbox__native-control",
        ROOT: "ftt-blazor-checkbox",
        SELECTED: "ftt-blazor-checkbox--selected",
        UPGRADED: "ftt-blazor-checkbox--upgraded"
    }, e.strings = {
        ARIA_CHECKED_ATTR: "aria-checked",
        ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
        DATA_INDETERMINATE_ATTR: "data-indeterminate",
        NATIVE_CONTROL_SELECTOR: ".ftt-blazor-checkbox__native-control",
        TRANSITION_STATE_CHECKED: "checked",
        TRANSITION_STATE_INDETERMINATE: "indeterminate",
        TRANSITION_STATE_INIT: "init",
        TRANSITION_STATE_UNCHECKED: "unchecked"
    }, e.numbers = {
        ANIM_END_LATCH_MS: 250
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTextFieldCharacterCounterFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(51),
        a = function (t) {
            function e(n) {
                return t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        setContent: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.setCounterValue = function (t, e) {
                t = Math.min(t, e), this.adapter.setContent(t + " / " + e)
            }, e
        }(r.MDCFoundation);
    e.MDCTextFieldCharacterCounterFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        DISABLED: "ftt-blazor-text-field--disabled",
        FOCUSED: "ftt-blazor-text-field--focused",
        FULLWIDTH: "ftt-blazor-text-field--fullwidth",
        HELPER_LINE: "ftt-blazor-text-field-helper-line",
        INVALID: "ftt-blazor-text-field--invalid",
        LABEL_FLOATING: "ftt-blazor-text-field--label-floating",
        NO_LABEL: "ftt-blazor-text-field--no-label",
        OUTLINED: "ftt-blazor-text-field--outlined",
        ROOT: "ftt-blazor-text-field",
        TEXTAREA: "ftt-blazor-text-field--textarea",
        WITH_LEADING_ICON: "ftt-blazor-text-field--with-leading-icon",
        WITH_TRAILING_ICON: "ftt-blazor-text-field--with-trailing-icon"
    }, e.strings = {
        ARIA_CONTROLS: "aria-controls",
        INPUT_SELECTOR: ".ftt-blazor-text-field__input",
        LABEL_SELECTOR: ".ftt-blazor-floating-label",
        LEADING_ICON_SELECTOR: ".ftt-blazor-text-field__icon--leading",
        LINE_RIPPLE_SELECTOR: ".ftt-blazor-line-ripple",
        OUTLINE_SELECTOR: ".ftt-blazor-notched-outline",
        PREFIX_SELECTOR: ".ftt-blazor-text-field__affix--prefix",
        SUFFIX_SELECTOR: ".ftt-blazor-text-field__affix--suffix",
        TRAILING_ICON_SELECTOR: ".ftt-blazor-text-field__icon--trailing"
    }, e.numbers = {
        LABEL_SCALE: .75
    }, e.VALIDATION_ATTR_WHITELIST = ["pattern", "min", "max", "required", "step", "minlength", "maxlength"], e.ALWAYS_FLOAT_TYPES = ["color", "date", "datetime-local", "month", "range", "time", "week"]
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTextFieldHelperTextFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(54),
        a = function (t) {
            function e(n) {
                return t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        hasClass: function () {
                            return !1
                        },
                        setAttr: function () { },
                        removeAttr: function () { },
                        setContent: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.setContent = function (t) {
                this.adapter.setContent(t)
            }, e.prototype.setPersistent = function (t) {
                t ? this.adapter.addClass(o.cssClasses.HELPER_TEXT_PERSISTENT) : this.adapter.removeClass(o.cssClasses.HELPER_TEXT_PERSISTENT)
            }, e.prototype.setValidation = function (t) {
                t ? this.adapter.addClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG)
            }, e.prototype.showToScreenReader = function () {
                this.adapter.removeAttr(o.strings.ARIA_HIDDEN)
            }, e.prototype.setValidity = function (t) {
                var e = this.adapter.hasClass(o.cssClasses.HELPER_TEXT_PERSISTENT),
                    n = this.adapter.hasClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG) && !t;
                n ? this.adapter.setAttr(o.strings.ROLE, "alert") : this.adapter.removeAttr(o.strings.ROLE), e || n || this.hide_()
            }, e.prototype.hide_ = function () {
                this.adapter.setAttr(o.strings.ARIA_HIDDEN, "true")
            }, e
        }(r.MDCFoundation);
    e.MDCTextFieldHelperTextFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCList = void 0;
    var i = n(0),
        r = n(2),
        o = n(4),
        a = n(10),
        s = n(11),
        c = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e.prototype, "vertical", {
                set: function (t) {
                    this.foundation.setVerticalOrientation(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "listElements", {
                get: function () {
                    return [].slice.call(this.root.querySelectorAll("." + a.cssClasses.LIST_ITEM_CLASS))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "wrapFocus", {
                set: function (t) {
                    this.foundation.setWrapFocus(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "typeaheadInProgress", {
                get: function () {
                    return this.foundation.isTypeaheadInProgress()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "hasTypeahead", {
                set: function (t) {
                    this.foundation.setHasTypeahead(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "singleSelection", {
                set: function (t) {
                    this.foundation.setSingleSelection(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "selectedIndex", {
                get: function () {
                    return this.foundation.getSelectedIndex()
                },
                set: function (t) {
                    this.foundation.setSelectedIndex(t)
                },
                enumerable: !0,
                configurable: !0
            }), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialSyncWithDOM = function () {
                this.handleClick_ = this.handleClickEvent_.bind(this), this.handleKeydown_ = this.handleKeydownEvent_.bind(this), this.focusInEventListener_ = this.handleFocusInEvent_.bind(this), this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this), this.listen("keydown", this.handleKeydown_), this.listen("click", this.handleClick_), this.listen("focusin", this.focusInEventListener_), this.listen("focusout", this.focusOutEventListener_), this.layout(), this.initializeListType()
            }, e.prototype.destroy = function () {
                this.unlisten("keydown", this.handleKeydown_), this.unlisten("click", this.handleClick_), this.unlisten("focusin", this.focusInEventListener_), this.unlisten("focusout", this.focusOutEventListener_)
            }, e.prototype.layout = function () {
                var t = this.root.getAttribute(a.strings.ARIA_ORIENTATION);
                this.vertical = t !== a.strings.ARIA_ORIENTATION_HORIZONTAL, [].slice.call(this.root.querySelectorAll(".ftt-blazor-list-item:not([tabindex])")).forEach((function (t) {
                    t.setAttribute("tabindex", "-1")
                })), [].slice.call(this.root.querySelectorAll(a.strings.FOCUSABLE_CHILD_ELEMENTS)).forEach((function (t) {
                    return t.setAttribute("tabindex", "-1")
                })), this.foundation.layout()
            }, e.prototype.getPrimaryText = function (t) {
                var e = t.querySelector("." + a.cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS);
                if (e) return e.textContent || "";
                var n = t.querySelector("." + a.cssClasses.LIST_ITEM_TEXT_CLASS);
                return n && n.textContent || ""
            }, e.prototype.initializeListType = function () {
                var t = this,
                    e = this.root.querySelectorAll(a.strings.ARIA_ROLE_CHECKBOX_SELECTOR),
                    n = this.root.querySelector("\n      ." + a.cssClasses.LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + a.cssClasses.LIST_ITEM_SELECTED_CLASS + "\n    "),
                    i = this.root.querySelector(a.strings.ARIA_CHECKED_RADIO_SELECTOR);
                if (e.length) {
                    var r = this.root.querySelectorAll(a.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
                    this.selectedIndex = [].map.call(r, (function (e) {
                        return t.listElements.indexOf(e)
                    }))
                } else n ? (n.classList.contains(a.cssClasses.LIST_ITEM_ACTIVATED_CLASS) && this.foundation.setUseActivatedClass(!0), this.singleSelection = !0, this.selectedIndex = this.listElements.indexOf(n)) : i && (this.selectedIndex = this.listElements.indexOf(i))
            }, e.prototype.setEnabled = function (t, e) {
                this.foundation.setEnabled(t, e)
            }, e.prototype.typeaheadMatchItem = function (t, e) {
                return this.foundation.typeaheadMatchItem(t, e, !0)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClassForElementIndex: function (e, n) {
                            var i = t.listElements[e];
                            i && i.classList.add(n)
                        },
                        focusItemAtIndex: function (e) {
                            var n = t.listElements[e];
                            n && n.focus()
                        },
                        getAttributeForElementIndex: function (e, n) {
                            return t.listElements[e].getAttribute(n)
                        },
                        getFocusedElementIndex: function () {
                            return t.listElements.indexOf(document.activeElement)
                        },
                        getListItemCount: function () {
                            return t.listElements.length
                        },
                        getPrimaryTextAtIndex: function (e) {
                            return t.getPrimaryText(t.listElements[e])
                        },
                        hasCheckboxAtIndex: function (e) {
                            return !!t.listElements[e].querySelector(a.strings.CHECKBOX_SELECTOR)
                        },
                        hasRadioAtIndex: function (e) {
                            return !!t.listElements[e].querySelector(a.strings.RADIO_SELECTOR)
                        },
                        isCheckboxCheckedAtIndex: function (e) {
                            return t.listElements[e].querySelector(a.strings.CHECKBOX_SELECTOR).checked
                        },
                        isFocusInsideList: function () {
                            return t.root.contains(document.activeElement)
                        },
                        isRootFocused: function () {
                            return document.activeElement === t.root
                        },
                        listItemAtIndexHasClass: function (e, n) {
                            return t.listElements[e].classList.contains(n)
                        },
                        notifyAction: function (e) {
                            t.emit(a.strings.ACTION_EVENT, {
                                index: e
                            }, !0)
                        },
                        removeClassForElementIndex: function (e, n) {
                            var i = t.listElements[e];
                            i && i.classList.remove(n)
                        },
                        setAttributeForElementIndex: function (e, n, i) {
                            var r = t.listElements[e];
                            r && r.setAttribute(n, i)
                        },
                        setCheckedCheckboxOrRadioAtIndex: function (e, n) {
                            var i = t.listElements[e].querySelector(a.strings.CHECKBOX_RADIO_SELECTOR);
                            i.checked = n;
                            var r = document.createEvent("Event");
                            r.initEvent("change", !0, !0), i.dispatchEvent(r)
                        },
                        setTabIndexForListItemChildren: function (e, n) {
                            var i = t.listElements[e];
                            [].slice.call(i.querySelectorAll(a.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX)).forEach((function (t) {
                                return t.setAttribute("tabindex", n)
                            }))
                        }
                    };
                return new s.MDCListFoundation(e)
            }, e.prototype.getListItemIndex_ = function (t) {
                var e = t.target,
                    n = (0, o.closest)(e, "." + a.cssClasses.LIST_ITEM_CLASS + ", ." + a.cssClasses.ROOT);
                return n && (0, o.matches)(n, "." + a.cssClasses.LIST_ITEM_CLASS) ? this.listElements.indexOf(n) : -1
            }, e.prototype.handleFocusInEvent_ = function (t) {
                var e = this.getListItemIndex_(t);
                this.foundation.handleFocusIn(t, e)
            }, e.prototype.handleFocusOutEvent_ = function (t) {
                var e = this.getListItemIndex_(t);
                this.foundation.handleFocusOut(t, e)
            }, e.prototype.handleKeydownEvent_ = function (t) {
                var e = this.getListItemIndex_(t),
                    n = t.target;
                this.foundation.handleKeydown(t, n.classList.contains(a.cssClasses.LIST_ITEM_CLASS), e)
            }, e.prototype.handleClickEvent_ = function (t) {
                var e = this.getListItemIndex_(t),
                    n = t.target,
                    i = !(0, o.matches)(n, a.strings.CHECKBOX_RADIO_SELECTOR);
                this.foundation.handleClick(e, i)
            }, e
        }(r.MDCComponent);
    e.MDCList = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCMenuSurfaceFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(7),
        a = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = o.Corner.TOP_START, r.originCorner = o.Corner.TOP_START, r.anchorMargin = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, r.position = {
                    x: 0,
                    y: 0
                }, r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return o.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "Corner", {
                get: function () {
                    return o.Corner
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        hasClass: function () {
                            return !1
                        },
                        hasAnchor: function () {
                            return !1
                        },
                        isElementInContainer: function () {
                            return !1
                        },
                        isFocused: function () {
                            return !1
                        },
                        isRtl: function () {
                            return !1
                        },
                        getInnerDimensions: function () {
                            return {
                                height: 0,
                                width: 0
                            }
                        },
                        getAnchorDimensions: function () {
                            return null
                        },
                        getWindowDimensions: function () {
                            return {
                                height: 0,
                                width: 0
                            }
                        },
                        getBodyDimensions: function () {
                            return {
                                height: 0,
                                width: 0
                            }
                        },
                        getWindowScroll: function () {
                            return {
                                x: 0,
                                y: 0
                            }
                        },
                        setPosition: function () { },
                        setMaxHeight: function () { },
                        setTransformOrigin: function () { },
                        saveFocus: function () { },
                        restoreFocus: function () { },
                        notifyClose: function () { },
                        notifyOpen: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                var t = e.cssClasses,
                    n = t.ROOT,
                    i = t.OPEN;
                if (!this.adapter.hasClass(n)) throw new Error(n + " class required in root element.");
                this.adapter.hasClass(i) && (this.isSurfaceOpen = !0)
            }, e.prototype.destroy = function () {
                clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId)
            }, e.prototype.setAnchorCorner = function (t) {
                this.anchorCorner = t
            }, e.prototype.flipCornerHorizontally = function () {
                this.originCorner = this.originCorner ^ o.CornerBit.RIGHT
            }, e.prototype.setAnchorMargin = function (t) {
                this.anchorMargin.top = t.top || 0, this.anchorMargin.right = t.right || 0, this.anchorMargin.bottom = t.bottom || 0, this.anchorMargin.left = t.left || 0
            }, e.prototype.setIsHoisted = function (t) {
                this.isHoistedElement = t
            }, e.prototype.setFixedPosition = function (t) {
                this.isFixedPosition = t
            }, e.prototype.setAbsolutePosition = function (t, e) {
                this.position.x = this.isFinite(t) ? t : 0, this.position.y = this.isFinite(e) ? e : 0
            }, e.prototype.setQuickOpen = function (t) {
                this.isQuickOpen = t
            }, e.prototype.isOpen = function () {
                return this.isSurfaceOpen
            }, e.prototype.open = function () {
                var t = this;
                this.isSurfaceOpen || (this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame((function () {
                    t.adapter.addClass(e.cssClasses.OPEN), t.dimensions = t.adapter.getInnerDimensions(), t.autoposition(), t.openAnimationEndTimerId = setTimeout((function () {
                        t.openAnimationEndTimerId = 0, t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), t.adapter.notifyOpen()
                    }), o.numbers.TRANSITION_OPEN_DURATION)
                })), this.isSurfaceOpen = !0))
            }, e.prototype.close = function (t) {
                var n = this;
                void 0 === t && (t = !1), this.isSurfaceOpen && (this.isQuickOpen ? (this.isSurfaceOpen = !1, t || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose()) : (this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame((function () {
                    n.adapter.removeClass(e.cssClasses.OPEN), n.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), n.closeAnimationEndTimerId = setTimeout((function () {
                        n.closeAnimationEndTimerId = 0, n.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), n.adapter.notifyClose()
                    }), o.numbers.TRANSITION_CLOSE_DURATION)
                })), this.isSurfaceOpen = !1, t || this.maybeRestoreFocus()))
            }, e.prototype.handleBodyClick = function (t) {
                var e = t.target;
                this.adapter.isElementInContainer(e) || this.close()
            }, e.prototype.handleKeydown = function (t) {
                var e = t.keyCode;
                "Escape" !== t.key && 27 !== e || this.close()
            }, e.prototype.autoposition = function () {
                var t;
                this.measurements = this.getAutoLayoutmeasurements();
                var n = this.getoriginCorner(),
                    i = this.getMenuSurfaceMaxHeight(n),
                    r = this.hasBit(n, o.CornerBit.BOTTOM) ? "bottom" : "top",
                    a = this.hasBit(n, o.CornerBit.RIGHT) ? "right" : "left",
                    s = this.getHorizontalOriginOffset(n),
                    c = this.getVerticalOriginOffset(n),
                    u = this.measurements,
                    l = u.anchorSize,
                    d = u.surfaceSize,
                    f = ((t = {})[a] = s, t[r] = c, t);
                l.width / d.width > o.numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (a = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(a + " " + r), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(n, o.CornerBit.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)
            }, e.prototype.getAutoLayoutmeasurements = function () {
                var t = this.adapter.getAnchorDimensions(),
                    e = this.adapter.getBodyDimensions(),
                    n = this.adapter.getWindowDimensions(),
                    i = this.adapter.getWindowScroll();
                return {
                    anchorSize: t = t || {
                        top: this.position.y,
                        right: this.position.x,
                        bottom: this.position.y,
                        left: this.position.x,
                        width: 0,
                        height: 0
                    },
                    bodySize: e,
                    surfaceSize: this.dimensions,
                    viewportDistance: {
                        top: t.top,
                        right: n.width - t.right,
                        bottom: n.height - t.bottom,
                        left: t.left
                    },
                    viewportSize: n,
                    windowScroll: i
                }
            }, e.prototype.getoriginCorner = function () {
                var t, n, i = this.originCorner,
                    r = this.measurements,
                    a = r.viewportDistance,
                    s = r.anchorSize,
                    c = r.surfaceSize,
                    u = e.numbers.MARGIN_TO_EDGE;
                !(0 < (n = this.hasBit(this.anchorCorner, o.CornerBit.BOTTOM) ? (t = a.top - u + s.height + this.anchorMargin.bottom, a.bottom - u - this.anchorMargin.bottom) : (t = a.top - u + this.anchorMargin.top, a.bottom - u + s.height - this.anchorMargin.top)) - c.height) && n <= t && (i = this.setBit(i, o.CornerBit.BOTTOM));
                var l, d, f, p = this.adapter.isRtl(),
                    h = this.hasBit(this.anchorCorner, o.CornerBit.FLIP_RTL),
                    _ = this.hasBit(this.anchorCorner, o.CornerBit.RIGHT);
                d = (f = p && h ? !_ : _) ? (l = a.left + s.width + this.anchorMargin.right, a.right - this.anchorMargin.right) : (l = a.left + this.anchorMargin.left, a.right + s.width - this.anchorMargin.left);
                var m = 0 < l - c.width,
                    g = 0 < d - c.width,
                    C = this.hasBit(i, o.CornerBit.FLIP_RTL) && this.hasBit(i, o.CornerBit.RIGHT);
                return g && C && p || !m && C ? i = this.unsetBit(i, o.CornerBit.RIGHT) : (m && f && p || m && !f && _ || !g && d <= l) && (i = this.setBit(i, o.CornerBit.RIGHT)), i
            }, e.prototype.getMenuSurfaceMaxHeight = function (t) {
                var n = this.measurements.viewportDistance,
                    i = 0,
                    r = this.hasBit(t, o.CornerBit.BOTTOM),
                    a = this.hasBit(this.anchorCorner, o.CornerBit.BOTTOM),
                    s = e.numbers.MARGIN_TO_EDGE;
                return r ? (i = n.top + this.anchorMargin.top - s, a || (i += this.measurements.anchorSize.height)) : (i = n.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - s, a && (i -= this.measurements.anchorSize.height)), i
            }, e.prototype.getHorizontalOriginOffset = function (t) {
                var e = this.measurements.anchorSize,
                    n = this.hasBit(t, o.CornerBit.RIGHT),
                    i = this.hasBit(this.anchorCorner, o.CornerBit.RIGHT);
                if (n) {
                    var r = i ? e.width - this.anchorMargin.left : this.anchorMargin.right;
                    return this.isHoistedElement || this.isFixedPosition ? r - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : r
                }
                return i ? e.width - this.anchorMargin.right : this.anchorMargin.left
            }, e.prototype.getVerticalOriginOffset = function (t) {
                var e = this.measurements.anchorSize,
                    n = this.hasBit(t, o.CornerBit.BOTTOM),
                    i = this.hasBit(this.anchorCorner, o.CornerBit.BOTTOM);
                return n ? i ? e.height - this.anchorMargin.top : -this.anchorMargin.bottom : i ? e.height + this.anchorMargin.bottom : this.anchorMargin.top
            }, e.prototype.adjustPositionForHoistedElement = function (t) {
                var e, n, r = this.measurements,
                    o = r.windowScroll,
                    a = r.viewportDistance,
                    s = Object.keys(t);
                try {
                    for (var c = (0, i.__values)(s), u = c.next(); !u.done; u = c.next()) {
                        var l = u.value,
                            d = t[l] || 0;
                        d += a[l], this.isFixedPosition || ("top" === l ? d += o.y : "bottom" === l ? d -= o.y : "left" === l ? d += o.x : d -= o.x), t[l] = d
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        u && !u.done && (n = c.return) && n.call(c)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, e.prototype.maybeRestoreFocus = function () {
                var t = this.adapter.isFocused(),
                    e = document.activeElement && this.adapter.isElementInContainer(document.activeElement);
                (t || e) && this.adapter.restoreFocus()
            }, e.prototype.hasBit = function (t, e) {
                return Boolean(t & e)
            }, e.prototype.setBit = function (t, e) {
                return t | e
            }, e.prototype.unsetBit = function (t, e) {
                return t ^ e
            }, e.prototype.isFinite = function (t) {
                return "number" == typeof t && isFinite(t)
            }, e
        }(r.MDCFoundation);
    e.MDCMenuSurfaceFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        ACTIVATED: "ftt-blazor-select--activated",
        DISABLED: "ftt-blazor-select--disabled",
        FOCUSED: "ftt-blazor-select--focused",
        INVALID: "ftt-blazor-select--invalid",
        MENU_INVALID: "ftt-blazor-select__menu--invalid",
        OUTLINED: "ftt-blazor-select--outlined",
        REQUIRED: "ftt-blazor-select--required",
        ROOT: "ftt-blazor-select",
        SELECTED_ITEM_CLASS: "ftt-blazor-list-item--selected",
        WITH_LEADING_ICON: "ftt-blazor-select--with-leading-icon"
    },
        r = {
            ARIA_CONTROLS: "aria-controls",
            ARIA_SELECTED_ATTR: "aria-selected",
            CHANGE_EVENT: "MDCSelect:change",
            LABEL_SELECTOR: ".ftt-blazor-floating-label",
            LEADING_ICON_SELECTOR: ".ftt-blazor-select__icon",
            LINE_RIPPLE_SELECTOR: ".ftt-blazor-line-ripple",
            MENU_SELECTOR: ".ftt-blazor-select__menu",
            OUTLINE_SELECTOR: ".ftt-blazor-notched-outline",
            SELECTED_ITEM_SELECTOR: "." + i.SELECTED_ITEM_CLASS,
            SELECTED_TEXT_SELECTOR: ".ftt-blazor-select__selected-text",
            SELECT_ANCHOR_SELECTOR: ".ftt-blazor-select__anchor",
            VALUE_ATTR: "data-value"
        };
    e.cssClasses = i, e.strings = r, e.numbers = {
        LABEL_SCALE: .75,
        UNSET_INDEX: -1
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCSelectFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(12),
        a = n(7),
        s = n(25),
        c = function (t) {
            function e(n, r) {
                void 0 === r && (r = {});
                var o = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return o.selectedIndex = s.numbers.UNSET_INDEX, o.menuItemValues = [], o.disabled = !1, o.isMenuOpen = !1, o.useDefaultValidation = !0, o.customValidity = !0, o.leadingIcon = r.leadingIcon, o.helperText = r.helperText, o
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return s.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return s.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return s.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        hasClass: function () {
                            return !1
                        },
                        activateBottomLine: function () { },
                        deactivateBottomLine: function () { },
                        getSelectedMenuItem: function () {
                            return null
                        },
                        hasLabel: function () {
                            return !1
                        },
                        floatLabel: function () { },
                        getLabelWidth: function () {
                            return 0
                        },
                        setLabelRequired: function () { },
                        hasOutline: function () {
                            return !1
                        },
                        notchOutline: function () { },
                        closeOutline: function () { },
                        setRippleCenter: function () { },
                        notifyChange: function () { },
                        setSelectedText: function () { },
                        isSelectAnchorFocused: function () {
                            return !1
                        },
                        getSelectAnchorAttr: function () {
                            return ""
                        },
                        setSelectAnchorAttr: function () { },
                        removeSelectAnchorAttr: function () { },
                        addMenuClass: function () { },
                        removeMenuClass: function () { },
                        openMenu: function () { },
                        closeMenu: function () { },
                        getAnchorElement: function () {
                            return null
                        },
                        setMenuAnchorElement: function () { },
                        setMenuAnchorCorner: function () { },
                        setMenuWrapFocus: function () { },
                        setAttributeAtIndex: function () { },
                        focusMenuItemAtIndex: function () { },
                        getMenuItemCount: function () {
                            return 0
                        },
                        getMenuItemValues: function () {
                            return []
                        },
                        getMenuItemTextAtIndex: function () {
                            return ""
                        },
                        getMenuItemAttr: function () {
                            return ""
                        },
                        addClassAtIndex: function () { },
                        removeClassAtIndex: function () { },
                        isTypeaheadInProgress: function () {
                            return !1
                        },
                        typeaheadMatchItem: function () {
                            return -1
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getSelectedIndex = function () {
                return this.selectedIndex
            }, e.prototype.setSelectedIndex = function (t, e) {
                void 0 === e && (e = !1), t >= this.adapter.getMenuItemCount() || (this.removeSelectionAtIndex(this.selectedIndex), this.setSelectionAtIndex(t), e && this.adapter.closeMenu(), this.handleChange())
            }, e.prototype.setValue = function (t) {
                var e = this.menuItemValues.indexOf(t);
                this.setSelectedIndex(e)
            }, e.prototype.getValue = function () {
                var t = this.adapter.getSelectedMenuItem();
                return t && this.adapter.getMenuItemAttr(t, s.strings.VALUE_ATTR) || ""
            }, e.prototype.getDisabled = function () {
                return this.disabled
            }, e.prototype.setDisabled = function (t) {
                this.disabled = t, this.disabled ? (this.adapter.addClass(s.cssClasses.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(s.cssClasses.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString())
            }, e.prototype.openMenu = function () {
                this.adapter.addClass(s.cssClasses.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true")
            }, e.prototype.setHelperTextContent = function (t) {
                this.helperText && this.helperText.setContent(t)
            }, e.prototype.layout = function () {
                if (this.adapter.hasLabel()) {
                    var t = 0 < this.getValue().length,
                        e = this.adapter.hasClass(s.cssClasses.FOCUSED),
                        n = t || e,
                        i = this.adapter.hasClass(s.cssClasses.REQUIRED);
                    this.notchOutline(n), this.adapter.floatLabel(n), this.adapter.setLabelRequired(i)
                }
            }, e.prototype.layoutOptions = function () {
                this.menuItemValues = this.adapter.getMenuItemValues();
                var t = this.menuItemValues.indexOf(this.getValue());
                this.setSelectionAtIndex(t)
            }, e.prototype.handleMenuOpened = function () {
                if (0 !== this.menuItemValues.length) {
                    var t = 0 <= this.selectedIndex ? this.selectedIndex : 0;
                    this.adapter.focusMenuItemAtIndex(t)
                }
            }, e.prototype.handleMenuClosed = function () {
                this.adapter.removeClass(s.cssClasses.ACTIVATED), this.isMenuOpen = !1, this.adapter.setSelectAnchorAttr("aria-expanded", "false"), this.adapter.isSelectAnchorFocused() || this.blur()
            }, e.prototype.handleChange = function () {
                this.layout(), this.adapter.notifyChange(this.getValue()), this.adapter.hasClass(s.cssClasses.REQUIRED) && this.useDefaultValidation && (this.setValid(this.isValid()), this.helperText && this.helperText.setValidity(this.isValid()))
            }, e.prototype.handleMenuItemAction = function (t) {
                this.setSelectedIndex(t, !0)
            }, e.prototype.handleFocus = function () {
                this.adapter.addClass(s.cssClasses.FOCUSED), this.layout(), this.adapter.activateBottomLine()
            }, e.prototype.handleBlur = function () {
                this.isMenuOpen || this.blur()
            }, e.prototype.handleClick = function (t) {
                this.disabled || (this.isMenuOpen ? this.adapter.closeMenu() : (this.adapter.setRippleCenter(t), this.openMenu()))
            }, e.prototype.handleKeydown = function (t) {
                if (!this.isMenuOpen && this.adapter.hasClass(s.cssClasses.FOCUSED)) {
                    var e = (0, o.normalizeKey)(t) === o.KEY.ENTER,
                        n = (0, o.normalizeKey)(t) === o.KEY.SPACEBAR,
                        i = (0, o.normalizeKey)(t) === o.KEY.ARROW_UP,
                        r = (0, o.normalizeKey)(t) === o.KEY.ARROW_DOWN;
                    if (!n && t.key && 1 === t.key.length || n && this.adapter.isTypeaheadInProgress()) {
                        var a = n ? " " : t.key,
                            c = this.adapter.typeaheadMatchItem(a, this.selectedIndex);
                        return 0 <= c && this.setSelectedIndex(c), void t.preventDefault()
                    } (e || n || i || r) && (i && 0 < this.selectedIndex ? this.setSelectedIndex(this.selectedIndex - 1) : r && this.selectedIndex < this.adapter.getMenuItemCount() - 1 && this.setSelectedIndex(this.selectedIndex + 1), this.openMenu(), t.preventDefault())
                }
            }, e.prototype.notchOutline = function (t) {
                if (this.adapter.hasOutline()) {
                    var e = this.adapter.hasClass(s.cssClasses.FOCUSED);
                    if (t) {
                        var n = s.numbers.LABEL_SCALE,
                            i = this.adapter.getLabelWidth() * n;
                        this.adapter.notchOutline(i)
                    } else e || this.adapter.closeOutline()
                }
            }, e.prototype.setLeadingIconAriaLabel = function (t) {
                this.leadingIcon && this.leadingIcon.setAriaLabel(t)
            }, e.prototype.setLeadingIconContent = function (t) {
                this.leadingIcon && this.leadingIcon.setContent(t)
            }, e.prototype.setUseDefaultValidation = function (t) {
                this.useDefaultValidation = t
            }, e.prototype.setValid = function (t) {
                this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(s.cssClasses.INVALID), this.adapter.removeMenuClass(s.cssClasses.MENU_INVALID)) : (this.adapter.addClass(s.cssClasses.INVALID), this.adapter.addMenuClass(s.cssClasses.MENU_INVALID))
            }, e.prototype.isValid = function () {
                return this.useDefaultValidation && this.adapter.hasClass(s.cssClasses.REQUIRED) && !this.adapter.hasClass(s.cssClasses.DISABLED) ? this.selectedIndex !== s.numbers.UNSET_INDEX && (0 !== this.selectedIndex || Boolean(this.getValue())) : this.customValidity
            }, e.prototype.setRequired = function (t) {
                t ? this.adapter.addClass(s.cssClasses.REQUIRED) : this.adapter.removeClass(s.cssClasses.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t)
            }, e.prototype.getRequired = function () {
                return "true" === this.adapter.getSelectAnchorAttr("aria-required")
            }, e.prototype.init = function () {
                var t = this.adapter.getAnchorElement();
                t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(a.Corner.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(s.cssClasses.DISABLED)), this.layoutOptions(), this.layout()
            }, e.prototype.blur = function () {
                this.adapter.removeClass(s.cssClasses.FOCUSED), this.layout(), this.adapter.deactivateBottomLine(), this.adapter.hasClass(s.cssClasses.REQUIRED) && this.useDefaultValidation && (this.setValid(this.isValid()), this.helperText && this.helperText.setValidity(this.isValid()))
            }, e.prototype.setSelectionAtIndex = function (t) {
                (this.selectedIndex = t) !== s.numbers.UNSET_INDEX ? (this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.addClassAtIndex(t, s.cssClasses.SELECTED_ITEM_CLASS), this.adapter.setAttributeAtIndex(t, s.strings.ARIA_SELECTED_ATTR, "true")) : this.adapter.setSelectedText("")
            }, e.prototype.removeSelectionAtIndex = function (t) {
                t !== s.numbers.UNSET_INDEX && (this.adapter.removeClassAtIndex(t, s.cssClasses.SELECTED_ITEM_CLASS), this.adapter.setAttributeAtIndex(t, s.strings.ARIA_SELECTED_ATTR, "false"))
            }, e
        }(r.MDCFoundation);
    e.MDCSelectFoundation = c, e.default = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        ACTIVE: "ftt-blazor-slider--active",
        DISABLED: "ftt-blazor-slider--disabled",
        DISCRETE: "ftt-blazor-slider--discrete",
        FOCUS: "ftt-blazor-slider--focus",
        HAS_TRACK_MARKER: "ftt-blazor-slider--display-markers",
        IN_TRANSIT: "ftt-blazor-slider--in-transit",
        IS_DISCRETE: "ftt-blazor-slider--discrete",
        DISABLE_TOUCH_ACTION: "ftt-blazor-slider--disable-touch-action"
    }, e.strings = {
        ARIA_DISABLED: "aria-disabled",
        ARIA_VALUEMAX: "aria-valuemax",
        ARIA_VALUEMIN: "aria-valuemin",
        ARIA_VALUENOW: "aria-valuenow",
        CHANGE_EVENT: "MDCSlider:change",
        INPUT_EVENT: "MDCSlider:input",
        PIN_VALUE_MARKER_SELECTOR: ".ftt-blazor-slider__pin-value-marker",
        STEP_DATA_ATTR: "data-step",
        THUMB_CONTAINER_SELECTOR: ".ftt-blazor-slider__thumb-container",
        TRACK_MARKER_CONTAINER_SELECTOR: ".ftt-blazor-slider__track-marker-container",
        TRACK_SELECTOR: ".ftt-blazor-slider__track"
    }, e.numbers = {
        PAGE_FACTOR: 4
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCChipFoundation = void 0;
    var i, r = n(0),
        o = n(1),
        a = n(15),
        s = {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0
        };
    ! function (t) {
        t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS"
    }(i = i || {});
    var c = function (t) {
        function e(n) {
            var i = t.call(this, (0, r.__assign)((0, r.__assign)({}, e.defaultAdapter), n)) || this;
            return i.shouldRemoveOnTrailingIconClick_ = !0, i.shouldFocusPrimaryActionOnClick_ = !0, i
        }
        return (0, r.__extends)(e, t), Object.defineProperty(e, "strings", {
            get: function () {
                return a.strings
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "cssClasses", {
            get: function () {
                return a.cssClasses
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "defaultAdapter", {
            get: function () {
                return {
                    addClass: function () { },
                    addClassToLeadingIcon: function () { },
                    eventTargetHasClass: function () {
                        return !1
                    },
                    focusPrimaryAction: function () { },
                    focusTrailingAction: function () { },
                    getAttribute: function () {
                        return null
                    },
                    getCheckmarkBoundingClientRect: function () {
                        return s
                    },
                    getComputedStyleValue: function () {
                        return ""
                    },
                    getRootBoundingClientRect: function () {
                        return s
                    },
                    hasClass: function () {
                        return !1
                    },
                    hasLeadingIcon: function () {
                        return !1
                    },
                    isRTL: function () {
                        return !1
                    },
                    isTrailingActionNavigable: function () {
                        return !1
                    },
                    notifyEditFinish: function () { },
                    notifyEditStart: function () { },
                    notifyInteraction: function () { },
                    notifyNavigation: function () { },
                    notifyRemoval: function () { },
                    notifySelection: function () { },
                    notifyTrailingIconInteraction: function () { },
                    removeClass: function () { },
                    removeClassFromLeadingIcon: function () { },
                    removeTrailingActionFocus: function () { },
                    setPrimaryActionAttr: function () { },
                    setStyleProperty: function () { }
                }
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.isSelected = function () {
            return this.adapter.hasClass(a.cssClasses.SELECTED)
        }, e.prototype.isEditable = function () {
            return this.adapter.hasClass(a.cssClasses.EDITABLE)
        }, e.prototype.isEditing = function () {
            return this.adapter.hasClass(a.cssClasses.EDITING)
        }, e.prototype.setSelected = function (t) {
            this.setSelected_(t), this.notifySelection_(t)
        }, e.prototype.setSelectedFromChipSet = function (t, e) {
            this.setSelected_(t), e && this.notifyIgnoredSelection_(t)
        }, e.prototype.getShouldRemoveOnTrailingIconClick = function () {
            return this.shouldRemoveOnTrailingIconClick_
        }, e.prototype.setShouldRemoveOnTrailingIconClick = function (t) {
            this.shouldRemoveOnTrailingIconClick_ = t
        }, e.prototype.setShouldFocusPrimaryActionOnClick = function (t) {
            this.shouldFocusPrimaryActionOnClick_ = t
        }, e.prototype.getDimensions = function () {
            var t = this,
                e = function () {
                    return t.adapter.getRootBoundingClientRect()
                };
            if (!this.adapter.hasLeadingIcon()) {
                var n = t.adapter.getCheckmarkBoundingClientRect();
                if (n) {
                    var i = e();
                    return {
                        bottom: i.bottom,
                        height: i.height,
                        left: i.left,
                        right: i.right,
                        top: i.top,
                        width: i.width + n.height
                    }
                }
            }
            return e()
        }, e.prototype.beginExit = function () {
            this.adapter.addClass(a.cssClasses.CHIP_EXIT)
        }, e.prototype.handleClick = function () {
            this.adapter.notifyInteraction(), this.setPrimaryActionFocusable_(this.getFocusBehavior_())
        }, e.prototype.handleDoubleClick = function () {
            this.isEditable() && this.startEditing()
        }, e.prototype.handleTransitionEnd = function (t) {
            var e = this,
                n = this.adapter.eventTargetHasClass(t.target, a.cssClasses.CHIP_EXIT),
                i = "width" === t.propertyName,
                r = "opacity" === t.propertyName;
            if (n && r) {
                var o = this.adapter.getComputedStyleValue("width");
                requestAnimationFrame((function () {
                    e.adapter.setStyleProperty("width", o), e.adapter.setStyleProperty("padding", "0"), e.adapter.setStyleProperty("margin", "0"), requestAnimationFrame((function () {
                        e.adapter.setStyleProperty("width", "0")
                    }))
                }))
            } else {
                if (n && i) {
                    this.removeFocus();
                    var s = this.adapter.getAttribute(a.strings.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
                    this.adapter.notifyRemoval(s)
                }
                if (r) {
                    var c = this.adapter.eventTargetHasClass(t.target, a.cssClasses.LEADING_ICON) && this.adapter.hasClass(a.cssClasses.SELECTED),
                        u = this.adapter.eventTargetHasClass(t.target, a.cssClasses.CHECKMARK) && !this.adapter.hasClass(a.cssClasses.SELECTED);
                    c ? this.adapter.addClassToLeadingIcon(a.cssClasses.HIDDEN_LEADING_ICON) : u && this.adapter.removeClassFromLeadingIcon(a.cssClasses.HIDDEN_LEADING_ICON)
                }
            }
        }, e.prototype.handleFocusIn = function (t) {
            this.eventFromPrimaryAction_(t) && this.adapter.addClass(a.cssClasses.PRIMARY_ACTION_FOCUSED)
        }, e.prototype.handleFocusOut = function (t) {
            this.eventFromPrimaryAction_(t) && (this.isEditing() && this.finishEditing(), this.adapter.removeClass(a.cssClasses.PRIMARY_ACTION_FOCUSED))
        }, e.prototype.handleTrailingActionInteraction = function () {
            this.adapter.notifyTrailingIconInteraction(), this.removeChip_()
        }, e.prototype.handleKeydown = function (t) {
            if (!this.isEditing()) return this.isEditable() && this.shouldStartEditing(t) && (t.preventDefault(), this.startEditing()), this.shouldNotifyInteraction_(t) ? (this.adapter.notifyInteraction(), void this.setPrimaryActionFocusable_(this.getFocusBehavior_())) : this.isDeleteAction_(t) ? (t.preventDefault(), void this.removeChip_()) : void (a.navigationKeys.has(t.key) && (t.preventDefault(), this.focusNextAction_(t.key, a.EventSource.PRIMARY)));
            this.shouldFinishEditing(t) && (t.preventDefault(), this.finishEditing())
        }, e.prototype.handleTrailingActionNavigation = function (t) {
            return this.focusNextAction_(t.detail.key, a.EventSource.TRAILING)
        }, e.prototype.removeFocus = function () {
            this.adapter.setPrimaryActionAttr(a.strings.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus()
        }, e.prototype.focusPrimaryAction = function () {
            this.setPrimaryActionFocusable_(i.SHOULD_FOCUS)
        }, e.prototype.focusTrailingAction = function () {
            if (this.adapter.isTrailingActionNavigable()) return this.adapter.setPrimaryActionAttr(a.strings.TAB_INDEX, "-1"), void this.adapter.focusTrailingAction();
            this.focusPrimaryAction()
        }, e.prototype.setPrimaryActionFocusable_ = function (t) {
            this.adapter.setPrimaryActionAttr(a.strings.TAB_INDEX, "0"), t === i.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus()
        }, e.prototype.getFocusBehavior_ = function () {
            return this.shouldFocusPrimaryActionOnClick_ ? i.SHOULD_FOCUS : i.SHOULD_NOT_FOCUS
        }, e.prototype.focusNextAction_ = function (t, e) {
            var n = this.adapter.isTrailingActionNavigable(),
                i = this.getDirection_(t);
            return a.jumpChipKeys.has(t) || !n ? this.adapter.notifyNavigation(t, e) : e === a.EventSource.PRIMARY && i === a.Direction.RIGHT ? this.focusTrailingAction() : e === a.EventSource.TRAILING && i === a.Direction.LEFT ? this.focusPrimaryAction() : void this.adapter.notifyNavigation(t, a.EventSource.NONE)
        }, e.prototype.getDirection_ = function (t) {
            var e = this.adapter.isRTL(),
                n = t === a.strings.ARROW_LEFT_KEY || t === a.strings.IE_ARROW_LEFT_KEY,
                i = t === a.strings.ARROW_RIGHT_KEY || t === a.strings.IE_ARROW_RIGHT_KEY;
            return !e && n || e && i ? a.Direction.LEFT : a.Direction.RIGHT
        }, e.prototype.removeChip_ = function () {
            this.shouldRemoveOnTrailingIconClick_ && this.beginExit()
        }, e.prototype.shouldStartEditing = function (t) {
            return this.eventFromPrimaryAction_(t) && t.key === a.strings.ENTER_KEY
        }, e.prototype.shouldFinishEditing = function (t) {
            return t.key === a.strings.ENTER_KEY
        }, e.prototype.shouldNotifyInteraction_ = function (t) {
            return t.key === a.strings.ENTER_KEY || t.key === a.strings.SPACEBAR_KEY
        }, e.prototype.isDeleteAction_ = function (t) {
            return this.adapter.hasClass(a.cssClasses.DELETABLE) && (t.key === a.strings.BACKSPACE_KEY || t.key === a.strings.DELETE_KEY || t.key === a.strings.IE_DELETE_KEY)
        }, e.prototype.setSelected_ = function (t) {
            t ? (this.adapter.addClass(a.cssClasses.SELECTED), this.adapter.setPrimaryActionAttr(a.strings.ARIA_CHECKED, "true")) : (this.adapter.removeClass(a.cssClasses.SELECTED), this.adapter.setPrimaryActionAttr(a.strings.ARIA_CHECKED, "false"))
        }, e.prototype.notifySelection_ = function (t) {
            this.adapter.notifySelection(t, !1)
        }, e.prototype.notifyIgnoredSelection_ = function (t) {
            this.adapter.notifySelection(t, !0)
        }, e.prototype.eventFromPrimaryAction_ = function (t) {
            return this.adapter.eventTargetHasClass(t.target, a.cssClasses.PRIMARY_ACTION)
        }, e.prototype.startEditing = function () {
            this.adapter.addClass(a.cssClasses.EDITING), this.adapter.notifyEditStart()
        }, e.prototype.finishEditing = function () {
            this.adapter.removeClass(a.cssClasses.EDITING), this.adapter.notifyEditFinish()
        }, e
    }(o.MDCFoundation);
    e.MDCChipFoundation = c, e.default = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCChipSetFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(15),
        a = n(76),
        s = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.selectedChipIds_ = [], r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "strings", {
                get: function () {
                    return a.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return a.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        announceMessage: function () { },
                        focusChipPrimaryActionAtIndex: function () { },
                        focusChipTrailingActionAtIndex: function () { },
                        getChipListCount: function () {
                            return -1
                        },
                        getIndexOfChipById: function () {
                            return -1
                        },
                        hasClass: function () {
                            return !1
                        },
                        isRTL: function () {
                            return !1
                        },
                        removeChipAtIndex: function () { },
                        removeFocusFromChipAtIndex: function () { },
                        selectChipAtIndex: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getSelectedChipIds = function () {
                return this.selectedChipIds_.slice()
            }, e.prototype.select = function (t) {
                this.select_(t, !1)
            }, e.prototype.handleChipInteraction = function (t) {
                var e = t.chipId,
                    n = this.adapter.getIndexOfChipById(e);
                this.removeFocusFromChipsExcept_(n), (this.adapter.hasClass(a.cssClasses.CHOICE) || this.adapter.hasClass(a.cssClasses.FILTER)) && this.toggleSelect_(e)
            }, e.prototype.handleChipSelection = function (t) {
                var e = t.chipId,
                    n = t.selected;
                if (!t.shouldIgnore) {
                    var i = 0 <= this.selectedChipIds_.indexOf(e);
                    n && !i ? this.select(e) : !n && i && this.deselect_(e)
                }
            }, e.prototype.handleChipRemoval = function (t) {
                var e = t.chipId,
                    n = t.removedAnnouncement;
                n && this.adapter.announceMessage(n);
                var i = this.adapter.getIndexOfChipById(e);
                this.deselectAndNotifyClients_(e), this.adapter.removeChipAtIndex(i);
                var r = this.adapter.getChipListCount() - 1,
                    o = Math.min(i, r);
                this.removeFocusFromChipsExcept_(o), this.adapter.focusChipTrailingActionAtIndex(o)
            }, e.prototype.handleChipNavigation = function (t) {
                var e = t.chipId,
                    n = t.key,
                    i = t.source,
                    r = this.adapter.getChipListCount() - 1,
                    a = this.adapter.getIndexOfChipById(e);
                if (-1 !== a && o.navigationKeys.has(n)) {
                    var s = this.adapter.isRTL(),
                        c = n === o.strings.ARROW_LEFT_KEY || n === o.strings.IE_ARROW_LEFT_KEY,
                        u = n === o.strings.ARROW_RIGHT_KEY || n === o.strings.IE_ARROW_RIGHT_KEY,
                        l = n === o.strings.ARROW_DOWN_KEY || n === o.strings.IE_ARROW_DOWN_KEY,
                        d = !s && u || s && c || l,
                        f = n === o.strings.HOME_KEY,
                        p = n === o.strings.END_KEY;
                    d ? a++ : f ? a = 0 : p ? a = r : a--, a < 0 || r < a || (this.removeFocusFromChipsExcept_(a), this.focusChipAction_(a, n, i))
                }
            }, e.prototype.focusChipAction_ = function (t, e, n) {
                var i = o.jumpChipKeys.has(e);
                if (i && n === o.EventSource.PRIMARY) return this.adapter.focusChipPrimaryActionAtIndex(t);
                if (i && n === o.EventSource.TRAILING) return this.adapter.focusChipTrailingActionAtIndex(t);
                var r = this.getDirection_(e);
                return r === o.Direction.LEFT ? this.adapter.focusChipTrailingActionAtIndex(t) : r === o.Direction.RIGHT ? this.adapter.focusChipPrimaryActionAtIndex(t) : void 0
            }, e.prototype.getDirection_ = function (t) {
                var e = this.adapter.isRTL(),
                    n = t === o.strings.ARROW_LEFT_KEY || t === o.strings.IE_ARROW_LEFT_KEY,
                    i = t === o.strings.ARROW_RIGHT_KEY || t === o.strings.IE_ARROW_RIGHT_KEY;
                return !e && n || e && i ? o.Direction.LEFT : o.Direction.RIGHT
            }, e.prototype.deselect_ = function (t, e) {
                void 0 === e && (e = !1);
                var n = this.selectedChipIds_.indexOf(t);
                if (0 <= n) {
                    this.selectedChipIds_.splice(n, 1);
                    var i = this.adapter.getIndexOfChipById(t);
                    this.adapter.selectChipAtIndex(i, !1, e)
                }
            }, e.prototype.deselectAndNotifyClients_ = function (t) {
                this.deselect_(t, !0)
            }, e.prototype.toggleSelect_ = function (t) {
                0 <= this.selectedChipIds_.indexOf(t) ? this.deselectAndNotifyClients_(t) : this.selectAndNotifyClients_(t)
            }, e.prototype.removeFocusFromChipsExcept_ = function (t) {
                for (var e = this.adapter.getChipListCount(), n = 0; n < e; n++) n !== t && this.adapter.removeFocusFromChipAtIndex(n)
            }, e.prototype.selectAndNotifyClients_ = function (t) {
                this.select_(t, !0)
            }, e.prototype.select_ = function (t, e) {
                if (!(0 <= this.selectedChipIds_.indexOf(t))) {
                    if (this.adapter.hasClass(a.cssClasses.CHOICE) && 0 < this.selectedChipIds_.length) {
                        var n = this.selectedChipIds_[0],
                            i = this.adapter.getIndexOfChipById(n);
                        this.selectedChipIds_ = [], this.adapter.selectChipAtIndex(i, !1, e)
                    }
                    this.selectedChipIds_.push(t);
                    var r = this.adapter.getIndexOfChipById(t);
                    this.adapter.selectChipAtIndex(r, !0, e)
                }
            }, e
        }(r.MDCFoundation);
    e.MDCChipSetFoundation = s, e.default = s
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTopAppBarFoundation = void 0;
    var i = n(0),
        r = n(8),
        o = function (t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.wasDocked_ = !0, n.isDockedShowing_ = !0, n.currentAppBarOffsetTop_ = 0, n.isCurrentlyBeingResized_ = !1, n.resizeThrottleId_ = 0, n.resizeDebounceId_ = 0, n.lastScrollPosition_ = n.adapter.getViewportScrollY(), n.topAppBarHeight_ = n.adapter.getTopAppBarHeight(), n
            }
            return (0, i.__extends)(e, t), e.prototype.destroy = function () {
                t.prototype.destroy.call(this), this.adapter.setStyle("top", "")
            }, e.prototype.handleTargetScroll = function () {
                var t = Math.max(this.adapter.getViewportScrollY(), 0),
                    e = t - this.lastScrollPosition_;
                this.lastScrollPosition_ = t, this.isCurrentlyBeingResized_ || (this.currentAppBarOffsetTop_ -= e, 0 < this.currentAppBarOffsetTop_ ? this.currentAppBarOffsetTop_ = 0 : Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_ && (this.currentAppBarOffsetTop_ = -this.topAppBarHeight_), this.moveTopAppBar_())
            }, e.prototype.handleWindowResize = function () {
                var t = this;
                this.resizeThrottleId_ || (this.resizeThrottleId_ = setTimeout((function () {
                    t.resizeThrottleId_ = 0, t.throttledResizeHandler_()
                }), r.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)), this.isCurrentlyBeingResized_ = !0, this.resizeDebounceId_ && clearTimeout(this.resizeDebounceId_), this.resizeDebounceId_ = setTimeout((function () {
                    t.handleTargetScroll(), t.isCurrentlyBeingResized_ = !1, t.resizeDebounceId_ = 0
                }), r.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)
            }, e.prototype.checkForUpdate_ = function () {
                var t = -this.topAppBarHeight_,
                    e = this.currentAppBarOffsetTop_ < 0,
                    n = this.currentAppBarOffsetTop_ > t,
                    i = e && n;
                if (i) this.wasDocked_ = !1;
                else {
                    if (!this.wasDocked_) return this.wasDocked_ = !0;
                    if (this.isDockedShowing_ !== n) return this.isDockedShowing_ = n, !0
                }
                return i
            }, e.prototype.moveTopAppBar_ = function () {
                if (this.checkForUpdate_()) {
                    var t = this.currentAppBarOffsetTop_;
                    Math.abs(t) >= this.topAppBarHeight_ && (t = -r.numbers.MAX_TOP_APP_BAR_HEIGHT), this.adapter.setStyle("top", t + "px")
                }
            }, e.prototype.throttledResizeHandler_ = function () {
                var t = this.adapter.getTopAppBarHeight();
                this.topAppBarHeight_ !== t && (this.wasDocked_ = !1, this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - t, this.topAppBarHeight_ = t), this.handleTargetScroll()
            }, e
        }(n(31).MDCTopAppBarBaseFoundation);
    e.MDCTopAppBarFoundation = o, e.default = o
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTopAppBarBaseFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(8),
        a = function (t) {
            function e(n) {
                return t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return o.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        hasClass: function () {
                            return !1
                        },
                        setStyle: function () { },
                        getTopAppBarHeight: function () {
                            return 0
                        },
                        notifyNavigationIconClicked: function () { },
                        getViewportScrollY: function () {
                            return 0
                        },
                        getTotalActionItems: function () {
                            return 0
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.handleTargetScroll = function () { }, e.prototype.handleWindowResize = function () { }, e.prototype.handleNavigationClick = function () {
                this.adapter.notifyNavigationIconClicked()
            }, e
        }(r.MDCFoundation);
    e.MDCTopAppBarBaseFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCDismissibleDrawerFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(80),
        a = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.animationFrame_ = 0, r.animationTimer_ = 0, r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        hasClass: function () {
                            return !1
                        },
                        elementHasClass: function () {
                            return !1
                        },
                        notifyClose: function () { },
                        notifyOpen: function () { },
                        saveFocus: function () { },
                        restoreFocus: function () { },
                        focusActiveNavigationItem: function () { },
                        trapFocus: function () { },
                        releaseFocus: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.destroy = function () {
                this.animationFrame_ && cancelAnimationFrame(this.animationFrame_), this.animationTimer_ && clearTimeout(this.animationTimer_)
            }, e.prototype.open = function () {
                var t = this;
                this.isOpen() || this.isOpening() || this.isClosing() || (this.adapter.addClass(o.cssClasses.OPEN), this.adapter.addClass(o.cssClasses.ANIMATE), this.runNextAnimationFrame_((function () {
                    t.adapter.addClass(o.cssClasses.OPENING)
                })), this.adapter.saveFocus())
            }, e.prototype.close = function () {
                !this.isOpen() || this.isOpening() || this.isClosing() || this.adapter.addClass(o.cssClasses.CLOSING)
            }, e.prototype.isOpen = function () {
                return this.adapter.hasClass(o.cssClasses.OPEN)
            }, e.prototype.isOpening = function () {
                return this.adapter.hasClass(o.cssClasses.OPENING) || this.adapter.hasClass(o.cssClasses.ANIMATE)
            }, e.prototype.isClosing = function () {
                return this.adapter.hasClass(o.cssClasses.CLOSING)
            }, e.prototype.handleKeydown = function (t) {
                var e = t.keyCode;
                "Escape" !== t.key && 27 !== e || this.close()
            }, e.prototype.handleTransitionEnd = function (t) {
                var e = o.cssClasses.OPENING,
                    n = o.cssClasses.CLOSING,
                    i = o.cssClasses.OPEN,
                    r = o.cssClasses.ANIMATE,
                    a = o.cssClasses.ROOT;
                this.isElement_(t.target) && this.adapter.elementHasClass(t.target, a) && (this.isClosing() ? (this.adapter.removeClass(i), this.closed_(), this.adapter.restoreFocus(), this.adapter.notifyClose()) : (this.adapter.focusActiveNavigationItem(), this.opened_(), this.adapter.notifyOpen()), this.adapter.removeClass(r), this.adapter.removeClass(e), this.adapter.removeClass(n))
            }, e.prototype.opened_ = function () { }, e.prototype.closed_ = function () { }, e.prototype.runNextAnimationFrame_ = function (t) {
                var e = this;
                cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = requestAnimationFrame((function () {
                    e.animationFrame_ = 0, clearTimeout(e.animationTimer_), e.animationTimer_ = setTimeout(t, 0)
                }))
            }, e.prototype.isElement_ = function (t) {
                return Boolean(t.classList)
            }, e
        }(r.MDCFoundation);
    e.MDCDismissibleDrawerFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        CLOSING: "ftt-blazor-snackbar--closing",
        OPEN: "ftt-blazor-snackbar--open",
        OPENING: "ftt-blazor-snackbar--opening"
    }, e.strings = {
        ACTION_SELECTOR: ".ftt-blazor-snackbar__action",
        ARIA_LIVE_LABEL_TEXT_ATTR: "data-ftt-blazor-snackbar-label-text",
        CLOSED_EVENT: "MDCSnackbar:closed",
        CLOSING_EVENT: "MDCSnackbar:closing",
        DISMISS_SELECTOR: ".ftt-blazor-snackbar__dismiss",
        LABEL_SELECTOR: ".ftt-blazor-snackbar__label",
        OPENED_EVENT: "MDCSnackbar:opened",
        OPENING_EVENT: "MDCSnackbar:opening",
        REASON_ACTION: "action",
        REASON_DISMISS: "dismiss",
        SURFACE_SELECTOR: ".ftt-blazor-snackbar__surface"
    }, e.numbers = {
        DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5e3,
        INDETERMINATE: -1,
        MAX_AUTO_DISMISS_TIMEOUT_MS: 1e4,
        MIN_AUTO_DISMISS_TIMEOUT_MS: 4e3,
        SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
        SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
        ARIA_LIVE_DELAY_MS: 1e3
    }
}, function (t, e, n) {
    "use strict";

    function i(t) {
        this.adapter = t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTabScrollerRTL = i, e.default = i
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTabIndicatorFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(177),
        a = function (t) {
            function e(n) {
                return t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        computeContentClientRect: function () {
                            return {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                width: 0,
                                height: 0
                            }
                        },
                        setContentStyleProperty: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.computeContentClientRect = function () {
                return this.adapter.computeContentClientRect()
            }, e
        }(r.MDCFoundation);
    e.MDCTabIndicatorFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = e.cssClasses = {
        CELL: "ftt-blazor-data-table__cell",
        CELL_NUMERIC: "ftt-blazor-data-table__cell--numeric",
        CONTENT: "ftt-blazor-data-table__content",
        HEADER_CELL: "ftt-blazor-data-table__header-cell",
        HEADER_CELL_LABEL: "ftt-blazor-data-table__header-cell-label",
        HEADER_CELL_SORTED: "ftt-blazor-data-table__header-cell--sorted",
        HEADER_CELL_SORTED_DESCENDING: "ftt-blazor-data-table__header-cell--sorted-descending",
        HEADER_CELL_WITH_SORT: "ftt-blazor-data-table__header-cell--with-sort",
        HEADER_CELL_WRAPPER: "ftt-blazor-data-table__header-cell-wrapper",
        HEADER_ROW: "ftt-blazor-data-table__header-row",
        HEADER_ROW_CHECKBOX: "ftt-blazor-data-table__header-row-checkbox",
        IN_PROGRESS: "ftt-blazor-data-table--in-progress",
        PROGRESS_INDICATOR: "ftt-blazor-data-table__progress-indicator",
        ROOT: "ftt-blazor-data-table",
        ROW: "ftt-blazor-data-table__row",
        ROW_CHECKBOX: "ftt-blazor-data-table__row-checkbox",
        ROW_SELECTED: "ftt-blazor-data-table__row--selected",
        SORT_ICON_BUTTON: "ftt-blazor-data-table__sort-icon-button",
        SORT_STATUS_LABEL: "ftt-blazor-data-table__sort-status-label",
        PAGINATION_ROWS_PER_PAGE_SELECT: "ftt-blazor-data-table__pagination-rows-per-page-select",
        PAGINATION_ROWS_PER_PAGE_LABEL: "ftt-blazor-data-table__pagination-rows-per-page-label"
    },
        r = e.attributes = {
            ARIA_SELECTED: "aria-selected",
            ARIA_SORT: "aria-sort"
        },
        o = e.dataAttributes = {
            COLUMN_ID: "data-column-id",
            ROW_ID: "data-row-id"
        },
        a = e.selectors = {
            CONTENT: "." + i.CONTENT,
            HEADER_CELL: "." + i.HEADER_CELL,
            HEADER_CELL_WITH_SORT: "." + i.HEADER_CELL_WITH_SORT,
            HEADER_ROW: "." + i.HEADER_ROW,
            HEADER_ROW_CHECKBOX: "." + i.HEADER_ROW_CHECKBOX,
            PROGRESS_INDICATOR: "." + i.PROGRESS_INDICATOR,
            ROW: "." + i.ROW,
            ROW_CHECKBOX: "." + i.ROW_CHECKBOX,
            ROW_SELECTED: "." + i.ROW_SELECTED,
            SORT_ICON_BUTTON: "." + i.SORT_ICON_BUTTON,
            SORT_STATUS_LABEL: "." + i.SORT_STATUS_LABEL
        },
        s = (e.messages = {
            SORTED_IN_DESCENDING: "Sorted in descending order",
            SORTED_IN_ASCENDING: "Sorted in ascending order"
        }, e.strings = {
            ARIA_SELECTED: r.ARIA_SELECTED,
            ARIA_SORT: r.ARIA_SORT,
            DATA_ROW_ID_ATTR: o.ROW_ID,
            HEADER_ROW_CHECKBOX_SELECTOR: a.HEADER_ROW_CHECKBOX,
            ROW_CHECKBOX_SELECTOR: a.ROW_CHECKBOX,
            ROW_SELECTED_SELECTOR: a.ROW_SELECTED,
            ROW_SELECTOR: a.ROW
        }, e.SortValue = void 0);
    ! function (t) {
        t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other"
    }(s || (e.SortValue = s = {})), e.events = {
        ROW_SELECTION_CHANGED: "MDCDataTable:rowSelectionChanged",
        SELECTED_ALL: "MDCDataTable:selectedAll",
        UNSELECTED_ALL: "MDCDataTable:unselectedAll",
        SORTED: "MDCDataTable:sorted"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        BG_FOCUSED: "ftt-blazor-ripple-upgraded--background-focused",
        FG_ACTIVATION: "ftt-blazor-ripple-upgraded--foreground-activation",
        FG_DEACTIVATION: "ftt-blazor-ripple-upgraded--foreground-deactivation",
        ROOT: "ftt-blazor-ripple-upgraded",
        UNBOUNDED: "ftt-blazor-ripple-upgraded--unbounded"
    }, e.strings = {
        VAR_FG_SCALE: "--ftt-blazor-ripple-fg-scale",
        VAR_FG_SIZE: "--ftt-blazor-ripple-fg-size",
        VAR_FG_TRANSLATE_END: "--ftt-blazor-ripple-fg-translate-end",
        VAR_FG_TRANSLATE_START: "--ftt-blazor-ripple-fg-translate-start",
        VAR_LEFT: "--ftt-blazor-ripple-left",
        VAR_TOP: "--ftt-blazor-ripple-top"
    }, e.numbers = {
        DEACTIVATION_TIMEOUT_MS: 225,
        FG_DEACTIVATION_MS: 150,
        INITIAL_ORIGIN_SCALE: .6,
        PADDING: 10,
        TAP_DELAY_MS: 300
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(101);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(41);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(40);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }))
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCFormFieldFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(41),
        a = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.click = function () {
                    r.handleClick()
                }, r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        activateInputRipple: function () { },
                        deactivateInputRipple: function () { },
                        deregisterInteractionHandler: function () { },
                        registerInteractionHandler: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                this.adapter.registerInteractionHandler("click", this.click)
            }, e.prototype.destroy = function () {
                this.adapter.deregisterInteractionHandler("click", this.click)
            }, e.prototype.handleClick = function () {
                var t = this;
                this.adapter.activateInputRipple(), requestAnimationFrame((function () {
                    t.adapter.deactivateInputRipple()
                }))
            }, e
        }(r.MDCFoundation);
    e.MDCFormFieldFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        ROOT: "ftt-blazor-form-field"
    }, e.strings = {
        LABEL_SELECTOR: ".ftt-blazor-form-field > label"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCCheckbox = void 0;
    var i = n(0),
        r = n(18),
        o = n(2),
        a = n(6),
        s = n(4),
        c = n(3),
        u = n(5),
        l = n(19),
        d = n(43),
        f = ["checked", "indeterminate"],
        p = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ripple_ = e.createRipple_(), e
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "ripple", {
                get: function () {
                    return this.ripple_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "checked", {
                get: function () {
                    return this.nativeControl_.checked
                },
                set: function (t) {
                    this.nativeControl_.checked = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "indeterminate", {
                get: function () {
                    return this.nativeControl_.indeterminate
                },
                set: function (t) {
                    this.nativeControl_.indeterminate = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "disabled", {
                get: function () {
                    return this.nativeControl_.disabled
                },
                set: function (t) {
                    this.foundation.setDisabled(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this.nativeControl_.value
                },
                set: function (t) {
                    this.nativeControl_.value = t
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                var t = l.strings.DATA_INDETERMINATE_ATTR;
                this.nativeControl_.indeterminate = "true" === this.nativeControl_.getAttribute(t), this.nativeControl_.removeAttribute(t)
            }, e.prototype.initialSyncWithDOM = function () {
                var t = this;
                this.handleChange_ = function () {
                    return t.foundation.handleChange()
                }, this.handleAnimationEnd_ = function () {
                    return t.foundation.handleAnimationEnd()
                }, this.nativeControl_.addEventListener("change", this.handleChange_), this.listen((0, r.getCorrectEventName)(window, "animationend"), this.handleAnimationEnd_), this.installPropertyChangeHooks_()
            }, e.prototype.destroy = function () {
                this.ripple_.destroy(), this.nativeControl_.removeEventListener("change", this.handleChange_), this.unlisten((0, r.getCorrectEventName)(window, "animationend"), this.handleAnimationEnd_), this.uninstallPropertyChangeHooks_(), t.prototype.destroy.call(this)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        forceLayout: function () {
                            return t.root.offsetWidth
                        },
                        hasNativeControl: function () {
                            return !!t.nativeControl_
                        },
                        isAttachedToDOM: function () {
                            return Boolean(t.root.parentNode)
                        },
                        isChecked: function () {
                            return t.checked
                        },
                        isIndeterminate: function () {
                            return t.indeterminate
                        },
                        removeClass: function (e) {
                            t.root.classList.remove(e)
                        },
                        removeNativeControlAttr: function (e) {
                            t.nativeControl_.removeAttribute(e)
                        },
                        setNativeControlAttr: function (e, n) {
                            t.nativeControl_.setAttribute(e, n)
                        },
                        setNativeControlDisabled: function (e) {
                            t.nativeControl_.disabled = e
                        }
                    };
                return new d.MDCCheckboxFoundation(e)
            }, e.prototype.createRipple_ = function () {
                var t = this,
                    e = (0, i.__assign)((0, i.__assign)({}, c.MDCRipple.createAdapter(this)), {
                        deregisterInteractionHandler: function (e, n) {
                            return t.nativeControl_.removeEventListener(e, n, (0, a.applyPassive)())
                        },
                        isSurfaceActive: function () {
                            return (0, s.matches)(t.nativeControl_, ":active")
                        },
                        isUnbounded: function () {
                            return !0
                        },
                        registerInteractionHandler: function (e, n) {
                            return t.nativeControl_.addEventListener(e, n, (0, a.applyPassive)())
                        }
                    });
                return new c.MDCRipple(this.root, new u.MDCRippleFoundation(e))
            }, e.prototype.installPropertyChangeHooks_ = function () {
                var t = this,
                    e = this.nativeControl_,
                    n = Object.getPrototypeOf(e);
                f.forEach((function (i) {
                    var r = Object.getOwnPropertyDescriptor(n, i);
                    if (h(r)) {
                        var o = r.get,
                            a = {
                                configurable: r.configurable,
                                enumerable: r.enumerable,
                                get: o,
                                set: function (n) {
                                    r.set.call(e, n), t.foundation.handleChange()
                                }
                            };
                        Object.defineProperty(e, i, a)
                    }
                }))
            }, e.prototype.uninstallPropertyChangeHooks_ = function () {
                var t = this.nativeControl_,
                    e = Object.getPrototypeOf(t);
                f.forEach((function (n) {
                    var i = Object.getOwnPropertyDescriptor(e, n);
                    h(i) && Object.defineProperty(t, n, i)
                }))
            }, Object.defineProperty(e.prototype, "nativeControl_", {
                get: function () {
                    var t = l.strings.NATIVE_CONTROL_SELECTOR,
                        e = this.root.querySelector(t);
                    if (!e) throw new Error("Checkbox component requires a " + t + " element");
                    return e
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(o.MDCComponent);

    function h(t) {
        return t && "function" == typeof t.set
    }
    e.MDCCheckbox = p
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCCheckboxFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(19),
        a = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.currentCheckState_ = o.strings.TRANSITION_STATE_INIT, r.currentAnimationClass_ = "", r.animEndLatchTimer_ = 0, r.enableAnimationEndHandler_ = !1, r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return o.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        forceLayout: function () { },
                        hasNativeControl: function () {
                            return !1
                        },
                        isAttachedToDOM: function () {
                            return !1
                        },
                        isChecked: function () {
                            return !1
                        },
                        isIndeterminate: function () {
                            return !1
                        },
                        removeClass: function () { },
                        removeNativeControlAttr: function () { },
                        setNativeControlAttr: function () { },
                        setNativeControlDisabled: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                this.currentCheckState_ = this.determineCheckState_(), this.updateAriaChecked_(), this.adapter.addClass(o.cssClasses.UPGRADED)
            }, e.prototype.destroy = function () {
                clearTimeout(this.animEndLatchTimer_)
            }, e.prototype.setDisabled = function (t) {
                this.adapter.setNativeControlDisabled(t), t ? this.adapter.addClass(o.cssClasses.DISABLED) : this.adapter.removeClass(o.cssClasses.DISABLED)
            }, e.prototype.handleAnimationEnd = function () {
                var t = this;
                this.enableAnimationEndHandler_ && (clearTimeout(this.animEndLatchTimer_), this.animEndLatchTimer_ = setTimeout((function () {
                    t.adapter.removeClass(t.currentAnimationClass_), t.enableAnimationEndHandler_ = !1
                }), o.numbers.ANIM_END_LATCH_MS))
            }, e.prototype.handleChange = function () {
                this.transitionCheckState_()
            }, e.prototype.transitionCheckState_ = function () {
                if (this.adapter.hasNativeControl()) {
                    var t = this.currentCheckState_,
                        e = this.determineCheckState_();
                    if (t !== e) {
                        this.updateAriaChecked_();
                        var n = o.strings.TRANSITION_STATE_UNCHECKED,
                            i = o.cssClasses.SELECTED;
                        e === n ? this.adapter.removeClass(i) : this.adapter.addClass(i), 0 < this.currentAnimationClass_.length && (clearTimeout(this.animEndLatchTimer_), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass_)), this.currentAnimationClass_ = this.getTransitionAnimationClass_(t, e), this.currentCheckState_ = e, this.adapter.isAttachedToDOM() && 0 < this.currentAnimationClass_.length && (this.adapter.addClass(this.currentAnimationClass_), this.enableAnimationEndHandler_ = !0)
                    }
                }
            }, e.prototype.determineCheckState_ = function () {
                var t = o.strings.TRANSITION_STATE_INDETERMINATE,
                    e = o.strings.TRANSITION_STATE_CHECKED,
                    n = o.strings.TRANSITION_STATE_UNCHECKED;
                return this.adapter.isIndeterminate() ? t : this.adapter.isChecked() ? e : n
            }, e.prototype.getTransitionAnimationClass_ = function (t, n) {
                var i = o.strings.TRANSITION_STATE_INIT,
                    r = o.strings.TRANSITION_STATE_CHECKED,
                    a = o.strings.TRANSITION_STATE_UNCHECKED,
                    s = e.cssClasses,
                    c = s.ANIM_UNCHECKED_CHECKED,
                    u = s.ANIM_UNCHECKED_INDETERMINATE,
                    l = s.ANIM_CHECKED_UNCHECKED,
                    d = s.ANIM_CHECKED_INDETERMINATE,
                    f = s.ANIM_INDETERMINATE_CHECKED,
                    p = s.ANIM_INDETERMINATE_UNCHECKED;
                switch (t) {
                    case i:
                        return n === a ? "" : n === r ? f : p;
                    case a:
                        return n === r ? c : u;
                    case r:
                        return n === a ? l : d;
                    default:
                        return n === r ? f : p
                }
            }, e.prototype.updateAriaChecked_ = function () {
                this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(o.strings.ARIA_CHECKED_ATTR, o.strings.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(o.strings.ARIA_CHECKED_ATTR)
            }, e
        }(r.MDCFoundation);
    e.MDCCheckboxFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(104);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(21);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(52);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }));
    var a = n(109);
    Object.keys(a).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return a[t]
            }
        })
    }));
    var s = n(110);
    Object.keys(s).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return s[t]
            }
        })
    }));
    var c = n(111);
    Object.keys(c).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return c[t]
            }
        })
    }))
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCFloatingLabel = void 0;
    var i = n(0),
        r = n(2),
        o = n(4),
        a = n(46),
        s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.shake = function (t) {
                this.foundation.shake(t)
            }, e.prototype.float = function (t) {
                this.foundation.float(t)
            }, e.prototype.setRequired = function (t) {
                this.foundation.setRequired(t)
            }, e.prototype.getWidth = function () {
                return this.foundation.getWidth()
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        getWidth: function () {
                            return (0, o.estimateScrollWidth)(t.root)
                        },
                        registerInteractionHandler: function (e, n) {
                            return t.listen(e, n)
                        },
                        deregisterInteractionHandler: function (e, n) {
                            return t.unlisten(e, n)
                        }
                    };
                return new a.MDCFloatingLabelFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCFloatingLabel = s
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCFloatingLabelFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(105),
        a = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.shakeAnimationEndHandler_ = function () {
                    return r.handleShakeAnimationEnd_()
                }, r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        getWidth: function () {
                            return 0
                        },
                        registerInteractionHandler: function () { },
                        deregisterInteractionHandler: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler_)
            }, e.prototype.destroy = function () {
                this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler_)
            }, e.prototype.getWidth = function () {
                return this.adapter.getWidth()
            }, e.prototype.shake = function (t) {
                var n = e.cssClasses.LABEL_SHAKE;
                t ? this.adapter.addClass(n) : this.adapter.removeClass(n)
            }, e.prototype.float = function (t) {
                var n = e.cssClasses,
                    i = n.LABEL_FLOAT_ABOVE,
                    r = n.LABEL_SHAKE;
                t ? this.adapter.addClass(i) : (this.adapter.removeClass(i), this.adapter.removeClass(r))
            }, e.prototype.setRequired = function (t) {
                var n = e.cssClasses.LABEL_REQUIRED;
                t ? this.adapter.addClass(n) : this.adapter.removeClass(n)
            }, e.prototype.handleShakeAnimationEnd_ = function () {
                var t = e.cssClasses.LABEL_SHAKE;
                this.adapter.removeClass(t)
            }, e
        }(r.MDCFoundation);
    e.MDCFloatingLabelFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCLineRipple = void 0;
    var i = n(0),
        r = n(2),
        o = n(106),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.activate = function () {
                this.foundation.activate()
            }, e.prototype.deactivate = function () {
                this.foundation.deactivate()
            }, e.prototype.setRippleCenter = function (t) {
                this.foundation.setRippleCenter(t)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        hasClass: function (e) {
                            return t.root.classList.contains(e)
                        },
                        setStyle: function (e, n) {
                            return t.root.style.setProperty(e, n)
                        },
                        registerEventHandler: function (e, n) {
                            return t.listen(e, n)
                        },
                        deregisterEventHandler: function (e, n) {
                            return t.unlisten(e, n)
                        }
                    };
                return new o.MDCLineRippleFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCLineRipple = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCNotchedOutline = void 0;
    var i = n(0),
        r = n(2),
        o = n(46),
        a = n(49),
        s = n(108),
        c = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialSyncWithDOM = function () {
                this.notchElement_ = this.root.querySelector(a.strings.NOTCH_ELEMENT_SELECTOR);
                var t = this.root.querySelector("." + o.MDCFloatingLabelFoundation.cssClasses.ROOT);
                t ? (t.style.transitionDuration = "0s", this.root.classList.add(a.cssClasses.OUTLINE_UPGRADED), requestAnimationFrame((function () {
                    t.style.transitionDuration = ""
                }))) : this.root.classList.add(a.cssClasses.NO_LABEL)
            }, e.prototype.notch = function (t) {
                this.foundation.notch(t)
            }, e.prototype.closeNotch = function () {
                this.foundation.closeNotch()
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        setNotchWidthProperty: function (e) {
                            return t.notchElement_.style.setProperty("width", e + "px")
                        },
                        removeNotchWidthProperty: function () {
                            return t.notchElement_.style.removeProperty("width")
                        }
                    };
                return new s.MDCNotchedOutlineFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCNotchedOutline = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        NO_LABEL: "ftt-blazor-notched-outline--no-label",
        OUTLINE_NOTCHED: "ftt-blazor-notched-outline--notched",
        OUTLINE_UPGRADED: "ftt-blazor-notched-outline--upgraded"
    }, e.numbers = {
        NOTCH_ELEMENT_PADDING: 8
    }, e.strings = {
        NOTCH_ELEMENT_SELECTOR: ".ftt-blazor-notched-outline__notch"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTextFieldCharacterCounter = void 0;
    var i = n(0),
        r = n(2),
        o = n(20),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "foundationForTextField", {
                get: function () {
                    return this.foundation
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        setContent: function (e) {
                            t.root.textContent = e
                        }
                    };
                return new o.MDCTextFieldCharacterCounterFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCTextFieldCharacterCounter = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        ROOT: "ftt-blazor-text-field-character-counter"
    },
        r = {
            ROOT_SELECTOR: "." + i.ROOT
        };
    e.strings = r, e.cssClasses = i
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTextFieldFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(21),
        a = ["mousedown", "touchstart"],
        s = ["click", "keydown"],
        c = function (t) {
            function e(n, r) {
                void 0 === r && (r = {});
                var o = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return o.isFocused_ = !1, o.receivedUserInput_ = !1, o.isValid_ = !0, o.useNativeValidation_ = !0, o.helperText_ = r.helperText, o.characterCounter_ = r.characterCounter, o.leadingIcon_ = r.leadingIcon, o.trailingIcon_ = r.trailingIcon, o.inputFocusHandler_ = function () {
                    return o.activateFocus()
                }, o.inputBlurHandler_ = function () {
                    return o.deactivateFocus()
                }, o.inputInputHandler_ = function () {
                    return o.handleInput()
                }, o.setPointerXOffset_ = function (t) {
                    return o.setTransformOrigin(t)
                }, o.textFieldInteractionHandler_ = function () {
                    return o.handleTextFieldInteraction()
                }, o.validationAttributeChangeHandler_ = function (t) {
                    return o.handleValidationAttributeChange(t)
                }, o
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return o.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shouldAlwaysFloat_", {
                get: function () {
                    var t = this.getNativeInput_().type;
                    return 0 <= o.ALWAYS_FLOAT_TYPES.indexOf(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shouldFloat", {
                get: function () {
                    return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shouldShake", {
                get: function () {
                    return !this.isFocused_ && !this.isValid() && !!this.getValue()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        hasClass: function () {
                            return !0
                        },
                        registerTextFieldInteractionHandler: function () { },
                        deregisterTextFieldInteractionHandler: function () { },
                        registerInputInteractionHandler: function () { },
                        deregisterInputInteractionHandler: function () { },
                        registerValidationAttributeChangeHandler: function () {
                            return new MutationObserver((function () { }))
                        },
                        deregisterValidationAttributeChangeHandler: function () { },
                        getNativeInput: function () {
                            return null
                        },
                        isFocused: function () {
                            return !1
                        },
                        activateLineRipple: function () { },
                        deactivateLineRipple: function () { },
                        setLineRippleTransformOrigin: function () { },
                        shakeLabel: function () { },
                        floatLabel: function () { },
                        setLabelRequired: function () { },
                        hasLabel: function () {
                            return !1
                        },
                        getLabelWidth: function () {
                            return 0
                        },
                        hasOutline: function () {
                            return !1
                        },
                        notchOutline: function () { },
                        closeOutline: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                var t = this;
                this.adapter.hasLabel() && this.getNativeInput_().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler_() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating_(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler_), a.forEach((function (e) {
                    t.adapter.registerInputInteractionHandler(e, t.setPointerXOffset_)
                })), s.forEach((function (e) {
                    t.adapter.registerTextFieldInteractionHandler(e, t.textFieldInteractionHandler_)
                })), this.validationObserver_ = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_), this.setCharacterCounter_(this.getValue().length)
            }, e.prototype.destroy = function () {
                var t = this;
                this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler_), a.forEach((function (e) {
                    t.adapter.deregisterInputInteractionHandler(e, t.setPointerXOffset_)
                })), s.forEach((function (e) {
                    t.adapter.deregisterTextFieldInteractionHandler(e, t.textFieldInteractionHandler_)
                })), this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver_)
            }, e.prototype.handleTextFieldInteraction = function () {
                var t = this.adapter.getNativeInput();
                t && t.disabled || (this.receivedUserInput_ = !0)
            }, e.prototype.handleValidationAttributeChange = function (t) {
                var e = this;
                t.some((function (t) {
                    return -1 < o.VALIDATION_ATTR_WHITELIST.indexOf(t) && (e.styleValidity_(!0), e.adapter.setLabelRequired(e.getNativeInput_().required), !0)
                })), -1 < t.indexOf("maxlength") && this.setCharacterCounter_(this.getValue().length)
            }, e.prototype.notchOutline = function (t) {
                if (this.adapter.hasOutline())
                    if (t) {
                        var e = this.adapter.getLabelWidth() * o.numbers.LABEL_SCALE;
                        this.adapter.notchOutline(e)
                    } else this.adapter.closeOutline()
            }, e.prototype.activateFocus = function () {
                this.isFocused_ = !0, this.styleFocused_(this.isFocused_), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText_ && this.helperText_.showToScreenReader()
            }, e.prototype.setTransformOrigin = function (t) {
                if (!this.isDisabled() && !this.adapter.hasOutline()) {
                    var e = t.touches,
                        n = e ? e[0] : t,
                        i = n.target.getBoundingClientRect(),
                        r = n.clientX - i.left;
                    this.adapter.setLineRippleTransformOrigin(r)
                }
            }, e.prototype.handleInput = function () {
                this.autoCompleteFocus(), this.setCharacterCounter_(this.getValue().length)
            }, e.prototype.autoCompleteFocus = function () {
                this.receivedUserInput_ || this.activateFocus()
            }, e.prototype.deactivateFocus = function () {
                this.isFocused_ = !1, this.adapter.deactivateLineRipple();
                var t = this.isValid();
                this.styleValidity_(t), this.styleFocused_(this.isFocused_), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput_ = !1)
            }, e.prototype.getValue = function () {
                return this.getNativeInput_().value
            }, e.prototype.setValue = function (t) {
                this.getValue() !== t && (this.getNativeInput_().value = t), this.setCharacterCounter_(t.length);
                var e = this.isValid();
                this.styleValidity_(e), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake))
            }, e.prototype.isValid = function () {
                return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_
            }, e.prototype.setValid = function (t) {
                this.isValid_ = t, this.styleValidity_(t);
                var e = !t && !this.isFocused_ && !!this.getValue();
                this.adapter.hasLabel() && this.adapter.shakeLabel(e)
            }, e.prototype.setUseNativeValidation = function (t) {
                this.useNativeValidation_ = t
            }, e.prototype.isDisabled = function () {
                return this.getNativeInput_().disabled
            }, e.prototype.setDisabled = function (t) {
                this.getNativeInput_().disabled = t, this.styleDisabled_(t)
            }, e.prototype.setHelperTextContent = function (t) {
                this.helperText_ && this.helperText_.setContent(t)
            }, e.prototype.setLeadingIconAriaLabel = function (t) {
                this.leadingIcon_ && this.leadingIcon_.setAriaLabel(t)
            }, e.prototype.setLeadingIconContent = function (t) {
                this.leadingIcon_ && this.leadingIcon_.setContent(t)
            }, e.prototype.setTrailingIconAriaLabel = function (t) {
                this.trailingIcon_ && this.trailingIcon_.setAriaLabel(t)
            }, e.prototype.setTrailingIconContent = function (t) {
                this.trailingIcon_ && this.trailingIcon_.setContent(t)
            }, e.prototype.setCharacterCounter_ = function (t) {
                if (this.characterCounter_) {
                    var e = this.getNativeInput_().maxLength;
                    if (-1 === e) throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
                    this.characterCounter_.setCounterValue(t, e)
                }
            }, e.prototype.isBadInput_ = function () {
                return this.getNativeInput_().validity.badInput || !1
            }, e.prototype.isNativeInputValid_ = function () {
                return this.getNativeInput_().validity.valid
            }, e.prototype.styleValidity_ = function (t) {
                var n = e.cssClasses.INVALID;
                t ? this.adapter.removeClass(n) : this.adapter.addClass(n), this.helperText_ && this.helperText_.setValidity(t)
            }, e.prototype.styleFocused_ = function (t) {
                var n = e.cssClasses.FOCUSED;
                t ? this.adapter.addClass(n) : this.adapter.removeClass(n)
            }, e.prototype.styleDisabled_ = function (t) {
                var n = e.cssClasses,
                    i = n.DISABLED,
                    r = n.INVALID;
                t ? (this.adapter.addClass(i), this.adapter.removeClass(r)) : this.adapter.removeClass(i), this.leadingIcon_ && this.leadingIcon_.setDisabled(t), this.trailingIcon_ && this.trailingIcon_.setDisabled(t)
            }, e.prototype.styleFloating_ = function (t) {
                var n = e.cssClasses.LABEL_FLOATING;
                t ? this.adapter.addClass(n) : this.adapter.removeClass(n)
            }, e.prototype.getNativeInput_ = function () {
                return (this.adapter ? this.adapter.getNativeInput() : null) || {
                    disabled: !1,
                    maxLength: -1,
                    required: !1,
                    type: "input",
                    validity: {
                        badInput: !1,
                        valid: !0
                    },
                    value: ""
                }
            }, e
        }(r.MDCFoundation);
    e.MDCTextFieldFoundation = c, e.default = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTextFieldHelperText = void 0;
    var i = n(0),
        r = n(2),
        o = n(22),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "foundationForTextField", {
                get: function () {
                    return this.foundation
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        hasClass: function (e) {
                            return t.root.classList.contains(e)
                        },
                        setAttr: function (e, n) {
                            return t.root.setAttribute(e, n)
                        },
                        removeAttr: function (e) {
                            return t.root.removeAttribute(e)
                        },
                        setContent: function (e) {
                            t.root.textContent = e
                        }
                    };
                return new o.MDCTextFieldHelperTextFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCTextFieldHelperText = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        HELPER_TEXT_PERSISTENT: "ftt-blazor-text-field-helper-text--persistent",
        HELPER_TEXT_VALIDATION_MSG: "ftt-blazor-text-field-helper-text--validation-msg",
        ROOT: "ftt-blazor-text-field-helper-text"
    },
        r = {
            ARIA_HIDDEN: "aria-hidden",
            ROLE: "role",
            ROOT_SELECTOR: "." + i.ROOT
        };
    e.strings = r, e.cssClasses = i
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTextFieldIcon = void 0;
    var i = n(0),
        r = n(2),
        o = n(56),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "foundationForTextField", {
                get: function () {
                    return this.foundation
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        getAttr: function (e) {
                            return t.root.getAttribute(e)
                        },
                        setAttr: function (e, n) {
                            return t.root.setAttribute(e, n)
                        },
                        removeAttr: function (e) {
                            return t.root.removeAttribute(e)
                        },
                        setContent: function (e) {
                            t.root.textContent = e
                        },
                        registerInteractionHandler: function (e, n) {
                            return t.listen(e, n)
                        },
                        deregisterInteractionHandler: function (e, n) {
                            return t.unlisten(e, n)
                        },
                        notifyIconAction: function () {
                            return t.emit(o.MDCTextFieldIconFoundation.strings.ICON_EVENT, {}, !0)
                        }
                    };
                return new o.MDCTextFieldIconFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCTextFieldIcon = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTextFieldIconFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(57),
        a = ["click", "keydown"],
        s = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.savedTabIndex_ = null, r.interactionHandler_ = function (t) {
                    return r.handleInteraction(t)
                }, r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        getAttr: function () {
                            return null
                        },
                        setAttr: function () { },
                        removeAttr: function () { },
                        setContent: function () { },
                        registerInteractionHandler: function () { },
                        deregisterInteractionHandler: function () { },
                        notifyIconAction: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                var t = this;
                this.savedTabIndex_ = this.adapter.getAttr("tabindex"), a.forEach((function (e) {
                    t.adapter.registerInteractionHandler(e, t.interactionHandler_)
                }))
            }, e.prototype.destroy = function () {
                var t = this;
                a.forEach((function (e) {
                    t.adapter.deregisterInteractionHandler(e, t.interactionHandler_)
                }))
            }, e.prototype.setDisabled = function (t) {
                this.savedTabIndex_ && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex_), this.adapter.setAttr("role", o.strings.ICON_ROLE)))
            }, e.prototype.setAriaLabel = function (t) {
                this.adapter.setAttr("aria-label", t)
            }, e.prototype.setContent = function (t) {
                this.adapter.setContent(t)
            }, e.prototype.handleInteraction = function (t) {
                var e = "Enter" === t.key || 13 === t.keyCode;
                "click" !== t.type && !e || (t.preventDefault(), this.adapter.notifyIconAction())
            }, e
        }(r.MDCFoundation);
    e.MDCTextFieldIconFoundation = s, e.default = s
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.strings = {
        ICON_EVENT: "MDCTextField:icon",
        ICON_ROLE: "button"
    }, e.cssClasses = {
        ROOT: "ftt-blazor-text-field__icon"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCRadioFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(59),
        a = function (t) {
            function e(n) {
                return t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        setNativeControlDisabled: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.setDisabled = function (t) {
                var n = e.cssClasses.DISABLED;
                this.adapter.setNativeControlDisabled(t), t ? this.adapter.addClass(n) : this.adapter.removeClass(n)
            }, e
        }(r.MDCFoundation);
    e.MDCRadioFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.strings = {
        NATIVE_CONTROL_SELECTOR: ".ftt-blazor-radio__native-control"
    }, e.cssClasses = {
        DISABLED: "ftt-blazor-radio--disabled",
        ROOT: "ftt-blazor-radio"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCMenu = void 0;
    var i = n(0),
        r = n(2),
        o = n(4),
        a = n(23),
        s = n(11),
        c = n(120),
        u = n(24),
        l = n(13),
        d = n(62),
        f = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialize = function (t, e) {
                void 0 === t && (t = function (t) {
                    return new c.MDCMenuSurface(t)
                }), void 0 === e && (e = function (t) {
                    return new a.MDCList(t)
                }), this.menuSurfaceFactory_ = t, this.listFactory_ = e
            }, e.prototype.initialSyncWithDOM = function () {
                var t = this;
                this.menuSurface_ = this.menuSurfaceFactory_(this.root);
                var e = this.root.querySelector(l.strings.LIST_SELECTOR);
                e ? (this.list_ = this.listFactory_(e), this.list_.wrapFocus = !0) : this.list_ = null, this.handleKeydown_ = function (e) {
                    return t.foundation.handleKeydown(e)
                }, this.handleItemAction_ = function (e) {
                    return t.foundation.handleItemAction(t.items[e.detail.index])
                }, this.handleMenuSurfaceOpened_ = function () {
                    return t.foundation.handleMenuSurfaceOpened()
                }, this.menuSurface_.listen(u.MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_), this.listen("keydown", this.handleKeydown_), this.listen(s.MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_)
            }, e.prototype.destroy = function () {
                this.list_ && this.list_.destroy(), this.menuSurface_.destroy(), this.menuSurface_.unlisten(u.MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_), this.unlisten("keydown", this.handleKeydown_), this.unlisten(s.MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_), t.prototype.destroy.call(this)
            }, Object.defineProperty(e.prototype, "open", {
                get: function () {
                    return this.menuSurface_.isOpen()
                },
                set: function (t) {
                    t ? this.menuSurface_.open() : this.menuSurface_.close()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "wrapFocus", {
                get: function () {
                    return !!this.list_ && this.list_.wrapFocus
                },
                set: function (t) {
                    this.list_ && (this.list_.wrapFocus = t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "hasTypeahead", {
                set: function (t) {
                    this.list_ && (this.list_.hasTypeahead = t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "typeaheadInProgress", {
                get: function () {
                    return !!this.list_ && this.list_.typeaheadInProgress
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.typeaheadMatchItem = function (t, e) {
                return this.list_ ? this.list_.typeaheadMatchItem(t, e) : -1
            }, e.prototype.layout = function () {
                this.list_ && this.list_.layout()
            }, Object.defineProperty(e.prototype, "items", {
                get: function () {
                    return this.list_ ? this.list_.listElements : []
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "quickOpen", {
                set: function (t) {
                    this.menuSurface_.quickOpen = t
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.setDefaultFocusState = function (t) {
                this.foundation.setDefaultFocusState(t)
            }, e.prototype.setAnchorCorner = function (t) {
                this.menuSurface_.setAnchorCorner(t)
            }, e.prototype.setAnchorMargin = function (t) {
                this.menuSurface_.setAnchorMargin(t)
            }, e.prototype.setSelectedIndex = function (t) {
                this.foundation.setSelectedIndex(t)
            }, e.prototype.setEnabled = function (t, e) {
                this.foundation.setEnabled(t, e)
            }, e.prototype.getOptionByIndex = function (t) {
                return t < this.items.length ? this.items[t] : null
            }, e.prototype.getPrimaryTextAtIndex = function (t) {
                var e = this.getOptionByIndex(t);
                return e && this.list_ && this.list_.getPrimaryText(e) || ""
            }, e.prototype.setFixedPosition = function (t) {
                this.menuSurface_.setFixedPosition(t)
            }, e.prototype.setIsHoisted = function (t) {
                this.menuSurface_.setIsHoisted(t)
            }, e.prototype.setAbsolutePosition = function (t, e) {
                this.menuSurface_.setAbsolutePosition(t, e)
            }, e.prototype.setAnchorElement = function (t) {
                this.menuSurface_.anchorElement = t
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClassToElementAtIndex: function (e, n) {
                            t.items[e].classList.add(n)
                        },
                        removeClassFromElementAtIndex: function (e, n) {
                            t.items[e].classList.remove(n)
                        },
                        addAttributeToElementAtIndex: function (e, n, i) {
                            t.items[e].setAttribute(n, i)
                        },
                        removeAttributeFromElementAtIndex: function (e, n) {
                            t.items[e].removeAttribute(n)
                        },
                        elementContainsClass: function (t, e) {
                            return t.classList.contains(e)
                        },
                        closeSurface: function (e) {
                            return t.menuSurface_.close(e)
                        },
                        getElementIndex: function (e) {
                            return t.items.indexOf(e)
                        },
                        notifySelected: function (e) {
                            return t.emit(l.strings.SELECTED_EVENT, {
                                index: e.index,
                                item: t.items[e.index]
                            })
                        },
                        getMenuItemCount: function () {
                            return t.items.length
                        },
                        focusItemAtIndex: function (e) {
                            return t.items[e].focus()
                        },
                        focusListRoot: function () {
                            return t.root.querySelector(l.strings.LIST_SELECTOR).focus()
                        },
                        isSelectableItemAtIndex: function (e) {
                            return !!(0, o.closest)(t.items[e], "." + l.cssClasses.MENU_SELECTION_GROUP)
                        },
                        getSelectedSiblingOfItemAtIndex: function (e) {
                            var n = (0, o.closest)(t.items[e], "." + l.cssClasses.MENU_SELECTION_GROUP).querySelector("." + l.cssClasses.MENU_SELECTED_LIST_ITEM);
                            return n ? t.items.indexOf(n) : -1
                        }
                    };
                return new d.MDCMenuFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCMenu = f
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = ["input", "button", "textarea", "select"];
    e.preventDefaultEvent = function (t) {
        var e = t.target;
        if (e) {
            var n = ("" + e.tagName).toLowerCase(); - 1 === i.indexOf(n) && t.preventDefault()
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCMenuFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(10),
        a = n(24),
        s = n(13),
        c = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.closeAnimationEndTimerId_ = 0, r.defaultFocusState_ = s.DefaultFocusState.LIST_ROOT, r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return s.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return s.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return s.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClassToElementAtIndex: function () { },
                        removeClassFromElementAtIndex: function () { },
                        addAttributeToElementAtIndex: function () { },
                        removeAttributeFromElementAtIndex: function () { },
                        elementContainsClass: function () {
                            return !1
                        },
                        closeSurface: function () { },
                        getElementIndex: function () {
                            return -1
                        },
                        notifySelected: function () { },
                        getMenuItemCount: function () {
                            return 0
                        },
                        focusItemAtIndex: function () { },
                        focusListRoot: function () { },
                        getSelectedSiblingOfItemAtIndex: function () {
                            return -1
                        },
                        isSelectableItemAtIndex: function () {
                            return !1
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.destroy = function () {
                this.closeAnimationEndTimerId_ && clearTimeout(this.closeAnimationEndTimerId_), this.adapter.closeSurface()
            }, e.prototype.handleKeydown = function (t) {
                var e = t.key,
                    n = t.keyCode;
                "Tab" !== e && 9 !== n || this.adapter.closeSurface(!0)
            }, e.prototype.handleItemAction = function (t) {
                var e = this,
                    n = this.adapter.getElementIndex(t);
                n < 0 || (this.adapter.notifySelected({
                    index: n
                }), this.adapter.closeSurface(), this.closeAnimationEndTimerId_ = setTimeout((function () {
                    var n = e.adapter.getElementIndex(t);
                    0 <= n && e.adapter.isSelectableItemAtIndex(n) && e.setSelectedIndex(n)
                }), a.MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION))
            }, e.prototype.handleMenuSurfaceOpened = function () {
                switch (this.defaultFocusState_) {
                    case s.DefaultFocusState.FIRST_ITEM:
                        this.adapter.focusItemAtIndex(0);
                        break;
                    case s.DefaultFocusState.LAST_ITEM:
                        this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
                        break;
                    case s.DefaultFocusState.NONE:
                        break;
                    default:
                        this.adapter.focusListRoot()
                }
            }, e.prototype.setDefaultFocusState = function (t) {
                this.defaultFocusState_ = t
            }, e.prototype.setSelectedIndex = function (t) {
                if (this.validatedIndex_(t), !this.adapter.isSelectableItemAtIndex(t)) throw new Error("MDCMenuFoundation: No selection group at specified index.");
                var e = this.adapter.getSelectedSiblingOfItemAtIndex(t);
                0 <= e && (this.adapter.removeAttributeFromElementAtIndex(e, s.strings.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(e, s.cssClasses.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, s.cssClasses.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, s.strings.ARIA_CHECKED_ATTR, "true")
            }, e.prototype.setEnabled = function (t, e) {
                this.validatedIndex_(t), e ? (this.adapter.removeClassFromElementAtIndex(t, o.cssClasses.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, s.strings.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, o.cssClasses.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, s.strings.ARIA_DISABLED_ATTR, "true"))
            }, e.prototype.validatedIndex_ = function (t) {
                var e = this.adapter.getMenuItemCount();
                if (!(0 <= t && t < e)) throw new Error("MDCMenuFoundation: No list item at specified index.")
            }, e
        }(r.MDCFoundation);
    e.MDCMenuFoundation = c, e.default = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCSelectHelperText = void 0;
    var i = n(0),
        r = n(2),
        o = n(64),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "foundationForSelect", {
                get: function () {
                    return this.foundation
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        hasClass: function (e) {
                            return t.root.classList.contains(e)
                        },
                        setAttr: function (e, n) {
                            return t.root.setAttribute(e, n)
                        },
                        removeAttr: function (e) {
                            return t.root.removeAttribute(e)
                        },
                        setContent: function (e) {
                            t.root.textContent = e
                        }
                    };
                return new o.MDCSelectHelperTextFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCSelectHelperText = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCSelectHelperTextFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(65),
        a = function (t) {
            function e(n) {
                return t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        hasClass: function () {
                            return !1
                        },
                        setAttr: function () { },
                        removeAttr: function () { },
                        setContent: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.setContent = function (t) {
                this.adapter.setContent(t)
            }, e.prototype.setValidation = function (t) {
                t ? this.adapter.addClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG)
            }, e.prototype.setValidationMsgPersistent = function (t) {
                t ? this.adapter.addClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)
            }, e.prototype.showToScreenReader = function () {
                this.adapter.removeAttr(o.strings.ARIA_HIDDEN)
            }, e.prototype.setValidity = function (t) {
                if (this.adapter.hasClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG)) {
                    var e = this.adapter.hasClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
                    if (!t || e) return this.showToScreenReader(), void (t ? this.adapter.removeAttr(o.strings.ROLE) : this.adapter.setAttr(o.strings.ROLE, "alert"));
                    this.adapter.removeAttr(o.strings.ROLE), this.hide()
                }
            }, e.prototype.hide = function () {
                this.adapter.setAttr(o.strings.ARIA_HIDDEN, "true")
            }, e
        }(r.MDCFoundation);
    e.MDCSelectHelperTextFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.strings = {
        ARIA_HIDDEN: "aria-hidden",
        ROLE: "role"
    }, e.cssClasses = {
        HELPER_TEXT_VALIDATION_MSG: "ftt-blazor-select-helper-text--validation-msg",
        HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "ftt-blazor-select-helper-text--validation-msg-persistent"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCSelectIcon = void 0;
    var i = n(0),
        r = n(2),
        o = n(67),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "foundationForSelect", {
                get: function () {
                    return this.foundation
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        getAttr: function (e) {
                            return t.root.getAttribute(e)
                        },
                        setAttr: function (e, n) {
                            return t.root.setAttribute(e, n)
                        },
                        removeAttr: function (e) {
                            return t.root.removeAttribute(e)
                        },
                        setContent: function (e) {
                            t.root.textContent = e
                        },
                        registerInteractionHandler: function (e, n) {
                            return t.listen(e, n)
                        },
                        deregisterInteractionHandler: function (e, n) {
                            return t.unlisten(e, n)
                        },
                        notifyIconAction: function () {
                            return t.emit(o.MDCSelectIconFoundation.strings.ICON_EVENT, {}, !0)
                        }
                    };
                return new o.MDCSelectIconFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCSelectIcon = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCSelectIconFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(68),
        a = ["click", "keydown"],
        s = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.savedTabIndex_ = null, r.interactionHandler_ = function (t) {
                    return r.handleInteraction(t)
                }, r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        getAttr: function () {
                            return null
                        },
                        setAttr: function () { },
                        removeAttr: function () { },
                        setContent: function () { },
                        registerInteractionHandler: function () { },
                        deregisterInteractionHandler: function () { },
                        notifyIconAction: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                var t = this;
                this.savedTabIndex_ = this.adapter.getAttr("tabindex"), a.forEach((function (e) {
                    t.adapter.registerInteractionHandler(e, t.interactionHandler_)
                }))
            }, e.prototype.destroy = function () {
                var t = this;
                a.forEach((function (e) {
                    t.adapter.deregisterInteractionHandler(e, t.interactionHandler_)
                }))
            }, e.prototype.setDisabled = function (t) {
                this.savedTabIndex_ && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex_), this.adapter.setAttr("role", o.strings.ICON_ROLE)))
            }, e.prototype.setAriaLabel = function (t) {
                this.adapter.setAttr("aria-label", t)
            }, e.prototype.setContent = function (t) {
                this.adapter.setContent(t)
            }, e.prototype.handleInteraction = function (t) {
                var e = "Enter" === t.key || 13 === t.keyCode;
                "click" !== t.type && !e || this.adapter.notifyIconAction()
            }, e
        }(r.MDCFoundation);
    e.MDCSelectIconFoundation = s, e.default = s
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.strings = {
        ICON_EVENT: "MDCSelect:icon",
        ICON_ROLE: "button"
    }
}, function (t, e, n) {
    "use strict";
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCSliderFoundation = void 0;
    var i = n(0),
        r = n(18),
        o = n(1),
        a = n(27),
        s = "undefined" != typeof window,
        c = s && !!window.PointerEvent,
        u = c ? ["pointerdown"] : ["mousedown", "touchstart"],
        l = c ? ["pointerup"] : ["mouseup", "touchend"],
        d = {
            mousedown: "mousemove",
            pointerdown: "pointermove",
            touchstart: "touchmove"
        },
        f = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.savedTabIndex_ = NaN, r.active_ = !1, r.inTransit_ = !1, r.isDiscrete_ = !1, r.hasTrackMarker_ = !1, r.handlingThumbTargetEvt_ = !1, r.min_ = 0, r.max_ = 100, r.step_ = 0, r.value_ = 0, r.disabled_ = !1, r.preventFocusState_ = !1, r.thumbContainerPointerHandler_ = function () {
                    return r.handlingThumbTargetEvt_ = !0
                }, r.interactionStartHandler_ = function (t) {
                    return r.handleDown_(t)
                }, r.keydownHandler_ = function (t) {
                    return r.handleKeydown_(t)
                }, r.focusHandler_ = function () {
                    return r.handleFocus_()
                }, r.blurHandler_ = function () {
                    return r.handleBlur_()
                }, r.resizeHandler_ = function () {
                    return r.layout()
                }, r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return a.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return a.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return a.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        hasClass: function () {
                            return !1
                        },
                        addClass: function () { },
                        removeClass: function () { },
                        getAttribute: function () {
                            return null
                        },
                        setAttribute: function () { },
                        removeAttribute: function () { },
                        computeBoundingRect: function () {
                            return {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                width: 0,
                                height: 0
                            }
                        },
                        getTabIndex: function () {
                            return 0
                        },
                        registerInteractionHandler: function () { },
                        deregisterInteractionHandler: function () { },
                        registerThumbContainerInteractionHandler: function () { },
                        deregisterThumbContainerInteractionHandler: function () { },
                        registerBodyInteractionHandler: function () { },
                        deregisterBodyInteractionHandler: function () { },
                        registerResizeHandler: function () { },
                        deregisterResizeHandler: function () { },
                        notifyInput: function () { },
                        notifyChange: function () { },
                        setThumbContainerStyleProperty: function () { },
                        setTrackStyleProperty: function () { },
                        setMarkerValue: function () { },
                        setTrackMarkers: function () { },
                        isRTL: function () {
                            return !1
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                var t = this;
                this.isDiscrete_ = this.adapter.hasClass(a.cssClasses.IS_DISCRETE), this.hasTrackMarker_ = this.adapter.hasClass(a.cssClasses.HAS_TRACK_MARKER), u.forEach((function (e) {
                    t.adapter.registerInteractionHandler(e, t.interactionStartHandler_), t.adapter.registerThumbContainerInteractionHandler(e, t.thumbContainerPointerHandler_)
                })), c && this.adapter.addClass(a.cssClasses.DISABLE_TOUCH_ACTION), this.adapter.registerInteractionHandler("keydown", this.keydownHandler_), this.adapter.registerInteractionHandler("focus", this.focusHandler_), this.adapter.registerInteractionHandler("blur", this.blurHandler_), this.adapter.registerResizeHandler(this.resizeHandler_), this.layout(), this.isDiscrete_ && 0 === this.getStep() && (this.step_ = 1)
            }, e.prototype.destroy = function () {
                var t = this;
                u.forEach((function (e) {
                    t.adapter.deregisterInteractionHandler(e, t.interactionStartHandler_), t.adapter.deregisterThumbContainerInteractionHandler(e, t.thumbContainerPointerHandler_)
                })), this.adapter.deregisterInteractionHandler("keydown", this.keydownHandler_), this.adapter.deregisterInteractionHandler("focus", this.focusHandler_), this.adapter.deregisterInteractionHandler("blur", this.blurHandler_), this.adapter.deregisterResizeHandler(this.resizeHandler_)
            }, e.prototype.setupTrackMarker = function () {
                this.isDiscrete_ && this.hasTrackMarker_ && 0 !== this.getStep() && this.adapter.setTrackMarkers(this.getStep(), this.getMax(), this.getMin())
            }, e.prototype.layout = function () {
                this.rect_ = this.adapter.computeBoundingRect(), this.updateUIForCurrentValue_()
            }, e.prototype.getValue = function () {
                return this.value_
            }, e.prototype.setValue = function (t) {
                this.setValue_(t, !1)
            }, e.prototype.getMax = function () {
                return this.max_
            }, e.prototype.setMax = function (t) {
                if (t < this.min_) throw new Error("Cannot set max to be less than the slider's minimum value");
                this.max_ = t, this.setValue_(this.value_, !1, !0), this.adapter.setAttribute(a.strings.ARIA_VALUEMAX, String(this.max_)), this.setupTrackMarker()
            }, e.prototype.getMin = function () {
                return this.min_
            }, e.prototype.setMin = function (t) {
                if (t > this.max_) throw new Error("Cannot set min to be greater than the slider's maximum value");
                this.min_ = t, this.setValue_(this.value_, !1, !0), this.adapter.setAttribute(a.strings.ARIA_VALUEMIN, String(this.min_)), this.setupTrackMarker()
            }, e.prototype.getStep = function () {
                return this.step_
            }, e.prototype.setStep = function (t) {
                if (t < 0) throw new Error("Step cannot be set to a negative number");
                this.isDiscrete_ && ("number" != typeof t || t < 1) && (t = 1), this.step_ = t, this.setValue_(this.value_, !1, !0), this.setupTrackMarker()
            }, e.prototype.isDisabled = function () {
                return this.disabled_
            }, e.prototype.setDisabled = function (t) {
                this.disabled_ = t, this.toggleClass_(a.cssClasses.DISABLED, this.disabled_), this.disabled_ ? (this.savedTabIndex_ = this.adapter.getTabIndex(), this.adapter.setAttribute(a.strings.ARIA_DISABLED, "true"), this.adapter.removeAttribute("tabindex")) : (this.adapter.removeAttribute(a.strings.ARIA_DISABLED), isNaN(this.savedTabIndex_) || this.adapter.setAttribute("tabindex", String(this.savedTabIndex_)))
            }, e.prototype.handleDown_ = function (t) {
                var e = this;
                if (!this.disabled_) {
                    this.preventFocusState_ = !0, this.setInTransit_(!this.handlingThumbTargetEvt_), this.handlingThumbTargetEvt_ = !1, this.setActive_(!0);
                    var n = function (t) {
                        e.handleMove_(t)
                    },
                        i = d[t.type],
                        r = function t() {
                            e.handleUp_(), e.adapter.deregisterBodyInteractionHandler(i, n), l.forEach((function (n) {
                                return e.adapter.deregisterBodyInteractionHandler(n, t)
                            }))
                        };
                    this.adapter.registerBodyInteractionHandler(i, n), l.forEach((function (t) {
                        return e.adapter.registerBodyInteractionHandler(t, r)
                    })), this.setValueFromEvt_(t)
                }
            }, e.prototype.handleMove_ = function (t) {
                t.preventDefault(), this.setValueFromEvt_(t)
            }, e.prototype.handleUp_ = function () {
                this.setActive_(!1), this.adapter.notifyChange()
            }, e.prototype.getClientX_ = function (t) {
                return t.targetTouches && 0 < t.targetTouches.length ? t.targetTouches[0].clientX : t.clientX
            }, e.prototype.setValueFromEvt_ = function (t) {
                var e = this.getClientX_(t),
                    n = this.computeValueFromClientX_(e);
                this.setValue_(n, !0)
            }, e.prototype.computeValueFromClientX_ = function (t) {
                var e = this.max_,
                    n = this.min_,
                    i = (t - this.rect_.left) / this.rect_.width;
                return this.adapter.isRTL() && (i = 1 - i), n + i * (e - n)
            }, e.prototype.handleKeydown_ = function (t) {
                var e = this.getKeyId_(t),
                    n = this.getValueForKeyId_(e);
                isNaN(n) || (t.preventDefault(), this.adapter.addClass(a.cssClasses.FOCUS), this.setValue_(n, !0), this.adapter.notifyChange())
            }, e.prototype.getKeyId_ = function (t) {
                return "ArrowLeft" === t.key || 37 === t.keyCode ? "ArrowLeft" : "ArrowRight" === t.key || 39 === t.keyCode ? "ArrowRight" : "ArrowUp" === t.key || 38 === t.keyCode ? "ArrowUp" : "ArrowDown" === t.key || 40 === t.keyCode ? "ArrowDown" : "Home" === t.key || 36 === t.keyCode ? "Home" : "End" === t.key || 35 === t.keyCode ? "End" : "PageUp" === t.key || 33 === t.keyCode ? "PageUp" : "PageDown" === t.key || 34 === t.keyCode ? "PageDown" : ""
            }, e.prototype.getValueForKeyId_ = function (t) {
                var e = this.max_,
                    n = this.min_,
                    i = this.step_ || (e - n) / 100;
                switch (this.adapter.isRTL() && ("ArrowLeft" === t || "ArrowRight" === t) && (i = -i), t) {
                    case "ArrowLeft":
                    case "ArrowDown":
                        return this.value_ - i;
                    case "ArrowRight":
                    case "ArrowUp":
                        return this.value_ + i;
                    case "Home":
                        return this.min_;
                    case "End":
                        return this.max_;
                    case "PageUp":
                        return this.value_ + i * a.numbers.PAGE_FACTOR;
                    case "PageDown":
                        return this.value_ - i * a.numbers.PAGE_FACTOR;
                    default:
                        return NaN
                }
            }, e.prototype.handleFocus_ = function () {
                this.preventFocusState_ || this.adapter.addClass(a.cssClasses.FOCUS)
            }, e.prototype.handleBlur_ = function () {
                this.preventFocusState_ = !1, this.adapter.removeClass(a.cssClasses.FOCUS)
            }, e.prototype.setValue_ = function (t, e, n) {
                if (void 0 === n && (n = !1), t !== this.value_ || n) {
                    var i = this.min_,
                        r = this.max_,
                        o = t === i || t === r;
                    this.step_ && !o && (t = this.quantize_(t)), t < i ? t = i : r < t && (t = r), t = t || 0, this.value_ = t, this.adapter.setAttribute(a.strings.ARIA_VALUENOW, String(this.value_)), this.updateUIForCurrentValue_(), e && (this.adapter.notifyInput(), this.isDiscrete_ && this.adapter.setMarkerValue(t))
                }
            }, e.prototype.quantize_ = function (t) {
                return Math.round(t / this.step_) * this.step_
            }, e.prototype.updateUIForCurrentValue_ = function () {
                var t = this,
                    e = this.max_,
                    n = this.min_,
                    i = (this.value_ - n) / (e - n),
                    o = i * this.rect_.width;
                this.adapter.isRTL() && (o = this.rect_.width - o);
                var a = s ? (0, r.getCorrectPropertyName)(window, "transform") : "transform",
                    c = s ? (0, r.getCorrectEventName)(window, "transitionend") : "transitionend";
                this.inTransit_ && this.adapter.registerThumbContainerInteractionHandler(c, (function e() {
                    t.setInTransit_(!1), t.adapter.deregisterThumbContainerInteractionHandler(c, e)
                })), requestAnimationFrame((function () {
                    t.adapter.setThumbContainerStyleProperty(a, "translateX(" + o + "px) translateX(-50%)"), t.adapter.setTrackStyleProperty(a, "scaleX(" + i + ")")
                }))
            }, e.prototype.setActive_ = function (t) {
                this.active_ = t, this.toggleClass_(a.cssClasses.ACTIVE, this.active_)
            }, e.prototype.setInTransit_ = function (t) {
                this.inTransit_ = t, this.toggleClass_(a.cssClasses.IN_TRANSIT, this.inTransit_)
            }, e.prototype.toggleClass_ = function (t, e) {
                e ? this.adapter.addClass(t) : this.adapter.removeClass(t)
            }, e
        }(o.MDCFoundation);
    e.MDCSliderFoundation = f, e.default = f
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCSwitchFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(72),
        a = function (t) {
            function e(n) {
                return t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        setNativeControlChecked: function () { },
                        setNativeControlDisabled: function () { },
                        setNativeControlAttr: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.setChecked = function (t) {
                this.adapter.setNativeControlChecked(t), this.updateAriaChecked_(t), this.updateCheckedStyling_(t)
            }, e.prototype.setDisabled = function (t) {
                this.adapter.setNativeControlDisabled(t), t ? this.adapter.addClass(o.cssClasses.DISABLED) : this.adapter.removeClass(o.cssClasses.DISABLED)
            }, e.prototype.handleChange = function (t) {
                var e = t.target;
                this.updateAriaChecked_(e.checked), this.updateCheckedStyling_(e.checked)
            }, e.prototype.updateCheckedStyling_ = function (t) {
                t ? this.adapter.addClass(o.cssClasses.CHECKED) : this.adapter.removeClass(o.cssClasses.CHECKED)
            }, e.prototype.updateAriaChecked_ = function (t) {
                this.adapter.setNativeControlAttr(o.strings.ARIA_CHECKED_ATTR, "" + !!t)
            }, e
        }(r.MDCFoundation);
    e.MDCSwitchFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        CHECKED: "ftt-blazor-switch--checked",
        DISABLED: "ftt-blazor-switch--disabled"
    }, e.strings = {
        ARIA_CHECKED_ATTR: "aria-checked",
        NATIVE_CONTROL_SELECTOR: ".ftt-blazor-switch__native-control",
        RIPPLE_SURFACE_SELECTOR: ".ftt-blazor-switch__thumb-underlay"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCChipTrailingAction = void 0;
    var i = n(0),
        r = n(2),
        o = n(3),
        a = n(5),
        s = n(14),
        c = n(74),
        u = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e.prototype, "ripple", {
                get: function () {
                    return this.ripple_
                },
                enumerable: !0,
                configurable: !0
            }), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialize = function (t) {
                void 0 === t && (t = function (t, e) {
                    return new o.MDCRipple(t, e)
                });
                var e = o.MDCRipple.createAdapter(this);
                this.ripple_ = t(this.root, new a.MDCRippleFoundation(e))
            }, e.prototype.initialSyncWithDOM = function () {
                var t = this;
                this.handleClick_ = function (e) {
                    t.foundation.handleClick(e)
                }, this.handleKeydown_ = function (e) {
                    t.foundation.handleKeydown(e)
                }, this.listen("click", this.handleClick_), this.listen("keydown", this.handleKeydown_)
            }, e.prototype.destroy = function () {
                this.ripple_.destroy(), this.unlisten("click", this.handleClick_), this.unlisten("keydown", this.handleKeydown_), t.prototype.destroy.call(this)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        focus: function () {
                            t.root.focus()
                        },
                        getAttribute: function (e) {
                            return t.root.getAttribute(e)
                        },
                        notifyInteraction: function (e) {
                            return t.emit(s.strings.INTERACTION_EVENT, {
                                trigger: e
                            }, !0)
                        },
                        notifyNavigation: function (e) {
                            t.emit(s.strings.NAVIGATION_EVENT, {
                                key: e
                            }, !0)
                        },
                        setAttribute: function (e, n) {
                            t.root.setAttribute(e, n)
                        }
                    };
                return new c.MDCChipTrailingActionFoundation(e)
            }, e.prototype.isNavigable = function () {
                return this.foundation.isNavigable()
            }, e.prototype.focus = function () {
                this.foundation.focus()
            }, e.prototype.removeFocus = function () {
                this.foundation.removeFocus()
            }, e
        }(r.MDCComponent);
    e.MDCChipTrailingAction = u
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCChipTrailingActionFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(12),
        a = n(14),
        s = function (t) {
            function e(n) {
                return t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "strings", {
                get: function () {
                    return a.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        focus: function () { },
                        getAttribute: function () {
                            return null
                        },
                        setAttribute: function () { },
                        notifyInteraction: function () { },
                        notifyNavigation: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.handleClick = function (t) {
                t.stopPropagation(), this.adapter.notifyInteraction(a.InteractionTrigger.CLICK)
            }, e.prototype.handleKeydown = function (t) {
                t.stopPropagation();
                var e = (0, o.normalizeKey)(t);
                if (this.shouldNotifyInteractionFromKey_(e)) {
                    var n = this.getTriggerFromKey_(e);
                    this.adapter.notifyInteraction(n)
                } else (0, o.isNavigationEvent)(t) && this.adapter.notifyNavigation(e)
            }, e.prototype.removeFocus = function () {
                this.adapter.setAttribute(a.strings.TAB_INDEX, "-1")
            }, e.prototype.focus = function () {
                this.adapter.setAttribute(a.strings.TAB_INDEX, "0"), this.adapter.focus()
            }, e.prototype.isNavigable = function () {
                return "true" !== this.adapter.getAttribute(a.strings.ARIA_HIDDEN)
            }, e.prototype.shouldNotifyInteractionFromKey_ = function (t) {
                var e = t === o.KEY.ENTER || t === o.KEY.SPACEBAR,
                    n = t === o.KEY.BACKSPACE || t === o.KEY.DELETE;
                return e || n
            }, e.prototype.getTriggerFromKey_ = function (t) {
                return t === o.KEY.SPACEBAR ? a.InteractionTrigger.SPACEBAR_KEY : t === o.KEY.ENTER ? a.InteractionTrigger.ENTER_KEY : t === o.KEY.DELETE ? a.InteractionTrigger.DELETE_KEY : t === o.KEY.BACKSPACE ? a.InteractionTrigger.BACKSPACE_KEY : a.InteractionTrigger.UNSPECIFIED
            }, e
        }(r.MDCFoundation);
    e.MDCChipTrailingActionFoundation = s, e.default = s
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCChip = void 0;
    var i = n(0),
        r = n(2),
        o = n(3),
        a = n(5),
        s = n(73),
        c = n(14),
        u = n(15),
        l = n(28),
        d = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e.prototype, "selected", {
                get: function () {
                    return this.foundation.isSelected()
                },
                set: function (t) {
                    this.foundation.setSelected(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shouldRemoveOnTrailingIconClick", {
                get: function () {
                    return this.foundation.getShouldRemoveOnTrailingIconClick()
                },
                set: function (t) {
                    this.foundation.setShouldRemoveOnTrailingIconClick(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "setShouldFocusPrimaryActionOnClick", {
                set: function (t) {
                    this.foundation.setShouldFocusPrimaryActionOnClick(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ripple", {
                get: function () {
                    return this.ripple_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this.root.id
                },
                enumerable: !0,
                configurable: !0
            }), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialize = function (t, e) {
                var n = this;
                void 0 === t && (t = function (t, e) {
                    return new o.MDCRipple(t, e)
                }), void 0 === e && (e = function (t) {
                    return new s.MDCChipTrailingAction(t)
                }), this.leadingIcon_ = this.root.querySelector(u.strings.LEADING_ICON_SELECTOR), this.checkmark_ = this.root.querySelector(u.strings.CHECKMARK_SELECTOR), this.primaryAction_ = this.root.querySelector(u.strings.PRIMARY_ACTION_SELECTOR);
                var r = this.root.querySelector(u.strings.TRAILING_ACTION_SELECTOR);
                r && (this.trailingAction_ = e(r));
                var c = (0, i.__assign)((0, i.__assign)({}, o.MDCRipple.createAdapter(this)), {
                    computeBoundingRect: function () {
                        return n.foundation.getDimensions()
                    }
                });
                this.ripple_ = t(this.root, new a.MDCRippleFoundation(c))
            }, e.prototype.initialSyncWithDOM = function () {
                var t = this;
                this.handleTrailingActionInteraction_ = function () {
                    t.foundation.handleTrailingActionInteraction()
                }, this.handleTrailingActionNavigation_ = function (e) {
                    t.foundation.handleTrailingActionNavigation(e)
                }, this.handleClick_ = function () {
                    t.foundation.handleClick()
                }, this.handleKeydown_ = function (e) {
                    t.foundation.handleKeydown(e)
                }, this.handleTransitionEnd_ = function (e) {
                    t.foundation.handleTransitionEnd(e)
                }, this.handleFocusIn_ = function (e) {
                    t.foundation.handleFocusIn(e)
                }, this.handleFocusOut_ = function (e) {
                    t.foundation.handleFocusOut(e)
                }, this.listen("transitionend", this.handleTransitionEnd_), this.listen("click", this.handleClick_), this.listen("keydown", this.handleKeydown_), this.listen("focusin", this.handleFocusIn_), this.listen("focusout", this.handleFocusOut_), this.trailingAction_ && (this.listen(c.strings.INTERACTION_EVENT, this.handleTrailingActionInteraction_), this.listen(c.strings.NAVIGATION_EVENT, this.handleTrailingActionNavigation_))
            }, e.prototype.destroy = function () {
                this.ripple_.destroy(), this.unlisten("transitionend", this.handleTransitionEnd_), this.unlisten("keydown", this.handleKeydown_), this.unlisten("click", this.handleClick_), this.unlisten("focusin", this.handleFocusIn_), this.unlisten("focusout", this.handleFocusOut_), this.trailingAction_ && (this.unlisten(c.strings.INTERACTION_EVENT, this.handleTrailingActionInteraction_), this.unlisten(c.strings.NAVIGATION_EVENT, this.handleTrailingActionNavigation_)), t.prototype.destroy.call(this)
            }, e.prototype.beginExit = function () {
                this.foundation.beginExit()
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        addClassToLeadingIcon: function (e) {
                            t.leadingIcon_ && t.leadingIcon_.classList.add(e)
                        },
                        eventTargetHasClass: function (t, e) {
                            return !!t && t.classList.contains(e)
                        },
                        focusPrimaryAction: function () {
                            t.primaryAction_ && t.primaryAction_.focus()
                        },
                        focusTrailingAction: function () {
                            t.trailingAction_ && t.trailingAction_.focus()
                        },
                        getAttribute: function (e) {
                            return t.root.getAttribute(e)
                        },
                        getCheckmarkBoundingClientRect: function () {
                            return t.checkmark_ ? t.checkmark_.getBoundingClientRect() : null
                        },
                        getComputedStyleValue: function (e) {
                            return window.getComputedStyle(t.root).getPropertyValue(e)
                        },
                        getRootBoundingClientRect: function () {
                            return t.root.getBoundingClientRect()
                        },
                        hasClass: function (e) {
                            return t.root.classList.contains(e)
                        },
                        hasLeadingIcon: function () {
                            return !!t.leadingIcon_
                        },
                        isRTL: function () {
                            return "rtl" === window.getComputedStyle(t.root).getPropertyValue("direction")
                        },
                        isTrailingActionNavigable: function () {
                            return !!t.trailingAction_ && t.trailingAction_.isNavigable()
                        },
                        notifyInteraction: function () {
                            return t.emit(u.strings.INTERACTION_EVENT, {
                                chipId: t.id
                            }, !0)
                        },
                        notifyNavigation: function (e, n) {
                            return t.emit(u.strings.NAVIGATION_EVENT, {
                                chipId: t.id,
                                key: e,
                                source: n
                            }, !0)
                        },
                        notifyRemoval: function (e) {
                            t.emit(u.strings.REMOVAL_EVENT, {
                                chipId: t.id,
                                removedAnnouncement: e
                            }, !0)
                        },
                        notifySelection: function (e, n) {
                            return t.emit(u.strings.SELECTION_EVENT, {
                                chipId: t.id,
                                selected: e,
                                shouldIgnore: n
                            }, !0)
                        },
                        notifyTrailingIconInteraction: function () {
                            return t.emit(u.strings.TRAILING_ICON_INTERACTION_EVENT, {
                                chipId: t.id
                            }, !0)
                        },
                        notifyEditStart: function () { },
                        notifyEditFinish: function () { },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        removeClassFromLeadingIcon: function (e) {
                            t.leadingIcon_ && t.leadingIcon_.classList.remove(e)
                        },
                        removeTrailingActionFocus: function () {
                            t.trailingAction_ && t.trailingAction_.removeFocus()
                        },
                        setPrimaryActionAttr: function (e, n) {
                            t.primaryAction_ && t.primaryAction_.setAttribute(e, n)
                        },
                        setStyleProperty: function (e, n) {
                            return t.root.style.setProperty(e, n)
                        }
                    };
                return new l.MDCChipFoundation(e)
            }, e.prototype.setSelectedFromChipSet = function (t, e) {
                this.foundation.setSelectedFromChipSet(t, e)
            }, e.prototype.focusPrimaryAction = function () {
                this.foundation.focusPrimaryAction()
            }, e.prototype.focusTrailingAction = function () {
                this.foundation.focusTrailingAction()
            }, e.prototype.removeFocus = function () {
                this.foundation.removeFocus()
            }, e.prototype.remove = function () {
                var t = this.root.parentNode;
                null !== t && t.removeChild(this.root)
            }, e
        }(r.MDCComponent);
    e.MDCChip = d
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.strings = {
        CHIP_SELECTOR: ".ftt-blazor-chip"
    }, e.cssClasses = {
        CHOICE: "ftt-blazor-chip-set--choice",
        FILTER: "ftt-blazor-chip-set--filter"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCFixedTopAppBarFoundation = void 0;
    var i = n(0),
        r = n(8),
        o = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.wasScrolled_ = !1, e
            }
            return (0, i.__extends)(e, t), e.prototype.handleTargetScroll = function () {
                this.adapter.getViewportScrollY() <= 0 ? this.wasScrolled_ && (this.adapter.removeClass(r.cssClasses.FIXED_SCROLLED_CLASS), this.wasScrolled_ = !1) : this.wasScrolled_ || (this.adapter.addClass(r.cssClasses.FIXED_SCROLLED_CLASS), this.wasScrolled_ = !0)
            }, e
        }(n(30).MDCTopAppBarFoundation);
    e.MDCFixedTopAppBarFoundation = o, e.default = o
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCShortTopAppBarFoundation = void 0;
    var i = n(0),
        r = n(8),
        o = function (t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.isCollapsed_ = !1, n.isAlwaysCollapsed_ = !1, n
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e.prototype, "isCollapsed", {
                get: function () {
                    return this.isCollapsed_
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                t.prototype.init.call(this), 0 < this.adapter.getTotalActionItems() && this.adapter.addClass(r.cssClasses.SHORT_HAS_ACTION_ITEM_CLASS), this.setAlwaysCollapsed(this.adapter.hasClass(r.cssClasses.SHORT_COLLAPSED_CLASS))
            }, e.prototype.setAlwaysCollapsed = function (t) {
                this.isAlwaysCollapsed_ = !!t, this.isAlwaysCollapsed_ ? this.collapse_() : this.maybeCollapseBar_()
            }, e.prototype.getAlwaysCollapsed = function () {
                return this.isAlwaysCollapsed_
            }, e.prototype.handleTargetScroll = function () {
                this.maybeCollapseBar_()
            }, e.prototype.maybeCollapseBar_ = function () {
                this.isAlwaysCollapsed_ || (this.adapter.getViewportScrollY() <= 0 ? this.isCollapsed_ && this.uncollapse_() : this.isCollapsed_ || this.collapse_())
            }, e.prototype.uncollapse_ = function () {
                this.adapter.removeClass(r.cssClasses.SHORT_COLLAPSED_CLASS), this.isCollapsed_ = !1
            }, e.prototype.collapse_ = function () {
                this.adapter.addClass(r.cssClasses.SHORT_COLLAPSED_CLASS), this.isCollapsed_ = !0
            }, e
        }(n(31).MDCTopAppBarBaseFoundation);
    e.MDCShortTopAppBarFoundation = o, e.default = o
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function () {
        function t(t, e) {
            void 0 === e && (e = {}), this.root = t, this.options = e, this.elFocusedBeforeTrapFocus = null
        }
        return t.prototype.trapFocus = function () {
            var t = this.getFocusableElements(this.root);
            this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root, t), this.options.skipInitialFocus || this.focusInitialElement(t, this.options.initialFocusEl)
        }, t.prototype.releaseFocus = function () {
            [].slice.call(this.root.querySelectorAll(".ftt-blazor-dom-focus-sentinel")).forEach((function (t) {
                t.parentElement.removeChild(t)
            })), this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus()
        }, t.prototype.wrapTabFocus = function (t, e) {
            var n = this.createSentinel(),
                i = this.createSentinel();
            n.addEventListener("focus", (function () {
                0 < e.length && e[e.length - 1].focus()
            })), i.addEventListener("focus", (function () {
                0 < e.length && e[0].focus()
            })), t.insertBefore(n, t.children[0]), t.appendChild(i)
        }, t.prototype.focusInitialElement = function (t, e) {
            var n = 0;
        }, t.prototype.getFocusableElements = function (t) {
            return [].slice.call(t.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button")).filter((function (t) {
                var e = "true" === t.getAttribute("aria-disabled") || null != t.getAttribute("disabled") || null != t.getAttribute("hidden") || "true" === t.getAttribute("aria-hidden"),
                    n = 0 <= t.tabIndex && 0 < t.getBoundingClientRect().width && !t.classList.contains("ftt-blazor-dom-focus-sentinel") && !e,
                    i = !1;
                if (n) {
                    var r = getComputedStyle(t);
                    i = "none" === r.display || "hidden" === r.visibility
                }
                return n && !i
            }))
        }, t.prototype.createSentinel = function () {
            var t = document.createElement("div");
            return t.setAttribute("tabindex", "0"), t.setAttribute("aria-hidden", "true"), t.classList.add("ftt-blazor-dom-focus-sentinel"), t
        }, t
    }();
    e.FocusTrap = i
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        ANIMATE: "ftt-blazor-drawer--animate",
        CLOSING: "ftt-blazor-drawer--closing",
        DISMISSIBLE: "ftt-blazor-drawer--dismissible",
        MODAL: "ftt-blazor-drawer--modal",
        OPEN: "ftt-blazor-drawer--open",
        OPENING: "ftt-blazor-drawer--opening",
        ROOT: "ftt-blazor-drawer"
    }, e.strings = {
        APP_CONTENT_SELECTOR: ".ftt-blazor-drawer-app-content",
        CLOSE_EVENT: "MDCDrawer:closed",
        OPEN_EVENT: "MDCDrawer:opened",
        SCRIM_SELECTOR: ".ftt-blazor-drawer-scrim"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCModalDrawerFoundation = void 0;
    var i = n(0),
        r = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.prototype.handleScrimClick = function () {
                this.close()
            }, e.prototype.opened_ = function () {
                this.adapter.trapFocus()
            }, e.prototype.closed_ = function () {
                this.adapter.releaseFocus()
            }, e
        }(n(32).MDCDismissibleDrawerFoundation);
    e.MDCModalDrawerFoundation = r, e.default = r
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createFocusTrapInstance = function (t, e) {
        return e(t, {
            skipInitialFocus: !0
        })
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCCircularProgressFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(84),
        a = function (t) {
            function e(n) {
                return t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        getDeterminateCircleAttribute: function () {
                            return null
                        },
                        hasClass: function () {
                            return !1
                        },
                        removeClass: function () { },
                        removeAttribute: function () { },
                        setAttribute: function () { },
                        setDeterminateCircleAttribute: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                this.isClosed_ = this.adapter.hasClass(o.cssClasses.CLOSED_CLASS), this.isDeterminate_ = !this.adapter.hasClass(o.cssClasses.INDETERMINATE_CLASS), this.progress_ = 0, this.isDeterminate_ && this.adapter.setAttribute(o.strings.ARIA_VALUENOW, this.progress_.toString()), this.radius_ = Number(this.adapter.getDeterminateCircleAttribute(o.strings.RADIUS))
            }, e.prototype.isDeterminate = function () {
                return this.isDeterminate_
            }, e.prototype.getProgress = function () {
                return this.progress_
            }, e.prototype.isClosed = function () {
                return this.isClosed_
            }, e.prototype.setDeterminate = function (t) {
                this.isDeterminate_ = t, this.isDeterminate_ ? (this.adapter.removeClass(o.cssClasses.INDETERMINATE_CLASS), this.setProgress(this.progress_)) : (this.adapter.addClass(o.cssClasses.INDETERMINATE_CLASS), this.adapter.removeAttribute(o.strings.ARIA_VALUENOW))
            }, e.prototype.setProgress = function (t) {
                if (this.progress_ = t, this.isDeterminate_) {
                    var e = (1 - this.progress_) * (2 * Math.PI * this.radius_);
                    this.adapter.setDeterminateCircleAttribute(o.strings.STROKE_DASHOFFSET, "" + e), this.adapter.setAttribute(o.strings.ARIA_VALUENOW, this.progress_.toString())
                }
            }, e.prototype.open = function () {
                this.isClosed_ = !1, this.adapter.removeClass(o.cssClasses.CLOSED_CLASS)
            }, e.prototype.close = function () {
                this.isClosed_ = !0, this.adapter.addClass(o.cssClasses.CLOSED_CLASS)
            }, e
        }(r.MDCFoundation);
    e.MDCCircularProgressFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        INDETERMINATE_CLASS: "ftt-blazor-circular-progress--indeterminate",
        CLOSED_CLASS: "ftt-blazor-circular-progress--closed"
    }, e.strings = {
        DETERMINATE_CIRCLE_SELECTOR: ".ftt-blazor-circular-progress__determinate-circle",
        ARIA_VALUENOW: "aria-valuenow",
        RADIUS: "r",
        STROKE_DASHOFFSET: "stroke-dashoffset"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCDialogFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(86),
        a = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.isOpen_ = !1, r.animationFrame_ = 0, r.animationTimer_ = 0, r.layoutFrame_ = 0, r.escapeKeyAction_ = o.strings.CLOSE_ACTION, r.scrimClickAction_ = o.strings.CLOSE_ACTION, r.autoStackButtons_ = !0, r.areButtonsStacked_ = !1, r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return o.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addBodyClass: function () { },
                        addClass: function () { },
                        areButtonsStacked: function () {
                            return !1
                        },
                        clickDefaultButton: function () { },
                        eventTargetMatches: function () {
                            return !1
                        },
                        getActionFromEvent: function () {
                            return ""
                        },
                        getInitialFocusEl: function () {
                            return null
                        },
                        hasClass: function () {
                            return !1
                        },
                        isContentScrollable: function () {
                            return !1
                        },
                        notifyClosed: function () { },
                        notifyClosing: function () { },
                        notifyOpened: function () { },
                        notifyOpening: function () { },
                        releaseFocus: function () { },
                        removeBodyClass: function () { },
                        removeClass: function () { },
                        reverseButtons: function () { },
                        trapFocus: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                this.adapter.hasClass(o.cssClasses.STACKED) && this.setAutoStackButtons(!1)
            }, e.prototype.destroy = function () {
                this.isOpen_ && this.close(o.strings.DESTROY_ACTION), this.animationTimer_ && (clearTimeout(this.animationTimer_), this.handleAnimationTimerEnd_()), this.layoutFrame_ && (cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = 0)
            }, e.prototype.open = function () {
                var t = this;
                this.isOpen_ = !0, this.adapter.notifyOpening(), this.adapter.addClass(o.cssClasses.OPENING), this.runNextAnimationFrame_((function () {
                    t.adapter.addClass(o.cssClasses.OPEN), t.adapter.addBodyClass(o.cssClasses.SCROLL_LOCK), t.layout(), t.animationTimer_ = setTimeout((function () {
                        t.handleAnimationTimerEnd_(), t.adapter.trapFocus(t.adapter.getInitialFocusEl()), t.adapter.notifyOpened()
                    }), o.numbers.DIALOG_ANIMATION_OPEN_TIME_MS)
                }))
            }, e.prototype.close = function (t) {
                var e = this;
                void 0 === t && (t = ""), this.isOpen_ && (this.isOpen_ = !1, this.adapter.notifyClosing(t), this.adapter.addClass(o.cssClasses.CLOSING), this.adapter.removeClass(o.cssClasses.OPEN), this.adapter.removeBodyClass(o.cssClasses.SCROLL_LOCK), cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, clearTimeout(this.animationTimer_), this.animationTimer_ = setTimeout((function () {
                    e.adapter.releaseFocus(), e.handleAnimationTimerEnd_(), e.adapter.notifyClosed(t)
                }), o.numbers.DIALOG_ANIMATION_CLOSE_TIME_MS))
            }, e.prototype.isOpen = function () {
                return this.isOpen_
            }, e.prototype.getEscapeKeyAction = function () {
                return this.escapeKeyAction_
            }, e.prototype.setEscapeKeyAction = function (t) {
                this.escapeKeyAction_ = t
            }, e.prototype.getScrimClickAction = function () {
                return this.scrimClickAction_
            }, e.prototype.setScrimClickAction = function (t) {
                this.scrimClickAction_ = t
            }, e.prototype.getAutoStackButtons = function () {
                return this.autoStackButtons_
            }, e.prototype.setAutoStackButtons = function (t) {
                this.autoStackButtons_ = t
            }, e.prototype.layout = function () {
                var t = this;
                this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame((function () {
                    t.layoutInternal_(), t.layoutFrame_ = 0
                }))
            }, e.prototype.handleClick = function (t) {
                if (this.adapter.eventTargetMatches(t.target, o.strings.SCRIM_SELECTOR) && "" !== this.scrimClickAction_) this.close(this.scrimClickAction_);
                else {
                    var e = this.adapter.getActionFromEvent(t);
                    e && this.close(e)
                }
            }, e.prototype.handleKeydown = function (t) {
                var e = "Enter" === t.key || 13 === t.keyCode;
                if (e && !this.adapter.getActionFromEvent(t)) {
                    var n = !this.adapter.eventTargetMatches(t.target, o.strings.SUPPRESS_DEFAULT_PRESS_SELECTOR);
                    e && n && this.adapter.clickDefaultButton()
                }
            }, e.prototype.handleDocumentKeydown = function (t) {
                "Escape" !== t.key && 27 !== t.keyCode || "" === this.escapeKeyAction_ || this.close(this.escapeKeyAction_)
            }, e.prototype.layoutInternal_ = function () {
                this.autoStackButtons_ && this.detectStackedButtons_(), this.detectScrollableContent_()
            }, e.prototype.handleAnimationTimerEnd_ = function () {
                this.animationTimer_ = 0, this.adapter.removeClass(o.cssClasses.OPENING), this.adapter.removeClass(o.cssClasses.CLOSING)
            }, e.prototype.runNextAnimationFrame_ = function (t) {
                var e = this;
                cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = requestAnimationFrame((function () {
                    e.animationFrame_ = 0, clearTimeout(e.animationTimer_), e.animationTimer_ = setTimeout(t, 0)
                }))
            }, e.prototype.detectStackedButtons_ = function () {
                this.adapter.removeClass(o.cssClasses.STACKED);
                var t = this.adapter.areButtonsStacked();
                t && this.adapter.addClass(o.cssClasses.STACKED), t !== this.areButtonsStacked_ && (this.adapter.reverseButtons(), this.areButtonsStacked_ = t)
            }, e.prototype.detectScrollableContent_ = function () {
                this.adapter.removeClass(o.cssClasses.SCROLLABLE), this.adapter.isContentScrollable() && this.adapter.addClass(o.cssClasses.SCROLLABLE)
            }, e
        }(r.MDCFoundation);
    e.MDCDialogFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        CLOSING: "ftt-blazor-dialog--closing",
        OPEN: "ftt-blazor-dialog--open",
        OPENING: "ftt-blazor-dialog--opening",
        SCROLLABLE: "ftt-blazor-dialog--scrollable",
        SCROLL_LOCK: "ftt-blazor-dialog-scroll-lock",
        STACKED: "ftt-blazor-dialog--stacked"
    }, e.strings = {
        ACTION_ATTRIBUTE: "data-ftt-blazor-dialog-action",
        BUTTON_DEFAULT_ATTRIBUTE: "data-ftt-blazor-dialog-button-default",
        BUTTON_SELECTOR: ".ftt-blazor-dialog__button",
        CLOSED_EVENT: "MDCDialog:closed",
        CLOSE_ACTION: "close",
        CLOSING_EVENT: "MDCDialog:closing",
        CONTAINER_SELECTOR: ".ftt-blazor-dialog__container",
        CONTENT_SELECTOR: ".ftt-blazor-dialog__content",
        DESTROY_ACTION: "destroy",
        INITIAL_FOCUS_ATTRIBUTE: "data-ftt-blazor-dialog-initial-focus",
        OPENED_EVENT: "MDCDialog:opened",
        OPENING_EVENT: "MDCDialog:opening",
        SCRIM_SELECTOR: ".ftt-blazor-dialog__scrim",
        SUPPRESS_DEFAULT_PRESS_SELECTOR: ["textarea", ".ftt-blazor-menu .ftt-blazor-list-item"].join(", "),
        SURFACE_SELECTOR: ".ftt-blazor-dialog__surface"
    }, e.numbers = {
        DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
        DIALOG_ANIMATION_OPEN_TIME_MS: 150
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createFocusTrapInstance = function (t, e, n) {
        return e(t, {
            initialFocusEl: n
        })
    }, e.isScrollable = function (t) {
        return !!t && t.scrollHeight > t.offsetHeight
    }, e.areTopsMisaligned = function (t) {
        var e = new Set;
        return [].forEach.call(t, (function (t) {
            return e.add(t.offsetTop)
        })), 1 < e.size
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.init = function (t) {
        t.FTTBlazorRef = new i.MDCRipple(t)
    };
    var i = n(3)
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTabScroller = void 0;
    var i = n(0),
        r = n(2),
        o = n(6),
        a = n(4),
        s = n(169),
        c = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        }(n(173)),
        u = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialize = function () {
                this.area_ = this.root.querySelector(s.MDCTabScrollerFoundation.strings.AREA_SELECTOR), this.content_ = this.root.querySelector(s.MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)
            }, e.prototype.initialSyncWithDOM = function () {
                var t = this;
                this.handleInteraction_ = function () {
                    return t.foundation.handleInteraction()
                }, this.handleTransitionEnd_ = function (e) {
                    return t.foundation.handleTransitionEnd(e)
                }, this.area_.addEventListener("wheel", this.handleInteraction_, (0, o.applyPassive)()), this.area_.addEventListener("touchstart", this.handleInteraction_, (0, o.applyPassive)()), this.area_.addEventListener("pointerdown", this.handleInteraction_, (0, o.applyPassive)()), this.area_.addEventListener("mousedown", this.handleInteraction_, (0, o.applyPassive)()), this.area_.addEventListener("keydown", this.handleInteraction_, (0, o.applyPassive)()), this.content_.addEventListener("transitionend", this.handleTransitionEnd_)
            }, e.prototype.destroy = function () {
                t.prototype.destroy.call(this), this.area_.removeEventListener("wheel", this.handleInteraction_, (0, o.applyPassive)()), this.area_.removeEventListener("touchstart", this.handleInteraction_, (0, o.applyPassive)()), this.area_.removeEventListener("pointerdown", this.handleInteraction_, (0, o.applyPassive)()), this.area_.removeEventListener("mousedown", this.handleInteraction_, (0, o.applyPassive)()), this.area_.removeEventListener("keydown", this.handleInteraction_, (0, o.applyPassive)()), this.content_.removeEventListener("transitionend", this.handleTransitionEnd_)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        eventTargetMatchesSelector: function (t, e) {
                            return (0, a.matches)(t, e)
                        },
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        addScrollAreaClass: function (e) {
                            return t.area_.classList.add(e)
                        },
                        setScrollAreaStyleProperty: function (e, n) {
                            return t.area_.style.setProperty(e, n)
                        },
                        setScrollContentStyleProperty: function (e, n) {
                            return t.content_.style.setProperty(e, n)
                        },
                        getScrollContentStyleValue: function (e) {
                            return window.getComputedStyle(t.content_).getPropertyValue(e)
                        },
                        setScrollAreaScrollLeft: function (e) {
                            return t.area_.scrollLeft = e
                        },
                        getScrollAreaScrollLeft: function () {
                            return t.area_.scrollLeft
                        },
                        getScrollContentOffsetWidth: function () {
                            return t.content_.offsetWidth
                        },
                        getScrollAreaOffsetWidth: function () {
                            return t.area_.offsetWidth
                        },
                        computeScrollAreaClientRect: function () {
                            return t.area_.getBoundingClientRect()
                        },
                        computeScrollContentClientRect: function () {
                            return t.content_.getBoundingClientRect()
                        },
                        computeHorizontalScrollbarHeight: function () {
                            return c.computeHorizontalScrollbarHeight(document)
                        }
                    };
                return new s.MDCTabScrollerFoundation(e)
            }, e.prototype.getScrollPosition = function () {
                return this.foundation.getScrollPosition()
            }, e.prototype.getScrollContentWidth = function () {
                return this.content_.offsetWidth
            }, e.prototype.incrementScroll = function (t) {
                this.foundation.incrementScroll(t)
            }, e.prototype.scrollTo = function (t) {
                this.foundation.scrollTo(t)
            }, e
        }(r.MDCComponent);
    e.MDCTabScroller = u
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        ANIMATING: "ftt-blazor-tab-scroller--animating",
        SCROLL_AREA_SCROLL: "ftt-blazor-tab-scroller__scroll-area--scroll",
        SCROLL_TEST: "ftt-blazor-tab-scroller__test"
    }, e.strings = {
        AREA_SELECTOR: ".ftt-blazor-tab-scroller__scroll-area",
        CONTENT_SELECTOR: ".ftt-blazor-tab-scroller__scroll-content"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTabFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(179),
        a = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.focusOnActivate_ = !0, r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        hasClass: function () {
                            return !1
                        },
                        setAttr: function () { },
                        activateIndicator: function () { },
                        deactivateIndicator: function () { },
                        notifyInteracted: function () { },
                        getOffsetLeft: function () {
                            return 0
                        },
                        getOffsetWidth: function () {
                            return 0
                        },
                        getContentOffsetLeft: function () {
                            return 0
                        },
                        getContentOffsetWidth: function () {
                            return 0
                        },
                        focus: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.handleClick = function () {
                this.adapter.notifyInteracted()
            }, e.prototype.isActive = function () {
                return this.adapter.hasClass(o.cssClasses.ACTIVE)
            }, e.prototype.setFocusOnActivate = function (t) {
                this.focusOnActivate_ = t
            }, e.prototype.activate = function (t) {
                this.adapter.addClass(o.cssClasses.ACTIVE), this.adapter.setAttr(o.strings.ARIA_SELECTED, "true"), this.adapter.setAttr(o.strings.TABINDEX, "0"), this.adapter.activateIndicator(t), this.focusOnActivate_ && this.adapter.focus()
            }, e.prototype.deactivate = function () {
                this.isActive() && (this.adapter.removeClass(o.cssClasses.ACTIVE), this.adapter.setAttr(o.strings.ARIA_SELECTED, "false"), this.adapter.setAttr(o.strings.TABINDEX, "-1"), this.adapter.deactivateIndicator())
            }, e.prototype.computeDimensions = function () {
                var t = this.adapter.getOffsetWidth(),
                    e = this.adapter.getOffsetLeft(),
                    n = this.adapter.getContentOffsetWidth(),
                    i = this.adapter.getContentOffsetLeft();
                return {
                    contentLeft: e + i,
                    contentRight: e + i + n,
                    rootLeft: e,
                    rootRight: e + t
                }
            }, e
        }(r.MDCFoundation);
    e.MDCTabFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"], e.defaults = {
        _disable: [],
        allowInput: !1,
        allowInvalidPreload: !1,
        altFormat: "F j, Y",
        altInput: !1,
        altInputClass: "form-control input",
        animate: "object" === ("undefined" == typeof window ? "undefined" : i(window)) && -1 === window.navigator.userAgent.indexOf("MSIE"),
        ariaDateFormat: "F j, Y",
        autoFillDefaultTime: !0,
        clickOpens: !0,
        closeOnSelect: !0,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: !1,
        enableSeconds: !1,
        enableTime: !1,
        errorHandler: function (t) {
            return "undefined" != typeof console && console.warn(t)
        },
        getWeek: function (t) {
            var e = new Date(t.getTime());
            e.setHours(0, 0, 0, 0), e.setDate(e.getDate() + 3 - (e.getDay() + 6) % 7);
            var n = new Date(e.getFullYear(), 0, 4);
            return 1 + Math.round(((e.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7)
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: !1,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: !1,
        now: new Date,
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: void 0,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: !1,
        showMonths: 1,
        static: !1,
        time_24hr: !1,
        weekNumbers: !1,
        wrap: !1
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = e.english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (t) {
            var e = t % 100;
            if (3 < e && e < 21) return "th";
            switch (e % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th"
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        monthAriaLabel: "Month",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: !1
    };
    e.default = i
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.debounce = function (t, e) {
        var n = void 0;
        return function () {
            var i = this,
                r = arguments;
            clearTimeout(n), n = setTimeout((function () {
                return t.apply(i, r)
            }), e)
        }
    }, e.pad = function (t, e) {
        return ("000" + t).slice(-1 * (1 < arguments.length && void 0 !== e ? e : 2))
    }, e.int = function (t) {
        return !0 === t ? 1 : 0
    }, e.arrayify = function (t) {
        return t instanceof Array ? t : [t]
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.formats = e.tokenRegex = e.revFormat = e.monthToStr = void 0;
    var i = n(94),
        r = function () { },
        o = e.monthToStr = function (t, e, n) {
            return n.months[e ? "shorthand" : "longhand"][t]
        },
        a = (e.revFormat = {
            D: r,
            F: function (t, e, n) {
                t.setMonth(n.months.longhand.indexOf(e))
            },
            G: function (t, e) {
                t.setHours(parseFloat(e))
            },
            H: function (t, e) {
                t.setHours(parseFloat(e))
            },
            J: function (t, e) {
                t.setDate(parseFloat(e))
            },
            K: function (t, e, n) {
                t.setHours(t.getHours() % 12 + 12 * (0, i.int)(new RegExp(n.amPM[1], "i").test(e)))
            },
            M: function (t, e, n) {
                t.setMonth(n.months.shorthand.indexOf(e))
            },
            S: function (t, e) {
                t.setSeconds(parseFloat(e))
            },
            U: function (t, e) {
                return new Date(1e3 * parseFloat(e))
            },
            W: function (t, e, n) {
                var i = parseInt(e),
                    r = new Date(t.getFullYear(), 0, 2 + 7 * (i - 1), 0, 0, 0, 0);
                return r.setDate(r.getDate() - r.getDay() + n.firstDayOfWeek), r
            },
            Y: function (t, e) {
                t.setFullYear(parseFloat(e))
            },
            Z: function (t, e) {
                return new Date(e)
            },
            d: function (t, e) {
                t.setDate(parseFloat(e))
            },
            h: function (t, e) {
                t.setHours(parseFloat(e))
            },
            i: function (t, e) {
                t.setMinutes(parseFloat(e))
            },
            j: function (t, e) {
                t.setDate(parseFloat(e))
            },
            l: r,
            m: function (t, e) {
                t.setMonth(parseFloat(e) - 1)
            },
            n: function (t, e) {
                t.setMonth(parseFloat(e) - 1)
            },
            s: function (t, e) {
                t.setSeconds(parseFloat(e))
            },
            u: function (t, e) {
                return new Date(parseFloat(e))
            },
            w: r,
            y: function (t, e) {
                t.setFullYear(2e3 + parseFloat(e))
            }
        }, e.tokenRegex = {
            D: "(\\w+)",
            F: "(\\w+)",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "",
            M: "(\\w+)",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "(\\w+)",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            u: "(.+)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})"
        }, e.formats = {
            Z: function (t) {
                return t.toISOString()
            },
            D: function (t, e, n) {
                return e.weekdays.shorthand[a.w(t, e, n)]
            },
            F: function (t, e, n) {
                return o(a.n(t, e, n) - 1, !1, e)
            },
            G: function (t, e, n) {
                return (0, i.pad)(a.h(t, e, n))
            },
            H: function (t) {
                return (0, i.pad)(t.getHours())
            },
            J: function (t, e) {
                return void 0 !== e.ordinal ? t.getDate() + e.ordinal(t.getDate()) : t.getDate()
            },
            K: function (t, e) {
                return e.amPM[(0, i.int)(11 < t.getHours())]
            },
            M: function (t, e) {
                return o(t.getMonth(), !0, e)
            },
            S: function (t) {
                return (0, i.pad)(t.getSeconds())
            },
            U: function (t) {
                return t.getTime() / 1e3
            },
            W: function (t, e, n) {
                return n.getWeek(t)
            },
            Y: function (t) {
                return (0, i.pad)(t.getFullYear(), 4)
            },
            d: function (t) {
                return (0, i.pad)(t.getDate())
            },
            h: function (t) {
                return t.getHours() % 12 ? t.getHours() % 12 : 12
            },
            i: function (t) {
                return (0, i.pad)(t.getMinutes())
            },
            j: function (t) {
                return t.getDate()
            },
            l: function (t, e) {
                return e.weekdays.longhand[t.getDay()]
            },
            m: function (t) {
                return (0, i.pad)(t.getMonth() + 1)
            },
            n: function (t) {
                return t.getMonth() + 1
            },
            s: function (t) {
                return t.getSeconds()
            },
            u: function (t) {
                return t.getTime()
            },
            w: function (t) {
                return t.getDay()
            },
            y: function (t) {
                return String(t.getFullYear()).substring(2)
            }
        })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isMobile = function () {
        return window.innerWidth < 1e3
    }, e.windowInnerWidth = function () {
        return window.innerWidth
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCDataTableFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(36),
        a = function (t) {
            function e(n) {
                return t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        addClassAtRowIndex: function () { },
                        getAttributeByHeaderCellIndex: function () {
                            return ""
                        },
                        getHeaderCellCount: function () {
                            return 0
                        },
                        getHeaderCellElements: function () {
                            return []
                        },
                        getRowCount: function () {
                            return 0
                        },
                        getRowElements: function () {
                            return []
                        },
                        getRowIdAtIndex: function () {
                            return ""
                        },
                        getRowIndexByChildElement: function () {
                            return 0
                        },
                        getSelectedRowCount: function () {
                            return 0
                        },
                        getTableBodyHeight: function () {
                            return ""
                        },
                        getTableHeaderHeight: function () {
                            return ""
                        },
                        isCheckboxAtRowIndexChecked: function () {
                            return !1
                        },
                        isHeaderRowCheckboxChecked: function () {
                            return !1
                        },
                        isRowsSelectable: function () {
                            return !1
                        },
                        notifyRowSelectionChanged: function () { },
                        notifySelectedAll: function () { },
                        notifySortAction: function () { },
                        notifyUnselectedAll: function () { },
                        registerHeaderRowCheckbox: function () { },
                        registerRowCheckboxes: function () { },
                        removeClass: function () { },
                        removeClassAtRowIndex: function () { },
                        removeClassNameByHeaderCellIndex: function () { },
                        setAttributeAtRowIndex: function () { },
                        setAttributeByHeaderCellIndex: function () { },
                        setClassNameByHeaderCellIndex: function () { },
                        setHeaderRowCheckboxChecked: function () { },
                        setHeaderRowCheckboxIndeterminate: function () { },
                        setProgressIndicatorStyles: function () { },
                        setRowCheckboxCheckedAtIndex: function () { },
                        setSortStatusLabelByHeaderCellIndex: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.layout = function () {
                this.adapter.isRowsSelectable() && (this.adapter.registerHeaderRowCheckbox(), this.adapter.registerRowCheckboxes(), this.setHeaderRowCheckboxState())
            }, e.prototype.layoutAsync = function () {
                return (0, i.__awaiter)(this, void 0, void 0, (function () {
                    return (0, i.__generator)(this, (function (t) {
                        switch (t.label) {
                            case 0:
                                return this.adapter.isRowsSelectable() ? [4, this.adapter.registerHeaderRowCheckbox()] : [3, 3];
                            case 1:
                                return t.sent(), [4, this.adapter.registerRowCheckboxes()];
                            case 2:
                                t.sent(), this.setHeaderRowCheckboxState(), t.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.getRows = function () {
                return this.adapter.getRowElements()
            }, e.prototype.getHeaderCells = function () {
                return this.adapter.getHeaderCellElements()
            }, e.prototype.setSelectedRowIds = function (t) {
                for (var e = 0; e < this.adapter.getRowCount(); e++) {
                    var n = this.adapter.getRowIdAtIndex(e),
                        i = !1;
                    n && 0 <= t.indexOf(n) && (i = !0), this.adapter.setRowCheckboxCheckedAtIndex(e, i), this.selectRowAtIndex(e, i)
                }
                this.setHeaderRowCheckboxState()
            }, e.prototype.getRowIds = function () {
                for (var t = [], e = 0; e < this.adapter.getRowCount(); e++) t.push(this.adapter.getRowIdAtIndex(e));
                return t
            }, e.prototype.getSelectedRowIds = function () {
                for (var t = [], e = 0; e < this.adapter.getRowCount(); e++) this.adapter.isCheckboxAtRowIndexChecked(e) && t.push(this.adapter.getRowIdAtIndex(e));
                return t
            }, e.prototype.handleHeaderRowCheckboxChange = function () {
                for (var t = this.adapter.isHeaderRowCheckboxChecked(), e = 0; e < this.adapter.getRowCount(); e++) this.adapter.setRowCheckboxCheckedAtIndex(e, t), this.selectRowAtIndex(e, t);
                t ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll()
            }, e.prototype.handleRowCheckboxChange = function (t) {
                var e = this.adapter.getRowIndexByChildElement(t.target);
                if (-1 !== e) {
                    var n = this.adapter.isCheckboxAtRowIndexChecked(e);
                    this.selectRowAtIndex(e, n), this.setHeaderRowCheckboxState();
                    var i = this.adapter.getRowIdAtIndex(e);
                    this.adapter.notifyRowSelectionChanged({
                        rowId: i,
                        rowIndex: e,
                        selected: n
                    })
                }
            }, e.prototype.handleSortAction = function (t) {
                for (var e = t.columnId, n = t.columnIndex, i = t.headerCell, r = 0; r < this.adapter.getHeaderCellCount(); r++) r !== n && (this.adapter.removeClassNameByHeaderCellIndex(r, o.cssClasses.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(r, o.cssClasses.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, o.strings.ARIA_SORT, o.SortValue.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(r, o.SortValue.NONE));
                this.adapter.setClassNameByHeaderCellIndex(n, o.cssClasses.HEADER_CELL_SORTED);
                var a = this.adapter.getAttributeByHeaderCellIndex(n, o.strings.ARIA_SORT),
                    s = o.SortValue.NONE;
                s = a === o.SortValue.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(n, o.cssClasses.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(n, o.strings.ARIA_SORT, o.SortValue.DESCENDING), o.SortValue.DESCENDING) : (a === o.SortValue.DESCENDING && this.adapter.removeClassNameByHeaderCellIndex(n, o.cssClasses.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(n, o.strings.ARIA_SORT, o.SortValue.ASCENDING), o.SortValue.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(n, s), this.adapter.notifySortAction({
                    columnId: e,
                    columnIndex: n,
                    headerCell: i,
                    sortValue: s
                })
            }, e.prototype.showProgress = function () {
                var t = this.adapter.getTableBodyHeight(),
                    e = this.adapter.getTableHeaderHeight();
                this.adapter.setProgressIndicatorStyles({
                    height: t,
                    top: e
                }), this.adapter.addClass(o.cssClasses.IN_PROGRESS)
            }, e.prototype.hideProgress = function () {
                this.adapter.removeClass(o.cssClasses.IN_PROGRESS)
            }, e.prototype.setHeaderRowCheckboxState = function () {
                this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (0 === this.adapter.getSelectedRowCount() ? this.adapter.setHeaderRowCheckboxIndeterminate(!1) : this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1))
            }, e.prototype.selectRowAtIndex = function (t, e) {
                e ? (this.adapter.addClassAtRowIndex(t, o.cssClasses.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, o.strings.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, o.cssClasses.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, o.strings.ARIA_SELECTED, "false"))
            }, e
        }(r.MDCFoundation);
    e.MDCDataTableFoundation = a
}, function (t, e, n) {
    n(99), t.exports = n(197)
}, function (t, e, n) {
    "use strict";
    var T = j(n(159)),
        O = j(n(88));

    function j(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }
    window.FTTBlazor = {
        Dialog: T,
        Ripple: O
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.init = function (t, e) {
        var n = (0, o.setFTTBlazorInstance)(t, {
            ref: t,
            componentRef: e,
            checkbox: null
        });
        n.checkbox = new r.MDCCheckbox(n.componentRef), new i.MDCFormField(n.ref).input = n.checkbox
    }, e.setIndeterminate = function (t, e) {
        (0, o.getFTTBlazorInstance)(t).checkbox.indeterminate = e
    };
    var i = n(39),
        r = n(102),
        o = n(9)
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCFormField = void 0;
    var i = n(0),
        r = n(2),
        o = n(40),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.labelEl = function () {
                var t = o.MDCFormFieldFoundation.strings.LABEL_SELECTOR;
                return this.root.querySelector(t)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        activateInputRipple: function () {
                            t.input && t.input.ripple && t.input.ripple.activate()
                        },
                        deactivateInputRipple: function () {
                            t.input && t.input.ripple && t.input.ripple.deactivate()
                        },
                        deregisterInteractionHandler: function (e, n) {
                            var i = t.labelEl();
                            i && i.removeEventListener(e, n)
                        },
                        registerInteractionHandler: function (e, n) {
                            var i = t.labelEl();
                            i && i.addEventListener(e, n)
                        }
                    };
                return new o.MDCFormFieldFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCFormField = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(42);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(19);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(43);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }))
}, function (t, e, n) {
    "use strict";
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTextField = void 0;
    var i = n(0),
        r = n(2),
        o = n(6),
        a = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        }(n(4)),
        s = n(45),
        c = n(47),
        u = n(48),
        l = n(3),
        d = n(5),
        f = n(50),
        p = n(20),
        h = n(21),
        _ = n(52),
        m = n(53),
        g = n(22),
        C = n(55),
        y = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialize = function (t, e, n, i, r, o, a) {
                void 0 === t && (t = function (t, e) {
                    return new l.MDCRipple(t, e)
                }), void 0 === e && (e = function (t) {
                    return new c.MDCLineRipple(t)
                }), void 0 === n && (n = function (t) {
                    return new m.MDCTextFieldHelperText(t)
                }), void 0 === i && (i = function (t) {
                    return new f.MDCTextFieldCharacterCounter(t)
                }), void 0 === r && (r = function (t) {
                    return new C.MDCTextFieldIcon(t)
                }), void 0 === o && (o = function (t) {
                    return new s.MDCFloatingLabel(t)
                }), void 0 === a && (a = function (t) {
                    return new u.MDCNotchedOutline(t)
                }), this.input_ = this.root.querySelector(h.strings.INPUT_SELECTOR);
                var d = this.root.querySelector(h.strings.LABEL_SELECTOR);
                this.label_ = d ? o(d) : null;
                var _ = this.root.querySelector(h.strings.LINE_RIPPLE_SELECTOR);
                this.lineRipple_ = _ ? e(_) : null;
                var y = this.root.querySelector(h.strings.OUTLINE_SELECTOR);
                this.outline_ = y ? a(y) : null;
                var E = g.MDCTextFieldHelperTextFoundation.strings,
                    v = this.root.nextElementSibling,
                    b = v && v.classList.contains(h.cssClasses.HELPER_LINE),
                    A = b && v && v.querySelector(E.ROOT_SELECTOR);
                this.helperText_ = A ? n(A) : null;
                var T = p.MDCTextFieldCharacterCounterFoundation.strings,
                    I = this.root.querySelector(T.ROOT_SELECTOR);
                !I && b && v && (I = v.querySelector(T.ROOT_SELECTOR)), this.characterCounter_ = I ? i(I) : null;
                var O = this.root.querySelector(h.strings.LEADING_ICON_SELECTOR);
                this.leadingIcon_ = O ? r(O) : null;
                var S = this.root.querySelector(h.strings.TRAILING_ICON_SELECTOR);
                this.trailingIcon_ = S ? r(S) : null, this.prefix_ = this.root.querySelector(h.strings.PREFIX_SELECTOR), this.suffix_ = this.root.querySelector(h.strings.SUFFIX_SELECTOR), this.ripple = this.createRipple_(t)
            }, e.prototype.destroy = function () {
                this.ripple && this.ripple.destroy(), this.lineRipple_ && this.lineRipple_.destroy(), this.helperText_ && this.helperText_.destroy(), this.characterCounter_ && this.characterCounter_.destroy(), this.leadingIcon_ && this.leadingIcon_.destroy(), this.trailingIcon_ && this.trailingIcon_.destroy(), this.label_ && this.label_.destroy(), this.outline_ && this.outline_.destroy(), t.prototype.destroy.call(this)
            }, e.prototype.initialSyncWithDOM = function () {
                this.disabled = this.input_.disabled
            }, Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this.foundation.getValue()
                },
                set: function (t) {
                    this.foundation.setValue(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "disabled", {
                get: function () {
                    return this.foundation.isDisabled()
                },
                set: function (t) {
                    this.foundation.setDisabled(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "valid", {
                get: function () {
                    return this.foundation.isValid()
                },
                set: function (t) {
                    this.foundation.setValid(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "required", {
                get: function () {
                    return this.input_.required
                },
                set: function (t) {
                    this.input_.required = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "pattern", {
                get: function () {
                    return this.input_.pattern
                },
                set: function (t) {
                    this.input_.pattern = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "minLength", {
                get: function () {
                    return this.input_.minLength
                },
                set: function (t) {
                    this.input_.minLength = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "maxLength", {
                get: function () {
                    return this.input_.maxLength
                },
                set: function (t) {
                    t < 0 ? this.input_.removeAttribute("maxLength") : this.input_.maxLength = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "min", {
                get: function () {
                    return this.input_.min
                },
                set: function (t) {
                    this.input_.min = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "max", {
                get: function () {
                    return this.input_.max
                },
                set: function (t) {
                    this.input_.max = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "step", {
                get: function () {
                    return this.input_.step
                },
                set: function (t) {
                    this.input_.step = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "helperTextContent", {
                set: function (t) {
                    this.foundation.setHelperTextContent(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "leadingIconAriaLabel", {
                set: function (t) {
                    this.foundation.setLeadingIconAriaLabel(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "leadingIconContent", {
                set: function (t) {
                    this.foundation.setLeadingIconContent(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "trailingIconAriaLabel", {
                set: function (t) {
                    this.foundation.setTrailingIconAriaLabel(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "trailingIconContent", {
                set: function (t) {
                    this.foundation.setTrailingIconContent(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "useNativeValidation", {
                set: function (t) {
                    this.foundation.setUseNativeValidation(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "prefixText", {
                get: function () {
                    return this.prefix_ ? this.prefix_.textContent : null
                },
                set: function (t) {
                    this.prefix_ && (this.prefix_.textContent = t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "suffixText", {
                get: function () {
                    return this.suffix_ ? this.suffix_.textContent : null
                },
                set: function (t) {
                    this.suffix_ && (this.suffix_.textContent = t)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.focus = function () {
                this.input_.focus()
            }, e.prototype.layout = function () {
                var t = this.foundation.shouldFloat;
                this.foundation.notchOutline(t)
            }, e.prototype.getDefaultFoundation = function () {
                var t = (0, i.__assign)((0, i.__assign)((0, i.__assign)((0, i.__assign)((0, i.__assign)({}, this.getRootAdapterMethods_()), this.getInputAdapterMethods_()), this.getLabelAdapterMethods_()), this.getLineRippleAdapterMethods_()), this.getOutlineAdapterMethods_());
                return new _.MDCTextFieldFoundation(t, this.getFoundationMap_())
            }, e.prototype.getRootAdapterMethods_ = function () {
                var t = this;
                return {
                    addClass: function (e) {
                        return t.root.classList.add(e)
                    },
                    removeClass: function (e) {
                        return t.root.classList.remove(e)
                    },
                    hasClass: function (e) {
                        return t.root.classList.contains(e)
                    },
                    registerTextFieldInteractionHandler: function (e, n) {
                        return t.listen(e, n)
                    },
                    deregisterTextFieldInteractionHandler: function (e, n) {
                        return t.unlisten(e, n)
                    },
                    registerValidationAttributeChangeHandler: function (e) {
                        var n = new MutationObserver((function (t) {
                            return e(function (t) {
                                return t.map((function (t) {
                                    return t.attributeName
                                })).filter((function (t) {
                                    return t
                                }))
                            }(t))
                        }));
                        return n.observe(t.input_, {
                            attributes: !0
                        }), n
                    },
                    deregisterValidationAttributeChangeHandler: function (t) {
                        return t.disconnect()
                    }
                }
            }, e.prototype.getInputAdapterMethods_ = function () {
                var t = this;
                return {
                    getNativeInput: function () {
                        return t.input_
                    },
                    isFocused: function () {
                        return document.activeElement === t.input_
                    },
                    registerInputInteractionHandler: function (e, n) {
                        return t.input_.addEventListener(e, n, (0, o.applyPassive)())
                    },
                    deregisterInputInteractionHandler: function (e, n) {
                        return t.input_.removeEventListener(e, n, (0, o.applyPassive)())
                    }
                }
            }, e.prototype.getLabelAdapterMethods_ = function () {
                var t = this;
                return {
                    floatLabel: function (e) {
                        return t.label_ && t.label_.float(e)
                    },
                    getLabelWidth: function () {
                        return t.label_ ? t.label_.getWidth() : 0
                    },
                    hasLabel: function () {
                        return Boolean(t.label_)
                    },
                    shakeLabel: function (e) {
                        return t.label_ && t.label_.shake(e)
                    },
                    setLabelRequired: function (e) {
                        return t.label_ && t.label_.setRequired(e)
                    }
                }
            }, e.prototype.getLineRippleAdapterMethods_ = function () {
                var t = this;
                return {
                    activateLineRipple: function () {
                        t.lineRipple_ && t.lineRipple_.activate()
                    },
                    deactivateLineRipple: function () {
                        t.lineRipple_ && t.lineRipple_.deactivate()
                    },
                    setLineRippleTransformOrigin: function (e) {
                        t.lineRipple_ && t.lineRipple_.setRippleCenter(e)
                    }
                }
            }, e.prototype.getOutlineAdapterMethods_ = function () {
                var t = this;
                return {
                    closeOutline: function () {
                        return t.outline_ && t.outline_.closeNotch()
                    },
                    hasOutline: function () {
                        return Boolean(t.outline_)
                    },
                    notchOutline: function (e) {
                        return t.outline_ && t.outline_.notch(e)
                    }
                }
            }, e.prototype.getFoundationMap_ = function () {
                return {
                    characterCounter: this.characterCounter_ ? this.characterCounter_.foundationForTextField : void 0,
                    helperText: this.helperText_ ? this.helperText_.foundationForTextField : void 0,
                    leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundationForTextField : void 0,
                    trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundationForTextField : void 0
                }
            }, e.prototype.createRipple_ = function (t) {
                var e = this,
                    n = this.root.classList.contains(h.cssClasses.TEXTAREA),
                    r = this.root.classList.contains(h.cssClasses.OUTLINED);
                if (n || r) return null;
                var s = (0, i.__assign)((0, i.__assign)({}, l.MDCRipple.createAdapter(this)), {
                    isSurfaceActive: function () {
                        return a.matches(e.input_, ":active")
                    },
                    registerInteractionHandler: function (t, n) {
                        return e.input_.addEventListener(t, n, (0, o.applyPassive)())
                    },
                    deregisterInteractionHandler: function (t, n) {
                        return e.input_.removeEventListener(t, n, (0, o.applyPassive)())
                    }
                });
                return t(this.root, new d.MDCRippleFoundation(s))
            }, e
        }(r.MDCComponent);
    e.MDCTextField = y
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        LABEL_FLOAT_ABOVE: "ftt-blazor-floating-label--float-above",
        LABEL_REQUIRED: "ftt-blazor-floating-label--required",
        LABEL_SHAKE: "ftt-blazor-floating-label--shake",
        ROOT: "ftt-blazor-floating-label"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCLineRippleFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(107),
        a = function (t) {
            function e(n) {
                var r = t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this;
                return r.transitionEndHandler_ = function (t) {
                    return r.handleTransitionEnd(t)
                }, r
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        hasClass: function () {
                            return !1
                        },
                        setStyle: function () { },
                        registerEventHandler: function () { },
                        deregisterEventHandler: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                this.adapter.registerEventHandler("transitionend", this.transitionEndHandler_)
            }, e.prototype.destroy = function () {
                this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler_)
            }, e.prototype.activate = function () {
                this.adapter.removeClass(o.cssClasses.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(o.cssClasses.LINE_RIPPLE_ACTIVE)
            }, e.prototype.setRippleCenter = function (t) {
                this.adapter.setStyle("transform-origin", t + "px center")
            }, e.prototype.deactivate = function () {
                this.adapter.addClass(o.cssClasses.LINE_RIPPLE_DEACTIVATING)
            }, e.prototype.handleTransitionEnd = function (t) {
                var e = this.adapter.hasClass(o.cssClasses.LINE_RIPPLE_DEACTIVATING);
                "opacity" === t.propertyName && e && (this.adapter.removeClass(o.cssClasses.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(o.cssClasses.LINE_RIPPLE_DEACTIVATING))
            }, e
        }(r.MDCFoundation);
    e.MDCLineRippleFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        LINE_RIPPLE_ACTIVE: "ftt-blazor-line-ripple--active",
        LINE_RIPPLE_DEACTIVATING: "ftt-blazor-line-ripple--deactivating"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCNotchedOutlineFoundation = void 0;
    var i = n(0),
        r = n(1),
        o = n(49),
        a = function (t) {
            function e(n) {
                return t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "strings", {
                get: function () {
                    return o.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return o.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return o.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        removeClass: function () { },
                        setNotchWidthProperty: function () { },
                        removeNotchWidthProperty: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.notch = function (t) {
                var n = e.cssClasses.OUTLINE_NOTCHED;
                0 < t && (t += o.numbers.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(n)
            }, e.prototype.closeNotch = function () {
                var t = e.cssClasses.OUTLINE_NOTCHED;
                this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty()
            }, e
        }(r.MDCFoundation);
    e.MDCNotchedOutlineFoundation = a, e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(50);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(20);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(51);
    Object.defineProperty(e, "characterCountCssClasses", {
        enumerable: !0,
        get: function () {
            return o.cssClasses
        }
    }), Object.defineProperty(e, "characterCountStrings", {
        enumerable: !0,
        get: function () {
            return o.strings
        }
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(53);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(22);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(54);
    Object.defineProperty(e, "helperTextCssClasses", {
        enumerable: !0,
        get: function () {
            return o.cssClasses
        }
    }), Object.defineProperty(e, "helperTextStrings", {
        enumerable: !0,
        get: function () {
            return o.strings
        }
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(55);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(56);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(57);
    Object.defineProperty(e, "iconCssClasses", {
        enumerable: !0,
        get: function () {
            return o.cssClasses
        }
    }), Object.defineProperty(e, "iconStrings", {
        enumerable: !0,
        get: function () {
            return o.strings
        }
    })
}, function (t, e, n) {
    "use strict";
}, function (t, e, n) {
    "use strict";
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(115);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(59);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(58);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }))
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCRadio = void 0;
    var i = n(0),
        r = n(2),
        o = n(6),
        a = n(3),
        s = n(5),
        c = n(58),
        u = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ripple_ = e.createRipple_(), e
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "checked", {
                get: function () {
                    return this.nativeControl_.checked
                },
                set: function (t) {
                    this.nativeControl_.checked = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "disabled", {
                get: function () {
                    return this.nativeControl_.disabled
                },
                set: function (t) {
                    this.foundation.setDisabled(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this.nativeControl_.value
                },
                set: function (t) {
                    this.nativeControl_.value = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ripple", {
                get: function () {
                    return this.ripple_
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.destroy = function () {
                this.ripple_.destroy(), t.prototype.destroy.call(this)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        setNativeControlDisabled: function (e) {
                            return t.nativeControl_.disabled = e
                        }
                    };
                return new c.MDCRadioFoundation(e)
            }, e.prototype.createRipple_ = function () {
                var t = this,
                    e = (0, i.__assign)((0, i.__assign)({}, a.MDCRipple.createAdapter(this)), {
                        registerInteractionHandler: function (e, n) {
                            return t.nativeControl_.addEventListener(e, n, (0, o.applyPassive)())
                        },
                        deregisterInteractionHandler: function (e, n) {
                            return t.nativeControl_.removeEventListener(e, n, (0, o.applyPassive)())
                        },
                        isSurfaceActive: function () {
                            return !1
                        },
                        isUnbounded: function () {
                            return !0
                        }
                    });
                return new a.MDCRipple(this.root, new s.MDCRippleFoundation(e))
            }, Object.defineProperty(e.prototype, "nativeControl_", {
                get: function () {
                    var t = c.MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR,
                        e = this.root.querySelector(t);
                    if (!e) throw new Error("Radio component requires a " + t + " element");
                    return e
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(r.MDCComponent);
    e.MDCRadio = u
}, function (t, e, n) {
    "use strict";
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(118);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(25);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(26);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }));
    var a = n(122);
    Object.keys(a).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return a[t]
            }
        })
    }));
    var s = n(123);
    Object.keys(s).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return s[t]
            }
        })
    }))
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCSelect = void 0;
    var i = n(0),
        r = n(2),
        o = n(45),
        a = n(47),
        s = g(n(7)),
        c = n(60),
        u = g(n(13)),
        l = n(48),
        d = n(3),
        f = n(5),
        p = n(25),
        h = n(26),
        _ = n(63),
        m = n(66);

    function g(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }
    var C = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return (0, i.__extends)(e, t), e.attachTo = function (t) {
            return new e(t)
        }, e.prototype.initialize = function (t, e, n, i, r, s) {
            if (void 0 === t && (t = function (t) {
                return new o.MDCFloatingLabel(t)
            }), void 0 === e && (e = function (t) {
                return new a.MDCLineRipple(t)
            }), void 0 === n && (n = function (t) {
                return new l.MDCNotchedOutline(t)
            }), void 0 === i && (i = function (t) {
                return new c.MDCMenu(t)
            }), void 0 === r && (r = function (t) {
                return new m.MDCSelectIcon(t)
            }), void 0 === s && (s = function (t) {
                return new _.MDCSelectHelperText(t)
            }), this.selectAnchor = this.root.querySelector(p.strings.SELECT_ANCHOR_SELECTOR), this.selectedText = this.root.querySelector(p.strings.SELECTED_TEXT_SELECTOR), !this.selectedText) throw new Error("MDCSelect: Missing required element: The following selector must be present: '" + p.strings.SELECTED_TEXT_SELECTOR + "'");
            if (this.selectAnchor.hasAttribute(p.strings.ARIA_CONTROLS)) {
                var u = document.getElementById(this.selectAnchor.getAttribute(p.strings.ARIA_CONTROLS));
                u && (this.helperText = s(u))
            }
            this.menuSetup(i);
            var d = this.root.querySelector(p.strings.LABEL_SELECTOR);
            this.label = d ? t(d) : null;
            var f = this.root.querySelector(p.strings.LINE_RIPPLE_SELECTOR);
            this.lineRipple = f ? e(f) : null;
            var h = this.root.querySelector(p.strings.OUTLINE_SELECTOR);
            this.outline = h ? n(h) : null;
            var g = this.root.querySelector(p.strings.LEADING_ICON_SELECTOR);
            g && (this.leadingIcon = r(g)), this.root.classList.contains(p.cssClasses.OUTLINED) || (this.ripple = this.createRipple())
        }, e.prototype.initialSyncWithDOM = function () {
            var t = this;
            this.handleChange = function () {
                t.foundation.handleChange()
            }, this.handleFocus = function () {
                t.foundation.handleFocus()
            }, this.handleBlur = function () {
                t.foundation.handleBlur()
            }, this.handleClick = function (e) {
                t.selectAnchor.focus(), t.foundation.handleClick(t.getNormalizedXCoordinate(e))
            }, this.handleKeydown = function (e) {
                t.foundation.handleKeydown(e)
            }, this.handleMenuItemAction = function (e) {
                t.foundation.handleMenuItemAction(e.detail.index)
            }, this.handleMenuOpened = function () {
                t.foundation.handleMenuOpened()
            }, this.handleMenuClosed = function () {
                t.foundation.handleMenuClosed()
            }, this.selectAnchor.addEventListener("focus", this.handleFocus), this.selectAnchor.addEventListener("blur", this.handleBlur), this.selectAnchor.addEventListener("click", this.handleClick), this.selectAnchor.addEventListener("keydown", this.handleKeydown), this.menu.listen(s.strings.CLOSED_EVENT, this.handleMenuClosed), this.menu.listen(s.strings.OPENED_EVENT, this.handleMenuOpened), this.menu.listen(u.strings.SELECTED_EVENT, this.handleMenuItemAction)
        }, e.prototype.destroy = function () {
            this.selectAnchor.removeEventListener("change", this.handleChange), this.selectAnchor.removeEventListener("focus", this.handleFocus), this.selectAnchor.removeEventListener("blur", this.handleBlur), this.selectAnchor.removeEventListener("keydown", this.handleKeydown), this.selectAnchor.removeEventListener("click", this.handleClick), this.menu.unlisten(s.strings.CLOSED_EVENT, this.handleMenuClosed), this.menu.unlisten(s.strings.OPENED_EVENT, this.handleMenuOpened), this.menu.unlisten(u.strings.SELECTED_EVENT, this.handleMenuItemAction), this.menu.destroy(), this.ripple && this.ripple.destroy(), this.outline && this.outline.destroy(), this.leadingIcon && this.leadingIcon.destroy(), this.helperText && this.helperText.destroy(), t.prototype.destroy.call(this)
        }, Object.defineProperty(e.prototype, "value", {
            get: function () {
                return this.foundation.getValue()
            },
            set: function (t) {
                this.foundation.setValue(t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "selectedIndex", {
            get: function () {
                return this.foundation.getSelectedIndex()
            },
            set: function (t) {
                this.foundation.setSelectedIndex(t, !0)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "disabled", {
            get: function () {
                return this.foundation.getDisabled()
            },
            set: function (t) {
                this.foundation.setDisabled(t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "leadingIconAriaLabel", {
            set: function (t) {
                this.foundation.setLeadingIconAriaLabel(t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "leadingIconContent", {
            set: function (t) {
                this.foundation.setLeadingIconContent(t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "helperTextContent", {
            set: function (t) {
                this.foundation.setHelperTextContent(t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "useDefaultValidation", {
            set: function (t) {
                this.foundation.setUseDefaultValidation(t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "valid", {
            get: function () {
                return this.foundation.isValid()
            },
            set: function (t) {
                this.foundation.setValid(t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "required", {
            get: function () {
                return this.foundation.getRequired()
            },
            set: function (t) {
                this.foundation.setRequired(t)
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.layout = function () {
            this.foundation.layout()
        }, e.prototype.layoutOptions = function () {
            this.foundation.layoutOptions(), this.menu.layout()
        }, e.prototype.getDefaultFoundation = function () {
            var t = (0, i.__assign)((0, i.__assign)((0, i.__assign)((0, i.__assign)({}, this.getSelectAdapterMethods()), this.getCommonAdapterMethods()), this.getOutlineAdapterMethods()), this.getLabelAdapterMethods());
            return new h.MDCSelectFoundation(t, this.getFoundationMap())
        }, e.prototype.menuSetup = function (t) {
            this.menuElement = this.root.querySelector(p.strings.MENU_SELECTOR), this.menu = t(this.menuElement), this.menu.hasTypeahead = !0
        }, e.prototype.createRipple = function () {
            var t = this,
                e = (0, i.__assign)((0, i.__assign)({}, d.MDCRipple.createAdapter({
                    root: this.selectAnchor
                })), {
                    registerInteractionHandler: function (e, n) {
                        t.selectAnchor.addEventListener(e, n)
                    },
                    deregisterInteractionHandler: function (e, n) {
                        t.selectAnchor.removeEventListener(e, n)
                    }
                });
            return new d.MDCRipple(this.selectAnchor, new f.MDCRippleFoundation(e))
        }, e.prototype.getSelectAdapterMethods = function () {
            var t = this;
            return {
                getSelectedMenuItem: function () {
                    return t.menuElement.querySelector(p.strings.SELECTED_ITEM_SELECTOR)
                },
                getMenuItemAttr: function (t, e) {
                    return t.getAttribute(e)
                },
                setSelectedText: function (e) {
                    t.selectedText.textContent = e
                },
                isSelectAnchorFocused: function () {
                    return document.activeElement === t.selectAnchor
                },
                getSelectAnchorAttr: function (e) {
                    return t.selectAnchor.getAttribute(e)
                },
                setSelectAnchorAttr: function (e, n) {
                    t.selectAnchor.setAttribute(e, n)
                },
                removeSelectAnchorAttr: function (e) {
                    t.selectAnchor.removeAttribute(e)
                },
                addMenuClass: function (e) {
                    t.menuElement.classList.add(e)
                },
                removeMenuClass: function (e) {
                    t.menuElement.classList.remove(e)
                },
                openMenu: function () {
                    t.menu.open = !0
                },
                closeMenu: function () {
                    t.menu.open = !1
                },
                getAnchorElement: function () {
                    return t.root.querySelector(p.strings.SELECT_ANCHOR_SELECTOR)
                },
                setMenuAnchorElement: function (e) {
                    t.menu.setAnchorElement(e)
                },
                setMenuAnchorCorner: function (e) {
                    t.menu.setAnchorCorner(e)
                },
                setMenuWrapFocus: function (e) {
                    t.menu.wrapFocus = e
                },
                setAttributeAtIndex: function (e, n, i) {
                    t.menu.items[e].setAttribute(n, i)
                },
                removeAttributeAtIndex: function (e, n) {
                    t.menu.items[e].removeAttribute(n)
                },
                focusMenuItemAtIndex: function (e) {
                    t.menu.items[e].focus()
                },
                getMenuItemCount: function () {
                    return t.menu.items.length
                },
                getMenuItemValues: function () {
                    return t.menu.items.map((function (t) {
                        return t.getAttribute(p.strings.VALUE_ATTR) || ""
                    }))
                },
                getMenuItemTextAtIndex: function (e) {
                    return t.menu.getPrimaryTextAtIndex(e)
                },
                addClassAtIndex: function (e, n) {
                    t.menu.items[e].classList.add(n)
                },
                removeClassAtIndex: function (e, n) {
                    t.menu.items[e].classList.remove(n)
                },
                isTypeaheadInProgress: function () {
                    return t.menu.typeaheadInProgress
                },
                typeaheadMatchItem: function (e, n) {
                    return t.menu.typeaheadMatchItem(e, n)
                }
            }
        }, e.prototype.getCommonAdapterMethods = function () {
            var t = this;
            return {
                addClass: function (e) {
                    t.root.classList.add(e)
                },
                removeClass: function (e) {
                    t.root.classList.remove(e)
                },
                hasClass: function (e) {
                    return t.root.classList.contains(e)
                },
                setRippleCenter: function (e) {
                    t.lineRipple && t.lineRipple.setRippleCenter(e)
                },
                activateBottomLine: function () {
                    t.lineRipple && t.lineRipple.activate()
                },
                deactivateBottomLine: function () {
                    t.lineRipple && t.lineRipple.deactivate()
                },
                notifyChange: function (e) {
                    var n = t.selectedIndex;
                    t.emit(p.strings.CHANGE_EVENT, {
                        value: e,
                        index: n
                    }, !0)
                }
            }
        }, e.prototype.getOutlineAdapterMethods = function () {
            var t = this;
            return {
                hasOutline: function () {
                    return Boolean(t.outline)
                },
                notchOutline: function (e) {
                    t.outline && t.outline.notch(e)
                },
                closeOutline: function () {
                    t.outline && t.outline.closeNotch()
                }
            }
        }, e.prototype.getLabelAdapterMethods = function () {
            var t = this;
            return {
                hasLabel: function () {
                    return !!t.label
                },
                floatLabel: function (e) {
                    t.label && t.label.float(e)
                },
                getLabelWidth: function () {
                    return t.label ? t.label.getWidth() : 0
                },
                setLabelRequired: function (e) {
                    t.label && t.label.setRequired(e)
                }
            }
        }, e.prototype.getNormalizedXCoordinate = function (t) {
            var e = t.target.getBoundingClientRect();
            return (this.isTouchEvent(t) ? t.touches[0].clientX : t.clientX) - e.left
        }, e.prototype.isTouchEvent = function (t) {
            return Boolean(t.touches)
        }, e.prototype.getFoundationMap = function () {
            return {
                helperText: this.helperText ? this.helperText.foundationForSelect : void 0,
                leadingIcon: this.leadingIcon ? this.leadingIcon.foundationForSelect : void 0
            }
        }, e
    }(r.MDCComponent);
    e.MDCSelect = C
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.initState = function () {
        return {
            bufferClearTimeout: 0,
            currentFirstChar: "",
            sortedIndexCursor: 0,
            typeaheadBuffer: ""
        }
    }, e.initSortedIndex = function (t, e) {
        for (var n = new Map, i = 0; i < t; i++) {
            var r = e(i).trim();
            if (r) {
                var o = r[0].toLowerCase();
                n.has(o) || n.set(o, []), n.get(o).push({
                    text: r.toLowerCase(),
                    index: i
                })
            }
        }
        return n.forEach((function (t) {
            t.sort((function (t, e) {
                return t.index - e.index
            }))
        })), n
    }, e.matchItem = a, e.isTypingInProgress = s, e.clearBuffer = c, e.handleKeydown = function (t, e) {
        var n = t.event,
            r = t.isTargetListItem,
            c = t.focusedItemIndex,
            u = t.focusItemAtIndex,
            l = t.sortedIndexByFirstChar,
            d = t.isItemAtIndexDisabled,
            f = "ArrowLeft" === (0, i.normalizeKey)(n),
            p = "ArrowUp" === (0, i.normalizeKey)(n),
            h = "ArrowRight" === (0, i.normalizeKey)(n),
            _ = "ArrowDown" === (0, i.normalizeKey)(n),
            m = "Home" === (0, i.normalizeKey)(n),
            g = "End" === (0, i.normalizeKey)(n),
            C = "Enter" === (0, i.normalizeKey)(n),
            y = "Spacebar" === (0, i.normalizeKey)(n);
        return f || p || h || _ || m || g || C ? -1 : y || 1 !== n.key.length ? y ? (r && (0, o.preventDefaultEvent)(n), r && s(e) ? a({
            focusItemAtIndex: u,
            focusedItemIndex: c,
            nextChar: " ",
            sortedIndexByFirstChar: l,
            skipFocus: !1,
            isItemAtIndexDisabled: d
        }, e) : -1) : -1 : ((0, o.preventDefaultEvent)(n), a({
            focusItemAtIndex: u,
            focusedItemIndex: c,
            nextChar: n.key.toLowerCase(),
            sortedIndexByFirstChar: l,
            skipFocus: !1,
            isItemAtIndexDisabled: d
        }, e))
    };
    var i = n(12),
        r = n(10),
        o = n(61);

    function a(t, e) {
        var n, i = t.nextChar,
            o = t.focusItemAtIndex,
            a = t.sortedIndexByFirstChar,
            s = t.focusedItemIndex,
            u = t.skipFocus,
            l = t.isItemAtIndexDisabled;
        return clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout((function () {
            c(e)
        }), r.numbers.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + i, -1 === (n = 1 === e.typeaheadBuffer.length ? function (t, e, n, i) {
            var r = i.typeaheadBuffer[0],
                o = t.get(r);
            if (!o) return -1;
            if (r === i.currentFirstChar && o[i.sortedIndexCursor].index === e) {
                i.sortedIndexCursor = (i.sortedIndexCursor + 1) % o.length;
                var a = o[i.sortedIndexCursor].index;
                if (!n(a)) return a
            }
            i.currentFirstChar = r;
            var s, c = -1;
            for (s = 0; s < o.length; s++)
                if (!n(o[s].index)) {
                    c = s;
                    break
                } for (; s < o.length; s++)
                if (o[s].index > e && !n(o[s].index)) {
                    c = s;
                    break
                } return -1 === c ? -1 : (i.sortedIndexCursor = c, o[i.sortedIndexCursor].index)
        }(a, s, l, e) : function (t, e, n) {
            var i = n.typeaheadBuffer[0],
                r = t.get(i);
            if (!r) return -1;
            var o = r[n.sortedIndexCursor];
            if (0 === o.text.lastIndexOf(n.typeaheadBuffer, 0) && !e(o.index)) return o.index;
            for (var a = (n.sortedIndexCursor + 1) % r.length, s = -1; a !== n.sortedIndexCursor;) {
                var c = r[a],
                    u = 0 === c.text.lastIndexOf(n.typeaheadBuffer, 0),
                    l = !e(c.index);
                if (u && l) {
                    s = a;
                    break
                }
                a = (a + 1) % r.length
            }
            return -1 === s ? -1 : (n.sortedIndexCursor = s, r[n.sortedIndexCursor].index)
        }(a, l, e)) || u || o(n), n
    }

    function s(t) {
        return 0 < t.typeaheadBuffer.length
    }

    function c(t) {
        t.typeaheadBuffer = ""
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCMenuSurface = void 0;
    var i = n(0),
        r = n(2),
        o = n(7),
        a = n(24),
        s = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        }(n(121)),
        c = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialSyncWithDOM = function () {
                var t = this,
                    e = this.root.parentElement;
                this.anchorElement = e && e.classList.contains(o.cssClasses.ANCHOR) ? e : null, this.root.classList.contains(o.cssClasses.FIXED) && this.setFixedPosition(!0), this.handleKeydown = function (e) {
                    t.foundation.handleKeydown(e)
                }, this.handleBodyClick = function (e) {
                    t.foundation.handleBodyClick(e)
                }, this.registerBodyClickListener = function () {
                    document.body.addEventListener("click", t.handleBodyClick, {
                        capture: !0
                    })
                }, this.deregisterBodyClickListener = function () {
                    document.body.removeEventListener("click", t.handleBodyClick)
                }, this.listen("keydown", this.handleKeydown), this.listen(o.strings.OPENED_EVENT, this.registerBodyClickListener), this.listen(o.strings.CLOSED_EVENT, this.deregisterBodyClickListener)
            }, e.prototype.destroy = function () {
                this.unlisten("keydown", this.handleKeydown), this.unlisten(o.strings.OPENED_EVENT, this.registerBodyClickListener), this.unlisten(o.strings.CLOSED_EVENT, this.deregisterBodyClickListener), t.prototype.destroy.call(this)
            }, e.prototype.isOpen = function () {
                return this.foundation.isOpen()
            }, e.prototype.open = function () {
                this.foundation.open()
            }, e.prototype.close = function (t) {
                void 0 === t && (t = !1), this.foundation.close(t)
            }, Object.defineProperty(e.prototype, "quickOpen", {
                set: function (t) {
                    this.foundation.setQuickOpen(t)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.setIsHoisted = function (t) {
                this.foundation.setIsHoisted(t)
            }, e.prototype.setMenuSurfaceAnchorElement = function (t) {
                this.anchorElement = t
            }, e.prototype.setFixedPosition = function (t) {
                t ? this.root.classList.add(o.cssClasses.FIXED) : this.root.classList.remove(o.cssClasses.FIXED), this.foundation.setFixedPosition(t)
            }, e.prototype.setAbsolutePosition = function (t, e) {
                this.foundation.setAbsolutePosition(t, e), this.setIsHoisted(!0)
            }, e.prototype.setAnchorCorner = function (t) {
                this.foundation.setAnchorCorner(t)
            }, e.prototype.setAnchorMargin = function (t) {
                this.foundation.setAnchorMargin(t)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        hasClass: function (e) {
                            return t.root.classList.contains(e)
                        },
                        hasAnchor: function () {
                            return !!t.anchorElement
                        },
                        notifyClose: function () {
                            return t.emit(a.MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {})
                        },
                        notifyOpen: function () {
                            return t.emit(a.MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {})
                        },
                        isElementInContainer: function (e) {
                            return t.root.contains(e)
                        },
                        isRtl: function () {
                            return "rtl" === getComputedStyle(t.root).getPropertyValue("direction")
                        },
                        setTransformOrigin: function (e) {
                            var n = s.getTransformPropertyName(window) + "-origin";
                            t.root.style.setProperty(n, e)
                        },
                        isFocused: function () {
                            return document.activeElement === t.root
                        },
                        saveFocus: function () {
                            t.previousFocus = document.activeElement
                        },
                        restoreFocus: function () {
                            t.root.contains(document.activeElement) && t.previousFocus && t.previousFocus.focus && t.previousFocus.focus()
                        },
                        getInnerDimensions: function () {
                            return {
                                width: t.root.offsetWidth,
                                height: t.root.offsetHeight
                            }
                        },
                        getAnchorDimensions: function () {
                            return t.anchorElement ? t.anchorElement.getBoundingClientRect() : null
                        },
                        getWindowDimensions: function () {
                            return {
                                width: window.innerWidth,
                                height: window.innerHeight
                            }
                        },
                        getBodyDimensions: function () {
                            return {
                                width: document.body.clientWidth,
                                height: document.body.clientHeight
                            }
                        },
                        getWindowScroll: function () {
                            return {
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            }
                        },
                        setPosition: function (e) {
                            var n = t.root;
                            n.style.left = "left" in e ? e.left + "px" : "", n.style.right = "right" in e ? e.right + "px" : "", n.style.top = "top" in e ? e.top + "px" : "", n.style.bottom = "bottom" in e ? e.bottom + "px" : ""
                        },
                        setMaxHeight: function (e) {
                            t.root.style.maxHeight = e
                        }
                    };
                return new a.MDCMenuSurfaceFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCMenuSurface = c
}, function (t, e, n) {
    "use strict";
    var i;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getTransformPropertyName = function (t, e) {
        if (void 0 === e && (e = !1), void 0 === i || e) {
            var n = t.document.createElement("div");
            i = "transform" in n.style ? "transform" : "webkitTransform"
        }
        return i
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(63);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(64);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(65);
    Object.defineProperty(e, "helperTextCssClasses", {
        enumerable: !0,
        get: function () {
            return o.cssClasses
        }
    }), Object.defineProperty(e, "helperTextStrings", {
        enumerable: !0,
        get: function () {
            return o.strings
        }
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(66);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(67);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(68);
    Object.defineProperty(e, "iconStrings", {
        enumerable: !0,
        get: function () {
            return o.strings
        }
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(7);
    Object.defineProperty(e, "Corner", {
        enumerable: !0,
        get: function () {
            return i.Corner
        }
    });
    var r = n(60);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(13);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }));
    var a = n(62);
    Object.keys(a).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return a[t]
            }
        })
    }))
}, function (t, e, n) {
    "use strict";
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(127);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(27);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(70);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }))
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCSlider = void 0;
    var i = n(0),
        r = n(2),
        o = n(6),
        a = n(27),
        s = n(70),
        c = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this.foundation.getValue()
                },
                set: function (t) {
                    this.foundation.setValue(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "min", {
                get: function () {
                    return this.foundation.getMin()
                },
                set: function (t) {
                    this.foundation.setMin(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "max", {
                get: function () {
                    return this.foundation.getMax()
                },
                set: function (t) {
                    this.foundation.setMax(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "step", {
                get: function () {
                    return this.foundation.getStep()
                },
                set: function (t) {
                    this.foundation.setStep(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "disabled", {
                get: function () {
                    return this.foundation.isDisabled()
                },
                set: function (t) {
                    this.foundation.setDisabled(t)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this.thumbContainer_ = this.root.querySelector(a.strings.THUMB_CONTAINER_SELECTOR), this.track_ = this.root.querySelector(a.strings.TRACK_SELECTOR), this.pinValueMarker_ = this.root.querySelector(a.strings.PIN_VALUE_MARKER_SELECTOR), this.trackMarkerContainer_ = this.root.querySelector(a.strings.TRACK_MARKER_CONTAINER_SELECTOR)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        hasClass: function (e) {
                            return t.root.classList.contains(e)
                        },
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        getAttribute: function (e) {
                            return t.root.getAttribute(e)
                        },
                        setAttribute: function (e, n) {
                            return t.root.setAttribute(e, n)
                        },
                        removeAttribute: function (e) {
                            return t.root.removeAttribute(e)
                        },
                        computeBoundingRect: function () {
                            return t.root.getBoundingClientRect()
                        },
                        getTabIndex: function () {
                            return t.root.tabIndex
                        },
                        registerInteractionHandler: function (e, n) {
                            return t.listen(e, n, (0, o.applyPassive)())
                        },
                        deregisterInteractionHandler: function (e, n) {
                            return t.unlisten(e, n, (0, o.applyPassive)())
                        },
                        registerThumbContainerInteractionHandler: function (e, n) {
                            t.thumbContainer_.addEventListener(e, n, (0, o.applyPassive)())
                        },
                        deregisterThumbContainerInteractionHandler: function (e, n) {
                            t.thumbContainer_.removeEventListener(e, n, (0, o.applyPassive)())
                        },
                        registerBodyInteractionHandler: function (t, e) {
                            return document.body.addEventListener(t, e)
                        },
                        deregisterBodyInteractionHandler: function (t, e) {
                            return document.body.removeEventListener(t, e)
                        },
                        registerResizeHandler: function (t) {
                            return window.addEventListener("resize", t)
                        },
                        deregisterResizeHandler: function (t) {
                            return window.removeEventListener("resize", t)
                        },
                        notifyInput: function () {
                            return t.emit(a.strings.INPUT_EVENT, t)
                        },
                        notifyChange: function () {
                            return t.emit(a.strings.CHANGE_EVENT, t)
                        },
                        setThumbContainerStyleProperty: function (e, n) {
                            t.thumbContainer_.style.setProperty(e, n)
                        },
                        setTrackStyleProperty: function (e, n) {
                            return t.track_.style.setProperty(e, n)
                        },
                        setMarkerValue: function (e) {
                            return t.pinValueMarker_.innerText = e.toLocaleString()
                        },
                        setTrackMarkers: function (e, n, i) {
                            var r = e.toLocaleString(),
                                o = "linear-gradient(to right, currentColor 2px, transparent 0) 0 center / calc((100% - 2px) / ((" + n.toLocaleString() + " - " + i.toLocaleString() + ") / " + r + ")) 100% repeat-x";
                            t.trackMarkerContainer_.style.setProperty("background", o)
                        },
                        isRTL: function () {
                            return "rtl" === getComputedStyle(t.root).direction
                        }
                    };
                return new s.MDCSliderFoundation(e)
            }, e.prototype.initialSyncWithDOM = function () {
                var t = this.parseFloat_(this.root.getAttribute(a.strings.ARIA_VALUENOW), this.value),
                    e = this.parseFloat_(this.root.getAttribute(a.strings.ARIA_VALUEMIN), this.min),
                    n = this.parseFloat_(this.root.getAttribute(a.strings.ARIA_VALUEMAX), this.max);
                e >= this.max ? (this.max = n, this.min = e) : (this.min = e, this.max = n), this.step = this.parseFloat_(this.root.getAttribute(a.strings.STEP_DATA_ATTR), this.step), this.value = t, this.disabled = this.root.hasAttribute(a.strings.ARIA_DISABLED) && "false" !== this.root.getAttribute(a.strings.ARIA_DISABLED), this.foundation.setupTrackMarker()
            }, e.prototype.layout = function () {
                this.foundation.layout()
            }, e.prototype.stepUp = function (t) {
                void 0 === t && (t = this.step || 1), this.value += t
            }, e.prototype.stepDown = function (t) {
                void 0 === t && (t = this.step || 1), this.value -= t
            }, e.prototype.parseFloat_ = function (t, e) {
                var n = parseFloat(t);
                return "number" == typeof n && isFinite(n) ? n : e
            }, e
        }(r.MDCComponent);
    e.MDCSlider = c
}, function (t, e, n) {
    "use strict";
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(130);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(72);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(71);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }))
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCSwitch = void 0;
    var i = n(0),
        r = n(2),
        o = n(6),
        a = n(4),
        s = n(3),
        c = n(5),
        u = n(71),
        l = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ripple_ = e.createRipple_(), e
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.destroy = function () {
                t.prototype.destroy.call(this), this.ripple_.destroy(), this.nativeControl_.removeEventListener("change", this.changeHandler_)
            }, e.prototype.initialSyncWithDOM = function () {
                var t = this;
                this.changeHandler_ = function () {
                    for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    return (e = t.foundation).handleChange.apply(e, (0, i.__spread)(n))
                }, this.nativeControl_.addEventListener("change", this.changeHandler_), this.checked = this.checked
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        setNativeControlChecked: function (e) {
                            return t.nativeControl_.checked = e
                        },
                        setNativeControlDisabled: function (e) {
                            return t.nativeControl_.disabled = e
                        },
                        setNativeControlAttr: function (e, n) {
                            return t.nativeControl_.setAttribute(e, n)
                        }
                    };
                return new u.MDCSwitchFoundation(e)
            }, Object.defineProperty(e.prototype, "ripple", {
                get: function () {
                    return this.ripple_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "checked", {
                get: function () {
                    return this.nativeControl_.checked
                },
                set: function (t) {
                    this.foundation.setChecked(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "disabled", {
                get: function () {
                    return this.nativeControl_.disabled
                },
                set: function (t) {
                    this.foundation.setDisabled(t)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.createRipple_ = function () {
                var t = this,
                    e = u.MDCSwitchFoundation.strings.RIPPLE_SURFACE_SELECTOR,
                    n = this.root.querySelector(e),
                    r = (0, i.__assign)((0, i.__assign)({}, s.MDCRipple.createAdapter(this)), {
                        addClass: function (t) {
                            return n.classList.add(t)
                        },
                        computeBoundingRect: function () {
                            return n.getBoundingClientRect()
                        },
                        deregisterInteractionHandler: function (e, n) {
                            t.nativeControl_.removeEventListener(e, n, (0, o.applyPassive)())
                        },
                        isSurfaceActive: function () {
                            return (0, a.matches)(t.nativeControl_, ":active")
                        },
                        isUnbounded: function () {
                            return !0
                        },
                        registerInteractionHandler: function (e, n) {
                            t.nativeControl_.addEventListener(e, n, (0, o.applyPassive)())
                        },
                        removeClass: function (t) {
                            n.classList.remove(t)
                        },
                        updateCssVariable: function (t, e) {
                            n.style.setProperty(t, e)
                        }
                    });
                return new s.MDCRipple(this.root, new c.MDCRippleFoundation(r))
            }, Object.defineProperty(e.prototype, "nativeControl_", {
                get: function () {
                    var t = u.MDCSwitchFoundation.strings.NATIVE_CONTROL_SELECTOR;
                    return this.root.querySelector(t)
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(r.MDCComponent);
    e.MDCSwitch = l
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.init = function (t) { }
}, function (t, e, n) {
    "use strict";
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(134);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(135);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(136);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }))
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(73);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(74);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(14);
    Object.defineProperty(e, "trailingActionStrings", {
        enumerable: !0,
        get: function () {
            return o.strings
        }
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(75);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(28);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(15);
    Object.defineProperty(e, "chipCssClasses", {
        enumerable: !0,
        get: function () {
            return o.cssClasses
        }
    }), Object.defineProperty(e, "chipStrings", {
        enumerable: !0,
        get: function () {
            return o.strings
        }
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(137);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(29);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(76);
    Object.defineProperty(e, "chipSetCssClasses", {
        enumerable: !0,
        get: function () {
            return o.cssClasses
        }
    }), Object.defineProperty(e, "chipSetStrings", {
        enumerable: !0,
        get: function () {
            return o.strings
        }
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCChipSet = void 0;
    var i = n(0),
        r = n(2),
        o = n(138),
        a = n(75),
        s = n(28),
        c = n(29),
        u = s.MDCChipFoundation.strings,
        l = u.INTERACTION_EVENT,
        d = u.SELECTION_EVENT,
        f = u.REMOVAL_EVENT,
        p = u.NAVIGATION_EVENT,
        h = c.MDCChipSetFoundation.strings.CHIP_SELECTOR,
        _ = 0,
        m = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "chips", {
                get: function () {
                    return this.chips_.slice()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "selectedChipIds", {
                get: function () {
                    return this.foundation.getSelectedChipIds()
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                void 0 === t && (t = function (t) {
                    return new a.MDCChip(t)
                }), this.chipFactory_ = t, this.chips_ = this.instantiateChips_(this.chipFactory_)
            }, e.prototype.initialSyncWithDOM = function () {
                var t = this;
                this.chips_.forEach((function (e) {
                    e.id && e.selected && t.foundation.select(e.id)
                })), this.handleChipInteraction_ = function (e) {
                    return t.foundation.handleChipInteraction(e.detail)
                }, this.handleChipSelection_ = function (e) {
                    return t.foundation.handleChipSelection(e.detail)
                }, this.handleChipRemoval_ = function (e) {
                    return t.foundation.handleChipRemoval(e.detail)
                }, this.handleChipNavigation_ = function (e) {
                    return t.foundation.handleChipNavigation(e.detail)
                }, this.listen(l, this.handleChipInteraction_), this.listen(d, this.handleChipSelection_), this.listen(f, this.handleChipRemoval_), this.listen(p, this.handleChipNavigation_)
            }, e.prototype.destroy = function () {
                this.chips_.forEach((function (t) {
                    t.destroy()
                })), this.unlisten(l, this.handleChipInteraction_), this.unlisten(d, this.handleChipSelection_), this.unlisten(f, this.handleChipRemoval_), this.unlisten(p, this.handleChipNavigation_), t.prototype.destroy.call(this)
            }, e.prototype.addChip = function (t) {
                t.id = t.id || "ftt-blazor-chip-" + ++_, this.chips_.push(this.chipFactory_(t))
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        announceMessage: function (t) {
                            (0, o.announce)(t)
                        },
                        focusChipPrimaryActionAtIndex: function (e) {
                            t.chips_[e].focusPrimaryAction()
                        },
                        focusChipTrailingActionAtIndex: function (e) {
                            t.chips_[e].focusTrailingAction()
                        },
                        getChipListCount: function () {
                            return t.chips_.length
                        },
                        getIndexOfChipById: function (e) {
                            return t.findChipIndex_(e)
                        },
                        hasClass: function (e) {
                            return t.root.classList.contains(e)
                        },
                        isRTL: function () {
                            return "rtl" === window.getComputedStyle(t.root).getPropertyValue("direction")
                        },
                        removeChipAtIndex: function (e) {
                            0 <= e && e < t.chips_.length && (t.chips_[e].destroy(), t.chips_[e].remove(), t.chips_.splice(e, 1))
                        },
                        removeFocusFromChipAtIndex: function (e) {
                            t.chips_[e].removeFocus()
                        },
                        selectChipAtIndex: function (e, n, i) {
                            0 <= e && e < t.chips_.length && t.chips_[e].setSelectedFromChipSet(n, i)
                        }
                    };
                return new c.MDCChipSetFoundation(e)
            }, e.prototype.instantiateChips_ = function (t) {
                return [].slice.call(this.root.querySelectorAll(h)).map((function (e) {
                    return e.id = e.id || "ftt-blazor-chip-" + ++_, t(e)
                }))
            }, e.prototype.findChipIndex_ = function (t) {
                for (var e = 0; e < this.chips_.length; e++)
                    if (this.chips_[e].id === t) return e;
                return -1
            }, e
        }(r.MDCComponent);
    e.MDCChipSet = m
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.announce = function (t, e) {
        r.getInstance().say(t, e)
    };
    var i = e.AnnouncerPriority = void 0;
    ! function (t) {
        t.POLITE = "polite", t.ASSERTIVE = "assertive"
    }(i || (e.AnnouncerPriority = i = {}));
    var r = function () {
        function t() {
            this.liveRegions = new Map
        }
        return t.getInstance = function () {
            return t.instance || (t.instance = new t), t.instance
        }, t.prototype.say = function (t, e) {
            void 0 === e && (e = i.POLITE);
            var n = this.getLiveRegion(e);

            function r() {
                n.textContent = "", document.removeEventListener("click", r)
            }
            n.textContent = "", setTimeout((function () {
                n.textContent = t, document.addEventListener("click", r)
            }), 1)
        }, t.prototype.getLiveRegion = function (t) {
            var e = this.liveRegions.get(t);
            if (e && document.body.contains(e)) return e;
            var n = this.createLiveRegion(t);
            return this.liveRegions.set(t, n), n
        }, t.prototype.createLiveRegion = function (t) {
            var e = document.createElement("div");
            return e.style.position = "absolute", e.style.top = "-9999px", e.style.left = "-9999px", e.style.height = "1px", e.style.overflow = "hidden", e.setAttribute("aria-atomic", "true"), e.setAttribute("aria-live", t), document.body.appendChild(e), e
        }, t
    }()
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.init = function (t, e) {
        t.FTTBlazorRef = new i.MDCChipSetFoundation(t)
    };
    var i = n(29)
}, function (t, e, n) {
    "use strict";
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(142);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(8);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(31);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }));
    var a = n(77);
    Object.keys(a).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return a[t]
            }
        })
    }));
    var s = n(78);
    Object.keys(s).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return s[t]
            }
        })
    }));
    var c = n(30);
    Object.keys(c).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return c[t]
            }
        })
    }))
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCTopAppBar = void 0;
    var i = n(0),
        r = n(2),
        o = n(3),
        a = n(8),
        s = n(77),
        c = n(78),
        u = n(30),
        l = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialize = function (t) {
                void 0 === t && (t = function (t) {
                    return o.MDCRipple.attachTo(t)
                }), this.navIcon_ = this.root.querySelector(a.strings.NAVIGATION_ICON_SELECTOR);
                var e = [].slice.call(this.root.querySelectorAll(a.strings.ACTION_ITEM_SELECTOR));
                this.navIcon_ && e.push(this.navIcon_), this.iconRipples_ = e.map((function (e) {
                    var n = t(e);
                    return n.unbounded = !0, n
                })), this.scrollTarget_ = window
            }, e.prototype.initialSyncWithDOM = function () {
                this.handleNavigationClick_ = this.foundation.handleNavigationClick.bind(this.foundation), this.handleWindowResize_ = this.foundation.handleWindowResize.bind(this.foundation), this.handleTargetScroll_ = this.foundation.handleTargetScroll.bind(this.foundation), this.scrollTarget_.addEventListener("scroll", this.handleTargetScroll_), this.navIcon_ && this.navIcon_.addEventListener("click", this.handleNavigationClick_);
                var t = this.root.classList.contains(a.cssClasses.FIXED_CLASS);
                this.root.classList.contains(a.cssClasses.SHORT_CLASS) || t || window.addEventListener("resize", this.handleWindowResize_)
            }, e.prototype.destroy = function () {
                this.iconRipples_.forEach((function (t) {
                    return t.destroy()
                })), this.scrollTarget_.removeEventListener("scroll", this.handleTargetScroll_), this.navIcon_ && this.navIcon_.removeEventListener("click", this.handleNavigationClick_);
                var e = this.root.classList.contains(a.cssClasses.FIXED_CLASS);
                this.root.classList.contains(a.cssClasses.SHORT_CLASS) || e || window.removeEventListener("resize", this.handleWindowResize_), t.prototype.destroy.call(this)
            }, e.prototype.setScrollTarget = function (t) {
                this.scrollTarget_.removeEventListener("scroll", this.handleTargetScroll_), this.scrollTarget_ = t, this.handleTargetScroll_ = this.foundation.handleTargetScroll.bind(this.foundation), this.scrollTarget_.addEventListener("scroll", this.handleTargetScroll_)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        hasClass: function (e) {
                            return t.root.classList.contains(e)
                        },
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        setStyle: function (e, n) {
                            return t.root.style.setProperty(e, n)
                        },
                        getTopAppBarHeight: function () {
                            return t.root.clientHeight
                        },
                        notifyNavigationIconClicked: function () {
                            return t.emit(a.strings.NAVIGATION_EVENT, {})
                        },
                        getViewportScrollY: function () {
                            var e = t.scrollTarget_,
                                n = t.scrollTarget_;
                            return void 0 !== e.pageYOffset ? e.pageYOffset : n.scrollTop
                        },
                        getTotalActionItems: function () {
                            return t.root.querySelectorAll(a.strings.ACTION_ITEM_SELECTOR).length
                        }
                    };
                return this.root.classList.contains(a.cssClasses.SHORT_CLASS) ? new c.MDCShortTopAppBarFoundation(e) : this.root.classList.contains(a.cssClasses.FIXED_CLASS) ? new s.MDCFixedTopAppBarFoundation(e) : new u.MDCTopAppBarFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCTopAppBar = l
}, function (t, e, n) {
    "use strict";
}, function (t, e, n) {
    "use strict";
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(23);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(10);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(11);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }))
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.init = function (t, e) {
        t.FTTBlazorRef = new i.MDCDrawer(t), t.addEventListener("MDCDrawer:closed", (function () {
            e.invokeMethodAsync("ClosedHandler")
        }))
    }, e.setOpened = function (t, e) {
        t.FTTBlazorRef.open = e
    };
    var i = n(147)
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.util = void 0;
    var i = n(148);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(80);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(32);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }));
    var a = n(81);
    Object.keys(a).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return a[t]
            }
        })
    }));
    var s = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }(n(82));
    e.util = s
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCDrawer = void 0;
    var i = n(0),
        r = n(2),
        o = n(79),
        a = n(23),
        s = n(11),
        c = n(32),
        u = n(81),
        l = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        }(n(82)),
        d = c.MDCDismissibleDrawerFoundation.cssClasses,
        f = c.MDCDismissibleDrawerFoundation.strings,
        p = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "open", {
                get: function () {
                    return this.foundation.isOpen()
                },
                set: function (t) {
                    t ? this.foundation.open() : this.foundation.close()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "list", {
                get: function () {
                    return this.list_
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e) {
                void 0 === t && (t = function (t) {
                    return new o.FocusTrap(t)
                }), void 0 === e && (e = function (t) {
                    return new a.MDCList(t)
                });
                var n = this.root.querySelector("." + s.MDCListFoundation.cssClasses.ROOT);
                n && (this.list_ = e(n), this.list_.wrapFocus = !0), this.focusTrapFactory_ = t
            }, e.prototype.initialSyncWithDOM = function () {
                var t = this,
                    e = d.MODAL,
                    n = f.SCRIM_SELECTOR;
                this.scrim_ = this.root.parentNode.querySelector(n), this.scrim_ && this.root.classList.contains(e) && (this.handleScrimClick_ = function () {
                    return t.foundation.handleScrimClick()
                }, this.scrim_.addEventListener("click", this.handleScrimClick_), this.focusTrap_ = l.createFocusTrapInstance(this.root, this.focusTrapFactory_)), this.handleKeydown_ = function (e) {
                    return t.foundation.handleKeydown(e)
                }, this.handleTransitionEnd_ = function (e) {
                    return t.foundation.handleTransitionEnd(e)
                }, this.listen("keydown", this.handleKeydown_), this.listen("transitionend", this.handleTransitionEnd_)
            }, e.prototype.destroy = function () {
                this.unlisten("keydown", this.handleKeydown_), this.unlisten("transitionend", this.handleTransitionEnd_), this.list_ && this.list_.destroy();
                var t = d.MODAL;
                this.scrim_ && this.handleScrimClick_ && this.root.classList.contains(t) && (this.scrim_.removeEventListener("click", this.handleScrimClick_), this.open = !1)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        hasClass: function (e) {
                            return t.root.classList.contains(e)
                        },
                        elementHasClass: function (t, e) {
                            return t.classList.contains(e)
                        },
                        saveFocus: function () {
                            return t.previousFocus_ = document.activeElement
                        },
                        restoreFocus: function () {
                            var e = t.previousFocus_;
                            e && e.focus && t.root.contains(document.activeElement) && e.focus()
                        },
                        focusActiveNavigationItem: function () {
                            var e = t.root.querySelector("." + s.MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS);
                            e && e.focus()
                        },
                        notifyClose: function () {
                            return t.emit(f.CLOSE_EVENT, {}, !0)
                        },
                        notifyOpen: function () {
                            return t.emit(f.OPEN_EVENT, {}, !0)
                        },
                        trapFocus: function () {
                            return t.focusTrap_.trapFocus()
                        },
                        releaseFocus: function () {
                            return t.focusTrap_.releaseFocus()
                        }
                    },
                    n = d.DISMISSIBLE,
                    i = d.MODAL;
                if (this.root.classList.contains(n)) return new c.MDCDismissibleDrawerFoundation(e);
                if (this.root.classList.contains(i)) return new u.MDCModalDrawerFoundation(e);
                throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + n + " and " + i + ".")
            }, e
        }(r.MDCComponent);
    e.MDCDrawer = p
}, function (t, e, n) { }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.init = function () { }
}, function (t, e, n) { }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.init = function (t) {
        t.FTTBlazorRef = new i.MDCLinearProgress(t)
    }, e.setProgress = function (t, e) {
        t.FTTBlazorRef.progress = e
    }, e.setBuffer = function (t, e) {
        t.FTTBlazorRef.buffer = e
    };
    var i = n(153)
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCLinearProgress = void 0;
    var i = n(0),
        r = n(2),
        o = n(154),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "determinate", {
                set: function (t) {
                    this.foundation.setDeterminate(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "progress", {
                set: function (t) {
                    this.foundation.setProgress(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "buffer", {
                set: function (t) {
                    this.foundation.setBuffer(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "reverse", {
                set: function (t) {
                    this.foundation.setReverse(t)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.open = function () {
                this.foundation.open()
            }, e.prototype.close = function () {
                this.foundation.close()
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClass: function (e) {
                            t.root.classList.add(e)
                        },
                        forceLayout: function () {
                            t.root.getBoundingClientRect()
                        },
                        setBufferBarStyle: function (e, n) {
                            var i = t.root.querySelector(o.MDCLinearProgressFoundation.strings.BUFFER_BAR_SELECTOR);
                            i && i.style.setProperty(e, n)
                        },
                        setPrimaryBarStyle: function (e, n) {
                            var i = t.root.querySelector(o.MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR);
                            i && i.style.setProperty(e, n)
                        },
                        hasClass: function (e) {
                            return t.root.classList.contains(e)
                        },
                        removeAttribute: function (e) {
                            t.root.removeAttribute(e)
                        },
                        removeClass: function (e) {
                            t.root.classList.remove(e)
                        },
                        setAttribute: function (e, n) {
                            t.root.setAttribute(e, n)
                        }
                    };
                return new o.MDCLinearProgressFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCLinearProgress = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCLinearProgressFoundation = void 0;
    var i = n(0),
        r = n(18),
        o = n(1),
        a = n(155),
        s = function (t) {
            function e(n) {
                return t.call(this, (0, i.__assign)((0, i.__assign)({}, e.defaultAdapter), n)) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return a.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return a.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () { },
                        forceLayout: function () { },
                        setBufferBarStyle: function () {
                            return null
                        },
                        setPrimaryBarStyle: function () {
                            return null
                        },
                        hasClass: function () {
                            return !1
                        },
                        removeAttribute: function () { },
                        removeClass: function () { },
                        setAttribute: function () { }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                this.isDeterminate = !this.adapter.hasClass(a.cssClasses.INDETERMINATE_CLASS), this.isReversed = this.adapter.hasClass(a.cssClasses.REVERSED_CLASS), this.progress = 0, this.buffer = 1
            }, e.prototype.setDeterminate = function (t) {
                if (this.isDeterminate = t, this.isDeterminate) return this.adapter.removeClass(a.cssClasses.INDETERMINATE_CLASS), this.adapter.setAttribute(a.strings.ARIA_VALUENOW, this.progress.toString()), this.setPrimaryBarProgress(this.progress), void this.setBufferBarProgress(this.buffer);
                this.isReversed && (this.adapter.removeClass(a.cssClasses.REVERSED_CLASS), this.adapter.forceLayout(), this.adapter.addClass(a.cssClasses.REVERSED_CLASS)), this.adapter.addClass(a.cssClasses.INDETERMINATE_CLASS), this.adapter.removeAttribute(a.strings.ARIA_VALUENOW), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1)
            }, e.prototype.getDeterminate = function () {
                return this.isDeterminate
            }, e.prototype.setProgress = function (t) {
                this.progress = t, this.isDeterminate && (this.setPrimaryBarProgress(t), this.adapter.setAttribute(a.strings.ARIA_VALUENOW, t.toString()))
            }, e.prototype.getProgress = function () {
                return this.progress
            }, e.prototype.setBuffer = function (t) {
                this.buffer = t, this.isDeterminate && this.setBufferBarProgress(t)
            }, e.prototype.setReverse = function (t) {
                this.isReversed = t, this.isDeterminate || (this.adapter.removeClass(a.cssClasses.INDETERMINATE_CLASS), this.adapter.forceLayout(), this.adapter.addClass(a.cssClasses.INDETERMINATE_CLASS)), this.isReversed ? this.adapter.addClass(a.cssClasses.REVERSED_CLASS) : this.adapter.removeClass(a.cssClasses.REVERSED_CLASS)
            }, e.prototype.open = function () {
                this.adapter.removeClass(a.cssClasses.CLOSED_CLASS)
            }, e.prototype.close = function () {
                this.adapter.addClass(a.cssClasses.CLOSED_CLASS)
            }, e.prototype.setPrimaryBarProgress = function (t) {
                var e = "scaleX(" + t + ")",
                    n = "undefined" != typeof window ? (0, r.getCorrectPropertyName)(window, "transform") : "transform";
                this.adapter.setPrimaryBarStyle(n, e)
            }, e.prototype.setBufferBarProgress = function (t) {
                var e = 100 * t + "%";
                this.adapter.setBufferBarStyle(a.strings.FLEX_BASIS, e)
            }, e
        }(o.MDCFoundation);
    e.MDCLinearProgressFoundation = s, e.default = s
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssClasses = {
        CLOSED_CLASS: "ftt-blazor-linear-progress--closed",
        INDETERMINATE_CLASS: "ftt-blazor-linear-progress--indeterminate",
        REVERSED_CLASS: "ftt-blazor-linear-progress--reversed"
    }, e.strings = {
        ARIA_VALUENOW: "aria-valuenow",
        BUFFER_BAR_SELECTOR: ".ftt-blazor-linear-progress__buffer-bar",
        FLEX_BASIS: "flex-basis",
        PRIMARY_BAR_SELECTOR: ".ftt-blazor-linear-progress__primary-bar"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.init = function (t) {
        t.FTTBlazorRef = new i.MDCCircularProgress(t)
    }, e.setProgress = function (t, e) {
        t.FTTBlazorRef.progress = e
    };
    var i = n(157)
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(158);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(84);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(83);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }))
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCCircularProgress = void 0;
    var i = n(0),
        r = n(2),
        o = n(83),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), e.prototype.initialize = function () {
                this.determinateCircle_ = this.root.querySelector(o.MDCCircularProgressFoundation.strings.DETERMINATE_CIRCLE_SELECTOR)
            }, e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "determinate", {
                set: function (t) {
                    this.foundation.setDeterminate(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "progress", {
                set: function (t) {
                    this.foundation.setProgress(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isClosed", {
                get: function () {
                    return this.foundation.isClosed()
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.open = function () {
                this.foundation.open()
            }, e.prototype.close = function () {
                this.foundation.close()
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        getDeterminateCircleAttribute: function (e) {
                            return t.determinateCircle_.getAttribute(e)
                        },
                        hasClass: function (e) {
                            return t.root.classList.contains(e)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        removeAttribute: function (e) {
                            return t.root.removeAttribute(e)
                        },
                        setAttribute: function (e, n) {
                            return t.root.setAttribute(e, n)
                        },
                        setDeterminateCircleAttribute: function (e, n) {
                            return t.determinateCircle_.setAttribute(e, n)
                        }
                    };
                return new o.MDCCircularProgressFoundation(e)
            }, e
        }(r.MDCComponent);
    e.MDCCircularProgress = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.init = function (t, e) {
        t.FTTBlazorRef = new i.MDCDialog(t), t.addEventListener("MDCDialog:closed", (function () {
            e.invokeMethodAsync("DialogClosedHandler")
        })), t.addEventListener("MDCDialog:opened", (function () {
            e.invokeMethodAsync("DialogOpenedHandler")
        }))
    }, e.setIsOpen = function (t, e) {
        e ? t.FTTBlazorRef.open() : t.FTTBlazorRef.close()
    }, e.setCanBeClosed = function (t, e) {
        e ? (t.FTTBlazorRef.escapeKeyAction = "close", t.FTTBlazorRef.scrimClickAction = "close") : (t.FTTBlazorRef.escapeKeyAction = "", t.FTTBlazorRef.scrimClickAction = "")
    };
    var i = n(160)
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.util = void 0;
    var i = n(161);
    Object.keys(i).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return i[t]
            }
        })
    }));
    var r = n(86);
    Object.keys(r).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return r[t]
            }
        })
    }));
    var o = n(85);
    Object.keys(o).forEach((function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        })
    }));
    var a = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }(n(87));
    e.util = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MDCDialog = void 0;
    var i = n(0),
        r = n(2),
        o = n(79),
        a = n(4),
        s = n(3),
        c = n(85),
        u = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        }(n(87)),
        l = c.MDCDialogFoundation.strings,
        d = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0, i.__extends)(e, t), Object.defineProperty(e.prototype, "isOpen", {
                get: function () {
                    return this.foundation.isOpen()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "escapeKeyAction", {
                get: function () {
                    return this.foundation.getEscapeKeyAction()
                },
                set: function (t) {
                    this.foundation.setEscapeKeyAction(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "scrimClickAction", {
                get: function () {
                    return this.foundation.getScrimClickAction()
                },
                set: function (t) {
                    this.foundation.setScrimClickAction(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "autoStackButtons", {
                get: function () {
                    return this.foundation.getAutoStackButtons()
                },
                set: function (t) {
                    this.foundation.setAutoStackButtons(t)
                },
                enumerable: !0,
                configurable: !0
            }), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialize = function (t) {
                var e, n;
                void 0 === t && (t = function (t, e) {
                    return new o.FocusTrap(t, e)
                });
                var r = this.root.querySelector(l.CONTAINER_SELECTOR);
                if (!r) throw new Error("Dialog component requires a " + l.CONTAINER_SELECTOR + " container element");
                this.container_ = r, this.content_ = this.root.querySelector(l.CONTENT_SELECTOR), this.buttons_ = [].slice.call(this.root.querySelectorAll(l.BUTTON_SELECTOR)), this.defaultButton_ = this.root.querySelector("[" + l.BUTTON_DEFAULT_ATTRIBUTE + "]"), this.focusTrapFactory_ = t, this.buttonRipples_ = [];
                try {
                    for (var a = (0, i.__values)(this.buttons_), c = a.next(); !c.done; c = a.next()) {
                        var u = c.value;
                        this.buttonRipples_.push(new s.MDCRipple(u))
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        c && !c.done && (n = a.return) && n.call(a)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, e.prototype.initialSyncWithDOM = function () {
                var t = this;
                this.focusTrap_ = u.createFocusTrapInstance(this.container_, this.focusTrapFactory_, this.getInitialFocusEl_() || void 0), this.handleClick_ = this.foundation.handleClick.bind(this.foundation), this.handleKeydown_ = this.foundation.handleKeydown.bind(this.foundation), this.handleDocumentKeydown_ = this.foundation.handleDocumentKeydown.bind(this.foundation), this.handleLayout_ = this.layout.bind(this);
                var e = ["resize", "orientationchange"];
                this.handleOpening_ = function () {
                    e.forEach((function (e) {
                        return window.addEventListener(e, t.handleLayout_)
                    })), document.addEventListener("keydown", t.handleDocumentKeydown_)
                }, this.handleClosing_ = function () {
                    e.forEach((function (e) {
                        return window.removeEventListener(e, t.handleLayout_)
                    })), document.removeEventListener("keydown", t.handleDocumentKeydown_)
                }, this.listen("click", this.handleClick_), this.listen("keydown", this.handleKeydown_), this.listen(l.OPENING_EVENT, this.handleOpening_), this.listen(l.CLOSING_EVENT, this.handleClosing_)
            }, e.prototype.destroy = function () {
                this.unlisten("click", this.handleClick_), this.unlisten("keydown", this.handleKeydown_), this.unlisten(l.OPENING_EVENT, this.handleOpening_), this.unlisten(l.CLOSING_EVENT, this.handleClosing_), this.handleClosing_(), this.buttonRipples_.forEach((function (t) {
                    return t.destroy()
                })), t.prototype.destroy.call(this)
            }, e.prototype.layout = function () {
                this.foundation.layout()
            }, e.prototype.open = function () {
                this.foundation.open()
            }, e.prototype.close = function (t) {
                void 0 === t && (t = ""), this.foundation.close(t)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this,
                    e = {
                        addBodyClass: function (t) {
                            return document.body.classList.add(t)
                        },
                        addClass: function (e) {
                            return t.root.classList.add(e)
                        },
                        areButtonsStacked: function () {
                            return u.areTopsMisaligned(t.buttons_)
                        },
                        clickDefaultButton: function () {
                            return t.defaultButton_ && t.defaultButton_.click()
                        },
                        eventTargetMatches: function (t, e) {
                            return !!t && (0, a.matches)(t, e)
                        },
                        getActionFromEvent: function (t) {
                            if (!t.target) return "";
                            var e = (0, a.closest)(t.target, "[" + l.ACTION_ATTRIBUTE + "]");
                            return e && e.getAttribute(l.ACTION_ATTRIBUTE)
                        },
                        getInitialFocusEl: function () {
                            return t.getInitialFocusEl_()
                        },
                        hasClass: function (e) {
                            return t.root.classList.contains(e)
                        },
                        isContentScrollable: function () {
                            return u.isScrollable(t.content_)
                        },
                        notifyClosed: function (e) {
                            return t.emit(l.CLOSED_EVENT, e ? {
                                action: e
                            } : {})
                        },
                        notifyClosing: function (e) {
                            return t.emit(l.CLOSING_EVENT, e ? {
                                action: e
                            } : {})
                        },
                        notifyOpened: function () {
                            return t.emit(l.OPENED_EVENT, {})
                        },
                        notifyOpening: function () {
                            return t.emit(l.OPENING_EVENT, {})
                        },
                        releaseFocus: function () {
                            return t.focusTrap_.releaseFocus()
                        },
                        removeBodyClass: function (t) {
                            return document.body.classList.remove(t)
                        },
                        removeClass: function (e) {
                            return t.root.classList.remove(e)
                        },
                        reverseButtons: function () {
                            t.buttons_.reverse(), t.buttons_.forEach((function (t) {
                                t.parentElement.appendChild(t)
                            }))
                        },
                        trapFocus: function () {
                            return t.focusTrap_.trapFocus()
                        }
                    };
                return new c.MDCDialogFoundation(e)
            }, e.prototype.getInitialFocusEl_ = function () {
                return document.querySelector("[" + l.INITIAL_FOCUS_ATTRIBUTE + "]")
            }, e
        }(r.MDCComponent);
    e.MDCDialog = d
}, function (t, e, n) { }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.init = function (t, e) {
        t.FTTBlazorRef = new i.MDCSnackbar(t), t.FTTBlazorRef.timeoutMs = -1, t.addEventListener("MDCSnackbar:closed", (function () {
            e.invokeMethodAsync("MatSnackbarClosedHandler")
        }))
    }, e.setIsOpen = function (t, e) {
        e ? t.FTTBlazorRef.open() : t.FTTBlazorRef.close()
    };
    var i = n(164)
}, function (t, e, n) { }]);