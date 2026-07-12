(function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload"))
        return;
    for (const g of document.querySelectorAll('link[rel="modulepreload"]'))
        u(g);
    new MutationObserver(g => {
        for (const y of g)
            if (y.type === "childList")
                for (const E of y.addedNodes)
                    E.tagName === "LINK" && E.rel === "modulepreload" && u(E)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function d(g) {
        const y = {};
        return g.integrity && (y.integrity = g.integrity),
        g.referrerPolicy && (y.referrerPolicy = g.referrerPolicy),
        g.crossOrigin === "use-credentials" ? y.credentials = "include" : g.crossOrigin === "anonymous" ? y.credentials = "omit" : y.credentials = "same-origin",
        y
    }
    function u(g) {
        if (g.ep)
            return;
        g.ep = !0;
        const y = d(g);
        fetch(g.href, y)
    }
}
)();
var wu = {
    exports: {}
}
  , Wr = {};
var b0;
function Qg() {
    if (b0)
        return Wr;
    b0 = 1;
    var s = Symbol.for("react.transitional.element")
      , o = Symbol.for("react.fragment");
    function d(u, g, y) {
        var E = null;
        if (y !== void 0 && (E = "" + y),
        g.key !== void 0 && (E = "" + g.key),
        "key"in g) {
            y = {};
            for (var _ in g)
                _ !== "key" && (y[_] = g[_])
        } else
            y = g;
        return g = y.ref,
        {
            $$typeof: s,
            type: u,
            key: E,
            ref: g !== void 0 ? g : null,
            props: y
        }
    }
    return Wr.Fragment = o,
    Wr.jsx = d,
    Wr.jsxs = d,
    Wr
}
var x0;
function Zg() {
    return x0 || (x0 = 1,
    wu.exports = Qg()),
    wu.exports
}
var r = Zg()
  , Su = {
    exports: {}
}
  , ke = {};
var v0;
function $g() {
    if (v0)
        return ke;
    v0 = 1;
    var s = Symbol.for("react.transitional.element")
      , o = Symbol.for("react.portal")
      , d = Symbol.for("react.fragment")
      , u = Symbol.for("react.strict_mode")
      , g = Symbol.for("react.profiler")
      , y = Symbol.for("react.consumer")
      , E = Symbol.for("react.context")
      , _ = Symbol.for("react.forward_ref")
      , M = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , R = Symbol.for("react.lazy")
      , C = Symbol.for("react.activity")
      , Z = Symbol.iterator;
    function L(N) {
        return N === null || typeof N != "object" ? null : (N = Z && N[Z] || N["@@iterator"],
        typeof N == "function" ? N : null)
    }
    var ae = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , q = Object.assign
      , Se = {};
    function F(N, Y, W) {
        this.props = N,
        this.context = Y,
        this.refs = Se,
        this.updater = W || ae
    }
    F.prototype.isReactComponent = {},
    F.prototype.setState = function(N, Y) {
        if (typeof N != "object" && typeof N != "function" && N != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, N, Y, "setState")
    }
    ,
    F.prototype.forceUpdate = function(N) {
        this.updater.enqueueForceUpdate(this, N, "forceUpdate")
    }
    ;
    function te() {}
    te.prototype = F.prototype;
    function I(N, Y, W) {
        this.props = N,
        this.context = Y,
        this.refs = Se,
        this.updater = W || ae
    }
    var pe = I.prototype = new te;
    pe.constructor = I,
    q(pe, F.prototype),
    pe.isPureReactComponent = !0;
    var ue = Array.isArray;
    function me() {}
    var se = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , Ee = Object.prototype.hasOwnProperty;
    function Xe(N, Y, W) {
        var ce = W.ref;
        return {
            $$typeof: s,
            type: N,
            key: Y,
            ref: ce !== void 0 ? ce : null,
            props: W
        }
    }
    function ze(N, Y) {
        return Xe(N.type, Y, N.props)
    }
    function _e(N) {
        return typeof N == "object" && N !== null && N.$$typeof === s
    }
    function Le(N) {
        var Y = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + N.replace(/[=:]/g, function(W) {
            return Y[W]
        })
    }
    var be = /\/+/g;
    function Ce(N, Y) {
        return typeof N == "object" && N !== null && N.key != null ? Le("" + N.key) : Y.toString(36)
    }
    function $e(N) {
        switch (N.status) {
        case "fulfilled":
            return N.value;
        case "rejected":
            throw N.reason;
        default:
            switch (typeof N.status == "string" ? N.then(me, me) : (N.status = "pending",
            N.then(function(Y) {
                N.status === "pending" && (N.status = "fulfilled",
                N.value = Y)
            }, function(Y) {
                N.status === "pending" && (N.status = "rejected",
                N.reason = Y)
            })),
            N.status) {
            case "fulfilled":
                return N.value;
            case "rejected":
                throw N.reason
            }
        }
        throw N
    }
    function B(N, Y, W, ce, we) {
        var je = typeof N;
        (je === "undefined" || je === "boolean") && (N = null);
        var Fe = !1;
        if (N === null)
            Fe = !0;
        else
            switch (je) {
            case "bigint":
            case "string":
            case "number":
                Fe = !0;
                break;
            case "object":
                switch (N.$$typeof) {
                case s:
                case o:
                    Fe = !0;
                    break;
                case R:
                    return Fe = N._init,
                    B(Fe(N._payload), Y, W, ce, we)
                }
            }
        if (Fe)
            return we = we(N),
            Fe = ce === "" ? "." + Ce(N, 0) : ce,
            ue(we) ? (W = "",
            Fe != null && (W = Fe.replace(be, "$&/") + "/"),
            B(we, Y, W, "", function(zt) {
                return zt
            })) : we != null && (_e(we) && (we = ze(we, W + (we.key == null || N && N.key === we.key ? "" : ("" + we.key).replace(be, "$&/") + "/") + Fe)),
            Y.push(we)),
            1;
        Fe = 0;
        var ht = ce === "" ? "." : ce + ":";
        if (ue(N))
            for (var De = 0; De < N.length; De++)
                ce = N[De],
                je = ht + Ce(ce, De),
                Fe += B(ce, Y, W, je, we);
        else if (De = L(N),
        typeof De == "function")
            for (N = De.call(N),
            De = 0; !(ce = N.next()).done; )
                ce = ce.value,
                je = ht + Ce(ce, De++),
                Fe += B(ce, Y, W, je, we);
        else if (je === "object") {
            if (typeof N.then == "function")
                return B($e(N), Y, W, ce, we);
            throw Y = String(N),
            Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead.")
        }
        return Fe
    }
    function P(N, Y, W) {
        if (N == null)
            return N;
        var ce = []
          , we = 0;
        return B(N, ce, "", "", function(je) {
            return Y.call(W, je, we++)
        }),
        ce
    }
    function fe(N) {
        if (N._status === -1) {
            var Y = N._result;
            Y = Y(),
            Y.then(function(W) {
                (N._status === 0 || N._status === -1) && (N._status = 1,
                N._result = W)
            }, function(W) {
                (N._status === 0 || N._status === -1) && (N._status = 2,
                N._result = W)
            }),
            N._status === -1 && (N._status = 0,
            N._result = Y)
        }
        if (N._status === 1)
            return N._result.default;
        throw N._result
    }
    var Ze = typeof reportError == "function" ? reportError : function(N) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var Y = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof N == "object" && N !== null && typeof N.message == "string" ? String(N.message) : String(N),
                error: N
            });
            if (!window.dispatchEvent(Y))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", N);
            return
        }
        console.error(N)
    }
      , Oe = {
        map: P,
        forEach: function(N, Y, W) {
            P(N, function() {
                Y.apply(this, arguments)
            }, W)
        },
        count: function(N) {
            var Y = 0;
            return P(N, function() {
                Y++
            }),
            Y
        },
        toArray: function(N) {
            return P(N, function(Y) {
                return Y
            }) || []
        },
        only: function(N) {
            if (!_e(N))
                throw Error("React.Children.only expected to receive a single React element child.");
            return N
        }
    };
    return ke.Activity = C,
    ke.Children = Oe,
    ke.Component = F,
    ke.Fragment = d,
    ke.Profiler = g,
    ke.PureComponent = I,
    ke.StrictMode = u,
    ke.Suspense = M,
    ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = se,
    ke.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(N) {
            return se.H.useMemoCache(N)
        }
    },
    ke.cache = function(N) {
        return function() {
            return N.apply(null, arguments)
        }
    }
    ,
    ke.cacheSignal = function() {
        return null
    }
    ,
    ke.cloneElement = function(N, Y, W) {
        if (N == null)
            throw Error("The argument must be a React element, but you passed " + N + ".");
        var ce = q({}, N.props)
          , we = N.key;
        if (Y != null)
            for (je in Y.key !== void 0 && (we = "" + Y.key),
            Y)
                !Ee.call(Y, je) || je === "key" || je === "__self" || je === "__source" || je === "ref" && Y.ref === void 0 || (ce[je] = Y[je]);
        var je = arguments.length - 2;
        if (je === 1)
            ce.children = W;
        else if (1 < je) {
            for (var Fe = Array(je), ht = 0; ht < je; ht++)
                Fe[ht] = arguments[ht + 2];
            ce.children = Fe
        }
        return Xe(N.type, we, ce)
    }
    ,
    ke.createContext = function(N) {
        return N = {
            $$typeof: E,
            _currentValue: N,
            _currentValue2: N,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        N.Provider = N,
        N.Consumer = {
            $$typeof: y,
            _context: N
        },
        N
    }
    ,
    ke.createElement = function(N, Y, W) {
        var ce, we = {}, je = null;
        if (Y != null)
            for (ce in Y.key !== void 0 && (je = "" + Y.key),
            Y)
                Ee.call(Y, ce) && ce !== "key" && ce !== "__self" && ce !== "__source" && (we[ce] = Y[ce]);
        var Fe = arguments.length - 2;
        if (Fe === 1)
            we.children = W;
        else if (1 < Fe) {
            for (var ht = Array(Fe), De = 0; De < Fe; De++)
                ht[De] = arguments[De + 2];
            we.children = ht
        }
        if (N && N.defaultProps)
            for (ce in Fe = N.defaultProps,
            Fe)
                we[ce] === void 0 && (we[ce] = Fe[ce]);
        return Xe(N, je, we)
    }
    ,
    ke.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ke.forwardRef = function(N) {
        return {
            $$typeof: _,
            render: N
        }
    }
    ,
    ke.isValidElement = _e,
    ke.lazy = function(N) {
        return {
            $$typeof: R,
            _payload: {
                _status: -1,
                _result: N
            },
            _init: fe
        }
    }
    ,
    ke.memo = function(N, Y) {
        return {
            $$typeof: p,
            type: N,
            compare: Y === void 0 ? null : Y
        }
    }
    ,
    ke.startTransition = function(N) {
        var Y = se.T
          , W = {};
        se.T = W;
        try {
            var ce = N()
              , we = se.S;
            we !== null && we(W, ce),
            typeof ce == "object" && ce !== null && typeof ce.then == "function" && ce.then(me, Ze)
        } catch (je) {
            Ze(je)
        } finally {
            Y !== null && W.types !== null && (Y.types = W.types),
            se.T = Y
        }
    }
    ,
    ke.unstable_useCacheRefresh = function() {
        return se.H.useCacheRefresh()
    }
    ,
    ke.use = function(N) {
        return se.H.use(N)
    }
    ,
    ke.useActionState = function(N, Y, W) {
        return se.H.useActionState(N, Y, W)
    }
    ,
    ke.useCallback = function(N, Y) {
        return se.H.useCallback(N, Y)
    }
    ,
    ke.useContext = function(N) {
        return se.H.useContext(N)
    }
    ,
    ke.useDebugValue = function() {}
    ,
    ke.useDeferredValue = function(N, Y) {
        return se.H.useDeferredValue(N, Y)
    }
    ,
    ke.useEffect = function(N, Y) {
        return se.H.useEffect(N, Y)
    }
    ,
    ke.useEffectEvent = function(N) {
        return se.H.useEffectEvent(N)
    }
    ,
    ke.useId = function() {
        return se.H.useId()
    }
    ,
    ke.useImperativeHandle = function(N, Y, W) {
        return se.H.useImperativeHandle(N, Y, W)
    }
    ,
    ke.useInsertionEffect = function(N, Y) {
        return se.H.useInsertionEffect(N, Y)
    }
    ,
    ke.useLayoutEffect = function(N, Y) {
        return se.H.useLayoutEffect(N, Y)
    }
    ,
    ke.useMemo = function(N, Y) {
        return se.H.useMemo(N, Y)
    }
    ,
    ke.useOptimistic = function(N, Y) {
        return se.H.useOptimistic(N, Y)
    }
    ,
    ke.useReducer = function(N, Y, W) {
        return se.H.useReducer(N, Y, W)
    }
    ,
    ke.useRef = function(N) {
        return se.H.useRef(N)
    }
    ,
    ke.useState = function(N) {
        return se.H.useState(N)
    }
    ,
    ke.useSyncExternalStore = function(N, Y, W) {
        return se.H.useSyncExternalStore(N, Y, W)
    }
    ,
    ke.useTransition = function() {
        return se.H.useTransition()
    }
    ,
    ke.version = "19.2.3",
    ke
}
var w0;
function qu() {
    return w0 || (w0 = 1,
    Su.exports = $g()),
    Su.exports
}
var b = qu()
  , ju = {
    exports: {}
}
  , Ir = {}
  , Nu = {
    exports: {}
}
  , Au = {};
var S0;
function Kg() {
    return S0 || (S0 = 1,
    (function(s) {
        function o(B, P) {
            var fe = B.length;
            B.push(P);
            e: for (; 0 < fe; ) {
                var Ze = fe - 1 >>> 1
                  , Oe = B[Ze];
                if (0 < g(Oe, P))
                    B[Ze] = P,
                    B[fe] = Oe,
                    fe = Ze;
                else
                    break e
            }
        }
        function d(B) {
            return B.length === 0 ? null : B[0]
        }
        function u(B) {
            if (B.length === 0)
                return null;
            var P = B[0]
              , fe = B.pop();
            if (fe !== P) {
                B[0] = fe;
                e: for (var Ze = 0, Oe = B.length, N = Oe >>> 1; Ze < N; ) {
                    var Y = 2 * (Ze + 1) - 1
                      , W = B[Y]
                      , ce = Y + 1
                      , we = B[ce];
                    if (0 > g(W, fe))
                        ce < Oe && 0 > g(we, W) ? (B[Ze] = we,
                        B[ce] = fe,
                        Ze = ce) : (B[Ze] = W,
                        B[Y] = fe,
                        Ze = Y);
                    else if (ce < Oe && 0 > g(we, fe))
                        B[Ze] = we,
                        B[ce] = fe,
                        Ze = ce;
                    else
                        break e
                }
            }
            return P
        }
        function g(B, P) {
            var fe = B.sortIndex - P.sortIndex;
            return fe !== 0 ? fe : B.id - P.id
        }
        if (s.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var y = performance;
            s.unstable_now = function() {
                return y.now()
            }
        } else {
            var E = Date
              , _ = E.now();
            s.unstable_now = function() {
                return E.now() - _
            }
        }
        var M = []
          , p = []
          , R = 1
          , C = null
          , Z = 3
          , L = !1
          , ae = !1
          , q = !1
          , Se = !1
          , F = typeof setTimeout == "function" ? setTimeout : null
          , te = typeof clearTimeout == "function" ? clearTimeout : null
          , I = typeof setImmediate < "u" ? setImmediate : null;
        function pe(B) {
            for (var P = d(p); P !== null; ) {
                if (P.callback === null)
                    u(p);
                else if (P.startTime <= B)
                    u(p),
                    P.sortIndex = P.expirationTime,
                    o(M, P);
                else
                    break;
                P = d(p)
            }
        }
        function ue(B) {
            if (q = !1,
            pe(B),
            !ae)
                if (d(M) !== null)
                    ae = !0,
                    me || (me = !0,
                    Le());
                else {
                    var P = d(p);
                    P !== null && $e(ue, P.startTime - B)
                }
        }
        var me = !1
          , se = -1
          , Ee = 5
          , Xe = -1;
        function ze() {
            return Se ? !0 : !(s.unstable_now() - Xe < Ee)
        }
        function _e() {
            if (Se = !1,
            me) {
                var B = s.unstable_now();
                Xe = B;
                var P = !0;
                try {
                    e: {
                        ae = !1,
                        q && (q = !1,
                        te(se),
                        se = -1),
                        L = !0;
                        var fe = Z;
                        try {
                            t: {
                                for (pe(B),
                                C = d(M); C !== null && !(C.expirationTime > B && ze()); ) {
                                    var Ze = C.callback;
                                    if (typeof Ze == "function") {
                                        C.callback = null,
                                        Z = C.priorityLevel;
                                        var Oe = Ze(C.expirationTime <= B);
                                        if (B = s.unstable_now(),
                                        typeof Oe == "function") {
                                            C.callback = Oe,
                                            pe(B),
                                            P = !0;
                                            break t
                                        }
                                        C === d(M) && u(M),
                                        pe(B)
                                    } else
                                        u(M);
                                    C = d(M)
                                }
                                if (C !== null)
                                    P = !0;
                                else {
                                    var N = d(p);
                                    N !== null && $e(ue, N.startTime - B),
                                    P = !1
                                }
                            }
                            break e
                        } finally {
                            C = null,
                            Z = fe,
                            L = !1
                        }
                        P = void 0
                    }
                } finally {
                    P ? Le() : me = !1
                }
            }
        }
        var Le;
        if (typeof I == "function")
            Le = function() {
                I(_e)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var be = new MessageChannel
              , Ce = be.port2;
            be.port1.onmessage = _e,
            Le = function() {
                Ce.postMessage(null)
            }
        } else
            Le = function() {
                F(_e, 0)
            }
            ;
        function $e(B, P) {
            se = F(function() {
                B(s.unstable_now())
            }, P)
        }
        s.unstable_IdlePriority = 5,
        s.unstable_ImmediatePriority = 1,
        s.unstable_LowPriority = 4,
        s.unstable_NormalPriority = 3,
        s.unstable_Profiling = null,
        s.unstable_UserBlockingPriority = 2,
        s.unstable_cancelCallback = function(B) {
            B.callback = null
        }
        ,
        s.unstable_forceFrameRate = function(B) {
            0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ee = 0 < B ? Math.floor(1e3 / B) : 5
        }
        ,
        s.unstable_getCurrentPriorityLevel = function() {
            return Z
        }
        ,
        s.unstable_next = function(B) {
            switch (Z) {
            case 1:
            case 2:
            case 3:
                var P = 3;
                break;
            default:
                P = Z
            }
            var fe = Z;
            Z = P;
            try {
                return B()
            } finally {
                Z = fe
            }
        }
        ,
        s.unstable_requestPaint = function() {
            Se = !0
        }
        ,
        s.unstable_runWithPriority = function(B, P) {
            switch (B) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                B = 3
            }
            var fe = Z;
            Z = B;
            try {
                return P()
            } finally {
                Z = fe
            }
        }
        ,
        s.unstable_scheduleCallback = function(B, P, fe) {
            var Ze = s.unstable_now();
            switch (typeof fe == "object" && fe !== null ? (fe = fe.delay,
            fe = typeof fe == "number" && 0 < fe ? Ze + fe : Ze) : fe = Ze,
            B) {
            case 1:
                var Oe = -1;
                break;
            case 2:
                Oe = 250;
                break;
            case 5:
                Oe = 1073741823;
                break;
            case 4:
                Oe = 1e4;
                break;
            default:
                Oe = 5e3
            }
            return Oe = fe + Oe,
            B = {
                id: R++,
                callback: P,
                priorityLevel: B,
                startTime: fe,
                expirationTime: Oe,
                sortIndex: -1
            },
            fe > Ze ? (B.sortIndex = fe,
            o(p, B),
            d(M) === null && B === d(p) && (q ? (te(se),
            se = -1) : q = !0,
            $e(ue, fe - Ze))) : (B.sortIndex = Oe,
            o(M, B),
            ae || L || (ae = !0,
            me || (me = !0,
            Le()))),
            B
        }
        ,
        s.unstable_shouldYield = ze,
        s.unstable_wrapCallback = function(B) {
            var P = Z;
            return function() {
                var fe = Z;
                Z = P;
                try {
                    return B.apply(this, arguments)
                } finally {
                    Z = fe
                }
            }
        }
    }
    )(Au)),
    Au
}
var j0;
function Jg() {
    return j0 || (j0 = 1,
    Nu.exports = Kg()),
    Nu.exports
}
var Eu = {
    exports: {}
}
  , Rl = {};
var N0;
function Fg() {
    if (N0)
        return Rl;
    N0 = 1;
    var s = qu();
    function o(M) {
        var p = "https://react.dev/errors/" + M;
        if (1 < arguments.length) {
            p += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var R = 2; R < arguments.length; R++)
                p += "&args[]=" + encodeURIComponent(arguments[R])
        }
        return "Minified React error #" + M + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function d() {}
    var u = {
        d: {
            f: d,
            r: function() {
                throw Error(o(522))
            },
            D: d,
            C: d,
            L: d,
            m: d,
            X: d,
            S: d,
            M: d
        },
        p: 0,
        findDOMNode: null
    }
      , g = Symbol.for("react.portal");
    function y(M, p, R) {
        var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: g,
            key: C == null ? null : "" + C,
            children: M,
            containerInfo: p,
            implementation: R
        }
    }
    var E = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function _(M, p) {
        if (M === "font")
            return "";
        if (typeof p == "string")
            return p === "use-credentials" ? p : ""
    }
    return Rl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u,
    Rl.createPortal = function(M, p) {
        var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
            throw Error(o(299));
        return y(M, p, null, R)
    }
    ,
    Rl.flushSync = function(M) {
        var p = E.T
          , R = u.p;
        try {
            if (E.T = null,
            u.p = 2,
            M)
                return M()
        } finally {
            E.T = p,
            u.p = R,
            u.d.f()
        }
    }
    ,
    Rl.preconnect = function(M, p) {
        typeof M == "string" && (p ? (p = p.crossOrigin,
        p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null,
        u.d.C(M, p))
    }
    ,
    Rl.prefetchDNS = function(M) {
        typeof M == "string" && u.d.D(M)
    }
    ,
    Rl.preinit = function(M, p) {
        if (typeof M == "string" && p && typeof p.as == "string") {
            var R = p.as
              , C = _(R, p.crossOrigin)
              , Z = typeof p.integrity == "string" ? p.integrity : void 0
              , L = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            R === "style" ? u.d.S(M, typeof p.precedence == "string" ? p.precedence : void 0, {
                crossOrigin: C,
                integrity: Z,
                fetchPriority: L
            }) : R === "script" && u.d.X(M, {
                crossOrigin: C,
                integrity: Z,
                fetchPriority: L,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0
            })
        }
    }
    ,
    Rl.preinitModule = function(M, p) {
        if (typeof M == "string")
            if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var R = _(p.as, p.crossOrigin);
                    u.d.M(M, {
                        crossOrigin: R,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    })
                }
            } else
                p == null && u.d.M(M)
    }
    ,
    Rl.preload = function(M, p) {
        if (typeof M == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
            var R = p.as
              , C = _(R, p.crossOrigin);
            u.d.L(M, R, {
                crossOrigin: C,
                integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                type: typeof p.type == "string" ? p.type : void 0,
                fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                media: typeof p.media == "string" ? p.media : void 0
            })
        }
    }
    ,
    Rl.preloadModule = function(M, p) {
        if (typeof M == "string")
            if (p) {
                var R = _(p.as, p.crossOrigin);
                u.d.m(M, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: R,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                })
            } else
                u.d.m(M)
    }
    ,
    Rl.requestFormReset = function(M) {
        u.d.r(M)
    }
    ,
    Rl.unstable_batchedUpdates = function(M, p) {
        return M(p)
    }
    ,
    Rl.useFormState = function(M, p, R) {
        return E.H.useFormState(M, p, R)
    }
    ,
    Rl.useFormStatus = function() {
        return E.H.useHostTransitionStatus()
    }
    ,
    Rl.version = "19.2.3",
    Rl
}
var A0;
function Wg() {
    if (A0)
        return Eu.exports;
    A0 = 1;
    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
            } catch (o) {
                console.error(o)
            }
    }
    return s(),
    Eu.exports = Fg(),
    Eu.exports
}
var E0;
function Ig() {
    if (E0)
        return Ir;
    E0 = 1;
    var s = Jg()
      , o = qu()
      , d = Wg();
    function u(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++)
                t += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function g(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function y(e) {
        var t = e
          , l = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (l = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? l : null
    }
    function E(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function _(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function M(e) {
        if (y(e) !== e)
            throw Error(u(188))
    }
    function p(e) {
        var t = e.alternate;
        if (!t) {
            if (t = y(e),
            t === null)
                throw Error(u(188));
            return t !== e ? null : e
        }
        for (var l = e, n = t; ; ) {
            var a = l.return;
            if (a === null)
                break;
            var i = a.alternate;
            if (i === null) {
                if (n = a.return,
                n !== null) {
                    l = n;
                    continue
                }
                break
            }
            if (a.child === i.child) {
                for (i = a.child; i; ) {
                    if (i === l)
                        return M(a),
                        e;
                    if (i === n)
                        return M(a),
                        t;
                    i = i.sibling
                }
                throw Error(u(188))
            }
            if (l.return !== n.return)
                l = a,
                n = i;
            else {
                for (var c = !1, f = a.child; f; ) {
                    if (f === l) {
                        c = !0,
                        l = a,
                        n = i;
                        break
                    }
                    if (f === n) {
                        c = !0,
                        n = a,
                        l = i;
                        break
                    }
                    f = f.sibling
                }
                if (!c) {
                    for (f = i.child; f; ) {
                        if (f === l) {
                            c = !0,
                            l = i,
                            n = a;
                            break
                        }
                        if (f === n) {
                            c = !0,
                            n = i,
                            l = a;
                            break
                        }
                        f = f.sibling
                    }
                    if (!c)
                        throw Error(u(189))
                }
            }
            if (l.alternate !== n)
                throw Error(u(190))
        }
        if (l.tag !== 3)
            throw Error(u(188));
        return l.stateNode.current === l ? e : t
    }
    function R(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = R(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var C = Object.assign
      , Z = Symbol.for("react.element")
      , L = Symbol.for("react.transitional.element")
      , ae = Symbol.for("react.portal")
      , q = Symbol.for("react.fragment")
      , Se = Symbol.for("react.strict_mode")
      , F = Symbol.for("react.profiler")
      , te = Symbol.for("react.consumer")
      , I = Symbol.for("react.context")
      , pe = Symbol.for("react.forward_ref")
      , ue = Symbol.for("react.suspense")
      , me = Symbol.for("react.suspense_list")
      , se = Symbol.for("react.memo")
      , Ee = Symbol.for("react.lazy")
      , Xe = Symbol.for("react.activity")
      , ze = Symbol.for("react.memo_cache_sentinel")
      , _e = Symbol.iterator;
    function Le(e) {
        return e === null || typeof e != "object" ? null : (e = _e && e[_e] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var be = Symbol.for("react.client.reference");
    function Ce(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === be ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case q:
            return "Fragment";
        case F:
            return "Profiler";
        case Se:
            return "StrictMode";
        case ue:
            return "Suspense";
        case me:
            return "SuspenseList";
        case Xe:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case ae:
                return "Portal";
            case I:
                return e.displayName || "Context";
            case te:
                return (e._context.displayName || "Context") + ".Consumer";
            case pe:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case se:
                return t = e.displayName || null,
                t !== null ? t : Ce(e.type) || "Memo";
            case Ee:
                t = e._payload,
                e = e._init;
                try {
                    return Ce(e(t))
                } catch {}
            }
        return null
    }
    var $e = Array.isArray
      , B = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , P = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , fe = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , Ze = []
      , Oe = -1;
    function N(e) {
        return {
            current: e
        }
    }
    function Y(e) {
        0 > Oe || (e.current = Ze[Oe],
        Ze[Oe] = null,
        Oe--)
    }
    function W(e, t) {
        Oe++,
        Ze[Oe] = e.current,
        e.current = t
    }
    var ce = N(null)
      , we = N(null)
      , je = N(null)
      , Fe = N(null);
    function ht(e, t) {
        switch (W(je, t),
        W(we, e),
        W(ce, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? Ym(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = Ym(t),
                e = Xm(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        Y(ce),
        W(ce, e)
    }
    function De() {
        Y(ce),
        Y(we),
        Y(je)
    }
    function zt(e) {
        e.memoizedState !== null && W(Fe, e);
        var t = ce.current
          , l = Xm(t, e.type);
        t !== l && (W(we, e),
        W(ce, l))
    }
    function Zt(e) {
        we.current === e && (Y(ce),
        Y(we)),
        Fe.current === e && (Y(Fe),
        $r._currentValue = fe)
    }
    var _l, Cn;
    function At(e) {
        if (_l === void 0)
            try {
                throw Error()
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                _l = t && t[1] || "",
                Cn = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + _l + e + Cn
    }
    var Bt = !1;
    function $t(e, t) {
        if (!e || Bt)
            return "";
        Bt = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var n = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var $ = function() {
                                throw Error()
                            };
                            if (Object.defineProperty($.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct($, [])
                                } catch (H) {
                                    var k = H
                                }
                                Reflect.construct(e, [], $)
                            } else {
                                try {
                                    $.call()
                                } catch (H) {
                                    k = H
                                }
                                e.call($.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (H) {
                                k = H
                            }
                            ($ = e()) && typeof $.catch == "function" && $.catch(function() {})
                        }
                    } catch (H) {
                        if (H && k && typeof H.stack == "string")
                            return [H.stack, k.stack]
                    }
                    return [null, null]
                }
            };
            n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
            a && a.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var i = n.DetermineComponentFrameRoot()
              , c = i[0]
              , f = i[1];
            if (c && f) {
                var x = c.split(`
`)
                  , D = f.split(`
`);
                for (a = n = 0; n < x.length && !x[n].includes("DetermineComponentFrameRoot"); )
                    n++;
                for (; a < D.length && !D[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                if (n === x.length || a === D.length)
                    for (n = x.length - 1,
                    a = D.length - 1; 1 <= n && 0 <= a && x[n] !== D[a]; )
                        a--;
                for (; 1 <= n && 0 <= a; n--,
                a--)
                    if (x[n] !== D[a]) {
                        if (n !== 1 || a !== 1)
                            do
                                if (n--,
                                a--,
                                0 > a || x[n] !== D[a]) {
                                    var V = `
` + x[n].replace(" at new ", " at ");
                                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)),
                                    V
                                }
                            while (1 <= n && 0 <= a);
                        break
                    }
            }
        } finally {
            Bt = !1,
            Error.prepareStackTrace = l
        }
        return (l = e ? e.displayName || e.name : "") ? At(l) : ""
    }
    function hl(e, t) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return At(e.type);
        case 16:
            return At("Lazy");
        case 13:
            return e.child !== t && t !== null ? At("Suspense Fallback") : At("Suspense");
        case 19:
            return At("SuspenseList");
        case 0:
        case 15:
            return $t(e.type, !1);
        case 11:
            return $t(e.type.render, !1);
        case 1:
            return $t(e.type, !0);
        case 31:
            return At("Activity");
        default:
            return ""
        }
    }
    function oe(e) {
        try {
            var t = ""
              , l = null;
            do
                t += hl(e, l),
                l = e,
                e = e.return;
            while (e);
            return t
        } catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack
        }
    }
    var Ve = Object.prototype.hasOwnProperty
      , On = s.unstable_scheduleCallback
      , wt = s.unstable_cancelCallback
      , gn = s.unstable_shouldYield
      , ot = s.unstable_requestPaint
      , Ke = s.unstable_now
      , Et = s.unstable_getCurrentPriorityLevel
      , Ut = s.unstable_ImmediatePriority
      , Xt = s.unstable_UserBlockingPriority
      , tn = s.unstable_NormalPriority
      , wl = s.unstable_LowPriority
      , Sl = s.unstable_IdlePriority
      , Cl = s.log
      , Kt = s.unstable_setDisableYieldValue
      , yt = null
      , Lt = null;
    function It(e) {
        if (typeof Cl == "function" && Kt(e),
        Lt && typeof Lt.setStrictMode == "function")
            try {
                Lt.setStrictMode(yt, e)
            } catch {}
    }
    var pt = Math.clz32 ? Math.clz32 : Jt
      , Vt = Math.log
      , $n = Math.LN2;
    function Jt(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Vt(e) / $n | 0) | 0
    }
    var rl = 256
      , sl = 262144
      , yn = 4194304;
    function Pt(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function Ot(e, t, l) {
        var n = e.pendingLanes;
        if (n === 0)
            return 0;
        var a = 0
          , i = e.suspendedLanes
          , c = e.pingedLanes;
        e = e.warmLanes;
        var f = n & 134217727;
        return f !== 0 ? (n = f & ~i,
        n !== 0 ? a = Pt(n) : (c &= f,
        c !== 0 ? a = Pt(c) : l || (l = f & ~e,
        l !== 0 && (a = Pt(l))))) : (f = n & ~i,
        f !== 0 ? a = Pt(f) : c !== 0 ? a = Pt(c) : l || (l = n & ~e,
        l !== 0 && (a = Pt(l)))),
        a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a,
        l = t & -t,
        i >= l || i === 32 && (l & 4194048) !== 0) ? t : a
    }
    function Vl(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function Kn(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function za() {
        var e = yn;
        return yn <<= 1,
        (yn & 62914560) === 0 && (yn = 4194304),
        e
    }
    function pn(e) {
        for (var t = [], l = 0; 31 > l; l++)
            t.push(e);
        return t
    }
    function bn(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function qe(e, t, l, n, a, i) {
        var c = e.pendingLanes;
        e.pendingLanes = l,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= l,
        e.entangledLanes &= l,
        e.errorRecoveryDisabledLanes &= l,
        e.shellSuspendCounter = 0;
        var f = e.entanglements
          , x = e.expirationTimes
          , D = e.hiddenUpdates;
        for (l = c & ~l; 0 < l; ) {
            var V = 31 - pt(l)
              , $ = 1 << V;
            f[V] = 0,
            x[V] = -1;
            var k = D[V];
            if (k !== null)
                for (D[V] = null,
                V = 0; V < k.length; V++) {
                    var H = k[V];
                    H !== null && (H.lane &= -536870913)
                }
            l &= ~$
        }
        n !== 0 && Gl(e, n, 0),
        i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t))
    }
    function Gl(e, t, l) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var n = 31 - pt(t);
        e.entangledLanes |= t,
        e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930
    }
    function Te(e, t) {
        var l = e.entangledLanes |= t;
        for (e = e.entanglements; l; ) {
            var n = 31 - pt(l)
              , a = 1 << n;
            a & t | e[n] & t && (e[n] |= t),
            l &= ~a
        }
    }
    function Dn(e, t) {
        var l = t & -t;
        return l = (l & 42) !== 0 ? 1 : kn(l),
        (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    }
    function kn(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function gl(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function ln() {
        var e = P.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : f0(e.type))
    }
    function qt(e, t) {
        var l = P.p;
        try {
            return P.p = e,
            t()
        } finally {
            P.p = l
        }
    }
    var cl = Math.random().toString(36).slice(2)
      , ut = "__reactFiber$" + cl
      , _t = "__reactProps$" + cl
      , ol = "__reactContainer$" + cl
      , Ql = "__reactEvents$" + cl
      , Rn = "__reactListeners$" + cl
      , Bn = "__reactHandles$" + cl
      , Zl = "__reactResources$" + cl
      , Re = "__reactMarker$" + cl;
    function bt(e) {
        delete e[ut],
        delete e[_t],
        delete e[Ql],
        delete e[Rn],
        delete e[Bn]
    }
    function Be(e) {
        var t = e[ut];
        if (t)
            return t;
        for (var l = e.parentNode; l; ) {
            if (t = l[ol] || l[ut]) {
                if (l = t.alternate,
                t.child !== null || l !== null && l.child !== null)
                    for (e = Jm(e); e !== null; ) {
                        if (l = e[ut])
                            return l;
                        e = Jm(e)
                    }
                return t
            }
            e = l,
            l = e.parentNode
        }
        return null
    }
    function it(e) {
        if (e = e[ut] || e[ol]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function ft(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(u(33))
    }
    function Ul(e) {
        var t = e[Zl];
        return t || (t = e[Zl] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Tt(e) {
        e[Re] = !0
    }
    var nn = new Set
      , Hl = {};
    function $l(e, t) {
        Un(e, t),
        Un(e + "Capture", t)
    }
    function Un(e, t) {
        for (Hl[e] = t,
        e = 0; e < t.length; e++)
            nn.add(t[e])
    }
    var an = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Jn = {}
      , Fn = {};
    function oi(e) {
        return Ve.call(Fn, e) ? !0 : Ve.call(Jn, e) ? !1 : an.test(e) ? Fn[e] = !0 : (Jn[e] = !0,
        !1)
    }
    function Wn(e, t, l) {
        if (oi(t))
            if (l === null)
                e.removeAttribute(t);
            else {
                switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var n = t.toLowerCase().slice(0, 5);
                    if (n !== "data-" && n !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + l)
            }
    }
    function Hn(e, t, l) {
        if (l === null)
            e.removeAttribute(t);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + l)
        }
    }
    function el(e, t, l, n) {
        if (n === null)
            e.removeAttribute(l);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(l);
                return
            }
            e.setAttributeNS(t, l, "" + n)
        }
    }
    function jl(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Ll(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function sa(e, t, l) {
        var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var a = n.get
              , i = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return a.call(this)
                },
                set: function(c) {
                    l = "" + c,
                    i.call(this, c)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(c) {
                    l = "" + c
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function _a(e) {
        if (!e._valueTracker) {
            var t = Ll(e) ? "checked" : "value";
            e._valueTracker = sa(e, t, "" + e[t])
        }
    }
    function ui(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var l = t.getValue()
          , n = "";
        return e && (n = Ll(e) ? e.checked ? "true" : "false" : e.value),
        e = n,
        e !== l ? (t.setValue(e),
        !0) : !1
    }
    function ca(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var mr = /[\n"\\]/g;
    function tl(e) {
        return e.replace(mr, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Ue(e, t, l, n, a, i, c, f) {
        e.name = "",
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"),
        t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + jl(t)) : e.value !== "" + jl(t) && (e.value = "" + jl(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"),
        t != null ? xn(e, c, jl(t)) : l != null ? xn(e, c, jl(l)) : n != null && e.removeAttribute("value"),
        a == null && i != null && (e.defaultChecked = !!i),
        a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"),
        f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + jl(f) : e.removeAttribute("name")
    }
    function rn(e, t, l, n, a, i, c, f) {
        if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i),
        t != null || l != null) {
            if (!(i !== "submit" && i !== "reset" || t != null)) {
                _a(e);
                return
            }
            l = l != null ? "" + jl(l) : "",
            t = t != null ? "" + jl(t) : l,
            f || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        n = n ?? a,
        n = typeof n != "function" && typeof n != "symbol" && !!n,
        e.checked = f ? e.checked : !!n,
        e.defaultChecked = !!n,
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c),
        _a(e)
    }
    function xn(e, t, l) {
        t === "number" && ca(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
    }
    function vn(e, t, l, n) {
        if (e = e.options,
        t) {
            t = {};
            for (var a = 0; a < l.length; a++)
                t["$" + l[a]] = !0;
            for (l = 0; l < e.length; l++)
                a = t.hasOwnProperty("$" + e[l].value),
                e[l].selected !== a && (e[l].selected = a),
                a && n && (e[l].defaultSelected = !0)
        } else {
            for (l = "" + jl(l),
            t = null,
            a = 0; a < e.length; a++) {
                if (e[a].value === l) {
                    e[a].selected = !0,
                    n && (e[a].defaultSelected = !0);
                    return
                }
                t !== null || e[a].disabled || (t = e[a])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Ca(e, t, l) {
        if (t != null && (t = "" + jl(t),
        t !== e.value && (e.value = t),
        l == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = l != null ? "" + jl(l) : ""
    }
    function Ln(e, t, l, n) {
        if (t == null) {
            if (n != null) {
                if (l != null)
                    throw Error(u(92));
                if ($e(n)) {
                    if (1 < n.length)
                        throw Error(u(93));
                    n = n[0]
                }
                l = n
            }
            l == null && (l = ""),
            t = l
        }
        l = jl(t),
        e.defaultValue = l,
        n = e.textContent,
        n === l && n !== "" && n !== null && (e.value = n),
        _a(e)
    }
    function ul(e, t) {
        if (t) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var oa = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Oa(e, t, l) {
        var n = t.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || oa.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
    }
    function fi(e, t, l) {
        if (t != null && typeof t != "object")
            throw Error(u(62));
        if (e = e.style,
        l != null) {
            for (var n in l)
                !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
            for (var a in t)
                n = t[a],
                t.hasOwnProperty(a) && l[a] !== n && Oa(e, a, n)
        } else
            for (var i in t)
                t.hasOwnProperty(i) && Oa(e, i, t[i])
    }
    function ua(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Da = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , qn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function In(e) {
        return qn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function Ol() {}
    var di = null;
    function ql(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var wn = null
      , Pn = null;
    function Dl(e) {
        var t = it(e);
        if (t && (e = t.stateNode)) {
            var l = e[_t] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (Ue(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                t = l.name,
                l.type === "radio" && t != null) {
                    for (l = e; l.parentNode; )
                        l = l.parentNode;
                    for (l = l.querySelectorAll('input[name="' + tl("" + t) + '"][type="radio"]'),
                    t = 0; t < l.length; t++) {
                        var n = l[t];
                        if (n !== e && n.form === e.form) {
                            var a = n[_t] || null;
                            if (!a)
                                throw Error(u(90));
                            Ue(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                        }
                    }
                    for (t = 0; t < l.length; t++)
                        n = l[t],
                        n.form === e.form && ui(n)
                }
                break e;
            case "textarea":
                Ca(e, l.value, l.defaultValue);
                break e;
            case "select":
                t = l.value,
                t != null && vn(e, !!l.multiple, t, !1)
            }
        }
    }
    var sn = !1;
    function Yn(e, t, l) {
        if (sn)
            return e(t, l);
        sn = !0;
        try {
            var n = e(t);
            return n
        } finally {
            if (sn = !1,
            (wn !== null || Pn !== null) && (Zs(),
            wn && (t = wn,
            e = Pn,
            Pn = wn = null,
            Dl(t),
            e)))
                for (t = 0; t < e.length; t++)
                    Dl(e[t])
        }
    }
    function Kl(e, t) {
        var l = e.stateNode;
        if (l === null)
            return null;
        var n = l[_t] || null;
        if (n === null)
            return null;
        l = n[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (n = !n.disabled) || (e = e.type,
            n = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !n;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (l && typeof l != "function")
            throw Error(u(231, t, typeof l));
        return l
    }
    var kl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , h = !1;
    if (kl)
        try {
            var v = {};
            Object.defineProperty(v, "passive", {
                get: function() {
                    h = !0
                }
            }),
            window.addEventListener("test", v, v),
            window.removeEventListener("test", v, v)
        } catch {
            h = !1
        }
    var T = null
      , X = null
      , j = null;
    function G() {
        if (j)
            return j;
        var e, t = X, l = t.length, n, a = "value"in T ? T.value : T.textContent, i = a.length;
        for (e = 0; e < l && t[e] === a[e]; e++)
            ;
        var c = l - e;
        for (n = 1; n <= c && t[l - n] === a[i - n]; n++)
            ;
        return j = a.slice(e, 1 < n ? 1 - n : void 0)
    }
    function U(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function ne() {
        return !0
    }
    function le() {
        return !1
    }
    function de(e) {
        function t(l, n, a, i, c) {
            this._reactName = l,
            this._targetInst = a,
            this.type = n,
            this.nativeEvent = i,
            this.target = c,
            this.currentTarget = null;
            for (var f in e)
                e.hasOwnProperty(f) && (l = e[f],
                this[f] = l ? l(i) : i[f]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ne : le,
            this.isPropagationStopped = le,
            this
        }
        return C(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1),
                this.isDefaultPrevented = ne)
            },
            stopPropagation: function() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
                this.isPropagationStopped = ne)
            },
            persist: function() {},
            isPersistent: ne
        }),
        t
    }
    var xe = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, J = de(xe), ge = C({}, xe, {
        view: 0,
        detail: 0
    }), Yt = de(ge), He, fl, dt, Dt = C({}, ge, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: gt,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== dt && (dt && e.type === "mousemove" ? (He = e.screenX - dt.screenX,
            fl = e.screenY - dt.screenY) : fl = He = 0,
            dt = e),
            He)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : fl
        }
    }), nt = de(Dt), yl = C({}, Dt, {
        dataTransfer: 0
    }), m = de(yl), w = C({}, ge, {
        relatedTarget: 0
    }), S = de(w), ie = C({}, xe, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), K = de(ie), ee = C({}, xe, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), Me = de(ee), Ne = C({}, xe, {
        data: 0
    }), rt = de(Ne), at = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, tt = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, pl = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Ct(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = pl[e]) ? !!t[e] : !1
    }
    function gt() {
        return Ct
    }
    var Xn = C({}, ge, {
        key: function(e) {
            if (e.key) {
                var t = at[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = U(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tt[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: gt,
        charCode: function(e) {
            return e.type === "keypress" ? U(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? U(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Vn = de(Xn)
      , Yl = C({}, Dt, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , re = de(Yl)
      , Je = C({}, ge, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: gt
    })
      , mi = de(Je)
      , ka = C({}, xe, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , jc = de(ka)
      , Nc = C({}, Dt, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , us = de(Nc)
      , Ac = C({}, xe, {
        newState: 0,
        oldState: 0
    })
      , dh = de(Ac)
      , mh = [9, 13, 27, 32]
      , Ec = kl && "CompositionEvent"in window
      , hr = null;
    kl && "documentMode"in document && (hr = document.documentMode);
    var hh = kl && "TextEvent"in window && !hr
      , Zu = kl && (!Ec || hr && 8 < hr && 11 >= hr)
      , $u = " "
      , Ku = !1;
    function Ju(e, t) {
        switch (e) {
        case "keyup":
            return mh.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Fu(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var Ci = !1;
    function gh(e, t) {
        switch (e) {
        case "compositionend":
            return Fu(t);
        case "keypress":
            return t.which !== 32 ? null : (Ku = !0,
            $u);
        case "textInput":
            return e = t.data,
            e === $u && Ku ? null : e;
        default:
            return null
        }
    }
    function yh(e, t) {
        if (Ci)
            return e === "compositionend" || !Ec && Ju(e, t) ? (e = G(),
            j = X = T = null,
            Ci = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Zu && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var ph = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Wu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!ph[e.type] : t === "textarea"
    }
    function Iu(e, t, l, n) {
        wn ? Pn ? Pn.push(n) : Pn = [n] : wn = n,
        t = Ps(t, "onChange"),
        0 < t.length && (l = new J("onChange","change",null,l,n),
        e.push({
            event: l,
            listeners: t
        }))
    }
    var gr = null
      , yr = null;
    function bh(e) {
        Rm(e, 0)
    }
    function fs(e) {
        var t = ft(e);
        if (ui(t))
            return e
    }
    function Pu(e, t) {
        if (e === "change")
            return t
    }
    var ef = !1;
    if (kl) {
        var Tc;
        if (kl) {
            var Mc = "oninput"in document;
            if (!Mc) {
                var tf = document.createElement("div");
                tf.setAttribute("oninput", "return;"),
                Mc = typeof tf.oninput == "function"
            }
            Tc = Mc
        } else
            Tc = !1;
        ef = Tc && (!document.documentMode || 9 < document.documentMode)
    }
    function lf() {
        gr && (gr.detachEvent("onpropertychange", nf),
        yr = gr = null)
    }
    function nf(e) {
        if (e.propertyName === "value" && fs(yr)) {
            var t = [];
            Iu(t, yr, e, ql(e)),
            Yn(bh, t)
        }
    }
    function xh(e, t, l) {
        e === "focusin" ? (lf(),
        gr = t,
        yr = l,
        gr.attachEvent("onpropertychange", nf)) : e === "focusout" && lf()
    }
    function vh(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return fs(yr)
    }
    function wh(e, t) {
        if (e === "click")
            return fs(t)
    }
    function Sh(e, t) {
        if (e === "input" || e === "change")
            return fs(t)
    }
    function jh(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var cn = typeof Object.is == "function" ? Object.is : jh;
    function pr(e, t) {
        if (cn(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var l = Object.keys(e)
          , n = Object.keys(t);
        if (l.length !== n.length)
            return !1;
        for (n = 0; n < l.length; n++) {
            var a = l[n];
            if (!Ve.call(t, a) || !cn(e[a], t[a]))
                return !1
        }
        return !0
    }
    function af(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function rf(e, t) {
        var l = af(e);
        e = 0;
        for (var n; l; ) {
            if (l.nodeType === 3) {
                if (n = e + l.textContent.length,
                e <= t && n >= t)
                    return {
                        node: l,
                        offset: t - e
                    };
                e = n
            }
            e: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break e
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = af(l)
        }
    }
    function sf(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function cf(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = ca(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var l = typeof t.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l)
                e = t.contentWindow;
            else
                break;
            t = ca(e.document)
        }
        return t
    }
    function zc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Nh = kl && "documentMode"in document && 11 >= document.documentMode
      , Oi = null
      , _c = null
      , br = null
      , Cc = !1;
    function of(e, t, l) {
        var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        Cc || Oi == null || Oi !== ca(n) || (n = Oi,
        "selectionStart"in n && zc(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(),
        n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }),
        br && pr(br, n) || (br = n,
        n = Ps(_c, "onSelect"),
        0 < n.length && (t = new J("onSelect","select",null,t,l),
        e.push({
            event: t,
            listeners: n
        }),
        t.target = Oi)))
    }
    function hi(e, t) {
        var l = {};
        return l[e.toLowerCase()] = t.toLowerCase(),
        l["Webkit" + e] = "webkit" + t,
        l["Moz" + e] = "moz" + t,
        l
    }
    var Di = {
        animationend: hi("Animation", "AnimationEnd"),
        animationiteration: hi("Animation", "AnimationIteration"),
        animationstart: hi("Animation", "AnimationStart"),
        transitionrun: hi("Transition", "TransitionRun"),
        transitionstart: hi("Transition", "TransitionStart"),
        transitioncancel: hi("Transition", "TransitionCancel"),
        transitionend: hi("Transition", "TransitionEnd")
    }
      , Oc = {}
      , uf = {};
    kl && (uf = document.createElement("div").style,
    "AnimationEvent"in window || (delete Di.animationend.animation,
    delete Di.animationiteration.animation,
    delete Di.animationstart.animation),
    "TransitionEvent"in window || delete Di.transitionend.transition);
    function gi(e) {
        if (Oc[e])
            return Oc[e];
        if (!Di[e])
            return e;
        var t = Di[e], l;
        for (l in t)
            if (t.hasOwnProperty(l) && l in uf)
                return Oc[e] = t[l];
        return e
    }
    var ff = gi("animationend")
      , df = gi("animationiteration")
      , mf = gi("animationstart")
      , Ah = gi("transitionrun")
      , Eh = gi("transitionstart")
      , Th = gi("transitioncancel")
      , hf = gi("transitionend")
      , gf = new Map
      , Dc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Dc.push("scrollEnd");
    function Gn(e, t) {
        gf.set(e, t),
        $l(t, [e])
    }
    var ds = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
      , Sn = []
      , ki = 0
      , kc = 0;
    function ms() {
        for (var e = ki, t = kc = ki = 0; t < e; ) {
            var l = Sn[t];
            Sn[t++] = null;
            var n = Sn[t];
            Sn[t++] = null;
            var a = Sn[t];
            Sn[t++] = null;
            var i = Sn[t];
            if (Sn[t++] = null,
            n !== null && a !== null) {
                var c = n.pending;
                c === null ? a.next = a : (a.next = c.next,
                c.next = a),
                n.pending = a
            }
            i !== 0 && yf(l, a, i)
        }
    }
    function hs(e, t, l, n) {
        Sn[ki++] = e,
        Sn[ki++] = t,
        Sn[ki++] = l,
        Sn[ki++] = n,
        kc |= n,
        e.lanes |= n,
        e = e.alternate,
        e !== null && (e.lanes |= n)
    }
    function Rc(e, t, l, n) {
        return hs(e, t, l, n),
        gs(e)
    }
    function yi(e, t) {
        return hs(e, null, null, t),
        gs(e)
    }
    function yf(e, t, l) {
        e.lanes |= l;
        var n = e.alternate;
        n !== null && (n.lanes |= l);
        for (var a = !1, i = e.return; i !== null; )
            i.childLanes |= l,
            n = i.alternate,
            n !== null && (n.childLanes |= l),
            i.tag === 22 && (e = i.stateNode,
            e === null || e._visibility & 1 || (a = !0)),
            e = i,
            i = i.return;
        return e.tag === 3 ? (i = e.stateNode,
        a && t !== null && (a = 31 - pt(l),
        e = i.hiddenUpdates,
        n = e[a],
        n === null ? e[a] = [t] : n.push(t),
        t.lane = l | 536870912),
        i) : null
    }
    function gs(e) {
        if (50 < qr)
            throw qr = 0,
            Qo = null,
            Error(u(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Ri = {};
    function Mh(e, t, l, n) {
        this.tag = e,
        this.key = l,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = n,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function on(e, t, l, n) {
        return new Mh(e,t,l,n)
    }
    function Bc(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function fa(e, t) {
        var l = e.alternate;
        return l === null ? (l = on(e.tag, t, e.key, e.mode),
        l.elementType = e.elementType,
        l.type = e.type,
        l.stateNode = e.stateNode,
        l.alternate = e,
        e.alternate = l) : (l.pendingProps = t,
        l.type = e.type,
        l.flags = 0,
        l.subtreeFlags = 0,
        l.deletions = null),
        l.flags = e.flags & 65011712,
        l.childLanes = e.childLanes,
        l.lanes = e.lanes,
        l.child = e.child,
        l.memoizedProps = e.memoizedProps,
        l.memoizedState = e.memoizedState,
        l.updateQueue = e.updateQueue,
        t = e.dependencies,
        l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        l.sibling = e.sibling,
        l.index = e.index,
        l.ref = e.ref,
        l.refCleanup = e.refCleanup,
        l
    }
    function pf(e, t) {
        e.flags &= 65011714;
        var l = e.alternate;
        return l === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = l.childLanes,
        e.lanes = l.lanes,
        e.child = l.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = l.memoizedProps,
        e.memoizedState = l.memoizedState,
        e.updateQueue = l.updateQueue,
        e.type = l.type,
        t = l.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function ys(e, t, l, n, a, i) {
        var c = 0;
        if (n = e,
        typeof e == "function")
            Bc(e) && (c = 1);
        else if (typeof e == "string")
            c = Dg(e, l, ce.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case Xe:
                return e = on(31, l, t, a),
                e.elementType = Xe,
                e.lanes = i,
                e;
            case q:
                return pi(l.children, a, i, t);
            case Se:
                c = 8,
                a |= 24;
                break;
            case F:
                return e = on(12, l, t, a | 2),
                e.elementType = F,
                e.lanes = i,
                e;
            case ue:
                return e = on(13, l, t, a),
                e.elementType = ue,
                e.lanes = i,
                e;
            case me:
                return e = on(19, l, t, a),
                e.elementType = me,
                e.lanes = i,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case I:
                        c = 10;
                        break e;
                    case te:
                        c = 9;
                        break e;
                    case pe:
                        c = 11;
                        break e;
                    case se:
                        c = 14;
                        break e;
                    case Ee:
                        c = 16,
                        n = null;
                        break e
                    }
                c = 29,
                l = Error(u(130, e === null ? "null" : typeof e, "")),
                n = null
            }
        return t = on(c, l, t, a),
        t.elementType = e,
        t.type = n,
        t.lanes = i,
        t
    }
    function pi(e, t, l, n) {
        return e = on(7, e, n, t),
        e.lanes = l,
        e
    }
    function Uc(e, t, l) {
        return e = on(6, e, null, t),
        e.lanes = l,
        e
    }
    function bf(e) {
        var t = on(18, null, null, 0);
        return t.stateNode = e,
        t
    }
    function Hc(e, t, l) {
        return t = on(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = l,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var xf = new WeakMap;
    function jn(e, t) {
        if (typeof e == "object" && e !== null) {
            var l = xf.get(e);
            return l !== void 0 ? l : (t = {
                value: e,
                source: t,
                stack: oe(t)
            },
            xf.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: oe(t)
        }
    }
    var Bi = []
      , Ui = 0
      , ps = null
      , xr = 0
      , Nn = []
      , An = 0
      , Ra = null
      , ea = 1
      , ta = "";
    function da(e, t) {
        Bi[Ui++] = xr,
        Bi[Ui++] = ps,
        ps = e,
        xr = t
    }
    function vf(e, t, l) {
        Nn[An++] = ea,
        Nn[An++] = ta,
        Nn[An++] = Ra,
        Ra = e;
        var n = ea;
        e = ta;
        var a = 32 - pt(n) - 1;
        n &= ~(1 << a),
        l += 1;
        var i = 32 - pt(t) + a;
        if (30 < i) {
            var c = a - a % 5;
            i = (n & (1 << c) - 1).toString(32),
            n >>= c,
            a -= c,
            ea = 1 << 32 - pt(t) + a | l << a | n,
            ta = i + e
        } else
            ea = 1 << i | l << a | n,
            ta = e
    }
    function Lc(e) {
        e.return !== null && (da(e, 1),
        vf(e, 1, 0))
    }
    function qc(e) {
        for (; e === ps; )
            ps = Bi[--Ui],
            Bi[Ui] = null,
            xr = Bi[--Ui],
            Bi[Ui] = null;
        for (; e === Ra; )
            Ra = Nn[--An],
            Nn[An] = null,
            ta = Nn[--An],
            Nn[An] = null,
            ea = Nn[--An],
            Nn[An] = null
    }
    function wf(e, t) {
        Nn[An++] = ea,
        Nn[An++] = ta,
        Nn[An++] = Ra,
        ea = t.id,
        ta = t.overflow,
        Ra = e
    }
    var Nl = null
      , kt = null
      , lt = !1
      , Ba = null
      , En = !1
      , Yc = Error(u(519));
    function Ua(e) {
        var t = Error(u(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw vr(jn(t, e)),
        Yc
    }
    function Sf(e) {
        var t = e.stateNode
          , l = e.type
          , n = e.memoizedProps;
        switch (t[ut] = e,
        t[_t] = n,
        l) {
        case "dialog":
            Ie("cancel", t),
            Ie("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            Ie("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < Xr.length; l++)
                Ie(Xr[l], t);
            break;
        case "source":
            Ie("error", t);
            break;
        case "img":
        case "image":
        case "link":
            Ie("error", t),
            Ie("load", t);
            break;
        case "details":
            Ie("toggle", t);
            break;
        case "input":
            Ie("invalid", t),
            rn(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0);
            break;
        case "select":
            Ie("invalid", t);
            break;
        case "textarea":
            Ie("invalid", t),
            Ln(t, n.value, n.defaultValue, n.children)
        }
        l = n.children,
        typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Lm(t.textContent, l) ? (n.popover != null && (Ie("beforetoggle", t),
        Ie("toggle", t)),
        n.onScroll != null && Ie("scroll", t),
        n.onScrollEnd != null && Ie("scrollend", t),
        n.onClick != null && (t.onclick = Ol),
        t = !0) : t = !1,
        t || Ua(e, !0)
    }
    function jf(e) {
        for (Nl = e.return; Nl; )
            switch (Nl.tag) {
            case 5:
            case 31:
            case 13:
                En = !1;
                return;
            case 27:
            case 3:
                En = !0;
                return;
            default:
                Nl = Nl.return
            }
    }
    function Hi(e) {
        if (e !== Nl)
            return !1;
        if (!lt)
            return jf(e),
            lt = !0,
            !1;
        var t = e.tag, l;
        if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type,
        l = !(l !== "form" && l !== "button") || ru(e.type, e.memoizedProps)),
        l = !l),
        l && kt && Ua(e),
        jf(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(u(317));
            kt = Km(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(u(317));
            kt = Km(e)
        } else
            t === 27 ? (t = kt,
            Wa(e.type) ? (e = fu,
            fu = null,
            kt = e) : kt = t) : kt = Nl ? Mn(e.stateNode.nextSibling) : null;
        return !0
    }
    function bi() {
        kt = Nl = null,
        lt = !1
    }
    function Xc() {
        var e = Ba;
        return e !== null && (Il === null ? Il = e : Il.push.apply(Il, e),
        Ba = null),
        e
    }
    function vr(e) {
        Ba === null ? Ba = [e] : Ba.push(e)
    }
    var Vc = N(null)
      , xi = null
      , ma = null;
    function Ha(e, t, l) {
        W(Vc, t._currentValue),
        t._currentValue = l
    }
    function ha(e) {
        e._currentValue = Vc.current,
        Y(Vc)
    }
    function Gc(e, t, l) {
        for (; e !== null; ) {
            var n = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
            e === l)
                break;
            e = e.return
        }
    }
    function Qc(e, t, l, n) {
        var a = e.child;
        for (a !== null && (a.return = e); a !== null; ) {
            var i = a.dependencies;
            if (i !== null) {
                var c = a.child;
                i = i.firstContext;
                e: for (; i !== null; ) {
                    var f = i;
                    i = a;
                    for (var x = 0; x < t.length; x++)
                        if (f.context === t[x]) {
                            i.lanes |= l,
                            f = i.alternate,
                            f !== null && (f.lanes |= l),
                            Gc(i.return, l, e),
                            n || (c = null);
                            break e
                        }
                    i = f.next
                }
            } else if (a.tag === 18) {
                if (c = a.return,
                c === null)
                    throw Error(u(341));
                c.lanes |= l,
                i = c.alternate,
                i !== null && (i.lanes |= l),
                Gc(c, l, e),
                c = null
            } else
                c = a.child;
            if (c !== null)
                c.return = a;
            else
                for (c = a; c !== null; ) {
                    if (c === e) {
                        c = null;
                        break
                    }
                    if (a = c.sibling,
                    a !== null) {
                        a.return = c.return,
                        c = a;
                        break
                    }
                    c = c.return
                }
            a = c
        }
    }
    function Li(e, t, l, n) {
        e = null;
        for (var a = t, i = !1; a !== null; ) {
            if (!i) {
                if ((a.flags & 524288) !== 0)
                    i = !0;
                else if ((a.flags & 262144) !== 0)
                    break
            }
            if (a.tag === 10) {
                var c = a.alternate;
                if (c === null)
                    throw Error(u(387));
                if (c = c.memoizedProps,
                c !== null) {
                    var f = a.type;
                    cn(a.pendingProps.value, c.value) || (e !== null ? e.push(f) : e = [f])
                }
            } else if (a === Fe.current) {
                if (c = a.alternate,
                c === null)
                    throw Error(u(387));
                c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push($r) : e = [$r])
            }
            a = a.return
        }
        e !== null && Qc(t, e, l, n),
        t.flags |= 262144
    }
    function bs(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!cn(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function vi(e) {
        xi = e,
        ma = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function Al(e) {
        return Nf(xi, e)
    }
    function xs(e, t) {
        return xi === null && vi(e),
        Nf(e, t)
    }
    function Nf(e, t) {
        var l = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: l,
            next: null
        },
        ma === null) {
            if (e === null)
                throw Error(u(308));
            ma = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            ma = ma.next = t;
        return l
    }
    var zh = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(l, n) {
                e.push(n)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(l) {
                return l()
            })
        }
    }
      , _h = s.unstable_scheduleCallback
      , Ch = s.unstable_NormalPriority
      , ll = {
        $$typeof: I,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Zc() {
        return {
            controller: new zh,
            data: new Map,
            refCount: 0
        }
    }
    function wr(e) {
        e.refCount--,
        e.refCount === 0 && _h(Ch, function() {
            e.controller.abort()
        })
    }
    var Sr = null
      , $c = 0
      , qi = 0
      , Yi = null;
    function Oh(e, t) {
        if (Sr === null) {
            var l = Sr = [];
            $c = 0,
            qi = Wo(),
            Yi = {
                status: "pending",
                value: void 0,
                then: function(n) {
                    l.push(n)
                }
            }
        }
        return $c++,
        t.then(Af, Af),
        t
    }
    function Af() {
        if (--$c === 0 && Sr !== null) {
            Yi !== null && (Yi.status = "fulfilled");
            var e = Sr;
            Sr = null,
            qi = 0,
            Yi = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function Dh(e, t) {
        var l = []
          , n = {
            status: "pending",
            value: null,
            reason: null,
            then: function(a) {
                l.push(a)
            }
        };
        return e.then(function() {
            n.status = "fulfilled",
            n.value = t;
            for (var a = 0; a < l.length; a++)
                (0,
                l[a])(t)
        }, function(a) {
            for (n.status = "rejected",
            n.reason = a,
            a = 0; a < l.length; a++)
                (0,
                l[a])(void 0)
        }),
        n
    }
    var Ef = B.S;
    B.S = function(e, t) {
        om = Ke(),
        typeof t == "object" && t !== null && typeof t.then == "function" && Oh(e, t),
        Ef !== null && Ef(e, t)
    }
    ;
    var wi = N(null);
    function Kc() {
        var e = wi.current;
        return e !== null ? e : Mt.pooledCache
    }
    function vs(e, t) {
        t === null ? W(wi, wi.current) : W(wi, t.pool)
    }
    function Tf() {
        var e = Kc();
        return e === null ? null : {
            parent: ll._currentValue,
            pool: e
        }
    }
    var Xi = Error(u(460))
      , Jc = Error(u(474))
      , ws = Error(u(542))
      , Ss = {
        then: function() {}
    };
    function Mf(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function zf(e, t, l) {
        switch (l = e[l],
        l === void 0 ? e.push(t) : l !== t && (t.then(Ol, Ol),
        t = l),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            Cf(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(Ol, Ol);
            else {
                if (e = Mt,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(u(482));
                e = t,
                e.status = "pending",
                e.then(function(n) {
                    if (t.status === "pending") {
                        var a = t;
                        a.status = "fulfilled",
                        a.value = n
                    }
                }, function(n) {
                    if (t.status === "pending") {
                        var a = t;
                        a.status = "rejected",
                        a.reason = n
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                Cf(e),
                e
            }
            throw ji = t,
            Xi
        }
    }
    function Si(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (l) {
            throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ji = l,
            Xi) : l
        }
    }
    var ji = null;
    function _f() {
        if (ji === null)
            throw Error(u(459));
        var e = ji;
        return ji = null,
        e
    }
    function Cf(e) {
        if (e === Xi || e === ws)
            throw Error(u(483))
    }
    var Vi = null
      , jr = 0;
    function js(e) {
        var t = jr;
        return jr += 1,
        Vi === null && (Vi = []),
        zf(Vi, e, t)
    }
    function Nr(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function Ns(e, t) {
        throw t.$$typeof === Z ? Error(u(525)) : (e = Object.prototype.toString.call(t),
        Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Of(e) {
        function t(z, A) {
            if (e) {
                var O = z.deletions;
                O === null ? (z.deletions = [A],
                z.flags |= 16) : O.push(A)
            }
        }
        function l(z, A) {
            if (!e)
                return null;
            for (; A !== null; )
                t(z, A),
                A = A.sibling;
            return null
        }
        function n(z) {
            for (var A = new Map; z !== null; )
                z.key !== null ? A.set(z.key, z) : A.set(z.index, z),
                z = z.sibling;
            return A
        }
        function a(z, A) {
            return z = fa(z, A),
            z.index = 0,
            z.sibling = null,
            z
        }
        function i(z, A, O) {
            return z.index = O,
            e ? (O = z.alternate,
            O !== null ? (O = O.index,
            O < A ? (z.flags |= 67108866,
            A) : O) : (z.flags |= 67108866,
            A)) : (z.flags |= 1048576,
            A)
        }
        function c(z) {
            return e && z.alternate === null && (z.flags |= 67108866),
            z
        }
        function f(z, A, O, Q) {
            return A === null || A.tag !== 6 ? (A = Uc(O, z.mode, Q),
            A.return = z,
            A) : (A = a(A, O),
            A.return = z,
            A)
        }
        function x(z, A, O, Q) {
            var ve = O.type;
            return ve === q ? V(z, A, O.props.children, Q, O.key) : A !== null && (A.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === Ee && Si(ve) === A.type) ? (A = a(A, O.props),
            Nr(A, O),
            A.return = z,
            A) : (A = ys(O.type, O.key, O.props, null, z.mode, Q),
            Nr(A, O),
            A.return = z,
            A)
        }
        function D(z, A, O, Q) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== O.containerInfo || A.stateNode.implementation !== O.implementation ? (A = Hc(O, z.mode, Q),
            A.return = z,
            A) : (A = a(A, O.children || []),
            A.return = z,
            A)
        }
        function V(z, A, O, Q, ve) {
            return A === null || A.tag !== 7 ? (A = pi(O, z.mode, Q, ve),
            A.return = z,
            A) : (A = a(A, O),
            A.return = z,
            A)
        }
        function $(z, A, O) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
                return A = Uc("" + A, z.mode, O),
                A.return = z,
                A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case L:
                    return O = ys(A.type, A.key, A.props, null, z.mode, O),
                    Nr(O, A),
                    O.return = z,
                    O;
                case ae:
                    return A = Hc(A, z.mode, O),
                    A.return = z,
                    A;
                case Ee:
                    return A = Si(A),
                    $(z, A, O)
                }
                if ($e(A) || Le(A))
                    return A = pi(A, z.mode, O, null),
                    A.return = z,
                    A;
                if (typeof A.then == "function")
                    return $(z, js(A), O);
                if (A.$$typeof === I)
                    return $(z, xs(z, A), O);
                Ns(z, A)
            }
            return null
        }
        function k(z, A, O, Q) {
            var ve = A !== null ? A.key : null;
            if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
                return ve !== null ? null : f(z, A, "" + O, Q);
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case L:
                    return O.key === ve ? x(z, A, O, Q) : null;
                case ae:
                    return O.key === ve ? D(z, A, O, Q) : null;
                case Ee:
                    return O = Si(O),
                    k(z, A, O, Q)
                }
                if ($e(O) || Le(O))
                    return ve !== null ? null : V(z, A, O, Q, null);
                if (typeof O.then == "function")
                    return k(z, A, js(O), Q);
                if (O.$$typeof === I)
                    return k(z, A, xs(z, O), Q);
                Ns(z, O)
            }
            return null
        }
        function H(z, A, O, Q, ve) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
                return z = z.get(O) || null,
                f(A, z, "" + Q, ve);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                case L:
                    return z = z.get(Q.key === null ? O : Q.key) || null,
                    x(A, z, Q, ve);
                case ae:
                    return z = z.get(Q.key === null ? O : Q.key) || null,
                    D(A, z, Q, ve);
                case Ee:
                    return Q = Si(Q),
                    H(z, A, O, Q, ve)
                }
                if ($e(Q) || Le(Q))
                    return z = z.get(O) || null,
                    V(A, z, Q, ve, null);
                if (typeof Q.then == "function")
                    return H(z, A, O, js(Q), ve);
                if (Q.$$typeof === I)
                    return H(z, A, O, xs(A, Q), ve);
                Ns(A, Q)
            }
            return null
        }
        function he(z, A, O, Q) {
            for (var ve = null, st = null, ye = A, Ge = A = 0, et = null; ye !== null && Ge < O.length; Ge++) {
                ye.index > Ge ? (et = ye,
                ye = null) : et = ye.sibling;
                var ct = k(z, ye, O[Ge], Q);
                if (ct === null) {
                    ye === null && (ye = et);
                    break
                }
                e && ye && ct.alternate === null && t(z, ye),
                A = i(ct, A, Ge),
                st === null ? ve = ct : st.sibling = ct,
                st = ct,
                ye = et
            }
            if (Ge === O.length)
                return l(z, ye),
                lt && da(z, Ge),
                ve;
            if (ye === null) {
                for (; Ge < O.length; Ge++)
                    ye = $(z, O[Ge], Q),
                    ye !== null && (A = i(ye, A, Ge),
                    st === null ? ve = ye : st.sibling = ye,
                    st = ye);
                return lt && da(z, Ge),
                ve
            }
            for (ye = n(ye); Ge < O.length; Ge++)
                et = H(ye, z, Ge, O[Ge], Q),
                et !== null && (e && et.alternate !== null && ye.delete(et.key === null ? Ge : et.key),
                A = i(et, A, Ge),
                st === null ? ve = et : st.sibling = et,
                st = et);
            return e && ye.forEach(function(li) {
                return t(z, li)
            }),
            lt && da(z, Ge),
            ve
        }
        function Ae(z, A, O, Q) {
            if (O == null)
                throw Error(u(151));
            for (var ve = null, st = null, ye = A, Ge = A = 0, et = null, ct = O.next(); ye !== null && !ct.done; Ge++,
            ct = O.next()) {
                ye.index > Ge ? (et = ye,
                ye = null) : et = ye.sibling;
                var li = k(z, ye, ct.value, Q);
                if (li === null) {
                    ye === null && (ye = et);
                    break
                }
                e && ye && li.alternate === null && t(z, ye),
                A = i(li, A, Ge),
                st === null ? ve = li : st.sibling = li,
                st = li,
                ye = et
            }
            if (ct.done)
                return l(z, ye),
                lt && da(z, Ge),
                ve;
            if (ye === null) {
                for (; !ct.done; Ge++,
                ct = O.next())
                    ct = $(z, ct.value, Q),
                    ct !== null && (A = i(ct, A, Ge),
                    st === null ? ve = ct : st.sibling = ct,
                    st = ct);
                return lt && da(z, Ge),
                ve
            }
            for (ye = n(ye); !ct.done; Ge++,
            ct = O.next())
                ct = H(ye, z, Ge, ct.value, Q),
                ct !== null && (e && ct.alternate !== null && ye.delete(ct.key === null ? Ge : ct.key),
                A = i(ct, A, Ge),
                st === null ? ve = ct : st.sibling = ct,
                st = ct);
            return e && ye.forEach(function(Gg) {
                return t(z, Gg)
            }),
            lt && da(z, Ge),
            ve
        }
        function Nt(z, A, O, Q) {
            if (typeof O == "object" && O !== null && O.type === q && O.key === null && (O = O.props.children),
            typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case L:
                    e: {
                        for (var ve = O.key; A !== null; ) {
                            if (A.key === ve) {
                                if (ve = O.type,
                                ve === q) {
                                    if (A.tag === 7) {
                                        l(z, A.sibling),
                                        Q = a(A, O.props.children),
                                        Q.return = z,
                                        z = Q;
                                        break e
                                    }
                                } else if (A.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === Ee && Si(ve) === A.type) {
                                    l(z, A.sibling),
                                    Q = a(A, O.props),
                                    Nr(Q, O),
                                    Q.return = z,
                                    z = Q;
                                    break e
                                }
                                l(z, A);
                                break
                            } else
                                t(z, A);
                            A = A.sibling
                        }
                        O.type === q ? (Q = pi(O.props.children, z.mode, Q, O.key),
                        Q.return = z,
                        z = Q) : (Q = ys(O.type, O.key, O.props, null, z.mode, Q),
                        Nr(Q, O),
                        Q.return = z,
                        z = Q)
                    }
                    return c(z);
                case ae:
                    e: {
                        for (ve = O.key; A !== null; ) {
                            if (A.key === ve)
                                if (A.tag === 4 && A.stateNode.containerInfo === O.containerInfo && A.stateNode.implementation === O.implementation) {
                                    l(z, A.sibling),
                                    Q = a(A, O.children || []),
                                    Q.return = z,
                                    z = Q;
                                    break e
                                } else {
                                    l(z, A);
                                    break
                                }
                            else
                                t(z, A);
                            A = A.sibling
                        }
                        Q = Hc(O, z.mode, Q),
                        Q.return = z,
                        z = Q
                    }
                    return c(z);
                case Ee:
                    return O = Si(O),
                    Nt(z, A, O, Q)
                }
                if ($e(O))
                    return he(z, A, O, Q);
                if (Le(O)) {
                    if (ve = Le(O),
                    typeof ve != "function")
                        throw Error(u(150));
                    return O = ve.call(O),
                    Ae(z, A, O, Q)
                }
                if (typeof O.then == "function")
                    return Nt(z, A, js(O), Q);
                if (O.$$typeof === I)
                    return Nt(z, A, xs(z, O), Q);
                Ns(z, O)
            }
            return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O,
            A !== null && A.tag === 6 ? (l(z, A.sibling),
            Q = a(A, O),
            Q.return = z,
            z = Q) : (l(z, A),
            Q = Uc(O, z.mode, Q),
            Q.return = z,
            z = Q),
            c(z)) : l(z, A)
        }
        return function(z, A, O, Q) {
            try {
                jr = 0;
                var ve = Nt(z, A, O, Q);
                return Vi = null,
                ve
            } catch (ye) {
                if (ye === Xi || ye === ws)
                    throw ye;
                var st = on(29, ye, null, z.mode);
                return st.lanes = Q,
                st.return = z,
                st
            }
        }
    }
    var Ni = Of(!0)
      , Df = Of(!1)
      , La = !1;
    function Fc(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Wc(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function qa(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Ya(e, t, l) {
        var n = e.updateQueue;
        if (n === null)
            return null;
        if (n = n.shared,
        (mt & 2) !== 0) {
            var a = n.pending;
            return a === null ? t.next = t : (t.next = a.next,
            a.next = t),
            n.pending = t,
            t = gs(e),
            yf(e, null, l),
            t
        }
        return hs(e, n, t, l),
        gs(e)
    }
    function Ar(e, t, l) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (l & 4194048) !== 0)) {
            var n = t.lanes;
            n &= e.pendingLanes,
            l |= n,
            t.lanes = l,
            Te(e, l)
        }
    }
    function Ic(e, t) {
        var l = e.updateQueue
          , n = e.alternate;
        if (n !== null && (n = n.updateQueue,
        l === n)) {
            var a = null
              , i = null;
            if (l = l.firstBaseUpdate,
            l !== null) {
                do {
                    var c = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    i === null ? a = i = c : i = i.next = c,
                    l = l.next
                } while (l !== null);
                i === null ? a = i = t : i = i.next = t
            } else
                a = i = t;
            l = {
                baseState: n.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: n.shared,
                callbacks: n.callbacks
            },
            e.updateQueue = l;
            return
        }
        e = l.lastBaseUpdate,
        e === null ? l.firstBaseUpdate = t : e.next = t,
        l.lastBaseUpdate = t
    }
    var Pc = !1;
    function Er() {
        if (Pc) {
            var e = Yi;
            if (e !== null)
                throw e
        }
    }
    function Tr(e, t, l, n) {
        Pc = !1;
        var a = e.updateQueue;
        La = !1;
        var i = a.firstBaseUpdate
          , c = a.lastBaseUpdate
          , f = a.shared.pending;
        if (f !== null) {
            a.shared.pending = null;
            var x = f
              , D = x.next;
            x.next = null,
            c === null ? i = D : c.next = D,
            c = x;
            var V = e.alternate;
            V !== null && (V = V.updateQueue,
            f = V.lastBaseUpdate,
            f !== c && (f === null ? V.firstBaseUpdate = D : f.next = D,
            V.lastBaseUpdate = x))
        }
        if (i !== null) {
            var $ = a.baseState;
            c = 0,
            V = D = x = null,
            f = i;
            do {
                var k = f.lane & -536870913
                  , H = k !== f.lane;
                if (H ? (Pe & k) === k : (n & k) === k) {
                    k !== 0 && k === qi && (Pc = !0),
                    V !== null && (V = V.next = {
                        lane: 0,
                        tag: f.tag,
                        payload: f.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var he = e
                          , Ae = f;
                        k = t;
                        var Nt = l;
                        switch (Ae.tag) {
                        case 1:
                            if (he = Ae.payload,
                            typeof he == "function") {
                                $ = he.call(Nt, $, k);
                                break e
                            }
                            $ = he;
                            break e;
                        case 3:
                            he.flags = he.flags & -65537 | 128;
                        case 0:
                            if (he = Ae.payload,
                            k = typeof he == "function" ? he.call(Nt, $, k) : he,
                            k == null)
                                break e;
                            $ = C({}, $, k);
                            break e;
                        case 2:
                            La = !0
                        }
                    }
                    k = f.callback,
                    k !== null && (e.flags |= 64,
                    H && (e.flags |= 8192),
                    H = a.callbacks,
                    H === null ? a.callbacks = [k] : H.push(k))
                } else
                    H = {
                        lane: k,
                        tag: f.tag,
                        payload: f.payload,
                        callback: f.callback,
                        next: null
                    },
                    V === null ? (D = V = H,
                    x = $) : V = V.next = H,
                    c |= k;
                if (f = f.next,
                f === null) {
                    if (f = a.shared.pending,
                    f === null)
                        break;
                    H = f,
                    f = H.next,
                    H.next = null,
                    a.lastBaseUpdate = H,
                    a.shared.pending = null
                }
            } while (!0);
            V === null && (x = $),
            a.baseState = x,
            a.firstBaseUpdate = D,
            a.lastBaseUpdate = V,
            i === null && (a.shared.lanes = 0),
            Za |= c,
            e.lanes = c,
            e.memoizedState = $
        }
    }
    function kf(e, t) {
        if (typeof e != "function")
            throw Error(u(191, e));
        e.call(t)
    }
    function Rf(e, t) {
        var l = e.callbacks;
        if (l !== null)
            for (e.callbacks = null,
            e = 0; e < l.length; e++)
                kf(l[e], t)
    }
    var Gi = N(null)
      , As = N(0);
    function Bf(e, t) {
        e = ja,
        W(As, e),
        W(Gi, t),
        ja = e | t.baseLanes
    }
    function eo() {
        W(As, ja),
        W(Gi, Gi.current)
    }
    function to() {
        ja = As.current,
        Y(Gi),
        Y(As)
    }
    var un = N(null)
      , Tn = null;
    function Xa(e) {
        var t = e.alternate;
        W(Ft, Ft.current & 1),
        W(un, e),
        Tn === null && (t === null || Gi.current !== null || t.memoizedState !== null) && (Tn = e)
    }
    function lo(e) {
        W(Ft, Ft.current),
        W(un, e),
        Tn === null && (Tn = e)
    }
    function Uf(e) {
        e.tag === 22 ? (W(Ft, Ft.current),
        W(un, e),
        Tn === null && (Tn = e)) : Va()
    }
    function Va() {
        W(Ft, Ft.current),
        W(un, un.current)
    }
    function fn(e) {
        Y(un),
        Tn === e && (Tn = null),
        Y(Ft)
    }
    var Ft = N(0);
    function Es(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l !== null && (l = l.dehydrated,
                l === null || ou(l) || uu(l)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var ga = 0
      , Ye = null
      , St = null
      , nl = null
      , Ts = !1
      , Qi = !1
      , Ai = !1
      , Ms = 0
      , Mr = 0
      , Zi = null
      , kh = 0;
    function Gt() {
        throw Error(u(321))
    }
    function no(e, t) {
        if (t === null)
            return !1;
        for (var l = 0; l < t.length && l < e.length; l++)
            if (!cn(e[l], t[l]))
                return !1;
        return !0
    }
    function ao(e, t, l, n, a, i) {
        return ga = i,
        Ye = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        B.H = e === null || e.memoizedState === null ? vd : vo,
        Ai = !1,
        i = l(n, a),
        Ai = !1,
        Qi && (i = Lf(t, l, n, a)),
        Hf(e),
        i
    }
    function Hf(e) {
        B.H = Cr;
        var t = St !== null && St.next !== null;
        if (ga = 0,
        nl = St = Ye = null,
        Ts = !1,
        Mr = 0,
        Zi = null,
        t)
            throw Error(u(300));
        e === null || al || (e = e.dependencies,
        e !== null && bs(e) && (al = !0))
    }
    function Lf(e, t, l, n) {
        Ye = e;
        var a = 0;
        do {
            if (Qi && (Zi = null),
            Mr = 0,
            Qi = !1,
            25 <= a)
                throw Error(u(301));
            if (a += 1,
            nl = St = null,
            e.updateQueue != null) {
                var i = e.updateQueue;
                i.lastEffect = null,
                i.events = null,
                i.stores = null,
                i.memoCache != null && (i.memoCache.index = 0)
            }
            B.H = wd,
            i = t(l, n)
        } while (Qi);
        return i
    }
    function Rh() {
        var e = B.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? zr(t) : t,
        e = e.useState()[0],
        (St !== null ? St.memoizedState : null) !== e && (Ye.flags |= 1024),
        t
    }
    function io() {
        var e = Ms !== 0;
        return Ms = 0,
        e
    }
    function ro(e, t, l) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~l
    }
    function so(e) {
        if (Ts) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Ts = !1
        }
        ga = 0,
        nl = St = Ye = null,
        Qi = !1,
        Mr = Ms = 0,
        Zi = null
    }
    function Xl() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return nl === null ? Ye.memoizedState = nl = e : nl = nl.next = e,
        nl
    }
    function Wt() {
        if (St === null) {
            var e = Ye.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = St.next;
        var t = nl === null ? Ye.memoizedState : nl.next;
        if (t !== null)
            nl = t,
            St = e;
        else {
            if (e === null)
                throw Ye.alternate === null ? Error(u(467)) : Error(u(310));
            St = e,
            e = {
                memoizedState: St.memoizedState,
                baseState: St.baseState,
                baseQueue: St.baseQueue,
                queue: St.queue,
                next: null
            },
            nl === null ? Ye.memoizedState = nl = e : nl = nl.next = e
        }
        return nl
    }
    function zs() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function zr(e) {
        var t = Mr;
        return Mr += 1,
        Zi === null && (Zi = []),
        e = zf(Zi, e, t),
        t = Ye,
        (nl === null ? t.memoizedState : nl.next) === null && (t = t.alternate,
        B.H = t === null || t.memoizedState === null ? vd : vo),
        e
    }
    function _s(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return zr(e);
            if (e.$$typeof === I)
                return Al(e)
        }
        throw Error(u(438, String(e)))
    }
    function co(e) {
        var t = null
          , l = Ye.updateQueue;
        if (l !== null && (t = l.memoCache),
        t == null) {
            var n = Ye.alternate;
            n !== null && (n = n.updateQueue,
            n !== null && (n = n.memoCache,
            n != null && (t = {
                data: n.data.map(function(a) {
                    return a.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        l === null && (l = zs(),
        Ye.updateQueue = l),
        l.memoCache = t,
        l = t.data[t.index],
        l === void 0)
            for (l = t.data[t.index] = Array(e),
            n = 0; n < e; n++)
                l[n] = ze;
        return t.index++,
        l
    }
    function ya(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Cs(e) {
        var t = Wt();
        return oo(t, St, e)
    }
    function oo(e, t, l) {
        var n = e.queue;
        if (n === null)
            throw Error(u(311));
        n.lastRenderedReducer = l;
        var a = e.baseQueue
          , i = n.pending;
        if (i !== null) {
            if (a !== null) {
                var c = a.next;
                a.next = i.next,
                i.next = c
            }
            t.baseQueue = a = i,
            n.pending = null
        }
        if (i = e.baseState,
        a === null)
            e.memoizedState = i;
        else {
            t = a.next;
            var f = c = null
              , x = null
              , D = t
              , V = !1;
            do {
                var $ = D.lane & -536870913;
                if ($ !== D.lane ? (Pe & $) === $ : (ga & $) === $) {
                    var k = D.revertLane;
                    if (k === 0)
                        x !== null && (x = x.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: D.action,
                            hasEagerState: D.hasEagerState,
                            eagerState: D.eagerState,
                            next: null
                        }),
                        $ === qi && (V = !0);
                    else if ((ga & k) === k) {
                        D = D.next,
                        k === qi && (V = !0);
                        continue
                    } else
                        $ = {
                            lane: 0,
                            revertLane: D.revertLane,
                            gesture: null,
                            action: D.action,
                            hasEagerState: D.hasEagerState,
                            eagerState: D.eagerState,
                            next: null
                        },
                        x === null ? (f = x = $,
                        c = i) : x = x.next = $,
                        Ye.lanes |= k,
                        Za |= k;
                    $ = D.action,
                    Ai && l(i, $),
                    i = D.hasEagerState ? D.eagerState : l(i, $)
                } else
                    k = {
                        lane: $,
                        revertLane: D.revertLane,
                        gesture: D.gesture,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    },
                    x === null ? (f = x = k,
                    c = i) : x = x.next = k,
                    Ye.lanes |= $,
                    Za |= $;
                D = D.next
            } while (D !== null && D !== t);
            if (x === null ? c = i : x.next = f,
            !cn(i, e.memoizedState) && (al = !0,
            V && (l = Yi,
            l !== null)))
                throw l;
            e.memoizedState = i,
            e.baseState = c,
            e.baseQueue = x,
            n.lastRenderedState = i
        }
        return a === null && (n.lanes = 0),
        [e.memoizedState, n.dispatch]
    }
    function uo(e) {
        var t = Wt()
          , l = t.queue;
        if (l === null)
            throw Error(u(311));
        l.lastRenderedReducer = e;
        var n = l.dispatch
          , a = l.pending
          , i = t.memoizedState;
        if (a !== null) {
            l.pending = null;
            var c = a = a.next;
            do
                i = e(i, c.action),
                c = c.next;
            while (c !== a);
            cn(i, t.memoizedState) || (al = !0),
            t.memoizedState = i,
            t.baseQueue === null && (t.baseState = i),
            l.lastRenderedState = i
        }
        return [i, n]
    }
    function qf(e, t, l) {
        var n = Ye
          , a = Wt()
          , i = lt;
        if (i) {
            if (l === void 0)
                throw Error(u(407));
            l = l()
        } else
            l = t();
        var c = !cn((St || a).memoizedState, l);
        if (c && (a.memoizedState = l,
        al = !0),
        a = a.queue,
        ho(Vf.bind(null, n, a, e), [e]),
        a.getSnapshot !== t || c || nl !== null && nl.memoizedState.tag & 1) {
            if (n.flags |= 2048,
            $i(9, {
                destroy: void 0
            }, Xf.bind(null, n, a, l, t), null),
            Mt === null)
                throw Error(u(349));
            i || (ga & 127) !== 0 || Yf(n, t, l)
        }
        return l
    }
    function Yf(e, t, l) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: l
        },
        t = Ye.updateQueue,
        t === null ? (t = zs(),
        Ye.updateQueue = t,
        t.stores = [e]) : (l = t.stores,
        l === null ? t.stores = [e] : l.push(e))
    }
    function Xf(e, t, l, n) {
        t.value = l,
        t.getSnapshot = n,
        Gf(t) && Qf(e)
    }
    function Vf(e, t, l) {
        return l(function() {
            Gf(t) && Qf(e)
        })
    }
    function Gf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var l = t();
            return !cn(e, l)
        } catch {
            return !0
        }
    }
    function Qf(e) {
        var t = yi(e, 2);
        t !== null && Pl(t, e, 2)
    }
    function fo(e) {
        var t = Xl();
        if (typeof e == "function") {
            var l = e;
            if (e = l(),
            Ai) {
                It(!0);
                try {
                    l()
                } finally {
                    It(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ya,
            lastRenderedState: e
        },
        t
    }
    function Zf(e, t, l, n) {
        return e.baseState = l,
        oo(e, St, typeof n == "function" ? n : ya)
    }
    function Bh(e, t, l, n, a) {
        if (ks(e))
            throw Error(u(485));
        if (e = t.action,
        e !== null) {
            var i = {
                payload: a,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(c) {
                    i.listeners.push(c)
                }
            };
            B.T !== null ? l(!0) : i.isTransition = !1,
            n(i),
            l = t.pending,
            l === null ? (i.next = t.pending = i,
            $f(t, i)) : (i.next = l.next,
            t.pending = l.next = i)
        }
    }
    function $f(e, t) {
        var l = t.action
          , n = t.payload
          , a = e.state;
        if (t.isTransition) {
            var i = B.T
              , c = {};
            B.T = c;
            try {
                var f = l(a, n)
                  , x = B.S;
                x !== null && x(c, f),
                Kf(e, t, f)
            } catch (D) {
                mo(e, t, D)
            } finally {
                i !== null && c.types !== null && (i.types = c.types),
                B.T = i
            }
        } else
            try {
                i = l(a, n),
                Kf(e, t, i)
            } catch (D) {
                mo(e, t, D)
            }
    }
    function Kf(e, t, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
            Jf(e, t, n)
        }, function(n) {
            return mo(e, t, n)
        }) : Jf(e, t, l)
    }
    function Jf(e, t, l) {
        t.status = "fulfilled",
        t.value = l,
        Ff(t),
        e.state = l,
        t = e.pending,
        t !== null && (l = t.next,
        l === t ? e.pending = null : (l = l.next,
        t.next = l,
        $f(e, l)))
    }
    function mo(e, t, l) {
        var n = e.pending;
        if (e.pending = null,
        n !== null) {
            n = n.next;
            do
                t.status = "rejected",
                t.reason = l,
                Ff(t),
                t = t.next;
            while (t !== n)
        }
        e.action = null
    }
    function Ff(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function Wf(e, t) {
        return t
    }
    function If(e, t) {
        if (lt) {
            var l = Mt.formState;
            if (l !== null) {
                e: {
                    var n = Ye;
                    if (lt) {
                        if (kt) {
                            t: {
                                for (var a = kt, i = En; a.nodeType !== 8; ) {
                                    if (!i) {
                                        a = null;
                                        break t
                                    }
                                    if (a = Mn(a.nextSibling),
                                    a === null) {
                                        a = null;
                                        break t
                                    }
                                }
                                i = a.data,
                                a = i === "F!" || i === "F" ? a : null
                            }
                            if (a) {
                                kt = Mn(a.nextSibling),
                                n = a.data === "F!";
                                break e
                            }
                        }
                        Ua(n)
                    }
                    n = !1
                }
                n && (t = l[0])
            }
        }
        return l = Xl(),
        l.memoizedState = l.baseState = t,
        n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Wf,
            lastRenderedState: t
        },
        l.queue = n,
        l = pd.bind(null, Ye, n),
        n.dispatch = l,
        n = fo(!1),
        i = xo.bind(null, Ye, !1, n.queue),
        n = Xl(),
        a = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        n.queue = a,
        l = Bh.bind(null, Ye, a, i, l),
        a.dispatch = l,
        n.memoizedState = e,
        [t, l, !1]
    }
    function Pf(e) {
        var t = Wt();
        return ed(t, St, e)
    }
    function ed(e, t, l) {
        if (t = oo(e, t, Wf)[0],
        e = Cs(ya)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var n = zr(t)
            } catch (c) {
                throw c === Xi ? ws : c
            }
        else
            n = t;
        t = Wt();
        var a = t.queue
          , i = a.dispatch;
        return l !== t.memoizedState && (Ye.flags |= 2048,
        $i(9, {
            destroy: void 0
        }, Uh.bind(null, a, l), null)),
        [n, i, e]
    }
    function Uh(e, t) {
        e.action = t
    }
    function td(e) {
        var t = Wt()
          , l = St;
        if (l !== null)
            return ed(t, l, e);
        Wt(),
        t = t.memoizedState,
        l = Wt();
        var n = l.queue.dispatch;
        return l.memoizedState = e,
        [t, n, !1]
    }
    function $i(e, t, l, n) {
        return e = {
            tag: e,
            create: l,
            deps: n,
            inst: t,
            next: null
        },
        t = Ye.updateQueue,
        t === null && (t = zs(),
        Ye.updateQueue = t),
        l = t.lastEffect,
        l === null ? t.lastEffect = e.next = e : (n = l.next,
        l.next = e,
        e.next = n,
        t.lastEffect = e),
        e
    }
    function ld() {
        return Wt().memoizedState
    }
    function Os(e, t, l, n) {
        var a = Xl();
        Ye.flags |= e,
        a.memoizedState = $i(1 | t, {
            destroy: void 0
        }, l, n === void 0 ? null : n)
    }
    function Ds(e, t, l, n) {
        var a = Wt();
        n = n === void 0 ? null : n;
        var i = a.memoizedState.inst;
        St !== null && n !== null && no(n, St.memoizedState.deps) ? a.memoizedState = $i(t, i, l, n) : (Ye.flags |= e,
        a.memoizedState = $i(1 | t, i, l, n))
    }
    function nd(e, t) {
        Os(8390656, 8, e, t)
    }
    function ho(e, t) {
        Ds(2048, 8, e, t)
    }
    function Hh(e) {
        Ye.flags |= 4;
        var t = Ye.updateQueue;
        if (t === null)
            t = zs(),
            Ye.updateQueue = t,
            t.events = [e];
        else {
            var l = t.events;
            l === null ? t.events = [e] : l.push(e)
        }
    }
    function ad(e) {
        var t = Wt().memoizedState;
        return Hh({
            ref: t,
            nextImpl: e
        }),
        function() {
            if ((mt & 2) !== 0)
                throw Error(u(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function id(e, t) {
        return Ds(4, 2, e, t)
    }
    function rd(e, t) {
        return Ds(4, 4, e, t)
    }
    function sd(e, t) {
        if (typeof t == "function") {
            e = e();
            var l = t(e);
            return function() {
                typeof l == "function" ? l() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function cd(e, t, l) {
        l = l != null ? l.concat([e]) : null,
        Ds(4, 4, sd.bind(null, t, e), l)
    }
    function go() {}
    function od(e, t) {
        var l = Wt();
        t = t === void 0 ? null : t;
        var n = l.memoizedState;
        return t !== null && no(t, n[1]) ? n[0] : (l.memoizedState = [e, t],
        e)
    }
    function ud(e, t) {
        var l = Wt();
        t = t === void 0 ? null : t;
        var n = l.memoizedState;
        if (t !== null && no(t, n[1]))
            return n[0];
        if (n = e(),
        Ai) {
            It(!0);
            try {
                e()
            } finally {
                It(!1)
            }
        }
        return l.memoizedState = [n, t],
        n
    }
    function yo(e, t, l) {
        return l === void 0 || (ga & 1073741824) !== 0 && (Pe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l,
        e = fm(),
        Ye.lanes |= e,
        Za |= e,
        l)
    }
    function fd(e, t, l, n) {
        return cn(l, t) ? l : Gi.current !== null ? (e = yo(e, l, n),
        cn(e, t) || (al = !0),
        e) : (ga & 42) === 0 || (ga & 1073741824) !== 0 && (Pe & 261930) === 0 ? (al = !0,
        e.memoizedState = l) : (e = fm(),
        Ye.lanes |= e,
        Za |= e,
        t)
    }
    function dd(e, t, l, n, a) {
        var i = P.p;
        P.p = i !== 0 && 8 > i ? i : 8;
        var c = B.T
          , f = {};
        B.T = f,
        xo(e, !1, t, l);
        try {
            var x = a()
              , D = B.S;
            if (D !== null && D(f, x),
            x !== null && typeof x == "object" && typeof x.then == "function") {
                var V = Dh(x, n);
                _r(e, t, V, hn(e))
            } else
                _r(e, t, n, hn(e))
        } catch ($) {
            _r(e, t, {
                then: function() {},
                status: "rejected",
                reason: $
            }, hn())
        } finally {
            P.p = i,
            c !== null && f.types !== null && (c.types = f.types),
            B.T = c
        }
    }
    function Lh() {}
    function po(e, t, l, n) {
        if (e.tag !== 5)
            throw Error(u(476));
        var a = md(e).queue;
        dd(e, a, t, fe, l === null ? Lh : function() {
            return hd(e),
            l(n)
        }
        )
    }
    function md(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: fe,
            baseState: fe,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ya,
                lastRenderedState: fe
            },
            next: null
        };
        var l = {};
        return t.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ya,
                lastRenderedState: l
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function hd(e) {
        var t = md(e);
        t.next === null && (t = e.alternate.memoizedState),
        _r(e, t.next.queue, {}, hn())
    }
    function bo() {
        return Al($r)
    }
    function gd() {
        return Wt().memoizedState
    }
    function yd() {
        return Wt().memoizedState
    }
    function qh(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var l = hn();
                e = qa(l);
                var n = Ya(t, e, l);
                n !== null && (Pl(n, t, l),
                Ar(n, t, l)),
                t = {
                    cache: Zc()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function Yh(e, t, l) {
        var n = hn();
        l = {
            lane: n,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ks(e) ? bd(t, l) : (l = Rc(e, t, l, n),
        l !== null && (Pl(l, e, n),
        xd(l, t, n)))
    }
    function pd(e, t, l) {
        var n = hn();
        _r(e, t, l, n)
    }
    function _r(e, t, l, n) {
        var a = {
            lane: n,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ks(e))
            bd(t, a);
        else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
            i !== null))
                try {
                    var c = t.lastRenderedState
                      , f = i(c, l);
                    if (a.hasEagerState = !0,
                    a.eagerState = f,
                    cn(f, c))
                        return hs(e, t, a, 0),
                        Mt === null && ms(),
                        !1
                } catch {}
            if (l = Rc(e, t, a, n),
            l !== null)
                return Pl(l, e, n),
                xd(l, t, n),
                !0
        }
        return !1
    }
    function xo(e, t, l, n) {
        if (n = {
            lane: 2,
            revertLane: Wo(),
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ks(e)) {
            if (t)
                throw Error(u(479))
        } else
            t = Rc(e, l, n, 2),
            t !== null && Pl(t, e, 2)
    }
    function ks(e) {
        var t = e.alternate;
        return e === Ye || t !== null && t === Ye
    }
    function bd(e, t) {
        Qi = Ts = !0;
        var l = e.pending;
        l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        e.pending = t
    }
    function xd(e, t, l) {
        if ((l & 4194048) !== 0) {
            var n = t.lanes;
            n &= e.pendingLanes,
            l |= n,
            t.lanes = l,
            Te(e, l)
        }
    }
    var Cr = {
        readContext: Al,
        use: _s,
        useCallback: Gt,
        useContext: Gt,
        useEffect: Gt,
        useImperativeHandle: Gt,
        useLayoutEffect: Gt,
        useInsertionEffect: Gt,
        useMemo: Gt,
        useReducer: Gt,
        useRef: Gt,
        useState: Gt,
        useDebugValue: Gt,
        useDeferredValue: Gt,
        useTransition: Gt,
        useSyncExternalStore: Gt,
        useId: Gt,
        useHostTransitionStatus: Gt,
        useFormState: Gt,
        useActionState: Gt,
        useOptimistic: Gt,
        useMemoCache: Gt,
        useCacheRefresh: Gt
    };
    Cr.useEffectEvent = Gt;
    var vd = {
        readContext: Al,
        use: _s,
        useCallback: function(e, t) {
            return Xl().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: Al,
        useEffect: nd,
        useImperativeHandle: function(e, t, l) {
            l = l != null ? l.concat([e]) : null,
            Os(4194308, 4, sd.bind(null, t, e), l)
        },
        useLayoutEffect: function(e, t) {
            return Os(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            Os(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var l = Xl();
            t = t === void 0 ? null : t;
            var n = e();
            if (Ai) {
                It(!0);
                try {
                    e()
                } finally {
                    It(!1)
                }
            }
            return l.memoizedState = [n, t],
            n
        },
        useReducer: function(e, t, l) {
            var n = Xl();
            if (l !== void 0) {
                var a = l(t);
                if (Ai) {
                    It(!0);
                    try {
                        l(t)
                    } finally {
                        It(!1)
                    }
                }
            } else
                a = t;
            return n.memoizedState = n.baseState = a,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: a
            },
            n.queue = e,
            e = e.dispatch = Yh.bind(null, Ye, e),
            [n.memoizedState, e]
        },
        useRef: function(e) {
            var t = Xl();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = fo(e);
            var t = e.queue
              , l = pd.bind(null, Ye, t);
            return t.dispatch = l,
            [e.memoizedState, l]
        },
        useDebugValue: go,
        useDeferredValue: function(e, t) {
            var l = Xl();
            return yo(l, e, t)
        },
        useTransition: function() {
            var e = fo(!1);
            return e = dd.bind(null, Ye, e.queue, !0, !1),
            Xl().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, l) {
            var n = Ye
              , a = Xl();
            if (lt) {
                if (l === void 0)
                    throw Error(u(407));
                l = l()
            } else {
                if (l = t(),
                Mt === null)
                    throw Error(u(349));
                (Pe & 127) !== 0 || Yf(n, t, l)
            }
            a.memoizedState = l;
            var i = {
                value: l,
                getSnapshot: t
            };
            return a.queue = i,
            nd(Vf.bind(null, n, i, e), [e]),
            n.flags |= 2048,
            $i(9, {
                destroy: void 0
            }, Xf.bind(null, n, i, l, t), null),
            l
        },
        useId: function() {
            var e = Xl()
              , t = Mt.identifierPrefix;
            if (lt) {
                var l = ta
                  , n = ea;
                l = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + l,
                t = "_" + t + "R_" + l,
                l = Ms++,
                0 < l && (t += "H" + l.toString(32)),
                t += "_"
            } else
                l = kh++,
                t = "_" + t + "r_" + l.toString(32) + "_";
            return e.memoizedState = t
        },
        useHostTransitionStatus: bo,
        useFormState: If,
        useActionState: If,
        useOptimistic: function(e) {
            var t = Xl();
            t.memoizedState = t.baseState = e;
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = l,
            t = xo.bind(null, Ye, !0, l),
            l.dispatch = t,
            [e, t]
        },
        useMemoCache: co,
        useCacheRefresh: function() {
            return Xl().memoizedState = qh.bind(null, Ye)
        },
        useEffectEvent: function(e) {
            var t = Xl()
              , l = {
                impl: e
            };
            return t.memoizedState = l,
            function() {
                if ((mt & 2) !== 0)
                    throw Error(u(440));
                return l.impl.apply(void 0, arguments)
            }
        }
    }
      , vo = {
        readContext: Al,
        use: _s,
        useCallback: od,
        useContext: Al,
        useEffect: ho,
        useImperativeHandle: cd,
        useInsertionEffect: id,
        useLayoutEffect: rd,
        useMemo: ud,
        useReducer: Cs,
        useRef: ld,
        useState: function() {
            return Cs(ya)
        },
        useDebugValue: go,
        useDeferredValue: function(e, t) {
            var l = Wt();
            return fd(l, St.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Cs(ya)[0]
              , t = Wt().memoizedState;
            return [typeof e == "boolean" ? e : zr(e), t]
        },
        useSyncExternalStore: qf,
        useId: gd,
        useHostTransitionStatus: bo,
        useFormState: Pf,
        useActionState: Pf,
        useOptimistic: function(e, t) {
            var l = Wt();
            return Zf(l, St, e, t)
        },
        useMemoCache: co,
        useCacheRefresh: yd
    };
    vo.useEffectEvent = ad;
    var wd = {
        readContext: Al,
        use: _s,
        useCallback: od,
        useContext: Al,
        useEffect: ho,
        useImperativeHandle: cd,
        useInsertionEffect: id,
        useLayoutEffect: rd,
        useMemo: ud,
        useReducer: uo,
        useRef: ld,
        useState: function() {
            return uo(ya)
        },
        useDebugValue: go,
        useDeferredValue: function(e, t) {
            var l = Wt();
            return St === null ? yo(l, e, t) : fd(l, St.memoizedState, e, t)
        },
        useTransition: function() {
            var e = uo(ya)[0]
              , t = Wt().memoizedState;
            return [typeof e == "boolean" ? e : zr(e), t]
        },
        useSyncExternalStore: qf,
        useId: gd,
        useHostTransitionStatus: bo,
        useFormState: td,
        useActionState: td,
        useOptimistic: function(e, t) {
            var l = Wt();
            return St !== null ? Zf(l, St, e, t) : (l.baseState = e,
            [e, l.queue.dispatch])
        },
        useMemoCache: co,
        useCacheRefresh: yd
    };
    wd.useEffectEvent = ad;
    function wo(e, t, l, n) {
        t = e.memoizedState,
        l = l(n, t),
        l = l == null ? t : C({}, t, l),
        e.memoizedState = l,
        e.lanes === 0 && (e.updateQueue.baseState = l)
    }
    var So = {
        enqueueSetState: function(e, t, l) {
            e = e._reactInternals;
            var n = hn()
              , a = qa(n);
            a.payload = t,
            l != null && (a.callback = l),
            t = Ya(e, a, n),
            t !== null && (Pl(t, e, n),
            Ar(t, e, n))
        },
        enqueueReplaceState: function(e, t, l) {
            e = e._reactInternals;
            var n = hn()
              , a = qa(n);
            a.tag = 1,
            a.payload = t,
            l != null && (a.callback = l),
            t = Ya(e, a, n),
            t !== null && (Pl(t, e, n),
            Ar(t, e, n))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var l = hn()
              , n = qa(l);
            n.tag = 2,
            t != null && (n.callback = t),
            t = Ya(e, n, l),
            t !== null && (Pl(t, e, l),
            Ar(t, e, l))
        }
    };
    function Sd(e, t, l, n, a, i, c) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, c) : t.prototype && t.prototype.isPureReactComponent ? !pr(l, n) || !pr(a, i) : !0
    }
    function jd(e, t, l, n) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n),
        t.state !== e && So.enqueueReplaceState(t, t.state, null)
    }
    function Ei(e, t) {
        var l = t;
        if ("ref"in t) {
            l = {};
            for (var n in t)
                n !== "ref" && (l[n] = t[n])
        }
        if (e = e.defaultProps) {
            l === t && (l = C({}, l));
            for (var a in e)
                l[a] === void 0 && (l[a] = e[a])
        }
        return l
    }
    function Nd(e) {
        ds(e)
    }
    function Ad(e) {
        console.error(e)
    }
    function Ed(e) {
        ds(e)
    }
    function Rs(e, t) {
        try {
            var l = e.onUncaughtError;
            l(t.value, {
                componentStack: t.stack
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    function Td(e, t, l) {
        try {
            var n = e.onCaughtError;
            n(l.value, {
                componentStack: l.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function jo(e, t, l) {
        return l = qa(l),
        l.tag = 3,
        l.payload = {
            element: null
        },
        l.callback = function() {
            Rs(e, t)
        }
        ,
        l
    }
    function Md(e) {
        return e = qa(e),
        e.tag = 3,
        e
    }
    function zd(e, t, l, n) {
        var a = l.type.getDerivedStateFromError;
        if (typeof a == "function") {
            var i = n.value;
            e.payload = function() {
                return a(i)
            }
            ,
            e.callback = function() {
                Td(t, l, n)
            }
        }
        var c = l.stateNode;
        c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
            Td(t, l, n),
            typeof a != "function" && ($a === null ? $a = new Set([this]) : $a.add(this));
            var f = n.stack;
            this.componentDidCatch(n.value, {
                componentStack: f !== null ? f : ""
            })
        }
        )
    }
    function Xh(e, t, l, n, a) {
        if (l.flags |= 32768,
        n !== null && typeof n == "object" && typeof n.then == "function") {
            if (t = l.alternate,
            t !== null && Li(t, l, a, !0),
            l = un.current,
            l !== null) {
                switch (l.tag) {
                case 31:
                case 13:
                    return Tn === null ? $s() : l.alternate === null && Qt === 0 && (Qt = 3),
                    l.flags &= -257,
                    l.flags |= 65536,
                    l.lanes = a,
                    n === Ss ? l.flags |= 16384 : (t = l.updateQueue,
                    t === null ? l.updateQueue = new Set([n]) : t.add(n),
                    Ko(e, n, a)),
                    !1;
                case 22:
                    return l.flags |= 65536,
                    n === Ss ? l.flags |= 16384 : (t = l.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n])
                    },
                    l.updateQueue = t) : (l = t.retryQueue,
                    l === null ? t.retryQueue = new Set([n]) : l.add(n)),
                    Ko(e, n, a)),
                    !1
                }
                throw Error(u(435, l.tag))
            }
            return Ko(e, n, a),
            $s(),
            !1
        }
        if (lt)
            return t = un.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = a,
            n !== Yc && (e = Error(u(422), {
                cause: n
            }),
            vr(jn(e, l)))) : (n !== Yc && (t = Error(u(423), {
                cause: n
            }),
            vr(jn(t, l))),
            e = e.current.alternate,
            e.flags |= 65536,
            a &= -a,
            e.lanes |= a,
            n = jn(n, l),
            a = jo(e.stateNode, n, a),
            Ic(e, a),
            Qt !== 4 && (Qt = 2)),
            !1;
        var i = Error(u(520), {
            cause: n
        });
        if (i = jn(i, l),
        Lr === null ? Lr = [i] : Lr.push(i),
        Qt !== 4 && (Qt = 2),
        t === null)
            return !0;
        n = jn(n, l),
        l = t;
        do {
            switch (l.tag) {
            case 3:
                return l.flags |= 65536,
                e = a & -a,
                l.lanes |= e,
                e = jo(l.stateNode, n, e),
                Ic(l, e),
                !1;
            case 1:
                if (t = l.type,
                i = l.stateNode,
                (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && ($a === null || !$a.has(i))))
                    return l.flags |= 65536,
                    a &= -a,
                    l.lanes |= a,
                    a = Md(a),
                    zd(a, e, l, n),
                    Ic(l, a),
                    !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var No = Error(u(461))
      , al = !1;
    function El(e, t, l, n) {
        t.child = e === null ? Df(t, null, l, n) : Ni(t, e.child, l, n)
    }
    function _d(e, t, l, n, a) {
        l = l.render;
        var i = t.ref;
        if ("ref"in n) {
            var c = {};
            for (var f in n)
                f !== "ref" && (c[f] = n[f])
        } else
            c = n;
        return vi(t),
        n = ao(e, t, l, c, i, a),
        f = io(),
        e !== null && !al ? (ro(e, t, a),
        pa(e, t, a)) : (lt && f && Lc(t),
        t.flags |= 1,
        El(e, t, n, a),
        t.child)
    }
    function Cd(e, t, l, n, a) {
        if (e === null) {
            var i = l.type;
            return typeof i == "function" && !Bc(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15,
            t.type = i,
            Od(e, t, i, n, a)) : (e = ys(l.type, null, n, t, t.mode, a),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (i = e.child,
        !Oo(e, a)) {
            var c = i.memoizedProps;
            if (l = l.compare,
            l = l !== null ? l : pr,
            l(c, n) && e.ref === t.ref)
                return pa(e, t, a)
        }
        return t.flags |= 1,
        e = fa(i, n),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Od(e, t, l, n, a) {
        if (e !== null) {
            var i = e.memoizedProps;
            if (pr(i, n) && e.ref === t.ref)
                if (al = !1,
                t.pendingProps = n = i,
                Oo(e, a))
                    (e.flags & 131072) !== 0 && (al = !0);
                else
                    return t.lanes = e.lanes,
                    pa(e, t, a)
        }
        return Ao(e, t, l, n, a)
    }
    function Dd(e, t, l, n) {
        var a = n.children
          , i = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        n.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (i = i !== null ? i.baseLanes | l : l,
                e !== null) {
                    for (n = t.child = e.child,
                    a = 0; n !== null; )
                        a = a | n.lanes | n.childLanes,
                        n = n.sibling;
                    n = a & ~i
                } else
                    n = 0,
                    t.child = null;
                return kd(e, t, i, l, n)
            }
            if ((l & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && vs(t, i !== null ? i.cachePool : null),
                i !== null ? Bf(t, i) : eo(),
                Uf(t);
            else
                return n = t.lanes = 536870912,
                kd(e, t, i !== null ? i.baseLanes | l : l, l, n)
        } else
            i !== null ? (vs(t, i.cachePool),
            Bf(t, i),
            Va(),
            t.memoizedState = null) : (e !== null && vs(t, null),
            eo(),
            Va());
        return El(e, t, a, l),
        t.child
    }
    function Or(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function kd(e, t, l, n, a) {
        var i = Kc();
        return i = i === null ? null : {
            parent: ll._currentValue,
            pool: i
        },
        t.memoizedState = {
            baseLanes: l,
            cachePool: i
        },
        e !== null && vs(t, null),
        eo(),
        Uf(t),
        e !== null && Li(e, t, n, !0),
        t.childLanes = a,
        null
    }
    function Bs(e, t) {
        return t = Hs({
            mode: t.mode,
            children: t.children
        }, e.mode),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function Rd(e, t, l) {
        return Ni(t, e.child, null, l),
        e = Bs(t, t.pendingProps),
        e.flags |= 2,
        fn(t),
        t.memoizedState = null,
        e
    }
    function Vh(e, t, l) {
        var n = t.pendingProps
          , a = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        e === null) {
            if (lt) {
                if (n.mode === "hidden")
                    return e = Bs(t, n),
                    t.lanes = 536870912,
                    Or(null, e);
                if (lo(t),
                (e = kt) ? (e = $m(e, En),
                e = e !== null && e.data === "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ra !== null ? {
                        id: ea,
                        overflow: ta
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                l = bf(e),
                l.return = t,
                t.child = l,
                Nl = t,
                kt = null)) : e = null,
                e === null)
                    throw Ua(t);
                return t.lanes = 536870912,
                null
            }
            return Bs(t, n)
        }
        var i = e.memoizedState;
        if (i !== null) {
            var c = i.dehydrated;
            if (lo(t),
            a)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = Rd(e, t, l);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(u(558));
            else if (al || Li(e, t, l, !1),
            a = (l & e.childLanes) !== 0,
            al || a) {
                if (n = Mt,
                n !== null && (c = Dn(n, l),
                c !== 0 && c !== i.retryLane))
                    throw i.retryLane = c,
                    yi(e, c),
                    Pl(n, e, c),
                    No;
                $s(),
                t = Rd(e, t, l)
            } else
                e = i.treeContext,
                kt = Mn(c.nextSibling),
                Nl = t,
                lt = !0,
                Ba = null,
                En = !1,
                e !== null && wf(t, e),
                t = Bs(t, n),
                t.flags |= 4096;
            return t
        }
        return e = fa(e.child, {
            mode: n.mode,
            children: n.children
        }),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function Us(e, t) {
        var l = t.ref;
        if (l === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof l != "function" && typeof l != "object")
                throw Error(u(284));
            (e === null || e.ref !== l) && (t.flags |= 4194816)
        }
    }
    function Ao(e, t, l, n, a) {
        return vi(t),
        l = ao(e, t, l, n, void 0, a),
        n = io(),
        e !== null && !al ? (ro(e, t, a),
        pa(e, t, a)) : (lt && n && Lc(t),
        t.flags |= 1,
        El(e, t, l, a),
        t.child)
    }
    function Bd(e, t, l, n, a, i) {
        return vi(t),
        t.updateQueue = null,
        l = Lf(t, n, l, a),
        Hf(e),
        n = io(),
        e !== null && !al ? (ro(e, t, i),
        pa(e, t, i)) : (lt && n && Lc(t),
        t.flags |= 1,
        El(e, t, l, i),
        t.child)
    }
    function Ud(e, t, l, n, a) {
        if (vi(t),
        t.stateNode === null) {
            var i = Ri
              , c = l.contextType;
            typeof c == "object" && c !== null && (i = Al(c)),
            i = new l(n,i),
            t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
            i.updater = So,
            t.stateNode = i,
            i._reactInternals = t,
            i = t.stateNode,
            i.props = n,
            i.state = t.memoizedState,
            i.refs = {},
            Fc(t),
            c = l.contextType,
            i.context = typeof c == "object" && c !== null ? Al(c) : Ri,
            i.state = t.memoizedState,
            c = l.getDerivedStateFromProps,
            typeof c == "function" && (wo(t, l, c, n),
            i.state = t.memoizedState),
            typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state,
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            c !== i.state && So.enqueueReplaceState(i, i.state, null),
            Tr(t, n, i, a),
            Er(),
            i.state = t.memoizedState),
            typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            n = !0
        } else if (e === null) {
            i = t.stateNode;
            var f = t.memoizedProps
              , x = Ei(l, f);
            i.props = x;
            var D = i.context
              , V = l.contextType;
            c = Ri,
            typeof V == "object" && V !== null && (c = Al(V));
            var $ = l.getDerivedStateFromProps;
            V = typeof $ == "function" || typeof i.getSnapshotBeforeUpdate == "function",
            f = t.pendingProps !== f,
            V || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f || D !== c) && jd(t, i, n, c),
            La = !1;
            var k = t.memoizedState;
            i.state = k,
            Tr(t, n, i, a),
            Er(),
            D = t.memoizedState,
            f || k !== D || La ? (typeof $ == "function" && (wo(t, l, $, n),
            D = t.memoizedState),
            (x = La || Sd(t, l, x, n, k, D, c)) ? (V || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
            typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = n,
            t.memoizedState = D),
            i.props = n,
            i.state = D,
            i.context = c,
            n = x) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            n = !1)
        } else {
            i = t.stateNode,
            Wc(e, t),
            c = t.memoizedProps,
            V = Ei(l, c),
            i.props = V,
            $ = t.pendingProps,
            k = i.context,
            D = l.contextType,
            x = Ri,
            typeof D == "object" && D !== null && (x = Al(D)),
            f = l.getDerivedStateFromProps,
            (D = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== $ || k !== x) && jd(t, i, n, x),
            La = !1,
            k = t.memoizedState,
            i.state = k,
            Tr(t, n, i, a),
            Er();
            var H = t.memoizedState;
            c !== $ || k !== H || La || e !== null && e.dependencies !== null && bs(e.dependencies) ? (typeof f == "function" && (wo(t, l, f, n),
            H = t.memoizedState),
            (V = La || Sd(t, l, V, n, k, H, x) || e !== null && e.dependencies !== null && bs(e.dependencies)) ? (D || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, H, x),
            typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, H, x)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && k === e.memoizedState || (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = n,
            t.memoizedState = H),
            i.props = n,
            i.state = H,
            i.context = x,
            n = V) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && k === e.memoizedState || (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024),
            n = !1)
        }
        return i = n,
        Us(e, t),
        n = (t.flags & 128) !== 0,
        i || n ? (i = t.stateNode,
        l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(),
        t.flags |= 1,
        e !== null && n ? (t.child = Ni(t, e.child, null, a),
        t.child = Ni(t, null, l, a)) : El(e, t, l, a),
        t.memoizedState = i.state,
        e = t.child) : e = pa(e, t, a),
        e
    }
    function Hd(e, t, l, n) {
        return bi(),
        t.flags |= 256,
        El(e, t, l, n),
        t.child
    }
    var Eo = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function To(e) {
        return {
            baseLanes: e,
            cachePool: Tf()
        }
    }
    function Mo(e, t, l) {
        return e = e !== null ? e.childLanes & ~l : 0,
        t && (e |= mn),
        e
    }
    function Ld(e, t, l) {
        var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, c;
        if ((c = i) || (c = e !== null && e.memoizedState === null ? !1 : (Ft.current & 2) !== 0),
        c && (a = !0,
        t.flags &= -129),
        c = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (lt) {
                if (a ? Xa(t) : Va(),
                (e = kt) ? (e = $m(e, En),
                e = e !== null && e.data !== "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ra !== null ? {
                        id: ea,
                        overflow: ta
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                l = bf(e),
                l.return = t,
                t.child = l,
                Nl = t,
                kt = null)) : e = null,
                e === null)
                    throw Ua(t);
                return uu(e) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var f = n.children;
            return n = n.fallback,
            a ? (Va(),
            a = t.mode,
            f = Hs({
                mode: "hidden",
                children: f
            }, a),
            n = pi(n, a, l, null),
            f.return = t,
            n.return = t,
            f.sibling = n,
            t.child = f,
            n = t.child,
            n.memoizedState = To(l),
            n.childLanes = Mo(e, c, l),
            t.memoizedState = Eo,
            Or(null, n)) : (Xa(t),
            zo(t, f))
        }
        var x = e.memoizedState;
        if (x !== null && (f = x.dehydrated,
        f !== null)) {
            if (i)
                t.flags & 256 ? (Xa(t),
                t.flags &= -257,
                t = _o(e, t, l)) : t.memoizedState !== null ? (Va(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (Va(),
                f = n.fallback,
                a = t.mode,
                n = Hs({
                    mode: "visible",
                    children: n.children
                }, a),
                f = pi(f, a, l, null),
                f.flags |= 2,
                n.return = t,
                f.return = t,
                n.sibling = f,
                t.child = n,
                Ni(t, e.child, null, l),
                n = t.child,
                n.memoizedState = To(l),
                n.childLanes = Mo(e, c, l),
                t.memoizedState = Eo,
                t = Or(null, n));
            else if (Xa(t),
            uu(f)) {
                if (c = f.nextSibling && f.nextSibling.dataset,
                c)
                    var D = c.dgst;
                c = D,
                n = Error(u(419)),
                n.stack = "",
                n.digest = c,
                vr({
                    value: n,
                    source: null,
                    stack: null
                }),
                t = _o(e, t, l)
            } else if (al || Li(e, t, l, !1),
            c = (l & e.childLanes) !== 0,
            al || c) {
                if (c = Mt,
                c !== null && (n = Dn(c, l),
                n !== 0 && n !== x.retryLane))
                    throw x.retryLane = n,
                    yi(e, n),
                    Pl(c, e, n),
                    No;
                ou(f) || $s(),
                t = _o(e, t, l)
            } else
                ou(f) ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = x.treeContext,
                kt = Mn(f.nextSibling),
                Nl = t,
                lt = !0,
                Ba = null,
                En = !1,
                e !== null && wf(t, e),
                t = zo(t, n.children),
                t.flags |= 4096);
            return t
        }
        return a ? (Va(),
        f = n.fallback,
        a = t.mode,
        x = e.child,
        D = x.sibling,
        n = fa(x, {
            mode: "hidden",
            children: n.children
        }),
        n.subtreeFlags = x.subtreeFlags & 65011712,
        D !== null ? f = fa(D, f) : (f = pi(f, a, l, null),
        f.flags |= 2),
        f.return = t,
        n.return = t,
        n.sibling = f,
        t.child = n,
        Or(null, n),
        n = t.child,
        f = e.child.memoizedState,
        f === null ? f = To(l) : (a = f.cachePool,
        a !== null ? (x = ll._currentValue,
        a = a.parent !== x ? {
            parent: x,
            pool: x
        } : a) : a = Tf(),
        f = {
            baseLanes: f.baseLanes | l,
            cachePool: a
        }),
        n.memoizedState = f,
        n.childLanes = Mo(e, c, l),
        t.memoizedState = Eo,
        Or(e.child, n)) : (Xa(t),
        l = e.child,
        e = l.sibling,
        l = fa(l, {
            mode: "visible",
            children: n.children
        }),
        l.return = t,
        l.sibling = null,
        e !== null && (c = t.deletions,
        c === null ? (t.deletions = [e],
        t.flags |= 16) : c.push(e)),
        t.child = l,
        t.memoizedState = null,
        l)
    }
    function zo(e, t) {
        return t = Hs({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function Hs(e, t) {
        return e = on(22, e, null, t),
        e.lanes = 0,
        e
    }
    function _o(e, t, l) {
        return Ni(t, e.child, null, l),
        e = zo(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function qd(e, t, l) {
        e.lanes |= t;
        var n = e.alternate;
        n !== null && (n.lanes |= t),
        Gc(e.return, t, l)
    }
    function Co(e, t, l, n, a, i) {
        var c = e.memoizedState;
        c === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: n,
            tail: l,
            tailMode: a,
            treeForkCount: i
        } : (c.isBackwards = t,
        c.rendering = null,
        c.renderingStartTime = 0,
        c.last = n,
        c.tail = l,
        c.tailMode = a,
        c.treeForkCount = i)
    }
    function Yd(e, t, l) {
        var n = t.pendingProps
          , a = n.revealOrder
          , i = n.tail;
        n = n.children;
        var c = Ft.current
          , f = (c & 2) !== 0;
        if (f ? (c = c & 1 | 2,
        t.flags |= 128) : c &= 1,
        W(Ft, c),
        El(e, t, n, l),
        n = lt ? xr : 0,
        !f && e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && qd(e, l, t);
                else if (e.tag === 19)
                    qd(e, l, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        switch (a) {
        case "forwards":
            for (l = t.child,
            a = null; l !== null; )
                e = l.alternate,
                e !== null && Es(e) === null && (a = l),
                l = l.sibling;
            l = a,
            l === null ? (a = t.child,
            t.child = null) : (a = l.sibling,
            l.sibling = null),
            Co(t, !1, a, l, i, n);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (l = null,
            a = t.child,
            t.child = null; a !== null; ) {
                if (e = a.alternate,
                e !== null && Es(e) === null) {
                    t.child = a;
                    break
                }
                e = a.sibling,
                a.sibling = l,
                l = a,
                a = e
            }
            Co(t, !0, l, null, i, n);
            break;
        case "together":
            Co(t, !1, null, null, void 0, n);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function pa(e, t, l) {
        if (e !== null && (t.dependencies = e.dependencies),
        Za |= t.lanes,
        (l & t.childLanes) === 0)
            if (e !== null) {
                if (Li(e, t, l, !1),
                (l & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(u(153));
        if (t.child !== null) {
            for (e = t.child,
            l = fa(e, e.pendingProps),
            t.child = l,
            l.return = t; e.sibling !== null; )
                e = e.sibling,
                l = l.sibling = fa(e, e.pendingProps),
                l.return = t;
            l.sibling = null
        }
        return t.child
    }
    function Oo(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && bs(e)))
    }
    function Gh(e, t, l) {
        switch (t.tag) {
        case 3:
            ht(t, t.stateNode.containerInfo),
            Ha(t, ll, e.memoizedState.cache),
            bi();
            break;
        case 27:
        case 5:
            zt(t);
            break;
        case 4:
            ht(t, t.stateNode.containerInfo);
            break;
        case 10:
            Ha(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                lo(t),
                null;
            break;
        case 13:
            var n = t.memoizedState;
            if (n !== null)
                return n.dehydrated !== null ? (Xa(t),
                t.flags |= 128,
                null) : (l & t.child.childLanes) !== 0 ? Ld(e, t, l) : (Xa(t),
                e = pa(e, t, l),
                e !== null ? e.sibling : null);
            Xa(t);
            break;
        case 19:
            var a = (e.flags & 128) !== 0;
            if (n = (l & t.childLanes) !== 0,
            n || (Li(e, t, l, !1),
            n = (l & t.childLanes) !== 0),
            a) {
                if (n)
                    return Yd(e, t, l);
                t.flags |= 128
            }
            if (a = t.memoizedState,
            a !== null && (a.rendering = null,
            a.tail = null,
            a.lastEffect = null),
            W(Ft, Ft.current),
            n)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            Dd(e, t, l, t.pendingProps);
        case 24:
            Ha(t, ll, e.memoizedState.cache)
        }
        return pa(e, t, l)
    }
    function Xd(e, t, l) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                al = !0;
            else {
                if (!Oo(e, l) && (t.flags & 128) === 0)
                    return al = !1,
                    Gh(e, t, l);
                al = (e.flags & 131072) !== 0
            }
        else
            al = !1,
            lt && (t.flags & 1048576) !== 0 && vf(t, xr, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                var n = t.pendingProps;
                if (e = Si(t.elementType),
                t.type = e,
                typeof e == "function")
                    Bc(e) ? (n = Ei(e, n),
                    t.tag = 1,
                    t = Ud(null, t, e, n, l)) : (t.tag = 0,
                    t = Ao(null, t, e, n, l));
                else {
                    if (e != null) {
                        var a = e.$$typeof;
                        if (a === pe) {
                            t.tag = 11,
                            t = _d(null, t, e, n, l);
                            break e
                        } else if (a === se) {
                            t.tag = 14,
                            t = Cd(null, t, e, n, l);
                            break e
                        }
                    }
                    throw t = Ce(e) || e,
                    Error(u(306, t, ""))
                }
            }
            return t;
        case 0:
            return Ao(e, t, t.type, t.pendingProps, l);
        case 1:
            return n = t.type,
            a = Ei(n, t.pendingProps),
            Ud(e, t, n, a, l);
        case 3:
            e: {
                if (ht(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(u(387));
                n = t.pendingProps;
                var i = t.memoizedState;
                a = i.element,
                Wc(e, t),
                Tr(t, n, null, l);
                var c = t.memoizedState;
                if (n = c.cache,
                Ha(t, ll, n),
                n !== i.cache && Qc(t, [ll], l, !0),
                Er(),
                n = c.element,
                i.isDehydrated)
                    if (i = {
                        element: n,
                        isDehydrated: !1,
                        cache: c.cache
                    },
                    t.updateQueue.baseState = i,
                    t.memoizedState = i,
                    t.flags & 256) {
                        t = Hd(e, t, n, l);
                        break e
                    } else if (n !== a) {
                        a = jn(Error(u(424)), t),
                        vr(a),
                        t = Hd(e, t, n, l);
                        break e
                    } else
                        for (e = t.stateNode.containerInfo,
                        e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e,
                        kt = Mn(e.firstChild),
                        Nl = t,
                        lt = !0,
                        Ba = null,
                        En = !0,
                        l = Df(t, null, n, l),
                        t.child = l; l; )
                            l.flags = l.flags & -3 | 4096,
                            l = l.sibling;
                else {
                    if (bi(),
                    n === a) {
                        t = pa(e, t, l);
                        break e
                    }
                    El(e, t, n, l)
                }
                t = t.child
            }
            return t;
        case 26:
            return Us(e, t),
            e === null ? (l = Pm(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : lt || (l = t.type,
            e = t.pendingProps,
            n = ec(je.current).createElement(l),
            n[ut] = t,
            n[_t] = e,
            Tl(n, l, e),
            Tt(n),
            t.stateNode = n) : t.memoizedState = Pm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return zt(t),
            e === null && lt && (n = t.stateNode = Fm(t.type, t.pendingProps, je.current),
            Nl = t,
            En = !0,
            a = kt,
            Wa(t.type) ? (fu = a,
            kt = Mn(n.firstChild)) : kt = a),
            El(e, t, t.pendingProps.children, l),
            Us(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && lt && ((a = n = kt) && (n = vg(n, t.type, t.pendingProps, En),
            n !== null ? (t.stateNode = n,
            Nl = t,
            kt = Mn(n.firstChild),
            En = !1,
            a = !0) : a = !1),
            a || Ua(t)),
            zt(t),
            a = t.type,
            i = t.pendingProps,
            c = e !== null ? e.memoizedProps : null,
            n = i.children,
            ru(a, i) ? n = null : c !== null && ru(a, c) && (t.flags |= 32),
            t.memoizedState !== null && (a = ao(e, t, Rh, null, null, l),
            $r._currentValue = a),
            Us(e, t),
            El(e, t, n, l),
            t.child;
        case 6:
            return e === null && lt && ((e = l = kt) && (l = wg(l, t.pendingProps, En),
            l !== null ? (t.stateNode = l,
            Nl = t,
            kt = null,
            e = !0) : e = !1),
            e || Ua(t)),
            null;
        case 13:
            return Ld(e, t, l);
        case 4:
            return ht(t, t.stateNode.containerInfo),
            n = t.pendingProps,
            e === null ? t.child = Ni(t, null, n, l) : El(e, t, n, l),
            t.child;
        case 11:
            return _d(e, t, t.type, t.pendingProps, l);
        case 7:
            return El(e, t, t.pendingProps, l),
            t.child;
        case 8:
            return El(e, t, t.pendingProps.children, l),
            t.child;
        case 12:
            return El(e, t, t.pendingProps.children, l),
            t.child;
        case 10:
            return n = t.pendingProps,
            Ha(t, t.type, n.value),
            El(e, t, n.children, l),
            t.child;
        case 9:
            return a = t.type._context,
            n = t.pendingProps.children,
            vi(t),
            a = Al(a),
            n = n(a),
            t.flags |= 1,
            El(e, t, n, l),
            t.child;
        case 14:
            return Cd(e, t, t.type, t.pendingProps, l);
        case 15:
            return Od(e, t, t.type, t.pendingProps, l);
        case 19:
            return Yd(e, t, l);
        case 31:
            return Vh(e, t, l);
        case 22:
            return Dd(e, t, l, t.pendingProps);
        case 24:
            return vi(t),
            n = Al(ll),
            e === null ? (a = Kc(),
            a === null && (a = Mt,
            i = Zc(),
            a.pooledCache = i,
            i.refCount++,
            i !== null && (a.pooledCacheLanes |= l),
            a = i),
            t.memoizedState = {
                parent: n,
                cache: a
            },
            Fc(t),
            Ha(t, ll, a)) : ((e.lanes & l) !== 0 && (Wc(e, t),
            Tr(t, null, null, l),
            Er()),
            a = e.memoizedState,
            i = t.memoizedState,
            a.parent !== n ? (a = {
                parent: n,
                cache: n
            },
            t.memoizedState = a,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
            Ha(t, ll, n)) : (n = i.cache,
            Ha(t, ll, n),
            n !== a.cache && Qc(t, [ll], l, !0))),
            El(e, t, t.pendingProps.children, l),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(u(156, t.tag))
    }
    function ba(e) {
        e.flags |= 4
    }
    function Do(e, t, l, n, a) {
        if ((t = (e.mode & 32) !== 0) && (t = !1),
        t) {
            if (e.flags |= 16777216,
            (a & 335544128) === a)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (gm())
                    e.flags |= 8192;
                else
                    throw ji = Ss,
                    Jc
        } else
            e.flags &= -16777217
    }
    function Vd(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !a0(t))
            if (gm())
                e.flags |= 8192;
            else
                throw ji = Ss,
                Jc
    }
    function Ls(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? za() : 536870912,
        e.lanes |= t,
        Wi |= t)
    }
    function Dr(e, t) {
        if (!lt)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var l = null; t !== null; )
                    t.alternate !== null && (l = t),
                    t = t.sibling;
                l === null ? e.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = e.tail;
                for (var n = null; l !== null; )
                    l.alternate !== null && (n = l),
                    l = l.sibling;
                n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
            }
    }
    function Rt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , l = 0
          , n = 0;
        if (t)
            for (var a = e.child; a !== null; )
                l |= a.lanes | a.childLanes,
                n |= a.subtreeFlags & 65011712,
                n |= a.flags & 65011712,
                a.return = e,
                a = a.sibling;
        else
            for (a = e.child; a !== null; )
                l |= a.lanes | a.childLanes,
                n |= a.subtreeFlags,
                n |= a.flags,
                a.return = e,
                a = a.sibling;
        return e.subtreeFlags |= n,
        e.childLanes = l,
        t
    }
    function Qh(e, t, l) {
        var n = t.pendingProps;
        switch (qc(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Rt(t),
            null;
        case 1:
            return Rt(t),
            null;
        case 3:
            return l = t.stateNode,
            n = null,
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            ha(ll),
            De(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (e === null || e.child === null) && (Hi(t) ? ba(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Xc())),
            Rt(t),
            null;
        case 26:
            var a = t.type
              , i = t.memoizedState;
            return e === null ? (ba(t),
            i !== null ? (Rt(t),
            Vd(t, i)) : (Rt(t),
            Do(t, a, null, n, l))) : i ? i !== e.memoizedState ? (ba(t),
            Rt(t),
            Vd(t, i)) : (Rt(t),
            t.flags &= -16777217) : (e = e.memoizedProps,
            e !== n && ba(t),
            Rt(t),
            Do(t, a, e, n, l)),
            null;
        case 27:
            if (Zt(t),
            l = je.current,
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== n && ba(t);
            else {
                if (!n) {
                    if (t.stateNode === null)
                        throw Error(u(166));
                    return Rt(t),
                    null
                }
                e = ce.current,
                Hi(t) ? Sf(t) : (e = Fm(a, n, l),
                t.stateNode = e,
                ba(t))
            }
            return Rt(t),
            null;
        case 5:
            if (Zt(t),
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== n && ba(t);
            else {
                if (!n) {
                    if (t.stateNode === null)
                        throw Error(u(166));
                    return Rt(t),
                    null
                }
                if (i = ce.current,
                Hi(t))
                    Sf(t);
                else {
                    var c = ec(je.current);
                    switch (i) {
                    case 1:
                        i = c.createElementNS("http://www.w3.org/2000/svg", a);
                        break;
                    case 2:
                        i = c.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                        break;
                    default:
                        switch (a) {
                        case "svg":
                            i = c.createElementNS("http://www.w3.org/2000/svg", a);
                            break;
                        case "math":
                            i = c.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                            break;
                        case "script":
                            i = c.createElement("div"),
                            i.innerHTML = "<script><\/script>",
                            i = i.removeChild(i.firstChild);
                            break;
                        case "select":
                            i = typeof n.is == "string" ? c.createElement("select", {
                                is: n.is
                            }) : c.createElement("select"),
                            n.multiple ? i.multiple = !0 : n.size && (i.size = n.size);
                            break;
                        default:
                            i = typeof n.is == "string" ? c.createElement(a, {
                                is: n.is
                            }) : c.createElement(a)
                        }
                    }
                    i[ut] = t,
                    i[_t] = n;
                    e: for (c = t.child; c !== null; ) {
                        if (c.tag === 5 || c.tag === 6)
                            i.appendChild(c.stateNode);
                        else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                            c.child.return = c,
                            c = c.child;
                            continue
                        }
                        if (c === t)
                            break e;
                        for (; c.sibling === null; ) {
                            if (c.return === null || c.return === t)
                                break e;
                            c = c.return
                        }
                        c.sibling.return = c.return,
                        c = c.sibling
                    }
                    t.stateNode = i;
                    e: switch (Tl(i, a, n),
                    a) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n = !!n.autoFocus;
                        break e;
                    case "img":
                        n = !0;
                        break e;
                    default:
                        n = !1
                    }
                    n && ba(t)
                }
            }
            return Rt(t),
            Do(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== n && ba(t);
            else {
                if (typeof n != "string" && t.stateNode === null)
                    throw Error(u(166));
                if (e = je.current,
                Hi(t)) {
                    if (e = t.stateNode,
                    l = t.memoizedProps,
                    n = null,
                    a = Nl,
                    a !== null)
                        switch (a.tag) {
                        case 27:
                        case 5:
                            n = a.memoizedProps
                        }
                    e[ut] = t,
                    e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Lm(e.nodeValue, l)),
                    e || Ua(t, !0)
                } else
                    e = ec(e).createTextNode(n),
                    e[ut] = t,
                    t.stateNode = e
            }
            return Rt(t),
            null;
        case 31:
            if (l = t.memoizedState,
            e === null || e.memoizedState !== null) {
                if (n = Hi(t),
                l !== null) {
                    if (e === null) {
                        if (!n)
                            throw Error(u(318));
                        if (e = t.memoizedState,
                        e = e !== null ? e.dehydrated : null,
                        !e)
                            throw Error(u(557));
                        e[ut] = t
                    } else
                        bi(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Rt(t),
                    e = !1
                } else
                    l = Xc(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (fn(t),
                    t) : (fn(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(u(558))
            }
            return Rt(t),
            null;
        case 13:
            if (n = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (a = Hi(t),
                n !== null && n.dehydrated !== null) {
                    if (e === null) {
                        if (!a)
                            throw Error(u(318));
                        if (a = t.memoizedState,
                        a = a !== null ? a.dehydrated : null,
                        !a)
                            throw Error(u(317));
                        a[ut] = t
                    } else
                        bi(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Rt(t),
                    a = !1
                } else
                    a = Xc(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                    a = !0;
                if (!a)
                    return t.flags & 256 ? (fn(t),
                    t) : (fn(t),
                    null)
            }
            return fn(t),
            (t.flags & 128) !== 0 ? (t.lanes = l,
            t) : (l = n !== null,
            e = e !== null && e.memoizedState !== null,
            l && (n = t.child,
            a = null,
            n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool),
            i = null,
            n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool),
            i !== a && (n.flags |= 2048)),
            l !== e && l && (t.child.flags |= 8192),
            Ls(t, t.updateQueue),
            Rt(t),
            null);
        case 4:
            return De(),
            e === null && tu(t.stateNode.containerInfo),
            Rt(t),
            null;
        case 10:
            return ha(t.type),
            Rt(t),
            null;
        case 19:
            if (Y(Ft),
            n = t.memoizedState,
            n === null)
                return Rt(t),
                null;
            if (a = (t.flags & 128) !== 0,
            i = n.rendering,
            i === null)
                if (a)
                    Dr(n, !1);
                else {
                    if (Qt !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (i = Es(e),
                            i !== null) {
                                for (t.flags |= 128,
                                Dr(n, !1),
                                e = i.updateQueue,
                                t.updateQueue = e,
                                Ls(t, e),
                                t.subtreeFlags = 0,
                                e = l,
                                l = t.child; l !== null; )
                                    pf(l, e),
                                    l = l.sibling;
                                return W(Ft, Ft.current & 1 | 2),
                                lt && da(t, n.treeForkCount),
                                t.child
                            }
                            e = e.sibling
                        }
                    n.tail !== null && Ke() > Gs && (t.flags |= 128,
                    a = !0,
                    Dr(n, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!a)
                    if (e = Es(i),
                    e !== null) {
                        if (t.flags |= 128,
                        a = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        Ls(t, e),
                        Dr(n, !0),
                        n.tail === null && n.tailMode === "hidden" && !i.alternate && !lt)
                            return Rt(t),
                            null
                    } else
                        2 * Ke() - n.renderingStartTime > Gs && l !== 536870912 && (t.flags |= 128,
                        a = !0,
                        Dr(n, !1),
                        t.lanes = 4194304);
                n.isBackwards ? (i.sibling = t.child,
                t.child = i) : (e = n.last,
                e !== null ? e.sibling = i : t.child = i,
                n.last = i)
            }
            return n.tail !== null ? (e = n.tail,
            n.rendering = e,
            n.tail = e.sibling,
            n.renderingStartTime = Ke(),
            e.sibling = null,
            l = Ft.current,
            W(Ft, a ? l & 1 | 2 : l & 1),
            lt && da(t, n.treeForkCount),
            e) : (Rt(t),
            null);
        case 22:
        case 23:
            return fn(t),
            to(),
            n = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192),
            n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Rt(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Rt(t),
            l = t.updateQueue,
            l !== null && Ls(t, l.retryQueue),
            l = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            n = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
            n !== l && (t.flags |= 2048),
            e !== null && Y(wi),
            null;
        case 24:
            return l = null,
            e !== null && (l = e.memoizedState.cache),
            t.memoizedState.cache !== l && (t.flags |= 2048),
            ha(ll),
            Rt(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(u(156, t.tag))
    }
    function Zh(e, t) {
        switch (qc(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return ha(ll),
            De(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Zt(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (fn(t),
                t.alternate === null)
                    throw Error(u(340));
                bi()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 13:
            if (fn(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(u(340));
                bi()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return Y(Ft),
            null;
        case 4:
            return De(),
            null;
        case 10:
            return ha(t.type),
            null;
        case 22:
        case 23:
            return fn(t),
            to(),
            e !== null && Y(wi),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return ha(ll),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Gd(e, t) {
        switch (qc(t),
        t.tag) {
        case 3:
            ha(ll),
            De();
            break;
        case 26:
        case 27:
        case 5:
            Zt(t);
            break;
        case 4:
            De();
            break;
        case 31:
            t.memoizedState !== null && fn(t);
            break;
        case 13:
            fn(t);
            break;
        case 19:
            Y(Ft);
            break;
        case 10:
            ha(t.type);
            break;
        case 22:
        case 23:
            fn(t),
            to(),
            e !== null && Y(wi);
            break;
        case 24:
            ha(ll)
        }
    }
    function kr(e, t) {
        try {
            var l = t.updateQueue
              , n = l !== null ? l.lastEffect : null;
            if (n !== null) {
                var a = n.next;
                l = a;
                do {
                    if ((l.tag & e) === e) {
                        n = void 0;
                        var i = l.create
                          , c = l.inst;
                        n = i(),
                        c.destroy = n
                    }
                    l = l.next
                } while (l !== a)
            }
        } catch (f) {
            vt(t, t.return, f)
        }
    }
    function Ga(e, t, l) {
        try {
            var n = t.updateQueue
              , a = n !== null ? n.lastEffect : null;
            if (a !== null) {
                var i = a.next;
                n = i;
                do {
                    if ((n.tag & e) === e) {
                        var c = n.inst
                          , f = c.destroy;
                        if (f !== void 0) {
                            c.destroy = void 0,
                            a = t;
                            var x = l
                              , D = f;
                            try {
                                D()
                            } catch (V) {
                                vt(a, x, V)
                            }
                        }
                    }
                    n = n.next
                } while (n !== i)
            }
        } catch (V) {
            vt(t, t.return, V)
        }
    }
    function Qd(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var l = e.stateNode;
            try {
                Rf(t, l)
            } catch (n) {
                vt(e, e.return, n)
            }
        }
    }
    function Zd(e, t, l) {
        l.props = Ei(e.type, e.memoizedProps),
        l.state = e.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (n) {
            vt(e, t, n)
        }
    }
    function Rr(e, t) {
        try {
            var l = e.ref;
            if (l !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var n = e.stateNode;
                    break;
                case 30:
                    n = e.stateNode;
                    break;
                default:
                    n = e.stateNode
                }
                typeof l == "function" ? e.refCleanup = l(n) : l.current = n
            }
        } catch (a) {
            vt(e, t, a)
        }
    }
    function la(e, t) {
        var l = e.ref
          , n = e.refCleanup;
        if (l !== null)
            if (typeof n == "function")
                try {
                    n()
                } catch (a) {
                    vt(e, t, a)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof l == "function")
                try {
                    l(null)
                } catch (a) {
                    vt(e, t, a)
                }
            else
                l.current = null
    }
    function $d(e) {
        var t = e.type
          , l = e.memoizedProps
          , n = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                l.autoFocus && n.focus();
                break e;
            case "img":
                l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet)
            }
        } catch (a) {
            vt(e, e.return, a)
        }
    }
    function ko(e, t, l) {
        try {
            var n = e.stateNode;
            hg(n, e.type, l, t),
            n[_t] = t
        } catch (a) {
            vt(e, e.return, a)
        }
    }
    function Kd(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Wa(e.type) || e.tag === 4
    }
    function Ro(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Kd(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Wa(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Bo(e, t, l) {
        var n = e.tag;
        if (n === 5 || n === 6)
            e = e.stateNode,
            t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
            t.appendChild(e),
            l = l._reactRootContainer,
            l != null || t.onclick !== null || (t.onclick = Ol));
        else if (n !== 4 && (n === 27 && Wa(e.type) && (l = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (Bo(e, t, l),
            e = e.sibling; e !== null; )
                Bo(e, t, l),
                e = e.sibling
    }
    function qs(e, t, l) {
        var n = e.tag;
        if (n === 5 || n === 6)
            e = e.stateNode,
            t ? l.insertBefore(e, t) : l.appendChild(e);
        else if (n !== 4 && (n === 27 && Wa(e.type) && (l = e.stateNode),
        e = e.child,
        e !== null))
            for (qs(e, t, l),
            e = e.sibling; e !== null; )
                qs(e, t, l),
                e = e.sibling
    }
    function Jd(e) {
        var t = e.stateNode
          , l = e.memoizedProps;
        try {
            for (var n = e.type, a = t.attributes; a.length; )
                t.removeAttributeNode(a[0]);
            Tl(t, n, l),
            t[ut] = e,
            t[_t] = l
        } catch (i) {
            vt(e, e.return, i)
        }
    }
    var xa = !1
      , il = !1
      , Uo = !1
      , Fd = typeof WeakSet == "function" ? WeakSet : Set
      , bl = null;
    function $h(e, t) {
        if (e = e.containerInfo,
        au = sc,
        e = cf(e),
        zc(e)) {
            if ("selectionStart"in e)
                var l = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    l = (l = e.ownerDocument) && l.defaultView || window;
                    var n = l.getSelection && l.getSelection();
                    if (n && n.rangeCount !== 0) {
                        l = n.anchorNode;
                        var a = n.anchorOffset
                          , i = n.focusNode;
                        n = n.focusOffset;
                        try {
                            l.nodeType,
                            i.nodeType
                        } catch {
                            l = null;
                            break e
                        }
                        var c = 0
                          , f = -1
                          , x = -1
                          , D = 0
                          , V = 0
                          , $ = e
                          , k = null;
                        t: for (; ; ) {
                            for (var H; $ !== l || a !== 0 && $.nodeType !== 3 || (f = c + a),
                            $ !== i || n !== 0 && $.nodeType !== 3 || (x = c + n),
                            $.nodeType === 3 && (c += $.nodeValue.length),
                            (H = $.firstChild) !== null; )
                                k = $,
                                $ = H;
                            for (; ; ) {
                                if ($ === e)
                                    break t;
                                if (k === l && ++D === a && (f = c),
                                k === i && ++V === n && (x = c),
                                (H = $.nextSibling) !== null)
                                    break;
                                $ = k,
                                k = $.parentNode
                            }
                            $ = H
                        }
                        l = f === -1 || x === -1 ? null : {
                            start: f,
                            end: x
                        }
                    } else
                        l = null
                }
            l = l || {
                start: 0,
                end: 0
            }
        } else
            l = null;
        for (iu = {
            focusedElem: e,
            selectionRange: l
        },
        sc = !1,
        bl = t; bl !== null; )
            if (t = bl,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                bl = e;
            else
                for (; bl !== null; ) {
                    switch (t = bl,
                    i = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue,
                        e = e !== null ? e.events : null,
                        e !== null))
                            for (l = 0; l < e.length; l++)
                                a = e[l],
                                a.ref.impl = a.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && i !== null) {
                            e = void 0,
                            l = t,
                            a = i.memoizedProps,
                            i = i.memoizedState,
                            n = l.stateNode;
                            try {
                                var he = Ei(l.type, a);
                                e = n.getSnapshotBeforeUpdate(he, i),
                                n.__reactInternalSnapshotBeforeUpdate = e
                            } catch (Ae) {
                                vt(l, l.return, Ae)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            l = e.nodeType,
                            l === 9)
                                cu(e);
                            else if (l === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    cu(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(u(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        bl = e;
                        break
                    }
                    bl = t.return
                }
    }
    function Wd(e, t, l) {
        var n = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            wa(e, l),
            n & 4 && kr(5, l);
            break;
        case 1:
            if (wa(e, l),
            n & 4)
                if (e = l.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (c) {
                        vt(l, l.return, c)
                    }
                else {
                    var a = Ei(l.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (c) {
                        vt(l, l.return, c)
                    }
                }
            n & 64 && Qd(l),
            n & 512 && Rr(l, l.return);
            break;
        case 3:
            if (wa(e, l),
            n & 64 && (e = l.updateQueue,
            e !== null)) {
                if (t = null,
                l.child !== null)
                    switch (l.child.tag) {
                    case 27:
                    case 5:
                        t = l.child.stateNode;
                        break;
                    case 1:
                        t = l.child.stateNode
                    }
                try {
                    Rf(e, t)
                } catch (c) {
                    vt(l, l.return, c)
                }
            }
            break;
        case 27:
            t === null && n & 4 && Jd(l);
        case 26:
        case 5:
            wa(e, l),
            t === null && n & 4 && $d(l),
            n & 512 && Rr(l, l.return);
            break;
        case 12:
            wa(e, l);
            break;
        case 31:
            wa(e, l),
            n & 4 && em(e, l);
            break;
        case 13:
            wa(e, l),
            n & 4 && tm(e, l),
            n & 64 && (e = l.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (l = lg.bind(null, l),
            Sg(e, l))));
            break;
        case 22:
            if (n = l.memoizedState !== null || xa,
            !n) {
                t = t !== null && t.memoizedState !== null || il,
                a = xa;
                var i = il;
                xa = n,
                (il = t) && !i ? Sa(e, l, (l.subtreeFlags & 8772) !== 0) : wa(e, l),
                xa = a,
                il = i
            }
            break;
        case 30:
            break;
        default:
            wa(e, l)
        }
    }
    function Id(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Id(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && bt(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Ht = null
      , Jl = !1;
    function va(e, t, l) {
        for (l = l.child; l !== null; )
            Pd(e, t, l),
            l = l.sibling
    }
    function Pd(e, t, l) {
        if (Lt && typeof Lt.onCommitFiberUnmount == "function")
            try {
                Lt.onCommitFiberUnmount(yt, l)
            } catch {}
        switch (l.tag) {
        case 26:
            il || la(l, t),
            va(e, t, l),
            l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode,
            l.parentNode.removeChild(l));
            break;
        case 27:
            il || la(l, t);
            var n = Ht
              , a = Jl;
            Wa(l.type) && (Ht = l.stateNode,
            Jl = !1),
            va(e, t, l),
            Gr(l.stateNode),
            Ht = n,
            Jl = a;
            break;
        case 5:
            il || la(l, t);
        case 6:
            if (n = Ht,
            a = Jl,
            Ht = null,
            va(e, t, l),
            Ht = n,
            Jl = a,
            Ht !== null)
                if (Jl)
                    try {
                        (Ht.nodeType === 9 ? Ht.body : Ht.nodeName === "HTML" ? Ht.ownerDocument.body : Ht).removeChild(l.stateNode)
                    } catch (i) {
                        vt(l, t, i)
                    }
                else
                    try {
                        Ht.removeChild(l.stateNode)
                    } catch (i) {
                        vt(l, t, i)
                    }
            break;
        case 18:
            Ht !== null && (Jl ? (e = Ht,
            Qm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode),
            ir(e)) : Qm(Ht, l.stateNode));
            break;
        case 4:
            n = Ht,
            a = Jl,
            Ht = l.stateNode.containerInfo,
            Jl = !0,
            va(e, t, l),
            Ht = n,
            Jl = a;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Ga(2, l, t),
            il || Ga(4, l, t),
            va(e, t, l);
            break;
        case 1:
            il || (la(l, t),
            n = l.stateNode,
            typeof n.componentWillUnmount == "function" && Zd(l, t, n)),
            va(e, t, l);
            break;
        case 21:
            va(e, t, l);
            break;
        case 22:
            il = (n = il) || l.memoizedState !== null,
            va(e, t, l),
            il = n;
            break;
        default:
            va(e, t, l)
        }
    }
    function em(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                ir(e)
            } catch (l) {
                vt(t, t.return, l)
            }
        }
    }
    function tm(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                ir(e)
            } catch (l) {
                vt(t, t.return, l)
            }
    }
    function Kh(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new Fd),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new Fd),
            t;
        default:
            throw Error(u(435, e.tag))
        }
    }
    function Ys(e, t) {
        var l = Kh(e);
        t.forEach(function(n) {
            if (!l.has(n)) {
                l.add(n);
                var a = ng.bind(null, e, n);
                n.then(a, a)
            }
        })
    }
    function Fl(e, t) {
        var l = t.deletions;
        if (l !== null)
            for (var n = 0; n < l.length; n++) {
                var a = l[n]
                  , i = e
                  , c = t
                  , f = c;
                e: for (; f !== null; ) {
                    switch (f.tag) {
                    case 27:
                        if (Wa(f.type)) {
                            Ht = f.stateNode,
                            Jl = !1;
                            break e
                        }
                        break;
                    case 5:
                        Ht = f.stateNode,
                        Jl = !1;
                        break e;
                    case 3:
                    case 4:
                        Ht = f.stateNode.containerInfo,
                        Jl = !0;
                        break e
                    }
                    f = f.return
                }
                if (Ht === null)
                    throw Error(u(160));
                Pd(i, c, a),
                Ht = null,
                Jl = !1,
                i = a.alternate,
                i !== null && (i.return = null),
                a.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                lm(t, e),
                t = t.sibling
    }
    var Qn = null;
    function lm(e, t) {
        var l = e.alternate
          , n = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Fl(t, e),
            Wl(e),
            n & 4 && (Ga(3, e, e.return),
            kr(3, e),
            Ga(5, e, e.return));
            break;
        case 1:
            Fl(t, e),
            Wl(e),
            n & 512 && (il || l === null || la(l, l.return)),
            n & 64 && xa && (e = e.updateQueue,
            e !== null && (n = e.callbacks,
            n !== null && (l = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
            break;
        case 26:
            var a = Qn;
            if (Fl(t, e),
            Wl(e),
            n & 512 && (il || l === null || la(l, l.return)),
            n & 4) {
                var i = l !== null ? l.memoizedState : null;
                if (n = e.memoizedState,
                l === null)
                    if (n === null)
                        if (e.stateNode === null) {
                            e: {
                                n = e.type,
                                l = e.memoizedProps,
                                a = a.ownerDocument || a;
                                t: switch (n) {
                                case "title":
                                    i = a.getElementsByTagName("title")[0],
                                    (!i || i[Re] || i[ut] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n),
                                    a.head.insertBefore(i, a.querySelector("head > title"))),
                                    Tl(i, n, l),
                                    i[ut] = e,
                                    Tt(i),
                                    n = i;
                                    break e;
                                case "link":
                                    var c = l0("link", "href", a).get(n + (l.href || ""));
                                    if (c) {
                                        for (var f = 0; f < c.length; f++)
                                            if (i = c[f],
                                            i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                c.splice(f, 1);
                                                break t
                                            }
                                    }
                                    i = a.createElement(n),
                                    Tl(i, n, l),
                                    a.head.appendChild(i);
                                    break;
                                case "meta":
                                    if (c = l0("meta", "content", a).get(n + (l.content || ""))) {
                                        for (f = 0; f < c.length; f++)
                                            if (i = c[f],
                                            i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                c.splice(f, 1);
                                                break t
                                            }
                                    }
                                    i = a.createElement(n),
                                    Tl(i, n, l),
                                    a.head.appendChild(i);
                                    break;
                                default:
                                    throw Error(u(468, n))
                                }
                                i[ut] = e,
                                Tt(i),
                                n = i
                            }
                            e.stateNode = n
                        } else
                            n0(a, e.type, e.stateNode);
                    else
                        e.stateNode = t0(a, n, e.memoizedProps);
                else
                    i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode,
                    l.parentNode.removeChild(l)) : i.count--,
                    n === null ? n0(a, e.type, e.stateNode) : t0(a, n, e.memoizedProps)) : n === null && e.stateNode !== null && ko(e, e.memoizedProps, l.memoizedProps)
            }
            break;
        case 27:
            Fl(t, e),
            Wl(e),
            n & 512 && (il || l === null || la(l, l.return)),
            l !== null && n & 4 && ko(e, e.memoizedProps, l.memoizedProps);
            break;
        case 5:
            if (Fl(t, e),
            Wl(e),
            n & 512 && (il || l === null || la(l, l.return)),
            e.flags & 32) {
                a = e.stateNode;
                try {
                    ul(a, "")
                } catch (he) {
                    vt(e, e.return, he)
                }
            }
            n & 4 && e.stateNode != null && (a = e.memoizedProps,
            ko(e, a, l !== null ? l.memoizedProps : a)),
            n & 1024 && (Uo = !0);
            break;
        case 6:
            if (Fl(t, e),
            Wl(e),
            n & 4) {
                if (e.stateNode === null)
                    throw Error(u(162));
                n = e.memoizedProps,
                l = e.stateNode;
                try {
                    l.nodeValue = n
                } catch (he) {
                    vt(e, e.return, he)
                }
            }
            break;
        case 3:
            if (nc = null,
            a = Qn,
            Qn = tc(t.containerInfo),
            Fl(t, e),
            Qn = a,
            Wl(e),
            n & 4 && l !== null && l.memoizedState.isDehydrated)
                try {
                    ir(t.containerInfo)
                } catch (he) {
                    vt(e, e.return, he)
                }
            Uo && (Uo = !1,
            nm(e));
            break;
        case 4:
            n = Qn,
            Qn = tc(e.stateNode.containerInfo),
            Fl(t, e),
            Wl(e),
            Qn = n;
            break;
        case 12:
            Fl(t, e),
            Wl(e);
            break;
        case 31:
            Fl(t, e),
            Wl(e),
            n & 4 && (n = e.updateQueue,
            n !== null && (e.updateQueue = null,
            Ys(e, n)));
            break;
        case 13:
            Fl(t, e),
            Wl(e),
            e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Vs = Ke()),
            n & 4 && (n = e.updateQueue,
            n !== null && (e.updateQueue = null,
            Ys(e, n)));
            break;
        case 22:
            a = e.memoizedState !== null;
            var x = l !== null && l.memoizedState !== null
              , D = xa
              , V = il;
            if (xa = D || a,
            il = V || x,
            Fl(t, e),
            il = V,
            xa = D,
            Wl(e),
            n & 8192)
                e: for (t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (l === null || x || xa || il || Ti(e)),
                l = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (l === null) {
                            x = l = t;
                            try {
                                if (i = x.stateNode,
                                a)
                                    c = i.style,
                                    typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    f = x.stateNode;
                                    var $ = x.memoizedProps.style
                                      , k = $ != null && $.hasOwnProperty("display") ? $.display : null;
                                    f.style.display = k == null || typeof k == "boolean" ? "" : ("" + k).trim()
                                }
                            } catch (he) {
                                vt(x, x.return, he)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (l === null) {
                            x = t;
                            try {
                                x.stateNode.nodeValue = a ? "" : x.memoizedProps
                            } catch (he) {
                                vt(x, x.return, he)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (l === null) {
                            x = t;
                            try {
                                var H = x.stateNode;
                                a ? Zm(H, !0) : Zm(x.stateNode, !1)
                            } catch (he) {
                                vt(x, x.return, he)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        l === t && (l = null),
                        t = t.return
                    }
                    l === t && (l = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            n & 4 && (n = e.updateQueue,
            n !== null && (l = n.retryQueue,
            l !== null && (n.retryQueue = null,
            Ys(e, l))));
            break;
        case 19:
            Fl(t, e),
            Wl(e),
            n & 4 && (n = e.updateQueue,
            n !== null && (e.updateQueue = null,
            Ys(e, n)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            Fl(t, e),
            Wl(e)
        }
    }
    function Wl(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var l, n = e.return; n !== null; ) {
                    if (Kd(n)) {
                        l = n;
                        break
                    }
                    n = n.return
                }
                if (l == null)
                    throw Error(u(160));
                switch (l.tag) {
                case 27:
                    var a = l.stateNode
                      , i = Ro(e);
                    qs(e, i, a);
                    break;
                case 5:
                    var c = l.stateNode;
                    l.flags & 32 && (ul(c, ""),
                    l.flags &= -33);
                    var f = Ro(e);
                    qs(e, f, c);
                    break;
                case 3:
                case 4:
                    var x = l.stateNode.containerInfo
                      , D = Ro(e);
                    Bo(e, D, x);
                    break;
                default:
                    throw Error(u(161))
                }
            } catch (V) {
                vt(e, e.return, V)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function nm(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                nm(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function wa(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                Wd(e, t.alternate, t),
                t = t.sibling
    }
    function Ti(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Ga(4, t, t.return),
                Ti(t);
                break;
            case 1:
                la(t, t.return);
                var l = t.stateNode;
                typeof l.componentWillUnmount == "function" && Zd(t, t.return, l),
                Ti(t);
                break;
            case 27:
                Gr(t.stateNode);
            case 26:
            case 5:
                la(t, t.return),
                Ti(t);
                break;
            case 22:
                t.memoizedState === null && Ti(t);
                break;
            case 30:
                Ti(t);
                break;
            default:
                Ti(t)
            }
            e = e.sibling
        }
    }
    function Sa(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var n = t.alternate
              , a = e
              , i = t
              , c = i.flags;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                Sa(a, i, l),
                kr(4, i);
                break;
            case 1:
                if (Sa(a, i, l),
                n = i,
                a = n.stateNode,
                typeof a.componentDidMount == "function")
                    try {
                        a.componentDidMount()
                    } catch (D) {
                        vt(n, n.return, D)
                    }
                if (n = i,
                a = n.updateQueue,
                a !== null) {
                    var f = n.stateNode;
                    try {
                        var x = a.shared.hiddenCallbacks;
                        if (x !== null)
                            for (a.shared.hiddenCallbacks = null,
                            a = 0; a < x.length; a++)
                                kf(x[a], f)
                    } catch (D) {
                        vt(n, n.return, D)
                    }
                }
                l && c & 64 && Qd(i),
                Rr(i, i.return);
                break;
            case 27:
                Jd(i);
            case 26:
            case 5:
                Sa(a, i, l),
                l && n === null && c & 4 && $d(i),
                Rr(i, i.return);
                break;
            case 12:
                Sa(a, i, l);
                break;
            case 31:
                Sa(a, i, l),
                l && c & 4 && em(a, i);
                break;
            case 13:
                Sa(a, i, l),
                l && c & 4 && tm(a, i);
                break;
            case 22:
                i.memoizedState === null && Sa(a, i, l),
                Rr(i, i.return);
                break;
            case 30:
                break;
            default:
                Sa(a, i, l)
            }
            t = t.sibling
        }
    }
    function Ho(e, t) {
        var l = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== l && (e != null && e.refCount++,
        l != null && wr(l))
    }
    function Lo(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && wr(e))
    }
    function Zn(e, t, l, n) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                am(e, t, l, n),
                t = t.sibling
    }
    function am(e, t, l, n) {
        var a = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Zn(e, t, l, n),
            a & 2048 && kr(9, t);
            break;
        case 1:
            Zn(e, t, l, n);
            break;
        case 3:
            Zn(e, t, l, n),
            a & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && wr(e)));
            break;
        case 12:
            if (a & 2048) {
                Zn(e, t, l, n),
                e = t.stateNode;
                try {
                    var i = t.memoizedProps
                      , c = i.id
                      , f = i.onPostCommit;
                    typeof f == "function" && f(c, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (x) {
                    vt(t, t.return, x)
                }
            } else
                Zn(e, t, l, n);
            break;
        case 31:
            Zn(e, t, l, n);
            break;
        case 13:
            Zn(e, t, l, n);
            break;
        case 23:
            break;
        case 22:
            i = t.stateNode,
            c = t.alternate,
            t.memoizedState !== null ? i._visibility & 2 ? Zn(e, t, l, n) : Br(e, t) : i._visibility & 2 ? Zn(e, t, l, n) : (i._visibility |= 2,
            Ki(e, t, l, n, (t.subtreeFlags & 10256) !== 0 || !1)),
            a & 2048 && Ho(c, t);
            break;
        case 24:
            Zn(e, t, l, n),
            a & 2048 && Lo(t.alternate, t);
            break;
        default:
            Zn(e, t, l, n)
        }
    }
    function Ki(e, t, l, n, a) {
        for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var i = e
              , c = t
              , f = l
              , x = n
              , D = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                Ki(i, c, f, x, a),
                kr(8, c);
                break;
            case 23:
                break;
            case 22:
                var V = c.stateNode;
                c.memoizedState !== null ? V._visibility & 2 ? Ki(i, c, f, x, a) : Br(i, c) : (V._visibility |= 2,
                Ki(i, c, f, x, a)),
                a && D & 2048 && Ho(c.alternate, c);
                break;
            case 24:
                Ki(i, c, f, x, a),
                a && D & 2048 && Lo(c.alternate, c);
                break;
            default:
                Ki(i, c, f, x, a)
            }
            t = t.sibling
        }
    }
    function Br(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var l = e
                  , n = t
                  , a = n.flags;
                switch (n.tag) {
                case 22:
                    Br(l, n),
                    a & 2048 && Ho(n.alternate, n);
                    break;
                case 24:
                    Br(l, n),
                    a & 2048 && Lo(n.alternate, n);
                    break;
                default:
                    Br(l, n)
                }
                t = t.sibling
            }
    }
    var Ur = 8192;
    function Ji(e, t, l) {
        if (e.subtreeFlags & Ur)
            for (e = e.child; e !== null; )
                im(e, t, l),
                e = e.sibling
    }
    function im(e, t, l) {
        switch (e.tag) {
        case 26:
            Ji(e, t, l),
            e.flags & Ur && e.memoizedState !== null && kg(l, Qn, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Ji(e, t, l);
            break;
        case 3:
        case 4:
            var n = Qn;
            Qn = tc(e.stateNode.containerInfo),
            Ji(e, t, l),
            Qn = n;
            break;
        case 22:
            e.memoizedState === null && (n = e.alternate,
            n !== null && n.memoizedState !== null ? (n = Ur,
            Ur = 16777216,
            Ji(e, t, l),
            Ur = n) : Ji(e, t, l));
            break;
        default:
            Ji(e, t, l)
        }
    }
    function rm(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Hr(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var n = t[l];
                    bl = n,
                    cm(n, e)
                }
            rm(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                sm(e),
                e = e.sibling
    }
    function sm(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Hr(e),
            e.flags & 2048 && Ga(9, e, e.return);
            break;
        case 3:
            Hr(e);
            break;
        case 12:
            Hr(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            Xs(e)) : Hr(e);
            break;
        default:
            Hr(e)
        }
    }
    function Xs(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var n = t[l];
                    bl = n,
                    cm(n, e)
                }
            rm(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                Ga(8, t, t.return),
                Xs(t);
                break;
            case 22:
                l = t.stateNode,
                l._visibility & 2 && (l._visibility &= -3,
                Xs(t));
                break;
            default:
                Xs(t)
            }
            e = e.sibling
        }
    }
    function cm(e, t) {
        for (; bl !== null; ) {
            var l = bl;
            switch (l.tag) {
            case 0:
            case 11:
            case 15:
                Ga(8, l, t);
                break;
            case 23:
            case 22:
                if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                    var n = l.memoizedState.cachePool.pool;
                    n != null && n.refCount++
                }
                break;
            case 24:
                wr(l.memoizedState.cache)
            }
            if (n = l.child,
            n !== null)
                n.return = l,
                bl = n;
            else
                e: for (l = e; bl !== null; ) {
                    n = bl;
                    var a = n.sibling
                      , i = n.return;
                    if (Id(n),
                    n === l) {
                        bl = null;
                        break e
                    }
                    if (a !== null) {
                        a.return = i,
                        bl = a;
                        break e
                    }
                    bl = i
                }
        }
    }
    var Jh = {
        getCacheForType: function(e) {
            var t = Al(ll)
              , l = t.data.get(e);
            return l === void 0 && (l = e(),
            t.data.set(e, l)),
            l
        },
        cacheSignal: function() {
            return Al(ll).controller.signal
        }
    }
      , Fh = typeof WeakMap == "function" ? WeakMap : Map
      , mt = 0
      , Mt = null
      , We = null
      , Pe = 0
      , xt = 0
      , dn = null
      , Qa = !1
      , Fi = !1
      , qo = !1
      , ja = 0
      , Qt = 0
      , Za = 0
      , Mi = 0
      , Yo = 0
      , mn = 0
      , Wi = 0
      , Lr = null
      , Il = null
      , Xo = !1
      , Vs = 0
      , om = 0
      , Gs = 1 / 0
      , Qs = null
      , $a = null
      , dl = 0
      , Ka = null
      , Ii = null
      , Na = 0
      , Vo = 0
      , Go = null
      , um = null
      , qr = 0
      , Qo = null;
    function hn() {
        return (mt & 2) !== 0 && Pe !== 0 ? Pe & -Pe : B.T !== null ? Wo() : ln()
    }
    function fm() {
        if (mn === 0)
            if ((Pe & 536870912) === 0 || lt) {
                var e = sl;
                sl <<= 1,
                (sl & 3932160) === 0 && (sl = 262144),
                mn = e
            } else
                mn = 536870912;
        return e = un.current,
        e !== null && (e.flags |= 32),
        mn
    }
    function Pl(e, t, l) {
        (e === Mt && (xt === 2 || xt === 9) || e.cancelPendingCommit !== null) && (Pi(e, 0),
        Ja(e, Pe, mn, !1)),
        bn(e, l),
        ((mt & 2) === 0 || e !== Mt) && (e === Mt && ((mt & 2) === 0 && (Mi |= l),
        Qt === 4 && Ja(e, Pe, mn, !1)),
        na(e))
    }
    function dm(e, t, l) {
        if ((mt & 6) !== 0)
            throw Error(u(327));
        var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Vl(e, t)
          , a = n ? Ph(e, t) : $o(e, t, !0)
          , i = n;
        do {
            if (a === 0) {
                Fi && !n && Ja(e, t, 0, !1);
                break
            } else {
                if (l = e.current.alternate,
                i && !Wh(l)) {
                    a = $o(e, t, !1),
                    i = !1;
                    continue
                }
                if (a === 2) {
                    if (i = t,
                    e.errorRecoveryDisabledLanes & i)
                        var c = 0;
                    else
                        c = e.pendingLanes & -536870913,
                        c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                    if (c !== 0) {
                        t = c;
                        e: {
                            var f = e;
                            a = Lr;
                            var x = f.current.memoizedState.isDehydrated;
                            if (x && (Pi(f, c).flags |= 256),
                            c = $o(f, c, !1),
                            c !== 2) {
                                if (qo && !x) {
                                    f.errorRecoveryDisabledLanes |= i,
                                    Mi |= i,
                                    a = 4;
                                    break e
                                }
                                i = Il,
                                Il = a,
                                i !== null && (Il === null ? Il = i : Il.push.apply(Il, i))
                            }
                            a = c
                        }
                        if (i = !1,
                        a !== 2)
                            continue
                    }
                }
                if (a === 1) {
                    Pi(e, 0),
                    Ja(e, t, 0, !0);
                    break
                }
                e: {
                    switch (n = e,
                    i = a,
                    i) {
                    case 0:
                    case 1:
                        throw Error(u(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        Ja(n, t, mn, !Qa);
                        break e;
                    case 2:
                        Il = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(u(329))
                    }
                    if ((t & 62914560) === t && (a = Vs + 300 - Ke(),
                    10 < a)) {
                        if (Ja(n, t, mn, !Qa),
                        Ot(n, 0, !0) !== 0)
                            break e;
                        Na = t,
                        n.timeoutHandle = Vm(mm.bind(null, n, l, Il, Qs, Xo, t, mn, Mi, Wi, Qa, i, "Throttled", -0, 0), a);
                        break e
                    }
                    mm(n, l, Il, Qs, Xo, t, mn, Mi, Wi, Qa, i, null, -0, 0)
                }
            }
            break
        } while (!0);
        na(e)
    }
    function mm(e, t, l, n, a, i, c, f, x, D, V, $, k, H) {
        if (e.timeoutHandle = -1,
        $ = t.subtreeFlags,
        $ & 8192 || ($ & 16785408) === 16785408) {
            $ = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Ol
            },
            im(t, i, $);
            var he = (i & 62914560) === i ? Vs - Ke() : (i & 4194048) === i ? om - Ke() : 0;
            if (he = Rg($, he),
            he !== null) {
                Na = i,
                e.cancelPendingCommit = he(wm.bind(null, e, t, i, l, n, a, c, f, x, V, $, null, k, H)),
                Ja(e, i, c, !D);
                return
            }
        }
        wm(e, t, i, l, n, a, c, f, x)
    }
    function Wh(e) {
        for (var t = e; ; ) {
            var l = t.tag;
            if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue,
            l !== null && (l = l.stores,
            l !== null)))
                for (var n = 0; n < l.length; n++) {
                    var a = l[n]
                      , i = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!cn(i(), a))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (l = t.child,
            t.subtreeFlags & 16384 && l !== null)
                l.return = t,
                t = l;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Ja(e, t, l, n) {
        t &= ~Yo,
        t &= ~Mi,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        n && (e.warmLanes |= t),
        n = e.expirationTimes;
        for (var a = t; 0 < a; ) {
            var i = 31 - pt(a)
              , c = 1 << i;
            n[i] = -1,
            a &= ~c
        }
        l !== 0 && Gl(e, l, t)
    }
    function Zs() {
        return (mt & 6) === 0 ? (Yr(0),
        !1) : !0
    }
    function Zo() {
        if (We !== null) {
            if (xt === 0)
                var e = We.return;
            else
                e = We,
                ma = xi = null,
                so(e),
                Vi = null,
                jr = 0,
                e = We;
            for (; e !== null; )
                Gd(e.alternate, e),
                e = e.return;
            We = null
        }
    }
    function Pi(e, t) {
        var l = e.timeoutHandle;
        l !== -1 && (e.timeoutHandle = -1,
        pg(l)),
        l = e.cancelPendingCommit,
        l !== null && (e.cancelPendingCommit = null,
        l()),
        Na = 0,
        Zo(),
        Mt = e,
        We = l = fa(e.current, null),
        Pe = t,
        xt = 0,
        dn = null,
        Qa = !1,
        Fi = Vl(e, t),
        qo = !1,
        Wi = mn = Yo = Mi = Za = Qt = 0,
        Il = Lr = null,
        Xo = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var n = e.entangledLanes;
        if (n !== 0)
            for (e = e.entanglements,
            n &= t; 0 < n; ) {
                var a = 31 - pt(n)
                  , i = 1 << a;
                t |= e[a],
                n &= ~i
            }
        return ja = t,
        ms(),
        l
    }
    function hm(e, t) {
        Ye = null,
        B.H = Cr,
        t === Xi || t === ws ? (t = _f(),
        xt = 3) : t === Jc ? (t = _f(),
        xt = 4) : xt = t === No ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        dn = t,
        We === null && (Qt = 1,
        Rs(e, jn(t, e.current)))
    }
    function gm() {
        var e = un.current;
        return e === null ? !0 : (Pe & 4194048) === Pe ? Tn === null : (Pe & 62914560) === Pe || (Pe & 536870912) !== 0 ? e === Tn : !1
    }
    function ym() {
        var e = B.H;
        return B.H = Cr,
        e === null ? Cr : e
    }
    function pm() {
        var e = B.A;
        return B.A = Jh,
        e
    }
    function $s() {
        Qt = 4,
        Qa || (Pe & 4194048) !== Pe && un.current !== null || (Fi = !0),
        (Za & 134217727) === 0 && (Mi & 134217727) === 0 || Mt === null || Ja(Mt, Pe, mn, !1)
    }
    function $o(e, t, l) {
        var n = mt;
        mt |= 2;
        var a = ym()
          , i = pm();
        (Mt !== e || Pe !== t) && (Qs = null,
        Pi(e, t)),
        t = !1;
        var c = Qt;
        e: do
            try {
                if (xt !== 0 && We !== null) {
                    var f = We
                      , x = dn;
                    switch (xt) {
                    case 8:
                        Zo(),
                        c = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        un.current === null && (t = !0);
                        var D = xt;
                        if (xt = 0,
                        dn = null,
                        er(e, f, x, D),
                        l && Fi) {
                            c = 0;
                            break e
                        }
                        break;
                    default:
                        D = xt,
                        xt = 0,
                        dn = null,
                        er(e, f, x, D)
                    }
                }
                Ih(),
                c = Qt;
                break
            } catch (V) {
                hm(e, V)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        ma = xi = null,
        mt = n,
        B.H = a,
        B.A = i,
        We === null && (Mt = null,
        Pe = 0,
        ms()),
        c
    }
    function Ih() {
        for (; We !== null; )
            bm(We)
    }
    function Ph(e, t) {
        var l = mt;
        mt |= 2;
        var n = ym()
          , a = pm();
        Mt !== e || Pe !== t ? (Qs = null,
        Gs = Ke() + 500,
        Pi(e, t)) : Fi = Vl(e, t);
        e: do
            try {
                if (xt !== 0 && We !== null) {
                    t = We;
                    var i = dn;
                    t: switch (xt) {
                    case 1:
                        xt = 0,
                        dn = null,
                        er(e, t, i, 1);
                        break;
                    case 2:
                    case 9:
                        if (Mf(i)) {
                            xt = 0,
                            dn = null,
                            xm(t);
                            break
                        }
                        t = function() {
                            xt !== 2 && xt !== 9 || Mt !== e || (xt = 7),
                            na(e)
                        }
                        ,
                        i.then(t, t);
                        break e;
                    case 3:
                        xt = 7;
                        break e;
                    case 4:
                        xt = 5;
                        break e;
                    case 7:
                        Mf(i) ? (xt = 0,
                        dn = null,
                        xm(t)) : (xt = 0,
                        dn = null,
                        er(e, t, i, 7));
                        break;
                    case 5:
                        var c = null;
                        switch (We.tag) {
                        case 26:
                            c = We.memoizedState;
                        case 5:
                        case 27:
                            var f = We;
                            if (c ? a0(c) : f.stateNode.complete) {
                                xt = 0,
                                dn = null;
                                var x = f.sibling;
                                if (x !== null)
                                    We = x;
                                else {
                                    var D = f.return;
                                    D !== null ? (We = D,
                                    Ks(D)) : We = null
                                }
                                break t
                            }
                        }
                        xt = 0,
                        dn = null,
                        er(e, t, i, 5);
                        break;
                    case 6:
                        xt = 0,
                        dn = null,
                        er(e, t, i, 6);
                        break;
                    case 8:
                        Zo(),
                        Qt = 6;
                        break e;
                    default:
                        throw Error(u(462))
                    }
                }
                eg();
                break
            } catch (V) {
                hm(e, V)
            }
        while (!0);
        return ma = xi = null,
        B.H = n,
        B.A = a,
        mt = l,
        We !== null ? 0 : (Mt = null,
        Pe = 0,
        ms(),
        Qt)
    }
    function eg() {
        for (; We !== null && !gn(); )
            bm(We)
    }
    function bm(e) {
        var t = Xd(e.alternate, e, ja);
        e.memoizedProps = e.pendingProps,
        t === null ? Ks(e) : We = t
    }
    function xm(e) {
        var t = e
          , l = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Bd(l, t, t.pendingProps, t.type, void 0, Pe);
            break;
        case 11:
            t = Bd(l, t, t.pendingProps, t.type.render, t.ref, Pe);
            break;
        case 5:
            so(t);
        default:
            Gd(l, t),
            t = We = pf(t, ja),
            t = Xd(l, t, ja)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? Ks(e) : We = t
    }
    function er(e, t, l, n) {
        ma = xi = null,
        so(t),
        Vi = null,
        jr = 0;
        var a = t.return;
        try {
            if (Xh(e, a, t, l, Pe)) {
                Qt = 1,
                Rs(e, jn(l, e.current)),
                We = null;
                return
            }
        } catch (i) {
            if (a !== null)
                throw We = a,
                i;
            Qt = 1,
            Rs(e, jn(l, e.current)),
            We = null;
            return
        }
        t.flags & 32768 ? (lt || n === 1 ? e = !0 : Fi || (Pe & 536870912) !== 0 ? e = !1 : (Qa = e = !0,
        (n === 2 || n === 9 || n === 3 || n === 6) && (n = un.current,
        n !== null && n.tag === 13 && (n.flags |= 16384))),
        vm(t, e)) : Ks(t)
    }
    function Ks(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                vm(t, Qa);
                return
            }
            e = t.return;
            var l = Qh(t.alternate, t, ja);
            if (l !== null) {
                We = l;
                return
            }
            if (t = t.sibling,
            t !== null) {
                We = t;
                return
            }
            We = t = e
        } while (t !== null);
        Qt === 0 && (Qt = 5)
    }
    function vm(e, t) {
        do {
            var l = Zh(e.alternate, e);
            if (l !== null) {
                l.flags &= 32767,
                We = l;
                return
            }
            if (l = e.return,
            l !== null && (l.flags |= 32768,
            l.subtreeFlags = 0,
            l.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                We = e;
                return
            }
            We = e = l
        } while (e !== null);
        Qt = 6,
        We = null
    }
    function wm(e, t, l, n, a, i, c, f, x) {
        e.cancelPendingCommit = null;
        do
            Js();
        while (dl !== 0);
        if ((mt & 6) !== 0)
            throw Error(u(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(u(177));
            if (i = t.lanes | t.childLanes,
            i |= kc,
            qe(e, l, i, c, f, x),
            e === Mt && (We = Mt = null,
            Pe = 0),
            Ii = t,
            Ka = e,
            Na = l,
            Vo = i,
            Go = a,
            um = n,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            ag(tn, function() {
                return Em(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            n = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || n) {
                n = B.T,
                B.T = null,
                a = P.p,
                P.p = 2,
                c = mt,
                mt |= 4;
                try {
                    $h(e, t, l)
                } finally {
                    mt = c,
                    P.p = a,
                    B.T = n
                }
            }
            dl = 1,
            Sm(),
            jm(),
            Nm()
        }
    }
    function Sm() {
        if (dl === 1) {
            dl = 0;
            var e = Ka
              , t = Ii
              , l = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || l) {
                l = B.T,
                B.T = null;
                var n = P.p;
                P.p = 2;
                var a = mt;
                mt |= 4;
                try {
                    lm(t, e);
                    var i = iu
                      , c = cf(e.containerInfo)
                      , f = i.focusedElem
                      , x = i.selectionRange;
                    if (c !== f && f && f.ownerDocument && sf(f.ownerDocument.documentElement, f)) {
                        if (x !== null && zc(f)) {
                            var D = x.start
                              , V = x.end;
                            if (V === void 0 && (V = D),
                            "selectionStart"in f)
                                f.selectionStart = D,
                                f.selectionEnd = Math.min(V, f.value.length);
                            else {
                                var $ = f.ownerDocument || document
                                  , k = $ && $.defaultView || window;
                                if (k.getSelection) {
                                    var H = k.getSelection()
                                      , he = f.textContent.length
                                      , Ae = Math.min(x.start, he)
                                      , Nt = x.end === void 0 ? Ae : Math.min(x.end, he);
                                    !H.extend && Ae > Nt && (c = Nt,
                                    Nt = Ae,
                                    Ae = c);
                                    var z = rf(f, Ae)
                                      , A = rf(f, Nt);
                                    if (z && A && (H.rangeCount !== 1 || H.anchorNode !== z.node || H.anchorOffset !== z.offset || H.focusNode !== A.node || H.focusOffset !== A.offset)) {
                                        var O = $.createRange();
                                        O.setStart(z.node, z.offset),
                                        H.removeAllRanges(),
                                        Ae > Nt ? (H.addRange(O),
                                        H.extend(A.node, A.offset)) : (O.setEnd(A.node, A.offset),
                                        H.addRange(O))
                                    }
                                }
                            }
                        }
                        for ($ = [],
                        H = f; H = H.parentNode; )
                            H.nodeType === 1 && $.push({
                                element: H,
                                left: H.scrollLeft,
                                top: H.scrollTop
                            });
                        for (typeof f.focus == "function" && f.focus(),
                        f = 0; f < $.length; f++) {
                            var Q = $[f];
                            Q.element.scrollLeft = Q.left,
                            Q.element.scrollTop = Q.top
                        }
                    }
                    sc = !!au,
                    iu = au = null
                } finally {
                    mt = a,
                    P.p = n,
                    B.T = l
                }
            }
            e.current = t,
            dl = 2
        }
    }
    function jm() {
        if (dl === 2) {
            dl = 0;
            var e = Ka
              , t = Ii
              , l = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || l) {
                l = B.T,
                B.T = null;
                var n = P.p;
                P.p = 2;
                var a = mt;
                mt |= 4;
                try {
                    Wd(e, t.alternate, t)
                } finally {
                    mt = a,
                    P.p = n,
                    B.T = l
                }
            }
            dl = 3
        }
    }
    function Nm() {
        if (dl === 4 || dl === 3) {
            dl = 0,
            ot();
            var e = Ka
              , t = Ii
              , l = Na
              , n = um;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? dl = 5 : (dl = 0,
            Ii = Ka = null,
            Am(e, e.pendingLanes));
            var a = e.pendingLanes;
            if (a === 0 && ($a = null),
            gl(l),
            t = t.stateNode,
            Lt && typeof Lt.onCommitFiberRoot == "function")
                try {
                    Lt.onCommitFiberRoot(yt, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (n !== null) {
                t = B.T,
                a = P.p,
                P.p = 2,
                B.T = null;
                try {
                    for (var i = e.onRecoverableError, c = 0; c < n.length; c++) {
                        var f = n[c];
                        i(f.value, {
                            componentStack: f.stack
                        })
                    }
                } finally {
                    B.T = t,
                    P.p = a
                }
            }
            (Na & 3) !== 0 && Js(),
            na(e),
            a = e.pendingLanes,
            (l & 261930) !== 0 && (a & 42) !== 0 ? e === Qo ? qr++ : (qr = 0,
            Qo = e) : qr = 0,
            Yr(0)
        }
    }
    function Am(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        wr(t)))
    }
    function Js() {
        return Sm(),
        jm(),
        Nm(),
        Em()
    }
    function Em() {
        if (dl !== 5)
            return !1;
        var e = Ka
          , t = Vo;
        Vo = 0;
        var l = gl(Na)
          , n = B.T
          , a = P.p;
        try {
            P.p = 32 > l ? 32 : l,
            B.T = null,
            l = Go,
            Go = null;
            var i = Ka
              , c = Na;
            if (dl = 0,
            Ii = Ka = null,
            Na = 0,
            (mt & 6) !== 0)
                throw Error(u(331));
            var f = mt;
            if (mt |= 4,
            sm(i.current),
            am(i, i.current, c, l),
            mt = f,
            Yr(0, !1),
            Lt && typeof Lt.onPostCommitFiberRoot == "function")
                try {
                    Lt.onPostCommitFiberRoot(yt, i)
                } catch {}
            return !0
        } finally {
            P.p = a,
            B.T = n,
            Am(e, t)
        }
    }
    function Tm(e, t, l) {
        t = jn(l, t),
        t = jo(e.stateNode, t, 2),
        e = Ya(e, t, 2),
        e !== null && (bn(e, 2),
        na(e))
    }
    function vt(e, t, l) {
        if (e.tag === 3)
            Tm(e, e, l);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Tm(t, e, l);
                    break
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && ($a === null || !$a.has(n))) {
                        e = jn(l, e),
                        l = Md(2),
                        n = Ya(t, l, 2),
                        n !== null && (zd(l, n, t, e),
                        bn(n, 2),
                        na(n));
                        break
                    }
                }
                t = t.return
            }
    }
    function Ko(e, t, l) {
        var n = e.pingCache;
        if (n === null) {
            n = e.pingCache = new Fh;
            var a = new Set;
            n.set(t, a)
        } else
            a = n.get(t),
            a === void 0 && (a = new Set,
            n.set(t, a));
        a.has(l) || (qo = !0,
        a.add(l),
        e = tg.bind(null, e, t, l),
        t.then(e, e))
    }
    function tg(e, t, l) {
        var n = e.pingCache;
        n !== null && n.delete(t),
        e.pingedLanes |= e.suspendedLanes & l,
        e.warmLanes &= ~l,
        Mt === e && (Pe & l) === l && (Qt === 4 || Qt === 3 && (Pe & 62914560) === Pe && 300 > Ke() - Vs ? (mt & 2) === 0 && Pi(e, 0) : Yo |= l,
        Wi === Pe && (Wi = 0)),
        na(e)
    }
    function Mm(e, t) {
        t === 0 && (t = za()),
        e = yi(e, t),
        e !== null && (bn(e, t),
        na(e))
    }
    function lg(e) {
        var t = e.memoizedState
          , l = 0;
        t !== null && (l = t.retryLane),
        Mm(e, l)
    }
    function ng(e, t) {
        var l = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var n = e.stateNode
              , a = e.memoizedState;
            a !== null && (l = a.retryLane);
            break;
        case 19:
            n = e.stateNode;
            break;
        case 22:
            n = e.stateNode._retryCache;
            break;
        default:
            throw Error(u(314))
        }
        n !== null && n.delete(t),
        Mm(e, l)
    }
    function ag(e, t) {
        return On(e, t)
    }
    var Fs = null
      , tr = null
      , Jo = !1
      , Ws = !1
      , Fo = !1
      , Fa = 0;
    function na(e) {
        e !== tr && e.next === null && (tr === null ? Fs = tr = e : tr = tr.next = e),
        Ws = !0,
        Jo || (Jo = !0,
        rg())
    }
    function Yr(e, t) {
        if (!Fo && Ws) {
            Fo = !0;
            do
                for (var l = !1, n = Fs; n !== null; ) {
                    if (e !== 0) {
                        var a = n.pendingLanes;
                        if (a === 0)
                            var i = 0;
                        else {
                            var c = n.suspendedLanes
                              , f = n.pingedLanes;
                            i = (1 << 31 - pt(42 | e) + 1) - 1,
                            i &= a & ~(c & ~f),
                            i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0
                        }
                        i !== 0 && (l = !0,
                        Om(n, i))
                    } else
                        i = Pe,
                        i = Ot(n, n === Mt ? i : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1),
                        (i & 3) === 0 || Vl(n, i) || (l = !0,
                        Om(n, i));
                    n = n.next
                }
            while (l);
            Fo = !1
        }
    }
    function ig() {
        zm()
    }
    function zm() {
        Ws = Jo = !1;
        var e = 0;
        Fa !== 0 && yg() && (e = Fa);
        for (var t = Ke(), l = null, n = Fs; n !== null; ) {
            var a = n.next
              , i = _m(n, t);
            i === 0 ? (n.next = null,
            l === null ? Fs = a : l.next = a,
            a === null && (tr = l)) : (l = n,
            (e !== 0 || (i & 3) !== 0) && (Ws = !0)),
            n = a
        }
        dl !== 0 && dl !== 5 || Yr(e),
        Fa !== 0 && (Fa = 0)
    }
    function _m(e, t) {
        for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
            var c = 31 - pt(i)
              , f = 1 << c
              , x = a[c];
            x === -1 ? ((f & l) === 0 || (f & n) !== 0) && (a[c] = Kn(f, t)) : x <= t && (e.expiredLanes |= f),
            i &= ~f
        }
        if (t = Mt,
        l = Pe,
        l = Ot(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        n = e.callbackNode,
        l === 0 || e === t && (xt === 2 || xt === 9) || e.cancelPendingCommit !== null)
            return n !== null && n !== null && wt(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((l & 3) === 0 || Vl(e, l)) {
            if (t = l & -l,
            t === e.callbackPriority)
                return t;
            switch (n !== null && wt(n),
            gl(l)) {
            case 2:
            case 8:
                l = Xt;
                break;
            case 32:
                l = tn;
                break;
            case 268435456:
                l = Sl;
                break;
            default:
                l = tn
            }
            return n = Cm.bind(null, e),
            l = On(l, n),
            e.callbackPriority = t,
            e.callbackNode = l,
            t
        }
        return n !== null && n !== null && wt(n),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Cm(e, t) {
        if (dl !== 0 && dl !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var l = e.callbackNode;
        if (Js() && e.callbackNode !== l)
            return null;
        var n = Pe;
        return n = Ot(e, e === Mt ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        n === 0 ? null : (dm(e, n, t),
        _m(e, Ke()),
        e.callbackNode != null && e.callbackNode === l ? Cm.bind(null, e) : null)
    }
    function Om(e, t) {
        if (Js())
            return null;
        dm(e, t, !0)
    }
    function rg() {
        bg(function() {
            (mt & 6) !== 0 ? On(Ut, ig) : zm()
        })
    }
    function Wo() {
        if (Fa === 0) {
            var e = qi;
            e === 0 && (e = rl,
            rl <<= 1,
            (rl & 261888) === 0 && (rl = 256)),
            Fa = e
        }
        return Fa
    }
    function Dm(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : In("" + e)
    }
    function km(e, t) {
        var l = t.ownerDocument.createElement("input");
        return l.name = t.name,
        l.value = t.value,
        e.id && l.setAttribute("form", e.id),
        t.parentNode.insertBefore(l, t),
        e = new FormData(e),
        l.parentNode.removeChild(l),
        e
    }
    function sg(e, t, l, n, a) {
        if (t === "submit" && l && l.stateNode === a) {
            var i = Dm((a[_t] || null).action)
              , c = n.submitter;
            c && (t = (t = c[_t] || null) ? Dm(t.formAction) : c.getAttribute("formAction"),
            t !== null && (i = t,
            c = null));
            var f = new J("action","action",null,n,a);
            e.push({
                event: f,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (n.defaultPrevented) {
                            if (Fa !== 0) {
                                var x = c ? km(a, c) : new FormData(a);
                                po(l, {
                                    pending: !0,
                                    data: x,
                                    method: a.method,
                                    action: i
                                }, null, x)
                            }
                        } else
                            typeof i == "function" && (f.preventDefault(),
                            x = c ? km(a, c) : new FormData(a),
                            po(l, {
                                pending: !0,
                                data: x,
                                method: a.method,
                                action: i
                            }, i, x))
                    },
                    currentTarget: a
                }]
            })
        }
    }
    for (var Io = 0; Io < Dc.length; Io++) {
        var Po = Dc[Io]
          , cg = Po.toLowerCase()
          , og = Po[0].toUpperCase() + Po.slice(1);
        Gn(cg, "on" + og)
    }
    Gn(ff, "onAnimationEnd"),
    Gn(df, "onAnimationIteration"),
    Gn(mf, "onAnimationStart"),
    Gn("dblclick", "onDoubleClick"),
    Gn("focusin", "onFocus"),
    Gn("focusout", "onBlur"),
    Gn(Ah, "onTransitionRun"),
    Gn(Eh, "onTransitionStart"),
    Gn(Th, "onTransitionCancel"),
    Gn(hf, "onTransitionEnd"),
    Un("onMouseEnter", ["mouseout", "mouseover"]),
    Un("onMouseLeave", ["mouseout", "mouseover"]),
    Un("onPointerEnter", ["pointerout", "pointerover"]),
    Un("onPointerLeave", ["pointerout", "pointerover"]),
    $l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    $l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    $l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    $l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    $l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    $l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , ug = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xr));
    function Rm(e, t) {
        t = (t & 4) !== 0;
        for (var l = 0; l < e.length; l++) {
            var n = e[l]
              , a = n.event;
            n = n.listeners;
            e: {
                var i = void 0;
                if (t)
                    for (var c = n.length - 1; 0 <= c; c--) {
                        var f = n[c]
                          , x = f.instance
                          , D = f.currentTarget;
                        if (f = f.listener,
                        x !== i && a.isPropagationStopped())
                            break e;
                        i = f,
                        a.currentTarget = D;
                        try {
                            i(a)
                        } catch (V) {
                            ds(V)
                        }
                        a.currentTarget = null,
                        i = x
                    }
                else
                    for (c = 0; c < n.length; c++) {
                        if (f = n[c],
                        x = f.instance,
                        D = f.currentTarget,
                        f = f.listener,
                        x !== i && a.isPropagationStopped())
                            break e;
                        i = f,
                        a.currentTarget = D;
                        try {
                            i(a)
                        } catch (V) {
                            ds(V)
                        }
                        a.currentTarget = null,
                        i = x
                    }
            }
        }
    }
    function Ie(e, t) {
        var l = t[Ql];
        l === void 0 && (l = t[Ql] = new Set);
        var n = e + "__bubble";
        l.has(n) || (Bm(t, e, 2, !1),
        l.add(n))
    }
    function eu(e, t, l) {
        var n = 0;
        t && (n |= 4),
        Bm(l, e, n, t)
    }
    var Is = "_reactListening" + Math.random().toString(36).slice(2);
    function tu(e) {
        if (!e[Is]) {
            e[Is] = !0,
            nn.forEach(function(l) {
                l !== "selectionchange" && (ug.has(l) || eu(l, !1, e),
                eu(l, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Is] || (t[Is] = !0,
            eu("selectionchange", !1, t))
        }
    }
    function Bm(e, t, l, n) {
        switch (f0(t)) {
        case 2:
            var a = Hg;
            break;
        case 8:
            a = Lg;
            break;
        default:
            a = yu
        }
        l = a.bind(null, t, l, e),
        a = void 0,
        !h || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0),
        n ? a !== void 0 ? e.addEventListener(t, l, {
            capture: !0,
            passive: a
        }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
            passive: a
        }) : e.addEventListener(t, l, !1)
    }
    function lu(e, t, l, n, a) {
        var i = n;
        if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
            e: for (; ; ) {
                if (n === null)
                    return;
                var c = n.tag;
                if (c === 3 || c === 4) {
                    var f = n.stateNode.containerInfo;
                    if (f === a)
                        break;
                    if (c === 4)
                        for (c = n.return; c !== null; ) {
                            var x = c.tag;
                            if ((x === 3 || x === 4) && c.stateNode.containerInfo === a)
                                return;
                            c = c.return
                        }
                    for (; f !== null; ) {
                        if (c = Be(f),
                        c === null)
                            return;
                        if (x = c.tag,
                        x === 5 || x === 6 || x === 26 || x === 27) {
                            n = i = c;
                            continue e
                        }
                        f = f.parentNode
                    }
                }
                n = n.return
            }
        Yn(function() {
            var D = i
              , V = ql(l)
              , $ = [];
            e: {
                var k = gf.get(e);
                if (k !== void 0) {
                    var H = J
                      , he = e;
                    switch (e) {
                    case "keypress":
                        if (U(l) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        H = Vn;
                        break;
                    case "focusin":
                        he = "focus",
                        H = S;
                        break;
                    case "focusout":
                        he = "blur",
                        H = S;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        H = S;
                        break;
                    case "click":
                        if (l.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        H = nt;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        H = m;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        H = mi;
                        break;
                    case ff:
                    case df:
                    case mf:
                        H = K;
                        break;
                    case hf:
                        H = jc;
                        break;
                    case "scroll":
                    case "scrollend":
                        H = Yt;
                        break;
                    case "wheel":
                        H = us;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        H = Me;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        H = re;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        H = dh
                    }
                    var Ae = (t & 4) !== 0
                      , Nt = !Ae && (e === "scroll" || e === "scrollend")
                      , z = Ae ? k !== null ? k + "Capture" : null : k;
                    Ae = [];
                    for (var A = D, O; A !== null; ) {
                        var Q = A;
                        if (O = Q.stateNode,
                        Q = Q.tag,
                        Q !== 5 && Q !== 26 && Q !== 27 || O === null || z === null || (Q = Kl(A, z),
                        Q != null && Ae.push(Vr(A, Q, O))),
                        Nt)
                            break;
                        A = A.return
                    }
                    0 < Ae.length && (k = new H(k,he,null,l,V),
                    $.push({
                        event: k,
                        listeners: Ae
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (k = e === "mouseover" || e === "pointerover",
                    H = e === "mouseout" || e === "pointerout",
                    k && l !== di && (he = l.relatedTarget || l.fromElement) && (Be(he) || he[ol]))
                        break e;
                    if ((H || k) && (k = V.window === V ? V : (k = V.ownerDocument) ? k.defaultView || k.parentWindow : window,
                    H ? (he = l.relatedTarget || l.toElement,
                    H = D,
                    he = he ? Be(he) : null,
                    he !== null && (Nt = y(he),
                    Ae = he.tag,
                    he !== Nt || Ae !== 5 && Ae !== 27 && Ae !== 6) && (he = null)) : (H = null,
                    he = D),
                    H !== he)) {
                        if (Ae = nt,
                        Q = "onMouseLeave",
                        z = "onMouseEnter",
                        A = "mouse",
                        (e === "pointerout" || e === "pointerover") && (Ae = re,
                        Q = "onPointerLeave",
                        z = "onPointerEnter",
                        A = "pointer"),
                        Nt = H == null ? k : ft(H),
                        O = he == null ? k : ft(he),
                        k = new Ae(Q,A + "leave",H,l,V),
                        k.target = Nt,
                        k.relatedTarget = O,
                        Q = null,
                        Be(V) === D && (Ae = new Ae(z,A + "enter",he,l,V),
                        Ae.target = O,
                        Ae.relatedTarget = Nt,
                        Q = Ae),
                        Nt = Q,
                        H && he)
                            t: {
                                for (Ae = fg,
                                z = H,
                                A = he,
                                O = 0,
                                Q = z; Q; Q = Ae(Q))
                                    O++;
                                Q = 0;
                                for (var ve = A; ve; ve = Ae(ve))
                                    Q++;
                                for (; 0 < O - Q; )
                                    z = Ae(z),
                                    O--;
                                for (; 0 < Q - O; )
                                    A = Ae(A),
                                    Q--;
                                for (; O--; ) {
                                    if (z === A || A !== null && z === A.alternate) {
                                        Ae = z;
                                        break t
                                    }
                                    z = Ae(z),
                                    A = Ae(A)
                                }
                                Ae = null
                            }
                        else
                            Ae = null;
                        H !== null && Um($, k, H, Ae, !1),
                        he !== null && Nt !== null && Um($, Nt, he, Ae, !0)
                    }
                }
                e: {
                    if (k = D ? ft(D) : window,
                    H = k.nodeName && k.nodeName.toLowerCase(),
                    H === "select" || H === "input" && k.type === "file")
                        var st = Pu;
                    else if (Wu(k))
                        if (ef)
                            st = Sh;
                        else {
                            st = vh;
                            var ye = xh
                        }
                    else
                        H = k.nodeName,
                        !H || H.toLowerCase() !== "input" || k.type !== "checkbox" && k.type !== "radio" ? D && ua(D.elementType) && (st = Pu) : st = wh;
                    if (st && (st = st(e, D))) {
                        Iu($, st, l, V);
                        break e
                    }
                    ye && ye(e, k, D),
                    e === "focusout" && D && k.type === "number" && D.memoizedProps.value != null && xn(k, "number", k.value)
                }
                switch (ye = D ? ft(D) : window,
                e) {
                case "focusin":
                    (Wu(ye) || ye.contentEditable === "true") && (Oi = ye,
                    _c = D,
                    br = null);
                    break;
                case "focusout":
                    br = _c = Oi = null;
                    break;
                case "mousedown":
                    Cc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Cc = !1,
                    of($, l, V);
                    break;
                case "selectionchange":
                    if (Nh)
                        break;
                case "keydown":
                case "keyup":
                    of($, l, V)
                }
                var Ge;
                if (Ec)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var et = "onCompositionStart";
                            break e;
                        case "compositionend":
                            et = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            et = "onCompositionUpdate";
                            break e
                        }
                        et = void 0
                    }
                else
                    Ci ? Ju(e, l) && (et = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (et = "onCompositionStart");
                et && (Zu && l.locale !== "ko" && (Ci || et !== "onCompositionStart" ? et === "onCompositionEnd" && Ci && (Ge = G()) : (T = V,
                X = "value"in T ? T.value : T.textContent,
                Ci = !0)),
                ye = Ps(D, et),
                0 < ye.length && (et = new rt(et,e,null,l,V),
                $.push({
                    event: et,
                    listeners: ye
                }),
                Ge ? et.data = Ge : (Ge = Fu(l),
                Ge !== null && (et.data = Ge)))),
                (Ge = hh ? gh(e, l) : yh(e, l)) && (et = Ps(D, "onBeforeInput"),
                0 < et.length && (ye = new rt("onBeforeInput","beforeinput",null,l,V),
                $.push({
                    event: ye,
                    listeners: et
                }),
                ye.data = Ge)),
                sg($, e, D, l, V)
            }
            Rm($, t)
        })
    }
    function Vr(e, t, l) {
        return {
            instance: e,
            listener: t,
            currentTarget: l
        }
    }
    function Ps(e, t) {
        for (var l = t + "Capture", n = []; e !== null; ) {
            var a = e
              , i = a.stateNode;
            if (a = a.tag,
            a !== 5 && a !== 26 && a !== 27 || i === null || (a = Kl(e, l),
            a != null && n.unshift(Vr(e, a, i)),
            a = Kl(e, t),
            a != null && n.push(Vr(e, a, i))),
            e.tag === 3)
                return n;
            e = e.return
        }
        return []
    }
    function fg(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function Um(e, t, l, n, a) {
        for (var i = t._reactName, c = []; l !== null && l !== n; ) {
            var f = l
              , x = f.alternate
              , D = f.stateNode;
            if (f = f.tag,
            x !== null && x === n)
                break;
            f !== 5 && f !== 26 && f !== 27 || D === null || (x = D,
            a ? (D = Kl(l, i),
            D != null && c.unshift(Vr(l, D, x))) : a || (D = Kl(l, i),
            D != null && c.push(Vr(l, D, x)))),
            l = l.return
        }
        c.length !== 0 && e.push({
            event: t,
            listeners: c
        })
    }
    var dg = /\r\n?/g
      , mg = /\u0000|\uFFFD/g;
    function Hm(e) {
        return (typeof e == "string" ? e : "" + e).replace(dg, `
`).replace(mg, "")
    }
    function Lm(e, t) {
        return t = Hm(t),
        Hm(e) === t
    }
    function jt(e, t, l, n, a, i) {
        switch (l) {
        case "children":
            typeof n == "string" ? t === "body" || t === "textarea" && n === "" || ul(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && ul(e, "" + n);
            break;
        case "className":
            Hn(e, "class", n);
            break;
        case "tabIndex":
            Hn(e, "tabindex", n);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Hn(e, l, n);
            break;
        case "style":
            fi(e, n, i);
            break;
        case "data":
            if (t !== "object") {
                Hn(e, "data", n);
                break
            }
        case "src":
        case "href":
            if (n === "" && (t !== "a" || l !== "href")) {
                e.removeAttribute(l);
                break
            }
            if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
                e.removeAttribute(l);
                break
            }
            n = In("" + n),
            e.setAttribute(l, n);
            break;
        case "action":
        case "formAction":
            if (typeof n == "function") {
                e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof i == "function" && (l === "formAction" ? (t !== "input" && jt(e, t, "name", a.name, a, null),
                jt(e, t, "formEncType", a.formEncType, a, null),
                jt(e, t, "formMethod", a.formMethod, a, null),
                jt(e, t, "formTarget", a.formTarget, a, null)) : (jt(e, t, "encType", a.encType, a, null),
                jt(e, t, "method", a.method, a, null),
                jt(e, t, "target", a.target, a, null)));
            if (n == null || typeof n == "symbol" || typeof n == "boolean") {
                e.removeAttribute(l);
                break
            }
            n = In("" + n),
            e.setAttribute(l, n);
            break;
        case "onClick":
            n != null && (e.onclick = Ol);
            break;
        case "onScroll":
            n != null && Ie("scroll", e);
            break;
        case "onScrollEnd":
            n != null && Ie("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (n != null) {
                if (typeof n != "object" || !("__html"in n))
                    throw Error(u(61));
                if (l = n.__html,
                l != null) {
                    if (a.children != null)
                        throw Error(u(60));
                    e.innerHTML = l
                }
            }
            break;
        case "multiple":
            e.multiple = n && typeof n != "function" && typeof n != "symbol";
            break;
        case "muted":
            e.muted = n && typeof n != "function" && typeof n != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            l = In("" + n),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "" + n) : e.removeAttribute(l);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
            break;
        case "capture":
        case "download":
            n === !0 ? e.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, n) : e.removeAttribute(l);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(l, n) : e.removeAttribute(l);
            break;
        case "rowSpan":
        case "start":
            n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(l) : e.setAttribute(l, n);
            break;
        case "popover":
            Ie("beforetoggle", e),
            Ie("toggle", e),
            Wn(e, "popover", n);
            break;
        case "xlinkActuate":
            el(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
            break;
        case "xlinkArcrole":
            el(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
            break;
        case "xlinkRole":
            el(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
            break;
        case "xlinkShow":
            el(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
            break;
        case "xlinkTitle":
            el(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
            break;
        case "xlinkType":
            el(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
            break;
        case "xmlBase":
            el(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
            break;
        case "xmlLang":
            el(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
            break;
        case "xmlSpace":
            el(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
            break;
        case "is":
            Wn(e, "is", n);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Da.get(l) || l,
            Wn(e, l, n))
        }
    }
    function nu(e, t, l, n, a, i) {
        switch (l) {
        case "style":
            fi(e, n, i);
            break;
        case "dangerouslySetInnerHTML":
            if (n != null) {
                if (typeof n != "object" || !("__html"in n))
                    throw Error(u(61));
                if (l = n.__html,
                l != null) {
                    if (a.children != null)
                        throw Error(u(60));
                    e.innerHTML = l
                }
            }
            break;
        case "children":
            typeof n == "string" ? ul(e, n) : (typeof n == "number" || typeof n == "bigint") && ul(e, "" + n);
            break;
        case "onScroll":
            n != null && Ie("scroll", e);
            break;
        case "onScrollEnd":
            n != null && Ie("scrollend", e);
            break;
        case "onClick":
            n != null && (e.onclick = Ol);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Hl.hasOwnProperty(l))
                e: {
                    if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"),
                    t = l.slice(2, a ? l.length - 7 : void 0),
                    i = e[_t] || null,
                    i = i != null ? i[l] : null,
                    typeof i == "function" && e.removeEventListener(t, i, a),
                    typeof n == "function")) {
                        typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)),
                        e.addEventListener(t, n, a);
                        break e
                    }
                    l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : Wn(e, l, n)
                }
        }
    }
    function Tl(e, t, l) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            Ie("error", e),
            Ie("load", e);
            var n = !1, a = !1, i;
            for (i in l)
                if (l.hasOwnProperty(i)) {
                    var c = l[i];
                    if (c != null)
                        switch (i) {
                        case "src":
                            n = !0;
                            break;
                        case "srcSet":
                            a = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(u(137, t));
                        default:
                            jt(e, t, i, c, l, null)
                        }
                }
            a && jt(e, t, "srcSet", l.srcSet, l, null),
            n && jt(e, t, "src", l.src, l, null);
            return;
        case "input":
            Ie("invalid", e);
            var f = i = c = a = null
              , x = null
              , D = null;
            for (n in l)
                if (l.hasOwnProperty(n)) {
                    var V = l[n];
                    if (V != null)
                        switch (n) {
                        case "name":
                            a = V;
                            break;
                        case "type":
                            c = V;
                            break;
                        case "checked":
                            x = V;
                            break;
                        case "defaultChecked":
                            D = V;
                            break;
                        case "value":
                            i = V;
                            break;
                        case "defaultValue":
                            f = V;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (V != null)
                                throw Error(u(137, t));
                            break;
                        default:
                            jt(e, t, n, V, l, null)
                        }
                }
            rn(e, i, f, x, D, c, a, !1);
            return;
        case "select":
            Ie("invalid", e),
            n = c = i = null;
            for (a in l)
                if (l.hasOwnProperty(a) && (f = l[a],
                f != null))
                    switch (a) {
                    case "value":
                        i = f;
                        break;
                    case "defaultValue":
                        c = f;
                        break;
                    case "multiple":
                        n = f;
                    default:
                        jt(e, t, a, f, l, null)
                    }
            t = i,
            l = c,
            e.multiple = !!n,
            t != null ? vn(e, !!n, t, !1) : l != null && vn(e, !!n, l, !0);
            return;
        case "textarea":
            Ie("invalid", e),
            i = a = n = null;
            for (c in l)
                if (l.hasOwnProperty(c) && (f = l[c],
                f != null))
                    switch (c) {
                    case "value":
                        n = f;
                        break;
                    case "defaultValue":
                        a = f;
                        break;
                    case "children":
                        i = f;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (f != null)
                            throw Error(u(91));
                        break;
                    default:
                        jt(e, t, c, f, l, null)
                    }
            Ln(e, n, a, i);
            return;
        case "option":
            for (x in l)
                l.hasOwnProperty(x) && (n = l[x],
                n != null) && (x === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : jt(e, t, x, n, l, null));
            return;
        case "dialog":
            Ie("beforetoggle", e),
            Ie("toggle", e),
            Ie("cancel", e),
            Ie("close", e);
            break;
        case "iframe":
        case "object":
            Ie("load", e);
            break;
        case "video":
        case "audio":
            for (n = 0; n < Xr.length; n++)
                Ie(Xr[n], e);
            break;
        case "image":
            Ie("error", e),
            Ie("load", e);
            break;
        case "details":
            Ie("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            Ie("error", e),
            Ie("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (D in l)
                if (l.hasOwnProperty(D) && (n = l[D],
                n != null))
                    switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(u(137, t));
                    default:
                        jt(e, t, D, n, l, null)
                    }
            return;
        default:
            if (ua(t)) {
                for (V in l)
                    l.hasOwnProperty(V) && (n = l[V],
                    n !== void 0 && nu(e, t, V, n, l, void 0));
                return
            }
        }
        for (f in l)
            l.hasOwnProperty(f) && (n = l[f],
            n != null && jt(e, t, f, n, l, null))
    }
    function hg(e, t, l, n) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var a = null
              , i = null
              , c = null
              , f = null
              , x = null
              , D = null
              , V = null;
            for (H in l) {
                var $ = l[H];
                if (l.hasOwnProperty(H) && $ != null)
                    switch (H) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        x = $;
                    default:
                        n.hasOwnProperty(H) || jt(e, t, H, null, n, $)
                    }
            }
            for (var k in n) {
                var H = n[k];
                if ($ = l[k],
                n.hasOwnProperty(k) && (H != null || $ != null))
                    switch (k) {
                    case "type":
                        i = H;
                        break;
                    case "name":
                        a = H;
                        break;
                    case "checked":
                        D = H;
                        break;
                    case "defaultChecked":
                        V = H;
                        break;
                    case "value":
                        c = H;
                        break;
                    case "defaultValue":
                        f = H;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (H != null)
                            throw Error(u(137, t));
                        break;
                    default:
                        H !== $ && jt(e, t, k, H, n, $)
                    }
            }
            Ue(e, c, f, x, D, V, i, a);
            return;
        case "select":
            H = c = f = k = null;
            for (i in l)
                if (x = l[i],
                l.hasOwnProperty(i) && x != null)
                    switch (i) {
                    case "value":
                        break;
                    case "multiple":
                        H = x;
                    default:
                        n.hasOwnProperty(i) || jt(e, t, i, null, n, x)
                    }
            for (a in n)
                if (i = n[a],
                x = l[a],
                n.hasOwnProperty(a) && (i != null || x != null))
                    switch (a) {
                    case "value":
                        k = i;
                        break;
                    case "defaultValue":
                        f = i;
                        break;
                    case "multiple":
                        c = i;
                    default:
                        i !== x && jt(e, t, a, i, n, x)
                    }
            t = f,
            l = c,
            n = H,
            k != null ? vn(e, !!l, k, !1) : !!n != !!l && (t != null ? vn(e, !!l, t, !0) : vn(e, !!l, l ? [] : "", !1));
            return;
        case "textarea":
            H = k = null;
            for (f in l)
                if (a = l[f],
                l.hasOwnProperty(f) && a != null && !n.hasOwnProperty(f))
                    switch (f) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        jt(e, t, f, null, n, a)
                    }
            for (c in n)
                if (a = n[c],
                i = l[c],
                n.hasOwnProperty(c) && (a != null || i != null))
                    switch (c) {
                    case "value":
                        k = a;
                        break;
                    case "defaultValue":
                        H = a;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (a != null)
                            throw Error(u(91));
                        break;
                    default:
                        a !== i && jt(e, t, c, a, n, i)
                    }
            Ca(e, k, H);
            return;
        case "option":
            for (var he in l)
                k = l[he],
                l.hasOwnProperty(he) && k != null && !n.hasOwnProperty(he) && (he === "selected" ? e.selected = !1 : jt(e, t, he, null, n, k));
            for (x in n)
                k = n[x],
                H = l[x],
                n.hasOwnProperty(x) && k !== H && (k != null || H != null) && (x === "selected" ? e.selected = k && typeof k != "function" && typeof k != "symbol" : jt(e, t, x, k, n, H));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var Ae in l)
                k = l[Ae],
                l.hasOwnProperty(Ae) && k != null && !n.hasOwnProperty(Ae) && jt(e, t, Ae, null, n, k);
            for (D in n)
                if (k = n[D],
                H = l[D],
                n.hasOwnProperty(D) && k !== H && (k != null || H != null))
                    switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (k != null)
                            throw Error(u(137, t));
                        break;
                    default:
                        jt(e, t, D, k, n, H)
                    }
            return;
        default:
            if (ua(t)) {
                for (var Nt in l)
                    k = l[Nt],
                    l.hasOwnProperty(Nt) && k !== void 0 && !n.hasOwnProperty(Nt) && nu(e, t, Nt, void 0, n, k);
                for (V in n)
                    k = n[V],
                    H = l[V],
                    !n.hasOwnProperty(V) || k === H || k === void 0 && H === void 0 || nu(e, t, V, k, n, H);
                return
            }
        }
        for (var z in l)
            k = l[z],
            l.hasOwnProperty(z) && k != null && !n.hasOwnProperty(z) && jt(e, t, z, null, n, k);
        for ($ in n)
            k = n[$],
            H = l[$],
            !n.hasOwnProperty($) || k === H || k == null && H == null || jt(e, t, $, k, n, H)
    }
    function qm(e) {
        switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function gg() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
                var a = l[n]
                  , i = a.transferSize
                  , c = a.initiatorType
                  , f = a.duration;
                if (i && f && qm(c)) {
                    for (c = 0,
                    f = a.responseEnd,
                    n += 1; n < l.length; n++) {
                        var x = l[n]
                          , D = x.startTime;
                        if (D > f)
                            break;
                        var V = x.transferSize
                          , $ = x.initiatorType;
                        V && qm($) && (x = x.responseEnd,
                        c += V * (x < f ? 1 : (f - D) / (x - D)))
                    }
                    if (--n,
                    t += 8 * (i + c) / (a.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == "number") ? e : 5
    }
    var au = null
      , iu = null;
    function ec(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function Ym(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Xm(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function ru(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var su = null;
    function yg() {
        var e = window.event;
        return e && e.type === "popstate" ? e === su ? !1 : (su = e,
        !0) : (su = null,
        !1)
    }
    var Vm = typeof setTimeout == "function" ? setTimeout : void 0
      , pg = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Gm = typeof Promise == "function" ? Promise : void 0
      , bg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gm < "u" ? function(e) {
        return Gm.resolve(null).then(e).catch(xg)
    }
    : Vm;
    function xg(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Wa(e) {
        return e === "head"
    }
    function Qm(e, t) {
        var l = t
          , n = 0;
        do {
            var a = l.nextSibling;
            if (e.removeChild(l),
            a && a.nodeType === 8)
                if (l = a.data,
                l === "/$" || l === "/&") {
                    if (n === 0) {
                        e.removeChild(a),
                        ir(t);
                        return
                    }
                    n--
                } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
                    n++;
                else if (l === "html")
                    Gr(e.ownerDocument.documentElement);
                else if (l === "head") {
                    l = e.ownerDocument.head,
                    Gr(l);
                    for (var i = l.firstChild; i; ) {
                        var c = i.nextSibling
                          , f = i.nodeName;
                        i[Re] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i),
                        i = c
                    }
                } else
                    l === "body" && Gr(e.ownerDocument.body);
            l = a
        } while (l);
        ir(t)
    }
    function Zm(e, t) {
        var l = e;
        e = 0;
        do {
            var n = l.nextSibling;
            if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display,
            l.style.display = "none") : (l.style.display = l._stashedDisplay || "",
            l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue,
            l.nodeValue = "") : l.nodeValue = l._stashedText || ""),
            n && n.nodeType === 8)
                if (l = n.data,
                l === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
            l = n
        } while (l)
    }
    function cu(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var l = t;
            switch (t = t.nextSibling,
            l.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                cu(l),
                bt(l);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (l.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(l)
        }
    }
    function vg(e, t, l, n) {
        for (; e.nodeType === 1; ) {
            var a = l;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (n) {
                if (!e[Re])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (i = e.getAttribute("rel"),
                        i === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (i !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (i = e.getAttribute("src"),
                        (i !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var i = a.name == null ? null : "" + a.name;
                if (a.type === "hidden" && e.getAttribute("name") === i)
                    return e
            } else
                return e;
            if (e = Mn(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function wg(e, t, l) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Mn(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function $m(e, t) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Mn(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function ou(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function uu(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function Sg(e, t) {
        var l = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = t;
        else if (e.data !== "$?" || l.readyState !== "loading")
            t();
        else {
            var n = function() {
                t(),
                l.removeEventListener("DOMContentLoaded", n)
            };
            l.addEventListener("DOMContentLoaded", n),
            e._reactRetry = n
        }
    }
    function Mn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return e
    }
    var fu = null;
    function Km(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "/$" || l === "/&") {
                    if (t === 0)
                        return Mn(e.nextSibling);
                    t--
                } else
                    l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function Jm(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    l !== "/$" && l !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function Fm(e, t, l) {
        switch (t = ec(l),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(u(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(u(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(u(454));
            return e;
        default:
            throw Error(u(451))
        }
    }
    function Gr(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        bt(e)
    }
    var zn = new Map
      , Wm = new Set;
    function tc(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var Aa = P.d;
    P.d = {
        f: jg,
        r: Ng,
        D: Ag,
        C: Eg,
        L: Tg,
        m: Mg,
        X: _g,
        S: zg,
        M: Cg
    };
    function jg() {
        var e = Aa.f()
          , t = Zs();
        return e || t
    }
    function Ng(e) {
        var t = it(e);
        t !== null && t.tag === 5 && t.type === "form" ? hd(t) : Aa.r(e)
    }
    var lr = typeof document > "u" ? null : document;
    function Im(e, t, l) {
        var n = lr;
        if (n && typeof t == "string" && t) {
            var a = tl(t);
            a = 'link[rel="' + e + '"][href="' + a + '"]',
            typeof l == "string" && (a += '[crossorigin="' + l + '"]'),
            Wm.has(a) || (Wm.add(a),
            e = {
                rel: e,
                crossOrigin: l,
                href: t
            },
            n.querySelector(a) === null && (t = n.createElement("link"),
            Tl(t, "link", e),
            Tt(t),
            n.head.appendChild(t)))
        }
    }
    function Ag(e) {
        Aa.D(e),
        Im("dns-prefetch", e, null)
    }
    function Eg(e, t) {
        Aa.C(e, t),
        Im("preconnect", e, t)
    }
    function Tg(e, t, l) {
        Aa.L(e, t, l);
        var n = lr;
        if (n && e && t) {
            var a = 'link[rel="preload"][as="' + tl(t) + '"]';
            t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + tl(l.imageSrcSet) + '"]',
            typeof l.imageSizes == "string" && (a += '[imagesizes="' + tl(l.imageSizes) + '"]')) : a += '[href="' + tl(e) + '"]';
            var i = a;
            switch (t) {
            case "style":
                i = nr(e);
                break;
            case "script":
                i = ar(e)
            }
            zn.has(i) || (e = C({
                rel: "preload",
                href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                as: t
            }, l),
            zn.set(i, e),
            n.querySelector(a) !== null || t === "style" && n.querySelector(Qr(i)) || t === "script" && n.querySelector(Zr(i)) || (t = n.createElement("link"),
            Tl(t, "link", e),
            Tt(t),
            n.head.appendChild(t)))
        }
    }
    function Mg(e, t) {
        Aa.m(e, t);
        var l = lr;
        if (l && e) {
            var n = t && typeof t.as == "string" ? t.as : "script"
              , a = 'link[rel="modulepreload"][as="' + tl(n) + '"][href="' + tl(e) + '"]'
              , i = a;
            switch (n) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                i = ar(e)
            }
            if (!zn.has(i) && (e = C({
                rel: "modulepreload",
                href: e
            }, t),
            zn.set(i, e),
            l.querySelector(a) === null)) {
                switch (n) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (l.querySelector(Zr(i)))
                        return
                }
                n = l.createElement("link"),
                Tl(n, "link", e),
                Tt(n),
                l.head.appendChild(n)
            }
        }
    }
    function zg(e, t, l) {
        Aa.S(e, t, l);
        var n = lr;
        if (n && e) {
            var a = Ul(n).hoistableStyles
              , i = nr(e);
            t = t || "default";
            var c = a.get(i);
            if (!c) {
                var f = {
                    loading: 0,
                    preload: null
                };
                if (c = n.querySelector(Qr(i)))
                    f.loading = 5;
                else {
                    e = C({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, l),
                    (l = zn.get(i)) && du(e, l);
                    var x = c = n.createElement("link");
                    Tt(x),
                    Tl(x, "link", e),
                    x._p = new Promise(function(D, V) {
                        x.onload = D,
                        x.onerror = V
                    }
                    ),
                    x.addEventListener("load", function() {
                        f.loading |= 1
                    }),
                    x.addEventListener("error", function() {
                        f.loading |= 2
                    }),
                    f.loading |= 4,
                    lc(c, t, n)
                }
                c = {
                    type: "stylesheet",
                    instance: c,
                    count: 1,
                    state: f
                },
                a.set(i, c)
            }
        }
    }
    function _g(e, t) {
        Aa.X(e, t);
        var l = lr;
        if (l && e) {
            var n = Ul(l).hoistableScripts
              , a = ar(e)
              , i = n.get(a);
            i || (i = l.querySelector(Zr(a)),
            i || (e = C({
                src: e,
                async: !0
            }, t),
            (t = zn.get(a)) && mu(e, t),
            i = l.createElement("script"),
            Tt(i),
            Tl(i, "link", e),
            l.head.appendChild(i)),
            i = {
                type: "script",
                instance: i,
                count: 1,
                state: null
            },
            n.set(a, i))
        }
    }
    function Cg(e, t) {
        Aa.M(e, t);
        var l = lr;
        if (l && e) {
            var n = Ul(l).hoistableScripts
              , a = ar(e)
              , i = n.get(a);
            i || (i = l.querySelector(Zr(a)),
            i || (e = C({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = zn.get(a)) && mu(e, t),
            i = l.createElement("script"),
            Tt(i),
            Tl(i, "link", e),
            l.head.appendChild(i)),
            i = {
                type: "script",
                instance: i,
                count: 1,
                state: null
            },
            n.set(a, i))
        }
    }
    function Pm(e, t, l, n) {
        var a = (a = je.current) ? tc(a) : null;
        if (!a)
            throw Error(u(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof l.precedence == "string" && typeof l.href == "string" ? (t = nr(l.href),
            l = Ul(a).hoistableStyles,
            n = l.get(t),
            n || (n = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            l.set(t, n)),
            n) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                e = nr(l.href);
                var i = Ul(a).hoistableStyles
                  , c = i.get(e);
                if (c || (a = a.ownerDocument || a,
                c = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                i.set(e, c),
                (i = a.querySelector(Qr(e))) && !i._p && (c.instance = i,
                c.state.loading = 5),
                zn.has(e) || (l = {
                    rel: "preload",
                    as: "style",
                    href: l.href,
                    crossOrigin: l.crossOrigin,
                    integrity: l.integrity,
                    media: l.media,
                    hrefLang: l.hrefLang,
                    referrerPolicy: l.referrerPolicy
                },
                zn.set(e, l),
                i || Og(a, e, l, c.state))),
                t && n === null)
                    throw Error(u(528, ""));
                return c
            }
            if (t && n !== null)
                throw Error(u(529, ""));
            return null;
        case "script":
            return t = l.async,
            l = l.src,
            typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ar(l),
            l = Ul(a).hoistableScripts,
            n = l.get(t),
            n || (n = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            l.set(t, n)),
            n) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(u(444, e))
        }
    }
    function nr(e) {
        return 'href="' + tl(e) + '"'
    }
    function Qr(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function e0(e) {
        return C({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Og(e, t, l, n) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"),
        n.preload = t,
        t.addEventListener("load", function() {
            return n.loading |= 1
        }),
        t.addEventListener("error", function() {
            return n.loading |= 2
        }),
        Tl(t, "link", l),
        Tt(t),
        e.head.appendChild(t))
    }
    function ar(e) {
        return '[src="' + tl(e) + '"]'
    }
    function Zr(e) {
        return "script[async]" + e
    }
    function t0(e, t, l) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var n = e.querySelector('style[data-href~="' + tl(l.href) + '"]');
                if (n)
                    return t.instance = n,
                    Tt(n),
                    n;
                var a = C({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return n = (e.ownerDocument || e).createElement("style"),
                Tt(n),
                Tl(n, "style", a),
                lc(n, l.precedence, e),
                t.instance = n;
            case "stylesheet":
                a = nr(l.href);
                var i = e.querySelector(Qr(a));
                if (i)
                    return t.state.loading |= 4,
                    t.instance = i,
                    Tt(i),
                    i;
                n = e0(l),
                (a = zn.get(a)) && du(n, a),
                i = (e.ownerDocument || e).createElement("link"),
                Tt(i);
                var c = i;
                return c._p = new Promise(function(f, x) {
                    c.onload = f,
                    c.onerror = x
                }
                ),
                Tl(i, "link", n),
                t.state.loading |= 4,
                lc(i, l.precedence, e),
                t.instance = i;
            case "script":
                return i = ar(l.src),
                (a = e.querySelector(Zr(i))) ? (t.instance = a,
                Tt(a),
                a) : (n = l,
                (a = zn.get(i)) && (n = C({}, l),
                mu(n, a)),
                e = e.ownerDocument || e,
                a = e.createElement("script"),
                Tt(a),
                Tl(a, "link", n),
                e.head.appendChild(a),
                t.instance = a);
            case "void":
                return null;
            default:
                throw Error(u(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance,
            t.state.loading |= 4,
            lc(n, l.precedence, e));
        return t.instance
    }
    function lc(e, t, l) {
        for (var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = n.length ? n[n.length - 1] : null, i = a, c = 0; c < n.length; c++) {
            var f = n[c];
            if (f.dataset.precedence === t)
                i = f;
            else if (i !== a)
                break
        }
        i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l,
        t.insertBefore(e, t.firstChild))
    }
    function du(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function mu(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var nc = null;
    function l0(e, t, l) {
        if (nc === null) {
            var n = new Map
              , a = nc = new Map;
            a.set(l, n)
        } else
            a = nc,
            n = a.get(l),
            n || (n = new Map,
            a.set(l, n));
        if (n.has(e))
            return n;
        for (n.set(e, null),
        l = l.getElementsByTagName(e),
        a = 0; a < l.length; a++) {
            var i = l[a];
            if (!(i[Re] || i[ut] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
                var c = i.getAttribute(t) || "";
                c = e + c;
                var f = n.get(c);
                f ? f.push(i) : n.set(c, [i])
            }
        }
        return n
    }
    function n0(e, t, l) {
        e = e.ownerDocument || e,
        e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
    }
    function Dg(e, t, l) {
        if (l === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            return t.rel === "stylesheet" ? (e = t.disabled,
            typeof t.precedence == "string" && e == null) : !0;
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function a0(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function kg(e, t, l, n) {
        if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var a = nr(n.href)
                  , i = t.querySelector(Qr(a));
                if (i) {
                    t = i._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++,
                    e = ac.bind(e),
                    t.then(e, e)),
                    l.state.loading |= 4,
                    l.instance = i,
                    Tt(i);
                    return
                }
                i = t.ownerDocument || t,
                n = e0(n),
                (a = zn.get(a)) && du(n, a),
                i = i.createElement("link"),
                Tt(i);
                var c = i;
                c._p = new Promise(function(f, x) {
                    c.onload = f,
                    c.onerror = x
                }
                ),
                Tl(i, "link", n),
                l.instance = i
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(l, t),
            (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++,
            l = ac.bind(e),
            t.addEventListener("load", l),
            t.addEventListener("error", l))
        }
    }
    var hu = 0;
    function Rg(e, t) {
        return e.stylesheets && e.count === 0 && rc(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(l) {
            var n = setTimeout(function() {
                if (e.stylesheets && rc(e, e.stylesheets),
                e.unsuspend) {
                    var i = e.unsuspend;
                    e.unsuspend = null,
                    i()
                }
            }, 6e4 + t);
            0 < e.imgBytes && hu === 0 && (hu = 62500 * gg());
            var a = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && rc(e, e.stylesheets),
                e.unsuspend)) {
                    var i = e.unsuspend;
                    e.unsuspend = null,
                    i()
                }
            }, (e.imgBytes > hu ? 50 : 800) + t);
            return e.unsuspend = l,
            function() {
                e.unsuspend = null,
                clearTimeout(n),
                clearTimeout(a)
            }
        }
        : null
    }
    function ac() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                rc(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var ic = null;
    function rc(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        ic = new Map,
        t.forEach(Bg, e),
        ic = null,
        ac.call(e))
    }
    function Bg(e, t) {
        if (!(t.state.loading & 4)) {
            var l = ic.get(e);
            if (l)
                var n = l.get(null);
            else {
                l = new Map,
                ic.set(e, l);
                for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++) {
                    var c = a[i];
                    (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c),
                    n = c)
                }
                n && l.set(null, n)
            }
            a = t.instance,
            c = a.getAttribute("data-precedence"),
            i = l.get(c) || n,
            i === n && l.set(null, a),
            l.set(c, a),
            this.count++,
            n = ac.bind(this),
            a.addEventListener("load", n),
            a.addEventListener("error", n),
            i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(a, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var $r = {
        $$typeof: I,
        Provider: null,
        Consumer: null,
        _currentValue: fe,
        _currentValue2: fe,
        _threadCount: 0
    };
    function Ug(e, t, l, n, a, i, c, f, x) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = pn(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = pn(0),
        this.hiddenUpdates = pn(null),
        this.identifierPrefix = n,
        this.onUncaughtError = a,
        this.onCaughtError = i,
        this.onRecoverableError = c,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = x,
        this.incompleteTransitions = new Map
    }
    function i0(e, t, l, n, a, i, c, f, x, D, V, $) {
        return e = new Ug(e,t,l,c,x,D,V,$,f),
        t = 1,
        i === !0 && (t |= 24),
        i = on(3, null, null, t),
        e.current = i,
        i.stateNode = e,
        t = Zc(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        i.memoizedState = {
            element: n,
            isDehydrated: l,
            cache: t
        },
        Fc(i),
        e
    }
    function r0(e) {
        return e ? (e = Ri,
        e) : Ri
    }
    function s0(e, t, l, n, a, i) {
        a = r0(a),
        n.context === null ? n.context = a : n.pendingContext = a,
        n = qa(t),
        n.payload = {
            element: l
        },
        i = i === void 0 ? null : i,
        i !== null && (n.callback = i),
        l = Ya(e, n, t),
        l !== null && (Pl(l, e, t),
        Ar(l, e, t))
    }
    function c0(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < t ? l : t
        }
    }
    function gu(e, t) {
        c0(e, t),
        (e = e.alternate) && c0(e, t)
    }
    function o0(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = yi(e, 67108864);
            t !== null && Pl(t, e, 67108864),
            gu(e, 67108864)
        }
    }
    function u0(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = hn();
            t = kn(t);
            var l = yi(e, t);
            l !== null && Pl(l, e, t),
            gu(e, t)
        }
    }
    var sc = !0;
    function Hg(e, t, l, n) {
        var a = B.T;
        B.T = null;
        var i = P.p;
        try {
            P.p = 2,
            yu(e, t, l, n)
        } finally {
            P.p = i,
            B.T = a
        }
    }
    function Lg(e, t, l, n) {
        var a = B.T;
        B.T = null;
        var i = P.p;
        try {
            P.p = 8,
            yu(e, t, l, n)
        } finally {
            P.p = i,
            B.T = a
        }
    }
    function yu(e, t, l, n) {
        if (sc) {
            var a = pu(n);
            if (a === null)
                lu(e, t, n, cc, l),
                d0(e, n);
            else if (Yg(a, e, t, l, n))
                n.stopPropagation();
            else if (d0(e, n),
            t & 4 && -1 < qg.indexOf(e)) {
                for (; a !== null; ) {
                    var i = it(a);
                    if (i !== null)
                        switch (i.tag) {
                        case 3:
                            if (i = i.stateNode,
                            i.current.memoizedState.isDehydrated) {
                                var c = Pt(i.pendingLanes);
                                if (c !== 0) {
                                    var f = i;
                                    for (f.pendingLanes |= 2,
                                    f.entangledLanes |= 2; c; ) {
                                        var x = 1 << 31 - pt(c);
                                        f.entanglements[1] |= x,
                                        c &= ~x
                                    }
                                    na(i),
                                    (mt & 6) === 0 && (Gs = Ke() + 500,
                                    Yr(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            f = yi(i, 2),
                            f !== null && Pl(f, i, 2),
                            Zs(),
                            gu(i, 2)
                        }
                    if (i = pu(n),
                    i === null && lu(e, t, n, cc, l),
                    i === a)
                        break;
                    a = i
                }
                a !== null && n.stopPropagation()
            } else
                lu(e, t, n, null, l)
        }
    }
    function pu(e) {
        return e = ql(e),
        bu(e)
    }
    var cc = null;
    function bu(e) {
        if (cc = null,
        e = Be(e),
        e !== null) {
            var t = y(e);
            if (t === null)
                e = null;
            else {
                var l = t.tag;
                if (l === 13) {
                    if (e = E(t),
                    e !== null)
                        return e;
                    e = null
                } else if (l === 31) {
                    if (e = _(t),
                    e !== null)
                        return e;
                    e = null
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return cc = e,
        null
    }
    function f0(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Et()) {
            case Ut:
                return 2;
            case Xt:
                return 8;
            case tn:
            case wl:
                return 32;
            case Sl:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var xu = !1
      , Ia = null
      , Pa = null
      , ei = null
      , Kr = new Map
      , Jr = new Map
      , ti = []
      , qg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function d0(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Ia = null;
            break;
        case "dragenter":
        case "dragleave":
            Pa = null;
            break;
        case "mouseover":
        case "mouseout":
            ei = null;
            break;
        case "pointerover":
        case "pointerout":
            Kr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Jr.delete(t.pointerId)
        }
    }
    function Fr(e, t, l, n, a, i) {
        return e === null || e.nativeEvent !== i ? (e = {
            blockedOn: t,
            domEventName: l,
            eventSystemFlags: n,
            nativeEvent: i,
            targetContainers: [a]
        },
        t !== null && (t = it(t),
        t !== null && o0(t)),
        e) : (e.eventSystemFlags |= n,
        t = e.targetContainers,
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e)
    }
    function Yg(e, t, l, n, a) {
        switch (t) {
        case "focusin":
            return Ia = Fr(Ia, e, t, l, n, a),
            !0;
        case "dragenter":
            return Pa = Fr(Pa, e, t, l, n, a),
            !0;
        case "mouseover":
            return ei = Fr(ei, e, t, l, n, a),
            !0;
        case "pointerover":
            var i = a.pointerId;
            return Kr.set(i, Fr(Kr.get(i) || null, e, t, l, n, a)),
            !0;
        case "gotpointercapture":
            return i = a.pointerId,
            Jr.set(i, Fr(Jr.get(i) || null, e, t, l, n, a)),
            !0
        }
        return !1
    }
    function m0(e) {
        var t = Be(e.target);
        if (t !== null) {
            var l = y(t);
            if (l !== null) {
                if (t = l.tag,
                t === 13) {
                    if (t = E(l),
                    t !== null) {
                        e.blockedOn = t,
                        qt(e.priority, function() {
                            u0(l)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = _(l),
                    t !== null) {
                        e.blockedOn = t,
                        qt(e.priority, function() {
                            u0(l)
                        });
                        return
                    }
                } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function oc(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var l = pu(e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var n = new l.constructor(l.type,l);
                di = n,
                l.target.dispatchEvent(n),
                di = null
            } else
                return t = it(l),
                t !== null && o0(t),
                e.blockedOn = l,
                !1;
            t.shift()
        }
        return !0
    }
    function h0(e, t, l) {
        oc(e) && l.delete(t)
    }
    function Xg() {
        xu = !1,
        Ia !== null && oc(Ia) && (Ia = null),
        Pa !== null && oc(Pa) && (Pa = null),
        ei !== null && oc(ei) && (ei = null),
        Kr.forEach(h0),
        Jr.forEach(h0)
    }
    function uc(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        xu || (xu = !0,
        s.unstable_scheduleCallback(s.unstable_NormalPriority, Xg)))
    }
    var fc = null;
    function g0(e) {
        fc !== e && (fc = e,
        s.unstable_scheduleCallback(s.unstable_NormalPriority, function() {
            fc === e && (fc = null);
            for (var t = 0; t < e.length; t += 3) {
                var l = e[t]
                  , n = e[t + 1]
                  , a = e[t + 2];
                if (typeof n != "function") {
                    if (bu(n || l) === null)
                        continue;
                    break
                }
                var i = it(l);
                i !== null && (e.splice(t, 3),
                t -= 3,
                po(i, {
                    pending: !0,
                    data: a,
                    method: l.method,
                    action: n
                }, n, a))
            }
        }))
    }
    function ir(e) {
        function t(x) {
            return uc(x, e)
        }
        Ia !== null && uc(Ia, e),
        Pa !== null && uc(Pa, e),
        ei !== null && uc(ei, e),
        Kr.forEach(t),
        Jr.forEach(t);
        for (var l = 0; l < ti.length; l++) {
            var n = ti[l];
            n.blockedOn === e && (n.blockedOn = null)
        }
        for (; 0 < ti.length && (l = ti[0],
        l.blockedOn === null); )
            m0(l),
            l.blockedOn === null && ti.shift();
        if (l = (e.ownerDocument || e).$$reactFormReplay,
        l != null)
            for (n = 0; n < l.length; n += 3) {
                var a = l[n]
                  , i = l[n + 1]
                  , c = a[_t] || null;
                if (typeof i == "function")
                    c || g0(l);
                else if (c) {
                    var f = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (a = i,
                        c = i[_t] || null)
                            f = c.formAction;
                        else if (bu(a) !== null)
                            continue
                    } else
                        f = c.action;
                    typeof f == "function" ? l[n + 1] = f : (l.splice(n, 3),
                    n -= 3),
                    g0(l)
                }
            }
    }
    function y0() {
        function e(i) {
            i.canIntercept && i.info === "react-transition" && i.intercept({
                handler: function() {
                    return new Promise(function(c) {
                        return a = c
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            a !== null && (a(),
            a = null),
            n || setTimeout(l, 20)
        }
        function l() {
            if (!n && !navigation.transition) {
                var i = navigation.currentEntry;
                i && i.url != null && navigation.navigate(i.url, {
                    state: i.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var n = !1
              , a = null;
            return navigation.addEventListener("navigate", e),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(l, 100),
            function() {
                n = !0,
                navigation.removeEventListener("navigate", e),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                a !== null && (a(),
                a = null)
            }
        }
    }
    function vu(e) {
        this._internalRoot = e
    }
    dc.prototype.render = vu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(u(409));
        var l = t.current
          , n = hn();
        s0(l, n, e, t, null, null)
    }
    ,
    dc.prototype.unmount = vu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            s0(e.current, 2, null, e, null, null),
            Zs(),
            t[ol] = null
        }
    }
    ;
    function dc(e) {
        this._internalRoot = e
    }
    dc.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = ln();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var l = 0; l < ti.length && t !== 0 && t < ti[l].priority; l++)
                ;
            ti.splice(l, 0, e),
            l === 0 && m0(e)
        }
    }
    ;
    var p0 = o.version;
    if (p0 !== "19.2.3")
        throw Error(u(527, p0, "19.2.3"));
    P.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","),
            Error(u(268, e)));
        return e = p(t),
        e = e !== null ? R(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var Vg = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: B,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var mc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!mc.isDisabled && mc.supportsFiber)
            try {
                yt = mc.inject(Vg),
                Lt = mc
            } catch {}
    }
    return Ir.createRoot = function(e, t) {
        if (!g(e))
            throw Error(u(299));
        var l = !1
          , n = ""
          , a = Nd
          , i = Ad
          , c = Ed;
        return t != null && (t.unstable_strictMode === !0 && (l = !0),
        t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (a = t.onUncaughtError),
        t.onCaughtError !== void 0 && (i = t.onCaughtError),
        t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        t = i0(e, 1, !1, null, null, l, n, null, a, i, c, y0),
        e[ol] = t.current,
        tu(e),
        new vu(t)
    }
    ,
    Ir.hydrateRoot = function(e, t, l) {
        if (!g(e))
            throw Error(u(299));
        var n = !1
          , a = ""
          , i = Nd
          , c = Ad
          , f = Ed
          , x = null;
        return l != null && (l.unstable_strictMode === !0 && (n = !0),
        l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
        l.onCaughtError !== void 0 && (c = l.onCaughtError),
        l.onRecoverableError !== void 0 && (f = l.onRecoverableError),
        l.formState !== void 0 && (x = l.formState)),
        t = i0(e, 1, !0, t, l ?? null, n, a, x, i, c, f, y0),
        t.context = r0(null),
        l = t.current,
        n = hn(),
        n = kn(n),
        a = qa(n),
        a.callback = null,
        Ya(l, a, n),
        l = n,
        t.current.lanes = l,
        bn(t, l),
        na(t),
        e[ol] = t.current,
        tu(e),
        new dc(t)
    }
    ,
    Ir.version = "19.2.3",
    Ir
}
var T0;
function Pg() {
    if (T0)
        return ju.exports;
    T0 = 1;
    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
            } catch (o) {
                console.error(o)
            }
    }
    return s(),
    ju.exports = Ig(),
    ju.exports
}
var ey = Pg();
const ty = s => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , ly = s => s.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, d, u) => u ? u.toUpperCase() : d.toLowerCase())
  , M0 = s => {
    const o = ly(s);
    return o.charAt(0).toUpperCase() + o.slice(1)
}
  , Z0 = (...s) => s.filter( (o, d, u) => !!o && o.trim() !== "" && u.indexOf(o) === d).join(" ").trim()
  , ny = s => {
    for (const o in s)
        if (o.startsWith("aria-") || o === "role" || o === "title")
            return !0
}
;
var ay = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const iy = b.forwardRef( ({color: s="currentColor", size: o=24, strokeWidth: d=2, absoluteStrokeWidth: u, className: g="", children: y, iconNode: E, ..._}, M) => b.createElement("svg", {
    ref: M,
    ...ay,
    width: o,
    height: o,
    stroke: s,
    strokeWidth: u ? Number(d) * 24 / Number(o) : d,
    className: Z0("lucide", g),
    ...!y && !ny(_) && {
        "aria-hidden": "true"
    },
    ..._
}, [...E.map( ([p,R]) => b.createElement(p, R)), ...Array.isArray(y) ? y : [y]]));
const Qe = (s, o) => {
    const d = b.forwardRef( ({className: u, ...g}, y) => b.createElement(iy, {
        ref: y,
        iconNode: o,
        className: Z0(`lucide-${ty(M0(s))}`, `lucide-${s}`, u),
        ...g
    }));
    return d.displayName = M0(s),
    d
}
;
const ry = [["path", {
    d: "M12 5v14",
    key: "s699le"
}], ["path", {
    d: "m19 12-7 7-7-7",
    key: "1idqje"
}]]
  , sy = Qe("arrow-down", ry);
const cy = [["path", {
    d: "m5 12 7-7 7 7",
    key: "hav0vg"
}], ["path", {
    d: "M12 19V5",
    key: "x0mq9r"
}]]
  , oy = Qe("arrow-up", cy);
const uy = [["path", {
    d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
    key: "18u6gg"
}], ["circle", {
    cx: "12",
    cy: "13",
    r: "3",
    key: "1vg3eu"
}]]
  , fy = Qe("camera", uy);
const dy = [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]
  , my = Qe("check", dy);
const hy = [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]
  , gy = Qe("chevron-down", hy);
const yy = [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]
  , Yu = Qe("chevron-left", yy);
const py = [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]
  , by = Qe("chevron-right", py);
const xy = [["path", {
    d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
    key: "kmsa83"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]
  , _i = Qe("circle-play", xy);
const vy = [["path", {
    d: "m2 2 20 20",
    key: "1ooewy"
}], ["path", {
    d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",
    key: "yfwify"
}], ["path", {
    d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",
    key: "jlfiyv"
}]]
  , wy = Qe("cloud-off", vy);
const Sy = [["path", {
    d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
    key: "p7xjir"
}]]
  , jy = Qe("cloud", Sy);
const Ny = [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]
  , Ay = Qe("copy", Ny);
const Ey = [["path", {
    d: "M12 15V3",
    key: "m9g1x1"
}], ["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["path", {
    d: "m7 10 5 5 5-5",
    key: "brsn70"
}]]
  , Ty = Qe("download", Ey);
const My = [["path", {
    d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
    key: "g5wo59"
}], ["path", {
    d: "m5.082 11.09 8.828 8.828",
    key: "1wx5vj"
}]]
  , zy = Qe("eraser", My);
const _y = [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]
  , Cy = Qe("external-link", _y);
const Oy = [["path", {
    d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
    key: "ct8e1f"
}], ["path", {
    d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
    key: "151rxh"
}], ["path", {
    d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
    key: "13bj9a"
}], ["path", {
    d: "m2 2 20 20",
    key: "1ooewy"
}]]
  , Dy = Qe("eye-off", Oy);
const ky = [["path", {
    d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
    key: "1nclc0"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]
  , Tu = Qe("eye", ky);
const Ry = [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2",
    key: "1m3agn"
}], ["circle", {
    cx: "9",
    cy: "9",
    r: "2",
    key: "af1f0g"
}], ["path", {
    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
    key: "1xmnt7"
}]]
  , yc = Qe("image", Ry);
const By = [["path", {
    d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
    key: "g0fldk"
}], ["path", {
    d: "m21 2-9.6 9.6",
    key: "1j0ho8"
}], ["circle", {
    cx: "7.5",
    cy: "15.5",
    r: "5.5",
    key: "yqb3hr"
}]]
  , Uy = Qe("key", By);
const Hy = [["rect", {
    width: "18",
    height: "7",
    x: "3",
    y: "3",
    rx: "1",
    key: "f1a2em"
}], ["rect", {
    width: "9",
    height: "7",
    x: "3",
    y: "14",
    rx: "1",
    key: "jqznyg"
}], ["rect", {
    width: "5",
    height: "7",
    x: "16",
    y: "14",
    rx: "1",
    key: "q5h2i8"
}]]
  , Ly = Qe("layout-template", Hy);
const qy = [["path", {
    d: "M9 17H7A5 5 0 0 1 7 7h2",
    key: "8i5ue5"
}], ["path", {
    d: "M15 7h2a5 5 0 1 1 0 10h-2",
    key: "1b9ql8"
}], ["line", {
    x1: "8",
    x2: "16",
    y1: "12",
    y2: "12",
    key: "1jonct"
}]]
  , $0 = Qe("link-2", qy);
const Yy = [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]
  , K0 = Qe("loader-circle", Yy);
const Xy = [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]
  , z0 = Qe("lock", Xy);
const Vy = [["path", {
    d: "M8 3H5a2 2 0 0 0-2 2v3",
    key: "1dcmit"
}], ["path", {
    d: "M21 8V5a2 2 0 0 0-2-2h-3",
    key: "1e4gt3"
}], ["path", {
    d: "M3 16v3a2 2 0 0 0 2 2h3",
    key: "wsl5sc"
}], ["path", {
    d: "M16 21h3a2 2 0 0 0 2-2v-3",
    key: "18trek"
}]]
  , J0 = Qe("maximize", Vy);
const Gy = [["path", {
    d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
    key: "1sd12s"
}]]
  , Xu = Qe("message-circle", Gy);
const Qy = [["path", {
    d: "m14 10 7-7",
    key: "oa77jy"
}], ["path", {
    d: "M20 10h-6V4",
    key: "mjg0md"
}], ["path", {
    d: "m3 21 7-7",
    key: "tjx5ai"
}], ["path", {
    d: "M4 14h6v6",
    key: "rmj7iw"
}]]
  , Du = Qe("minimize-2", Qy);
const Zy = [["path", {
    d: "M12 2v20",
    key: "t6zp3m"
}], ["path", {
    d: "m15 19-3 3-3-3",
    key: "11eu04"
}], ["path", {
    d: "m19 9 3 3-3 3",
    key: "1mg7y2"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}], ["path", {
    d: "m5 9-3 3 3 3",
    key: "j64kie"
}], ["path", {
    d: "m9 5 3-3 3 3",
    key: "l8vdw6"
}]]
  , $y = Qe("move", Zy);
const Ky = [["path", {
    d: "M13 21h8",
    key: "1jsn5i"
}], ["path", {
    d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
    key: "1a8usu"
}]]
  , _0 = Qe("pen-line", Ky);
const Jy = [["path", {
    d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
    key: "9njp5v"
}]]
  , F0 = Qe("phone", Jy);
const Fy = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]
  , Wy = Qe("plus", Fy);
const Iy = [["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "3",
    rx: "1",
    key: "1tu5fj"
}], ["rect", {
    width: "5",
    height: "5",
    x: "16",
    y: "3",
    rx: "1",
    key: "1v8r4q"
}], ["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "16",
    rx: "1",
    key: "1x03jg"
}], ["path", {
    d: "M21 16h-3a2 2 0 0 0-2 2v3",
    key: "177gqh"
}], ["path", {
    d: "M21 21v.01",
    key: "ents32"
}], ["path", {
    d: "M12 7v3a2 2 0 0 1-2 2H7",
    key: "8crl2c"
}], ["path", {
    d: "M3 12h.01",
    key: "nlz23k"
}], ["path", {
    d: "M12 3h.01",
    key: "n36tog"
}], ["path", {
    d: "M12 16v.01",
    key: "133mhm"
}], ["path", {
    d: "M16 12h1",
    key: "1slzba"
}], ["path", {
    d: "M21 12v.01",
    key: "1lwtk9"
}], ["path", {
    d: "M12 21v-1",
    key: "1880an"
}]]
  , Py = Qe("qr-code", Iy);
const ep = [["path", {
    d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
    key: "1i5ecw"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]
  , C0 = Qe("settings", ep);
const tp = [["circle", {
    cx: "18",
    cy: "5",
    r: "3",
    key: "gq8acd"
}], ["circle", {
    cx: "6",
    cy: "12",
    r: "3",
    key: "w7nqdw"
}], ["circle", {
    cx: "18",
    cy: "19",
    r: "3",
    key: "1xt0gg"
}], ["line", {
    x1: "8.59",
    x2: "15.42",
    y1: "13.51",
    y2: "17.49",
    key: "47mynk"
}], ["line", {
    x1: "15.41",
    x2: "8.59",
    y1: "6.51",
    y2: "10.49",
    key: "1n3mei"
}]]
  , ku = Qe("share-2", tp);
const lp = [["path", {
    d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13",
    key: "i9gjdv"
}], ["path", {
    d: "M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z",
    key: "1vzg3v"
}], ["path", {
    d: "M5 22h14",
    key: "ehvnwv"
}]]
  , W0 = Qe("stamp", lp);
const np = [["path", {
    d: "M10 11v6",
    key: "nco0om"
}], ["path", {
    d: "M14 11v6",
    key: "outv1u"
}], ["path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
    key: "miytrc"
}], ["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    key: "e791ji"
}]]
  , Ru = Qe("trash-2", np);
const ap = [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]
  , ip = Qe("triangle-alert", ap);
const rp = [["path", {
    d: "M12 4v16",
    key: "1654pz"
}], ["path", {
    d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",
    key: "e0r10z"
}], ["path", {
    d: "M9 20h6",
    key: "s66wpe"
}]]
  , sp = Qe("type", rp);
const cp = [["path", {
    d: "M12 3v12",
    key: "1x0j5s"
}], ["path", {
    d: "m17 8-5-5-5 5",
    key: "7q97r8"
}], ["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}]]
  , Vu = Qe("upload", cp);
const op = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , fr = Qe("x", op);
const up = [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["line", {
    x1: "21",
    x2: "16.65",
    y1: "21",
    y2: "16.65",
    key: "13gj7c"
}], ["line", {
    x1: "11",
    x2: "11",
    y1: "8",
    y2: "14",
    key: "1vmskp"
}], ["line", {
    x1: "8",
    x2: "14",
    y1: "11",
    y2: "11",
    key: "durymu"
}]]
  , fp = Qe("zoom-in", up);
const dp = [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["line", {
    x1: "21",
    x2: "16.65",
    y1: "21",
    y2: "16.65",
    key: "13gj7c"
}], ["line", {
    x1: "8",
    x2: "14",
    y1: "11",
    y2: "11",
    key: "durymu"
}]]
  , mp = Qe("zoom-out", dp)
  , hp = {}
  , rr = (hp?.VITE_LOCAL_API_BASE || "").replace(/\/+$/, "")
  , Bl = !!rr
  , gp = () => {
    if (!Bl)
        return "";
    if (typeof window > "u")
        return rr;
    try {
        const s = new URL(rr)
          , o = window.location?.hostname;
        return o && (s.hostname === "localhost" || s.hostname === "127.0.0.1") ? (s.hostname = o,
        s.toString().replace(/\/$/, "")) : rr
    } catch {
        return rr
    }
}
  , Ta = gp()
  , ia = Bl ? Ta : "https://oss-presign-uzxejtemxr.cn-chengdu.fcapp.run"
  , yp = Bl ? `${Ta}/oss/presign-put` : `${ia}/oss/presign-put`
  , pp = Bl ? `${Ta}/oss/app.json` : `${ia}/oss/app.json`
  , O0 = Bl ? `${Ta}/oss/bili-meta` : ""
  , is = new Set(["ljxphotograph.top", "www.ljxphotograph.top", "img.ljxphotograph.top"])
  , bp = () => {
    if (Bl)
        return `${Ta}/media`;
    if (typeof window < "u") {
        const s = String(window.location?.hostname || "").toLowerCase();
        if (is.has(s))
            return window.location.origin.replace(/\/+$/, "")
    }
    return "https://www.ljxphotograph.top"
}
  , I0 = bp()
  , P0 = "/local-bg.jpg"
  , xp = "/logo.png"
  , en = "/logo.png"
  , vp = /images\.unsplash\.com\/photo-1516550893923-42d28e5677af/i
  , ni = P0
  , rs = Bl ? xp : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  , ur = en
  , wp = /api\.qrserver\.com\/v1\/create-qr-code\/\?size=200x200&data=ExampleWeChatID/i
  , Sp = "data/app.json"
  , jp = Bl ? `${Ta}/oss/delete-objects` : `${ia}/oss/delete-objects`
  , Np = `${ia}/auth/login`
  , Ap = `${ia}/auth/logout`
  , Ep = `${ia}/auth/session`
  , Tp = `${ia}/auth/password`
  , Mp = `${ia}/stats/visit`
  , zp = `${ia}/stats/site`
  , _p = `${ia}/stats/album-view`
  , Bu = "ljx_admin_token"
  , D0 = {
    original: null,
    large: {
        maxSide: 6144,
        quality: .92
    },
    medium: {
        maxSide: 3840,
        quality: .88
    },
    small: {
        maxSide: 1920,
        quality: .82
    }
}
  , pc = "image"
  , ri = "bilibili"
  , eh = "https://api.bilibili.com/x/web-interface/view"
  , Cp = () => {
    if (typeof window > "u")
        return "";
    try {
        return window.sessionStorage.getItem(Bu) || ""
    } catch {
        return ""
    }
}
  , Pr = s => {
    if (!(typeof window > "u"))
        try {
            s ? window.sessionStorage.setItem(Bu, s) : window.sessionStorage.removeItem(Bu)
        } catch {}
}
  , ra = async (s, o={}) => {
    const d = new Headers(o.headers || {})
      , u = Cp();
    return u && !d.has("Authorization") && d.set("Authorization", `Bearer ${u}`),
    fetch(s, {
        ...o,
        headers: d,
        credentials: "include",
        cache: o.cache || "no-store"
    })
}
  , Ma = async (s, o) => {
    if ((s.headers.get("content-type") || "").includes("application/json")) {
        const g = await s.json().catch( () => null);
        if (g?.error)
            return g.error;
        if (g?.message)
            return g.message
    }
    return await s.text().catch( () => "") || `${o} failed: ${s.status}`
}
  , ns = {
    profile: {
        name: "Ljx",
        bio: "Visual Storyteller. Exploring the world through light and shadow.",
        avatar: rs,
        phone: "189-8270-6989",
        wechatId: "ljx_photography",
        wechatQr: ur,
        backgroundImage: ni,
        siteViews: 0,
        categories: [],
        homeVideos: []
    },
    albums: [{
        id: "1",
        title: "Minimalist White",
        description: "Exploring subtle layers of white and light in minimalist photography.",
        cover: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80",
        order: 0,
        views: 0,
        visible: !0,
        watermark: {
            enabled: !1
        }
    }, {
        id: "2",
        title: "City Fragments",
        description: "Geometric slices of urban architecture and modern city life.",
        cover: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        order: 1,
        views: 0,
        visible: !0,
        watermark: {
            enabled: !1
        }
    }, {
        id: "3",
        title: "Soft Portraits",
        description: "Portrait moments in soft light with warm and gentle emotion.",
        cover: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
        order: 2,
        views: 0,
        visible: !0,
        watermark: {
            enabled: !1
        }
    }]
}
  , Ml = "ios-pill"
  , dr = "bg-white/22 border border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.10)] backdrop-blur-xl ring-1 ring-white/50"
  , zi = "transition-transform duration-200 ease-out"
  , Op = "text-transparent bg-clip-text bg-gradient-to-br from-gray-800/80 via-gray-600/80 to-gray-800/80 drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)] select-none"
  , bc = () => typeof window < "u" && Number.isFinite(window.innerWidth) ? window.innerWidth : 1280
  , Uu = (s=bc()) => s < 640 ? 2 : s < 1024 ? 3 : 4
  , Mu = (s=bc()) => {
    const o = Uu(s);
    return {
        cols: o,
        initial: o * 5,
        step: o * 4
    }
}
  , zu = () => {
    if (!(typeof window > "u")) {
        try {
            (document.scrollingElement || document.documentElement || document.body)?.scrollTo?.({
                top: 0,
                left: 0,
                behavior: "auto"
            })
        } catch {}
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        }),
        document?.documentElement && (document.documentElement.scrollTop = 0),
        document?.body && (document.body.scrollTop = 0)
    }
}
  , Dp = ( () => {
    let s = null;
    return () => {
        if (s || typeof document > "u")
            return s;
        const o = document.createElement("canvas");
        return o.width = 1,
        o.height = 1,
        s = o,
        s
    }
}
)()
  , si = () => typeof window < "u" && window.matchMedia && window.matchMedia("(pointer: coarse)").matches
  , xc = (s, o) => {
    if (!s || si())
        return;
    const d = s.getBoundingClientRect()
      , u = (o.clientX - d.left) / d.width
      , g = (o.clientY - d.top) / d.height
      , y = (.5 - g) * 10
      , E = (u - .5) * 10
      , _ = (u - .5) * 10
      , M = (g - .5) * 10;
    s._tiltTarget = {
        rotX: y,
        rotY: E,
        tx: _,
        ty: M
    },
    s._tiltRaf || (s._tiltRaf = requestAnimationFrame( () => vc(s)));
    const p = s.closest(".bento-wrap");
    if (!p)
        return;
    const R = p.querySelectorAll(".bento-card")
      , C = o.clientX
      , Z = o.clientY;
    R.forEach(L => {
        if (L === s)
            return;
        const ae = L.getBoundingClientRect()
          , q = ae.left + ae.width / 2
          , Se = ae.top + ae.height / 2
          , F = C - q
          , te = Z - Se
          , I = Math.hypot(F, te)
          , pe = Math.max(0, 1 - I / 420);
        if (pe <= 0)
            return;
        const ue = F * .015 * pe
          , me = te * .015 * pe
          , se = te / 2e3 * pe * 6
          , Ee = F / 2e3 * pe * 6;
        L._tiltTarget = {
            rotX: se,
            rotY: Ee,
            tx: ue,
            ty: me
        },
        L._tiltRaf || (L._tiltRaf = requestAnimationFrame( () => vc(L)))
    }
    )
}
  , vc = s => {
    const o = s._tiltTarget || {
        rotX: 0,
        rotY: 0,
        tx: 0,
        ty: 0
    }
      , d = s._tiltCur || {
        rotX: 0,
        rotY: 0,
        tx: 0,
        ty: 0
    }
      , u = (E, _) => E + (_ - E) * .08
      , g = {
        rotX: u(d.rotX, o.rotX),
        rotY: u(d.rotY, o.rotY),
        tx: u(d.tx, o.tx),
        ty: u(d.ty, o.ty)
    };
    if (s._tiltCur = g,
    s.style.transform = `translate3d(${g.tx}px, ${g.ty}px, 0) rotateX(${g.rotX}deg) rotateY(${g.rotY}deg)`,
    Math.abs(g.rotX - o.rotX) < .03 && Math.abs(g.rotY - o.rotY) < .03 && Math.abs(g.tx - o.tx) < .03 && Math.abs(g.ty - o.ty) < .03) {
        s._tiltRaf = null;
        return
    }
    s._tiltRaf = requestAnimationFrame( () => vc(s))
}
  , wc = s => {
    s && (s._tiltTarget = {
        rotX: 0,
        rotY: 0,
        tx: 0,
        ty: 0
    },
    s._tiltRaf || (s._tiltRaf = requestAnimationFrame( () => vc(s))))
}
;
function _u({children: s, onClick: o, className: d="", as: u="button", disabled: g=!1, title: y}) {
    const E = u;
    return si(),
    r.jsx(E, {
        type: E === "button" ? "button" : void 0,
        onClick: g ? void 0 : o,
        disabled: g,
        title: y,
        className: "inline-flex items-center justify-center gap-2 rounded-full select-none ios-pill px-4 py-2 text-sm font-semibold text-gray-800 whitespace-nowrap leading-none" + " " + d,
        children: s
    })
}
const k0 = (s, o=1) => {
    if (!+s)
        return "0 B";
    const d = 1024
      , u = o < 0 ? 0 : o
      , g = ["B", "KB", "MB", "GB", "TB"]
      , y = Math.floor(Math.log(s) / Math.log(d));
    return `${parseFloat((s / Math.pow(d, y)).toFixed(u))} ${g[y]}`
}
  , th = ( () => {
    let s = null;
    return () => typeof window > "u" ? Promise.reject(new Error("no-window")) : window.exifr ? Promise.resolve(window.exifr) : s || (s = new Promise( (o, d) => {
        const u = document.createElement("script");
        u.src = "https://unpkg.com/exifr/dist/full.umd.js",
        u.async = !0,
        u.onload = () => o(window.exifr),
        u.onerror = () => d(new Error("exifr-load-failed")),
        document.head.appendChild(u)
    }
    ),
    s)
}
)()
  , lh = s => !s || typeof s != "object" ? null : {
    Make: s.Make,
    Model: s.Model,
    LensModel: s.LensModel || s.Lens,
    FocalLength: s.FocalLength,
    FocalLengthIn35mmFormat: s.FocalLengthIn35mmFormat,
    ExposureTime: s.ExposureTime,
    FNumber: s.FNumber,
    ISO: s.ISO ?? s.ISOSpeedRatings,
    ExposureCompensation: s.ExposureCompensation ?? s.ExposureBiasValue,
    ExposureProgram: s.ExposureProgram,
    MeteringMode: s.MeteringMode,
    WhiteBalance: s.WhiteBalance,
    Flash: s.Flash,
    Software: s.Software,
    Artist: s.Artist,
    Copyright: s.Copyright,
    ImageDescription: s.ImageDescription,
    ColorSpace: s.ColorSpace,
    Compression: s.Compression,
    FileType: s.FileType,
    MIMEType: s.MIMEType,
    ImageWidth: s.ImageWidth || s.ExifImageWidth || s.PixelXDimension,
    ImageHeight: s.ImageHeight || s.ExifImageHeight || s.PixelYDimension,
    ModifyDate: s.ModifyDate || s.DateTime,
    CreateDate: s.CreateDate || s.DateTimeDigitized,
    DateTimeOriginal: s.DateTimeOriginal
}
  , kp = s => new Promise(o => {
    try {
        const d = URL.createObjectURL(s)
          , u = new Image;
        u.onload = () => {
            const g = u.naturalWidth || u.width
              , y = u.naturalHeight || u.height;
            URL.revokeObjectURL(d),
            o(g && y ? {
                ImageWidth: g,
                ImageHeight: y
            } : null)
        }
        ,
        u.onerror = () => {
            URL.revokeObjectURL(d),
            o(null)
        }
        ,
        u.src = d
    } catch {
        o(null)
    }
}
)
  , Rp = async s => {
    let o = {};
    try {
        const u = await (await th()).parse(s, {
            tiff: !0,
            ifd0: !0,
            exif: !0,
            gps: !0,
            xmp: !0
        });
        o = lh(u) || {}
    } catch {
        o = {}
    }
    if (!o.ImageWidth || !o.ImageHeight) {
        const d = await kp(s);
        d && (o.ImageWidth = d.ImageWidth,
        o.ImageHeight = d.ImageHeight)
    }
    return Object.keys(o).length ? o : null
}
  , sr = (s=8) => Math.random().toString(16).slice(2, 2 + s)
  , Bp = s => {
    const [o,d] = s.split(",")
      , u = (o.match(/data:(.*?);base64/) || [])[1] || "application/octet-stream"
      , g = atob(d)
      , y = new Uint8Array(g.length);
    for (let E = 0; E < g.length; E++)
        y[E] = g.charCodeAt(E);
    return new Blob([y],{
        type: u
    })
}
  , Gu = async ({key: s, contentType: o}) => {
    const d = await ra(yp, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            key: s,
            contentType: o
        })
    });
    if (!d.ok)
        throw new Error(await Ma(d, "Presign"));
    return d.json()
}
  , Qu = async ({putUrl: s, body: o, contentType: d}) => {
    const u = await fetch(s, {
        method: "PUT",
        headers: {
            "Content-Type": d
        },
        body: o
    });
    if (!u.ok) {
        const g = await u.text().catch( () => "");
        throw new Error(`PUT failed: ${u.status} ${g}`)
    }
}
  , hc = s => {
    if (!s || typeof s != "string")
        return null;
    if (s.indexOf("://") === -1)
        return s.replace(/^\/+/, "");
    try {
        return new URL(s).pathname.replace(/^\/+/, "")
    } catch {
        return null
    }
}
  , R0 = async s => {
    const o = Array.from(new Set((s || []).filter(Boolean)));
    if (!o.length)
        return {
            deleted: 0
        };
    const d = await ra(jp, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            keys: o
        })
    });
    if (!d.ok)
        throw new Error(await Ma(d, "Delete objects"));
    return d.json().catch( () => ({
        deleted: o.length
    }))
}
  , Up = async () => {
    const s = await ra(Ep, {
        method: "GET"
    });
    if (!s.ok)
        throw new Error(await Ma(s, "Session check"));
    return s.json()
}
  , Hp = async s => {
    const o = await ra(Np, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password: s
        })
    });
    if (!o.ok)
        throw new Error(await Ma(o, "Login"));
    return o.json()
}
  , Lp = async () => {
    const s = await ra(Ap, {
        method: "POST"
    });
    if (!s.ok)
        throw new Error(await Ma(s, "Logout"));
    return s.json()
}
  , qp = async s => {
    const o = await ra(Tp, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            newPassword: s
        })
    });
    if (!o.ok)
        throw new Error(await Ma(o, "Password update"));
    return o.json()
}
  , Yp = async () => {
    const s = await ra(zp, {
        method: "GET"
    });
    if (!s.ok)
        throw new Error(await Ma(s, "Load stats"));
    return s.json()
}
  , Xp = async () => {
    const s = await ra(Mp, {
        method: "POST"
    });
    if (!s.ok)
        throw new Error(await Ma(s, "Record visit"));
    return s.json()
}
  , Vp = async s => {
    const o = await ra(_p, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            albumId: s
        })
    });
    if (!o.ok)
        throw new Error(await Ma(o, "Record album view"));
    return o.json()
}
  , nh = async (s, {maxSide: o, quality: d}) => {
    const u = await ci(s)
      , g = u.naturalWidth || u.width
      , y = u.naturalHeight || u.height;
    let E = g
      , _ = y;
    if (o && (E > o || _ > o)) {
        const C = E / _;
        E >= _ ? (E = o,
        _ = Math.round(o / C)) : (_ = o,
        E = Math.round(o * C))
    }
    const M = document.createElement("canvas");
    M.width = E,
    M.height = _,
    M.getContext("2d").drawImage(u, 0, 0, E, _);
    const R = await new Promise(C => M.toBlob(C, "image/jpeg", d));
    if (!R)
        throw new Error("toBlob failed");
    return R
}
  , B0 = async (s, {maxSide: o, quality: d=.82}) => {
    const u = await ci(s)
      , g = u.naturalWidth || u.width
      , y = u.naturalHeight || u.height;
    let E = g
      , _ = y;
    if (o && (E > o || _ > o)) {
        const C = E / _;
        E >= _ ? (E = o,
        _ = Math.round(o / C)) : (_ = o,
        E = Math.round(o * C))
    }
    const M = document.createElement("canvas");
    M.width = E,
    M.height = _,
    M.getContext("2d").drawImage(u, 0, 0, E, _);
    const R = await new Promise(C => M.toBlob(C, "image/webp", d));
    if (!R)
        throw new Error("toBlob failed");
    return R
}
  , Gp = async (s, {maxSide: o, targetBytes: d, minQuality: u=.55, maxQuality: g=.92, maxRounds: y=6, maxIterations: E=8, minSide: _=320}) => {
    const M = await ci(s)
      , p = M.naturalWidth || M.width
      , R = M.naturalHeight || M.height;
    let C = p
      , Z = R;
    if (C > o || Z > o) {
        const pe = C / Z;
        C >= Z ? (C = o,
        Z = Math.round(o / pe)) : (Z = o,
        C = Math.round(o * pe))
    }
    const L = document.createElement("canvas")
      , ae = L.getContext("2d")
      , q = (pe, ue) => {
        L.width = Math.max(1, Math.round(pe)),
        L.height = Math.max(1, Math.round(ue)),
        ae.imageSmoothingEnabled = !0,
        ae.imageSmoothingQuality = "high",
        ae.drawImage(M, 0, 0, L.width, L.height)
    }
      , Se = pe => new Promise( (ue, me) => {
        L.toBlob(se => se ? ue(se) : me(new Error("toBlob failed")), "image/jpeg", pe)
    }
    );
    let F = null
      , te = C
      , I = Z;
    for (let pe = 0; pe < y; pe++) {
        q(te, I);
        let ue = u
          , me = g
          , se = null;
        for (let Xe = 0; Xe < E; Xe++) {
            const ze = (ue + me) / 2
              , _e = await Se(ze);
            _e.size <= d ? (se = _e,
            ue = Math.min(g, ze + .02)) : me = Math.max(u, ze - .02)
        }
        if (se) {
            F = se;
            break
        }
        const Ee = await Se(u);
        if (Ee.size <= d) {
            F = Ee;
            break
        }
        if (te = Math.round(te * .9),
        I = Math.round(I * .9),
        Math.max(te, I) < _) {
            F = Ee;
            break
        }
    }
    return F || (q(te, I),
    F = await Se(u)),
    F
}
  , ah = async ({blob: s, fileExt: o="jpg"}) => {
    const u = `photos/${Date.now()}_${sr(12)}.${o}`
      , g = s.type || "application/octet-stream"
      , {putUrl: y} = await Gu({
        key: u,
        contentType: g
    });
    return await Qu({
        putUrl: y,
        body: s,
        contentType: g
    }),
    `${I0}/${u}`
}
  , cr = async ({blob: s, key: o, contentType: d}) => {
    const u = d || s.type || "application/octet-stream"
      , {putUrl: g} = await Gu({
        key: o,
        contentType: u
    });
    return await Qu({
        putUrl: g,
        body: s,
        contentType: u
    }),
    {
        url: `${I0}/${o}`,
        key: o
    }
}
  , Qp = async ({file: s, keyBase: o}) => {
    const d = s?.type || ""
      , u = d === "image/jpeg" || d === "image/jpg"
      , g = d === "image/png"
      , y = d === "image/webp";
    if (u || g || y) {
        const R = `photos/${o}_original.${g ? "png" : y ? "webp" : "jpg"}`;
        return {
            ...await cr({
                blob: s,
                key: R,
                contentType: d
            }),
            variantSourceBlob: s,
            displaySize: s.size
        }
    }
    const E = await nh(s, {
        maxSide: null,
        quality: .95
    })
      , _ = `photos/${o}_original.jpg`;
    return {
        ...await cr({
            blob: E,
            key: _,
            contentType: "image/jpeg"
        }),
        variantSourceBlob: E,
        displaySize: E.size
    }
}
  , U0 = async (s, o="jpg") => {
    const d = Bp(s);
    return ah({
        blob: d,
        fileExt: o
    })
}
  , Zp = s => {
    if (typeof s != "string")
        return null;
    const o = s.trim();
    return o || null
}
  , $p = /\.(?:avif|bmp|gif|heic|heif|jpe?g|png|tiff?|webp)(?:[?#].*)?$/i
  , ai = s => {
    if (!s || typeof s != "string")
        return !1;
    const o = s.trim();
    return o ? o.startsWith("data:image/") || o.startsWith("blob:") || $p.test(o) ? !0 : /\.(?:jpe?g|png|webp|gif|avif)@/i.test(o) : !1
}
  , Kp = s => {
    if (!ai(s))
        return !1;
    const o = String(s || "").trim();
    if (!o)
        return !1;
    try {
        const d = new URL(o,typeof window < "u" ? window.location.origin : "http://localhost")
          , u = (d.hostname || "").toLowerCase();
        if (is.has(u))
            return !0;
        if (Bl) {
            const g = new URL(Ta);
            if (d.hostname === g.hostname && d.port === g.port)
                return !0
        }
        return /^\/(media|photos|backgrounds)\//i.test(d.pathname || "")
    } catch {
        return /^\/(media|photos|backgrounds)\//i.test(o)
    }
}
  , Jp = s => {
    const o = []
      , d = g => {
        const y = String(g || "").trim();
        !y || o.includes(y) || o.push(y)
    }
      , u = String(s || "").trim();
    if (!u || !ai(u))
        return o;
    d(u);
    try {
        const g = new URL(u,typeof window < "u" ? window.location.origin : "http://localhost");
        if (g.protocol === "http:") {
            const E = `https://${g.host}${g.pathname}${g.search}${g.hash}`;
            d(E)
        }
        const y = (g.hostname || "").toLowerCase();
        if (/hdslb\.com$/.test(y) || /bilibili\.com$/.test(y)) {
            const E = u.replace(/^https?:\/\//i, "");
            d(`https://images.weserv.nl/?url=${encodeURIComponent(E)}`)
        }
    } catch {}
    return o
}
  , H0 = (s, o="origin") => {
    if (!s || typeof s != "string")
        return "";
    const d = s.trim();
    if (!d)
        return "";
    if (d.startsWith("data:") || d.startsWith("blob:") || o === "origin")
        return d;
    const u = o === "w800" || o === "w2048" ? o : "origin";
    if (u === "origin")
        return d;
    const g = d.split(/([?#].*)/)
      , y = g[0] || ""
      , E = g[1] || "";
    if (/_w(800|2048)\.webp$/i.test(y))
        return y.replace(/_w(800|2048)\.webp$/i, `_${u}.webp`) + E;
    const _ = y.match(/\.([a-zA-Z0-9]+)$/);
    if (!_)
        return s;
    const M = _[1].toLowerCase();
    return ["jpg", "jpeg", "png", "webp", "gif", "avif", "bmp", "tif", "tiff", "heic", "heif"].includes(M) ? `${y.slice(0, -(M.length + 1))}_${u}.webp${E}` : s
}
  , aa = s => {
    if (!s || typeof s != "string")
        return s;
    try {
        const o = new URL(s,typeof window < "u" ? window.location.origin : "https://www.ljxphotograph.top");
        if (Bl) {
            const d = new URL(Ta);
            return (o.hostname === "localhost" || o.hostname === "127.0.0.1") && (o.hostname !== d.hostname || o.port !== d.port) ? (o.hostname = d.hostname,
            o.port = d.port,
            o.protocol = d.protocol,
            o.toString()) : s
        }
        if (typeof window < "u") {
            const d = String(window.location?.hostname || "").toLowerCase()
              , u = String(o.hostname || "").toLowerCase();
            if (is.has(d) && is.has(u) && d !== u)
                return o.protocol = window.location.protocol,
                o.hostname = window.location.hostname,
                o.port = window.location.port || "",
                o.toString()
        }
    } catch {}
    return s
}
  , Cu = s => {
    if (!Bl || !s || typeof s != "string")
        return !1;
    try {
        const o = new URL(s)
          , d = new URL(Ta)
          , u = String(o.hostname || "").toLowerCase();
        return o.hostname === d.hostname && o.port === d.port || is.has(u)
    } catch {
        return !1
    }
}
  , ml = s => s?.kind === ri
  , L0 = s => !ml(s)
  , zl = s => {
    const d = String(s || "").trim().match(/BV[0-9A-Za-z]{10}/i);
    return d ? `BV${d[0].slice(2)}` : ""
}
  , _n = s => {
    const o = zl(s);
    return o ? `https://www.bilibili.com/video/${o}` : ""
}
  , ii = s => {
    const o = String(s || "").trim();
    return o ? o.startsWith("//") ? `https:${o}` : o : ""
}
  , ss = s => {
    const o = Number(s);
    if (!Number.isFinite(o) || o <= 0)
        return "";
    const d = Math.floor(o / 3600)
      , u = Math.floor(o % 3600 / 60)
      , g = Math.floor(o % 60);
    return d > 0 ? `${String(d).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(g).padStart(2, "0")}` : `${String(u).padStart(2, "0")}:${String(g).padStart(2, "0")}`
}
  , cs = s => s ? ml(s) ? s.cover || s.url || "" : s.originalUrl || s.url || s.urls?.original || s.urls?.main || s.urls?.large || s.urls?.medium || s.urls?.small || "" : ""
  , gc = s => {
    if (ml(s))
        return s.cover || s.url || "";
    const o = cs(s);
    return s?.urls?.w800 || o
}
  , ih = s => ml(s) ? s.cover || s.url || "" : s?.urls?.w800 || s?.url || ""
  , Hu = (s, o) => {
    const d = zl(s?.bvid || o);
    return {
        bvid: d,
        biliUrl: _n(s?.biliUrl || d),
        title: String(s?.title || "").trim(),
        cover: ii(s?.cover),
        duration: Number(s?.duration) || 0,
        ownerName: String(s?.ownerName || s?.owner?.name || "").trim()
    }
}
  , Fp = s => {
    const o = String(s || "").toLowerCase();
    return o ? o.includes("enotfound") ? "本地 DNS 无法解析 B站域名" : o.includes("timeout") || o.includes("aborted") ? "请求超时" : o.includes("403") ? "被 B站风控拦截（403）" : o.includes("invalid-bvid") ? "BV 号无效" : String(s || "网络受限") : "网络受限"
}
  , Wp = (s, o=8e3) => new Promise( (d, u) => {
    if (typeof window > "u" || typeof document > "u") {
        u(new Error("jsonp-unavailable"));
        return
    }
    const g = `__ljx_bili_meta_cb_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
      , y = document.createElement("script");
    let E = null;
    const _ = () => {
        E && window.clearTimeout(E),
        E = null;
        try {
            delete window[g]
        } catch {
            window[g] = void 0
        }
        y.onerror = null,
        y.onload = null,
        y.parentNode && y.parentNode.removeChild(y)
    }
    ;
    window[g] = M => {
        if (_(),
        M?.code !== 0 || !M?.data) {
            u(new Error(`bili-jsonp-invalid-${M?.code ?? "unknown"}`));
            return
        }
        const p = Hu({
            bvid: s,
            biliUrl: _n(s),
            title: M.data.title,
            cover: M.data.pic,
            duration: M.data.duration,
            ownerName: M?.data?.owner?.name
        }, s);
        if (!p.title || !p.cover) {
            u(new Error("bili-jsonp-empty"));
            return
        }
        d(p)
    }
    ,
    E = window.setTimeout( () => {
        _(),
        u(new Error("bili-jsonp-timeout"))
    }
    , o),
    y.onerror = () => {
        _(),
        u(new Error("bili-jsonp-load-failed"))
    }
    ,
    y.src = `${eh}?bvid=${encodeURIComponent(s)}&jsonp=jsonp&callback=${g}&_=${Date.now()}`,
    document.head.appendChild(y)
}
)
  , rh = () => {
    if (typeof navigator > "u")
        return !1;
    const s = navigator.userAgent || "";
    return /android|iphone|ipad|ipod|mobile/i.test(s) || si()
}
  , Ip = () => {
    if (typeof navigator > "u")
        return !1;
    const s = navigator.userAgent || "";
    return /MicroMessenger|QQ\//i.test(s)
}
  , Pp = s => {
    const o = s && typeof s == "object" ? s : {}
      , d = o.type === "image" ? "image" : "text"
      , u = ["center", "bottom-center", "bottom-right"].includes(o.position) ? o.position : "bottom-right";
    return {
        enabled: o.enabled === !0,
        type: d,
        text: typeof o.text == "string" && o.text.trim() ? o.text : "Ljx Photography",
        color: o.color === "black" ? "black" : "white",
        imageUrl: typeof o.imageUrl == "string" ? aa(o.imageUrl) : "",
        opacity: typeof o.opacity == "number" ? o.opacity : .8,
        size: typeof o.size == "number" ? o.size : .25,
        position: u
    }
}
  , Lu = ({src: s, originSrc: o, className: d="", alt: u="", loading: g="lazy", decoding: y="async", ...E}) => {
    const _ = b.useRef(null)
      , [M,p] = b.useState(!1);
    b.useEffect( () => {
        if (M)
            return;
        const C = _.current;
        if (!C)
            return;
        if (typeof IntersectionObserver > "u") {
            p(!0);
            return
        }
        const Z = new IntersectionObserver(L => {
            L.forEach(ae => {
                (ae.isIntersecting || ae.intersectionRatio > 0) && (p(!0),
                Z.disconnect())
            }
            )
        }
        ,{
            rootMargin: "200px 0px",
            threshold: .01
        });
        return Z.observe(C),
        () => Z.disconnect()
    }
    , [M]);
    const R = C => {
        o && (C.currentTarget.dataset.fallbackApplied || (C.currentTarget.dataset.fallbackApplied = "1",
        C.currentTarget.src = o))
    }
    ;
    return r.jsx("img", {
        ref: _,
        src: M ? s : void 0,
        "data-src": s || "",
        className: d,
        alt: u,
        loading: g,
        decoding: y,
        onError: R,
        ...E
    })
}
  , q0 = s => {
    const o = s && typeof s == "object" ? s : {}
      , d = {
        ...ns.profile,
        ...o.profile || {}
    };
    d.avatar = aa(d.avatar) || rs,
    d.wechatQr = aa(d.wechatQr) || ur,
    wp.test(String(d.wechatQr || "")) && (d.wechatQr = ur),
    d.backgroundImage = aa(d.backgroundImage) || ni,
    vp.test(String(d.backgroundImage || "")) && (d.backgroundImage = ni),
    d.siteViews = typeof d.siteViews == "number" ? d.siteViews : 0,
    Bl && /^https?:\/\//.test(d.avatar || "") && !Cu(d.avatar) && (d.avatar = rs),
    Bl && /^https?:\/\//.test(d.wechatQr || "") && !Cu(d.wechatQr) && (d.wechatQr = ur),
    Bl && /^https?:\/\//.test(d.backgroundImage || "") && !Cu(d.backgroundImage) && (d.backgroundImage = ni),
    Array.isArray(d.categories) || (d.categories = []);
    const u = Array.isArray(d.homeVideos) ? d.homeVideos : [];
    d.homeVideos = u.filter(Boolean).map( (_, M) => {
        const p = _ && typeof _ == "object" ? _ : {}
          , R = zl(p.bvid || p.biliUrl || "")
          , C = _n(p.biliUrl || R)
          , Z = aa(p.cover || p.url || "");
        return {
            id: String(p.id || `home_video_${M}`),
            kind: ri,
            bvid: R,
            biliUrl: C,
            title: typeof p.title == "string" ? p.title : "",
            cover: Z,
            url: Z,
            duration: Number(p.duration) || 0,
            ownerName: typeof p.ownerName == "string" ? p.ownerName : "",
            visible: p.visible !== !1,
            categories: Array.isArray(p.categories) ? p.categories : [],
            createdAt: typeof p.createdAt == "number" ? p.createdAt : Date.now(),
            order: typeof p.order == "number" ? p.order : M,
            homeOrder: typeof p.homeOrder == "number" ? p.homeOrder : 1e5 + (typeof p.order == "number" ? p.order : M)
        }
    }
    ).sort( (_, M) => (_.order ?? 0) - (M.order ?? 0));
    const g = Array.isArray(o.albums) ? o.albums : ns.albums || []
      , y = g.map( (_, M) => ({
        id: String(_.id ?? `${M + 1}`),
        title: _.title ?? "",
        description: _.description ?? "",
        cover: aa(_.cover ?? ""),
        order: typeof _.order == "number" ? _.order : M,
        homeOrder: typeof _.homeOrder == "number" ? _.homeOrder : typeof _.order == "number" ? _.order : M,
        views: typeof _.views == "number" ? _.views : 0,
        visible: _.visible !== !1,
        categories: Array.isArray(_.categories) ? _.categories : [],
        watermark: Pp(_.watermark)
    })).sort( (_, M) => (_.order ?? 0) - (M.order ?? 0))
      , E = {};
    return g.forEach( (_, M) => {
        const p = String(_.id ?? `${M + 1}`)
          , R = Array.isArray(_.photos) ? _.photos : [];
        E[p] = R.filter(Boolean).map( (C, Z) => {
            if (typeof C == "string")
                return {
                    id: `${p}_${Z}`,
                    kind: pc,
                    url: C,
                    order: Z
                };
            const L = C && typeof C == "object" ? C : {};
            if (L.kind === ri || L.bvid || L.biliUrl) {
                const F = zl(L.bvid || L.biliUrl || "")
                  , te = _n(L.biliUrl || F)
                  , I = aa(L.cover || L.url || "");
                return {
                    id: String(L.id || `${p}_${Z}`),
                    kind: ri,
                    bvid: F,
                    biliUrl: te,
                    title: typeof L.title == "string" ? L.title : "",
                    cover: I,
                    url: I,
                    duration: Number(L.duration) || 0,
                    ownerName: typeof L.ownerName == "string" ? L.ownerName : "",
                    createdAt: typeof L.createdAt == "number" ? L.createdAt : Date.now(),
                    order: typeof L.order == "number" ? L.order : Z
                }
            }
            const q = L.urls && typeof L.urls == "object" ? L.urls : null
              , Se = L.url || (q ? q.main || q.large || q.medium || q.original || q.small : "");
            return {
                id: String(L.id || `${p}_${Z}`),
                kind: pc,
                url: aa(Se),
                urls: q ? Object.fromEntries(Object.entries(q).map( ([F,te]) => [F, aa(te)])) : void 0,
                keys: L.keys && typeof L.keys == "object" ? L.keys : void 0,
                originalName: typeof L.originalName == "string" ? L.originalName : void 0,
                originalSize: typeof L.originalSize == "number" ? L.originalSize : void 0,
                exif: L.exif && typeof L.exif == "object" ? L.exif : void 0,
                sizeMode: typeof L.sizeMode == "string" ? L.sizeMode : void 0,
                createdAt: typeof L.createdAt == "number" ? L.createdAt : Date.now(),
                order: typeof L.order == "number" ? L.order : Z
            }
        }
        )
    }
    ),
    {
        profile: d,
        albums: y,
        photosByAlbumId: E
    }
}
  , xl = ({profile: s, albums: o, photosByAlbumId: d}) => {
    const u = {
        ...s || {}
    };
    delete u.adminPassword;
    const g = (o || []).map(y => ({
        id: y.id,
        title: y.title,
        description: y.description,
        cover: y.cover || "",
        order: y.order ?? 0,
        homeOrder: y.homeOrder ?? y.order ?? 0,
        views: y.views ?? 0,
        visible: y.visible !== !1,
        categories: Array.isArray(y.categories) ? y.categories : [],
        watermark: y.watermark || void 0,
        photos: (d?.[y.id] || []).slice().sort( (E, _) => (E.order ?? 0) - (_.order ?? 0)).map(E => ml(E) ? {
            id: E.id,
            kind: ri,
            bvid: zl(E.bvid || E.biliUrl || ""),
            biliUrl: _n(E.biliUrl || E.bvid || ""),
            title: E.title || "",
            cover: E.cover || E.url || "",
            duration: Number(E.duration) || 0,
            ownerName: E.ownerName || "",
            createdAt: E.createdAt || void 0,
            order: E.order ?? 0
        } : {
            id: E.id,
            kind: pc,
            url: E.url,
            urls: E.urls || void 0,
            keys: E.keys || void 0,
            originalName: E.originalName || void 0,
            originalSize: typeof E.originalSize == "number" ? E.originalSize : void 0,
            exif: E.exif || void 0,
            sizeMode: E.sizeMode || void 0,
            createdAt: E.createdAt || void 0,
            order: E.order ?? 0
        })
    }));
    return {
        profile: u,
        albums: g
    }
}
  , vl = async s => {
    const o = new Blob([JSON.stringify(s, null, 2)],{
        type: "application/json"
    })
      , {putUrl: d} = await Gu({
        key: Sp,
        contentType: "application/json"
    });
    await Qu({
        putUrl: d,
        body: o,
        contentType: "application/json"
    })
}
  , eb = async s => {
    if (!s)
        return null;
    try {
        const d = (await fetch(s, {
            method: "HEAD",
            mode: "cors",
            cache: "no-store"
        })).headers.get("content-length");
        if (d)
            return Number(d)
    } catch {}
    try {
        const o = await fetch(s, {
            mode: "cors",
            cache: "no-store"
        });
        return o.ok ? (await o.arrayBuffer()).byteLength : null
    } catch {
        return null
    }
}
  , es = new Map;
let Y0 = 0;
const sh = async s => {
    const o = zl(s);
    if (!o)
        throw new Error("invalid-bvid");
    if (es.has(o))
        return es.get(o);
    const d = [];
    try {
        const y = await Wp(o);
        return es.set(o, y),
        y
    } catch (y) {
        d.push(`jsonp:${y?.message || String(y)}`)
    }
    if (O0 && Date.now() > Y0)
        try {
            const y = await fetch(O0, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    bvid: o
                })
            });
            if (!y.ok) {
                let M = "";
                try {
                    const p = await y.json();
                    M = p?.detail || p?.error || ""
                } catch {
                    M = await y.text().catch( () => "")
                }
                throw new Error(`http-${y.status}${M ? `:${M}` : ""}`)
            }
            const E = await y.json()
              , _ = Hu(E, o);
            if (!_.title || !_.cover)
                throw new Error("invalid");
            return es.set(o, _),
            _
        } catch (y) {
            d.push(`proxy:${y?.message || String(y)}`),
            Y0 = Date.now() + 180 * 1e3
        }
    const u = new AbortController
      , g = window.setTimeout( () => u.abort(), 9e3);
    try {
        const y = await fetch(`${eh}?bvid=${encodeURIComponent(o)}`, {
            method: "GET",
            mode: "cors",
            cache: "no-store",
            credentials: "omit",
            signal: u.signal
        });
        if (!y.ok)
            throw new Error(`http-${y.status}`);
        const E = await y.json();
        if (E?.code !== 0 || !E?.data)
            throw new Error(`api-${E?.code ?? "invalid"}`);
        const _ = Hu({
            bvid: o,
            biliUrl: _n(o),
            title: E.data.title,
            cover: E.data.pic,
            duration: E.data.duration,
            ownerName: E?.data?.owner?.name
        }, o);
        if (!_.title || !_.cover)
            throw new Error("empty");
        return es.set(o, _),
        _
    } catch (y) {
        throw d.push(`fetch:${y?.message || String(y)}`),
        new Error(d.join(" | "))
    } finally {
        window.clearTimeout(g)
    }
}
  , ci = s => new Promise( (o, d) => {
    const u = document.createElement("img");
    typeof s == "string" && s.startsWith("http") && (u.crossOrigin = "Anonymous"),
    u.src = typeof s == "string" ? s : URL.createObjectURL(s),
    u.onload = () => o(u),
    u.onerror = d
}
)
  , X0 = (s, o={}) => new Promise( (d, u) => {
    ci(s).then(async g => {
        let y = null;
        if (o.watermark && o.watermarkType === "image" && o.watermarkImage)
            try {
                y = await ci(o.watermarkImage)
            } catch (L) {
                console.warn("watermark image load failed", L)
            }
        const E = (L, ae, q) => {
            const Se = document.createElement("canvas");
            Se.width = L,
            Se.height = ae;
            const F = Se.getContext("2d");
            if (F.imageSmoothingEnabled = !0,
            F.imageSmoothingQuality = "high",
            F.drawImage(g, 0, 0, L, ae),
            o.watermark) {
                const te = Math.max(L, ae) * .03;
                if (F.save(),
                F.globalAlpha = o.watermarkOpacity !== void 0 ? parseFloat(o.watermarkOpacity) : .8,
                y) {
                    const I = o.watermarkSize !== void 0 ? parseFloat(o.watermarkSize) : .25
                      , pe = L * I / y.width
                      , ue = y.width * pe
                      , me = y.height * pe;
                    let se, Ee;
                    o.watermarkPosition === "center" ? (se = (L - ue) / 2,
                    Ee = (ae - me) / 2) : o.watermarkPosition === "bottom-center" ? (se = (L - ue) / 2,
                    Ee = ae - me - te) : (se = L - ue - te,
                    Ee = ae - me - te),
                    F.drawImage(y, se, Ee, ue, me)
                } else if (o.watermarkText) {
                    const I = o.watermarkSize !== void 0 ? parseFloat(o.watermarkSize) : .25
                      , pe = Math.max(20, L * .15 * I);
                    F.font = `bold ${pe}px sans-serif`,
                    F.fillStyle = o.watermarkColor || "white",
                    F.shadowColor = "rgba(0,0,0,0.5)",
                    F.shadowBlur = 4;
                    let ue, me;
                    o.watermarkPosition === "center" ? (F.textAlign = "center",
                    F.textBaseline = "middle",
                    ue = L / 2,
                    me = ae / 2) : o.watermarkPosition === "bottom-center" ? (F.textAlign = "center",
                    F.textBaseline = "bottom",
                    ue = L / 2,
                    me = ae - te) : (F.textAlign = "right",
                    F.textBaseline = "bottom",
                    ue = L - te,
                    me = ae - te),
                    F.fillText(o.watermarkText, ue, me)
                }
                F.restore()
            }
            return Se.toDataURL("image/jpeg", q)
        }
        ;
        let _ = g.width
          , M = g.height
          , p = .7
          , R = 1600;
        if (o.compressLevel === "original" ? (p = 1,
        R = 2500) : o.compressLevel === "large" ? (p = .85,
        R = 1920) : o.compressLevel === "medium" ? (p = .7,
        R = 1280) : o.compressLevel === "small" && (p = .5,
        R = 800),
        _ > R || M > R) {
            const L = _ / M;
            _ > M ? (_ = R,
            M = R / L) : (M = R,
            _ = R * L)
        }
        let C = ""
          , Z = 0;
        for (; Z < 6 && (C = E(_, M, p),
        !(C.length < 13e5)); )
            p = Math.max(.4, p - .15),
            _ *= .85,
            M *= .85,
            Z++;
        typeof s != "string" && URL.revokeObjectURL(g.src),
        d({
            url: C
        })
    }
    ).catch(u)
}
)
  , ts = "rgb(220, 231, 241)"
  , tb = s => {
    typeof document > "u" || document.documentElement.style.setProperty("--page-backdrop-color", s || ts)
}
  , lb = s => {
    if (typeof document > "u" || !s)
        return ts;
    try {
        const o = document.createElement("canvas")
          , d = o.getContext("2d", {
            willReadFrequently: !0
        });
        if (!d)
            return ts;
        const u = 40
          , g = 18;
        o.width = u,
        o.height = g,
        d.drawImage(s, 0, 0, u, g);
        const {data: y} = d.getImageData(0, 0, u, g);
        let E = 0
          , _ = 0
          , M = 0
          , p = 0;
        for (let R = 0; R < g; R += 1)
            for (let C = 0; C < u; C += 1) {
                const Z = (R * u + C) * 4
                  , L = y[Z + 3] / 255;
                if (L <= 0)
                    continue;
                const ae = 1.7 - R / Math.max(g - 1, 1) * .9
                  , q = L * ae;
                E += y[Z] * q,
                _ += y[Z + 1] * q,
                M += y[Z + 2] * q,
                p += q
            }
        return p <= 0 ? ts : `rgb(${Math.round(E / p)}, ${Math.round(_ / p)}, ${Math.round(M / p)})`
    } catch {
        return ts
    }
}
  , nb = ({bgImage: s, fallback: o}) => {
    const d = o || P0
      , [u,g] = b.useState("");
    return b.useEffect( () => {
        const y = String(s || "").trim()
          , E = String(d).trim();
        let _ = !1;
        const M = (p, R) => {
            if (!p) {
                R?.();
                return
            }
            const C = new Image;
            C.decoding = "async",
            C.onload = () => {
                _ || (tb(lb(C)),
                g(Z => Z === p ? Z : p))
            }
            ,
            C.onerror = () => {
                _ || R?.()
            }
            ,
            C.src = p
        }
        ;
        return y ? M(y, () => M(E, () => g(""))) : M(E, () => g("")),
        () => {
            _ = !0
        }
    }
    , [s, d]),
    r.jsxs("div", {
        className: "fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none bg-slate-200",
        children: [r.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300"
        }), u && r.jsx("img", {
            src: u,
            className: "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            alt: "bg",
            loading: "eager",
            decoding: "async",
            fetchPriority: "high",
            onError: () => {
                u !== d && g(d)
            }
        }), r.jsx("div", {
            className: "absolute inset-0 bg-white/40 backdrop-blur-[60px] mix-blend-overlay"
        }), r.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-white/30 to-white/70"
        }), r.jsx("div", {
            className: "absolute inset-0 opacity-[0.08]",
            style: {
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }
        })]
    })
}
  , ab = ({processingStatus: s}) => r.jsxs("div", {
    className: "fixed inset-0 z-[300] bg-white/80 backdrop-blur-md flex flex-col items-center justify-center animate-fade-in",
    children: [r.jsx(K0, {
        size: 48,
        className: "text-gray-800 animate-spin mb-4"
    }), r.jsx("p", {
        className: "text-lg font-sans text-gray-800 whitespace-pre-line text-center",
        children: s
    })]
})
  , ib = () => r.jsxs("div", {
    className: "fixed inset-0 z-[400] bg-white flex flex-col items-center justify-center",
    children: [r.jsx("div", {
        className: "w-16 h-16 border-4 border-gray-200 border-t-gray-800 rounded-full animate-spin mb-4"
    }), r.jsx("p", {
        className: "text-gray-500 font-mono tracking-widest text-sm animate-pulse",
        children: "LOADING GALLERY..."
    })]
})
  , rb = ({children: s, speed: o=.5, delay: d=1.2, className: u=""}) => {
    const g = Number(o)
      , y = Number.isFinite(g) && g > 0 ? Math.max(2.5, 4 / g) : 6
      , E = Number.isFinite(Number(d)) ? Number(d) : 0;
    return r.jsx("span", {
        className: `shiny-text ${u}`,
        style: {
            "--shine-duration": `${y}s`,
            "--shine-delay": `${E}s`
        },
        children: s
    })
}
  , sb = ({value: s, onChange: o}) => {
    const [d,u] = b.useState(!1)
      , g = b.useRef(null);
    b.useEffect( () => {
        const _ = M => {
            g.current && !g.current.contains(M.target) && u(!1)
        }
        ;
        return document.addEventListener("mousedown", _),
        () => document.removeEventListener("mousedown", _)
    }
    , []);
    const y = [{
        id: "original",
        label: "原图 (High)",
        desc: "无损（若大小允许）"
    }, {
        id: "large",
        label: "大图 (Large)",
        desc: "4K / ~10MB"
    }, {
        id: "medium",
        label: "中图 (Medium)",
        desc: "1080p / ~5MB"
    }, {
        id: "small",
        label: "小图 (Small)",
        desc: "720p / ~2MB"
    }]
      , E = y.find(_ => _.id === s)?.label.split(" ")[0] || "Medium";
    return r.jsxs("div", {
        className: "relative",
        ref: g,
        children: [r.jsxs("button", {
            onClick: () => u(!d),
            className: `flex items-center gap-2 px-4 py-2.5 rounded-full ${Ml} min-w-[100px] justify-between`,
            title: "Upload compression",
            children: [r.jsxs("div", {
                className: "flex items-center gap-2",
                children: [r.jsx(Du, {
                    size: 16,
                    className: "text-gray-600"
                }), r.jsx("span", {
                    className: "text-sm font-bold text-gray-800",
                    children: E
                })]
            }), r.jsx(gy, {
                size: 14,
                className: `text-gray-500 transition-transform ${d ? "rotate-180" : ""}`
            })]
        }), d && r.jsx("div", {
            className: "absolute top-full mt-2 left-0 w-44 bg-white/95 backdrop-blur-2xl border border-white/60 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden z-50 animate-fade-in flex flex-col p-1",
            children: y.map(_ => r.jsxs("button", {
                onClick: () => {
                    o(_.id),
                    u(!1)
                }
                ,
                className: `w-full text-left px-3 py-2.5 rounded-lg transition-colors flex flex-col ${s === _.id ? "bg-gray-100" : "hover:bg-gray-50"}`,
                children: [r.jsx("span", {
                    className: `text-sm font-bold ${s === _.id ? "text-gray-900" : "text-gray-700"}`,
                    children: _.label
                }), r.jsx("span", {
                    className: "text-[10px] text-gray-400 font-medium",
                    children: _.desc
                })]
            }, _.id))
        })]
    })
}
  , cb = ({isOpen: s, onClose: o, profile: d, onSave: u, tempAvatar: g, setTempAvatar: y, tempQr: E, setTempQr: _}) => {
    if (!s)
        return null;
    const M = () => o?.()
      , p = async C => {
        if (C.target.files[0])
            try {
                const Z = await X0(C.target.files[0], {
                    compressLevel: "small"
                });
                y(Z.url)
            } catch (Z) {
                console.error(Z)
            }
    }
      , R = async C => {
        if (C.target.files[0])
            try {
                const Z = await X0(C.target.files[0], {
                    compressLevel: "small"
                });
                _(Z.url)
            } catch (Z) {
                console.error(Z)
            }
    }
    ;
    return r.jsxs("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto",
        children: [r.jsx("div", {
            className: "absolute inset-0 bg-gray-900/10 backdrop-blur-sm",
            onClick: C => {
                C.target === C.currentTarget && o()
            }
        }), r.jsxs("div", {
            className: "relative w-full max-w-lg p-8 rounded-3xl bg-white/90 backdrop-blur-xl shadow-[0_40px_80px_rgba(0,0,0,0.15)] animate-fade-in-up border border-white ring-1 ring-white my-8",
            children: [r.jsx("h3", {
                className: "text-2xl font-bold mb-8 text-gray-800 text-center",
                children: "编辑个人资料"
            }), r.jsxs("form", {
                onSubmit: u,
                className: "flex flex-col gap-6",
                children: [r.jsx("div", {
                    className: "flex justify-center mb-2",
                    children: r.jsxs("div", {
                        className: "relative group cursor-pointer w-28 h-28",
                        children: [r.jsx("img", {
                            src: g || d.avatar,
                            alt: "Preview",
                            className: "w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                        }), r.jsx("div", {
                            className: "absolute inset-0 bg-black/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                            children: r.jsx(fy, {
                                className: "text-white",
                                size: 24
                            })
                        }), r.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            className: "absolute inset-0 opacity-0 cursor-pointer",
                            onChange: p
                        })]
                    })
                }), r.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [r.jsxs("div", {
                        className: "col-span-1 md:col-span-2",
                        children: [r.jsx("label", {
                            className: "block text-xs uppercase tracking-wider text-gray-400 mb-1 font-semibold",
                            children: "Name"
                        }), r.jsx("input", {
                            name: "name",
                            defaultValue: d.name,
                            className: "w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-300",
                            required: !0
                        })]
                    }), r.jsxs("div", {
                        className: "col-span-1 md:col-span-2",
                        children: [r.jsx("label", {
                            className: "block text-xs uppercase tracking-wider text-gray-400 mb-1 font-semibold",
                            children: "Bio"
                        }), r.jsx("textarea", {
                            name: "bio",
                            defaultValue: d.bio,
                            rows: "3",
                            className: "w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
                        })]
                    }), r.jsxs("div", {
                        className: "col-span-1 md:col-span-2",
                        children: [r.jsxs("label", {
                            className: "block text-xs uppercase tracking-wider text-gray-400 mb-1 font-semibold flex items-center gap-1",
                            children: [r.jsx(F0, {
                                size: 12
                            }), " Phone"]
                        }), r.jsx("input", {
                            name: "phone",
                            defaultValue: d.phone,
                            className: "w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        })]
                    }), r.jsxs("div", {
                        className: "col-span-1 md:col-span-2",
                        children: [r.jsxs("label", {
                            className: "block text-xs uppercase tracking-wider text-gray-400 mb-1 font-semibold flex items-center gap-1",
                            children: [r.jsx(Xu, {
                                size: 12
                            }), " WeChat ID"]
                        }), r.jsx("input", {
                            name: "wechatId",
                            defaultValue: d.wechatId,
                            className: "w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        })]
                    }), r.jsxs("div", {
                        className: "col-span-1 md:col-span-2",
                        children: [r.jsxs("label", {
                            className: "block text-xs uppercase tracking-wider text-gray-400 mb-1 font-semibold flex items-center gap-1",
                            children: [r.jsx(Py, {
                                size: 12
                            }), " WeChat QR"]
                        }), r.jsxs("div", {
                            className: "relative h-[46px] w-full bg-white/50 border border-gray-200 rounded-xl flex items-center px-4 overflow-hidden cursor-pointer hover:bg-white transition-colors group",
                            children: [r.jsx("span", {
                                className: "text-gray-500 text-sm truncate flex-1",
                                children: E || d.wechatQr ? "QR Code Image Selected" : "Upload QR Image..."
                            }), r.jsx(Vu, {
                                size: 16,
                                className: "text-gray-400 group-hover:text-gray-600"
                            }), r.jsx("input", {
                                type: "file",
                                accept: "image/*",
                                className: "absolute inset-0 opacity-0 cursor-pointer",
                                onChange: R
                            })]
                        })]
                    }), r.jsxs("div", {
                        className: "col-span-1 md:col-span-2 pt-4 border-t border-gray-100",
                        children: [r.jsxs("label", {
                            className: "block text-xs uppercase tracking-wider text-gray-400 mb-1 font-semibold flex items-center gap-1",
                            children: [r.jsx(Uy, {
                                size: 12
                            }), " Admin Password"]
                        }), r.jsx("input", {
                            name: "adminPassword",
                            type: "password",
                            defaultValue: "",
                            className: "w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm tracking-widest font-mono",
                            placeholder: "留空则保持当前密码不变",
                            autoComplete: "new-password"
                        }), r.jsx("p", {
                            className: "text-[10px] text-gray-400 mt-1",
                            children: "这里不再显示旧密码。输入新密码才会更新管理员登录密码。"
                        })]
                    })]
                }), r.jsxs("div", {
                    className: "flex gap-3 mt-4 pt-4 border-t border-gray-100",
                    children: [r.jsx("button", {
                        type: "button",
                        onClick: M,
                        className: "flex-1 py-3 rounded-xl hover:bg-gray-100 text-gray-500 font-medium",
                        children: "取消"
                    }), r.jsx("button", {
                        type: "submit",
                        className: "flex-1 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 shadow-lg",
                        children: "保存资料"
                    })]
                })]
            })]
        })]
    })
}
  , ob = ({isOpen: s, onClose: o, editingAlbum: d, onSave: u, categoryOptions: g=[]}) => {
    const [y,E] = b.useState([]);
    if (b.useEffect( () => {
        if (!s)
            return;
        const C = (Array.isArray(d?.categories) ? d.categories : []).filter(Z => g.includes(Z));
        E(C)
    }
    , [s, d?.id, g.join("|")]),
    !s)
        return null;
    const _ = () => o?.()
      , M = d ? d.visible !== !1 : !0
      , p = R => {
        E(C => C.includes(R) ? C.filter(Z => Z !== R) : [...C, R])
    }
    ;
    return r.jsxs("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
        children: [r.jsx("div", {
            className: "absolute inset-0 bg-gray-900/10 backdrop-blur-sm",
            onClick: _
        }), r.jsxs("div", {
            className: "relative w-full max-w-md p-8 rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl animate-fade-in-up border border-white ring-1 ring-white",
            children: [r.jsx("h3", {
                className: "text-2xl font-bold mb-6 text-gray-800",
                children: d ? "Edit Album" : "New Album"
            }), r.jsxs("form", {
                onSubmit: R => {
                    const C = R.currentTarget;
                    C.querySelectorAll('input[name="categories"][data-runtime="1"]').forEach(L => L.remove()),
                    y.forEach(L => {
                        const ae = document.createElement("input");
                        ae.type = "hidden",
                        ae.name = "categories",
                        ae.value = L,
                        ae.setAttribute("data-runtime", "1"),
                        C.appendChild(ae)
                    }
                    ),
                    u(R)
                }
                ,
                className: "flex flex-col gap-4",
                children: [r.jsxs("div", {
                    children: [r.jsx("label", {
                        className: "block text-sm text-gray-500 mb-1 font-medium",
                        children: "标题"
                    }), r.jsx("input", {
                        name: "title",
                        defaultValue: d?.title,
                        className: "w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 shadow-inner",
                        autoFocus: !0
                    })]
                }), r.jsxs("div", {
                    children: [r.jsx("label", {
                        className: "block text-sm text-gray-500 mb-1 font-medium",
                        children: "Description"
                    }), r.jsx("textarea", {
                        name: "description",
                        defaultValue: d?.description,
                        rows: "4",
                        className: "w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 resize-none shadow-inner"
                    })]
                }), g.length > 0 && r.jsxs("div", {
                    className: "pt-1",
                    children: [r.jsx("label", {
                        className: "block text-sm text-gray-500 mb-2 font-medium",
                        children: "分类（可多选）"
                    }), r.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: g.map(R => {
                            const C = y.includes(R);
                            return r.jsx("button", {
                                type: "button",
                                onClick: () => p(R),
                                className: `px-3 py-1.5 rounded-full text-xs font-semibold border transition-all active:scale-95 ${C ? "bg-gray-900 text-white border-gray-900" : "bg-white/60 text-gray-700 border-gray-200 hover:bg-white"}`,
                                children: R
                            }, R)
                        }
                        )
                    }), r.jsx("p", {
                        className: "mt-2 text-[11px] text-gray-400",
                        children: "提示：首页可按分类筛选作品集"
                    })]
                }), r.jsxs("div", {
                    className: "flex items-center gap-3 py-2",
                    children: [r.jsxs("label", {
                        className: "relative inline-flex items-center cursor-pointer",
                        children: [r.jsx("input", {
                            type: "checkbox",
                            name: "visible",
                            className: "sr-only peer",
                            defaultChecked: M
                        }), r.jsx("div", {
                            className: "w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-800"
                        })]
                    }), r.jsx("span", {
                        className: "text-sm font-medium text-gray-600",
                        children: "对外展示此作品集"
                    })]
                }), r.jsxs("div", {
                    className: "flex gap-3 mt-4",
                    children: [r.jsx("button", {
                        type: "button",
                        onClick: _,
                        className: "flex-1 py-3 rounded-xl hover:bg-gray-100 text-gray-500 font-medium",
                        children: "取消"
                    }), r.jsx("button", {
                        type: "submit",
                        className: "flex-1 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 shadow-lg",
                        children: "保存"
                    })]
                })]
            })]
        })]
    })
}
  , ub = ({isOpen: s, onClose: o, categories: d=[], onSave: u}) => {
    const [g,y] = b.useState("");
    if (!s)
        return null;
    const E = () => o?.()
      , _ = Z => (Z || "").trim()
      , M = Z => Array.from(new Set(Z.map(_).filter(Boolean)))
      , p = () => {
        const Z = _(g);
        if (Z) {
            if (d.includes(Z)) {
                y("");
                return
            }
            u(M([...d, Z])),
            y("")
        }
    }
      , R = Z => {
        u(d.filter(L => L !== Z))
    }
      , C = (Z, L) => {
        const ae = Z + L;
        if (ae < 0 || ae >= d.length)
            return;
        const q = d.slice()
          , Se = q[Z];
        q[Z] = q[ae],
        q[ae] = Se,
        u(q)
    }
    ;
    return r.jsxs("div", {
        className: "fixed inset-0 z-[150] flex items-center justify-center p-4 animate-fade-in",
        children: [r.jsx("div", {
            className: "absolute inset-0 bg-black/20 backdrop-blur-sm",
            onClick: E
        }), r.jsxs("div", {
            className: "relative w-full max-w-sm bg-white/90 backdrop-blur-2xl border border-white/70 rounded-3xl shadow-2xl p-6",
            children: [r.jsxs("div", {
                className: "flex items-center justify-between mb-4",
                children: [r.jsx("h3", {
                    className: "text-lg font-bold text-gray-900",
                    children: "分类管理"
                }), r.jsx("button", {
                    onClick: E,
                    className: "p-2 rounded-full hover:bg-black/5 text-gray-700",
                    children: r.jsx(fr, {
                        size: 18
                    })
                })]
            }), r.jsxs("div", {
                className: "flex gap-2 mb-4",
                children: [r.jsx("input", {
                    value: g,
                    onChange: Z => y(Z.target.value),
                    placeholder: "新增分类，例如：Portrait",
                    className: "flex-1 bg-white/60 border border-gray-200 rounded-xl px-3 py-2.5 text-sm shadow-inner"
                }), r.jsx("button", {
                    type: "button",
                    onClick: p,
                    className: "px-4 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-gray-800",
                    children: "添加"
                })]
            }), r.jsx("div", {
                className: "flex flex-col gap-2 max-h-[45vh] overflow-auto pr-1",
                children: d.length === 0 ? r.jsx("div", {
                    className: "text-sm text-gray-500",
                    children: "暂无分类"
                }) : d.map( (Z, L) => r.jsxs("div", {
                    className: "group flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/60 border border-white/60 shadow-sm",
                    children: [r.jsxs("div", {
                        className: "flex items-center gap-1",
                        children: [r.jsx("button", {
                            onClick: () => C(L, -1),
                            disabled: L === 0,
                            className: "p-1.5 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-black/5 disabled:opacity-35 disabled:cursor-not-allowed transition-colors",
                            title: "上移",
                            children: r.jsx(oy, {
                                size: 14
                            })
                        }), r.jsx("button", {
                            onClick: () => C(L, 1),
                            disabled: L === d.length - 1,
                            className: "p-1.5 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-black/5 disabled:opacity-35 disabled:cursor-not-allowed transition-colors",
                            title: "下移",
                            children: r.jsx(sy, {
                                size: 14
                            })
                        })]
                    }), r.jsx("span", {
                        className: "text-sm font-semibold text-gray-800 flex-1",
                        children: Z
                    }), r.jsx("button", {
                        onClick: () => R(Z),
                        className: "opacity-60 group-hover:opacity-100 text-gray-500 hover:text-red-600 transition-colors",
                        title: "删除",
                        children: r.jsx(fr, {
                            size: 16
                        })
                    })]
                }, Z))
            }), r.jsx("div", {
                className: "mt-6 text-[11px] text-gray-500 leading-relaxed",
                children: "提示：可用上下箭头调整分类顺序；删除分类不会删除作品集，只会从筛选中移除。作品集里已选择的分类也会自动清理。"
            })]
        })]
    })
}
  , fb = ({isOpen: s, onClose: o, onSave: d, modalTitle: u="添加 B站视频", categoryOptions: g=[], enableCategories: y=!1, defaultCategories: E=[]}) => {
    const [_,M] = b.useState("")
      , [p,R] = b.useState("")
      , [C,Z] = b.useState("")
      , [L,ae] = b.useState(0)
      , [q,Se] = b.useState("")
      , [F,te] = b.useState([])
      , [I,pe] = b.useState(!1)
      , [ue,me] = b.useState("")
      , se = Array.isArray(g) ? g.join("|") : ""
      , Ee = Array.isArray(E) ? E.join("|") : "";
    if (b.useEffect( () => {
        if (!s)
            return;
        M(""),
        R(""),
        Z(""),
        ae(0),
        Se("");
        const be = y ? (Array.isArray(E) ? E : []).filter(Ce => Array.isArray(g) ? g.includes(Ce) : !1) : [];
        te(Array.from(new Set(be))),
        pe(!1),
        me("")
    }
    , [s, y, se, Ee]),
    !s)
        return null;
    const Xe = () => o?.()
      , ze = async () => {
        const be = zl(_);
        if (!be) {
            me("请输入有效的 B站视频链接或 BV 号");
            return
        }
        pe(!0),
        me("");
        try {
            const Ce = await sh(be);
            M(Ce.biliUrl || _n(be)),
            R(Ce.title || p),
            Z(Ce.cover || C),
            ae(Number(Ce.duration) || 0),
            Se(Ce.ownerName || q)
        } catch (Ce) {
            const $e = Fp(Ce?.message || "");
            me(`解析失败（${$e}）。你可手动填写标题/封面，或直接添加后再编辑。`)
        } finally {
            pe(!1)
        }
    }
      , _e = be => {
        be.preventDefault();
        const Ce = zl(_);
        if (!Ce) {
            me("请输入有效的 B站视频链接或 BV 号");
            return
        }
        const $e = _n(Ce)
          , B = (p || "").trim() || `B站视频 ${Ce}`
          , P = ii(C) || en;
        d?.({
            kind: ri,
            bvid: Ce,
            biliUrl: $e,
            title: B,
            cover: P,
            duration: Number(L) || 0,
            ownerName: (q || "").trim(),
            categories: y ? F : void 0
        })
    }
      , Le = be => {
        te(Ce => Ce.includes(be) ? Ce.filter($e => $e !== be) : [...Ce, be])
    }
    ;
    return r.jsxs("div", {
        className: "fixed inset-0 z-[150] flex items-center justify-center p-4 animate-fade-in",
        children: [r.jsx("div", {
            className: "absolute inset-0 bg-black/20 backdrop-blur-sm",
            onClick: Xe
        }), r.jsxs("div", {
            className: "relative w-full max-w-lg bg-white/90 backdrop-blur-2xl border border-white/70 rounded-3xl shadow-2xl p-6",
            children: [r.jsxs("div", {
                className: "flex items-center justify-between mb-4",
                children: [r.jsx("h3", {
                    className: "text-lg font-bold text-gray-900",
                    children: u
                }), r.jsx("button", {
                    onClick: Xe,
                    className: "p-2 rounded-full hover:bg-black/5 text-gray-700",
                    children: r.jsx(fr, {
                        size: 18
                    })
                })]
            }), r.jsxs("form", {
                onSubmit: _e,
                className: "flex flex-col gap-4",
                children: [r.jsxs("div", {
                    className: "space-y-2",
                    children: [r.jsx("label", {
                        className: "block text-sm text-gray-500 font-medium",
                        children: "B站链接 / BV号"
                    }), r.jsxs("div", {
                        className: "flex gap-2",
                        children: [r.jsx("input", {
                            value: _,
                            onChange: be => M(be.target.value),
                            placeholder: "https://www.bilibili.com/video/BV...",
                            className: "flex-1 bg-white/60 border border-gray-200 rounded-xl px-4 py-3 shadow-inner"
                        }), r.jsx("button", {
                            type: "button",
                            onClick: ze,
                            disabled: I,
                            className: "px-4 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 disabled:opacity-50",
                            children: I ? "解析中..." : "解析链接"
                        })]
                    })]
                }), r.jsxs("div", {
                    className: "space-y-2",
                    children: [r.jsx("label", {
                        className: "block text-sm text-gray-500 font-medium",
                        children: "标题"
                    }), r.jsx("input", {
                        value: p,
                        onChange: be => R(be.target.value),
                        placeholder: "视频标题",
                        className: "w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 shadow-inner"
                    })]
                }), r.jsxs("div", {
                    className: "space-y-2",
                    children: [r.jsx("label", {
                        className: "block text-sm text-gray-500 font-medium",
                        children: "封面图链接"
                    }), r.jsx("input", {
                        value: C,
                        onChange: be => Z(be.target.value),
                        placeholder: "https://i0.hdslb.com/...",
                        className: "w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 shadow-inner"
                    })]
                }), r.jsxs("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [r.jsxs("div", {
                        className: "space-y-2",
                        children: [r.jsx("label", {
                            className: "block text-sm text-gray-500 font-medium",
                            children: "时长（秒）"
                        }), r.jsx("input", {
                            type: "number",
                            min: "0",
                            value: L,
                            onChange: be => ae(Number(be.target.value) || 0),
                            className: "w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 shadow-inner"
                        })]
                    }), r.jsxs("div", {
                        className: "space-y-2",
                        children: [r.jsx("label", {
                            className: "block text-sm text-gray-500 font-medium",
                            children: "UP主（可选）"
                        }), r.jsx("input", {
                            value: q,
                            onChange: be => Se(be.target.value),
                            className: "w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 shadow-inner"
                        })]
                    })]
                }), y ? r.jsxs("div", {
                    className: "space-y-2",
                    children: [r.jsx("label", {
                        className: "block text-sm text-gray-500 font-medium",
                        children: "分类（可多选）"
                    }), Array.isArray(g) && g.length > 0 ? r.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: g.map(be => {
                            const Ce = F.includes(be);
                            return r.jsx("button", {
                                type: "button",
                                onClick: () => Le(be),
                                className: `px-3 py-1.5 rounded-full text-sm font-semibold border transition-colors ${Ce ? "bg-gray-900 text-white border-gray-900" : "bg-white/70 text-gray-700 border-gray-200 hover:border-gray-300"}`,
                                children: be
                            }, be)
                        }
                        )
                    }) : r.jsx("div", {
                        className: "text-xs text-gray-500",
                        children: "暂无分类，请先在“分类管理”里新增。"
                    })]
                }) : null, C ? r.jsx("div", {
                    className: "rounded-xl overflow-hidden border border-gray-200 bg-gray-50",
                    children: r.jsx("img", {
                        src: C,
                        alt: "",
                        className: "w-full h-40 object-cover",
                        loading: "lazy",
                        referrerPolicy: "no-referrer"
                    })
                }) : null, ue ? r.jsx("div", {
                    className: "text-sm text-red-500",
                    children: ue
                }) : null, r.jsx("p", {
                    className: "text-[11px] text-gray-500 leading-relaxed",
                    children: "风控建议：本功能仅保存卡片信息，不在站内播放。手机端点击会先到站内中转页，再由用户主动跳转至 B站。"
                }), r.jsxs("div", {
                    className: "flex gap-3 mt-2",
                    children: [r.jsx("button", {
                        type: "button",
                        onClick: Xe,
                        className: "flex-1 py-3 rounded-xl hover:bg-gray-100 text-gray-500 font-medium",
                        children: "取消"
                    }), r.jsx("button", {
                        type: "submit",
                        className: "flex-1 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 shadow-lg",
                        children: "添加视频"
                    })]
                })]
            })]
        })]
    })
}
  , db = ({item: s, onBack: o}) => {
    if (!s)
        return null;
    const d = _n(s.biliUrl || s.bvid || "")
      , u = s.title || "B站视频"
      , g = s.cover || s.url || ""
      , y = ss(s.duration)
      , E = Ip()
      , _ = rh()
      , M = async () => {
        if (d)
            try {
                await navigator.clipboard.writeText(d),
                alert("已复制链接")
            } catch {
                const p = document.createElement("textarea");
                p.value = d,
                p.style.position = "fixed",
                p.style.left = "-9999px",
                document.body.appendChild(p),
                p.focus(),
                p.select();
                try {
                    document.execCommand("copy")
                } catch {}
                document.body.removeChild(p),
                alert("已复制链接")
            }
    }
    ;
    return r.jsx("div", {
        className: "min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-6",
        children: r.jsx("div", {
            className: "max-w-xl mx-auto",
            children: r.jsxs("div", {
                className: `rounded-3xl p-5 sm:p-6 ${dr} animate-fade-in-up`,
                children: [r.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [r.jsxs("button", {
                        onClick: o,
                        className: `flex items-center gap-2 px-4 py-2 rounded-full ${Ml}`,
                        children: [r.jsx(Yu, {
                            size: 16
                        }), r.jsx("span", {
                            className: "text-sm font-semibold",
                            children: "返回相册"
                        })]
                    }), r.jsx("span", {
                        className: "text-xs text-gray-500",
                        children: "中转页"
                    })]
                }), r.jsx("div", {
                    className: "rounded-2xl overflow-hidden border border-white/70 bg-black/5 mb-4",
                    children: g ? r.jsx("img", {
                        src: g,
                        alt: "",
                        className: "w-full h-auto block object-cover",
                        loading: "lazy",
                        referrerPolicy: "no-referrer"
                    }) : r.jsx("div", {
                        className: "h-48 bg-gradient-to-br from-gray-100 to-gray-50"
                    })
                }), r.jsx("h2", {
                    className: "text-xl sm:text-2xl font-bold text-gray-900 leading-snug",
                    children: u
                }), r.jsxs("div", {
                    className: "mt-2 text-sm text-gray-600 flex items-center gap-3",
                    children: [r.jsxs("span", {
                        className: "inline-flex items-center gap-1",
                        children: [r.jsx(_i, {
                            size: 15
                        }), " B站视频"]
                    }), y ? r.jsx("span", {
                        children: y
                    }) : null, s.ownerName ? r.jsxs("span", {
                        children: ["UP: ", s.ownerName]
                    }) : null]
                }), r.jsx("div", {
                    className: "mt-5 rounded-xl bg-white/65 border border-white/80 p-3 text-sm text-gray-700 leading-relaxed",
                    children: "视频托管在 B站。点击下方按钮后，将跳转至 B站播放页面（不在本站内播放）。"
                }), E ? r.jsx("div", {
                    className: "mt-3 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2",
                    children: "当前为微信/QQ内置浏览器，若未自动拉起 App，可点击“复制链接”后在系统浏览器打开。"
                }) : null, r.jsxs("div", {
                    className: "mt-5 flex flex-col sm:flex-row gap-3",
                    children: [r.jsxs("a", {
                        href: d,
                        target: _ ? "_self" : "_blank",
                        rel: "noopener noreferrer nofollow ugc",
                        className: "flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800",
                        children: [r.jsx(Cy, {
                            size: 16
                        }), "在 B站观看"]
                    }), r.jsxs("button", {
                        type: "button",
                        onClick: M,
                        className: "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/80 border border-white/80 text-gray-700 font-semibold hover:bg-white",
                        children: [r.jsx($0, {
                            size: 16
                        }), "复制链接"]
                    })]
                })]
            })
        })
    })
}
  , mb = ({isOpen: s, onClose: o, onApply: d, onRemove: u, currentWatermark: g}) => {
    const [y,E] = b.useState("text")
      , [_,M] = b.useState(.8)
      , [p,R] = b.useState(.25)
      , [C,Z] = b.useState(null)
      , L = () => o?.();
    return b.useEffect( () => {
        if (!s)
            return;
        const ae = g || {};
        E(ae.type === "image" ? "image" : "text"),
        M(typeof ae.opacity == "number" ? ae.opacity : .8),
        R(typeof ae.size == "number" ? ae.size : .25),
        Z(null)
    }
    , [s, g]),
    s ? r.jsxs("div", {
        className: "fixed inset-0 z-[150] flex items-center justify-center p-4",
        children: [r.jsx("div", {
            className: "absolute inset-0 bg-gray-900/10 backdrop-blur-sm",
            onClick: L
        }), r.jsxs("div", {
            className: "relative w-full max-w-sm p-6 rounded-3xl bg-white/95 backdrop-blur-2xl shadow-2xl animate-fade-in-up border border-white ring-1 ring-black/5",
            children: [r.jsxs("h3", {
                className: "text-lg font-bold mb-4 text-gray-800 flex items-center gap-2",
                children: [r.jsx(W0, {
                    size: 18
                }), "Watermark"]
            }), r.jsxs("form", {
                onSubmit: ae => {
                    ae.preventDefault(),
                    d(new FormData(ae.target), C, g)
                }
                ,
                className: "flex flex-col gap-4",
                children: [r.jsx("input", {
                    type: "hidden",
                    name: "watermarkType",
                    value: y
                }), r.jsxs("div", {
                    className: "flex bg-gray-100 p-1 rounded-xl",
                    children: [r.jsxs("button", {
                        type: "button",
                        onClick: () => E("text"),
                        className: `flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all ${y === "text" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`,
                        children: [r.jsx(sp, {
                            size: 14
                        }), "Text"]
                    }), r.jsxs("button", {
                        type: "button",
                        onClick: () => E("image"),
                        className: `flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all ${y === "image" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`,
                        children: [r.jsx(yc, {
                            size: 14
                        }), "Image"]
                    })]
                }), r.jsxs("div", {
                    className: "space-y-4",
                    children: [y === "text" ? r.jsxs(r.Fragment, {
                        children: [r.jsxs("div", {
                            children: [r.jsx("label", {
                                className: "block text-xs font-semibold text-gray-500 mb-1",
                                children: "Text"
                            }), r.jsx("input", {
                                name: "watermarkText",
                                defaultValue: g?.text || "Ljx Photography",
                                className: "w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800"
                            })]
                        }), r.jsxs("div", {
                            children: [r.jsx("label", {
                                className: "block text-xs font-semibold text-gray-500 mb-1",
                                children: "Color"
                            }), r.jsxs("select", {
                                name: "watermarkColor",
                                defaultValue: g?.color === "black" ? "black" : "white",
                                className: "w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800",
                                children: [r.jsx("option", {
                                    value: "white",
                                    children: "White"
                                }), r.jsx("option", {
                                    value: "black",
                                    children: "Black"
                                })]
                            })]
                        })]
                    }) : r.jsxs("div", {
                        children: [r.jsx("label", {
                            className: "block text-xs font-semibold text-gray-500 mb-1",
                            children: "PNG Image"
                        }), r.jsxs("div", {
                            className: "relative h-24 w-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors group overflow-hidden",
                            children: [C ? r.jsx("img", {
                                src: URL.createObjectURL(C),
                                className: "h-full w-full object-contain p-2",
                                alt: "wm"
                            }) : g?.imageUrl ? r.jsx("img", {
                                src: g.imageUrl,
                                className: "h-full w-full object-contain p-2",
                                alt: "wm"
                            }) : r.jsxs(r.Fragment, {
                                children: [r.jsx(Vu, {
                                    size: 20,
                                    className: "text-gray-300 group-hover:text-gray-500 mb-2"
                                }), r.jsx("span", {
                                    className: "text-xs text-gray-400",
                                    children: "Click to upload logo.png"
                                })]
                            }), r.jsx("input", {
                                type: "file",
                                accept: "image/png",
                                className: "absolute inset-0 opacity-0 cursor-pointer",
                                onChange: ae => Z(ae.target.files[0])
                            })]
                        })]
                    }), r.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [r.jsxs("div", {
                            children: [r.jsxs("label", {
                                className: "block text-xs font-semibold text-gray-500 mb-1 flex justify-between",
                                children: [r.jsx("span", {
                                    children: "Opacity"
                                }), r.jsxs("span", {
                                    children: [Math.round(_ * 100), "%"]
                                })]
                            }), r.jsx("input", {
                                type: "range",
                                name: "watermarkOpacity",
                                min: "0.1",
                                max: "1.0",
                                step: "0.1",
                                value: _,
                                onChange: ae => M(Number(ae.target.value)),
                                className: "w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-800"
                            })]
                        }), r.jsxs("div", {
                            children: [r.jsxs("label", {
                                className: "block text-xs font-semibold text-gray-500 mb-1 flex justify-between",
                                children: [r.jsx("span", {
                                    children: "Size"
                                }), r.jsxs("span", {
                                    children: [Math.round(p * 100), "%"]
                                })]
                            }), r.jsx("input", {
                                type: "range",
                                name: "watermarkSize",
                                min: "0.1",
                                max: "0.8",
                                step: "0.05",
                                value: p,
                                onChange: ae => R(Number(ae.target.value)),
                                className: "w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-800"
                            })]
                        })]
                    }), r.jsxs("div", {
                        children: [r.jsxs("label", {
                            className: "block text-xs font-semibold text-gray-500 mb-2 flex items-center gap-1",
                            children: [r.jsx(Ly, {
                                size: 12
                            }), "Position"]
                        }), r.jsxs("div", {
                            className: "grid grid-cols-3 gap-2",
                            children: [r.jsxs("label", {
                                className: "cursor-pointer text-center text-[10px] text-gray-500",
                                children: [r.jsx("input", {
                                    type: "radio",
                                    name: "watermarkPosition",
                                    value: "center",
                                    className: "peer hidden",
                                    defaultChecked: g?.position === "center"
                                }), r.jsx("div", {
                                    className: "h-10 rounded-lg border border-gray-200 bg-white peer-checked:border-gray-900 peer-checked:bg-gray-50"
                                }), "Center"]
                            }), r.jsxs("label", {
                                className: "cursor-pointer text-center text-[10px] text-gray-500",
                                children: [r.jsx("input", {
                                    type: "radio",
                                    name: "watermarkPosition",
                                    value: "bottom-center",
                                    className: "peer hidden",
                                    defaultChecked: g?.position === "bottom-center"
                                }), r.jsx("div", {
                                    className: "h-10 rounded-lg border border-gray-200 bg-white peer-checked:border-gray-900 peer-checked:bg-gray-50"
                                }), "Bottom Center"]
                            }), r.jsxs("label", {
                                className: "cursor-pointer text-center text-[10px] text-gray-500",
                                children: [r.jsx("input", {
                                    type: "radio",
                                    name: "watermarkPosition",
                                    value: "bottom-right",
                                    className: "peer hidden",
                                    defaultChecked: !g?.position || g?.position === "bottom-right"
                                }), r.jsx("div", {
                                    className: "h-10 rounded-lg border border-gray-200 bg-white peer-checked:border-gray-900 peer-checked:bg-gray-50"
                                }), "Bottom Right"]
                            })]
                        })]
                    })]
                }), r.jsxs("div", {
                    className: "flex gap-2 mt-4 pt-4 border-t border-gray-100",
                    children: [r.jsxs("button", {
                        type: "button",
                        onClick: u,
                        className: "px-4 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium flex items-center gap-1 transition-colors",
                        title: "Disable watermark",
                        children: [r.jsx(zy, {
                            size: 16
                        }), "Disable"]
                    }), r.jsxs("div", {
                        className: "flex-1 flex gap-2 justify-end",
                        children: [r.jsx("button", {
                            type: "button",
                            onClick: L,
                            className: "px-4 py-2.5 rounded-xl hover:bg-gray-100 text-gray-500 text-sm font-medium",
                            children: "Cancel"
                        }), r.jsx("button", {
                            type: "submit",
                            className: "px-6 py-2.5 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 shadow-lg text-sm",
                            children: "Apply"
                        })]
                    })]
                })]
            }, `${g?.type || "text"}_${g?.position || "bottom-right"}_${g?.text || ""}_${g?.color || ""}_${g?.imageUrl || ""}`)]
        })]
    }) : null
}
  , os = ({watermark: s}) => {
    if (!s || !s.enabled)
        return null;
    const o = Math.min(1, Math.max(.05, Number(s.opacity ?? .8)))
      , d = Math.min(.8, Math.max(.1, Number(s.size ?? .25)))
      , u = s.position || "bottom-right"
      , g = u === "center" ? "items-center justify-center" : u === "bottom-center" ? "items-end justify-center" : "items-end justify-end";
    if (s.type === "image")
        return s.imageUrl ? r.jsx("div", {
            className: `pointer-events-none absolute inset-0 flex ${g} p-3 sm:p-4`,
            children: r.jsx("img", {
                src: s.imageUrl,
                alt: "",
                className: "select-none",
                style: {
                    width: `${Math.round(d * 100)}%`,
                    height: "auto",
                    opacity: o
                },
                draggable: !1
            })
        }) : null;
    const y = s.color === "black" ? "#111" : "#fff"
      , E = s.color === "black" ? "0 2px 6px rgba(255,255,255,0.35)" : "0 2px 8px rgba(0,0,0,0.45)"
      , _ = `clamp(12px, ${Math.max(2, Math.round(d * 10))}vw, 64px)`;
    return r.jsx("div", {
        className: `pointer-events-none absolute inset-0 flex ${g} p-3 sm:p-4`,
        children: r.jsx("span", {
            className: "select-none font-semibold tracking-wide",
            style: {
                color: y,
                opacity: o,
                textShadow: E,
                fontSize: _
            },
            children: s.text || "Ljx Photography"
        })
    })
}
  , hb = ({isOpen: s, onClose: o, onConfirm: d}) => {
    if (!s)
        return null;
    const u = () => o?.();
    return r.jsxs("div", {
        className: "fixed inset-0 z-[150] flex items-center justify-center p-4 animate-fade-in",
        children: [r.jsx("div", {
            className: "absolute inset-0 bg-black/20 backdrop-blur-sm",
            onClick: u
        }), r.jsxs("div", {
            className: "relative bg-white/90 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center space-y-4",
            children: [r.jsx("div", {
                className: "w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-500",
                children: r.jsx(ip, {
                    size: 24
                })
            }), r.jsx("h3", {
                className: "text-xl font-bold text-gray-900",
                children: "Delete Confirmation"
            }), r.jsx("p", {
                className: "text-sm text-gray-500",
                children: "This action cannot be undone."
            }), r.jsxs("div", {
                className: "flex gap-3 pt-2",
                children: [r.jsx("button", {
                    onClick: u,
                    className: "flex-1 py-2.5 bg-gray-100 rounded-xl font-medium text-gray-600 hover:bg-gray-200",
                    children: "取消"
                }), r.jsx("button", {
                    onClick: d,
                    className: "flex-1 py-2.5 bg-red-500 rounded-xl font-medium text-white hover:bg-red-600 shadow-lg",
                    children: "确认删除"
                })]
            })]
        })]
    })
}
  , gb = ({isOpen: s, onClose: o, profile: d}) => {
    if (!s)
        return null;
    const u = () => o?.()
      , g = d?.wechatQr || ur;
    return r.jsxs("div", {
        className: "fixed inset-0 z-[150] flex items-center justify-center p-4 animate-fade-in",
        children: [r.jsx("div", {
            className: "absolute inset-0 bg-black/10 backdrop-blur-md",
            onClick: u
        }), r.jsxs("div", {
            className: "relative bg-white/80 backdrop-blur-2xl border border-white/60 p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] max-w-xs w-full text-center space-y-6 transform transition-all",
            children: [r.jsx("button", {
                onClick: u,
                className: "absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors",
                children: r.jsx(fr, {
                    size: 20
                })
            }), r.jsxs("div", {
                className: "flex flex-col items-center gap-4",
                children: [r.jsx("div", {
                    className: "w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-600 mb-2",
                    children: r.jsx(Xu, {
                        size: 32
                    })
                }), r.jsxs("div", {
                    children: [r.jsx("h3", {
                        className: "text-xl font-bold text-gray-800",
                        children: "WeChat Contact"
                    }), r.jsx("p", {
                        className: "text-gray-500 text-sm mt-1",
                        children: "Scan QR code or add ID"
                    })]
                })]
            }), r.jsx("div", {
                className: "bg-white p-4 rounded-xl shadow-inner border border-gray-100",
                children: r.jsx("img", {
                    src: g,
                    alt: "WeChat QR",
                    className: "w-full aspect-square object-cover rounded-lg",
                    loading: "eager",
                    decoding: "async",
                    fetchPriority: "high",
                    onError: y => {
                        y.currentTarget.dataset.fallbackApplied || (y.currentTarget.dataset.fallbackApplied = "1",
                        y.currentTarget.src = ur)
                    }
                })
            }), r.jsxs("div", {
                className: "bg-gray-100/50 p-3 rounded-lg border border-gray-200 flex flex-col gap-1",
                children: [r.jsx("span", {
                    className: "text-xs text-gray-400 uppercase tracking-wider",
                    children: "WeChat ID"
                }), r.jsx("span", {
                    className: "text-lg font-mono font-medium text-gray-800 select-all",
                    children: d.wechatId
                })]
            })]
        })]
    })
}
  , Sc = "STXinweiWeb"
  , yb = "/fonts/stxinwei/STXINWEI.TTF"
  , as = `"${Sc}", "STXinwei", "HuaWenXinWei", "华文新魏", "PingFang SC", "Microsoft YaHei", serif`
  , or = `"${Sc}", "STXinwei", "HuaWenXinWei", "华文新魏", "PingFang SC", "Microsoft YaHei", serif`
  , ch = '"PingFang SC", "Microsoft YaHei", sans-serif'
  , pb = "作品集扫码查看相册0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  , bb = (s, o=360) => `https://api.qrserver.com/v1/create-qr-code/?size=${o}x${o}&data=${encodeURIComponent(s || "")}`
  , oh = s => {
    const o = String(s || "").replace("#", "").trim();
    return /^[0-9a-fA-F]{6}$/.test(o) ? {
        r: parseInt(o.slice(0, 2), 16),
        g: parseInt(o.slice(2, 4), 16),
        b: parseInt(o.slice(4, 6), 16)
    } : {
        r: 255,
        g: 255,
        b: 255
    }
}
  , xb = (s, o, d, u, g) => {
    try {
        const y = Math.max(0, Math.floor(o))
          , E = Math.max(0, Math.floor(d))
          , _ = Math.max(1, Math.floor(u))
          , M = Math.max(1, Math.floor(g))
          , R = s.getImageData(y, E, _, M).data;
        let C = 0
          , Z = 0;
        for (let L = 0; L < R.length; L += 4) {
            if (R[L + 3] < 10)
                continue;
            const q = R[L]
              , Se = R[L + 1]
              , F = R[L + 2]
              , te = q * .299 + Se * .587 + F * .114;
            C += te,
            Z += 1
        }
        return Z ? C / Z : null
    } catch {
        return null
    }
}
  , vb = (s, o="#FFFFFF") => {
    if (!s)
        return null;
    const d = s.naturalWidth || s.width || 0
      , u = s.naturalHeight || s.height || 0;
    if (!d || !u)
        return null;
    const g = document.createElement("canvas");
    g.width = d,
    g.height = u;
    const y = g.getContext("2d", {
        willReadFrequently: !0
    });
    if (!y)
        return null;
    y.drawImage(s, 0, 0, d, u);
    let E = null;
    try {
        E = y.getImageData(0, 0, d, u)
    } catch {
        return null
    }
    const {r: _, g: M, b: p} = oh(o)
      , R = E.data;
    for (let C = 0; C < R.length; C += 4) {
        if (R[C + 3] < 10) {
            R[C + 3] = 0;
            continue
        }
        R[C] * .299 + R[C + 1] * .587 + R[C + 2] * .114 < 148 ? (R[C] = _,
        R[C + 1] = M,
        R[C + 2] = p,
        R[C + 3] = 255) : R[C + 3] = 0
    }
    return y.putImageData(E, 0, 0),
    g
}
  , wb = (s, o="#FFFFFF") => {
    if (!s)
        return null;
    const d = s.naturalWidth || s.width || 0
      , u = s.naturalHeight || s.height || 0;
    if (!d || !u)
        return null;
    const g = document.createElement("canvas");
    g.width = d,
    g.height = u;
    const y = g.getContext("2d", {
        willReadFrequently: !0
    });
    if (!y)
        return null;
    y.drawImage(s, 0, 0, d, u);
    let E = null;
    try {
        E = y.getImageData(0, 0, d, u)
    } catch {
        return null
    }
    const {r: _, g: M, b: p} = oh(o)
      , R = E.data;
    for (let C = 0; C < R.length; C += 4)
        R[C + 3] < 10 || (R[C] = _,
        R[C + 1] = M,
        R[C + 2] = p);
    return y.putImageData(E, 0, 0),
    g
}
  , Sb = (s, o, d, u, g) => {
    const y = xb(s, o + u * .2, d + g * .18, u * .58, g * .68);
    return (y === null ? !0 : y < 138) ? {
        darkBackground: !0,
        mainText: "rgba(248,250,252,0.98)",
        subText: "rgba(226,232,240,0.94)",
        qrColorHex: "#FFFFFF",
        shadowColor: "rgba(15,23,42,0.52)",
        logoColorHex: "#FFFFFF"
    } : {
        darkBackground: !1,
        mainText: "rgba(15,23,42,0.96)",
        subText: "rgba(51,65,85,0.92)",
        qrColorHex: "#0F172A",
        shadowColor: "rgba(255,255,255,0.72)",
        logoColorHex: "#0F172A"
    }
}
  , jb = (s, o="image/png", d=.92) => new Promise( (u, g) => {
    s.toBlob(y => y ? u(y) : g(new Error("toBlob failed")), o, d)
}
)
  , Ou = (s, o, d, u, g, y) => {
    const E = Math.max(0, Math.min(y, Math.min(u, g) / 2));
    s.beginPath(),
    s.moveTo(o + E, d),
    s.arcTo(o + u, d, o + u, d + g, E),
    s.arcTo(o + u, d + g, o, d + g, E),
    s.arcTo(o, d + g, o, d, E),
    s.arcTo(o, d, o + u, d, E),
    s.closePath()
}
  , V0 = (s, o, d, u=1) => {
    const g = String(o || "").trim();
    if (!g)
        return [];
    const y = Array.from(g)
      , E = [];
    let _ = ""
      , M = 0;
    for (; M < y.length; ) {
        const p = _ + y[M];
        if (_ && s.measureText(p).width > d) {
            if (E.push(_),
            _ = "",
            E.length >= u)
                break;
            continue
        }
        _ = p,
        M += 1
    }
    if (E.length < u && _ && E.push(_),
    M < y.length && E.length) {
        const p = E.length - 1;
        let R = E[p];
        for (; R && s.measureText(`${R}…`).width > d; )
            R = R.slice(0, -1);
        E[p] = `${R}…`
    }
    return E
}
  , Nb = async s => {
    const o = String(s || "");
    if (!o)
        return !1;
    try {
        return await navigator.clipboard.writeText(o),
        !0
    } catch {
        const d = document.createElement("textarea");
        d.value = o,
        d.style.position = "fixed",
        d.style.left = "-9999px",
        document.body.appendChild(d),
        d.focus(),
        d.select();
        let u = !1;
        try {
            u = document.execCommand("copy")
        } catch {}
        return document.body.removeChild(d),
        !!u
    }
}
  , Ab = ( () => {
    let s = null;
    return async () => {
        typeof document > "u" || !document.fonts?.add || typeof FontFace > "u" || (s || (s = Promise.allSettled(["300", "400", "500", "600", "700", "800"].map(async o => {
            if (document.fonts.check(`${o} 20px "${Sc}"`))
                return;
            const u = await new FontFace(Sc,`url("${yb}") format("truetype")`,{
                style: "normal",
                weight: o,
                display: "swap"
            }).load();
            document.fonts.add(u)
        }
        )).then( () => {}
        )),
        await s)
    }
}
)()
  , Eb = async (s="") => {
    if (typeof document > "u" || !document.fonts?.load)
        return;
    await Ab();
    const o = `${pb}${String(s || "")}`;
    await Promise.allSettled([document.fonts.load(`900 36px ${as}`, o), document.fonts.load(`800 36px ${as}`, o), document.fonts.load(`700 36px ${as}`, o), document.fonts.load(`700 20px ${or}`, o), document.fonts.load(`600 20px ${or}`, o), document.fonts.load(`500 20px ${or}`, o), document.fonts.load(`400 20px ${or}`, o), document.fonts.load(`500 20px ${ch}`, o)]),
    document.fonts?.ready && await document.fonts.ready
}
  , Tb = ({isOpen: s, onClose: o, album: d, coverSrc: u, shareUrl: g, siteName: y, videoCoverCandidates: E=[], videoBvidHints: _=[]}) => {
    const [M,p] = b.useState("")
      , [R,C] = b.useState(null)
      , [Z,L] = b.useState(!1)
      , [ae,q] = b.useState("")
      , [Se,F] = b.useState(!1)
      , te = b.useRef(null)
      , I = () => o?.()
      , pe = typeof navigator < "u" && typeof navigator.share == "function"
      , ue = b.useMemo( () => {
        if (!g)
            return "";
        try {
            const ze = new URL(g);
            return `${ze.host}${ze.pathname}${ze.search}`
        } catch {
            return g
        }
    }
    , [g])
      , me = b.useCallback(async () => {
        if (!(!s || !d || !g)) {
            L(!0),
            q(""),
            p(""),
            C(null);
            try {
                const ze = en
                  , _e = String(d?.title || "作品集").trim()
                  , Le = String(d?.description || "").trim();
                await Eb(`${_e}${Le}${y || ""}`);
                const be = bb(g, 360)
                  , Ce = "/logo.png"
                  , $e = (Re, bt) => {
                    const Be = String(bt || "").trim();
                    !Be || Re.includes(Be) || Re.push(Be)
                }
                ;
                let B = "";
                const P = Array.from(new Set([...Array.isArray(_) ? _ : [], zl(u || ""), zl(d?.cover || "")].filter(Boolean)));
                for (const Re of P)
                    try {
                        const bt = await sh(Re)
                          , Be = ii(bt?.cover || "");
                        if (ai(Be)) {
                            B = Be;
                            break
                        }
                    } catch {}
                const fe = [];
                [B, ...Array.isArray(E) ? E : [], u || "", d?.cover || ""].forEach(Re => {
                    const bt = ii(aa(Re || ""));
                    ai(bt) && (Kp(bt) && ($e(fe, H0(bt, "w2048")),
                    $e(fe, H0(bt, "w800"))),
                    Jp(bt).forEach(Be => $e(fe, Be)))
                }
                ),
                $e(fe, ze);
                let Oe = null;
                for (const Re of fe)
                    try {
                        if (Oe = await ci(Re),
                        Oe)
                            break
                    } catch {}
                const N = await ci(be);
                let Y = null;
                try {
                    Y = await ci(Ce)
                } catch {}
                const W = (Re, bt, Be) => Math.min(Math.max(Re, bt), Be)
                  , ce = Oe?.naturalWidth || Oe?.width || 1200
                  , we = Oe?.naturalHeight || Oe?.height || 900
                  , je = Math.max(ce, we)
                  , ht = W(je, 1200, 1800) / je
                  , De = Math.round(ce * ht)
                  , zt = Math.round(we * ht)
                  , Zt = Math.min(De, zt)
                  , _l = W(Math.round(Zt * .11), 80, 132)
                  , Cn = W(Math.round(Zt * .012), 6, 12)
                  , At = W(Math.round(Zt * .155), 126, 176)
                  , Bt = De + _l * 2
                  , $t = zt + At + Cn + _l * 2
                  , hl = document.createElement("canvas");
                hl.width = Bt,
                hl.height = $t;
                const oe = hl.getContext("2d")
                  , Ve = Math.max(Bt / ce, $t / we)
                  , On = ce * Ve
                  , wt = we * Ve
                  , gn = (Bt - On) / 2
                  , ot = ($t - wt) / 2;
                if (Oe) {
                    const Re = Math.max(36, Math.round(Math.max(Bt, $t) * .06));
                    oe.filter = "blur(34px) saturate(1.06)",
                    oe.drawImage(Oe, gn - Re, ot - Re, On + Re * 2, wt + Re * 2),
                    oe.filter = "none"
                } else {
                    const Re = oe.createLinearGradient(0, 0, Bt, $t);
                    Re.addColorStop(0, "#243b63"),
                    Re.addColorStop(1, "#101b30"),
                    oe.fillStyle = Re,
                    oe.fillRect(0, 0, Bt, $t)
                }
                const Ke = _l
                  , Et = _l
                  , Ut = W(Math.round(Math.min(De, zt) * .03), 24, 40)
                  , Xt = W(Math.round(Math.min(De, zt) * .025), 12, 30)
                  , tn = W(Math.round(Math.min(De, zt) * .008), 4, 10);
                if (oe.save(),
                oe.shadowColor = "rgba(6,12,24,0.26)",
                oe.shadowBlur = Xt,
                oe.shadowOffsetX = 0,
                oe.shadowOffsetY = tn,
                Ou(oe, Ke, Et, De, zt, Ut),
                oe.fillStyle = "rgba(0,0,0,0.01)",
                oe.fill(),
                oe.restore(),
                oe.save(),
                Ou(oe, Ke, Et, De, zt, Ut),
                oe.clip(),
                Oe)
                    oe.drawImage(Oe, Ke, Et, De, zt);
                else {
                    const Re = oe.createLinearGradient(Ke, Et, Ke + De, Et + zt);
                    Re.addColorStop(0, "#dbe4ef"),
                    Re.addColorStop(1, "#8f9fb3"),
                    oe.fillStyle = Re,
                    oe.fillRect(Ke, Et, De, zt)
                }
                oe.restore(),
                oe.save(),
                Ou(oe, Ke, Et, De, zt, Ut),
                oe.strokeStyle = "rgba(255,255,255,0.8)",
                oe.lineWidth = W(Math.round(Math.min(De, zt) * .0012), 1, 2),
                oe.stroke(),
                oe.restore();
                const wl = Ke
                  , Sl = Et + zt + Cn
                  , Cl = De
                  , Kt = W(Math.round(At * 1.12), 168, 248)
                  , yt = Sb(oe, wl, Sl, Cl, At)
                  , Lt = W(Math.round(At * .29), 28, 42)
                  , It = wl + Cl - Kt - 4
                  , pt = Sl + 12
                  , Vt = W(Math.round(Kt * .92), 142, 214)
                  , $n = It + (Kt - Vt) / 2
                  , Jt = pt + (Kt - Vt) / 2
                  , rl = vb(N, yt.qrColorHex);
                oe.save(),
                oe.drawImage(rl || N, $n, Jt, Vt, Vt),
                oe.restore(),
                oe.fillStyle = yt.mainText;
                const sl = typeof window < "u" && (si() || window.innerWidth < 768)
                  , yn = 500
                  , Pt = 900
                  , Ot = 700;
                oe.font = `${yn} ${Lt}px ${ch}`,
                oe.textAlign = "center";
                const Vl = Math.min(pt + Kt + Lt + 8, $t - 2);
                oe.fillText("扫码查看相册", It + Kt / 2, Vl),
                oe.textAlign = "start";
                const Kn = Kt + 42
                  , za = Math.max(180, Cl - Kn * 2)
                  , pn = !!Le
                  , bn = sl ? .86 : .95
                  , qe = W(Math.round(At * (pn ? .66 : .74)), 72, 124)
                  , Gl = Math.max(60, Math.round(qe * bn))
                  , Te = Math.round(Gl * 1.14);
                oe.fillStyle = yt.mainText,
                oe.font = `${Pt} ${Gl}px ${as}`;
                const Dn = V0(oe, _e, za, 2)
                  , kn = Dn.length ? Dn : ["作品集"]
                  , gl = W(Math.round(At * .31), 34, 52);
                oe.font = `${Ot} ${gl}px ${or}`;
                const ln = pn ? V0(oe, Le, za, 2) : []
                  , qt = Math.round(gl * 1.52)
                  , cl = Gl + Math.max(0, kn.length - 1) * Te
                  , ut = pn && ln.length ? 56 + gl + Math.max(0, ln.length - 1) * qt : 0
                  , _t = cl + ut
                  , ol = Sl + (At - _t) / 2 + Math.round(At * .12)
                  , Ql = wl + Cl / 2;
                oe.textAlign = "center",
                oe.fillStyle = yt.mainText,
                oe.font = `${Pt} ${Gl}px ${as}`;
                const Rn = Math.max(1, Math.round(Gl * .022));
                if (oe.lineWidth = Rn,
                oe.strokeStyle = yt.mainText,
                kn.forEach( (Re, bt) => {
                    const Be = ol + Gl + bt * Te;
                    oe.strokeText(Re, Ql, Be),
                    oe.fillText(Re, Ql, Be)
                }
                ),
                pn && ln.length) {
                    const Re = ol + cl;
                    oe.fillStyle = yt.subText,
                    oe.font = `${Ot} ${gl}px ${or}`;
                    const bt = Math.max(1, Math.round(gl * .018));
                    oe.lineWidth = bt,
                    oe.strokeStyle = yt.subText,
                    ln.forEach( (Be, it) => {
                        const ft = Re + 56 + gl + it * qt;
                        oe.strokeText(Be, Ql, ft),
                        oe.fillText(Be, Ql, ft)
                    }
                    )
                }
                if (oe.textAlign = "start",
                Y) {
                    const bt = wb(Y, yt.logoColorHex) || Y
                      , Be = Y.naturalWidth || Y.width || 1
                      , it = Y.naturalHeight || Y.height || 1
                      , ft = Be / Math.max(1, it)
                      , Ul = W(Math.round(At * .96), 90, 210)
                      , Tt = W(Math.round(Cl * .52), 260, 620);
                    let nn = Ul
                      , Hl = nn * ft;
                    Hl > Tt && (Hl = Tt,
                    nn = Hl / Math.max(.01, ft)),
                    oe.save(),
                    oe.globalAlpha = .95;
                    const $l = Math.min(Sl + At - nn + 30, $t - nn);
                    oe.drawImage(bt, wl + 2, $l, Hl, nn),
                    oe.restore()
                }
                const Bn = await jb(hl, "image/jpeg", .94)
                  , Zl = URL.createObjectURL(Bn);
                C(Bn),
                p(Zl)
            } catch (ze) {
                console.error("share poster failed", ze),
                q("分享海报生成失败，请稍后重试。")
            } finally {
                L(!1)
            }
        }
    }
    , [s, d, g, u, y, E, _]);
    b.useEffect( () => {
        s && me()
    }
    , [s, me]),
    b.useEffect( () => () => {
        te.current && window.clearTimeout(te.current)
    }
    , []),
    b.useEffect( () => () => {
        M && URL.revokeObjectURL(M)
    }
    , [M]);
    const se = async () => {
        if (!await Nb(g))
            return alert("复制失败，请手动复制链接。");
        F(!0),
        te.current && window.clearTimeout(te.current),
        te.current = window.setTimeout( () => F(!1), 1500)
    }
      , Ee = () => {
        if (!M)
            return;
        const ze = document.createElement("a")
          , Le = (String(d?.title || "album").trim() || "album").replace(/[\\/:*?"<>|]/g, "_").slice(0, 48);
        ze.href = M,
        ze.download = `${Le}_share.jpg`,
        ze.click()
    }
      , Xe = async () => {
        if (pe)
            try {
                const ze = String(d?.title || "作品集")
                  , _e = String(d?.description || "").trim() || "欢迎查看这个相册";
                if (R && typeof File < "u") {
                    const Le = new File([R],"album-share.jpg",{
                        type: "image/jpeg"
                    });
                    if (!navigator.canShare || navigator.canShare({
                        files: [Le]
                    })) {
                        await navigator.share({
                            title: ze,
                            text: _e,
                            url: g,
                            files: [Le]
                        });
                        return
                    }
                }
                await navigator.share({
                    title: ze,
                    text: _e,
                    url: g
                })
            } catch {}
    }
    ;
    return s ? r.jsxs("div", {
        className: "fixed inset-0 z-[180] overflow-y-auto p-3 sm:p-4 animate-fade-in",
        children: [r.jsx("div", {
            className: "absolute inset-0 bg-black/22 backdrop-blur-md",
            onClick: I
        }), r.jsx("div", {
            className: "relative min-h-full flex items-start justify-center",
            children: r.jsxs("div", {
                className: "relative w-full max-w-[560px] my-2 sm:my-4 max-h-[calc(100dvh-1.5rem)] rounded-[34px] border border-white/65 shadow-[0_40px_80px_rgba(0,0,0,0.12)] overflow-hidden",
                children: [r.jsx("div", {
                    className: "pointer-events-none absolute inset-0 bg-[rgba(244,242,238,0.86)] backdrop-blur-[42px]"
                }), r.jsx("div", {
                    className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-white/35 via-white/12 to-white/28"
                }), r.jsxs("div", {
                    className: "relative z-10 p-4 sm:p-6 max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain",
                    children: [r.jsxs("div", {
                        className: "relative sticky top-0 z-20 -mx-1 px-1 py-1 mb-4 sm:mb-5 flex items-center justify-between bg-gradient-to-b from-[rgba(245,243,240,0.96)] via-[rgba(245,243,240,0.85)] to-transparent backdrop-blur-md",
                        children: [r.jsxs("h3", {
                            className: "text-xl font-bold text-slate-900 flex items-center gap-2",
                            children: [r.jsx(ku, {
                                size: 18
                            }), " 分享相册"]
                        }), r.jsx("button", {
                            onClick: I,
                            className: "p-2.5 rounded-full bg-white/65 border border-white/70 hover:bg-white/85 text-slate-700",
                            children: r.jsx(fr, {
                                size: 18
                            })
                        })]
                    }), r.jsx("div", {
                        className: "relative mt-1 rounded-[28px] overflow-hidden flex items-center justify-center",
                        children: Z ? r.jsx("div", {
                            className: "w-full min-h-[300px] sm:min-h-[340px] rounded-[28px] border border-white/75 bg-[rgba(255,255,255,0.78)] backdrop-blur-xl shadow-inner flex items-center justify-center text-sm text-slate-700",
                            children: "正在生成分享海报，大约5秒左右，请稍等…"
                        }) : M ? r.jsx("img", {
                            src: M,
                            alt: "share-poster",
                            className: "block max-h-[58dvh] sm:max-h-[62dvh] w-auto max-w-full"
                        }) : r.jsx("div", {
                            className: "w-full min-h-[300px] sm:min-h-[340px] rounded-[28px] border border-white/75 bg-[rgba(255,255,255,0.78)] backdrop-blur-xl shadow-inner flex items-center justify-center text-sm text-slate-700",
                            children: "暂无海报预览"
                        })
                    }), ae ? r.jsx("p", {
                        className: "text-sm text-red-500 mt-3",
                        children: ae
                    }) : null, r.jsx("p", {
                        className: "mt-3 text-xs text-slate-700/85 truncate",
                        children: ue
                    }), r.jsxs("div", {
                        className: "sticky bottom-0 z-20 mt-4 rounded-[24px] border border-white/70 px-2 pb-2 pt-3 bg-gradient-to-t from-[rgba(245,243,240,0.96)] via-[rgba(245,243,240,0.88)] to-transparent backdrop-blur-md",
                        children: [r.jsxs("div", {
                            className: "grid grid-cols-2 gap-2.5",
                            children: [r.jsxs("button", {
                                type: "button",
                                onClick: Ee,
                                disabled: !M || Z,
                                className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-[#0f1b3d]/90 text-white text-sm font-semibold shadow-[0_14px_30px_rgba(15,27,61,0.34)] hover:bg-[#111f47] disabled:opacity-40 disabled:cursor-not-allowed",
                                children: [r.jsx(Ty, {
                                    size: 16
                                }), " 保存海报"]
                            }), r.jsxs("button", {
                                type: "button",
                                onClick: se,
                                className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-[rgba(255,255,255,0.86)] border border-white/85 text-sm font-semibold text-slate-700 hover:bg-[rgba(255,255,255,0.96)]",
                                children: [r.jsx($0, {
                                    size: 16
                                }), " ", Se ? "已复制" : "复制链接"]
                            })]
                        }), pe ? r.jsxs("button", {
                            type: "button",
                            onClick: Xe,
                            className: "mt-2.5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-[rgba(255,255,255,0.86)] border border-white/85 text-sm font-semibold text-slate-700 hover:bg-[rgba(255,255,255,0.96)]",
                            children: [r.jsx(ku, {
                                size: 16
                            }), " 系统分享"]
                        }) : null]
                    })]
                })]
            })
        })]
    }) : null
}
  , Mb = 60
  , G0 = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
  , Ea = new Map
  , zb = (s, o) => {
    Ea.delete(s),
    Ea.set(s, o)
}
  , _b = () => {
    for (; Ea.size > Mb; ) {
        const s = Ea.keys().next().value;
        Ea.delete(s)
    }
}
  , Cb = s => {
    if (!s)
        return null;
    const o = Ea.get(s);
    return o ? (zb(s, o),
    o) : null
}
  , Q0 = (s, o) => {
    s && (Ea.set(s, o),
    _b())
}
  , ls = s => {
    if (!s || typeof window > "u")
        return Promise.reject(new Error("invalid-url"));
    const o = Cb(s);
    if (o?.status === "loaded" && o.img)
        return Promise.resolve(o.img);
    if (o?.status === "loading" && o.promise)
        return o.promise;
    const d = new window.Image;
    d.decoding = "async";
    let u = !1;
    const g = new Promise( (y, E) => {
        const _ = () => {
            u || (u = !0,
            Q0(s, {
                status: "loaded",
                img: d
            }),
            y(d))
        }
          , M = p => {
            u || (u = !0,
            Ea.delete(s),
            E(p || new Error("image-load-failed")))
        }
        ;
        d.onload = _,
        d.onerror = M,
        d.src = s,
        d.decode && d.decode().then(_).catch( () => {}
        )
    }
    );
    return Q0(s, {
        status: "loading",
        img: d,
        promise: g
    }),
    g
}
  , uh = s => {
    !s || typeof window > "u" || ls(s).catch( () => null)
}
  , Ob = ({lightboxIndex: s, activeAlbum: o, photos: d, onClose: u, onPrev: g, onNext: y}) => {
    const E = s !== null && !!o
      , _ = o?.id
      , M = _ && d?.[_] ? d[_] : []
      , p = typeof s == "number" ? s : 0
      , R = M[p]
      , [C,Z] = b.useState("")
      , [L,ae] = b.useState(!1)
      , [q,Se] = b.useState(null)
      , [F,te] = b.useState("")
      , [I,pe] = b.useState(!1)
      , [ue,me] = b.useState(!1)
      , se = b.useRef(new Map)
      , [Ee,Xe] = b.useState("")
      , ze = b.useRef(null)
      , [_e,Le] = b.useState(!1)
      , [be,Ce] = b.useState(!1)
      , $e = b.useRef(null)
      , B = b.useRef(new Map)
      , P = si()
      , fe = () => typeof document > "u" ? null : document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null
      , Ze = async () => {
        try {
            screen?.orientation?.lock && await screen.orientation.lock("portrait")
        } catch {}
    }
      , Oe = async () => {
        try {
            screen?.orientation?.unlock && await screen.orientation.unlock()
        } catch {}
    }
      , N = () => {
        if (typeof document > "u")
            return;
        const m = document;
        if (!fe())
            return;
        const w = m.exitFullscreen || m.webkitExitFullscreen || m.msExitFullscreen;
        if (w)
            try {
                const S = w.call(m);
                S && typeof S.catch == "function" && S.catch( () => {}
                )
            } catch {}
    }
      , Y = async () => {
        if (typeof document > "u")
            return;
        const m = document
          , w = m.exitFullscreen || m.webkitExitFullscreen || m.msExitFullscreen
          , S = !!fe()
          , ie = async K => {
            if (!K)
                return !1;
            const ee = K.requestFullscreen || K.webkitRequestFullscreen || K.msRequestFullscreen;
            if (!ee)
                return !1;
            try {
                return ee === K.requestFullscreen ? await Promise.resolve(ee.call(K, {
                    navigationUI: "hide"
                })) : await Promise.resolve(ee.call(K)),
                !0
            } catch {
                try {
                    return await Promise.resolve(ee.call(K)),
                    !0
                } catch {
                    return !1
                }
            }
        }
        ;
        try {
            if (S) {
                if (!w)
                    return;
                await Promise.resolve(w.call(m)),
                await Oe();
                return
            }
            if (!(await ie(m.documentElement) || await ie($e.current))) {
                W("当前浏览器不支持全屏");
                return
            }
            await Ze()
        } catch {
            W("进入全屏失败")
        }
    }
      , W = m => {
        Xe(m),
        ze.current && window.clearTimeout(ze.current),
        ze.current = window.setTimeout( () => {
            Xe(""),
            ze.current = null
        }
        , 1200)
    }
      , [ce,we] = b.useState(!1)
      , [je,Fe] = b.useState(!1)
      , ht = b.useRef(null);
    b.useEffect( () => {
        const m = requestAnimationFrame( () => we(!0));
        let w = !1;
        try {
            window.history.state?.ljxLightbox || (window.history.pushState({
                ...window.history.state || {},
                ljxLightbox: !0
            }, ""),
            w = !0)
        } catch {}
        const S = () => {
            De()
        }
        ;
        return window.addEventListener("popstate", S),
        () => {
            cancelAnimationFrame(m),
            window.removeEventListener("popstate", S)
        }
    }
    , []),
    b.useEffect( () => () => {
        ze.current && (window.clearTimeout(ze.current),
        ze.current = null)
    }
    , []),
    b.useEffect( () => {
        if (typeof document > "u")
            return;
        const m = document
          , w = () => {
            const S = !!fe();
            Le(S),
            S || Oe()
        }
        ;
        return Ce(!!(m.fullscreenEnabled || m.webkitFullscreenEnabled || m.msFullscreenEnabled || m.documentElement?.requestFullscreen || m.documentElement?.webkitRequestFullscreen || m.documentElement?.msRequestFullscreen)),
        w(),
        m.addEventListener("fullscreenchange", w),
        m.addEventListener("webkitfullscreenchange", w),
        m.addEventListener("MSFullscreenChange", w),
        () => {
            m.removeEventListener("fullscreenchange", w),
            m.removeEventListener("webkitfullscreenchange", w),
            m.removeEventListener("MSFullscreenChange", w)
        }
    }
    , []),
    b.useEffect( () => {
        if (!E || !P)
            return;
        const m = () => {
            document.visibilityState === "visible" && fe() && Ze()
        }
        ;
        return document.addEventListener("visibilitychange", m),
        window.addEventListener("pageshow", m),
        () => {
            document.removeEventListener("visibilitychange", m),
            window.removeEventListener("pageshow", m)
        }
    }
    , [E, P]),
    b.useEffect( () => {
        _e && ae(!1)
    }
    , [_e]),
    b.useEffect( () => {
        me(!1)
    }
    , [p, o?.id]),
    b.useEffect( () => {
        if (!E || typeof document > "u")
            return;
        const m = document.body
          , w = document.documentElement
          , S = window.scrollY || window.pageYOffset || 0;
        return ht.current = {
            scrollY: S,
            bodyStyle: {
                position: m.style.position,
                top: m.style.top,
                left: m.style.left,
                right: m.style.right,
                width: m.style.width,
                overflow: m.style.overflow,
                paddingRight: m.style.paddingRight
            },
            docOverflow: w.style.overflow
        },
        m.style.position = "fixed",
        m.style.top = `-${S}px`,
        m.style.left = "0",
        m.style.right = "0",
        m.style.width = "100%",
        m.style.overflow = "hidden",
        w.style.overflow = "hidden",
        w.classList.add("lb-open"),
        m.classList.add("lb-open"),
        () => {
            const ie = ht.current;
            ie && (m.style.position = ie.bodyStyle.position,
            m.style.top = ie.bodyStyle.top,
            m.style.left = ie.bodyStyle.left,
            m.style.right = ie.bodyStyle.right,
            m.style.width = ie.bodyStyle.width,
            m.style.overflow = ie.bodyStyle.overflow,
            m.style.paddingRight = ie.bodyStyle.paddingRight,
            w.style.overflow = ie.docOverflow,
            w.classList.remove("lb-open"),
            m.classList.remove("lb-open"),
            window.scrollTo(0, ie.scrollY || 0),
            ht.current = null)
        }
    }
    , [E]);
    const De = () => {
        je || (N(),
        Fe(!0),
        window.setTimeout( () => u?.(), 260))
    }
      , zt = () => {
        try {
            if (window.history.state?.ljxLightbox) {
                window.history.back();
                return
            }
        } catch {}
        De()
    }
      , Zt = m => {
        if (!m)
            return "";
        if (m.originalName)
            return m.originalName;
        if (m.name)
            return m.name;
        const w = m.keys?.main || m.keys?.original || ""
          , S = m.url || m.urls?.main || "";
        return (w || S).split("?")[0].split("/").pop() || ""
    }
      , _l = .6
      , Cn = 5
      , At = (m, w, S) => Math.min(Math.max(m, w), S)
      , Bt = m => {
        const w = M[m];
        return w && (w.urls?.main || w.url || w.urls?.original || w.originalUrl || w.urls?.large || w.urls?.medium || w.urls?.small) || ""
    }
      , $t = (m, w="origin") => {
        const S = M[m];
        if (!S)
            return "";
        const ie = Bt(m);
        return ie ? w === "w800" ? S.urls?.w800 || ie : w === "w2048" && S.urls?.w2048 || ie : ""
    }
      , hl = (m, w=!1) => {
        const S = M[m];
        if (!S)
            return "";
        const ie = Bt(m);
        return ie ? w ? ie : S.urls?.w2048 || S.urls?.main || S.url || S.urls?.original || S.originalUrl || S.urls?.w800 || S.urls?.large || S.urls?.medium || S.urls?.small || ie : ""
    }
      , oe = m => {
        const w = Bt(m);
        return !!(w && B.current.get(w) === "origin")
    }
      , Ve = Bt(p)
      , On = hl(p)
      , wt = !!(Ve && B.current.get(Ve) === "origin")
      , gn = !!(Ve && (C === Ve || wt))
      , ot = gn && Ve ? Ve : On
      , Ke = hl(p - 1, oe(p - 1))
      , Et = hl(p + 1, oe(p + 1))
      , Ut = p > 0
      , Xt = p < M.length - 1;
    b.useEffect( () => {
        if (!L || !ot)
            return;
        let m = !1;
        const w = se.current.get(ot);
        if (w) {
            Se(w),
            te("");
            return
        }
        if (R?.exif) {
            Se(R.exif),
            te(""),
            se.current.set(ot, R.exif);
            return
        }
        return (async () => {
            pe(!0),
            te("");
            try {
                const ie = await th()
                  , K = await fetch(ot, {
                    mode: "cors"
                });
                if (!K.ok)
                    throw new Error("fetch-failed");
                const ee = await K.arrayBuffer()
                  , Me = await ie.parse(ee, {
                    tiff: !0,
                    ifd0: !0,
                    exif: !0,
                    gps: !0,
                    xmp: !0
                })
                  , Ne = {
                    ...lh(Me),
                    __size: ee.byteLength
                };
                se.current.set(ot, Ne),
                m || Se(Ne)
            } catch {
                m || te("EXIF unavailable (CORS or no data)")
            } finally {
                m || pe(!1)
            }
        }
        )(),
        () => {
            m = !0
        }
    }
    , [L, ot]);
    const tn = (m, w) => {
        const S = w || m?.exif || null
          , ie = []
          , K = re => {
            if (!re)
                return "";
            if (re instanceof Date)
                return re.toLocaleString();
            if (typeof re == "string") {
                const Je = re.match(/^(\d{4}):(\d{2}):(\d{2})[ T](\d{2}):(\d{2}):(\d{2})/);
                return Je ? `${Je[1]}/${Je[2]}/${Je[3]} ${Je[4]}:${Je[5]}:${Je[6]}` : /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(re) ? re.replace(/\.(\d{1,3})Z$/, "") : re.replace(/Z$/, "")
            }
            return String(re)
        }
          , ee = re => {
            if (re == null || re === "")
                return "";
            if (typeof re == "string" && re.includes("/"))
                return `${re}s`;
            const Je = Number(re);
            return !Number.isFinite(Je) || Je <= 0 ? String(re) : Je >= 1 ? `${Je}s` : `1/${Math.round(1 / Je)}s`
        }
          , Me = re => {
            if (re == null || re === "")
                return "";
            const Je = Number(re);
            return Number.isFinite(Je) ? `f/${Je}` : String(re)
        }
          , Ne = re => {
            if (re == null || re === "")
                return "";
            const Je = Number(re);
            return Number.isFinite(Je) ? `${Je}mm` : String(re)
        }
          , rt = re => re == null || re === "" ? "" : Array.isArray(re) ? re.filter(Boolean).join(", ") : String(re)
          , at = re => {
            if (re == null || re === "")
                return "";
            const Je = Number(re);
            return Number.isFinite(Je) ? `${Je > 0 ? "+" : ""}${Je.toFixed(2)} ev` : String(re)
        }
          , tt = re => re === 1 ? "sRGB" : re === 65535 ? "未校准" : re || ""
          , pl = re => re === 0 ? "自动" : re === 1 ? "手动" : re || ""
          , Ct = re => re === 1 ? "手动" : re === 2 ? "程序自动" : re === 3 ? "光圈优先" : re === 4 ? "快门优先" : re || ""
          , gt = re => re == null || re === "" ? "" : {
            Pattern: "评价测光",
            CenterWeightedAverage: "中央重点测光",
            Spot: "点测光",
            MultiSpot: "多点测光",
            Partial: "局部测光"
        }[re] || String(re)
          , Xn = re => {
            if (re == null || re === "")
                return "";
            if (typeof re == "number")
                return re & 1 ? "是" : "否";
            const Je = String(re).toLowerCase();
            return Je.includes("did not fire") || Je.includes("no flash") ? "否" : Je.includes("flash fired") || Je.includes("fired") || Je ? "是" : ""
        }
        ;
        m?.originalName && ie.push({
            label: "文件名",
            value: m.originalName
        }),
        typeof m?.originalSize == "number" && ie.push({
            label: "原图大小",
            value: k0(m.originalSize)
        }),
        S?.__size && ie.push({
            label: "网页显示大小",
            value: k0(S.__size)
        }),
        m?.sizeMode && ie.push({
            label: "压缩模式",
            value: m.sizeMode
        }),
        S?.ModifyDate && ie.push({
            label: "修改日期",
            value: K(S.ModifyDate)
        }),
        (S?.DateTimeOriginal || S?.CreateDate) && ie.push({
            label: "拍摄日期",
            value: K(S.DateTimeOriginal || S.CreateDate)
        });
        const Vn = S?.ImageWidth
          , Yl = S?.ImageHeight;
        if (Vn && Yl && ie.push({
            label: "图片尺寸",
            value: `${Vn}x${Yl}`
        }),
        S) {
            const re = [];
            Vn && Yl && re.push(`${Vn}x${Yl}`),
            S.FileType && re.push(S.FileType),
            S.ColorSpace && re.push(tt(S.ColorSpace)),
            S.MIMEType && re.push(S.MIMEType),
            S.Compression && re.push(`压缩 ${S.Compression}`),
            S.ImageDescription && re.push(S.ImageDescription),
            re.length && ie.push({
                label: "图片信息",
                value: re.join(", ")
            }),
            [["相机型号", S.Model], ["镜头", S.LensModel || S.Lens], ["焦距（35mm）", Ne(S.FocalLengthIn35mmFormat)], ["快门速度", ee(S.ExposureTime)], ["光圈", Me(S.FNumber)], ["ISO", rt(S.ISO)], ["曝光补偿", at(S.ExposureCompensation)], ["曝光模式", Ct(S.ExposureProgram)], ["测光模式", gt(S.MeteringMode)], ["白平衡", pl(S.WhiteBalance)], ["闪光灯", Xn(S.Flash)], ["作者", S.Artist], ["版权", S.Copyright]].forEach( ([mi,ka]) => {
                ka != null && ka !== "" && ie.push({
                    label: mi,
                    value: String(ka)
                })
            }
            )
        }
        return ie
    }
      , wl = async () => {
        const m = tn(R, q);
        if (!m.length)
            return;
        const w = m.map(S => `${S.label}: ${S.value}`).join(`
`);
        try {
            await navigator.clipboard.writeText(w)
        } catch {
            const S = document.createElement("textarea");
            S.value = w,
            S.style.position = "fixed",
            S.style.left = "-9999px",
            document.body.appendChild(S),
            S.focus(),
            S.select();
            try {
                document.execCommand("copy")
            } catch {}
            document.body.removeChild(S)
        }
    }
    ;
    Zt(R);
    const [Sl,Cl] = b.useState( () => {
        const m = ot || "";
        return [m, m]
    }
    )
      , [Kt,yt] = b.useState( () => [!0, !1])
      , [Lt,It] = b.useState(0)
      , pt = b.useRef(0)
      , Vt = b.useRef(null)
      , $n = b.useRef(new Map)
      , Jt = b.useRef("auto")
      , rl = b.useRef(Sl)
      , sl = b.useRef(Lt)
      , yn = b.useRef([null, null])
      , Pt = b.useRef(null);
    rl.current = Sl,
    sl.current = Lt;
    const Ot = Sl[Lt] || ot
      , Vl = (m, w) => {
        if (!m || !w)
            return !1;
        const S = ie => String(ie || "").split("?")[0].replace(/_w(800|2048)\.webp$/i, "");
        return S(m) === S(w)
    }
      , Kn = m => w => {
        yn.current[m] = w || null
    }
      , za = (m, w, S) => new Promise(ie => {
        requestAnimationFrame( () => {
            if (S.current || w !== pt.current)
                return ie(!1);
            const ee = yn.current[m];
            if (!ee)
                return ie(!1);
            const Me = () => ie(!0);
            if (ee.decode) {
                ee.decode().then(Me).catch(Me);
                return
            }
            if (ee.complete && ee.naturalWidth) {
                Me();
                return
            }
            const Ne = () => {
                ee.removeEventListener("load", Ne),
                ee.removeEventListener("error", Ne),
                Me()
            }
            ;
            ee.addEventListener("load", Ne),
            ee.addEventListener("error", Ne)
        }
        )
    }
    );
    b.useEffect( () => {
        if (!ot)
            return;
        const m = rl.current[sl.current];
        if (!m) {
            Cl([ot, ot]),
            yt([!0, !1]),
            It(0);
            return
        }
        if (ot === m)
            return;
        const w = {
            current: !1
        }
          , S = ++pt.current;
        Vt.current = null;
        const ie = Jt.current;
        Jt.current = "auto";
        const K = sl.current
          , ee = 1 - sl.current
          , Me = ie === "replace" ? "replace" : ot === Ve && Vl(m, ot) ? "instant" : "cross"
          , Ne = tt => {
            tt && $n.current.set(tt, "failed")
        }
          , rt = (tt, pl="cross") => {
            if (!(w.current || S !== pt.current)) {
                if (pl === "replace") {
                    Cl(Ct => {
                        const gt = [...Ct];
                        return gt[K] = tt,
                        gt
                    }
                    ),
                    yt(Ct => {
                        const gt = [...Ct];
                        return gt[K] = !0,
                        gt[ee] = !1,
                        gt
                    }
                    ),
                    It(K),
                    Vt.current = null;
                    return
                }
                Cl(Ct => {
                    const gt = [...Ct];
                    return gt[ee] = tt,
                    gt
                }
                ),
                yt(Ct => {
                    const gt = [...Ct];
                    return gt[ee] = !1,
                    gt
                }
                ),
                za(ee, S, w).then(Ct => {
                    !Ct || w.current || S !== pt.current || requestAnimationFrame( () => {
                        w.current || S !== pt.current || (yt(gt => {
                            const Xn = [...gt];
                            return Xn[ee] = !0,
                            Xn[K] = !1,
                            Xn
                        }
                        ),
                        pl === "cross" ? Vt.current = {
                            token: S,
                            slot: ee,
                            from: K,
                            url: tt,
                            mode: pl
                        } : (It(ee),
                        Vt.current = null))
                    }
                    )
                }
                )
            }
        }
          , at = (tt, pl=!1, Ct="cross") => {
            tt && ls(tt).then( () => {
                rt(tt, Ct)
            }
            ).catch( () => {
                Ne(tt),
                !pl && Ve && Ve !== tt && at(Ve, !0, "cross")
            }
            )
        }
        ;
        return $n.current.get(ot) === "failed" && Ve && Ve !== ot ? at(Ve, !0, "cross") : at(ot, !1, Me),
        () => {
            w.current = !0
        }
    }
    , [ot, Ve]);
    const pn = m => w => {
        if (w.target !== w.currentTarget || w.propertyName !== "opacity")
            return;
        const S = Vt.current;
        if (!S || S.token !== pt.current || S.slot !== m)
            return;
        const ie = rl.current[m];
        !ie || S.url !== ie || (It(m),
        yt(K => {
            const ee = [...K];
            return ee[m] = !0,
            ee[1 - m] = !1,
            ee
        }
        ),
        Vt.current = null)
    }
      , bn = m => () => {
        const w = rl.current[m];
        if (!Ve || !w || w === Ve || $n.current.get(w) === "failed")
            return;
        $n.current.set(w, "failed");
        const S = ++pt.current;
        Vt.current = null;
        const ie = m === sl.current ? 1 - m : m;
        ls(Ve).then( () => {
            S === pt.current && (Cl(K => {
                const ee = [...K];
                return ee[ie] = Ve,
                ee
            }
            ),
            yt(K => {
                const ee = [...K];
                return ee[ie] = !1,
                ee
            }
            ),
            requestAnimationFrame( () => {
                S === pt.current && (yt(K => {
                    const ee = [...K];
                    return ee[ie] = !0,
                    ee
                }
                ),
                Vt.current = {
                    token: S,
                    slot: ie,
                    from: sl.current,
                    url: Ve
                })
            }
            ))
        }
        ).catch( () => {}
        )
    }
      , [qe,Gl] = b.useState(1)
      , [Te,Dn] = b.useState({
        x: 0,
        y: 0
    })
      , [kn,gl] = b.useState(0)
      , [ln,qt] = b.useState("")
      , [cl,ut] = b.useState(!1)
      , [_t,ol] = b.useState(!1)
      , [Ql,Rn] = b.useState("idle")
      , [Bn,Zl] = b.useState(null)
      , Re = b.useRef(null)
      , bt = b.useRef({
        scale: 1,
        position: {
            x: 0,
            y: 0
        },
        swipeX: 0
    })
      , Be = b.useRef(1)
      , it = b.useRef({
        x: 0,
        y: 0
    })
      , ft = b.useRef(0)
      , Ul = () => {
        Re.current = null;
        const m = bt.current;
        m.scale !== Be.current && (Be.current = m.scale,
        Gl(m.scale)),
        m.swipeX !== ft.current && (ft.current = m.swipeX,
        gl(m.swipeX)),
        (m.position.x !== it.current.x || m.position.y !== it.current.y) && (it.current = m.position,
        Dn(m.position))
    }
      , Tt = (m, w) => typeof m == "function" ? m(w) : m
      , nn = m => {
        const w = bt.current
          , S = Object.prototype.hasOwnProperty.call(m, "scale")
          , ie = Object.prototype.hasOwnProperty.call(m, "swipeX")
          , K = Object.prototype.hasOwnProperty.call(m, "position")
          , ee = S ? Tt(m.scale, w.scale) : w.scale
          , Me = ie ? Tt(m.swipeX, w.swipeX) : w.swipeX
          , Ne = K ? Tt(m.position, w.position) : w.position
          , rt = Number.isFinite(ee) ? ee : w.scale
          , at = Number.isFinite(Me) ? Me : w.swipeX
          , tt = Ne && Number.isFinite(Ne.x) && Number.isFinite(Ne.y) ? Ne : w.position;
        return {
            scale: rt,
            swipeX: at,
            position: tt
        }
    }
      , Hl = m => {
        Re.current && (cancelAnimationFrame(Re.current),
        Re.current = null);
        const w = nn(m)
          , S = w.scale
          , ie = w.swipeX
          , K = w.position;
        bt.current = w,
        S !== Be.current && (Be.current = S,
        Gl(S)),
        ie !== ft.current && (ft.current = ie,
        gl(ie)),
        (K.x !== it.current.x || K.y !== it.current.y) && (it.current = K,
        Dn(K))
    }
      , $l = m => {
        bt.current = nn(m),
        !Re.current && (Re.current = requestAnimationFrame(Ul))
    }
      , Un = m => $l({
        position: m
    })
      , an = m => $l({
        swipeX: m
    })
      , Jn = b.useRef({
        t: 0,
        x: 0,
        y: 0
    })
      , Fn = b.useRef(null)
      , oi = b.useRef(!1)
      , Wn = b.useRef({
        t: 0,
        x: 0,
        y: 0
    })
      , Hn = b.useRef(null)
      , el = b.useRef(typeof window < "u" ? window.innerWidth : 375)
      , jl = b.useRef(0)
      , Ll = b.useRef(new Map)
      , sa = b.useRef({
        mode: "none",
        startX: 0,
        startY: 0,
        startSwipeX: 0,
        startPos: {
            x: 0,
            y: 0
        },
        lastT: 0,
        lastX: 0,
        lastY: 0,
        vx: 0,
        vy: 0,
        pinchStartDist: 0,
        pinchStartScale: 1,
        pinchMid: {
            x: 0,
            y: 0
        },
        pinchStartPos: {
            x: 0,
            y: 0
        },
        dragStarted: !1
    })
      , _a = () => Hn.current?.getBoundingClientRect()
      , ui = (m, w) => Math.hypot(m.x - w.x, m.y - w.y)
      , ca = (m, w) => ({
        x: (m.x + w.x) / 2,
        y: (m.y + w.y) / 2
    })
      , [mr,tl] = b.useState("transform 220ms cubic-bezier(0.22, 1, 0.36, 1)")
      , Ue = b.useRef(null)
      , rn = b.useRef(null)
      , xn = b.useRef(0)
      , vn = "cubic-bezier(0.22, 0.61, 0.36, 1)"
      , Ca = 390
      , Ln = 190
      , ul = 300
      , oa = b.useCallback( () => {
        rn.current && (window.clearTimeout(rn.current),
        rn.current = null)
    }
    , [])
      , Oa = b.useCallback( () => (oa(),
    xn.current += 1,
    xn.current), [oa])
      , fi = b.useCallback( (m, w, S, ie=Ln) => {
        const K = Math.max(el.current || window.innerWidth || 1, 1)
          , ee = Math.abs(w - m)
          , Me = At(ee / K, 0, 1);
        return Math.round(ie + (S - ie) * Me)
    }
    , [])
      , ua = b.useCallback( (m, w=240) => {
        Ue.current && (window.clearTimeout(Ue.current),
        Ue.current = null),
        tl(`transform ${w}ms cubic-bezier(0.22, 1, 0.36, 1)`),
        Hl(m),
        Ue.current = window.setTimeout( () => {
            tl(""),
            Ue.current = null
        }
        , w + 40)
    }
    , []);
    b.useEffect( () => () => {
        Ue.current && (window.clearTimeout(Ue.current),
        Ue.current = null),
        oa()
    }
    , [oa]);
    const Da = (m=!1) => {
        if (Oa(),
        m) {
            ua({
                scale: 1,
                position: {
                    x: 0,
                    y: 0
                },
                swipeX: 0
            }),
            qt("");
            return
        }
        Ue.current && (window.clearTimeout(Ue.current),
        Ue.current = null),
        tl(""),
        Hl({
            scale: 1,
            position: {
                x: 0,
                y: 0
            },
            swipeX: 0
        }),
        qt("")
    }
    ;
    b.useEffect( () => {
        const m = () => {
            el.current = Hn.current?.clientWidth || window.innerWidth
        }
        ;
        return m(),
        window.addEventListener("resize", m),
        () => window.removeEventListener("resize", m)
    }
    , []),
    b.useEffect( () => {
        if (_t || Ql !== "idle" ? (Ue.current && (window.clearTimeout(Ue.current),
        Ue.current = null),
        tl(""),
        Hl({
            scale: 1,
            position: {
                x: 0,
                y: 0
            },
            swipeX: ft.current
        })) : (Da(),
        Rn("idle"),
        ol(!1),
        Zl(null)),
        !Ve) {
            Z("");
            return
        }
        const w = B.current.get(Ve);
        Z(w === "origin" ? Ve : "")
    }
    , [p, o?.id, Ve, _t, Ql]);
    const qn = b.useRef(new Map)
      , In = b.useRef([])
      , Ol = b.useRef(0)
      , di = m => !!(m && (Ea.get(m)?.status === "loaded" || qn.current.get(m) === "loaded"))
      , ql = (m, w=!1) => {
        const S = hl(m, w);
        return S ? w || di(S) ? S : $t(m, "w800") || S : ""
    }
      , wn = () => {
        for (; Ol.current < 3 && In.current.length; ) {
            const m = In.current.shift();
            if (!m)
                continue;
            const w = qn.current.get(m);
            if (w === "loading" || w === "loaded")
                continue;
            qn.current.set(m, "loading"),
            Ol.current += 1;
            const S = () => {
                Ol.current = Math.max(0, Ol.current - 1),
                qn.current.set(m, "loaded"),
                wn()
            }
            ;
            ls(m).then(S).catch(S)
        }
    }
      , Pn = m => {
        if (!m)
            return;
        const w = qn.current.get(m);
        w === "queued" || w === "loading" || w === "loaded" || (qn.current.set(m, "queued"),
        In.current.push(m),
        wn())
    }
    ;
    b.useEffect( () => {
        const m = hl(p, gn)
          , w = hl(p - 1, oe(p - 1))
          , S = hl(p + 1, oe(p + 1))
          , ie = hl(p - 2, oe(p - 2))
          , K = hl(p + 2, oe(p + 2));
        [m, w, S, ie, K].forEach(Pn)
    }
    , [p, o?.id, M.length, gn]);
    const Dl = ql(p - 1, oe(p - 1))
      , sn = ql(p + 1, oe(p + 1))
      , Yn = (m, w, S) => {
        const ie = Oa()
          , K = ft.current
          , ee = fi(K, m, Ca)
          , Me = w || (m > 0 ? Ke : Et) || Ot;
        Zl({
            left: m > 0 ? Me : Ut && Ke || Ot,
            right: m < 0 ? Me : Xt && Et || Ot
        }),
        Rn("animating"),
        ol(!0),
        qt("none"),
        requestAnimationFrame( () => {
            requestAnimationFrame( () => {
                ie === xn.current && (qt(`transform ${ee}ms ${vn}`),
                an(m))
            }
            )
        }
        ),
        rn.current = window.setTimeout( () => {
            rn.current = null,
            ie === xn.current && (S && S(),
            Rn("handoff"))
        }
        , ee + 20)
    }
      , Kl = b.useCallback( (m, w) => {
        m && uh(m),
        w?.()
    }
    , [])
      , kl = b.useCallback( (m, w, S) => {
        Kl(w, () => {
            Yn(m, w, () => {
                Jt.current = "replace",
                S?.()
            }
            )
        }
        )
    }
    , [Kl])
      , h = () => {
        const m = Oa()
          , w = ft.current
          , S = fi(w, 0, ul, 180);
        Rn("animating"),
        ol(!0),
        qt(`transform ${S}ms ${vn}`),
        an(0),
        rn.current = window.setTimeout( () => {
            rn.current = null,
            m === xn.current && (qt(""),
            Rn("idle"),
            ol(!1))
        }
        , S + 20)
    }
    ;
    b.useEffect( () => {
        if (Ql !== "handoff" || cl || Ot !== ot)
            return;
        const m = window.requestAnimationFrame( () => {
            Rn("idle"),
            ol(!1),
            qt(""),
            Hl({
                swipeX: 0
            }),
            Zl(null)
        }
        );
        return () => window.cancelAnimationFrame(m)
    }
    , [Ql, cl, Ot, ot]);
    const v = ({animate: m=!0}={}) => {
        if (!Ut) {
            W("当前为第一张图片");
            return
        }
        const w = el.current || window.innerWidth;
        if (m && Be.current <= 1.001) {
            kl(w, Dl || Ke, g);
            return
        }
        if (m) {
            Da(!0),
            window.setTimeout( () => {
                kl(w, Ke, g)
            }
            , 210);
            return
        }
        Jt.current = "replace",
        qt(""),
        an(0),
        g()
    }
      , T = ({animate: m=!0}={}) => {
        if (!Xt) {
            W("当前为最后一张图片");
            return
        }
        const w = el.current || window.innerWidth;
        if (m && Be.current <= 1.001) {
            kl(-w, sn || Et, y);
            return
        }
        if (m) {
            Da(!0),
            window.setTimeout( () => {
                kl(-w, Et, y)
            }
            , 210);
            return
        }
        Jt.current = "replace",
        qt(""),
        an(0),
        y()
    }
      , X = m => {
        if (qe > 1.001 || m.ctrlKey)
            return;
        m.preventDefault();
        const w = performance.now();
        if (w - jl.current < 320)
            return;
        if (jl.current = w,
        (Math.abs(m.deltaY) >= Math.abs(m.deltaX) ? m.deltaY : m.deltaX) > 0) {
            if (!Xt)
                return W("当前为最后一张图片");
            T()
        } else {
            if (!Ut)
                return W("当前为第一张图片");
            v()
        }
    }
    ;
    b.useEffect( () => {
        const m = Hn.current;
        if (!m)
            return;
        const w = S => X(S);
        return m.addEventListener("wheel", w, {
            passive: !1
        }),
        () => m.removeEventListener("wheel", w)
    }
    , [qe, Ut, Xt, g, y]),
    b.useEffect( () => {
        const m = w => {
            w.key === "ArrowRight" ? (w.preventDefault(),
            T()) : w.key === "ArrowLeft" && (w.preventDefault(),
            v())
        }
        ;
        return window.addEventListener("keydown", m),
        () => window.removeEventListener("keydown", m)
    }
    , [Ut, Xt]);
    const j = m => {
        if (m.button !== void 0 && m.button !== 0)
            return;
        if ((m.pointerType === "touch" || m.pointerType === "pen" || si()) && Ll.current.size === 0) {
            const K = performance.now()
              , ee = Jn.current
              , Me = K - (ee.t || 0)
              , Ne = Math.hypot(m.clientX - (ee.x || 0), m.clientY - (ee.y || 0));
            if (Me < 420 && Ne < 60) {
                Fn.current = m.pointerId,
                Jn.current = {
                    t: 0,
                    x: 0,
                    y: 0
                },
                de({
                    x: m.clientX,
                    y: m.clientY
                });
                return
            }
        }
        U(),
        tl("");
        try {
            m.currentTarget.setPointerCapture?.(m.pointerId)
        } catch {}
        Ll.current.set(m.pointerId, {
            x: m.clientX,
            y: m.clientY
        });
        const S = sa.current;
        S.startX = m.clientX,
        S.startY = m.clientY,
        S.lastX = m.clientX,
        S.lastY = m.clientY,
        S.lastT = performance.now(),
        S.vx = 0,
        S.vy = 0,
        S.dragStarted = !1;
        const ie = Array.from(Ll.current.values());
        if (ie.length >= 2) {
            S.mode = "pinch";
            const K = ie[0]
              , ee = ie[1];
            S.pinchStartDist = ui(K, ee),
            S.pinchStartScale = Be.current,
            S.pinchMid = ca(K, ee),
            S.pinchStartPos = {
                ...it.current
            };
            return
        }
        Be.current > 1.001 ? (S.mode = "pan",
        S.startPos = {
            ...it.current
        }) : (S.mode = "swipe",
        S.startSwipeX = ft.current)
    }
      , G = m => {
        if (!Ll.current.has(m.pointerId))
            return;
        Ll.current.set(m.pointerId, {
            x: m.clientX,
            y: m.clientY
        });
        const w = Array.from(Ll.current.values())
          , S = sa.current
          , ie = performance.now()
          , K = Math.max(1, ie - S.lastT)
          , ee = m.clientX - S.lastX
          , Me = m.clientY - S.lastY;
        if (S.vx = ee / K,
        S.vy = Me / K,
        S.lastX = m.clientX,
        S.lastY = m.clientY,
        S.lastT = ie,
        w.length >= 2) {
            S.mode !== "pinch" && (S.mode = "pinch",
            S.pinchStartDist = 0);
            const tt = w[0]
              , pl = w[1]
              , Ct = ui(tt, pl)
              , gt = ca(tt, pl);
            (!S.pinchStartDist || S.pinchStartDist < 1) && (S.pinchStartDist = Ct,
            S.pinchStartScale = Be.current,
            S.pinchStartPos = {
                ...it.current
            });
            const Xn = Ct / (S.pinchStartDist || Ct)
              , Vn = At(S.pinchStartScale * Xn, _l, Cn)
              , Yl = _a()
              , re = Yl ? Yl.left + Yl.width / 2 : 0
              , Je = Yl ? Yl.top + Yl.height / 2 : 0
              , mi = gt.x - re
              , ka = gt.y - Je
              , jc = (S.pinchMid?.x ?? gt.x) - re
              , Nc = (S.pinchMid?.y ?? gt.y) - Je
              , us = Vn / (S.pinchStartScale || 1)
              , Ac = {
                x: mi - (jc - S.pinchStartPos.x) * us,
                y: ka - (Nc - S.pinchStartPos.y) * us
            };
            Hl({
                scale: Vn,
                position: Ac,
                swipeX: 0
            }),
            S.dragStarted || (S.dragStarted = !0,
            ut(!0));
            return
        }
        const Ne = m.clientX - S.startX
          , rt = m.clientY - S.startY
          , at = Math.hypot(Ne, rt);
        if (!(!S.dragStarted && at < 3)) {
            if (S.dragStarted || (S.dragStarted = !0,
            ut(!0)),
            S.mode === "pan")
                an(0),
                Un({
                    x: S.startPos.x + Ne,
                    y: S.startPos.y + rt
                });
            else if (S.mode === "swipe") {
                const tt = el.current || window.innerWidth
                  , Ct = !Ut && Ne > 0 || !Xt && Ne < 0 ? .35 : 1
                  , gt = At(S.startSwipeX + Ne * Ct, -tt * .9, tt * .9);
                an(gt)
            }
        }
    }
      , U = () => {
        Pt.current && (cancelAnimationFrame(Pt.current),
        Pt.current = null)
    }
      , ne = (m, w) => {
        U();
        const S = .92;
        let ie = m * 16
          , K = w * 16;
        const ee = () => {
            ie *= S,
            K *= S,
            !(Math.abs(ie) < .2 && Math.abs(K) < .2) && (Un(Me => ({
                x: Me.x + ie,
                y: Me.y + K
            })),
            Pt.current = requestAnimationFrame(ee))
        }
        ;
        Pt.current = requestAnimationFrame(ee)
    }
      , le = m => {
        if (Fn.current === m.pointerId) {
            Fn.current = null;
            return
        }
        if (!Ll.current.has(m.pointerId))
            return;
        Ll.current.delete(m.pointerId);
        const w = sa.current
          , S = Array.from(Ll.current.values());
        if (S.length >= 2)
            return;
        if (w.mode === "pinch" && S.length === 1) {
            const ee = S[0];
            w.startX = ee.x,
            w.startY = ee.y,
            w.lastX = ee.x,
            w.lastY = ee.y,
            w.lastT = performance.now(),
            w.vx = 0,
            w.vy = 0,
            w.dragStarted = !1,
            Be.current > 1.001 ? (w.mode = "pan",
            w.startPos = {
                ...it.current
            }) : (w.mode = "swipe",
            w.startSwipeX = ft.current);
            return
        }
        if (m.pointerType === "mouse" && Math.hypot(m.clientX - w.startX || 0, m.clientY - w.startY || 0) < 10 && Math.abs(ft.current) < 6) {
            qt(""),
            an(0),
            w.mode = "none",
            ut(!1);
            const Ne = performance.now()
              , rt = Wn.current
              , at = Ne - (rt.t || 0)
              , tt = Math.hypot(m.clientX - (rt.x || 0), m.clientY - (rt.y || 0));
            if (at < 320 && tt < 40) {
                Wn.current = {
                    t: 0,
                    x: 0,
                    y: 0
                },
                de({
                    x: m.clientX,
                    y: m.clientY
                });
                return
            }
            Wn.current = {
                t: Ne,
                x: m.clientX,
                y: m.clientY
            };
            return
        }
        if (m.pointerType === "touch" || m.pointerType === "pen" || si()) {
            const Me = Math.hypot(m.clientX - w.startX || 0, m.clientY - w.startY || 0) < 12 && Math.abs(ft.current) < 8;
            let Ne = !1;
            if (Me) {
                const rt = performance.now()
                  , at = Jn.current
                  , tt = rt - (at.t || 0)
                  , pl = Math.hypot(m.clientX - (at.x || 0), m.clientY - (at.y || 0));
                if (tt < 420 && pl < 60)
                    Jn.current = {
                        t: 0,
                        x: 0,
                        y: 0
                    },
                    qt(""),
                    an(0),
                    de({
                        x: m.clientX,
                        y: m.clientY
                    }),
                    Ne = !0;
                else {
                    Jn.current = {
                        t: rt,
                        x: m.clientX,
                        y: m.clientY
                    },
                    w.mode = "none",
                    w.dragStarted = !1,
                    ut(!1),
                    qt(""),
                    an(0);
                    return
                }
            }
            if (Ne) {
                w.mode = "none",
                w.dragStarted = !1,
                ut(!1);
                return
            }
        }
        if (w.mode === "swipe" && Be.current <= 1.001) {
            const ee = el.current || window.innerWidth
              , Me = ft.current
              , Ne = ee * .085
              , rt = Math.abs(w.vx) > .65;
            Me > Ne || rt && Me > 18 ? Ut ? Kl(Dl || Ke, () => {
                Yn(ee, Dl || Ke, () => {
                    Jt.current = "replace",
                    g()
                }
                )
            }
            ) : (W("当前为第一张图片"),
            h()) : Me < -Ne || rt && Me < -18 ? Xt ? Kl(sn || Et, () => {
                Yn(-ee, sn || Et, () => {
                    Jt.current = "replace",
                    y()
                }
                )
            }
            ) : (W("当前为最后一张图片"),
            h()) : h()
        }
        if (w.mode === "pan" && Be.current > 1.001) {
            const ee = el.current || window.innerWidth
              , Me = m.clientX - w.startX
              , Ne = m.clientY - w.startY
              , rt = ft.current
              , at = Math.abs(Me)
              , tt = Math.abs(Ne)
              , pl = Math.atan2(tt, Math.max(at, .001)) * (180 / Math.PI)
              , Ct = Math.abs(w.vx)
              , gt = Math.abs(w.vy)
              , Xn = Math.max(180, ee * .22)
              , Vn = pl <= 28
              , Yl = pl <= 36 && Ct > gt * 1.25
              , re = Vn && at > Xn && Ct > .18 && Ct > gt * .9
              , Je = Yl && at > 40 && Ct > .58;
            re || Je ? Me > 0 && Ut ? Kl(Dl || Ke, () => {
                Yn(ee, Dl || Ke, () => {
                    Jt.current = "replace",
                    g()
                }
                )
            }
            ) : Me < 0 && Xt ? Kl(sn || Et, () => {
                Yn(-ee, sn || Et, () => {
                    Jt.current = "replace",
                    y()
                }
                )
            }
            ) : Me > 0 && !Ut ? W("当前为第一张图片") : Me < 0 && !Xt && W("当前为最后一张图片") : Math.abs(rt) > .5 ? h() : ne(w.vx, w.vy)
        }
        w.mode = "none",
        w.dragStarted = !1,
        ut(!1)
    }
      , de = (m=null) => {
        U(),
        qt(""),
        ut(!1),
        Ll.current.clear(),
        sa.current.mode = "none",
        sa.current.dragStarted = !1;
        const w = Be.current || 1
          , S = w > 1.001 ? 1 : 2;
        let ie = {
            x: 0,
            y: 0
        };
        if (S > 1.001 && m) {
            const K = _a();
            if (K) {
                const ee = K.left + K.width / 2
                  , Me = K.top + K.height / 2
                  , Ne = m.x - ee
                  , rt = m.y - Me
                  , at = S / Math.max(w, 1e-4)
                  , tt = it.current;
                ie = {
                    x: tt.x + (Ne - tt.x) * (1 - at),
                    y: tt.y + (rt - tt.y) * (1 - at)
                }
            }
        }
        oi.current = !0,
        window.setTimeout( () => {
            oi.current = !1
        }
        , 260),
        ua({
            scale: S,
            position: S <= 1.001 ? {
                x: 0,
                y: 0
            } : ie,
            swipeX: 0
        })
    }
      , xe = m => {
        const w = Be.current || 1
          , S = At(w + m, _l, Cn);
        ua({
            scale: S,
            position: S <= 1.001 ? {
                x: 0,
                y: 0
            } : it.current,
            swipeX: 0
        }, 180)
    }
      , J = el.current || window.innerWidth
      , ge = -J + kn
      , Yt = (_t || cl || Math.abs(kn) > .5) && (!oi.current || _t)
      , He = Vt.current?.slot ?? Lt
      , fl = Vt.current?.mode === "cross" ? new Set([Vt.current.slot, Vt.current.from]) : null
      , dt = cl ? "none" : mr || ""
      , Dt = dt ? `opacity 300ms linear, ${dt}` : "opacity 300ms linear"
      , nt = Bn?.left || Ut && (Dl || Ke) || Ot
      , yl = Bn?.right || Xt && (sn || Et) || Ot;
    return r.jsxs("div", {
        ref: $e,
        className: "fixed inset-0 z-[200] flex items-center justify-center",
        style: {
            opacity: ce && !je ? 1 : 0,
            transform: ce && !je ? "translate3d(0,0,0) scale(1)" : "translate3d(0,10px,0) scale(0.985)",
            transition: "opacity 220ms ease, transform 260ms cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "opacity, transform",
            overscrollBehavior: "contain"
        },
        children: [r.jsx("div", {
            className: "absolute inset-0 viewer-backdrop z-0",
            style: {
                opacity: ce && !je ? 1 : 0,
                transition: "opacity 220ms ease",
                willChange: "opacity"
            },
            onClick: zt
        }), r.jsxs("div", {
            className: "absolute top-4 left-4 right-4 flex items-start justify-between z-40 pointer-events-none",
            children: [r.jsxs("div", {
                className: "pointer-events-auto flex flex-col items-start gap-2",
                children: [r.jsx("div", {
                    className: "lightbox-pill",
                    children: r.jsxs("div", {
                        className: "flex flex-col",
                        children: [r.jsxs("div", {
                            className: "text-white/95 text-xs font-medium",
                            children: [s + 1, " / ", M.length]
                        }), r.jsx("div", {
                            className: "mt-0.5 text-[11px] text-white/70 truncate max-w-[60vw]",
                            children: Zt(R)
                        })]
                    })
                }), r.jsxs("button", {
                    onClick: () => ae(m => !m),
                    className: "lightbox-pill lightbox-exif-btn",
                    title: "EXIF",
                    children: [r.jsx("span", {
                        className: "text-white/90 text-xs font-medium",
                        children: "EXIF"
                    }), r.jsx("span", {
                        className: `text-white/70 text-[13px] transition-transform ${L ? "rotate-180" : ""}`,
                        children: "v"
                    })]
                }), r.jsxs("div", {
                    className: `lightbox-exif-panel ${L ? "is-open" : ""}`,
                    children: [r.jsxs("div", {
                        className: "exif-panel-head",
                        children: [r.jsx("span", {
                            className: "exif-panel-title",
                            children: "EXIF"
                        }), r.jsx("button", {
                            onClick: wl,
                            className: "exif-copy-btn",
                            title: "复制 EXIF",
                            children: r.jsx(Ay, {
                                size: 12
                            })
                        })]
                    }), I ? r.jsx("div", {
                        className: "exif-empty",
                        children: "Loading EXIF..."
                    }) : F ? r.jsx("div", {
                        className: "exif-empty",
                        children: F
                    }) : tn(R, q).length ? tn(R, q).map(m => r.jsxs("div", {
                        className: "exif-row",
                        children: [r.jsxs("span", {
                            className: "exif-label",
                            children: [m.label, ":"]
                        }), r.jsx("span", {
                            className: "exif-value",
                            children: m.value
                        })]
                    }, m.label)) : r.jsx("div", {
                        className: "exif-empty",
                        children: "No EXIF data"
                    })]
                })]
            }), r.jsxs("div", {
                className: "pointer-events-auto flex items-center gap-2",
                children: [be ? r.jsx("button", {
                    onClick: Y,
                    className: "lightbox-round",
                    title: _e ? "退出全屏" : "全屏",
                    children: _e ? r.jsx(Du, {
                        size: 18,
                        className: "text-white/90"
                    }) : r.jsx(J0, {
                        size: 18,
                        className: "text-white/90"
                    })
                }) : null, r.jsx("button", {
                    onClick: zt,
                    className: "lightbox-round",
                    title: "Close",
                    children: r.jsx(fr, {
                        size: 18,
                        className: "text-white/90"
                    })
                })]
            })]
        }), Ve && r.jsx("div", {
            className: "absolute bottom-24 left-1/2 -translate-x-1/2 z-40 pointer-events-none",
            children: r.jsx("button", {
                type: "button",
                onClick: () => {
                    !Ve || gn || ue || (me(!0),
                    ls(Ve).then( () => {
                        Jt.current = "replace",
                        Z(Ve),
                        B.current.set(Ve, "origin")
                    }
                    ).finally( () => {
                        me(!1)
                    }
                    ))
                }
                ,
                disabled: gn || ue,
                className: "pointer-events-auto lightbox-pill",
                title: "查看大图",
                children: r.jsx("span", {
                    className: "text-white/90 text-xs font-medium",
                    children: gn ? "查看大图（已清晰）" : ue ? "加载大图中..." : "查看大图"
                })
            })
        }), r.jsxs("div", {
            className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 pointer-events-none",
            children: [Ut && r.jsx("button", {
                onClick: v,
                className: "hidden sm:inline-flex pointer-events-auto lightbox-round",
                title: "Previous",
                children: r.jsx(Yu, {
                    size: 18,
                    className: "text-white/90"
                })
            }), r.jsxs("div", {
                className: "hidden sm:flex pointer-events-auto lightbox-pill",
                children: [r.jsx("button", {
                    onClick: () => xe(-.5),
                    className: "lightbox-pill__btn",
                    title: "Zoom out",
                    children: r.jsx(mp, {
                        size: 18
                    })
                }), r.jsx("button", {
                    onClick: () => xe(.5),
                    className: "lightbox-pill__btn",
                    title: "Zoom in",
                    children: r.jsx(fp, {
                        size: 18
                    })
                }), r.jsx("button", {
                    onClick: () => Da(!0),
                    className: "lightbox-pill__btn",
                    title: "Reset",
                    children: r.jsx(Du, {
                        size: 18
                    })
                })]
            }), r.jsx("button", {
                onClick: T,
                "aria-disabled": !Xt,
                className: `hidden sm:inline-flex pointer-events-auto lightbox-round ${Xt ? "" : "opacity-40 cursor-not-allowed"}`,
                title: "Next",
                children: r.jsx(by, {
                    size: 18,
                    className: "text-white/90"
                })
            })]
        }), Ee && r.jsx("div", {
            className: "absolute inset-0 z-40 pointer-events-none flex items-center justify-center",
            children: r.jsx("div", {
                className: "lightbox-pill max-w-[80vw] text-xs sm:text-sm text-white/90",
                children: Ee
            })
        }), r.jsx("div", {
            ref: Hn,
            className: "relative z-20 w-full h-full flex items-center justify-center select-none touch-none",
            style: {
                contain: "paint",
                isolation: "isolate"
            },
            onPointerDown: j,
            onPointerMove: G,
            onPointerUp: le,
            onPointerCancel: le,
            children: r.jsx("div", {
                className: "relative w-full h-full overflow-hidden",
                children: Yt ? r.jsxs("div", {
                    className: "flex h-full",
                    style: {
                        transform: `translate3d(${ge}px,0,0)`,
                        transition: ln,
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                        transformStyle: "preserve-3d",
                        width: J * 3
                    },
                    children: [r.jsx("div", {
                        className: "w-full h-full flex items-center justify-center",
                        style: {
                            width: J
                        },
                        children: nt ? r.jsx("img", {
                            src: nt,
                            alt: "",
                            className: "w-full h-full object-contain block",
                            draggable: !1,
                            decoding: "async",
                            fetchPriority: "high"
                        }) : null
                    }), r.jsx("div", {
                        className: "w-full h-full flex items-center justify-center",
                        style: {
                            width: J
                        },
                        children: r.jsxs("div", {
                            className: "relative w-full h-full flex items-center justify-center",
                            children: [[0, 1].map(m => {
                                const w = Sl[m] || Ot || G0;
                                return r.jsx("img", {
                                    ref: Kn(m),
                                    src: w,
                                    alt: "",
                                    draggable: !1,
                                    className: "absolute inset-0 w-full h-full m-auto object-contain",
                                    style: {
                                        opacity: Kt[m] ? 1 : 0,
                                        zIndex: He === m ? 2 : 1,
                                        transform: `translate3d(${Te.x}px, ${Te.y}px, 0) scale(${qe}) translateZ(0)`,
                                        transition: fl?.has(m) ? Dt : dt,
                                        cursor: qe > 1.001 ? "grab" : "zoom-in",
                                        willChange: "opacity, transform",
                                        backfaceVisibility: "hidden",
                                        transformOrigin: "center center",
                                        display: "block"
                                    },
                                    decoding: "sync",
                                    fetchPriority: m === He ? "high" : "auto",
                                    onTransitionEnd: pn(m),
                                    onError: bn(m)
                                }, m)
                            }
                            ), r.jsx(os, {
                                watermark: o?.watermark
                            })]
                        })
                    }), r.jsx("div", {
                        className: "w-full h-full flex items-center justify-center",
                        style: {
                            width: J
                        },
                        children: yl ? r.jsx("img", {
                            src: yl,
                            alt: "",
                            className: "w-full h-full object-contain block",
                            draggable: !1,
                            decoding: "async",
                            fetchPriority: "high"
                        }) : null
                    })]
                }) : r.jsxs("div", {
                    className: "relative w-full h-full flex items-center justify-center",
                    children: [[0, 1].map(m => {
                        const w = Sl[m] || Ot || G0;
                        return r.jsx("img", {
                            ref: Kn(m),
                            src: w,
                            alt: "",
                            draggable: !1,
                            className: "absolute inset-0 w-full h-full m-auto object-contain",
                            style: {
                                opacity: Kt[m] ? 1 : 0,
                                zIndex: He === m ? 2 : 1,
                                transform: `translate3d(${Te.x}px, ${Te.y}px, 0) scale(${qe}) translateZ(0)`,
                                transition: fl?.has(m) ? Dt : dt,
                                cursor: qe > 1.001 ? "grab" : "zoom-in",
                                willChange: "opacity, transform",
                                backfaceVisibility: "hidden",
                                transformOrigin: "center center",
                                display: "block"
                            },
                            decoding: "sync",
                            fetchPriority: m === He ? "high" : "auto",
                            onTransitionEnd: pn(m),
                            onError: bn(m)
                        }, m)
                    }
                    ), r.jsx(os, {
                        watermark: o?.watermark
                    })]
                })
            })
        })]
    })
}
  , Db = b.memo( ({photo: s, idx: o, isSelected: d, isCover: u, watermark: g, onPhotoClick: y, onTogglePhotoSelect: E, handleSetCover: _, handleDeletePhoto: M, handleDragStart: p, handleDragOver: R, handleDragMove: C, handleDragEnd: Z}) => {
    const L = cs(s)
      , ae = gc(s)
      , q = ml(s)
      , Se = ih(s)
      , F = ss(s?.duration);
    return ae ? r.jsx("div", {
        "data-dnd-type": "photo",
        className: "relative min-w-0 group cursor-grab bento-card",
        onClick: () => y?.(o, s),
        onMouseMove: te => xc(te.currentTarget, te),
        onMouseLeave: te => wc(te.currentTarget),
        draggable: !0,
        onDragStart: te => p(te, o, "photo", s.id),
        onDragOver: te => R(te, o, "photo", s.id),
        onDrag: te => C?.(te),
        onDragEnd: te => Z(te, "photo"),
        style: {
            contain: "layout paint style"
        },
        children: r.jsxs("div", {
            className: `relative rounded-xl sm:rounded-2xl p-0 sm:p-[6px] ${dr} ${zi} transition-transform min-w-0 photo-glass`,
            children: [r.jsxs("label", {
                className: `absolute top-3 right-3 z-30 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold bg-white/95 backdrop-blur-sm shadow-sm ${d ? "border-gray-900 text-gray-900" : "border-gray-200 text-gray-500"}`,
                onClick: te => {
                    te.stopPropagation()
                }
                ,
                children: [r.jsx("input", {
                    type: "checkbox",
                    checked: d,
                    onChange: () => E?.(s.id),
                    className: "accent-gray-900 w-4 h-4"
                }), "选中"]
            }), q ? r.jsxs("div", {
                className: "relative",
                children: [r.jsx("img", {
                    src: ae,
                    className: "w-full block rounded-lg sm:rounded-xl shadow-sm",
                    loading: "lazy",
                    decoding: "async",
                    alt: "",
                    referrerPolicy: "no-referrer",
                    onError: te => {
                        te.currentTarget.dataset.fallbackApplied || (te.currentTarget.dataset.fallbackApplied = "1",
                        te.currentTarget.src = en)
                    }
                }), r.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent rounded-lg sm:rounded-xl"
                }), r.jsxs("div", {
                    className: "absolute left-3 bottom-3 right-3 flex items-center justify-between text-white text-xs",
                    children: [r.jsxs("span", {
                        className: "inline-flex items-center gap-1.5 font-semibold",
                        children: [r.jsx(_i, {
                            size: 14
                        }), "B站视频"]
                    }), F ? r.jsx("span", {
                        className: "font-semibold",
                        children: F
                    }) : null]
                })]
            }) : r.jsxs(r.Fragment, {
                children: [r.jsx(Lu, {
                    src: ae,
                    originSrc: L,
                    className: "w-full block rounded-lg sm:rounded-xl shadow-sm",
                    loading: "lazy",
                    decoding: "async",
                    alt: ""
                }), r.jsx(os, {
                    watermark: g
                })]
            }), u && r.jsxs("div", {
                className: "absolute top-4 left-4 bg-gray-900/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-10 backdrop-blur-md border border-white/20",
                children: [r.jsx(my, {
                    size: 12
                }), " COVER"]
            }), q && (s?.title || "").trim() ? r.jsx("div", {
                className: "px-1 pt-2 pb-1",
                children: r.jsx("p", {
                    className: "text-xs sm:text-sm text-gray-700 font-semibold leading-snug break-words whitespace-normal",
                    children: s.title
                })
            }) : null, r.jsx("div", {
                className: "absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 z-20 backdrop-blur-[2px]",
                onClick: te => te.stopPropagation(),
                children: r.jsxs("div", {
                    className: "flex gap-2",
                    children: [r.jsxs("button", {
                        onClick: te => _(te, q ? Se : s.url),
                        className: "flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-800 shadow-lg hover:bg-gray-50",
                        children: [r.jsx(yc, {
                            size: 14
                        }), " Cover"]
                    }), r.jsx("button", {
                        onClick: te => {
                            te.stopPropagation(),
                            M(s.id)
                        }
                        ,
                        className: "p-2.5 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-lg shadow-red-500/30 transition-colors",
                        title: "Delete",
                        children: r.jsx(Ru, {
                            size: 16
                        })
                    })]
                })
            })]
        })
    }) : null
}
)
  , fh = b.memo( ({photos: s, isAdmin: o, handleSetCover: d, handleDeletePhoto: u, onPhotoClick: g, handleDragStart: y, handleDragOver: E, handleDragMove: _, handleDragEnd: M, activeAlbum: p, watermark: R, selectedPhotoIds: C, onTogglePhotoSelect: Z}) => {
    const L = b.useRef(null)
      , [ae,q] = b.useState( () => Uu())
      , Se = b.useMemo( () => new Set(C || []), [C])
      , F = "mx-auto w-full max-w-[1560px] px-0 sm:px-5 lg:px-8 xl:px-10 2xl:px-12 bento-wrap";
    b.useEffect( () => {
        const ue = () => {
            q(Uu(window.innerWidth))
        }
        ;
        return ue(),
        window.addEventListener("resize", ue),
        () => window.removeEventListener("resize", ue)
    }
    , []);
    const te = ae <= 2 ? 8 : 12
      , I = b.useMemo( () => {
        const ue = Array.from({
            length: ae
        }, () => []);
        return (s || []).forEach( (me, se) => {
            ue[se % ae].push({
                photo: me,
                idx: se
            })
        }
        ),
        ue
    }
    , [s, ae])
      , pe = b.useMemo( () => {
        const ue = []
          , me = [[], []];
        let se = 0;
        return (s || []).forEach( (Ee, Xe) => {
            ml(Ee) ? ue.push({
                photo: Ee,
                idx: Xe
            }) : (me[se % 2].push({
                photo: Ee,
                idx: Xe
            }),
            se += 1)
        }
        ),
        {
            videos: ue,
            imageBuckets: me
        }
    }
    , [s]);
    return b.useEffect( () => {
        if (si())
            return;
        const ue = L.current;
        if (!ue)
            return;
        const me = {
            raf: null
        }
          , se = () => ue.querySelectorAll(".bento-card")
          , Ee = (_e, Le) => {
            _e._tiltTarget = Le
        }
          , Xe = () => {
            const _e = se();
            let Le = !1;
            _e.forEach(be => {
                const Ce = be._tiltCur || {
                    rotX: 0,
                    rotY: 0,
                    tx: 0,
                    ty: 0
                }
                  , $e = be._tiltTarget || {
                    rotX: 0,
                    rotY: 0,
                    tx: 0,
                    ty: 0
                }
                  , B = (Ze, Oe) => Ze + (Oe - Ze) * .1
                  , P = {
                    rotX: B(Ce.rotX, $e.rotX),
                    rotY: B(Ce.rotY, $e.rotY),
                    tx: B(Ce.tx, $e.tx),
                    ty: B(Ce.ty, $e.ty)
                };
                be._tiltCur = P,
                be.style.transform = `translate3d(${P.tx}px, ${P.ty}px, 0) rotateX(${P.rotX}deg) rotateY(${P.rotY}deg)`,
                Math.abs(P.rotX - $e.rotX) < .02 && Math.abs(P.rotY - $e.rotY) < .02 && Math.abs(P.tx - $e.tx) < .02 && Math.abs(P.ty - $e.ty) < .02 || (Le = !0)
            }
            ),
            Le ? me.raf = requestAnimationFrame(Xe) : me.raf = null
        }
          , ze = _e => {
            const Le = ue.getBoundingClientRect()
              , be = _e.clientX >= Le.left && _e.clientX <= Le.right && _e.clientY >= Le.top && _e.clientY <= Le.bottom
              , Ce = se();
            if (!be) {
                Ce.forEach(P => Ee(P, {
                    rotX: 0,
                    rotY: 0,
                    tx: 0,
                    ty: 0
                })),
                me.raf || (me.raf = requestAnimationFrame(Xe));
                return
            }
            const $e = _e.clientX
              , B = _e.clientY;
            Ce.forEach(P => {
                const fe = P.getBoundingClientRect()
                  , Ze = fe.left + fe.width / 2
                  , Oe = fe.top + fe.height / 2
                  , N = $e - Ze
                  , Y = B - Oe
                  , W = Math.hypot(N, Y)
                  , ce = Math.max(0, 1 - W / 420)
                  , we = Y / 2e3 * ce * 6
                  , je = N / 2e3 * ce * 6
                  , Fe = N * .015 * ce
                  , ht = Y * .015 * ce;
                Ee(P, {
                    rotX: we,
                    rotY: je,
                    tx: Fe,
                    ty: ht
                })
            }
            ),
            me.raf || (me.raf = requestAnimationFrame(Xe))
        }
        ;
        return window.addEventListener("mousemove", ze),
        () => {
            window.removeEventListener("mousemove", ze),
            me.raf && cancelAnimationFrame(me.raf)
        }
    }
    , [ae, s?.length]),
    o ? r.jsx("div", {
        ref: L,
        className: F,
        children: r.jsx("div", {
            className: "grid",
            style: {
                gridTemplateColumns: `repeat(${ae}, minmax(0, 1fr))`,
                gap: `${te}px`
            },
            children: (s || []).map( (ue, me) => {
                const se = Se.has(ue.id)
                  , Ee = ih(ue);
                return r.jsx(Db, {
                    photo: ue,
                    idx: me,
                    isSelected: se,
                    isCover: !!(p && (ue.url === p.cover || Ee && Ee === p.cover)),
                    watermark: R,
                    onPhotoClick: g,
                    onTogglePhotoSelect: Z,
                    handleSetCover: d,
                    handleDeletePhoto: u,
                    handleDragStart: y,
                    handleDragOver: E,
                    handleDragMove: _,
                    handleDragEnd: M
                }, ue.id)
            }
            )
        })
    }) : ae <= 2 ? r.jsx("div", {
        ref: L,
        className: F,
        children: r.jsxs("div", {
            className: "flex flex-col",
            style: {
                gap: `${te}px`
            },
            children: [pe.videos.map( ({photo: ue, idx: me}) => {
                const se = gc(ue)
                  , Ee = ss(ue?.duration);
                return se ? r.jsx("div", {
                    className: "bento-card cursor-pointer px-4",
                    onClick: () => g?.(me, ue),
                    children: r.jsxs("div", {
                        className: `rounded-xl sm:rounded-2xl overflow-hidden ${dr} ${zi} transition-transform photo-glass`,
                        children: [r.jsxs("div", {
                            className: "relative -mb-px",
                            children: [r.jsx("img", {
                                src: se,
                                className: "w-full h-auto block object-cover",
                                loading: "lazy",
                                decoding: "async",
                                alt: "",
                                referrerPolicy: "no-referrer",
                                onError: Xe => {
                                    Xe.currentTarget.dataset.fallbackApplied || (Xe.currentTarget.dataset.fallbackApplied = "1",
                                    Xe.currentTarget.src = en)
                                }
                            }), r.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
                            }), r.jsxs("div", {
                                className: "absolute left-3 bottom-3 right-3 flex items-center justify-between text-white text-xs",
                                children: [r.jsxs("span", {
                                    className: "inline-flex items-center gap-1.5 font-semibold",
                                    children: [r.jsx(_i, {
                                        size: 14
                                    }), "B站视频"]
                                }), Ee ? r.jsx("span", {
                                    className: "font-semibold",
                                    children: Ee
                                }) : null]
                            })]
                        }), (ue?.title || "").trim() ? r.jsx("p", {
                            className: "px-3 py-2.5 text-sm text-gray-800 font-semibold leading-snug break-words whitespace-normal",
                            children: ue.title
                        }) : null]
                    })
                }, ue.id) : null
            }
            ), (pe.imageBuckets[0].length > 0 || pe.imageBuckets[1].length > 0) && r.jsx("div", {
                className: `flex items-start ${pe.videos.length > 0 ? "mt-3" : ""}`,
                style: {
                    gap: `${te}px`
                },
                children: pe.imageBuckets.map( (ue, me) => r.jsx("div", {
                    className: "flex-1 min-w-0 flex flex-col",
                    style: {
                        gap: `${te}px`
                    },
                    children: ue.map( ({photo: se, idx: Ee}) => {
                        const Xe = cs(se)
                          , ze = gc(se);
                        return ze ? r.jsx("div", {
                            className: "bento-card cursor-zoom-in",
                            onClick: () => g?.(Ee, se),
                            children: r.jsxs("div", {
                                className: `relative rounded-none sm:rounded-xl overflow-hidden ${zi} transition-transform photo-glass`,
                                children: [r.jsx(Lu, {
                                    src: ze,
                                    originSrc: Xe,
                                    className: "w-full h-auto block object-cover rounded-none sm:rounded-xl shadow-sm",
                                    loading: "lazy",
                                    decoding: "async",
                                    alt: ""
                                }), r.jsx(os, {
                                    watermark: R
                                })]
                            })
                        }, se.id) : null
                    }
                    )
                }, `m-col-${me}`))
            })]
        })
    }) : r.jsx("div", {
        ref: L,
        className: F,
        children: r.jsx("div", {
            className: "flex items-start",
            style: {
                gap: `${te}px`
            },
            children: I.map( (ue, me) => r.jsx("div", {
                className: "flex-1 min-w-0 flex flex-col",
                style: {
                    gap: `${te}px`
                },
                children: ue.map( ({photo: se, idx: Ee}) => {
                    const Xe = cs(se)
                      , ze = gc(se)
                      , _e = ml(se)
                      , Le = ss(se?.duration);
                    return ze ? r.jsx("div", {
                        className: `bento-card ${_e ? "cursor-pointer" : "cursor-zoom-in"}`,
                        onMouseMove: be => xc(be.currentTarget, be),
                        onMouseLeave: be => wc(be.currentTarget),
                        onClick: () => g?.(Ee, se),
                        children: _e ? r.jsxs("div", {
                            className: `rounded-xl sm:rounded-2xl overflow-hidden ${dr} ${zi} transition-transform photo-glass`,
                            children: [r.jsxs("div", {
                                className: "relative -mb-px",
                                children: [r.jsx("img", {
                                    src: ze,
                                    className: "w-full h-auto block object-cover shadow-sm",
                                    loading: "lazy",
                                    decoding: "async",
                                    alt: "",
                                    referrerPolicy: "no-referrer",
                                    onError: be => {
                                        be.currentTarget.dataset.fallbackApplied || (be.currentTarget.dataset.fallbackApplied = "1",
                                        be.currentTarget.src = en)
                                    }
                                }), r.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
                                }), r.jsxs("div", {
                                    className: "absolute left-3 bottom-3 right-3 flex items-center justify-between text-white text-xs",
                                    children: [r.jsxs("span", {
                                        className: "inline-flex items-center gap-1.5 font-semibold",
                                        children: [r.jsx(_i, {
                                            size: 14
                                        }), "B站视频"]
                                    }), Le ? r.jsx("span", {
                                        className: "font-semibold",
                                        children: Le
                                    }) : null]
                                })]
                            }), (se?.title || "").trim() ? r.jsx("p", {
                                className: "px-3 py-2.5 text-sm sm:text-[15px] text-gray-800 font-semibold leading-snug break-words whitespace-normal",
                                children: se.title
                            }) : null]
                        }) : r.jsxs("div", {
                            className: `relative rounded-none sm:rounded-xl overflow-hidden ${zi} transition-transform photo-glass`,
                            children: [r.jsx(Lu, {
                                src: ze,
                                originSrc: Xe,
                                className: "w-full h-auto block object-cover rounded-none sm:rounded-xl shadow-sm",
                                loading: "lazy",
                                decoding: "async",
                                alt: ""
                            }), r.jsx(os, {
                                watermark: R
                            })]
                        })
                    }, se.id) : null
                }
                )
            }, `col-${me}`))
        })
    })
}
);
fh.displayName = "PhotoGrid";
function kb() {
    const s = b.useCallback( (h, v) => {
        const T = String(v || "");
        T && (h === "error" ? console.error(T) : console.log(T))
    }
    , [])
      , [o,d] = b.useState("home")
      , [u,g] = b.useState(null)
      , [y,E] = b.useState(!1)
      , [_,M] = b.useState("")
      , [p,R] = b.useState("")
      , [C,Z] = b.useState(!1)
      , [L,ae] = b.useState(!0)
      , [q,Se] = b.useState(ns.profile)
      , [F,te] = b.useState(ns.albums)
      , [I,pe] = b.useState({})
      , [ue,me] = b.useState(null)
      , [se,Ee] = b.useState(null)
      , [Xe,ze] = b.useState(!1)
      , [_e,Le] = b.useState(!0)
      , [be,Ce] = b.useState(!1)
      , [$e,B] = b.useState(!1)
      , [P,fe] = b.useState("album")
      , [Ze,Oe] = b.useState(!1)
      , [N,Y] = b.useState(!1)
      , [W,ce] = b.useState(!1)
      , [we,je] = b.useState(!1)
      , [Fe,ht] = b.useState(!1)
      , [De,zt] = b.useState(null)
      , [Zt,_l] = b.useState(null)
      , [Cn,At] = b.useState(null)
      , [Bt,$t] = b.useState(null)
      , [hl,oe] = b.useState(0)
      , [Ve,On] = b.useState("全部")
      , [wt,gn] = b.useState("全部")
      , [ot,Ke] = b.useState([])
      , [Et,Ut] = b.useState([])
      , [Xt,tn] = b.useState(!1)
      , [wl,Sl] = b.useState(null)
      , Cl = b.useRef({
        x: 0,
        y: 0
    })
      , Kt = b.useRef(null)
      , yt = b.useRef(0)
      , [Lt,It] = b.useState("")
      , pt = b.useRef(!1)
      , [Vt,$n] = b.useState( () => bc())
      , Jt = b.useMemo( () => Mu(Vt), [Vt]);
    b.useEffect( () => {
        if (wt === Ve)
            return;
        It("cat-fade-out");
        const h = window.setTimeout( () => {
            gn(Ve),
            It("cat-fade-in"),
            window.setTimeout( () => It(""), 180)
        }
        , 140);
        return () => window.clearTimeout(h)
    }
    , [Ve]);
    const rl = b.useRef({
        type: null,
        from: null,
        to: null
    })
      , sl = b.useCallback( (h, v) => {
        !Number.isFinite(h) || !Number.isFinite(v) || (Cl.current = {
            x: h,
            y: v
        },
        Kt.current && (Kt.current = {
            ...Kt.current,
            x: h,
            y: v
        },
        !yt.current && (yt.current = window.requestAnimationFrame( () => {
            yt.current = 0,
            Sl(T => !T || !Kt.current ? T : {
                ...T,
                x: Kt.current.x,
                y: Kt.current.y
            })
        }
        ))))
    }
    , [])
      , yn = b.useCallback( (h, v, T, X) => {
        const j = h?.querySelector?.("h3, p")
          , G = h?.querySelector?.("img")
          , U = h?.getBoundingClientRect?.();
        return {
            type: v,
            src: G?.currentSrc || G?.src || "",
            title: (j?.textContent || (v === "photo" ? "正在拖动图片" : "正在拖动卡片")).trim(),
            width: Math.max(164, Math.min(236, Math.round((U?.width || 220) * .7))),
            x: T,
            y: X
        }
    }
    , []);
    b.useEffect( () => () => {
        yt.current && (window.cancelAnimationFrame(yt.current),
        yt.current = 0)
    }
    , []),
    b.useEffect( () => {
        if (!Xt)
            return;
        let h = 0;
        const v = 180
          , T = 10
          , X = 56
          , j = le => {
            Math.abs(le.deltaY) < .5 || (window.scrollBy({
                top: le.deltaY * 2.2,
                left: 0,
                behavior: "auto"
            }),
            le.preventDefault())
        }
          , G = le => {
            sl(le.clientX, le.clientY)
        }
          , U = le => {
            typeof le.clientY == "number" && le.clientY !== 0 && sl(le.clientX || 0, le.clientY)
        }
          , ne = () => {
            const le = Cl.current?.y ?? 0
              , de = window.innerHeight || 0
              , xe = le
              , J = de - le;
            let ge = 0;
            if (xe > 0 && xe < v) {
                const Yt = (v - xe) / v;
                ge = -(T + Yt * (X - T))
            } else if (J > 0 && J < v) {
                const Yt = (v - J) / v;
                ge = T + Yt * (X - T)
            }
            ge !== 0 && window.scrollBy({
                top: ge,
                left: 0,
                behavior: "auto"
            }),
            h = window.requestAnimationFrame(ne)
        }
        ;
        return document.addEventListener("wheel", j, {
            passive: !1,
            capture: !0
        }),
        document.addEventListener("dragover", G, !0),
        document.addEventListener("drag", U, !0),
        document.addEventListener("mousewheel", j, {
            passive: !1,
            capture: !0
        }),
        document.addEventListener("DOMMouseScroll", j, {
            passive: !1,
            capture: !0
        }),
        h = window.requestAnimationFrame(ne),
        () => {
            h && window.cancelAnimationFrame(h),
            document.removeEventListener("dragover", G, !0),
            document.removeEventListener("drag", U, !0),
            document.removeEventListener("wheel", j, !0),
            document.removeEventListener("mousewheel", j, !0),
            document.removeEventListener("DOMMouseScroll", j, !0)
        }
    }
    , [Xt, sl]);
    const Pt = b.useCallback( (h, v, T, X) => {
        if (!y)
            return;
        tn(!0),
        h?.currentTarget?.classList?.add("drag-source-active");
        const j = typeof h?.clientX == "number" ? h.clientX : (typeof window < "u" ? window.innerWidth : 0) / 2
          , G = typeof h?.clientY == "number" ? h.clientY : (typeof window < "u" ? window.innerHeight : 0) / 2;
        Cl.current = {
            x: j,
            y: G
        };
        try {
            h.dataTransfer.effectAllowed = "move",
            h.dataTransfer.setData("text/plain", String(v));
            const le = Dp();
            le && h.dataTransfer.setDragImage(le, 0, 0)
        } catch {}
        const U = T || h?.currentTarget?.getAttribute?.("data-dnd-type") || null
          , ne = yn(h?.currentTarget, U, j, G);
        Kt.current = ne,
        Sl(ne),
        rl.current = {
            type: U,
            from: v,
            to: v,
            fromId: X ?? null,
            toId: X ?? null
        }
    }
    , [yn, y])
      , Ot = b.useCallback(h => {
        !y || !Xt || typeof h?.clientY != "number" || h.clientY === 0 || sl(h.clientX || 0, h.clientY)
    }
    , [y, Xt, sl])
      , Vl = b.useCallback( (h, v, T, X) => {
        if (!y)
            return;
        h.preventDefault();
        const j = rl.current?.type || null;
        j && T && j !== T || (rl.current = {
            type: T || j,
            from: rl.current.from,
            to: v,
            fromId: rl.current.fromId ?? null,
            toId: X ?? null
        })
    }
    , [y])
      , Kn = b.useCallback(async (h, v) => {
        if (!y)
            return;
        h?.preventDefault?.(),
        document.querySelectorAll(".drag-source-active").forEach(U => U.classList.remove("drag-source-active"));
        const {from: T, to: X, fromId: j, toId: G} = rl.current || {};
        if (rl.current = {
            type: null,
            from: null,
            to: null,
            fromId: null,
            toId: null
        },
        Kt.current = null,
        Sl(null),
        tn(!1),
        !(T == null || X == null) && !(T === X && (!j || !G || j === G)))
            try {
                if (v === "homeCard") {
                    const U = Array.isArray(F) ? F.slice() : []
                      , ne = Array.isArray(q.homeVideos) ? q.homeVideos.slice() : []
                      , le = [...U.map( (K, ee) => ({
                        kind: "album",
                        id: K.id,
                        dragKey: `album:${K.id}`,
                        homeOrder: Number.isFinite(K.homeOrder) ? K.homeOrder : Number.isFinite(K.order) ? K.order : ee
                    })), ...ne.map( (K, ee) => ({
                        kind: "video",
                        id: K.id,
                        dragKey: `video:${K.id}`,
                        homeOrder: Number.isFinite(K.homeOrder) ? K.homeOrder : 1e5 + (Number.isFinite(K.order) ? K.order : ee)
                    }))].sort( (K, ee) => K.homeOrder - ee.homeOrder || String(K.dragKey).localeCompare(String(ee.dragKey)));
                    if (le.length < 2)
                        return;
                    const de = j || le[T]?.dragKey
                      , xe = G || le[X]?.dragKey;
                    if (!de || !xe || de === xe)
                        return;
                    const J = le.findIndex(K => K.dragKey === de)
                      , ge = le.findIndex(K => K.dragKey === xe);
                    if (J < 0 || ge < 0)
                        return;
                    const Yt = new Set((Et || []).map(K => `album:${K}`));
                    let He = [];
                    if (Yt.size > 1 && Yt.has(de)) {
                        const K = le.filter(at => Yt.has(at.dragKey))
                          , ee = new Set(K.map(at => at.dragKey));
                        if (K.length < 2 || ee.has(xe))
                            return;
                        const Me = le.filter(at => !ee.has(at.dragKey))
                          , Ne = Me.findIndex(at => at.dragKey === xe)
                          , rt = Ne < 0 ? Me.length : Ne;
                        He = [...Me.slice(0, rt), ...K, ...Me.slice(rt)]
                    } else {
                        He = [...le];
                        const [K] = He.splice(J, 1);
                        He.splice(ge, 0, K)
                    }
                    const dt = new Map
                      , Dt = new Map;
                    let nt = 0
                      , yl = 0;
                    He.forEach( (K, ee) => {
                        K.kind === "album" ? dt.set(K.id, {
                            order: nt++,
                            homeOrder: ee
                        }) : Dt.set(K.id, {
                            order: yl++,
                            homeOrder: ee
                        })
                    }
                    );
                    const m = U.map(K => dt.has(K.id) ? {
                        ...K,
                        ...dt.get(K.id)
                    } : K)
                      , w = ne.map(K => Dt.has(K.id) ? {
                        ...K,
                        ...Dt.get(K.id)
                    } : K)
                      , S = {
                        ...q,
                        homeVideos: w
                    };
                    te(m),
                    Se(S);
                    const ie = xl({
                        profile: S,
                        albums: m,
                        photosByAlbumId: I
                    });
                    await vl(ie),
                    Ut([]),
                    s("ok", "Home card order updated");
                    return
                }
                if (v === "album") {
                    let U = [...F];
                    const [ne] = U.splice(T, 1);
                    U.splice(X, 0, ne),
                    U = U.map( (de, xe) => ({
                        ...de,
                        order: xe
                    })),
                    te(U);
                    const le = xl({
                        profile: q,
                        albums: U,
                        photosByAlbumId: I
                    });
                    await vl(le),
                    s("ok", "Album order updated");
                    return
                }
                if (v === "photo") {
                    const U = u?.id;
                    if (!U)
                        return;
                    const ne = Array.isArray(I?.[U]) ? [...I[U]] : []
                      , le = j || ne[T]?.id
                      , de = G || ne[X]?.id;
                    if (!le || !de || le === de)
                        return;
                    let xe = [];
                    const J = new Set(ot || []);
                    if (J.size > 1 && J.has(le)) {
                        const dt = ne.filter(w => J.has(w.id))
                          , Dt = new Set(dt.map(w => w.id));
                        if (dt.length < 2 || Dt.has(de))
                            return;
                        const nt = ne.filter(w => !Dt.has(w.id))
                          , yl = nt.findIndex(w => w.id === de)
                          , m = yl < 0 ? nt.length : yl;
                        xe = [...nt.slice(0, m), ...dt, ...nt.slice(m)]
                    } else {
                        const dt = ne.findIndex(w => w.id === le)
                          , Dt = ne.findIndex(w => w.id === de);
                        if (dt < 0 || Dt < 0)
                            return;
                        xe = [...ne];
                        const [nt] = xe.splice(dt, 1)
                          , yl = xe.findIndex(w => w.id === de)
                          , m = yl < 0 ? xe.length : yl;
                        xe.splice(m, 0, nt)
                    }
                    const Yt = xe.map( (dt, Dt) => ({
                        ...dt,
                        order: Dt
                    }))
                      , He = {
                        ...I,
                        [U]: Yt
                    };
                    pe(He);
                    const fl = xl({
                        profile: q,
                        albums: F,
                        photosByAlbumId: He
                    });
                    await vl(fl),
                    Ke([]),
                    s("ok", "Photo order updated");
                    return
                }
                if (v === "homeVideo") {
                    const U = (Array.isArray(q.homeVideos) ? q.homeVideos : []).slice().sort( (nt, yl) => (nt.order ?? 0) - (yl.order ?? 0));
                    let ne = y ? U : U.filter(nt => nt.visible !== !1);
                    if (wt && wt !== "全部" && (ne = ne.filter(nt => Array.isArray(nt.categories) && nt.categories.includes(wt))),
                    !ne.length)
                        return;
                    let le = Number(T)
                      , de = Number(X);
                    if (j && G && (le = ne.findIndex(nt => nt.id === j),
                    de = ne.findIndex(nt => nt.id === G)),
                    le < 0 || le >= ne.length || de < 0 || de >= ne.length)
                        return;
                    const xe = [...ne]
                      , [J] = xe.splice(le, 1);
                    xe.splice(de, 0, J);
                    const ge = new Set(ne.map(nt => nt.id));
                    let Yt = 0;
                    const fl = U.map(nt => ge.has(nt.id) ? xe[Yt++] : nt).map( (nt, yl) => ({
                        ...nt,
                        order: yl
                    }))
                      , dt = {
                        ...q,
                        homeVideos: fl
                    };
                    Se(dt);
                    const Dt = xl({
                        profile: dt,
                        albums: F,
                        photosByAlbumId: I
                    });
                    await vl(Dt),
                    s("ok", "Home video order updated")
                }
            } catch (U) {
                console.error(U),
                s("error", "拖拽排序保存失败")
            }
    }
    , [y, F, q, I, u, wt, ot, Et])
      , [za,pn] = b.useState(null)
      , [bn,qe] = b.useState(!1)
      , [Gl,Te] = b.useState("")
      , [Dn,kn] = b.useState("medium")
      , [gl,ln] = b.useState( () => Mu().initial)
      , qt = b.useRef(null)
      , [cl,ut] = b.useState("")
      , [_t,ol] = b.useState("")
      , [Ql,Rn] = b.useState(null)
      , [Bn,Zl] = b.useState("")
      , [Re,bt] = b.useState(!1)
      , Be = b.useRef(!1);
    b.useMemo( () => {
        if (!u || !I[u.id])
            return 0;
        let h = 0;
        return I[u.id].forEach(v => h += (v.url?.length || 0) * .75),
        h
    }
    , [u, I]),
    b.useEffect( () => {
        const h = () => $n(bc());
        return window.addEventListener("resize", h),
        () => window.removeEventListener("resize", h)
    }
    , []),
    b.useEffect( () => {
        ln(Jt.initial)
    }
    , [u?.id, Jt.initial]),
    b.useEffect( () => {
        if (o !== "album" || !u?.id)
            return;
        const h = () => zu();
        h();
        const v = window.requestAnimationFrame(h)
          , T = window.requestAnimationFrame( () => window.requestAnimationFrame(h))
          , X = window.setTimeout(h, 160);
        return () => {
            window.cancelAnimationFrame(v),
            window.cancelAnimationFrame(T),
            window.clearTimeout(X)
        }
    }
    , [o, u?.id]),
    b.useEffect( () => {
        if (o !== "biliGate" || !De)
            return;
        const h = () => zu();
        h();
        const v = window.requestAnimationFrame(h)
          , T = window.requestAnimationFrame( () => window.requestAnimationFrame(h))
          , X = window.setTimeout(h, 160);
        return () => {
            window.cancelAnimationFrame(v),
            window.cancelAnimationFrame(T),
            window.clearTimeout(X)
        }
    }
    , [o, De]),
    b.useEffect( () => {
        (async () => {
            try {
                const v = `${pp}?t=${Date.now()}`
                  , T = await ra(v, {
                    method: "GET"
                });
                if (!T.ok)
                    throw new Error(`load app.json failed: ${T.status}`);
                const X = await T.json()
                  , j = q0(X);
                Se(j.profile),
                te(j.albums),
                pe(j.photosByAlbumId),
                Zl(j.profile?.backgroundImage || ni),
                ze(!Bl)
            } catch (v) {
                console.warn("Failed to load remote app.json, falling back to bundled data.", v);
                const T = q0(ns);
                Se(T.profile),
                te(T.albums),
                pe(T.photosByAlbumId),
                Zl(T.profile?.backgroundImage || ni),
                ze(!Bl)
            } finally {
                Le(!1)
            }
        }
        )()
    }
    , []),
    b.useEffect( () => {
        let h = !1;
        return (async () => {
            try {
                const T = await Up();
                if (!h) {
                    const X = !!T?.authenticated;
                    E(X),
                    X || Pr("")
                }
            } catch {
                h || (E(!1),
                Pr(""))
            } finally {
                h || ae(!1)
            }
        }
        )(),
        () => {
            h = !0
        }
    }
    , []),
    b.useEffect( () => {
        if (_e)
            return;
        let h = !1;
        return Yp().then(v => {
            h || !Number.isFinite(Number(v?.totalViews)) || Se(T => ({
                ...T,
                siteViews: Number(v.totalViews)
            }))
        }
        ).catch( () => {}
        ),
        () => {
            h = !0
        }
    }
    , [_e]),
    b.useEffect( () => {
        const h = _t || q?.wechatQr;
        if (!h)
            return;
        let v = !1;
        const T = new Image;
        return T.onload = () => {
            v || bt(!0)
        }
        ,
        T.onerror = () => {
            v || bt(!1)
        }
        ,
        T.src = h,
        () => {
            v = !0
        }
    }
    , [_t, q?.wechatQr]),
    b.useEffect( () => {
        _e || pt.current || (pt.current = !0,
        Xp().then(h => {
            Number.isFinite(Number(h?.totalViews)) && Se(v => ({
                ...v,
                siteViews: Number(h.totalViews)
            }))
        }
        ).catch( () => {}
        ))
    }
    , [_e]),
    b.useEffect( () => {
        const h = u ? I[u.id] || [] : [];
        if (!(o === "album" && h.length > gl) || !qt.current)
            return;
        const T = new IntersectionObserver(X => {
            X[0]?.isIntersecting && ln(j => Math.min(j + Jt.step, h.length))
        }
        ,{
            rootMargin: "1200px 0px 800px 0px",
            threshold: .01
        });
        return T.observe(qt.current),
        () => T.disconnect()
    }
    , [o, u?.id, I, gl, Jt.step]);
    const it = b.useCallback( (h=null) => {
        if (!(typeof window > "u"))
            try {
                const v = new URL(window.location.href);
                h ? v.searchParams.set("album", String(h)) : v.searchParams.delete("album");
                const T = `${v.pathname}${v.search}${v.hash}`;
                window.history.replaceState(window.history.state, "", T)
            } catch {}
    }
    , [])
      , ft = b.useCallback( () => {
        d("home"),
        g(null),
        $t(null),
        ht(!1),
        it(null)
    }
    , [it])
      , Ul = b.useCallback( (h, v={}) => {
        if (!h?.id)
            return;
        const {pushHistory: T=!0, incrementViews: X=!0, syncUrl: j=!0} = v
          , G = (F || []).find(de => de.id === h.id) || h;
        if (T)
            try {
                (!window.history.state?.ljxAlbum || window.history.state?.albumId !== G?.id) && window.history.pushState({
                    ...window.history.state || {},
                    ljxAlbum: !0,
                    albumId: G?.id
                }, "")
            } catch {}
        if (j && it(G.id),
        d("album"),
        ln(Mu().initial),
        ht(!1),
        zu(),
        !X) {
            g(G);
            return
        }
        const U = (G.views || 0) + 1
          , ne = (F || []).map(de => de.id === G.id ? {
            ...de,
            views: U
        } : de)
          , le = ne.find(de => de.id === G.id) || {
            ...G,
            views: U
        };
        te(ne),
        g(le),
        Vp(G.id).then(de => {
            const xe = Number(de?.views);
            Number.isFinite(xe) && (te(J => (J || []).map(ge => ge.id === G.id ? {
                ...ge,
                views: xe
            } : ge)),
            g(J => J?.id === G.id ? {
                ...J,
                views: xe
            } : J))
        }
        ).catch( () => {}
        )
    }
    , [F, q, I, it])
      , Tt = b.useCallback(h => {
        Ul(h, {
            pushHistory: !0,
            incrementViews: !0,
            syncUrl: !0
        })
    }
    , [Ul]);
    b.useEffect( () => {
        if (_e || Be.current)
            return;
        Be.current = !0;
        let h = "";
        try {
            h = new URLSearchParams(window.location.search).get("album") || ""
        } catch {}
        if (!h)
            return;
        const v = (F || []).find(T => String(T.id) === String(h));
        if (!v || !y && v.visible === !1) {
            it(null);
            return
        }
        Ul(v, {
            pushHistory: !1,
            incrementViews: !0,
            syncUrl: !0
        })
    }
    , [_e, F, y, Ul, it]),
    b.useEffect( () => {
        const h = () => {
            if (o === "biliGate") {
                d(De?.fromView === "home" ? "home" : "album"),
                De?.fromView !== "album" && (g(null),
                it(null)),
                zt(null);
                return
            }
            o === "album" && Bt === null && ft()
        }
        ;
        return window.addEventListener("popstate", h),
        () => window.removeEventListener("popstate", h)
    }
    , [o, Bt, De?.fromView, ft, it]),
    b.useEffect( () => {
        const h = v => {
            if (Bt !== null && v.key === "Escape") {
                try {
                    if (window.history.state?.ljxLightbox) {
                        window.history.back();
                        return
                    }
                } catch {}
                $t(null)
            }
        }
        ;
        return window.addEventListener("keydown", h),
        () => window.removeEventListener("keydown", h)
    }
    , [Bt, u]);
    const nn = async h => {
        h.preventDefault();
        const v = new FormData(h.target)
          , T = String(v.get("adminPassword") || "").trim();
        let X = cl || q.avatar || ""
          , j = _t || q.wechatQr || "";
        try {
            X && typeof X == "string" && X.startsWith("data:image") && (qe(!0),
            Te("上传头像..."),
            X = await U0(X, "jpg")),
            j && typeof j == "string" && j.startsWith("data:image") && (qe(!0),
            Te("上传二维码..."),
            j = await U0(j, "jpg"));
            const G = {
                name: v.get("name") || "",
                bio: v.get("bio") || "",
                phone: v.get("phone") || "",
                wechatId: v.get("wechatId") || "",
                categories: Array.isArray(q.categories) ? q.categories : [],
                backgroundImage: q.backgroundImage || Bn || ni,
                avatar: X,
                wechatQr: j,
                siteViews: typeof q.siteViews == "number" ? q.siteViews : 0,
                homeVideos: Array.isArray(q.homeVideos) ? q.homeVideos : []
            };
            Se(G),
            ut(""),
            ol(""),
            Y(!1),
            qe(!0),
            T && (Te("更新管理员密码..."),
            await qp(T)),
            Te("保存资料...");
            const U = xl({
                profile: G,
                albums: F,
                photosByAlbumId: I
            });
            await vl(U),
            s("ok", "Profile saved")
        } catch (G) {
            console.error(G),
            s("error", "Save failed: " + (G?.message || String(G)))
        } finally {
            qe(!1),
            Te("")
        }
    }
      , Hl = async h => {
        const v = Array.from(new Set((h || []).map(j => String(j).trim()).filter(Boolean)))
          , T = (F || []).map(j => ({
            ...j,
            categories: Array.isArray(j.categories) ? j.categories.filter(G => v.includes(G)) : []
        }))
          , X = {
            ...q,
            categories: v,
            homeVideos: (Array.isArray(q.homeVideos) ? q.homeVideos : []).map(j => ({
                ...j,
                categories: Array.isArray(j.categories) ? j.categories.filter(G => v.includes(G)) : []
            }))
        };
        try {
            Se(X),
            te(T),
            qe(!0),
            Te("保存分类...");
            const j = xl({
                profile: X,
                albums: T,
                photosByAlbumId: I
            });
            await vl(j),
            s("ok", "Categories saved")
        } catch (j) {
            console.error(j),
            s("error", "Save failed: " + (j?.message || String(j)))
        } finally {
            qe(!1),
            Te("")
        }
    }
      , $l = async h => {
        h.preventDefault();
        const v = new FormData(h.target)
          , T = (v.get("title") || "").toString().trim();
        if (!T)
            return;
        const X = (v.get("description") || "").toString()
          , j = v.get("visible") === "on"
          , G = v.getAll("categories").map(J => String(J)).filter(Boolean)
          , U = !!Zt?.id
          , ne = U ? Zt.id : String(Date.now())
          , le = Zt?.cover || ""
          , de = {
            id: ne,
            title: T,
            description: X,
            cover: le,
            order: U ? Zt.order ?? 0 : F.length ? Math.max(...F.map(J => J.order ?? 0)) + 1 : 0,
            homeOrder: U ? Zt.homeOrder ?? Zt.order ?? 0 : F.length ? Math.max(...F.map(J => J.homeOrder ?? J.order ?? 0)) + 1 : 0,
            views: U ? Zt.views ?? 0 : 0,
            visible: j,
            categories: G,
            watermark: U ? Zt.watermark || {
                enabled: !1
            } : {
                enabled: !1
            }
        }
          , xe = U ? F.map(J => J.id === ne ? {
            ...J,
            ...de
        } : J) : [...F, de];
        te(xe),
        _l(null),
        Ce(!1),
        I[ne] || pe(J => ({
            ...J,
            [ne]: []
        }));
        try {
            qe(!0),
            Te("保存相册...");
            const J = xl({
                profile: q,
                albums: xe,
                photosByAlbumId: {
                    ...I,
                    [ne]: I[ne] || []
                }
            });
            await vl(J)
        } catch (J) {
            console.error(J),
            alert("Operation failed: " + (J?.message || String(J)))
        } finally {
            qe(!1),
            Te("")
        }
    }
      , Un = async () => {
        const h = Cn
          , v = I[h] || []
          , T = [];
        if (v.forEach(G => {
            ml(G) || (G.keys && T.push(...Object.values(G.keys)),
            G.urls && T.push(...Object.values(G.urls).map(hc)),
            G.url && T.push(hc(G.url)))
        }
        ),
        T.length)
            try {
                Te("删除 OSS 相册文件..."),
                await R0(T)
            } catch (G) {
                console.warn("Failed to delete OSS files, continuing with index cleanup.", G)
            }
        if (!h)
            return;
        const X = F.filter(G => G.id !== h)
          , j = {
            ...I
        };
        delete j[h],
        te(X),
        pe(j),
        At(null),
        u?.id === h && ft();
        try {
            qe(!0),
            Te("删除相册并保存...");
            const G = xl({
                profile: q,
                albums: X,
                photosByAlbumId: j
            });
            await vl(G)
        } catch (G) {
            console.error(G),
            alert("Operation failed: " + (G?.message || String(G)))
        } finally {
            qe(!1),
            Te("")
        }
    }
      , an = b.useCallback(async h => {
        if (!h || !u?.id)
            return;
        const v = u.id
          , T = (I[v] || []).find(ne => ne.id === h)
          , X = [];
        if (T && !ml(T)) {
            const ne = T.keys ? Object.values(T.keys) : []
              , le = T.urls ? Object.values(T.urls).map(hc) : []
              , de = T.url ? [hc(T.url)] : [];
            X.push(...ne, ...le, ...de)
        }
        const j = (I[v] || []).filter(ne => ne.id !== h).map( (ne, le) => ({
            ...ne,
            order: le
        }))
          , G = {
            ...I,
            [v]: j
        };
        let U = F;
        if (u.cover) {
            const ne = (I[v] || []).find(le => le.id === h);
            ne && ne.url === u.cover && (U = F.map(le => le.id === v ? {
                ...le,
                cover: ""
            } : le),
            te(U),
            g(le => le && {
                ...le,
                cover: ""
            }))
        }
        pe(G);
        try {
            qe(!0),
            Te("删除照片并保存...");
            try {
                Te("删除 OSS 文件..."),
                await R0(X)
            } catch (le) {
                console.warn("Failed to delete OSS files, continuing with index cleanup.", le)
            }
            const ne = xl({
                profile: q,
                albums: U,
                photosByAlbumId: G
            });
            await vl(ne)
        } catch (ne) {
            console.error(ne),
            alert("Operation failed: " + (ne?.message || String(ne)))
        } finally {
            qe(!1),
            Te("")
        }
    }
    , [u, I, F, q])
      , Jn = async h => {
        const v = Array.from(h.target.files || []);
        if (!v.length || !u?.id)
            return;
        qe(!0);
        let T = 0;
        const X = u.id
          , j = I[X] || []
          , G = [];
        try {
            for (const J of v) {
                T++,
                Te(`处理中 ${T} / ${v.length}
压缩并上传 OSS...`);
                const ge = `${Date.now()}_${sr(12)}`
                  , Yt = await Rp(J)
                  , He = Dn || "medium";
                let fl = null
                  , dt = null
                  , Dt = J.size;
                if (He === "original") {
                    Te(`处理中 ${T} / ${v.length}
上传原图...`);
                    const Ne = await Qp({
                        file: J,
                        keyBase: ge
                    });
                    fl = {
                        url: Ne.url,
                        key: Ne.key
                    },
                    dt = Ne.variantSourceBlob || J,
                    Dt = Ne.displaySize || J.size
                } else {
                    const Ne = D0[He] || D0.medium;
                    Te(`处理中 ${T} / ${v.length}
生成 ${He}...`);
                    const rt = await nh(J, {
                        maxSide: Ne.maxSide,
                        quality: Ne.quality
                    });
                    Dt = rt.size,
                    dt = rt;
                    const at = `photos/${ge}.jpg`;
                    Te(`处理中 ${T} / ${v.length}
上传 ${He}...`),
                    fl = await cr({
                        blob: rt,
                        key: at,
                        contentType: "image/jpeg"
                    })
                }
                Te(`处理中 ${T} / ${v.length}
生成并上传 w800/w2048...`);
                const nt = await B0(dt || J, {
                    maxSide: 800,
                    quality: .8
                })
                  , yl = await B0(dt || J, {
                    maxSide: 2048,
                    quality: .85
                })
                  , m = await cr({
                    blob: nt,
                    key: `photos/${ge}_w800.webp`,
                    contentType: "image/webp"
                })
                  , w = await cr({
                    blob: yl,
                    key: `photos/${ge}_w2048.webp`,
                    contentType: "image/webp"
                })
                  , S = Yt ? {
                    ...Yt,
                    __size: Dt
                } : {
                    __size: Dt
                }
                  , ie = `${Date.now()}_${sr(10)}`
                  , K = {
                    main: fl.url,
                    original: fl.url,
                    w800: m.url,
                    w2048: w.url
                }
                  , ee = {
                    main: fl.key,
                    w800: m.key,
                    w2048: w.key
                }
                  , Me = He;
                G.push({
                    id: ie,
                    kind: pc,
                    url: K.main,
                    urls: K,
                    keys: ee,
                    sizeMode: Me,
                    originalName: J.name,
                    originalSize: J.size,
                    exif: S || void 0,
                    createdAt: Date.now(),
                    order: 0
                }),
                await new Promise(Ne => setTimeout(Ne, 30))
            }
            const U = [...j, ...G].map( (J, ge) => ({
                ...J,
                order: ge
            }))
              , ne = {
                ...I,
                [X]: U
            };
            pe(ne);
            let le = F;
            const de = F.find(J => J.id === X);
            if (de && (!de.cover || de.cover === "")) {
                const J = U[0]?.url || "";
                le = F.map(ge => ge.id === X ? {
                    ...ge,
                    cover: J
                } : ge),
                te(le),
                g({
                    ...de,
                    cover: J
                })
            }
            Te("保存数据到云端...");
            const xe = xl({
                profile: q,
                albums: le,
                photosByAlbumId: ne
            });
            await vl(xe)
        } catch (U) {
            console.error(U),
            alert("Operation failed: " + (U?.message || String(U)))
        } finally {
            qe(!1),
            Te("");
            try {
                h.target.value = ""
            } catch {}
        }
    }
      , Fn = b.useCallback( (h, v="album") => {
        const T = _n(h?.biliUrl || h?.bvid || "");
        if (!T) {
            alert("无效的 B站链接");
            return
        }
        if (!rh()) {
            window.open(T, "_blank", "noopener,noreferrer");
            return
        }
        try {
            window.history.pushState({
                ...window.history.state || {},
                ljxBiliGate: !0,
                bvid: zl(T)
            }, "")
        } catch {}
        zt({
            ...h,
            biliUrl: T,
            fromView: v
        }),
        d("biliGate")
    }
    , [])
      , oi = b.useCallback( () => {
        try {
            if (window.history.state?.ljxBiliGate) {
                window.history.back();
                return
            }
        } catch {}
        d(De?.fromView === "home" ? "home" : "album"),
        zt(null)
    }
    , [De?.fromView])
      , Wn = async h => {
        if (!u?.id)
            return;
        const v = u.id
          , T = zl(h?.bvid || h?.biliUrl || "")
          , X = _n(T)
          , j = String(h?.title || "").trim() || `B站视频 ${T}`
          , G = ii(h?.cover) || en;
        if (!T || !X) {
            alert("请输入有效的 B站链接 / BV 号");
            return
        }
        const U = I[v] || []
          , le = [{
            id: `${Date.now()}_${sr(10)}`,
            kind: ri,
            bvid: T,
            biliUrl: X,
            title: j,
            cover: G,
            url: G,
            duration: Number(h?.duration) || 0,
            ownerName: String(h?.ownerName || "").trim(),
            createdAt: Date.now(),
            order: 0
        }, ...U].map( (ge, Yt) => ({
            ...ge,
            order: Yt
        }))
          , de = {
            ...I,
            [v]: le
        };
        pe(de),
        B(!1);
        let xe = F;
        const J = F.find(ge => ge.id === v);
        J && (!J.cover || J.cover === "") && G !== en && (xe = F.map(ge => ge.id === v ? {
            ...ge,
            cover: G
        } : ge),
        te(xe),
        g(ge => ge && {
            ...ge,
            cover: G
        }));
        try {
            qe(!0),
            Te("保存视频卡片...");
            const ge = xl({
                profile: q,
                albums: xe,
                photosByAlbumId: de
            });
            await vl(ge),
            alert("已添加 B站视频")
        } catch (ge) {
            console.error(ge),
            alert("保存失败: " + (ge?.message || String(ge)))
        } finally {
            qe(!1),
            Te("")
        }
    }
      , Hn = async h => {
        const v = zl(h?.bvid || h?.biliUrl || "")
          , T = _n(v)
          , X = String(h?.title || "").trim() || `B站视频 ${v}`
          , j = ii(h?.cover) || en;
        if (!v || !T) {
            alert("请输入有效的 B站链接 / BV 号");
            return
        }
        const G = Array.isArray(q.homeVideos) ? q.homeVideos : []
          , U = Math.max(...F.map(He => He.homeOrder ?? He.order ?? 0), ...G.map(He => He.homeOrder ?? 1e5 + (He.order ?? 0)), -1)
          , ne = Array.isArray(q.categories) ? q.categories : []
          , le = (Array.isArray(h?.categories) ? h.categories : []).map(He => String(He || "").trim()).filter(He => He && ne.includes(He))
          , de = wt && wt !== "全部" && ne.includes(wt) ? [wt] : []
          , xe = le.length > 0 ? Array.from(new Set(le)) : de
          , ge = [{
            id: `${Date.now()}_${sr(10)}`,
            kind: ri,
            bvid: v,
            biliUrl: T,
            title: X,
            cover: j,
            url: j,
            duration: Number(h?.duration) || 0,
            ownerName: String(h?.ownerName || "").trim(),
            visible: !0,
            categories: xe,
            createdAt: Date.now(),
            order: 0,
            homeOrder: U + 1
        }, ...G].map( (He, fl) => ({
            ...He,
            order: fl
        }))
          , Yt = {
            ...q,
            homeVideos: ge
        };
        Se(Yt),
        B(!1);
        try {
            qe(!0),
            Te("保存首页视频...");
            const He = xl({
                profile: Yt,
                albums: F,
                photosByAlbumId: I
            });
            await vl(He),
            alert("已添加首页视频")
        } catch (He) {
            console.error(He),
            alert("保存失败: " + (He?.message || String(He)))
        } finally {
            qe(!1),
            Te("")
        }
    }
      , el = async h => {
        if (!h)
            return;
        const v = (Array.isArray(q.homeVideos) ? q.homeVideos : []).filter(X => X.id !== h).sort( (X, j) => (X.homeOrder ?? 1e5 + (X.order ?? 0)) - (j.homeOrder ?? 1e5 + (j.order ?? 0))).map( (X, j) => ({
            ...X,
            order: j,
            homeOrder: X.homeOrder ?? 1e5 + j
        }))
          , T = {
            ...q,
            homeVideos: v
        };
        Se(T);
        try {
            qe(!0),
            Te("删除首页视频...");
            const X = xl({
                profile: T,
                albums: F,
                photosByAlbumId: I
            });
            await vl(X)
        } catch (X) {
            console.error(X),
            alert("删除失败: " + (X?.message || String(X)))
        } finally {
            qe(!1),
            Te("")
        }
    }
      , jl = async () => {
        if (!u?.id)
            return;
        const h = u.id
          , v = Array.isArray(I?.[h]) ? I[h] : [];
        if (v.length) {
            qe(!0);
            try {
                const T = [];
                for (let G = 0; G < v.length; G++) {
                    const U = v[G];
                    if (Te(`重新计算显示大小：${G + 1} / ${v.length}`),
                    ml(U)) {
                        T.push({
                            ...U,
                            exif: U.exif || void 0
                        }),
                        await new Promise(xe => setTimeout(xe, 20));
                        continue
                    }
                    const ne = U.url || U.urls?.main || U.urls?.medium || U.urls?.original || U.urls?.small || ""
                      , le = await eb(ne)
                      , de = {
                        ...U.exif || {}
                    };
                    le && (de.__size = le),
                    T.push({
                        ...U,
                        exif: de
                    }),
                    await new Promise(xe => setTimeout(xe, 20))
                }
                const X = {
                    ...I,
                    [h]: T
                };
                pe(X);
                const j = xl({
                    profile: q,
                    albums: F,
                    photosByAlbumId: X
                });
                await vl(j)
            } catch (T) {
                console.error(T),
                alert("Operation failed: " + (T?.message || String(T)))
            } finally {
                qe(!1),
                Te("")
            }
        }
    }
      , Ll = async (h, v, T) => {
        const X = h.get("watermarkType");
        if (!u?.id)
            return;
        je(!1),
        qe(!0);
        const j = u.id;
        try {
            const G = {
                enabled: !0,
                type: X === "image" ? "image" : "text",
                position: h.get("watermarkPosition") || "bottom-right",
                opacity: Number(h.get("watermarkOpacity") || .8),
                size: Number(h.get("watermarkSize") || .25)
            };
            if (G.type === "text")
                G.text = h.get("watermarkText") || "Ljx Photography",
                G.color = h.get("watermarkColor") === "black" ? "black" : "white";
            else if (v) {
                Te("Uploading watermark...");
                const le = await ah({
                    blob: v,
                    fileExt: "png"
                });
                G.imageUrl = le
            } else if (T?.imageUrl)
                G.imageUrl = T.imageUrl;
            else {
                alert("Please choose a watermark image."),
                qe(!1);
                return
            }
            const U = (F || []).map(le => le.id === j ? {
                ...le,
                watermark: G
            } : le);
            te(U),
            g(le => le && le.id === j ? {
                ...le,
                watermark: G
            } : le),
            Te("Saving watermark settings...");
            const ne = xl({
                profile: q,
                albums: U,
                photosByAlbumId: I
            });
            await vl(ne)
        } catch (G) {
            console.error(G),
            alert("Operation failed: " + (G?.message || String(G)))
        } finally {
            qe(!1),
            Te("")
        }
    }
      , sa = async () => {
        if (!u?.id)
            return;
        const h = u.id
          , v = I[h] || [];
        let T = I;
        if (v.some(j => j.originalUrl)) {
            const j = v.map( (G, U) => ({
                ...G,
                url: G.originalUrl || G.url,
                order: U
            }));
            T = {
                ...I,
                [h]: j
            },
            pe(T)
        }
        const X = (F || []).map(j => {
            if (j.id !== h)
                return j;
            const G = j.watermark && typeof j.watermark == "object" ? {
                ...j.watermark,
                enabled: !1
            } : {
                enabled: !1
            };
            return {
                ...j,
                watermark: G
            }
        }
        );
        te(X),
        g(j => j && j.id === h ? {
            ...j,
            watermark: X.find(G => G.id === h)?.watermark
        } : j),
        je(!1);
        try {
            qe(!0),
            Te("Disabling watermark...");
            const j = xl({
                profile: q,
                albums: X,
                photosByAlbumId: T
            });
            await vl(j)
        } catch (j) {
            console.error(j),
            alert("Operation failed: " + (j?.message || String(j)))
        } finally {
            qe(!1),
            Te("")
        }
    }
      , _a = () => {
        if (!q.phone)
            return;
        const h = document.createElement("textarea");
        h.value = q.phone,
        h.style.position = "fixed",
        h.style.left = "-9999px",
        document.body.appendChild(h),
        h.focus(),
        h.select();
        try {
            document.execCommand("copy") ? alert(`已复制：${q.phone}`) : prompt("请手动复制：", q.phone)
        } catch {
            prompt("请手动复制：", q.phone)
        }
        document.body.removeChild(h)
    }
      , ui = b.useCallback(async h => {
        const v = String(h || "").trim();
        if (!v) {
            R("请输入管理员密码");
            return
        }
        Z(!0),
        R("");
        try {
            const T = await Hp(v);
            Pr(T?.token || ""),
            E(!0),
            M(""),
            d("home")
        } catch (T) {
            Pr(""),
            E(!1),
            R(T?.message || "登录失败")
        } finally {
            Z(!1)
        }
    }
    , [])
      , ca = b.useCallback(async () => {
        try {
            await Lp()
        } catch {}
        Pr(""),
        E(!1),
        M(""),
        R("")
    }
    , [])
      , mr = async h => {
        const v = h?.target?.files?.[0];
        if (!v)
            return;
        const T = URL.createObjectURL(v)
          , X = Bn;
        Zl(T);
        try {
            qe(!0),
            Te("上传背景...");
            const j = await Gp(v, {
                maxSide: 2560,
                targetBytes: 900 * 1024,
                minQuality: .6,
                maxQuality: .9
            })
              , G = `backgrounds/${Date.now()}_${sr(10)}.jpg`
              , {url: U} = await cr({
                blob: j,
                key: G,
                contentType: "image/jpeg"
            });
            Zl(U);
            const ne = {
                ...q,
                backgroundImage: U
            };
            Se(ne);
            const le = xl({
                profile: ne,
                albums: F,
                photosByAlbumId: I
            });
            await vl(le),
            s("ok", "Background saved")
        } catch (j) {
            console.error(j),
            Zl(X),
            s("error", "Background save failed: " + (j?.message || String(j)))
        } finally {
            URL.revokeObjectURL(T),
            qe(!1),
            Te("")
        }
    }
      , tl = b.useCallback(async (h, v) => {
        if (h.stopPropagation(),
        !u?.id)
            return;
        const T = u.id
          , X = F.map(j => j.id === T ? {
            ...j,
            cover: v
        } : j);
        te(X),
        g(j => j && {
            ...j,
            cover: v
        });
        try {
            qe(!0),
            Te("设置封面并保存...");
            const j = xl({
                profile: q,
                albums: X,
                photosByAlbumId: I
            });
            await vl(j)
        } catch (j) {
            console.error(j),
            alert("Operation failed: " + (j?.message || String(j)))
        } finally {
            qe(!1),
            Te("")
        }
    }
    , [u, F, q, I])
      , Ue = u ? F.find(h => h.id === u.id) || u : null
      , rn = b.useCallback(h => {
        if (!h || typeof window > "u")
            return "";
        try {
            const v = new URL(window.location.href);
            return v.searchParams.set("album", String(h)),
            v.toString()
        } catch {
            return ""
        }
    }
    , [])
      , xn = () => u ? I[u.id] || [] : []
      , vn = () => xn().filter(h => L0(h))
      , Ca = b.useMemo( () => {
        const h = u ? I[u.id] || [] : [];
        return o === "album" && h.length > Jt.initial
    }
    , [u?.id, I, o, Jt.initial])
      , Ln = b.useMemo( () => {
        const h = u ? I[u.id] || [] : [];
        return Ca ? h.slice(0, gl) : h
    }
    , [u, I, Ca, gl])
      , ul = b.useMemo( () => Ln.map(h => h?.id).filter(Boolean), [Ln])
      , oa = b.useMemo( () => {
        if (!ul.length || !ot.length)
            return 0;
        const h = new Set(ul);
        return ot.filter(v => h.has(v)).length
    }
    , [ul, ot])
      , Oa = ul.length > 0 && oa === ul.length
      , fi = b.useCallback(h => {
        h && Ke(v => v.includes(h) ? v.filter(T => T !== h) : [...v, h])
    }
    , [])
      , ua = b.useCallback( () => {
        ul.length && Ke(h => {
            const v = new Set(h);
            if (ul.every(j => v.has(j)))
                return h.filter(j => !ul.includes(j));
            const X = new Set(h);
            return ul.forEach(j => X.add(j)),
            Array.from(X)
        }
        )
    }
    , [ul]);
    b.useEffect( () => {
        Ke([])
    }
    , [u?.id]);
    const Da = b.useMemo( () => {
        if (!u?.id)
            return I;
        const h = (I[u.id] || []).filter(v => L0(v));
        return {
            ...I,
            [u.id]: h
        }
    }
    , [I, u?.id])
      , qn = b.useCallback( (h, v) => {
        if (!Array.isArray(h) || v < 0)
            return;
        const T = new Set;
        [0, 1, -1, 2, -2].forEach(X => {
            const j = h[v + X];
            if (!j || ml(j))
                return;
            const G = cs(j)
              , U = j.urls?.w2048 || j.urls?.main || j.url || j.urls?.original || j.originalUrl || j.urls?.w800 || j.urls?.large || j.urls?.medium || j.urls?.small || G
              , ne = j.urls?.w800 || U;
            ne && T.add(ne),
            U && T.add(U)
        }
        ),
        T.forEach(X => uh(X))
    }
    , [])
      , In = b.useCallback( (h, v) => {
        if (!v)
            return;
        if (ml(v)) {
            Fn(v, "album");
            return
        }
        const T = vn()
          , X = T.findIndex(j => j.id === v.id);
        X < 0 || (qn(T, X),
        $t(X))
    }
    , [u?.id, I, Fn, qn])
      , Ol = () => {
        Bt < vn().length - 1 && (oe(1),
        $t(h => h + 1))
    }
      , di = () => {
        Bt > 0 && (oe(-1),
        $t(h => h - 1))
    }
    ;
    b.useEffect( () => {
        ["全部", ...Array.isArray(q.categories) ? q.categories : []].includes(Ve) || On("全部")
    }
    , [q.categories]);
    const ql = b.useMemo( () => {
        let h = y ? F : F.filter(v => v.visible !== !1);
        return wt && wt !== "全部" && (h = h.filter(v => Array.isArray(v.categories) && v.categories.includes(wt))),
        h
    }
    , [F, y, wt])
      , wn = b.useMemo( () => {
        let h = (Array.isArray(q.homeVideos) ? q.homeVideos : []).slice().sort( (v, T) => (v.order ?? 0) - (T.order ?? 0));
        return y || (h = h.filter(v => v.visible !== !1)),
        wt && wt !== "全部" && (h = h.filter(v => Array.isArray(v.categories) && v.categories.includes(wt))),
        h
    }
    , [q.homeVideos, y, wt])
      , Pn = b.useMemo( () => {
        const h = [];
        return ql.forEach( (v, T) => {
            const X = Number.isFinite(v?.homeOrder) ? v.homeOrder : Number.isFinite(v?.order) ? v.order : T;
            h.push({
                kind: "album",
                key: `album-${v.id}`,
                dragKey: `album:${v.id}`,
                homeOrder: X,
                album: v,
                albumIndex: T
            })
        }
        ),
        wn.forEach( (v, T) => {
            const X = Number.isFinite(v?.homeOrder) ? v.homeOrder : 1e5 + (Number.isFinite(v?.order) ? v.order : T);
            h.push({
                kind: "video",
                key: `home-video-${v.id}`,
                dragKey: `video:${v.id}`,
                homeOrder: X,
                video: v,
                homeVideoIndex: T
            })
        }
        ),
        h.sort( (v, T) => v.homeOrder - T.homeOrder || String(v.dragKey).localeCompare(String(T.dragKey))).map( (v, T) => ({
            ...v,
            renderIndex: T
        }))
    }
    , [ql, wn]);
    b.useEffect( () => {
        const h = new Set(ql.map(v => v.id));
        Ut(v => v.filter(T => h.has(T)))
    }
    , [ql]);
    const Dl = b.useCallback(h => {
        if (!h?.id)
            return h?.cover || "";
        const T = (Array.isArray(I?.[h.id]) ? I[h.id] : []).slice().sort( (U, ne) => (U?.order ?? 0) - (ne?.order ?? 0))
          , X = U => U ? ml(U) ? U.cover || U.url || "" : U.urls?.w800 || U.url || U.urls?.main || U.urls?.original || "" : ""
          , j = h?.cover || "";
        if (!j)
            return X(T[0]);
        const G = T.find(U => U?.url === j || U?.cover === j || U?.urls?.w800 === j || U?.urls?.main === j || U?.urls?.original === j);
        return G && X(G) || j
    }
    , [I])
      , sn = b.useCallback(h => {
        if (!h?.id)
            return Dl(h);
        const T = (Array.isArray(I?.[h.id]) ? I[h.id] : []).slice().sort( (J, ge) => (J?.order ?? 0) - (ge?.order ?? 0));
        if (!T.length)
            return Dl(h);
        const X = String(h?.cover || "").trim()
          , j = zl(X)
          , G = /bilibili\.com\/video\//i.test(X) || !!j
          , U = J => {
            const ge = ii(J?.cover || J?.url || "");
            return ai(ge) ? ge : ""
        }
          , ne = J => {
            if (!J)
                return "";
            if (ml(J))
                return U(J);
            const ge = J.urls?.w2048 || J.urls?.w800 || J.url || J.urls?.main || J.urls?.original || "";
            return ai(ge) ? ge : ""
        }
          , le = T.find(J => {
            if (!J)
                return !1;
            if (ml(J)) {
                const ge = zl(J.bvid || J.biliUrl || "");
                return J.cover === X || J.url === X || j && ge && j === ge
            }
            return J.url === X || J.urls?.w800 === X || J.urls?.w2048 === X || J.urls?.main === X || J.urls?.original === X
        }
        );
        if (le) {
            const J = ne(le);
            if (J)
                return J
        }
        if (T.every(J => ml(J))) {
            const J = U(T[0]);
            if (J)
                return J
        }
        if (X && !G && ai(X))
            return X;
        const xe = T.find(J => ml(J));
        if (xe) {
            const J = U(xe);
            if (J)
                return J
        }
        return Dl(h) || en
    }
    , [I, Dl])
      , Yn = b.useMemo( () => {
        if (!Ue?.id)
            return {
                covers: [],
                bvids: []
            };
        const v = (Array.isArray(I?.[Ue.id]) ? I[Ue.id] : []).slice().sort( (G, U) => (G?.order ?? 0) - (U?.order ?? 0))
          , T = []
          , X = [];
        v.forEach(G => {
            if (!ml(G))
                return;
            const U = ii(G?.cover || G?.url || "");
            ai(U) && T.push(U);
            const ne = zl(G?.bvid || G?.biliUrl || G?.url || G?.cover || "");
            ne && X.push(ne)
        }
        );
        const j = zl(Ue?.cover || "");
        return j && X.unshift(j),
        {
            covers: Array.from(new Set(T)),
            bvids: Array.from(new Set(X))
        }
    }
    , [Ue?.id, Ue?.cover, I])
      , Kl = b.useMemo( () => Ue?.id ? rn(Ue.id) : "", [Ue?.id, rn])
      , kl = b.useMemo( () => Ue ? sn(Ue) : "", [Ue, sn]);
    return b.useEffect( () => {
        o !== "album" && ht(!1)
    }
    , [o]),
    _e ? r.jsx(ib, {}) : r.jsxs("div", {
        className: "min-h-screen text-gray-800 font-sans antialiased selection:bg-gray-900 selection:text-white relative pb-10",
        children: [r.jsx(nb, {
            bgImage: Bn,
            fallback: ni
        }), bn && r.jsx(ab, {
            processingStatus: Gl
        }), r.jsxs("nav", {
            className: "absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center transition-all duration-500",
            children: [r.jsx("div", {
                className: "font-bold tracking-widest text-xl cursor-pointer flex items-center gap-2 group",
                onClick: ft,
                children: r.jsx("span", {
                    className: "font-bold text-lg sm:text-xl text-gray-900",
                    children: "Ljx Space"
                })
            }), r.jsxs("div", {
                className: "flex gap-3 items-center",
                children: [o === "home" && r.jsxs("div", {
                    className: "flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-gray-700 bg-white/55 backdrop-blur-sm border border-white/60 shadow-sm",
                    children: [r.jsx(Tu, {
                        size: 12,
                        className: "text-gray-400"
                    }), r.jsxs("span", {
                        className: "tracking-wider",
                        children: ["全站访问次数：", q.siteViews ?? 0, "次"]
                    })]
                }), r.jsxs("div", {
                    className: `hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${Xe ? "bg-green-50 text-green-700 border-green-200" : "bg-gray-50 text-gray-500 border-gray-200"} bg-white/40 backdrop-blur-sm`,
                    children: [Xe ? r.jsx(jy, {
                        size: 12
                    }) : r.jsx(wy, {
                        size: 12
                    }), Xe ? "Auto-Saved" : "Local Demo"]
                }), y && r.jsxs("label", {
                    className: `cursor-pointer w-10 h-10 flex items-center justify-center rounded-full ${Ml}`,
                    title: "更换全局背景",
                    children: [r.jsx(yc, {
                        size: 18
                    }), r.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        onChange: mr
                    })]
                }), y ? r.jsx("button", {
                    onClick: ca,
                    className: `text-xs px-5 py-2 rounded-full font-medium ${Ml}`,
                    children: "退出"
                }) : r.jsx("button", {
                    onClick: () => {
                        R(""),
                        M(""),
                        d("login")
                    }
                    ,
                    className: "p-2.5 rounded-full hover:bg-white/40 text-gray-500 hover:text-gray-900 transition-colors",
                    children: r.jsx(z0, {
                        size: 18
                    })
                })]
            })]
        }), o === "home" && r.jsxs("div", {
            className: "min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto flex flex-col",
            children: [r.jsxs("header", {
                className: "mb-6 sm:mb-16 lg:mb-20 flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10 lg:gap-12 animate-fade-in-up",
                children: [r.jsxs("div", {
                    className: "relative group shrink-0",
                    children: [r.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-tr from-gray-200 to-white rounded-full blur-3xl opacity-60 group-hover:scale-110 transition-transform"
                    }), r.jsx("img", {
                        src: q?.avatar || rs,
                        alt: "Avatar",
                        className: "relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-[4px] sm:border-[6px] border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.1)]",
                        loading: "eager",
                        decoding: "async",
                        fetchPriority: "high",
                        onError: h => {
                            h.currentTarget.dataset.fallbackApplied || (h.currentTarget.dataset.fallbackApplied = "1",
                            h.currentTarget.src = rs)
                        }
                    }), y && r.jsx("button", {
                        onClick: () => {
                            ut(q.avatar),
                            ol(q.wechatQr),
                            Y(!0)
                        }
                        ,
                        className: "absolute bottom-0 right-0 p-2.5 bg-white text-gray-800 rounded-full shadow-lg border border-gray-100 hover:scale-110 transition-transform z-10",
                        title: "编辑资料",
                        children: r.jsx(_0, {
                            size: 16
                        })
                    })]
                }), r.jsxs("div", {
                    className: "text-center md:text-left pt-0 -mt-4 md:-mt-6 flex-1",
                    children: [r.jsx("div", {
                        className: "relative",
                        children: r.jsx(rb, {
                            speed: .5,
                            delay: 1.2,
                            className: "block text-4xl sm:text-5xl md:text-6xl font-bold mb-2 tracking-tight leading-tight pb-2 text-center md:text-left mx-auto md:mx-0",
                            children: q.name
                        })
                    }), r.jsx("p", {
                        className: "text-base sm:text-lg text-gray-600 max-w-xl font-light leading-relaxed mb-5 sm:mb-6 tracking-wide whitespace-pre-line text-center md:text-left",
                        children: q.bio
                    }), r.jsxs("div", {
                        children: [r.jsxs("div", {
                            className: "flex flex-wrap justify-center md:justify-start gap-3 sm:gap-6 text-gray-500",
                            children: [r.jsxs(_u, {
                                overLight: !0,
                                onClick: _a,
                                className: "group text-sm font-medium text-gray-800 cursor-copy",
                                padding: "10px 16px",
                                children: [r.jsx(F0, {
                                    size: 16,
                                    className: "text-gray-400 group-hover:text-gray-800 transition-colors"
                                }), r.jsx("span", {
                                    className: "group-hover:text-gray-900 transition-colors",
                                    children: q.phone
                                })]
                            }), r.jsxs(_u, {
                                overLight: !0,
                                onClick: () => ce(!0),
                                className: "group text-sm font-medium text-gray-800",
                                padding: "10px 16px",
                                children: [r.jsx(Xu, {
                                    size: 16,
                                    className: "text-gray-400 group-hover:text-green-600 transition-colors"
                                }), r.jsx("span", {
                                    className: "group-hover:text-green-700 transition-colors",
                                    children: "WeChat"
                                })]
                            })]
                        }), r.jsxs("p", {
                            className: "mt-3.5 mb-0 text-xs text-gray-500 md:hidden",
                            children: ["推荐使用", r.jsx("span", {
                                className: "font-semibold text-gray-700",
                                children: "电脑端"
                            }), "浏览器访问本站（Chrome/Edge）"]
                        })]
                    })]
                })]
            }), r.jsxs("div", {
                className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-4 sm:mb-10 pb-4 border-b border-gray-900/5 gap-4",
                children: [r.jsx("div", {
                    className: "flex-1 min-w-0 -mt-2 sm:mt-0",
                    children: r.jsx("div", {
                        className: "flex flex-wrap items-center justify-center sm:justify-start gap-2 py-1",
                        children: ["全部", ...Array.isArray(q.categories) ? q.categories : []].map(h => {
                            const v = Ve === h;
                            return r.jsx(_u, {
                                overLight: !0,
                                onClick: () => On(h),
                                padding: "10px 20px",
                                className: `shrink-0 text-xs font-bold tracking-wide transition-all ${v ? "is-active" : ""}`,
                                children: r.jsx("span", {
                                    children: h
                                })
                            }, h)
                        }
                        )
                    })
                }), y && r.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2 sm:justify-end",
                    children: [ql.length > 0 && r.jsxs(r.Fragment, {
                        children: [r.jsx("button", {
                            onClick: () => {
                                const h = ql.map(T => T.id)
                                  , v = h.length > 0 && h.every(T => Et.includes(T));
                                Ut(v ? [] : h)
                            }
                            ,
                            className: `flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold ${Ml}`,
                            children: ql.length > 0 && ql.every(h => Et.includes(h.id)) ? "取消全选" : "全选相册"
                        }), r.jsx("button", {
                            onClick: () => Ut([]),
                            className: `flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold ${Ml}`,
                            children: "清空选择"
                        })]
                    }), r.jsxs("button", {
                        onClick: () => Oe(!0),
                        className: `flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-semibold ${Ml}`,
                        children: [r.jsx(C0, {
                            size: 16
                        }), " 分类"]
                    }), r.jsxs("button", {
                        onClick: () => {
                            fe("home"),
                            B(!0)
                        }
                        ,
                        className: `flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-semibold ${Ml}`,
                        children: [r.jsx(_i, {
                            size: 16
                        }), " 首页视频"]
                    }), r.jsxs("button", {
                        onClick: () => {
                            _l(null),
                            Ce(!0)
                        }
                        ,
                        className: `flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full text-sm font-semibold ${Ml}`,
                        children: [r.jsx(Wy, {
                            size: 16
                        }), " New Album"]
                    })]
                })]
            }), r.jsx("div", {
                className: `grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-10 lg:gap-12 ${Lt}`,
                children: Pn.map(h => {
                    if (h.kind === "album") {
                        const j = h.album
                          , G = Dl(j);
                        return r.jsxs("div", {
                            onClick: () => Tt(j),
                            className: `group bento-card relative aspect-[5/8] sm:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer ${dr} ${zi} ${j.visible ? "" : "opacity-60 grayscale"}`,
                            style: {
                                transformStyle: "preserve-3d",
                                transition: "transform 220ms ease"
                            },
                            onMouseMove: U => xc(U.currentTarget, U),
                            onMouseLeave: U => wc(U.currentTarget),
                            draggable: y,
                            onDragStart: U => Pt(U, h.renderIndex, "homeCard", h.dragKey),
                            onDragOver: U => Vl(U, h.renderIndex, "homeCard", h.dragKey),
                            onDrag: U => Ot(U),
                            onDragEnd: U => Kn(U, "homeCard"),
                            children: [y && r.jsxs("label", {
                                className: `absolute top-4 left-4 z-30 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold bg-white/95 backdrop-blur-sm shadow-sm ${Et.includes(j.id) ? "border-gray-900 text-gray-900" : "border-gray-200 text-gray-500"}`,
                                onClick: U => {
                                    U.stopPropagation()
                                }
                                ,
                                children: [r.jsx("input", {
                                    type: "checkbox",
                                    checked: Et.includes(j.id),
                                    onChange: () => {
                                        Ut(U => U.includes(j.id) ? U.filter(ne => ne !== j.id) : [...U, j.id])
                                    }
                                    ,
                                    className: "accent-gray-900 w-4 h-4"
                                }), "选中"]
                            }), r.jsxs("div", {
                                className: "absolute top-1 left-1 right-1 bottom-[64px] rounded-xl sm:top-2 sm:left-2 sm:right-2 sm:bottom-[100px] sm:rounded-2xl overflow-hidden shadow-inner",
                                children: [Zp(G) ? r.jsx("img", {
                                    src: G,
                                    className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                                    alt: "",
                                    loading: "lazy",
                                    decoding: "async",
                                    referrerPolicy: "no-referrer",
                                    onError: U => {
                                        if (U.currentTarget.dataset.fallbackApplied)
                                            return;
                                        U.currentTarget.dataset.fallbackApplied = "1";
                                        const ne = Dl(j) || j.cover || en;
                                        if (ne === U.currentTarget.src) {
                                            U.currentTarget.src = en;
                                            return
                                        }
                                        U.currentTarget.src = ne
                                    }
                                }) : r.jsx("div", {
                                    className: "w-full h-full bg-gradient-to-br from-gray-100 to-white"
                                }), r.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"
                                }), r.jsxs("div", {
                                    className: "absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white/90 text-[10px] sm:text-xs font-medium border border-white/10",
                                    children: [r.jsx(Tu, {
                                        size: 12
                                    }), " ", j.views || 0]
                                }), !j.visible && y && r.jsxs("div", {
                                    className: "absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-white text-[10px]",
                                    children: [r.jsx(Dy, {
                                        size: 10
                                    }), " Hidden"]
                                })]
                            }), r.jsxs("div", {
                                className: "absolute bottom-0 left-0 right-0 h-[64px] sm:h-[100px] flex flex-col justify-center px-2.5 sm:px-8",
                                children: [r.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [r.jsx("h3", {
                                        className: "text-[15px] sm:text-2xl font-bold text-gray-800 tracking-tight group-hover:text-black transition-colors",
                                        children: j.title
                                    }), r.jsx("span", {
                                        className: "text-[10px] sm:text-xs font-medium text-gray-400 bg-white/50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md backdrop-blur-sm border border-white/60",
                                        children: I[j.id]?.length || 0
                                    })]
                                }), r.jsx("p", {
                                    className: "text-gray-500 text-[11px] sm:text-sm mt-0.5 sm:mt-1 font-light truncate opacity-80 group-hover:opacity-100 transition-opacity",
                                    children: j.description
                                })]
                            }), y && r.jsxs("div", {
                                className: "absolute top-4 right-4 flex flex-col gap-3 z-20 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300",
                                children: [r.jsx("button", {
                                    onClick: U => {
                                        U.stopPropagation(),
                                        _l(j),
                                        Ce(!0)
                                    }
                                    ,
                                    className: "p-3 bg-white/90 rounded-full text-gray-800 shadow-xl hover:scale-110 transition-transform border border-white/50",
                                    children: r.jsx(_0, {
                                        size: 16
                                    })
                                }), r.jsx("button", {
                                    onClick: U => {
                                        U.stopPropagation(),
                                        At(j.id)
                                    }
                                    ,
                                    className: "p-3 bg-red-50/90 rounded-full text-red-500 shadow-xl hover:bg-red-500 hover:text-white transition-all border border-red-100",
                                    children: r.jsx(Ru, {
                                        size: 16
                                    })
                                })]
                            })]
                        }, h.key)
                    }
                    const v = h.video
                      , T = ss(v?.duration)
                      , X = v?.cover || v?.url || en;
                    return r.jsxs("div", {
                        onClick: () => {
                            y || Fn(v, "home")
                        }
                        ,
                        className: `group bento-card relative aspect-[5/8] sm:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden ${y ? "cursor-grab" : "cursor-pointer"} ${dr} ${zi}`,
                        style: {
                            transformStyle: "preserve-3d",
                            transition: "transform 220ms ease"
                        },
                        onMouseMove: j => xc(j.currentTarget, j),
                        onMouseLeave: j => wc(j.currentTarget),
                        draggable: y,
                        onDragStart: j => Pt(j, h.renderIndex, "homeCard", h.dragKey),
                        onDragEnter: j => Vl(j, h.renderIndex, "homeCard", h.dragKey),
                        onDragOver: j => Vl(j, h.renderIndex, "homeCard", h.dragKey),
                        onDrag: j => Ot(j),
                        onDragEnd: j => Kn(j, "homeCard"),
                        children: [r.jsxs("div", {
                            className: "absolute top-1 left-1 right-1 bottom-[64px] rounded-xl sm:top-2 sm:left-2 sm:right-2 sm:bottom-[100px] sm:rounded-2xl overflow-hidden shadow-inner",
                            children: [r.jsx("img", {
                                src: X,
                                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                                alt: "",
                                loading: "lazy",
                                decoding: "async",
                                referrerPolicy: "no-referrer",
                                onError: j => {
                                    j.currentTarget.dataset.fallbackApplied || (j.currentTarget.dataset.fallbackApplied = "1",
                                    j.currentTarget.src = en)
                                }
                            }), r.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none"
                            }), r.jsxs("div", {
                                className: "absolute left-2 right-2 bottom-2 sm:left-3 sm:right-3 sm:bottom-3 flex items-center justify-between text-white text-[10px] sm:text-xs",
                                children: [r.jsxs("span", {
                                    className: "inline-flex items-center gap-1 px-2 py-0.5 sm:gap-1.5 sm:px-2.5 sm:py-1 rounded-full bg-black/35 border border-white/10 backdrop-blur-sm font-semibold",
                                    children: [r.jsx(_i, {
                                        size: 13
                                    }), "B站视频"]
                                }), T ? r.jsx("span", {
                                    className: "px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/35 border border-white/10 backdrop-blur-sm font-semibold",
                                    children: T
                                }) : null]
                            })]
                        }), r.jsx("div", {
                            className: "absolute bottom-0 left-0 right-0 h-[64px] sm:h-[100px] flex flex-col justify-center px-2.5 sm:px-8",
                            children: r.jsx("div", {
                                className: "flex items-center",
                                children: r.jsx("h3", {
                                    className: "text-[14px] sm:text-xl font-bold text-gray-800 tracking-tight leading-snug line-clamp-2 sm:line-clamp-3",
                                    children: v?.title || "B站视频"
                                })
                            })
                        }), y && r.jsx("div", {
                            className: "absolute top-4 right-4 z-20 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300",
                            children: r.jsx("button", {
                                onClick: j => {
                                    j.stopPropagation(),
                                    el(v.id)
                                }
                                ,
                                className: "p-3 bg-red-50/90 rounded-full text-red-500 shadow-xl hover:bg-red-500 hover:text-white transition-all border border-red-100",
                                title: "删除首页视频",
                                children: r.jsx(Ru, {
                                    size: 16
                                })
                            })
                        })]
                    }, h.key)
                }
                )
            })]
        }), o === "album" && Ue && r.jsxs("div", {
            className: "min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20 px-3 sm:px-4",
            children: [r.jsxs("div", {
                className: "max-w-7xl mx-auto mb-10 sm:mb-16 animate-fade-in",
                children: [r.jsxs("div", {
                    className: y ? "flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 sm:mb-8" : "flex items-center justify-between gap-3 mb-6 sm:mb-8",
                    children: [r.jsxs("button", {
                        onClick: ft,
                        className: `flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full ${Ml} ios-pill-back`,
                        children: [r.jsx(Yu, {
                            size: 16
                        }), r.jsx("span", {
                            className: "text-sm font-semibold tracking-wide",
                            children: "BACK"
                        })]
                    }), y && r.jsxs("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [Ln.length > 0 && r.jsxs(r.Fragment, {
                            children: [r.jsxs("button", {
                                onClick: ua,
                                className: `flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium ${Ml}`,
                                children: [Oa ? "取消全选" : "全选可见", " (", oa, "/", Ln.length, ")"]
                            }), r.jsx("button", {
                                onClick: () => Ke([]),
                                className: `flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium ${Ml}`,
                                children: "清空选择"
                            })]
                        }), r.jsxs("button", {
                            onClick: () => {
                                _l(Ue),
                                Ce(!0)
                            }
                            ,
                            className: `flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-medium ${Ml}`,
                            children: [r.jsx(C0, {
                                size: 18
                            }), " 设置"]
                        }), r.jsxs("button", {
                            onClick: () => je(!0),
                            className: `flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-medium ${Ml}`,
                            children: [r.jsx(W0, {
                                size: 18
                            }), " 水印"]
                        }), r.jsxs("button", {
                            onClick: jl,
                            className: `flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-medium ${Ml}`,
                            children: [r.jsx(J0, {
                                size: 16
                            }), " 计算大小"]
                        }), r.jsx(sb, {
                            value: Dn,
                            onChange: kn
                        }), r.jsxs("button", {
                            onClick: () => {
                                fe("album"),
                                B(!0)
                            }
                            ,
                            className: `flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-medium ${Ml}`,
                            children: [r.jsx(_i, {
                                size: 16
                            }), " B站视频"]
                        }), r.jsxs("label", {
                            className: "cursor-pointer flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-gray-900 text-white shadow-xl shadow-gray-900/20 hover:bg-gray-800 transition-all active:scale-95",
                            children: [r.jsx(Vu, {
                                size: 18
                            }), r.jsx("span", {
                                className: "text-sm font-bold",
                                children: "上传"
                            }), r.jsx("input", {
                                type: "file",
                                multiple: !0,
                                accept: "image/*",
                                className: "hidden",
                                onChange: Jn
                            })]
                        })]
                    }), !y && r.jsxs("button", {
                        onClick: () => ht(!0),
                        className: `flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-semibold ${Ml}`,
                        children: [r.jsx(ku, {
                            size: 16
                        }), " 分享相册"]
                    })]
                }), r.jsxs("div", {
                    className: "px-2",
                    children: [r.jsx("h1", {
                        className: `text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 tracking-tight ${Op} pr-8 pb-2 leading-tight`,
                        children: Ue.title
                    }), r.jsxs("div", {
                        className: "flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-gray-600",
                        children: [(Ue.description || "").trim() ? r.jsx("p", {
                            className: "text-base sm:text-lg max-w-2xl font-light leading-relaxed w-full sm:w-auto pl-0 sm:pl-6 border-l-0 sm:border-l-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-200",
                            children: Ue.description
                        }) : null, r.jsxs("span", {
                            className: "text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-400 flex items-center gap-1 self-start ml-auto opacity-70",
                            children: [r.jsx(Tu, {
                                size: 12
                            }), " ", Ue.views || 0]
                        })]
                    })]
                })]
            }), r.jsx("div", {
                className: "-mx-3 sm:mx-0",
                children: r.jsx(fh, {
                    photos: Ln,
                    isAdmin: y,
                    handleSetCover: tl,
                    handleDeletePhoto: an,
                    onPhotoClick: In,
                    handleDragStart: Pt,
                    handleDragOver: Vl,
                    handleDragMove: Ot,
                    handleDragEnd: Kn,
                    activeAlbum: Ue || u,
                    watermark: Ue?.watermark,
                    selectedPhotoIds: ot,
                    onTogglePhotoSelect: fi
                })
            }), Ca && Ln.length < xn().length && r.jsx("div", {
                ref: qt,
                className: "h-20 w-full flex justify-center items-center opacity-50",
                children: r.jsx(K0, {
                    className: "animate-spin text-gray-400"
                })
            })]
        }), o === "biliGate" && De && r.jsx(db, {
            item: De,
            onBack: oi
        }), o === "login" && r.jsx("div", {
            className: "min-h-screen flex items-center justify-center px-4 relative z-50",
            children: r.jsxs("form", {
                className: "w-full max-w-sm p-10 rounded-[32px] bg-white/70 backdrop-blur-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.12)] text-center border border-white/60",
                onSubmit: h => {
                    h.preventDefault(),
                    ui(_)
                }
                ,
                children: [r.jsx("div", {
                    className: "mb-6 w-14 h-14 bg-gradient-to-tr from-gray-100 to-white rounded-2xl flex items-center justify-center mx-auto text-gray-900 shadow-inner border border-white",
                    children: r.jsx(z0, {
                        size: 24
                    })
                }), r.jsx("h2", {
                    className: "text-2xl font-bold mb-2 text-gray-900",
                    children: "Admin Access"
                }), r.jsx("p", {
                    className: "text-gray-500 text-sm mb-8",
                    children: "Enter password to manage"
                }), r.jsx("input", {
                    type: "password",
                    placeholder: "Password",
                    value: _,
                    autoFocus: !0,
                    autoComplete: "current-password",
                    className: "w-full bg-white/60 border border-white rounded-2xl px-4 py-4 text-center tracking-[0.5em] focus:outline-none focus:ring-4 focus:ring-gray-100 focus:border-gray-300 mb-4 text-gray-900 shadow-inner text-lg placeholder:tracking-normal placeholder:text-gray-400",
                    onChange: h => M(h.target.value),
                    disabled: C || L
                }), p ? r.jsx("p", {
                    className: "mb-4 text-sm text-red-500",
                    children: p
                }) : r.jsx("div", {
                    className: "mb-4 text-xs text-gray-400",
                    children: L ? "正在检查登录状态..." : "输入管理员密码后进入管理模式"
                }), r.jsx("button", {
                    type: "submit",
                    disabled: C || L,
                    className: "w-full mb-4 py-3 bg-gray-900 text-white rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed",
                    children: C ? "登录中..." : "进入管理"
                }), r.jsx("button", {
                    type: "button",
                    onClick: () => d("home"),
                    className: "text-gray-400 hover:text-gray-800 text-sm font-medium transition-colors",
                    children: "Back to Portfolio"
                })]
            })
        }), wl && r.jsx("div", {
            className: "fixed left-0 top-0 z-[260] pointer-events-none",
            style: {
                transform: `translate3d(${wl.x - wl.width * .5}px, ${wl.y - 72}px, 0) rotate(2.5deg)`,
                transition: "opacity 120ms ease"
            },
            children: r.jsxs("div", {
                className: "rounded-[24px] border border-white/70 bg-white/88 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.22)] overflow-hidden",
                style: {
                    width: wl.width
                },
                children: [wl.src ? r.jsx("img", {
                    src: wl.src,
                    alt: "",
                    className: "block w-full h-auto max-h-44 object-cover",
                    draggable: !1
                }) : r.jsx("div", {
                    className: "h-32 w-full bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center text-gray-500",
                    children: r.jsx(yc, {
                        size: 28
                    })
                }), r.jsxs("div", {
                    className: "px-4 py-3",
                    children: [r.jsxs("div", {
                        className: "inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-3 py-1 text-[11px] font-semibold tracking-wide shadow-lg",
                        children: [r.jsx($y, {
                            size: 12
                        }), "拖动中"]
                    }), r.jsx("p", {
                        className: "mt-2 text-sm font-semibold text-gray-800 line-clamp-2 break-words",
                        children: wl.title
                    })]
                })]
            })
        }), r.jsx(cb, {
            isOpen: N,
            onClose: () => Y(!1),
            profile: q,
            onSave: nn,
            tempAvatar: cl,
            setTempAvatar: ut,
            tempQr: _t,
            setTempQr: ol
        }), r.jsx(ob, {
            isOpen: be,
            onClose: () => Ce(!1),
            editingAlbum: Zt,
            onSave: $l,
            categoryOptions: Array.isArray(q.categories) ? q.categories : []
        }), r.jsx(fb, {
            isOpen: $e,
            onClose: () => B(!1),
            onSave: P === "home" ? Hn : Wn,
            modalTitle: P === "home" ? "添加首页视频" : "添加 B站视频",
            enableCategories: P === "home",
            categoryOptions: Array.isArray(q.categories) ? q.categories : [],
            defaultCategories: P === "home" && wt !== "全部" ? [wt] : []
        }), r.jsx(hb, {
            isOpen: Cn !== null,
            onClose: () => At(null),
            onConfirm: Un
        }), r.jsx(gb, {
            isOpen: W,
            onClose: () => ce(!1),
            profile: q
        }), r.jsx(Tb, {
            isOpen: Fe && !y && o === "album" && !!Ue,
            onClose: () => ht(!1),
            album: Ue,
            coverSrc: kl,
            videoCoverCandidates: Yn.covers,
            videoBvidHints: Yn.bvids,
            shareUrl: Kl,
            siteName: q?.name || "LJX Space"
        }), r.jsx(mb, {
            isOpen: we,
            onClose: () => je(!1),
            onApply: Ll,
            onRemove: sa,
            currentWatermark: Ue?.watermark
        }), r.jsx(ub, {
            isOpen: Ze,
            onClose: () => Oe(!1),
            categories: Array.isArray(q.categories) ? q.categories : [],
            onSave: Hl
        }), Bt !== null && !!u && r.jsx(Ob, {
            lightboxIndex: Bt,
            activeAlbum: Ue || u,
            photos: Da,
            onClose: () => {
                oe(0),
                $t(null)
            }
            ,
            onPrev: di,
            onNext: Ol,
            navDir: hl
        }), r.jsx("style", {
            children: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }

        /* Lightbox image enter animations */
        .lb-img.lb-in-from-right { animation: lbInFromRight 0.22s ease-out; }
        .lb-img.lb-in-from-left { animation: lbInFromLeft 0.22s ease-out; }
        .lb-img.lb-fade { animation: lbFade 0.18s ease-out; }
        @keyframes lbInFromRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes lbInFromLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes lbFade { from { opacity: 0; } to { opacity: 1; } }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .drag-source-active {
          opacity: 0.88 !important;
          visibility: visible !important;
          filter: saturate(0.92);
        }

        .drag-source-active .photo-glass {
          transform: scale(0.985);
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.22);
        }

        .masonry-reveal { opacity: 1; transition: opacity 0.35s ease; }
        .masonry-reveal.is-loaded { opacity: 1; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `
        }), r.jsx("footer", {
            className: "w-full text-center text-xs text-gray-500 mt-10 pb-6",
            children: r.jsx("a", {
                href: "https://beian.miit.gov.cn",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-gray-700 transition-colors",
                children: "蜀ICP备2026005435号"
            })
        })]
    })
}
ey.createRoot(document.getElementById("root")).render(r.jsx(b.StrictMode, {
    children: r.jsx(kb, {})
}));
