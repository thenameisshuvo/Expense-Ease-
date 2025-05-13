function jp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Op(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Vp = { exports: {} },
  fa = {},
  Ip = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wo = Symbol.for("react.element"),
  f0 = Symbol.for("react.portal"),
  d0 = Symbol.for("react.fragment"),
  h0 = Symbol.for("react.strict_mode"),
  p0 = Symbol.for("react.profiler"),
  m0 = Symbol.for("react.provider"),
  g0 = Symbol.for("react.context"),
  y0 = Symbol.for("react.forward_ref"),
  v0 = Symbol.for("react.suspense"),
  x0 = Symbol.for("react.memo"),
  w0 = Symbol.for("react.lazy"),
  Ff = Symbol.iterator;
function S0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ff && e[Ff]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zp = Object.assign,
  Bp = {};
function oi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bp),
    (this.updater = n || Fp);
}
oi.prototype.isReactComponent = {};
oi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
oi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Up() {}
Up.prototype = oi.prototype;
function Wu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bp),
    (this.updater = n || Fp);
}
var Hu = (Wu.prototype = new Up());
Hu.constructor = Wu;
zp(Hu, oi.prototype);
Hu.isPureReactComponent = !0;
var zf = Array.isArray,
  bp = Object.prototype.hasOwnProperty,
  Ku = { current: null },
  $p = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wp(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      bp.call(t, r) && !$p.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: wo,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Ku.current,
  };
}
function E0(e, t) {
  return {
    $$typeof: wo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wo;
}
function P0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Bf = /\/+/g;
function Ua(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? P0("" + e.key)
    : t.toString(36);
}
function as(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case wo:
          case f0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Ua(s, 0) : r),
      zf(i)
        ? ((n = ""),
          e != null && (n = e.replace(Bf, "$&/") + "/"),
          as(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Gu(i) &&
            (i = E0(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Bf, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), zf(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Ua(o, a);
      s += as(o, t, n, l, i);
    }
  else if (((l = S0(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Ua(o, a++)), (s += as(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Fo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    as(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function T0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var tt = { current: null },
  ls = { transition: null },
  C0 = {
    ReactCurrentDispatcher: tt,
    ReactCurrentBatchConfig: ls,
    ReactCurrentOwner: Ku,
  };
function Hp() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: Fo,
  forEach: function (e, t, n) {
    Fo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = oi;
X.Fragment = d0;
X.Profiler = p0;
X.PureComponent = Wu;
X.StrictMode = h0;
X.Suspense = v0;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C0;
X.act = Hp;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = zp({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Ku.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      bp.call(t, l) &&
        !$p.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: wo, type: e.type, key: i, ref: o, props: r, _owner: s };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: g0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: m0, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = Wp;
X.createFactory = function (e) {
  var t = Wp.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: y0, render: e };
};
X.isValidElement = Gu;
X.lazy = function (e) {
  return { $$typeof: w0, _payload: { _status: -1, _result: e }, _init: T0 };
};
X.memo = function (e, t) {
  return { $$typeof: x0, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = ls.transition;
  ls.transition = {};
  try {
    e();
  } finally {
    ls.transition = t;
  }
};
X.unstable_act = Hp;
X.useCallback = function (e, t) {
  return tt.current.useCallback(e, t);
};
X.useContext = function (e) {
  return tt.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return tt.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return tt.current.useEffect(e, t);
};
X.useId = function () {
  return tt.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return tt.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return tt.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return tt.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return tt.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return tt.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return tt.current.useRef(e);
};
X.useState = function (e) {
  return tt.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return tt.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return tt.current.useTransition();
};
X.version = "18.3.1";
Ip.exports = X;
var E = Ip.exports;
const ee = Op(E),
  k0 = jp({ __proto__: null, default: ee }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var R0 = E,
  D0 = Symbol.for("react.element"),
  L0 = Symbol.for("react.fragment"),
  M0 = Object.prototype.hasOwnProperty,
  _0 = R0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  N0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kp(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) M0.call(t, r) && !N0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: D0,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: _0.current,
  };
}
fa.Fragment = L0;
fa.jsx = Kp;
fa.jsxs = Kp;
Vp.exports = fa;
var k = Vp.exports,
  Gp = { exports: {} },
  vt = {},
  Yp = { exports: {} },
  Qp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, B) {
    var U = j.length;
    j.push(B);
    e: for (; 0 < U; ) {
      var Y = (U - 1) >>> 1,
        Z = j[Y];
      if (0 < i(Z, B)) (j[Y] = B), (j[U] = Z), (U = Y);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var B = j[0],
      U = j.pop();
    if (U !== B) {
      j[0] = U;
      e: for (var Y = 0, Z = j.length, ve = Z >>> 1; Y < ve; ) {
        var oe = 2 * (Y + 1) - 1,
          Te = j[oe],
          xe = oe + 1,
          Xe = j[xe];
        if (0 > i(Te, U))
          xe < Z && 0 > i(Xe, Te)
            ? ((j[Y] = Xe), (j[xe] = U), (Y = xe))
            : ((j[Y] = Te), (j[oe] = U), (Y = oe));
        else if (xe < Z && 0 > i(Xe, U)) (j[Y] = Xe), (j[xe] = U), (Y = xe);
        else break e;
      }
    }
    return B;
  }
  function i(j, B) {
    var U = j.sortIndex - B.sortIndex;
    return U !== 0 ? U : j.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    v = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(j) {
    for (var B = n(u); B !== null; ) {
      if (B.callback === null) r(u);
      else if (B.startTime <= j)
        r(u), (B.sortIndex = B.expirationTime), t(l, B);
      else break;
      B = n(u);
    }
  }
  function S(j) {
    if (((v = !1), m(j), !y))
      if (n(l) !== null) (y = !0), rt(R);
      else {
        var B = n(u);
        B !== null && H(S, B.startTime - j);
      }
  }
  function R(j, B) {
    (y = !1), v && ((v = !1), p(P), (P = -1)), (g = !0);
    var U = d;
    try {
      for (
        m(B), f = n(l);
        f !== null && (!(f.expirationTime > B) || (j && !K()));

      ) {
        var Y = f.callback;
        if (typeof Y == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var Z = Y(f.expirationTime <= B);
          (B = e.unstable_now()),
            typeof Z == "function" ? (f.callback = Z) : f === n(l) && r(l),
            m(B);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var ve = !0;
      else {
        var oe = n(u);
        oe !== null && H(S, oe.startTime - B), (ve = !1);
      }
      return ve;
    } finally {
      (f = null), (d = U), (g = !1);
    }
  }
  var x = !1,
    L = null,
    P = -1,
    _ = 5,
    A = -1;
  function K() {
    return !(e.unstable_now() - A < _);
  }
  function q() {
    if (L !== null) {
      var j = e.unstable_now();
      A = j;
      var B = !0;
      try {
        B = L(!0, j);
      } finally {
        B ? ae() : ((x = !1), (L = null));
      }
    } else x = !1;
  }
  var ae;
  if (typeof h == "function")
    ae = function () {
      h(q);
    };
  else if (typeof MessageChannel < "u") {
    var re = new MessageChannel(),
      $e = re.port2;
    (re.port1.onmessage = q),
      (ae = function () {
        $e.postMessage(null);
      });
  } else
    ae = function () {
      C(q, 0);
    };
  function rt(j) {
    (L = j), x || ((x = !0), ae());
  }
  function H(j, B) {
    P = C(function () {
      j(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), rt(R));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (j) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = d;
      }
      var U = d;
      d = B;
      try {
        return j();
      } finally {
        d = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, B) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var U = d;
      d = j;
      try {
        return B();
      } finally {
        d = U;
      }
    }),
    (e.unstable_scheduleCallback = function (j, B, U) {
      var Y = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? Y + U : Y))
          : (U = Y),
        j)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = U + Z),
        (j = {
          id: c++,
          callback: B,
          priorityLevel: j,
          startTime: U,
          expirationTime: Z,
          sortIndex: -1,
        }),
        U > Y
          ? ((j.sortIndex = U),
            t(u, j),
            n(l) === null &&
              j === n(u) &&
              (v ? (p(P), (P = -1)) : (v = !0), H(S, U - Y)))
          : ((j.sortIndex = Z), t(l, j), y || g || ((y = !0), rt(R))),
        j
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (j) {
      var B = d;
      return function () {
        var U = d;
        d = B;
        try {
          return j.apply(this, arguments);
        } finally {
          d = U;
        }
      };
    });
})(Qp);
Yp.exports = Qp;
var A0 = Yp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var j0 = E,
  gt = A0;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Xp = new Set(),
  Yi = {};
function hr(e, t) {
  Gr(e, t), Gr(e + "Capture", t);
}
function Gr(e, t) {
  for (Yi[e] = t, e = 0; e < t.length; e++) Xp.add(t[e]);
}
var tn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ll = Object.prototype.hasOwnProperty,
  O0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Uf = {},
  bf = {};
function V0(e) {
  return Ll.call(bf, e)
    ? !0
    : Ll.call(Uf, e)
    ? !1
    : O0.test(e)
    ? (bf[e] = !0)
    : ((Uf[e] = !0), !1);
}
function I0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function F0(e, t, n, r) {
  if (t === null || typeof t > "u" || I0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function nt(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    be[e] = new nt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  be[t] = new nt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  be[e] = new nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  be[e] = new nt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    be[e] = new nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  be[e] = new nt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  be[e] = new nt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  be[e] = new nt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  be[e] = new nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yu = /[\-:]([a-z])/g;
function Qu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yu, Qu);
    be[t] = new nt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yu, Qu);
    be[t] = new nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yu, Qu);
  be[t] = new nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  be[e] = new nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
be.xlinkHref = new nt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  be[e] = new nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xu(e, t, n, r) {
  var i = be.hasOwnProperty(t) ? be[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (F0(t, n, i, r) && (n = null),
    r || i === null
      ? V0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ln = j0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zo = Symbol.for("react.element"),
  Pr = Symbol.for("react.portal"),
  Tr = Symbol.for("react.fragment"),
  Zu = Symbol.for("react.strict_mode"),
  Ml = Symbol.for("react.profiler"),
  Zp = Symbol.for("react.provider"),
  Jp = Symbol.for("react.context"),
  Ju = Symbol.for("react.forward_ref"),
  _l = Symbol.for("react.suspense"),
  Nl = Symbol.for("react.suspense_list"),
  qu = Symbol.for("react.memo"),
  pn = Symbol.for("react.lazy"),
  qp = Symbol.for("react.offscreen"),
  $f = Symbol.iterator;
function pi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($f && e[$f]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pe = Object.assign,
  ba;
function ki(e) {
  if (ba === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ba = (t && t[1]) || "";
    }
  return (
    `
` +
    ba +
    e
  );
}
var $a = !1;
function Wa(e, t) {
  if (!e || $a) return "";
  $a = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ($a = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ki(e) : "";
}
function z0(e) {
  switch (e.tag) {
    case 5:
      return ki(e.type);
    case 16:
      return ki("Lazy");
    case 13:
      return ki("Suspense");
    case 19:
      return ki("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wa(e.type, !1)), e;
    case 11:
      return (e = Wa(e.type.render, !1)), e;
    case 1:
      return (e = Wa(e.type, !0)), e;
    default:
      return "";
  }
}
function Al(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tr:
      return "Fragment";
    case Pr:
      return "Portal";
    case Ml:
      return "Profiler";
    case Zu:
      return "StrictMode";
    case _l:
      return "Suspense";
    case Nl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jp:
        return (e.displayName || "Context") + ".Consumer";
      case Zp:
        return (e._context.displayName || "Context") + ".Provider";
      case Ju:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qu:
        return (
          (t = e.displayName || null), t !== null ? t : Al(e.type) || "Memo"
        );
      case pn:
        (t = e._payload), (e = e._init);
        try {
          return Al(e(t));
        } catch {}
    }
  return null;
}
function B0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Al(t);
    case 8:
      return t === Zu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Mn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function em(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function U0(e) {
  var t = em(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Bo(e) {
  e._valueTracker || (e._valueTracker = U0(e));
}
function tm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = em(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ts(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function jl(e, t) {
  var n = t.checked;
  return Pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Wf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Mn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function nm(e, t) {
  (t = t.checked), t != null && Xu(e, "checked", t, !1);
}
function Ol(e, t) {
  nm(e, t);
  var n = Mn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Vl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Vl(e, t.type, Mn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Hf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Vl(e, t, n) {
  (t !== "number" || Ts(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ri = Array.isArray;
function Br(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Mn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Il(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return Pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Kf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Ri(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Mn(n) };
}
function rm(e, t) {
  var n = Mn(t.value),
    r = Mn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Gf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function im(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? im(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Uo,
  om = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Uo = Uo || document.createElement("div"),
          Uo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Uo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ji = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  b0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ji).forEach(function (e) {
  b0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ji[t] = ji[e]);
  });
});
function sm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ji.hasOwnProperty(e) && ji[e])
    ? ("" + t).trim()
    : t + "px";
}
function am(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = sm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var $0 = Pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function zl(e, t) {
  if (t) {
    if ($0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Bl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
      return !0;
  }
}
var Ul = null;
function ec(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var bl = null,
  Ur = null,
  br = null;
function Yf(e) {
  if ((e = Po(e))) {
    if (typeof bl != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = ga(t)), bl(e.stateNode, e.type, t));
  }
}
function lm(e) {
  Ur ? (br ? br.push(e) : (br = [e])) : (Ur = e);
}
function um() {
  if (Ur) {
    var e = Ur,
      t = br;
    if (((br = Ur = null), Yf(e), t)) for (e = 0; e < t.length; e++) Yf(t[e]);
  }
}
function cm(e, t) {
  return e(t);
}
function fm() {}
var Ha = !1;
function dm(e, t, n) {
  if (Ha) return e(t, n);
  Ha = !0;
  try {
    return cm(e, t, n);
  } finally {
    (Ha = !1), (Ur !== null || br !== null) && (fm(), um());
  }
}
function Xi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ga(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var $l = !1;
if (tn)
  try {
    var mi = {};
    Object.defineProperty(mi, "passive", {
      get: function () {
        $l = !0;
      },
    }),
      window.addEventListener("test", mi, mi),
      window.removeEventListener("test", mi, mi);
  } catch {
    $l = !1;
  }
function W0(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Oi = !1,
  Cs = null,
  ks = !1,
  Wl = null,
  H0 = {
    onError: function (e) {
      (Oi = !0), (Cs = e);
    },
  };
function K0(e, t, n, r, i, o, s, a, l) {
  (Oi = !1), (Cs = null), W0.apply(H0, arguments);
}
function G0(e, t, n, r, i, o, s, a, l) {
  if ((K0.apply(this, arguments), Oi)) {
    if (Oi) {
      var u = Cs;
      (Oi = !1), (Cs = null);
    } else throw Error(N(198));
    ks || ((ks = !0), (Wl = u));
  }
}
function pr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function hm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Qf(e) {
  if (pr(e) !== e) throw Error(N(188));
}
function Y0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = pr(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Qf(i), e;
        if (o === r) return Qf(i), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function pm(e) {
  return (e = Y0(e)), e !== null ? mm(e) : null;
}
function mm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gm = gt.unstable_scheduleCallback,
  Xf = gt.unstable_cancelCallback,
  Q0 = gt.unstable_shouldYield,
  X0 = gt.unstable_requestPaint,
  Me = gt.unstable_now,
  Z0 = gt.unstable_getCurrentPriorityLevel,
  tc = gt.unstable_ImmediatePriority,
  ym = gt.unstable_UserBlockingPriority,
  Rs = gt.unstable_NormalPriority,
  J0 = gt.unstable_LowPriority,
  vm = gt.unstable_IdlePriority,
  da = null,
  Ut = null;
function q0(e) {
  if (Ut && typeof Ut.onCommitFiberRoot == "function")
    try {
      Ut.onCommitFiberRoot(da, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var jt = Math.clz32 ? Math.clz32 : n1,
  e1 = Math.log,
  t1 = Math.LN2;
function n1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((e1(e) / t1) | 0)) | 0;
}
var bo = 64,
  $o = 4194304;
function Di(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ds(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Di(a)) : ((o &= s), o !== 0 && (r = Di(o)));
  } else (s = n & ~i), s !== 0 ? (r = Di(s)) : o !== 0 && (r = Di(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - jt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function r1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function i1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - jt(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = r1(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Hl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function xm() {
  var e = bo;
  return (bo <<= 1), !(bo & 4194240) && (bo = 64), e;
}
function Ka(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function So(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - jt(t)),
    (e[t] = n);
}
function o1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - jt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function nc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - jt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var le = 0;
function wm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Sm,
  rc,
  Em,
  Pm,
  Tm,
  Kl = !1,
  Wo = [],
  En = null,
  Pn = null,
  Tn = null,
  Zi = new Map(),
  Ji = new Map(),
  gn = [],
  s1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Zf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      En = null;
      break;
    case "dragenter":
    case "dragleave":
      Pn = null;
      break;
    case "mouseover":
    case "mouseout":
      Tn = null;
      break;
    case "pointerover":
    case "pointerout":
      Zi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ji.delete(t.pointerId);
  }
}
function gi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Po(t)), t !== null && rc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function a1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (En = gi(En, e, t, n, r, i)), !0;
    case "dragenter":
      return (Pn = gi(Pn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Tn = gi(Tn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Zi.set(o, gi(Zi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ji.set(o, gi(Ji.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Cm(e) {
  var t = Zn(e.target);
  if (t !== null) {
    var n = pr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = hm(n)), t !== null)) {
          (e.blockedOn = t),
            Tm(e.priority, function () {
              Em(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function us(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ul = r), n.target.dispatchEvent(r), (Ul = null);
    } else return (t = Po(n)), t !== null && rc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Jf(e, t, n) {
  us(e) && n.delete(t);
}
function l1() {
  (Kl = !1),
    En !== null && us(En) && (En = null),
    Pn !== null && us(Pn) && (Pn = null),
    Tn !== null && us(Tn) && (Tn = null),
    Zi.forEach(Jf),
    Ji.forEach(Jf);
}
function yi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Kl ||
      ((Kl = !0),
      gt.unstable_scheduleCallback(gt.unstable_NormalPriority, l1)));
}
function qi(e) {
  function t(i) {
    return yi(i, e);
  }
  if (0 < Wo.length) {
    yi(Wo[0], e);
    for (var n = 1; n < Wo.length; n++) {
      var r = Wo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    En !== null && yi(En, e),
      Pn !== null && yi(Pn, e),
      Tn !== null && yi(Tn, e),
      Zi.forEach(t),
      Ji.forEach(t),
      n = 0;
    n < gn.length;
    n++
  )
    (r = gn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gn.length && ((n = gn[0]), n.blockedOn === null); )
    Cm(n), n.blockedOn === null && gn.shift();
}
var $r = ln.ReactCurrentBatchConfig,
  Ls = !0;
function u1(e, t, n, r) {
  var i = le,
    o = $r.transition;
  $r.transition = null;
  try {
    (le = 1), ic(e, t, n, r);
  } finally {
    (le = i), ($r.transition = o);
  }
}
function c1(e, t, n, r) {
  var i = le,
    o = $r.transition;
  $r.transition = null;
  try {
    (le = 4), ic(e, t, n, r);
  } finally {
    (le = i), ($r.transition = o);
  }
}
function ic(e, t, n, r) {
  if (Ls) {
    var i = Gl(e, t, n, r);
    if (i === null) nl(e, t, r, Ms, n), Zf(e, r);
    else if (a1(i, e, t, n, r)) r.stopPropagation();
    else if ((Zf(e, r), t & 4 && -1 < s1.indexOf(e))) {
      for (; i !== null; ) {
        var o = Po(i);
        if (
          (o !== null && Sm(o),
          (o = Gl(e, t, n, r)),
          o === null && nl(e, t, r, Ms, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else nl(e, t, r, null, n);
  }
}
var Ms = null;
function Gl(e, t, n, r) {
  if (((Ms = null), (e = ec(r)), (e = Zn(e)), e !== null))
    if (((t = pr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = hm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ms = e), null;
}
function km(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Z0()) {
        case tc:
          return 1;
        case ym:
          return 4;
        case Rs:
        case J0:
          return 16;
        case vm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vn = null,
  oc = null,
  cs = null;
function Rm() {
  if (cs) return cs;
  var e,
    t = oc,
    n = t.length,
    r,
    i = "value" in vn ? vn.value : vn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (cs = i.slice(e, 1 < r ? 1 - r : void 0));
}
function fs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ho() {
  return !0;
}
function qf() {
  return !1;
}
function xt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ho
        : qf),
      (this.isPropagationStopped = qf),
      this
    );
  }
  return (
    Pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ho));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ho));
      },
      persist: function () {},
      isPersistent: Ho,
    }),
    t
  );
}
var si = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  sc = xt(si),
  Eo = Pe({}, si, { view: 0, detail: 0 }),
  f1 = xt(Eo),
  Ga,
  Ya,
  vi,
  ha = Pe({}, Eo, {
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
    getModifierState: ac,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vi &&
            (vi && e.type === "mousemove"
              ? ((Ga = e.screenX - vi.screenX), (Ya = e.screenY - vi.screenY))
              : (Ya = Ga = 0),
            (vi = e)),
          Ga);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ya;
    },
  }),
  ed = xt(ha),
  d1 = Pe({}, ha, { dataTransfer: 0 }),
  h1 = xt(d1),
  p1 = Pe({}, Eo, { relatedTarget: 0 }),
  Qa = xt(p1),
  m1 = Pe({}, si, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  g1 = xt(m1),
  y1 = Pe({}, si, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  v1 = xt(y1),
  x1 = Pe({}, si, { data: 0 }),
  td = xt(x1),
  w1 = {
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
    MozPrintableKey: "Unidentified",
  },
  S1 = {
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
    224: "Meta",
  },
  E1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function P1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = E1[e]) ? !!t[e] : !1;
}
function ac() {
  return P1;
}
var T1 = Pe({}, Eo, {
    key: function (e) {
      if (e.key) {
        var t = w1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = fs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? S1[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ac,
    charCode: function (e) {
      return e.type === "keypress" ? fs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? fs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  C1 = xt(T1),
  k1 = Pe({}, ha, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  nd = xt(k1),
  R1 = Pe({}, Eo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ac,
  }),
  D1 = xt(R1),
  L1 = Pe({}, si, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  M1 = xt(L1),
  _1 = Pe({}, ha, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  N1 = xt(_1),
  A1 = [9, 13, 27, 32],
  lc = tn && "CompositionEvent" in window,
  Vi = null;
tn && "documentMode" in document && (Vi = document.documentMode);
var j1 = tn && "TextEvent" in window && !Vi,
  Dm = tn && (!lc || (Vi && 8 < Vi && 11 >= Vi)),
  rd = " ",
  id = !1;
function Lm(e, t) {
  switch (e) {
    case "keyup":
      return A1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Mm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Cr = !1;
function O1(e, t) {
  switch (e) {
    case "compositionend":
      return Mm(t);
    case "keypress":
      return t.which !== 32 ? null : ((id = !0), rd);
    case "textInput":
      return (e = t.data), e === rd && id ? null : e;
    default:
      return null;
  }
}
function V1(e, t) {
  if (Cr)
    return e === "compositionend" || (!lc && Lm(e, t))
      ? ((e = Rm()), (cs = oc = vn = null), (Cr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Dm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var I1 = {
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
  week: !0,
};
function od(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!I1[e.type] : t === "textarea";
}
function _m(e, t, n, r) {
  lm(r),
    (t = _s(t, "onChange")),
    0 < t.length &&
      ((n = new sc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ii = null,
  eo = null;
function F1(e) {
  bm(e, 0);
}
function pa(e) {
  var t = Dr(e);
  if (tm(t)) return e;
}
function z1(e, t) {
  if (e === "change") return t;
}
var Nm = !1;
if (tn) {
  var Xa;
  if (tn) {
    var Za = "oninput" in document;
    if (!Za) {
      var sd = document.createElement("div");
      sd.setAttribute("oninput", "return;"),
        (Za = typeof sd.oninput == "function");
    }
    Xa = Za;
  } else Xa = !1;
  Nm = Xa && (!document.documentMode || 9 < document.documentMode);
}
function ad() {
  Ii && (Ii.detachEvent("onpropertychange", Am), (eo = Ii = null));
}
function Am(e) {
  if (e.propertyName === "value" && pa(eo)) {
    var t = [];
    _m(t, eo, e, ec(e)), dm(F1, t);
  }
}
function B1(e, t, n) {
  e === "focusin"
    ? (ad(), (Ii = t), (eo = n), Ii.attachEvent("onpropertychange", Am))
    : e === "focusout" && ad();
}
function U1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return pa(eo);
}
function b1(e, t) {
  if (e === "click") return pa(t);
}
function $1(e, t) {
  if (e === "input" || e === "change") return pa(t);
}
function W1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Vt = typeof Object.is == "function" ? Object.is : W1;
function to(e, t) {
  if (Vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ll.call(t, i) || !Vt(e[i], t[i])) return !1;
  }
  return !0;
}
function ld(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ud(e, t) {
  var n = ld(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ld(n);
  }
}
function jm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? jm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Om() {
  for (var e = window, t = Ts(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ts(e.document);
  }
  return t;
}
function uc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function H1(e) {
  var t = Om(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    jm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && uc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = ud(n, o));
        var s = ud(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var K1 = tn && "documentMode" in document && 11 >= document.documentMode,
  kr = null,
  Yl = null,
  Fi = null,
  Ql = !1;
function cd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ql ||
    kr == null ||
    kr !== Ts(r) ||
    ((r = kr),
    "selectionStart" in r && uc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fi && to(Fi, r)) ||
      ((Fi = r),
      (r = _s(Yl, "onSelect")),
      0 < r.length &&
        ((t = new sc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = kr))));
}
function Ko(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Rr = {
    animationend: Ko("Animation", "AnimationEnd"),
    animationiteration: Ko("Animation", "AnimationIteration"),
    animationstart: Ko("Animation", "AnimationStart"),
    transitionend: Ko("Transition", "TransitionEnd"),
  },
  Ja = {},
  Vm = {};
tn &&
  ((Vm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Rr.animationend.animation,
    delete Rr.animationiteration.animation,
    delete Rr.animationstart.animation),
  "TransitionEvent" in window || delete Rr.transitionend.transition);
function ma(e) {
  if (Ja[e]) return Ja[e];
  if (!Rr[e]) return e;
  var t = Rr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vm) return (Ja[e] = t[n]);
  return e;
}
var Im = ma("animationend"),
  Fm = ma("animationiteration"),
  zm = ma("animationstart"),
  Bm = ma("transitionend"),
  Um = new Map(),
  fd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function jn(e, t) {
  Um.set(e, t), hr(t, [e]);
}
for (var qa = 0; qa < fd.length; qa++) {
  var el = fd[qa],
    G1 = el.toLowerCase(),
    Y1 = el[0].toUpperCase() + el.slice(1);
  jn(G1, "on" + Y1);
}
jn(Im, "onAnimationEnd");
jn(Fm, "onAnimationIteration");
jn(zm, "onAnimationStart");
jn("dblclick", "onDoubleClick");
jn("focusin", "onFocus");
jn("focusout", "onBlur");
jn(Bm, "onTransitionEnd");
Gr("onMouseEnter", ["mouseout", "mouseover"]);
Gr("onMouseLeave", ["mouseout", "mouseover"]);
Gr("onPointerEnter", ["pointerout", "pointerover"]);
Gr("onPointerLeave", ["pointerout", "pointerover"]);
hr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
hr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
hr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
hr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Li =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Q1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));
function dd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), G0(r, t, void 0, e), (e.currentTarget = null);
}
function bm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          dd(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          dd(i, a, u), (o = l);
        }
    }
  }
  if (ks) throw ((e = Wl), (ks = !1), (Wl = null), e);
}
function he(e, t) {
  var n = t[eu];
  n === void 0 && (n = t[eu] = new Set());
  var r = e + "__bubble";
  n.has(r) || ($m(t, e, 2, !1), n.add(r));
}
function tl(e, t, n) {
  var r = 0;
  t && (r |= 4), $m(n, e, r, t);
}
var Go = "_reactListening" + Math.random().toString(36).slice(2);
function no(e) {
  if (!e[Go]) {
    (e[Go] = !0),
      Xp.forEach(function (n) {
        n !== "selectionchange" && (Q1.has(n) || tl(n, !1, e), tl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Go] || ((t[Go] = !0), tl("selectionchange", !1, t));
  }
}
function $m(e, t, n, r) {
  switch (km(t)) {
    case 1:
      var i = u1;
      break;
    case 4:
      i = c1;
      break;
    default:
      i = ic;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !$l ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function nl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Zn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  dm(function () {
    var u = o,
      c = ec(n),
      f = [];
    e: {
      var d = Um.get(e);
      if (d !== void 0) {
        var g = sc,
          y = e;
        switch (e) {
          case "keypress":
            if (fs(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = C1;
            break;
          case "focusin":
            (y = "focus"), (g = Qa);
            break;
          case "focusout":
            (y = "blur"), (g = Qa);
            break;
          case "beforeblur":
          case "afterblur":
            g = Qa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = ed;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = h1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = D1;
            break;
          case Im:
          case Fm:
          case zm:
            g = g1;
            break;
          case Bm:
            g = M1;
            break;
          case "scroll":
            g = f1;
            break;
          case "wheel":
            g = N1;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = v1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = nd;
        }
        var v = (t & 4) !== 0,
          C = !v && e === "scroll",
          p = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              p !== null && ((S = Xi(h, p)), S != null && v.push(ro(h, S, m)))),
            C)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Ul &&
            (y = n.relatedTarget || n.fromElement) &&
            (Zn(y) || y[nn]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Zn(y) : null),
              y !== null &&
                ((C = pr(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = ed),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = nd),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (C = g == null ? d : Dr(g)),
            (m = y == null ? d : Dr(y)),
            (d = new v(S, h + "leave", g, n, c)),
            (d.target = C),
            (d.relatedTarget = m),
            (S = null),
            Zn(c) === u &&
              ((v = new v(p, h + "enter", y, n, c)),
              (v.target = m),
              (v.relatedTarget = C),
              (S = v)),
            (C = S),
            g && y)
          )
            t: {
              for (v = g, p = y, h = 0, m = v; m; m = wr(m)) h++;
              for (m = 0, S = p; S; S = wr(S)) m++;
              for (; 0 < h - m; ) (v = wr(v)), h--;
              for (; 0 < m - h; ) (p = wr(p)), m--;
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = wr(v)), (p = wr(p));
              }
              v = null;
            }
          else v = null;
          g !== null && hd(f, d, g, v, !1),
            y !== null && C !== null && hd(f, C, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Dr(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var R = z1;
        else if (od(d))
          if (Nm) R = $1;
          else {
            R = U1;
            var x = B1;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (R = b1);
        if (R && (R = R(e, u))) {
          _m(f, R, n, c);
          break e;
        }
        x && x(e, d, u),
          e === "focusout" &&
            (x = d._wrapperState) &&
            x.controlled &&
            d.type === "number" &&
            Vl(d, "number", d.value);
      }
      switch (((x = u ? Dr(u) : window), e)) {
        case "focusin":
          (od(x) || x.contentEditable === "true") &&
            ((kr = x), (Yl = u), (Fi = null));
          break;
        case "focusout":
          Fi = Yl = kr = null;
          break;
        case "mousedown":
          Ql = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ql = !1), cd(f, n, c);
          break;
        case "selectionchange":
          if (K1) break;
        case "keydown":
        case "keyup":
          cd(f, n, c);
      }
      var L;
      if (lc)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Cr
          ? Lm(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Dm &&
          n.locale !== "ko" &&
          (Cr || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Cr && (L = Rm())
            : ((vn = c),
              (oc = "value" in vn ? vn.value : vn.textContent),
              (Cr = !0))),
        (x = _s(u, P)),
        0 < x.length &&
          ((P = new td(P, e, null, n, c)),
          f.push({ event: P, listeners: x }),
          L ? (P.data = L) : ((L = Mm(n)), L !== null && (P.data = L)))),
        (L = j1 ? O1(e, n) : V1(e, n)) &&
          ((u = _s(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new td("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = L)));
    }
    bm(f, t);
  });
}
function ro(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _s(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Xi(e, n)),
      o != null && r.unshift(ro(e, o, i)),
      (o = Xi(e, t)),
      o != null && r.push(ro(e, o, i))),
      (e = e.return);
  }
  return r;
}
function wr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hd(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Xi(n, o)), l != null && s.unshift(ro(n, l, a)))
        : i || ((l = Xi(n, o)), l != null && s.push(ro(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var X1 = /\r\n?/g,
  Z1 = /\u0000|\uFFFD/g;
function pd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      X1,
      `
`
    )
    .replace(Z1, "");
}
function Yo(e, t, n) {
  if (((t = pd(t)), pd(e) !== t && n)) throw Error(N(425));
}
function Ns() {}
var Xl = null,
  Zl = null;
function Jl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ql = typeof setTimeout == "function" ? setTimeout : void 0,
  J1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  md = typeof Promise == "function" ? Promise : void 0,
  q1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof md < "u"
      ? function (e) {
          return md.resolve(null).then(e).catch(ex);
        }
      : ql;
function ex(e) {
  setTimeout(function () {
    throw e;
  });
}
function rl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), qi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  qi(t);
}
function Cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function gd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ai = Math.random().toString(36).slice(2),
  Bt = "__reactFiber$" + ai,
  io = "__reactProps$" + ai,
  nn = "__reactContainer$" + ai,
  eu = "__reactEvents$" + ai,
  tx = "__reactListeners$" + ai,
  nx = "__reactHandles$" + ai;
function Zn(e) {
  var t = e[Bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nn] || n[Bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = gd(e); e !== null; ) {
          if ((n = e[Bt])) return n;
          e = gd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Po(e) {
  return (
    (e = e[Bt] || e[nn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function ga(e) {
  return e[io] || null;
}
var tu = [],
  Lr = -1;
function On(e) {
  return { current: e };
}
function pe(e) {
  0 > Lr || ((e.current = tu[Lr]), (tu[Lr] = null), Lr--);
}
function de(e, t) {
  Lr++, (tu[Lr] = e.current), (e.current = t);
}
var _n = {},
  Qe = On(_n),
  at = On(!1),
  ar = _n;
function Yr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _n;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function lt(e) {
  return (e = e.childContextTypes), e != null;
}
function As() {
  pe(at), pe(Qe);
}
function yd(e, t, n) {
  if (Qe.current !== _n) throw Error(N(168));
  de(Qe, t), de(at, n);
}
function Wm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, B0(e) || "Unknown", i));
  return Pe({}, n, r);
}
function js(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _n),
    (ar = Qe.current),
    de(Qe, e),
    de(at, at.current),
    !0
  );
}
function vd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = Wm(e, t, ar)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      pe(at),
      pe(Qe),
      de(Qe, e))
    : pe(at),
    de(at, n);
}
var Yt = null,
  ya = !1,
  il = !1;
function Hm(e) {
  Yt === null ? (Yt = [e]) : Yt.push(e);
}
function rx(e) {
  (ya = !0), Hm(e);
}
function Vn() {
  if (!il && Yt !== null) {
    il = !0;
    var e = 0,
      t = le;
    try {
      var n = Yt;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Yt = null), (ya = !1);
    } catch (i) {
      throw (Yt !== null && (Yt = Yt.slice(e + 1)), gm(tc, Vn), i);
    } finally {
      (le = t), (il = !1);
    }
  }
  return null;
}
var Mr = [],
  _r = 0,
  Os = null,
  Vs = 0,
  Et = [],
  Pt = 0,
  lr = null,
  Qt = 1,
  Xt = "";
function Hn(e, t) {
  (Mr[_r++] = Vs), (Mr[_r++] = Os), (Os = e), (Vs = t);
}
function Km(e, t, n) {
  (Et[Pt++] = Qt), (Et[Pt++] = Xt), (Et[Pt++] = lr), (lr = e);
  var r = Qt;
  e = Xt;
  var i = 32 - jt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - jt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Qt = (1 << (32 - jt(t) + i)) | (n << i) | r),
      (Xt = o + e);
  } else (Qt = (1 << o) | (n << i) | r), (Xt = e);
}
function cc(e) {
  e.return !== null && (Hn(e, 1), Km(e, 1, 0));
}
function fc(e) {
  for (; e === Os; )
    (Os = Mr[--_r]), (Mr[_r] = null), (Vs = Mr[--_r]), (Mr[_r] = null);
  for (; e === lr; )
    (lr = Et[--Pt]),
      (Et[Pt] = null),
      (Xt = Et[--Pt]),
      (Et[Pt] = null),
      (Qt = Et[--Pt]),
      (Et[Pt] = null);
}
var pt = null,
  dt = null,
  ye = !1,
  At = null;
function Gm(e, t) {
  var n = Tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function xd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (pt = e), (dt = Cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (pt = e), (dt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = lr !== null ? { id: Qt, overflow: Xt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Tt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (pt = e),
            (dt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function nu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ru(e) {
  if (ye) {
    var t = dt;
    if (t) {
      var n = t;
      if (!xd(e, t)) {
        if (nu(e)) throw Error(N(418));
        t = Cn(n.nextSibling);
        var r = pt;
        t && xd(e, t)
          ? Gm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ye = !1), (pt = e));
      }
    } else {
      if (nu(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (ye = !1), (pt = e);
    }
  }
}
function wd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  pt = e;
}
function Qo(e) {
  if (e !== pt) return !1;
  if (!ye) return wd(e), (ye = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Jl(e.type, e.memoizedProps))),
    t && (t = dt))
  ) {
    if (nu(e)) throw (Ym(), Error(N(418)));
    for (; t; ) Gm(e, t), (t = Cn(t.nextSibling));
  }
  if ((wd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              dt = Cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      dt = null;
    }
  } else dt = pt ? Cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ym() {
  for (var e = dt; e; ) e = Cn(e.nextSibling);
}
function Qr() {
  (dt = pt = null), (ye = !1);
}
function dc(e) {
  At === null ? (At = [e]) : At.push(e);
}
var ix = ln.ReactCurrentBatchConfig;
function xi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Xo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Sd(e) {
  var t = e._init;
  return t(e._payload);
}
function Qm(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Ln(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, m, S) {
    return h === null || h.tag !== 6
      ? ((h = fl(m, p.mode, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function l(p, h, m, S) {
    var R = m.type;
    return R === Tr
      ? c(p, h, m.props.children, S, m.key)
      : h !== null &&
        (h.elementType === R ||
          (typeof R == "object" &&
            R !== null &&
            R.$$typeof === pn &&
            Sd(R) === h.type))
      ? ((S = i(h, m.props)), (S.ref = xi(p, h, m)), (S.return = p), S)
      : ((S = vs(m.type, m.key, m.props, null, p.mode, S)),
        (S.ref = xi(p, h, m)),
        (S.return = p),
        S);
  }
  function u(p, h, m, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = dl(m, p.mode, S)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, S, R) {
    return h === null || h.tag !== 7
      ? ((h = rr(m, p.mode, S, R)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = fl("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case zo:
          return (
            (m = vs(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = xi(p, null, h)),
            (m.return = p),
            m
          );
        case Pr:
          return (h = dl(h, p.mode, m)), (h.return = p), h;
        case pn:
          var S = h._init;
          return f(p, S(h._payload), m);
      }
      if (Ri(h) || pi(h))
        return (h = rr(h, p.mode, m, null)), (h.return = p), h;
      Xo(p, h);
    }
    return null;
  }
  function d(p, h, m, S) {
    var R = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return R !== null ? null : a(p, h, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case zo:
          return m.key === R ? l(p, h, m, S) : null;
        case Pr:
          return m.key === R ? u(p, h, m, S) : null;
        case pn:
          return (R = m._init), d(p, h, R(m._payload), S);
      }
      if (Ri(m) || pi(m)) return R !== null ? null : c(p, h, m, S, null);
      Xo(p, m);
    }
    return null;
  }
  function g(p, h, m, S, R) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(m) || null), a(h, p, "" + S, R);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case zo:
          return (p = p.get(S.key === null ? m : S.key) || null), l(h, p, S, R);
        case Pr:
          return (p = p.get(S.key === null ? m : S.key) || null), u(h, p, S, R);
        case pn:
          var x = S._init;
          return g(p, h, m, x(S._payload), R);
      }
      if (Ri(S) || pi(S)) return (p = p.get(m) || null), c(h, p, S, R, null);
      Xo(h, S);
    }
    return null;
  }
  function y(p, h, m, S) {
    for (
      var R = null, x = null, L = h, P = (h = 0), _ = null;
      L !== null && P < m.length;
      P++
    ) {
      L.index > P ? ((_ = L), (L = null)) : (_ = L.sibling);
      var A = d(p, L, m[P], S);
      if (A === null) {
        L === null && (L = _);
        break;
      }
      e && L && A.alternate === null && t(p, L),
        (h = o(A, h, P)),
        x === null ? (R = A) : (x.sibling = A),
        (x = A),
        (L = _);
    }
    if (P === m.length) return n(p, L), ye && Hn(p, P), R;
    if (L === null) {
      for (; P < m.length; P++)
        (L = f(p, m[P], S)),
          L !== null &&
            ((h = o(L, h, P)), x === null ? (R = L) : (x.sibling = L), (x = L));
      return ye && Hn(p, P), R;
    }
    for (L = r(p, L); P < m.length; P++)
      (_ = g(L, p, P, m[P], S)),
        _ !== null &&
          (e && _.alternate !== null && L.delete(_.key === null ? P : _.key),
          (h = o(_, h, P)),
          x === null ? (R = _) : (x.sibling = _),
          (x = _));
    return (
      e &&
        L.forEach(function (K) {
          return t(p, K);
        }),
      ye && Hn(p, P),
      R
    );
  }
  function v(p, h, m, S) {
    var R = pi(m);
    if (typeof R != "function") throw Error(N(150));
    if (((m = R.call(m)), m == null)) throw Error(N(151));
    for (
      var x = (R = null), L = h, P = (h = 0), _ = null, A = m.next();
      L !== null && !A.done;
      P++, A = m.next()
    ) {
      L.index > P ? ((_ = L), (L = null)) : (_ = L.sibling);
      var K = d(p, L, A.value, S);
      if (K === null) {
        L === null && (L = _);
        break;
      }
      e && L && K.alternate === null && t(p, L),
        (h = o(K, h, P)),
        x === null ? (R = K) : (x.sibling = K),
        (x = K),
        (L = _);
    }
    if (A.done) return n(p, L), ye && Hn(p, P), R;
    if (L === null) {
      for (; !A.done; P++, A = m.next())
        (A = f(p, A.value, S)),
          A !== null &&
            ((h = o(A, h, P)), x === null ? (R = A) : (x.sibling = A), (x = A));
      return ye && Hn(p, P), R;
    }
    for (L = r(p, L); !A.done; P++, A = m.next())
      (A = g(L, p, P, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && L.delete(A.key === null ? P : A.key),
          (h = o(A, h, P)),
          x === null ? (R = A) : (x.sibling = A),
          (x = A));
    return (
      e &&
        L.forEach(function (q) {
          return t(p, q);
        }),
      ye && Hn(p, P),
      R
    );
  }
  function C(p, h, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Tr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case zo:
          e: {
            for (var R = m.key, x = h; x !== null; ) {
              if (x.key === R) {
                if (((R = m.type), R === Tr)) {
                  if (x.tag === 7) {
                    n(p, x.sibling),
                      (h = i(x, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  x.elementType === R ||
                  (typeof R == "object" &&
                    R !== null &&
                    R.$$typeof === pn &&
                    Sd(R) === x.type)
                ) {
                  n(p, x.sibling),
                    (h = i(x, m.props)),
                    (h.ref = xi(p, x, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, x);
                break;
              } else t(p, x);
              x = x.sibling;
            }
            m.type === Tr
              ? ((h = rr(m.props.children, p.mode, S, m.key)),
                (h.return = p),
                (p = h))
              : ((S = vs(m.type, m.key, m.props, null, p.mode, S)),
                (S.ref = xi(p, h, m)),
                (S.return = p),
                (p = S));
          }
          return s(p);
        case Pr:
          e: {
            for (x = m.key; h !== null; ) {
              if (h.key === x)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = dl(m, p.mode, S)), (h.return = p), (p = h);
          }
          return s(p);
        case pn:
          return (x = m._init), C(p, h, x(m._payload), S);
      }
      if (Ri(m)) return y(p, h, m, S);
      if (pi(m)) return v(p, h, m, S);
      Xo(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = fl(m, p.mode, S)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return C;
}
var Xr = Qm(!0),
  Xm = Qm(!1),
  Is = On(null),
  Fs = null,
  Nr = null,
  hc = null;
function pc() {
  hc = Nr = Fs = null;
}
function mc(e) {
  var t = Is.current;
  pe(Is), (e._currentValue = t);
}
function iu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Wr(e, t) {
  (Fs = e),
    (hc = Nr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (st = !0), (e.firstContext = null));
}
function kt(e) {
  var t = e._currentValue;
  if (hc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Nr === null)) {
      if (Fs === null) throw Error(N(308));
      (Nr = e), (Fs.dependencies = { lanes: 0, firstContext: e });
    } else Nr = Nr.next = e;
  return t;
}
var Jn = null;
function gc(e) {
  Jn === null ? (Jn = [e]) : Jn.push(e);
}
function Zm(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), gc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    rn(e, r)
  );
}
function rn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var mn = !1;
function yc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Jm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Zt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ne & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      rn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), gc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    rn(e, n)
  );
}
function ds(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), nc(e, n);
  }
}
function Ed(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function zs(e, t, n, r) {
  var i = e.updateQueue;
  mn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            v = a;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(g, f, d) : y),
                d == null)
              )
                break e;
              f = Pe({}, f, d);
              break e;
            case 2:
              mn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = f)) : (c = c.next = g),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (cr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Pd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(N(191, i));
        i.call(r);
      }
    }
}
var To = {},
  bt = On(To),
  oo = On(To),
  so = On(To);
function qn(e) {
  if (e === To) throw Error(N(174));
  return e;
}
function vc(e, t) {
  switch ((de(so, t), de(oo, e), de(bt, To), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fl(t, e));
  }
  pe(bt), de(bt, t);
}
function Zr() {
  pe(bt), pe(oo), pe(so);
}
function qm(e) {
  qn(so.current);
  var t = qn(bt.current),
    n = Fl(t, e.type);
  t !== n && (de(oo, e), de(bt, n));
}
function xc(e) {
  oo.current === e && (pe(bt), pe(oo));
}
var we = On(0);
function Bs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ol = [];
function wc() {
  for (var e = 0; e < ol.length; e++)
    ol[e]._workInProgressVersionPrimary = null;
  ol.length = 0;
}
var hs = ln.ReactCurrentDispatcher,
  sl = ln.ReactCurrentBatchConfig,
  ur = 0,
  Ee = null,
  je = null,
  Ve = null,
  Us = !1,
  zi = !1,
  ao = 0,
  ox = 0;
function We() {
  throw Error(N(321));
}
function Sc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Vt(e[n], t[n])) return !1;
  return !0;
}
function Ec(e, t, n, r, i, o) {
  if (
    ((ur = o),
    (Ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (hs.current = e === null || e.memoizedState === null ? ux : cx),
    (e = n(r, i)),
    zi)
  ) {
    o = 0;
    do {
      if (((zi = !1), (ao = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (Ve = je = null),
        (t.updateQueue = null),
        (hs.current = fx),
        (e = n(r, i));
    } while (zi);
  }
  if (
    ((hs.current = bs),
    (t = je !== null && je.next !== null),
    (ur = 0),
    (Ve = je = Ee = null),
    (Us = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Pc() {
  var e = ao !== 0;
  return (ao = 0), e;
}
function zt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ve === null ? (Ee.memoizedState = Ve = e) : (Ve = Ve.next = e), Ve;
}
function Rt() {
  if (je === null) {
    var e = Ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = je.next;
  var t = Ve === null ? Ee.memoizedState : Ve.next;
  if (t !== null) (Ve = t), (je = e);
  else {
    if (e === null) throw Error(N(310));
    (je = e),
      (e = {
        memoizedState: je.memoizedState,
        baseState: je.baseState,
        baseQueue: je.baseQueue,
        queue: je.queue,
        next: null,
      }),
      Ve === null ? (Ee.memoizedState = Ve = e) : (Ve = Ve.next = e);
  }
  return Ve;
}
function lo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function al(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = je,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((ur & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (Ee.lanes |= c),
          (cr |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      Vt(r, t.memoizedState) || (st = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Ee.lanes |= o), (cr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ll(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Vt(o, t.memoizedState) || (st = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function eg() {}
function tg(e, t) {
  var n = Ee,
    r = Rt(),
    i = t(),
    o = !Vt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (st = !0)),
    (r = r.queue),
    Tc(ig.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ve !== null && Ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      uo(9, rg.bind(null, n, r, i, t), void 0, null),
      Ie === null)
    )
      throw Error(N(349));
    ur & 30 || ng(n, t, i);
  }
  return i;
}
function ng(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function rg(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), og(t) && sg(e);
}
function ig(e, t, n) {
  return n(function () {
    og(t) && sg(e);
  });
}
function og(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Vt(e, n);
  } catch {
    return !0;
  }
}
function sg(e) {
  var t = rn(e, 1);
  t !== null && Ot(t, e, 1, -1);
}
function Td(e) {
  var t = zt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = lx.bind(null, Ee, e)),
    [t.memoizedState, e]
  );
}
function uo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ag() {
  return Rt().memoizedState;
}
function ps(e, t, n, r) {
  var i = zt();
  (Ee.flags |= e),
    (i.memoizedState = uo(1 | t, n, void 0, r === void 0 ? null : r));
}
function va(e, t, n, r) {
  var i = Rt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (je !== null) {
    var s = je.memoizedState;
    if (((o = s.destroy), r !== null && Sc(r, s.deps))) {
      i.memoizedState = uo(t, n, o, r);
      return;
    }
  }
  (Ee.flags |= e), (i.memoizedState = uo(1 | t, n, o, r));
}
function Cd(e, t) {
  return ps(8390656, 8, e, t);
}
function Tc(e, t) {
  return va(2048, 8, e, t);
}
function lg(e, t) {
  return va(4, 2, e, t);
}
function ug(e, t) {
  return va(4, 4, e, t);
}
function cg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function fg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), va(4, 4, cg.bind(null, t, e), n)
  );
}
function Cc() {}
function dg(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function hg(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function pg(e, t, n) {
  return ur & 21
    ? (Vt(n, t) || ((n = xm()), (Ee.lanes |= n), (cr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = n));
}
function sx(e, t) {
  var n = le;
  (le = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = sl.transition;
  sl.transition = {};
  try {
    e(!1), t();
  } finally {
    (le = n), (sl.transition = r);
  }
}
function mg() {
  return Rt().memoizedState;
}
function ax(e, t, n) {
  var r = Dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gg(e))
  )
    yg(t, n);
  else if (((n = Zm(e, t, n, r)), n !== null)) {
    var i = et();
    Ot(n, e, r, i), vg(n, t, r);
  }
}
function lx(e, t, n) {
  var r = Dn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gg(e)) yg(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Vt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), gc(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Zm(e, t, i, r)),
      n !== null && ((i = et()), Ot(n, e, r, i), vg(n, t, r));
  }
}
function gg(e) {
  var t = e.alternate;
  return e === Ee || (t !== null && t === Ee);
}
function yg(e, t) {
  zi = Us = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function vg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), nc(e, n);
  }
}
var bs = {
    readContext: kt,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useInsertionEffect: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useSyncExternalStore: We,
    useId: We,
    unstable_isNewReconciler: !1,
  },
  ux = {
    readContext: kt,
    useCallback: function (e, t) {
      return (zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: kt,
    useEffect: Cd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ps(4194308, 4, cg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ps(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ps(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = zt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = zt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ax.bind(null, Ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Td,
    useDebugValue: Cc,
    useDeferredValue: function (e) {
      return (zt().memoizedState = e);
    },
    useTransition: function () {
      var e = Td(!1),
        t = e[0];
      return (e = sx.bind(null, e[1])), (zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ee,
        i = zt();
      if (ye) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Ie === null)) throw Error(N(349));
        ur & 30 || ng(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Cd(ig.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        uo(9, rg.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = zt(),
        t = Ie.identifierPrefix;
      if (ye) {
        var n = Xt,
          r = Qt;
        (n = (r & ~(1 << (32 - jt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ao++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ox++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  cx = {
    readContext: kt,
    useCallback: dg,
    useContext: kt,
    useEffect: Tc,
    useImperativeHandle: fg,
    useInsertionEffect: lg,
    useLayoutEffect: ug,
    useMemo: hg,
    useReducer: al,
    useRef: ag,
    useState: function () {
      return al(lo);
    },
    useDebugValue: Cc,
    useDeferredValue: function (e) {
      var t = Rt();
      return pg(t, je.memoizedState, e);
    },
    useTransition: function () {
      var e = al(lo)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: eg,
    useSyncExternalStore: tg,
    useId: mg,
    unstable_isNewReconciler: !1,
  },
  fx = {
    readContext: kt,
    useCallback: dg,
    useContext: kt,
    useEffect: Tc,
    useImperativeHandle: fg,
    useInsertionEffect: lg,
    useLayoutEffect: ug,
    useMemo: hg,
    useReducer: ll,
    useRef: ag,
    useState: function () {
      return ll(lo);
    },
    useDebugValue: Cc,
    useDeferredValue: function (e) {
      var t = Rt();
      return je === null ? (t.memoizedState = e) : pg(t, je.memoizedState, e);
    },
    useTransition: function () {
      var e = ll(lo)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: eg,
    useSyncExternalStore: tg,
    useId: mg,
    unstable_isNewReconciler: !1,
  };
function Mt(e, t) {
  if (e && e.defaultProps) {
    (t = Pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ou(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? pr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      i = Dn(e),
      o = Zt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = kn(e, o, i)),
      t !== null && (Ot(t, e, i, r), ds(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      i = Dn(e),
      o = Zt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = kn(e, o, i)),
      t !== null && (Ot(t, e, i, r), ds(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = et(),
      r = Dn(e),
      i = Zt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = kn(e, i, r)),
      t !== null && (Ot(t, e, r, n), ds(t, e, r));
  },
};
function kd(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !to(n, r) || !to(i, o)
      : !0
  );
}
function xg(e, t, n) {
  var r = !1,
    i = _n,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = kt(o))
      : ((i = lt(t) ? ar : Qe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Yr(e, i) : _n)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Rd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xa.enqueueReplaceState(t, t.state, null);
}
function su(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), yc(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = kt(o))
    : ((o = lt(t) ? ar : Qe.current), (i.context = Yr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ou(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && xa.enqueueReplaceState(i, i.state, null),
      zs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Jr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += z0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ul(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function au(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var dx = typeof WeakMap == "function" ? WeakMap : Map;
function wg(e, t, n) {
  (n = Zt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ws || ((Ws = !0), (yu = r)), au(e, t);
    }),
    n
  );
}
function Sg(e, t, n) {
  (n = Zt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        au(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        au(e, t),
          typeof r != "function" &&
            (Rn === null ? (Rn = new Set([this])) : Rn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Dd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dx();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = kx.bind(null, e, t, n)), t.then(e, e));
}
function Ld(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Md(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Zt(-1, 1)), (t.tag = 2), kn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var hx = ln.ReactCurrentOwner,
  st = !1;
function Je(e, t, n, r) {
  t.child = e === null ? Xm(t, null, n, r) : Xr(t, e.child, n, r);
}
function _d(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Wr(t, i),
    (r = Ec(e, t, n, r, o, i)),
    (n = Pc()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        on(e, t, i))
      : (ye && n && cc(t), (t.flags |= 1), Je(e, t, r, i), t.child)
  );
}
function Nd(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ac(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Eg(e, t, o, r, i))
      : ((e = vs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : to), n(s, r) && e.ref === t.ref)
    )
      return on(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ln(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Eg(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (to(o, r) && e.ref === t.ref)
      if (((st = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (st = !0);
      else return (t.lanes = e.lanes), on(e, t, i);
  }
  return lu(e, t, n, r, i);
}
function Pg(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        de(jr, ct),
        (ct |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          de(jr, ct),
          (ct |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        de(jr, ct),
        (ct |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      de(jr, ct),
      (ct |= r);
  return Je(e, t, i, n), t.child;
}
function Tg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function lu(e, t, n, r, i) {
  var o = lt(n) ? ar : Qe.current;
  return (
    (o = Yr(t, o)),
    Wr(t, i),
    (n = Ec(e, t, n, r, o, i)),
    (r = Pc()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        on(e, t, i))
      : (ye && r && cc(t), (t.flags |= 1), Je(e, t, n, i), t.child)
  );
}
function Ad(e, t, n, r, i) {
  if (lt(n)) {
    var o = !0;
    js(t);
  } else o = !1;
  if ((Wr(t, i), t.stateNode === null))
    ms(e, t), xg(t, n, r), su(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = kt(u))
      : ((u = lt(n) ? ar : Qe.current), (u = Yr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Rd(t, s, r, u)),
      (mn = !1);
    var d = t.memoizedState;
    (s.state = d),
      zs(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || at.current || mn
        ? (typeof c == "function" && (ou(t, n, c, r), (l = t.memoizedState)),
          (a = mn || kd(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Jm(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Mt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = kt(l))
        : ((l = lt(n) ? ar : Qe.current), (l = Yr(t, l)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Rd(t, s, r, l)),
      (mn = !1),
      (d = t.memoizedState),
      (s.state = d),
      zs(t, r, s, i);
    var y = t.memoizedState;
    a !== f || d !== y || at.current || mn
      ? (typeof g == "function" && (ou(t, n, g, r), (y = t.memoizedState)),
        (u = mn || kd(t, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return uu(e, t, n, r, o, i);
}
function uu(e, t, n, r, i, o) {
  Tg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && vd(t, n, !1), on(e, t, o);
  (r = t.stateNode), (hx.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Xr(t, e.child, null, o)), (t.child = Xr(t, null, a, o)))
      : Je(e, t, a, o),
    (t.memoizedState = r.state),
    i && vd(t, n, !0),
    t.child
  );
}
function Cg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? yd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && yd(e, t.context, !1),
    vc(e, t.containerInfo);
}
function jd(e, t, n, r, i) {
  return Qr(), dc(i), (t.flags |= 256), Je(e, t, n, r), t.child;
}
var cu = { dehydrated: null, treeContext: null, retryLane: 0 };
function fu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kg(e, t, n) {
  var r = t.pendingProps,
    i = we.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    de(we, i & 1),
    e === null)
  )
    return (
      ru(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Ea(s, r, 0, null)),
              (e = rr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = fu(n)),
              (t.memoizedState = cu),
              e)
            : kc(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return px(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Ln(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Ln(a, o)) : ((o = rr(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? fu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = cu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ln(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function kc(e, t) {
  return (
    (t = Ea({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zo(e, t, n, r) {
  return (
    r !== null && dc(r),
    Xr(t, e.child, null, n),
    (e = kc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function px(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ul(Error(N(422)))), Zo(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ea({ mode: "visible", children: r.children }, i, 0, null)),
        (o = rr(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Xr(t, e.child, null, s),
        (t.child.memoizedState = fu(s)),
        (t.memoizedState = cu),
        o);
  if (!(t.mode & 1)) return Zo(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(N(419))), (r = ul(o, r, void 0)), Zo(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), st || a)) {
    if (((r = Ie), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), rn(e, i), Ot(r, e, i, -1));
    }
    return Nc(), (r = ul(Error(N(421)))), Zo(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Rx.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (dt = Cn(i.nextSibling)),
      (pt = t),
      (ye = !0),
      (At = null),
      e !== null &&
        ((Et[Pt++] = Qt),
        (Et[Pt++] = Xt),
        (Et[Pt++] = lr),
        (Qt = e.id),
        (Xt = e.overflow),
        (lr = t)),
      (t = kc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Od(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), iu(e.return, t, n);
}
function cl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Rg(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Je(e, t, r.children, n), (r = we.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Od(e, n, t);
        else if (e.tag === 19) Od(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((de(we, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Bs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          cl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Bs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        cl(t, !0, n, null, o);
        break;
      case "together":
        cl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ms(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function on(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (cr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ln(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ln(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function mx(e, t, n) {
  switch (t.tag) {
    case 3:
      Cg(t), Qr();
      break;
    case 5:
      qm(t);
      break;
    case 1:
      lt(t.type) && js(t);
      break;
    case 4:
      vc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      de(Is, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (de(we, we.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? kg(e, t, n)
          : (de(we, we.current & 1),
            (e = on(e, t, n)),
            e !== null ? e.sibling : null);
      de(we, we.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        de(we, we.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Pg(e, t, n);
  }
  return on(e, t, n);
}
var Dg, du, Lg, Mg;
Dg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
du = function () {};
Lg = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), qn(bt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = jl(e, i)), (r = jl(e, r)), (o = []);
        break;
      case "select":
        (i = Pe({}, i, { value: void 0 })),
          (r = Pe({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Il(e, i)), (r = Il(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ns);
    }
    zl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Yi.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Yi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && he("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Mg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wi(e, t) {
  if (!ye)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function He(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function gx(e, t, n) {
  var r = t.pendingProps;
  switch ((fc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return He(t), null;
    case 1:
      return lt(t.type) && As(), He(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zr(),
        pe(at),
        pe(Qe),
        wc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Qo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), At !== null && (wu(At), (At = null)))),
        du(e, t),
        He(t),
        null
      );
    case 5:
      xc(t);
      var i = qn(so.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Lg(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return He(t), null;
        }
        if (((e = qn(bt.current)), Qo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Bt] = t), (r[io] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              he("cancel", r), he("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Li.length; i++) he(Li[i], r);
              break;
            case "source":
              he("error", r);
              break;
            case "img":
            case "image":
            case "link":
              he("error", r), he("load", r);
              break;
            case "details":
              he("toggle", r);
              break;
            case "input":
              Wf(r, o), he("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                he("invalid", r);
              break;
            case "textarea":
              Kf(r, o), he("invalid", r);
          }
          zl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Yo(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Yo(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Yi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  he("scroll", r);
            }
          switch (n) {
            case "input":
              Bo(r), Hf(r, o, !0);
              break;
            case "textarea":
              Bo(r), Gf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ns);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = im(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Bt] = t),
            (e[io] = r),
            Dg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Bl(n, r)), n)) {
              case "dialog":
                he("cancel", e), he("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Li.length; i++) he(Li[i], e);
                i = r;
                break;
              case "source":
                he("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                he("error", e), he("load", e), (i = r);
                break;
              case "details":
                he("toggle", e), (i = r);
                break;
              case "input":
                Wf(e, r), (i = jl(e, r)), he("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Pe({}, r, { value: void 0 })),
                  he("invalid", e);
                break;
              case "textarea":
                Kf(e, r), (i = Il(e, r)), he("invalid", e);
                break;
              default:
                i = r;
            }
            zl(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? am(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && om(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Qi(e, l)
                    : typeof l == "number" && Qi(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Yi.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && he("scroll", e)
                      : l != null && Xu(e, o, l, s));
              }
            switch (n) {
              case "input":
                Bo(e), Hf(e, r, !1);
                break;
              case "textarea":
                Bo(e), Gf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Br(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Br(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ns);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return He(t), null;
    case 6:
      if (e && t.stateNode != null) Mg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = qn(so.current)), qn(bt.current), Qo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Bt] = t),
            (o = r.nodeValue !== n) && ((e = pt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Yo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Yo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Bt] = t),
            (t.stateNode = r);
      }
      return He(t), null;
    case 13:
      if (
        (pe(we),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ye && dt !== null && t.mode & 1 && !(t.flags & 128))
          Ym(), Qr(), (t.flags |= 98560), (o = !1);
        else if (((o = Qo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[Bt] = t;
          } else
            Qr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          He(t), (o = !1);
        } else At !== null && (wu(At), (At = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || we.current & 1 ? Oe === 0 && (Oe = 3) : Nc())),
          t.updateQueue !== null && (t.flags |= 4),
          He(t),
          null);
    case 4:
      return (
        Zr(), du(e, t), e === null && no(t.stateNode.containerInfo), He(t), null
      );
    case 10:
      return mc(t.type._context), He(t), null;
    case 17:
      return lt(t.type) && As(), He(t), null;
    case 19:
      if ((pe(we), (o = t.memoizedState), o === null)) return He(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) wi(o, !1);
        else {
          if (Oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Bs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    wi(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return de(we, (we.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Me() > qr &&
            ((t.flags |= 128), (r = !0), wi(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Bs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wi(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ye)
            )
              return He(t), null;
          } else
            2 * Me() - o.renderingStartTime > qr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wi(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Me()),
          (t.sibling = null),
          (n = we.current),
          de(we, r ? (n & 1) | 2 : n & 1),
          t)
        : (He(t), null);
    case 22:
    case 23:
      return (
        _c(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ct & 1073741824 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : He(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function yx(e, t) {
  switch ((fc(t), t.tag)) {
    case 1:
      return (
        lt(t.type) && As(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zr(),
        pe(at),
        pe(Qe),
        wc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xc(t), null;
    case 13:
      if (
        (pe(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        Qr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return pe(we), null;
    case 4:
      return Zr(), null;
    case 10:
      return mc(t.type._context), null;
    case 22:
    case 23:
      return _c(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jo = !1,
  Ge = !1,
  vx = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function Ar(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        De(e, t, r);
      }
    else n.current = null;
}
function hu(e, t, n) {
  try {
    n();
  } catch (r) {
    De(e, t, r);
  }
}
var Vd = !1;
function xx(e, t) {
  if (((Xl = Ls), (e = Om()), uc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++c === r && (l = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zl = { focusedElem: e, selectionRange: n }, Ls = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    C = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Mt(t.type, v),
                      C
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          De(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (y = Vd), (Vd = !1), y;
}
function Bi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && hu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function wa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function pu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function _g(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _g(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Bt], delete t[io], delete t[eu], delete t[tx], delete t[nx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ng(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Id(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ng(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function mu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ns));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (mu(e, t, n), e = e.sibling; e !== null; ) mu(e, t, n), (e = e.sibling);
}
function gu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gu(e, t, n), e = e.sibling; e !== null; ) gu(e, t, n), (e = e.sibling);
}
var ze = null,
  _t = !1;
function fn(e, t, n) {
  for (n = n.child; n !== null; ) Ag(e, t, n), (n = n.sibling);
}
function Ag(e, t, n) {
  if (Ut && typeof Ut.onCommitFiberUnmount == "function")
    try {
      Ut.onCommitFiberUnmount(da, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ge || Ar(n, t);
    case 6:
      var r = ze,
        i = _t;
      (ze = null),
        fn(e, t, n),
        (ze = r),
        (_t = i),
        ze !== null &&
          (_t
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null &&
        (_t
          ? ((e = ze),
            (n = n.stateNode),
            e.nodeType === 8
              ? rl(e.parentNode, n)
              : e.nodeType === 1 && rl(e, n),
            qi(e))
          : rl(ze, n.stateNode));
      break;
    case 4:
      (r = ze),
        (i = _t),
        (ze = n.stateNode.containerInfo),
        (_t = !0),
        fn(e, t, n),
        (ze = r),
        (_t = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ge &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && hu(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      fn(e, t, n);
      break;
    case 1:
      if (
        !Ge &&
        (Ar(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          De(n, t, a);
        }
      fn(e, t, n);
      break;
    case 21:
      fn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ge = (r = Ge) || n.memoizedState !== null), fn(e, t, n), (Ge = r))
        : fn(e, t, n);
      break;
    default:
      fn(e, t, n);
  }
}
function Fd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vx()),
      t.forEach(function (r) {
        var i = Dx.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ze = a.stateNode), (_t = !1);
              break e;
            case 3:
              (ze = a.stateNode.containerInfo), (_t = !0);
              break e;
            case 4:
              (ze = a.stateNode.containerInfo), (_t = !0);
              break e;
          }
          a = a.return;
        }
        if (ze === null) throw Error(N(160));
        Ag(o, s, i), (ze = null), (_t = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        De(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) jg(t, e), (t = t.sibling);
}
function jg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Dt(t, e), Ft(e), r & 4)) {
        try {
          Bi(3, e, e.return), wa(3, e);
        } catch (v) {
          De(e, e.return, v);
        }
        try {
          Bi(5, e, e.return);
        } catch (v) {
          De(e, e.return, v);
        }
      }
      break;
    case 1:
      Dt(t, e), Ft(e), r & 512 && n !== null && Ar(n, n.return);
      break;
    case 5:
      if (
        (Dt(t, e),
        Ft(e),
        r & 512 && n !== null && Ar(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Qi(i, "");
        } catch (v) {
          De(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && nm(i, o),
              Bl(a, s);
            var u = Bl(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? am(i, f)
                : c === "dangerouslySetInnerHTML"
                ? om(i, f)
                : c === "children"
                ? Qi(i, f)
                : Xu(i, c, f, u);
            }
            switch (a) {
              case "input":
                Ol(i, o);
                break;
              case "textarea":
                rm(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Br(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Br(i, !!o.multiple, o.defaultValue, !0)
                      : Br(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[io] = o;
          } catch (v) {
            De(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Dt(t, e), Ft(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          De(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Dt(t, e), Ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          qi(t.containerInfo);
        } catch (v) {
          De(e, e.return, v);
        }
      break;
    case 4:
      Dt(t, e), Ft(e);
      break;
    case 13:
      Dt(t, e),
        Ft(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Lc = Me())),
        r & 4 && Fd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ge = (u = Ge) || c), Dt(t, e), (Ge = u)) : Dt(t, e),
        Ft(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (f = V = c; V !== null; ) {
              switch (((d = V), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Bi(4, d, d.return);
                  break;
                case 1:
                  Ar(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      De(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Ar(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Bd(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (V = g)) : Bd(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = sm("display", s)));
              } catch (v) {
                De(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                De(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Dt(t, e), Ft(e), r & 4 && Fd(e);
      break;
    case 21:
      break;
    default:
      Dt(t, e), Ft(e);
  }
}
function Ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ng(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Qi(i, ""), (r.flags &= -33));
          var o = Id(e);
          gu(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Id(e);
          mu(e, a, s);
          break;
        default:
          throw Error(N(161));
      }
    } catch (l) {
      De(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wx(e, t, n) {
  (V = e), Og(e);
}
function Og(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Jo;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Ge;
        a = Jo;
        var u = Ge;
        if (((Jo = s), (Ge = l) && !u))
          for (V = i; V !== null; )
            (s = V),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Ud(i)
                : l !== null
                ? ((l.return = s), (V = l))
                : Ud(i);
        for (; o !== null; ) (V = o), Og(o), (o = o.sibling);
        (V = i), (Jo = a), (Ge = u);
      }
      zd(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : zd(e);
  }
}
function zd(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || wa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ge)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Pd(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Pd(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && qi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Ge || (t.flags & 512 && pu(t));
      } catch (d) {
        De(t, t.return, d);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function Bd(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function Ud(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            wa(4, t);
          } catch (l) {
            De(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              De(t, i, l);
            }
          }
          var o = t.return;
          try {
            pu(t);
          } catch (l) {
            De(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            pu(t);
          } catch (l) {
            De(t, s, l);
          }
      }
    } catch (l) {
      De(t, t.return, l);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (V = a);
      break;
    }
    V = t.return;
  }
}
var Sx = Math.ceil,
  $s = ln.ReactCurrentDispatcher,
  Rc = ln.ReactCurrentOwner,
  Ct = ln.ReactCurrentBatchConfig,
  ne = 0,
  Ie = null,
  Ae = null,
  Ue = 0,
  ct = 0,
  jr = On(0),
  Oe = 0,
  co = null,
  cr = 0,
  Sa = 0,
  Dc = 0,
  Ui = null,
  ot = null,
  Lc = 0,
  qr = 1 / 0,
  Gt = null,
  Ws = !1,
  yu = null,
  Rn = null,
  qo = !1,
  xn = null,
  Hs = 0,
  bi = 0,
  vu = null,
  gs = -1,
  ys = 0;
function et() {
  return ne & 6 ? Me() : gs !== -1 ? gs : (gs = Me());
}
function Dn(e) {
  return e.mode & 1
    ? ne & 2 && Ue !== 0
      ? Ue & -Ue
      : ix.transition !== null
      ? (ys === 0 && (ys = xm()), ys)
      : ((e = le),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : km(e.type))),
        e)
    : 1;
}
function Ot(e, t, n, r) {
  if (50 < bi) throw ((bi = 0), (vu = null), Error(N(185)));
  So(e, n, r),
    (!(ne & 2) || e !== Ie) &&
      (e === Ie && (!(ne & 2) && (Sa |= n), Oe === 4 && yn(e, Ue)),
      ut(e, r),
      n === 1 && ne === 0 && !(t.mode & 1) && ((qr = Me() + 500), ya && Vn()));
}
function ut(e, t) {
  var n = e.callbackNode;
  i1(e, t);
  var r = Ds(e, e === Ie ? Ue : 0);
  if (r === 0)
    n !== null && Xf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xf(n), t === 1))
      e.tag === 0 ? rx(bd.bind(null, e)) : Hm(bd.bind(null, e)),
        q1(function () {
          !(ne & 6) && Vn();
        }),
        (n = null);
    else {
      switch (wm(r)) {
        case 1:
          n = tc;
          break;
        case 4:
          n = ym;
          break;
        case 16:
          n = Rs;
          break;
        case 536870912:
          n = vm;
          break;
        default:
          n = Rs;
      }
      n = $g(n, Vg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Vg(e, t) {
  if (((gs = -1), (ys = 0), ne & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Hr() && e.callbackNode !== n) return null;
  var r = Ds(e, e === Ie ? Ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ks(e, r);
  else {
    t = r;
    var i = ne;
    ne |= 2;
    var o = Fg();
    (Ie !== e || Ue !== t) && ((Gt = null), (qr = Me() + 500), nr(e, t));
    do
      try {
        Tx();
        break;
      } catch (a) {
        Ig(e, a);
      }
    while (!0);
    pc(),
      ($s.current = o),
      (ne = i),
      Ae !== null ? (t = 0) : ((Ie = null), (Ue = 0), (t = Oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Hl(e)), i !== 0 && ((r = i), (t = xu(e, i)))), t === 1)
    )
      throw ((n = co), nr(e, 0), yn(e, r), ut(e, Me()), n);
    if (t === 6) yn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ex(i) &&
          ((t = Ks(e, r)),
          t === 2 && ((o = Hl(e)), o !== 0 && ((r = o), (t = xu(e, o)))),
          t === 1))
      )
        throw ((n = co), nr(e, 0), yn(e, r), ut(e, Me()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Kn(e, ot, Gt);
          break;
        case 3:
          if (
            (yn(e, r), (r & 130023424) === r && ((t = Lc + 500 - Me()), 10 < t))
          ) {
            if (Ds(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              et(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ql(Kn.bind(null, e, ot, Gt), t);
            break;
          }
          Kn(e, ot, Gt);
          break;
        case 4:
          if ((yn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - jt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Sx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ql(Kn.bind(null, e, ot, Gt), r);
            break;
          }
          Kn(e, ot, Gt);
          break;
        case 5:
          Kn(e, ot, Gt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return ut(e, Me()), e.callbackNode === n ? Vg.bind(null, e) : null;
}
function xu(e, t) {
  var n = Ui;
  return (
    e.current.memoizedState.isDehydrated && (nr(e, t).flags |= 256),
    (e = Ks(e, t)),
    e !== 2 && ((t = ot), (ot = n), t !== null && wu(t)),
    e
  );
}
function wu(e) {
  ot === null ? (ot = e) : ot.push.apply(ot, e);
}
function Ex(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Vt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function yn(e, t) {
  for (
    t &= ~Dc,
      t &= ~Sa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - jt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function bd(e) {
  if (ne & 6) throw Error(N(327));
  Hr();
  var t = Ds(e, 0);
  if (!(t & 1)) return ut(e, Me()), null;
  var n = Ks(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hl(e);
    r !== 0 && ((t = r), (n = xu(e, r)));
  }
  if (n === 1) throw ((n = co), nr(e, 0), yn(e, t), ut(e, Me()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Kn(e, ot, Gt),
    ut(e, Me()),
    null
  );
}
function Mc(e, t) {
  var n = ne;
  ne |= 1;
  try {
    return e(t);
  } finally {
    (ne = n), ne === 0 && ((qr = Me() + 500), ya && Vn());
  }
}
function fr(e) {
  xn !== null && xn.tag === 0 && !(ne & 6) && Hr();
  var t = ne;
  ne |= 1;
  var n = Ct.transition,
    r = le;
  try {
    if (((Ct.transition = null), (le = 1), e)) return e();
  } finally {
    (le = r), (Ct.transition = n), (ne = t), !(ne & 6) && Vn();
  }
}
function _c() {
  (ct = jr.current), pe(jr);
}
function nr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), J1(n)), Ae !== null))
    for (n = Ae.return; n !== null; ) {
      var r = n;
      switch ((fc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && As();
          break;
        case 3:
          Zr(), pe(at), pe(Qe), wc();
          break;
        case 5:
          xc(r);
          break;
        case 4:
          Zr();
          break;
        case 13:
          pe(we);
          break;
        case 19:
          pe(we);
          break;
        case 10:
          mc(r.type._context);
          break;
        case 22:
        case 23:
          _c();
      }
      n = n.return;
    }
  if (
    ((Ie = e),
    (Ae = e = Ln(e.current, null)),
    (Ue = ct = t),
    (Oe = 0),
    (co = null),
    (Dc = Sa = cr = 0),
    (ot = Ui = null),
    Jn !== null)
  ) {
    for (t = 0; t < Jn.length; t++)
      if (((n = Jn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Jn = null;
  }
  return e;
}
function Ig(e, t) {
  do {
    var n = Ae;
    try {
      if ((pc(), (hs.current = bs), Us)) {
        for (var r = Ee.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Us = !1;
      }
      if (
        ((ur = 0),
        (Ve = je = Ee = null),
        (zi = !1),
        (ao = 0),
        (Rc.current = null),
        n === null || n.return === null)
      ) {
        (Oe = 1), (co = t), (Ae = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Ue),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Ld(s);
          if (g !== null) {
            (g.flags &= -257),
              Md(g, s, a, o, t),
              g.mode & 1 && Dd(o, u, t),
              (t = g),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Dd(o, u, t), Nc();
              break e;
            }
            l = Error(N(426));
          }
        } else if (ye && a.mode & 1) {
          var C = Ld(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Md(C, s, a, o, t),
              dc(Jr(l, a));
            break e;
          }
        }
        (o = l = Jr(l, a)),
          Oe !== 4 && (Oe = 2),
          Ui === null ? (Ui = [o]) : Ui.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = wg(o, l, t);
              Ed(o, p);
              break e;
            case 1:
              a = l;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Rn === null || !Rn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Sg(o, a, t);
                Ed(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Bg(n);
    } catch (R) {
      (t = R), Ae === n && n !== null && (Ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Fg() {
  var e = $s.current;
  return ($s.current = bs), e === null ? bs : e;
}
function Nc() {
  (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
    Ie === null || (!(cr & 268435455) && !(Sa & 268435455)) || yn(Ie, Ue);
}
function Ks(e, t) {
  var n = ne;
  ne |= 2;
  var r = Fg();
  (Ie !== e || Ue !== t) && ((Gt = null), nr(e, t));
  do
    try {
      Px();
      break;
    } catch (i) {
      Ig(e, i);
    }
  while (!0);
  if ((pc(), (ne = n), ($s.current = r), Ae !== null)) throw Error(N(261));
  return (Ie = null), (Ue = 0), Oe;
}
function Px() {
  for (; Ae !== null; ) zg(Ae);
}
function Tx() {
  for (; Ae !== null && !Q0(); ) zg(Ae);
}
function zg(e) {
  var t = bg(e.alternate, e, ct);
  (e.memoizedProps = e.pendingProps),
    t === null ? Bg(e) : (Ae = t),
    (Rc.current = null);
}
function Bg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = yx(n, t)), n !== null)) {
        (n.flags &= 32767), (Ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Oe = 6), (Ae = null);
        return;
      }
    } else if (((n = gx(n, t, ct)), n !== null)) {
      Ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ae = t;
      return;
    }
    Ae = t = e;
  } while (t !== null);
  Oe === 0 && (Oe = 5);
}
function Kn(e, t, n) {
  var r = le,
    i = Ct.transition;
  try {
    (Ct.transition = null), (le = 1), Cx(e, t, n, r);
  } finally {
    (Ct.transition = i), (le = r);
  }
  return null;
}
function Cx(e, t, n, r) {
  do Hr();
  while (xn !== null);
  if (ne & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (o1(e, o),
    e === Ie && ((Ae = Ie = null), (Ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      qo ||
      ((qo = !0),
      $g(Rs, function () {
        return Hr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ct.transition), (Ct.transition = null);
    var s = le;
    le = 1;
    var a = ne;
    (ne |= 4),
      (Rc.current = null),
      xx(e, n),
      jg(n, e),
      H1(Zl),
      (Ls = !!Xl),
      (Zl = Xl = null),
      (e.current = n),
      wx(n),
      X0(),
      (ne = a),
      (le = s),
      (Ct.transition = o);
  } else e.current = n;
  if (
    (qo && ((qo = !1), (xn = e), (Hs = i)),
    (o = e.pendingLanes),
    o === 0 && (Rn = null),
    q0(n.stateNode),
    ut(e, Me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ws) throw ((Ws = !1), (e = yu), (yu = null), e);
  return (
    Hs & 1 && e.tag !== 0 && Hr(),
    (o = e.pendingLanes),
    o & 1 ? (e === vu ? bi++ : ((bi = 0), (vu = e))) : (bi = 0),
    Vn(),
    null
  );
}
function Hr() {
  if (xn !== null) {
    var e = wm(Hs),
      t = Ct.transition,
      n = le;
    try {
      if (((Ct.transition = null), (le = 16 > e ? 16 : e), xn === null))
        var r = !1;
      else {
        if (((e = xn), (xn = null), (Hs = 0), ne & 6)) throw Error(N(331));
        var i = ne;
        for (ne |= 4, V = e.current; V !== null; ) {
          var o = V,
            s = o.child;
          if (V.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bi(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (V = f);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        g = c.return;
                      if ((_g(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (V = d);
                        break;
                      }
                      V = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var C = v.sibling;
                    (v.sibling = null), (v = C);
                  } while (v !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (V = s);
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bi(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (V = p);
                break e;
              }
              V = o.return;
            }
        }
        var h = e.current;
        for (V = h; V !== null; ) {
          s = V;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (V = m);
          else
            e: for (s = h; V !== null; ) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wa(9, a);
                  }
                } catch (R) {
                  De(a, a.return, R);
                }
              if (a === s) {
                V = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (V = S);
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((ne = i), Vn(), Ut && typeof Ut.onPostCommitFiberRoot == "function")
        )
          try {
            Ut.onPostCommitFiberRoot(da, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (le = n), (Ct.transition = t);
    }
  }
  return !1;
}
function $d(e, t, n) {
  (t = Jr(n, t)),
    (t = wg(e, t, 1)),
    (e = kn(e, t, 1)),
    (t = et()),
    e !== null && (So(e, 1, t), ut(e, t));
}
function De(e, t, n) {
  if (e.tag === 3) $d(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $d(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Rn === null || !Rn.has(r)))
        ) {
          (e = Jr(n, e)),
            (e = Sg(t, e, 1)),
            (t = kn(t, e, 1)),
            (e = et()),
            t !== null && (So(t, 1, e), ut(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function kx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = et()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ie === e &&
      (Ue & n) === n &&
      (Oe === 4 || (Oe === 3 && (Ue & 130023424) === Ue && 500 > Me() - Lc)
        ? nr(e, 0)
        : (Dc |= n)),
    ut(e, t);
}
function Ug(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = $o), ($o <<= 1), !($o & 130023424) && ($o = 4194304))
      : (t = 1));
  var n = et();
  (e = rn(e, t)), e !== null && (So(e, t, n), ut(e, n));
}
function Rx(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ug(e, n);
}
function Dx(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Ug(e, n);
}
var bg;
bg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || at.current) st = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (st = !1), mx(e, t, n);
      st = !!(e.flags & 131072);
    }
  else (st = !1), ye && t.flags & 1048576 && Km(t, Vs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ms(e, t), (e = t.pendingProps);
      var i = Yr(t, Qe.current);
      Wr(t, n), (i = Ec(null, t, r, e, i, n));
      var o = Pc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            lt(r) ? ((o = !0), js(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            yc(t),
            (i.updater = xa),
            (t.stateNode = i),
            (i._reactInternals = t),
            su(t, r, e, n),
            (t = uu(null, t, r, !0, o, n)))
          : ((t.tag = 0), ye && o && cc(t), Je(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ms(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Mx(r)),
          (e = Mt(r, e)),
          i)
        ) {
          case 0:
            t = lu(null, t, r, e, n);
            break e;
          case 1:
            t = Ad(null, t, r, e, n);
            break e;
          case 11:
            t = _d(null, t, r, e, n);
            break e;
          case 14:
            t = Nd(null, t, r, Mt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Mt(r, i)),
        lu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Mt(r, i)),
        Ad(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Cg(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Jm(e, t),
          zs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Jr(Error(N(423)), t)), (t = jd(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Jr(Error(N(424)), t)), (t = jd(e, t, r, n, i));
            break e;
          } else
            for (
              dt = Cn(t.stateNode.containerInfo.firstChild),
                pt = t,
                ye = !0,
                At = null,
                n = Xm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qr(), r === i)) {
            t = on(e, t, n);
            break e;
          }
          Je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qm(t),
        e === null && ru(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Jl(r, i) ? (s = null) : o !== null && Jl(r, o) && (t.flags |= 32),
        Tg(e, t),
        Je(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ru(t), null;
    case 13:
      return kg(e, t, n);
    case 4:
      return (
        vc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xr(t, null, r, n)) : Je(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Mt(r, i)),
        _d(e, t, r, i, n)
      );
    case 7:
      return Je(e, t, t.pendingProps, n), t.child;
    case 8:
      return Je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          de(Is, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Vt(o.value, s)) {
            if (o.children === i.children && !at.current) {
              t = on(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Zt(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      iu(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(N(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  iu(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Je(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Wr(t, n),
        (i = kt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Je(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Mt(r, t.pendingProps)),
        (i = Mt(r.type, i)),
        Nd(e, t, r, i, n)
      );
    case 15:
      return Eg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Mt(r, i)),
        ms(e, t),
        (t.tag = 1),
        lt(r) ? ((e = !0), js(t)) : (e = !1),
        Wr(t, n),
        xg(t, r, i),
        su(t, r, i, n),
        uu(null, t, r, !0, e, n)
      );
    case 19:
      return Rg(e, t, n);
    case 22:
      return Pg(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function $g(e, t) {
  return gm(e, t);
}
function Lx(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Tt(e, t, n, r) {
  return new Lx(e, t, n, r);
}
function Ac(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Mx(e) {
  if (typeof e == "function") return Ac(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ju)) return 11;
    if (e === qu) return 14;
  }
  return 2;
}
function Ln(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Tt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function vs(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ac(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Tr:
        return rr(n.children, i, o, t);
      case Zu:
        (s = 8), (i |= 8);
        break;
      case Ml:
        return (
          (e = Tt(12, n, t, i | 2)), (e.elementType = Ml), (e.lanes = o), e
        );
      case _l:
        return (e = Tt(13, n, t, i)), (e.elementType = _l), (e.lanes = o), e;
      case Nl:
        return (e = Tt(19, n, t, i)), (e.elementType = Nl), (e.lanes = o), e;
      case qp:
        return Ea(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Zp:
              s = 10;
              break e;
            case Jp:
              s = 9;
              break e;
            case Ju:
              s = 11;
              break e;
            case qu:
              s = 14;
              break e;
            case pn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Tt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function rr(e, t, n, r) {
  return (e = Tt(7, e, r, t)), (e.lanes = n), e;
}
function Ea(e, t, n, r) {
  return (
    (e = Tt(22, e, r, t)),
    (e.elementType = qp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fl(e, t, n) {
  return (e = Tt(6, e, null, t)), (e.lanes = n), e;
}
function dl(e, t, n) {
  return (
    (t = Tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function _x(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ka(0)),
    (this.expirationTimes = Ka(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ka(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function jc(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new _x(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Tt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yc(o),
    e
  );
}
function Nx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wg(e) {
  if (!e) return _n;
  e = e._reactInternals;
  e: {
    if (pr(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (lt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (lt(n)) return Wm(e, n, t);
  }
  return t;
}
function Hg(e, t, n, r, i, o, s, a, l) {
  return (
    (e = jc(n, r, !0, e, i, o, s, a, l)),
    (e.context = Wg(null)),
    (n = e.current),
    (r = et()),
    (i = Dn(n)),
    (o = Zt(r, i)),
    (o.callback = t ?? null),
    kn(n, o, i),
    (e.current.lanes = i),
    So(e, i, r),
    ut(e, r),
    e
  );
}
function Pa(e, t, n, r) {
  var i = t.current,
    o = et(),
    s = Dn(i);
  return (
    (n = Wg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Zt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = kn(i, t, s)),
    e !== null && (Ot(e, i, s, o), ds(e, i, s)),
    s
  );
}
function Gs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Oc(e, t) {
  Wd(e, t), (e = e.alternate) && Wd(e, t);
}
var Kg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Vc(e) {
  this._internalRoot = e;
}
Ta.prototype.render = Vc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Pa(e, t, null, null);
};
Ta.prototype.unmount = Vc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fr(function () {
      Pa(null, e, null, null);
    }),
      (t[nn] = null);
  }
};
function Ta(e) {
  this._internalRoot = e;
}
Ta.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Pm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gn.length && t !== 0 && t < gn[n].priority; n++);
    gn.splice(n, 0, e), n === 0 && Cm(e);
  }
};
function Ic(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ca(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hd() {}
function Ax(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Gs(s);
        o.call(u);
      };
    }
    var s = Hg(t, r, e, 0, null, !1, !1, "", Hd);
    return (
      (e._reactRootContainer = s),
      (e[nn] = s.current),
      no(e.nodeType === 8 ? e.parentNode : e),
      fr(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Gs(l);
      a.call(u);
    };
  }
  var l = jc(e, 0, !1, null, null, !1, !1, "", Hd);
  return (
    (e._reactRootContainer = l),
    (e[nn] = l.current),
    no(e.nodeType === 8 ? e.parentNode : e),
    fr(function () {
      Pa(t, l, n, r);
    }),
    l
  );
}
function ka(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Gs(s);
        a.call(l);
      };
    }
    Pa(t, s, e, i);
  } else s = Ax(n, t, e, i, r);
  return Gs(s);
}
Sm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Di(t.pendingLanes);
        n !== 0 &&
          (nc(t, n | 1), ut(t, Me()), !(ne & 6) && ((qr = Me() + 500), Vn()));
      }
      break;
    case 13:
      fr(function () {
        var r = rn(e, 1);
        if (r !== null) {
          var i = et();
          Ot(r, e, 1, i);
        }
      }),
        Oc(e, 1);
  }
};
rc = function (e) {
  if (e.tag === 13) {
    var t = rn(e, 134217728);
    if (t !== null) {
      var n = et();
      Ot(t, e, 134217728, n);
    }
    Oc(e, 134217728);
  }
};
Em = function (e) {
  if (e.tag === 13) {
    var t = Dn(e),
      n = rn(e, t);
    if (n !== null) {
      var r = et();
      Ot(n, e, t, r);
    }
    Oc(e, t);
  }
};
Pm = function () {
  return le;
};
Tm = function (e, t) {
  var n = le;
  try {
    return (le = e), t();
  } finally {
    le = n;
  }
};
bl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ol(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ga(r);
            if (!i) throw Error(N(90));
            tm(r), Ol(r, i);
          }
        }
      }
      break;
    case "textarea":
      rm(e, n);
      break;
    case "select":
      (t = n.value), t != null && Br(e, !!n.multiple, t, !1);
  }
};
cm = Mc;
fm = fr;
var jx = { usingClientEntryPoint: !1, Events: [Po, Dr, ga, lm, um, Mc] },
  Si = {
    findFiberByHostInstance: Zn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ox = {
    bundleType: Si.bundleType,
    version: Si.version,
    rendererPackageName: Si.rendererPackageName,
    rendererConfig: Si.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ln.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = pm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Si.findFiberByHostInstance,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var es = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!es.isDisabled && es.supportsFiber)
    try {
      (da = es.inject(Ox)), (Ut = es);
    } catch {}
}
vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jx;
vt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ic(t)) throw Error(N(200));
  return Nx(e, t, null, n);
};
vt.createRoot = function (e, t) {
  if (!Ic(e)) throw Error(N(299));
  var n = !1,
    r = "",
    i = Kg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = jc(e, 1, !1, null, null, n, !1, r, i)),
    (e[nn] = t.current),
    no(e.nodeType === 8 ? e.parentNode : e),
    new Vc(t)
  );
};
vt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = pm(t)), (e = e === null ? null : e.stateNode), e;
};
vt.flushSync = function (e) {
  return fr(e);
};
vt.hydrate = function (e, t, n) {
  if (!Ca(t)) throw Error(N(200));
  return ka(null, e, t, !0, n);
};
vt.hydrateRoot = function (e, t, n) {
  if (!Ic(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Kg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Hg(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[nn] = t.current),
    no(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ta(t);
};
vt.render = function (e, t, n) {
  if (!Ca(t)) throw Error(N(200));
  return ka(null, e, t, !1, n);
};
vt.unmountComponentAtNode = function (e) {
  if (!Ca(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (fr(function () {
        ka(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nn] = null);
        });
      }),
      !0)
    : !1;
};
vt.unstable_batchedUpdates = Mc;
vt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ca(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return ka(e, t, n, !1, r);
};
vt.version = "18.3.1-next-f1338f8080-20240426";
function Gg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gg);
    } catch (e) {
      console.error(e);
    }
}
Gg(), (Gp.exports = vt);
var Fc = Gp.exports;
const Vx = Op(Fc),
  Ix = jp({ __proto__: null, default: Vx }, [Fc]);
var Yg,
  Kd = Fc;
(Yg = Kd.createRoot), Kd.hydrateRoot;
/**
 * @remix-run/router v1.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ge() {
  return (
    (ge = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ge.apply(this, arguments)
  );
}
var Ne;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ne || (Ne = {}));
const Gd = "popstate";
function Fx(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return fo(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : dr(i);
  }
  return Bx(t, n, null, e);
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ei(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function zx() {
  return Math.random().toString(36).substr(2, 8);
}
function Yd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function fo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ge(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? In(t) : t,
      { state: n, key: (t && t.key) || r || zx() }
    )
  );
}
function dr(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function In(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Bx(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = Ne.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(ge({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = Ne.Pop;
    let C = c(),
      p = C == null ? null : C - u;
    (u = C), l && l({ action: a, location: v.location, delta: p });
  }
  function d(C, p) {
    a = Ne.Push;
    let h = fo(v.location, C, p);
    u = c() + 1;
    let m = Yd(h, u),
      S = v.createHref(h);
    try {
      s.pushState(m, "", S);
    } catch (R) {
      if (R instanceof DOMException && R.name === "DataCloneError") throw R;
      i.location.assign(S);
    }
    o && l && l({ action: a, location: v.location, delta: 1 });
  }
  function g(C, p) {
    a = Ne.Replace;
    let h = fo(v.location, C, p);
    u = c();
    let m = Yd(h, u),
      S = v.createHref(h);
    s.replaceState(m, "", S),
      o && l && l({ action: a, location: v.location, delta: 0 });
  }
  function y(C) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof C == "string" ? C : dr(C);
    return (
      (h = h.replace(/ $/, "%20")),
      Q(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, p)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(C) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Gd, f),
        (l = C),
        () => {
          i.removeEventListener(Gd, f), (l = null);
        }
      );
    },
    createHref(C) {
      return t(i, C);
    },
    createURL: y,
    encodeLocation(C) {
      let p = y(C);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: g,
    go(C) {
      return s.go(C);
    },
  };
  return v;
}
var ue;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ue || (ue = {}));
const Ux = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function bx(e) {
  return e.index === !0;
}
function Ys(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let s = [...n, String(o)],
        a = typeof i.id == "string" ? i.id : s.join("-");
      if (
        (Q(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        Q(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        bx(i))
      ) {
        let l = ge({}, i, t(i), { id: a });
        return (r[a] = l), l;
      } else {
        let l = ge({}, i, t(i), { id: a, children: void 0 });
        return (
          (r[a] = l), i.children && (l.children = Ys(i.children, t, s, r)), l
        );
      }
    })
  );
}
function Qn(e, t, n) {
  return n === void 0 && (n = "/"), xs(e, t, n, !1);
}
function xs(e, t, n, r) {
  let i = typeof t == "string" ? In(t) : t,
    o = sn(i.pathname || "/", n);
  if (o == null) return null;
  let s = Qg(e);
  Wx(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = tw(o);
    a = qx(s[l], u, r);
  }
  return a;
}
function $x(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Qg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (Q(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Jt([r, l.relativePath]),
      c = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (Q(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Qg(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Zx(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of Xg(o.path)) i(o, s, l);
    }),
    t
  );
}
function Xg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = Xg(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function Wx(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Jx(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Hx = /^:[\w-]+$/,
  Kx = 3,
  Gx = 2,
  Yx = 1,
  Qx = 10,
  Xx = -2,
  Qd = (e) => e === "*";
function Zx(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Qd) && (r += Xx),
    t && (r += Gx),
    n
      .filter((i) => !Qd(i))
      .reduce((i, o) => i + (Hx.test(o) ? Kx : o === "" ? Yx : Qx), r)
  );
}
function Jx(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function qx(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      f = Qs(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      d = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Qs(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      s.push({
        params: i,
        pathname: Jt([o, f.pathname]),
        pathnameBase: iw(Jt([o, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (o = Jt([o, f.pathnameBase]));
  }
  return s;
}
function Qs(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ew(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: g } = c;
      if (d === "*") {
        let v = a[f] || "";
        s = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[f];
      return (
        g && !y ? (u[d] = void 0) : (u[d] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function ew(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ei(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function tw(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ei(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function sn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function nw(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? In(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : rw(n, t)) : t,
    search: ow(r),
    hash: sw(i),
  };
}
function rw(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function hl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Zg(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function zc(e, t) {
  let n = Zg(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Bc(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = In(e))
    : ((i = ge({}, e)),
      Q(
        !i.pathname || !i.pathname.includes("?"),
        hl("?", "pathname", "search", i)
      ),
      Q(
        !i.pathname || !i.pathname.includes("#"),
        hl("#", "pathname", "hash", i)
      ),
      Q(!i.search || !i.search.includes("#"), hl("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      i.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = nw(i, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Jt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  iw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ow = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  sw = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Xs {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Ra(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Jg = ["post", "put", "patch", "delete"],
  aw = new Set(Jg),
  lw = ["get", ...Jg],
  uw = new Set(lw),
  cw = new Set([301, 302, 303, 307, 308]),
  fw = new Set([307, 308]),
  pl = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  dw = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ei = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Uc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  hw = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  qg = "remix-router-transitions";
function pw(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Q(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let w = e.detectErrorBoundary;
    i = (T) => ({ hasErrorBoundary: w(T) });
  } else i = hw;
  let o = {},
    s = Ys(e.routes, i, void 0, o),
    a,
    l = e.basename || "/",
    u = e.dataStrategy || vw,
    c = e.patchRoutesOnNavigation,
    f = ge(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    d = null,
    g = new Set(),
    y = null,
    v = null,
    C = null,
    p = e.hydrationData != null,
    h = Qn(s, e.history.location, l),
    m = null;
  if (h == null && !c) {
    let w = it(404, { pathname: e.history.location.pathname }),
      { matches: T, route: D } = sh(s);
    (h = T), (m = { [D.id]: w });
  }
  h &&
    !e.hydrationData &&
    jo(h, s, e.history.location.pathname).active &&
    (h = null);
  let S;
  if (h)
    if (h.some((w) => w.route.lazy)) S = !1;
    else if (!h.some((w) => w.route.loader)) S = !0;
    else if (f.v7_partialHydration) {
      let w = e.hydrationData ? e.hydrationData.loaderData : null,
        T = e.hydrationData ? e.hydrationData.errors : null;
      if (T) {
        let D = h.findIndex((M) => T[M.route.id] !== void 0);
        S = h.slice(0, D + 1).every((M) => !Eu(M.route, w, T));
      } else S = h.every((D) => !Eu(D.route, w, T));
    } else S = e.hydrationData != null;
  else if (((S = !1), (h = []), f.v7_partialHydration)) {
    let w = jo(null, s, e.history.location.pathname);
    w.active && w.matches && (h = w.matches);
  }
  let R,
    x = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: h,
      initialized: S,
      navigation: pl,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    L = Ne.Pop,
    P = !1,
    _,
    A = !1,
    K = new Map(),
    q = null,
    ae = !1,
    re = !1,
    $e = [],
    rt = new Set(),
    H = new Map(),
    j = 0,
    B = -1,
    U = new Map(),
    Y = new Set(),
    Z = new Map(),
    ve = new Map(),
    oe = new Set(),
    Te = new Map(),
    xe = new Map(),
    Xe;
  function Va() {
    if (
      ((d = e.history.listen((w) => {
        let { action: T, location: D, delta: M } = w;
        if (Xe) {
          Xe(), (Xe = void 0);
          return;
        }
        ei(
          xe.size === 0 || M != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let O = jf({
          currentLocation: x.location,
          nextLocation: D,
          historyAction: T,
        });
        if (O && M != null) {
          let b = new Promise((G) => {
            Xe = G;
          });
          e.history.go(M * -1),
            Ao(O, {
              state: "blocked",
              location: D,
              proceed() {
                Ao(O, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: D,
                }),
                  b.then(() => e.history.go(M));
              },
              reset() {
                let G = new Map(x.blockers);
                G.set(O, Ei), Ze({ blockers: G });
              },
            });
          return;
        }
        return Un(T, D);
      })),
      n)
    ) {
      Nw(t, K);
      let w = () => Aw(t, K);
      t.addEventListener("pagehide", w),
        (q = () => t.removeEventListener("pagehide", w));
    }
    return x.initialized || Un(Ne.Pop, x.location, { initialHydration: !0 }), R;
  }
  function Qv() {
    d && d(),
      q && q(),
      g.clear(),
      _ && _.abort(),
      x.fetchers.forEach((w, T) => No(T)),
      x.blockers.forEach((w, T) => Af(T));
  }
  function Xv(w) {
    return g.add(w), () => g.delete(w);
  }
  function Ze(w, T) {
    T === void 0 && (T = {}), (x = ge({}, x, w));
    let D = [],
      M = [];
    f.v7_fetcherPersist &&
      x.fetchers.forEach((O, b) => {
        O.state === "idle" && (oe.has(b) ? M.push(b) : D.push(b));
      }),
      oe.forEach((O) => {
        !x.fetchers.has(O) && !H.has(O) && M.push(O);
      }),
      [...g].forEach((O) =>
        O(x, {
          deletedFetchers: M,
          viewTransitionOpts: T.viewTransitionOpts,
          flushSync: T.flushSync === !0,
        })
      ),
      f.v7_fetcherPersist
        ? (D.forEach((O) => x.fetchers.delete(O)), M.forEach((O) => No(O)))
        : M.forEach((O) => oe.delete(O));
  }
  function gr(w, T, D) {
    var M, O;
    let { flushSync: b } = D === void 0 ? {} : D,
      G =
        x.actionData != null &&
        x.navigation.formMethod != null &&
        Nt(x.navigation.formMethod) &&
        x.navigation.state === "loading" &&
        ((M = w.state) == null ? void 0 : M._isRedirect) !== !0,
      F;
    T.actionData
      ? Object.keys(T.actionData).length > 0
        ? (F = T.actionData)
        : (F = null)
      : G
      ? (F = x.actionData)
      : (F = null);
    let z = T.loaderData
        ? ih(x.loaderData, T.loaderData, T.matches || [], T.errors)
        : x.loaderData,
      I = x.blockers;
    I.size > 0 && ((I = new Map(I)), I.forEach((te, Fe) => I.set(Fe, Ei)));
    let $ =
      P === !0 ||
      (x.navigation.formMethod != null &&
        Nt(x.navigation.formMethod) &&
        ((O = w.state) == null ? void 0 : O._isRedirect) !== !0);
    a && ((s = a), (a = void 0)),
      ae ||
        L === Ne.Pop ||
        (L === Ne.Push
          ? e.history.push(w, w.state)
          : L === Ne.Replace && e.history.replace(w, w.state));
    let J;
    if (L === Ne.Pop) {
      let te = K.get(x.location.pathname);
      te && te.has(w.pathname)
        ? (J = { currentLocation: x.location, nextLocation: w })
        : K.has(w.pathname) &&
          (J = { currentLocation: w, nextLocation: x.location });
    } else if (A) {
      let te = K.get(x.location.pathname);
      te
        ? te.add(w.pathname)
        : ((te = new Set([w.pathname])), K.set(x.location.pathname, te)),
        (J = { currentLocation: x.location, nextLocation: w });
    }
    Ze(
      ge({}, T, {
        actionData: F,
        loaderData: z,
        historyAction: L,
        location: w,
        initialized: !0,
        navigation: pl,
        revalidation: "idle",
        restoreScrollPosition: Vf(w, T.matches || x.matches),
        preventScrollReset: $,
        blockers: I,
      }),
      { viewTransitionOpts: J, flushSync: b === !0 }
    ),
      (L = Ne.Pop),
      (P = !1),
      (A = !1),
      (ae = !1),
      (re = !1),
      ($e = []);
  }
  async function kf(w, T) {
    if (typeof w == "number") {
      e.history.go(w);
      return;
    }
    let D = Su(
        x.location,
        x.matches,
        l,
        f.v7_prependBasename,
        w,
        f.v7_relativeSplatPath,
        T == null ? void 0 : T.fromRouteId,
        T == null ? void 0 : T.relative
      ),
      {
        path: M,
        submission: O,
        error: b,
      } = Xd(f.v7_normalizeFormMethod, !1, D, T),
      G = x.location,
      F = fo(x.location, M, T && T.state);
    F = ge({}, F, e.history.encodeLocation(F));
    let z = T && T.replace != null ? T.replace : void 0,
      I = Ne.Push;
    z === !0
      ? (I = Ne.Replace)
      : z === !1 ||
        (O != null &&
          Nt(O.formMethod) &&
          O.formAction === x.location.pathname + x.location.search &&
          (I = Ne.Replace));
    let $ =
        T && "preventScrollReset" in T ? T.preventScrollReset === !0 : void 0,
      J = (T && T.flushSync) === !0,
      te = jf({ currentLocation: G, nextLocation: F, historyAction: I });
    if (te) {
      Ao(te, {
        state: "blocked",
        location: F,
        proceed() {
          Ao(te, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            kf(w, T);
        },
        reset() {
          let Fe = new Map(x.blockers);
          Fe.set(te, Ei), Ze({ blockers: Fe });
        },
      });
      return;
    }
    return await Un(I, F, {
      submission: O,
      pendingError: b,
      preventScrollReset: $,
      replace: T && T.replace,
      enableViewTransition: T && T.viewTransition,
      flushSync: J,
    });
  }
  function Zv() {
    if (
      (Ia(),
      Ze({ revalidation: "loading" }),
      x.navigation.state !== "submitting")
    ) {
      if (x.navigation.state === "idle") {
        Un(x.historyAction, x.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Un(L || x.historyAction, x.navigation.location, {
        overrideNavigation: x.navigation,
        enableViewTransition: A === !0,
      });
    }
  }
  async function Un(w, T, D) {
    _ && _.abort(),
      (_ = null),
      (L = w),
      (ae = (D && D.startUninterruptedRevalidation) === !0),
      a0(x.location, x.matches),
      (P = (D && D.preventScrollReset) === !0),
      (A = (D && D.enableViewTransition) === !0);
    let M = a || s,
      O = D && D.overrideNavigation,
      b = Qn(M, T, l),
      G = (D && D.flushSync) === !0,
      F = jo(b, M, T.pathname);
    if ((F.active && F.matches && (b = F.matches), !b)) {
      let { error: ce, notFoundMatches: se, route: Ce } = Fa(T.pathname);
      gr(
        T,
        { matches: se, loaderData: {}, errors: { [Ce.id]: ce } },
        { flushSync: G }
      );
      return;
    }
    if (
      x.initialized &&
      !re &&
      Tw(x.location, T) &&
      !(D && D.submission && Nt(D.submission.formMethod))
    ) {
      gr(T, { matches: b }, { flushSync: G });
      return;
    }
    _ = new AbortController();
    let z = Sr(e.history, T, _.signal, D && D.submission),
      I;
    if (D && D.pendingError)
      I = [Xn(b).route.id, { type: ue.error, error: D.pendingError }];
    else if (D && D.submission && Nt(D.submission.formMethod)) {
      let ce = await Jv(z, T, D.submission, b, F.active, {
        replace: D.replace,
        flushSync: G,
      });
      if (ce.shortCircuited) return;
      if (ce.pendingActionResult) {
        let [se, Ce] = ce.pendingActionResult;
        if (ft(Ce) && Ra(Ce.error) && Ce.error.status === 404) {
          (_ = null),
            gr(T, {
              matches: ce.matches,
              loaderData: {},
              errors: { [se]: Ce.error },
            });
          return;
        }
      }
      (b = ce.matches || b),
        (I = ce.pendingActionResult),
        (O = ml(T, D.submission)),
        (G = !1),
        (F.active = !1),
        (z = Sr(e.history, z.url, z.signal));
    }
    let {
      shortCircuited: $,
      matches: J,
      loaderData: te,
      errors: Fe,
    } = await qv(
      z,
      T,
      b,
      F.active,
      O,
      D && D.submission,
      D && D.fetcherSubmission,
      D && D.replace,
      D && D.initialHydration === !0,
      G,
      I
    );
    $ ||
      ((_ = null),
      gr(T, ge({ matches: J || b }, oh(I), { loaderData: te, errors: Fe })));
  }
  async function Jv(w, T, D, M, O, b) {
    b === void 0 && (b = {}), Ia();
    let G = Mw(T, D);
    if ((Ze({ navigation: G }, { flushSync: b.flushSync === !0 }), O)) {
      let I = await Oo(M, T.pathname, w.signal);
      if (I.type === "aborted") return { shortCircuited: !0 };
      if (I.type === "error") {
        let $ = Xn(I.partialMatches).route.id;
        return {
          matches: I.partialMatches,
          pendingActionResult: [$, { type: ue.error, error: I.error }],
        };
      } else if (I.matches) M = I.matches;
      else {
        let { notFoundMatches: $, error: J, route: te } = Fa(T.pathname);
        return {
          matches: $,
          pendingActionResult: [te.id, { type: ue.error, error: J }],
        };
      }
    }
    let F,
      z = Mi(M, T);
    if (!z.route.action && !z.route.lazy)
      F = {
        type: ue.error,
        error: it(405, {
          method: w.method,
          pathname: T.pathname,
          routeId: z.route.id,
        }),
      };
    else if (
      ((F = (await ci("action", x, w, [z], M, null))[z.route.id]),
      w.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (er(F)) {
      let I;
      return (
        b && b.replace != null
          ? (I = b.replace)
          : (I =
              th(F.response.headers.get("Location"), new URL(w.url), l) ===
              x.location.pathname + x.location.search),
        await bn(w, F, !0, { submission: D, replace: I }),
        { shortCircuited: !0 }
      );
    }
    if (wn(F)) throw it(400, { type: "defer-action" });
    if (ft(F)) {
      let I = Xn(M, z.route.id);
      return (
        (b && b.replace) !== !0 && (L = Ne.Push),
        { matches: M, pendingActionResult: [I.route.id, F] }
      );
    }
    return { matches: M, pendingActionResult: [z.route.id, F] };
  }
  async function qv(w, T, D, M, O, b, G, F, z, I, $) {
    let J = O || ml(T, b),
      te = b || G || lh(J),
      Fe = !ae && (!f.v7_partialHydration || !z);
    if (M) {
      if (Fe) {
        let ke = Rf($);
        Ze(ge({ navigation: J }, ke !== void 0 ? { actionData: ke } : {}), {
          flushSync: I,
        });
      }
      let ie = await Oo(D, T.pathname, w.signal);
      if (ie.type === "aborted") return { shortCircuited: !0 };
      if (ie.type === "error") {
        let ke = Xn(ie.partialMatches).route.id;
        return {
          matches: ie.partialMatches,
          loaderData: {},
          errors: { [ke]: ie.error },
        };
      } else if (ie.matches) D = ie.matches;
      else {
        let { error: ke, notFoundMatches: vr, route: hi } = Fa(T.pathname);
        return { matches: vr, loaderData: {}, errors: { [hi.id]: ke } };
      }
    }
    let ce = a || s,
      [se, Ce] = Jd(
        e.history,
        x,
        D,
        te,
        T,
        f.v7_partialHydration && z === !0,
        f.v7_skipActionErrorRevalidation,
        re,
        $e,
        rt,
        oe,
        Z,
        Y,
        ce,
        l,
        $
      );
    if (
      (za(
        (ie) =>
          !(D && D.some((ke) => ke.route.id === ie)) ||
          (se && se.some((ke) => ke.route.id === ie))
      ),
      (B = ++j),
      se.length === 0 && Ce.length === 0)
    ) {
      let ie = _f();
      return (
        gr(
          T,
          ge(
            {
              matches: D,
              loaderData: {},
              errors: $ && ft($[1]) ? { [$[0]]: $[1].error } : null,
            },
            oh($),
            ie ? { fetchers: new Map(x.fetchers) } : {}
          ),
          { flushSync: I }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Fe) {
      let ie = {};
      if (!M) {
        ie.navigation = J;
        let ke = Rf($);
        ke !== void 0 && (ie.actionData = ke);
      }
      Ce.length > 0 && (ie.fetchers = e0(Ce)), Ze(ie, { flushSync: I });
    }
    Ce.forEach((ie) => {
      cn(ie.key), ie.controller && H.set(ie.key, ie.controller);
    });
    let yr = () => Ce.forEach((ie) => cn(ie.key));
    _ && _.signal.addEventListener("abort", yr);
    let { loaderResults: fi, fetcherResults: Kt } = await Df(x, D, se, Ce, w);
    if (w.signal.aborted) return { shortCircuited: !0 };
    _ && _.signal.removeEventListener("abort", yr),
      Ce.forEach((ie) => H.delete(ie.key));
    let It = ts(fi);
    if (It)
      return await bn(w, It.result, !0, { replace: F }), { shortCircuited: !0 };
    if (((It = ts(Kt)), It))
      return (
        Y.add(It.key),
        await bn(w, It.result, !0, { replace: F }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ba, errors: di } = rh(x, D, fi, $, Ce, Kt, Te);
    Te.forEach((ie, ke) => {
      ie.subscribe((vr) => {
        (vr || ie.done) && Te.delete(ke);
      });
    }),
      f.v7_partialHydration && z && x.errors && (di = ge({}, x.errors, di));
    let $n = _f(),
      Vo = Nf(B),
      Io = $n || Vo || Ce.length > 0;
    return ge(
      { matches: D, loaderData: Ba, errors: di },
      Io ? { fetchers: new Map(x.fetchers) } : {}
    );
  }
  function Rf(w) {
    if (w && !ft(w[1])) return { [w[0]]: w[1].data };
    if (x.actionData)
      return Object.keys(x.actionData).length === 0 ? null : x.actionData;
  }
  function e0(w) {
    return (
      w.forEach((T) => {
        let D = x.fetchers.get(T.key),
          M = Pi(void 0, D ? D.data : void 0);
        x.fetchers.set(T.key, M);
      }),
      new Map(x.fetchers)
    );
  }
  function t0(w, T, D, M) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    cn(w);
    let O = (M && M.flushSync) === !0,
      b = a || s,
      G = Su(
        x.location,
        x.matches,
        l,
        f.v7_prependBasename,
        D,
        f.v7_relativeSplatPath,
        T,
        M == null ? void 0 : M.relative
      ),
      F = Qn(b, G, l),
      z = jo(F, b, G);
    if ((z.active && z.matches && (F = z.matches), !F)) {
      Ht(w, T, it(404, { pathname: G }), { flushSync: O });
      return;
    }
    let {
      path: I,
      submission: $,
      error: J,
    } = Xd(f.v7_normalizeFormMethod, !0, G, M);
    if (J) {
      Ht(w, T, J, { flushSync: O });
      return;
    }
    let te = Mi(F, I),
      Fe = (M && M.preventScrollReset) === !0;
    if ($ && Nt($.formMethod)) {
      n0(w, T, I, te, F, z.active, O, Fe, $);
      return;
    }
    Z.set(w, { routeId: T, path: I }), r0(w, T, I, te, F, z.active, O, Fe, $);
  }
  async function n0(w, T, D, M, O, b, G, F, z) {
    Ia(), Z.delete(w);
    function I(_e) {
      if (!_e.route.action && !_e.route.lazy) {
        let xr = it(405, { method: z.formMethod, pathname: D, routeId: T });
        return Ht(w, T, xr, { flushSync: G }), !0;
      }
      return !1;
    }
    if (!b && I(M)) return;
    let $ = x.fetchers.get(w);
    un(w, _w(z, $), { flushSync: G });
    let J = new AbortController(),
      te = Sr(e.history, D, J.signal, z);
    if (b) {
      let _e = await Oo(O, D, te.signal);
      if (_e.type === "aborted") return;
      if (_e.type === "error") {
        Ht(w, T, _e.error, { flushSync: G });
        return;
      } else if (_e.matches) {
        if (((O = _e.matches), (M = Mi(O, D)), I(M))) return;
      } else {
        Ht(w, T, it(404, { pathname: D }), { flushSync: G });
        return;
      }
    }
    H.set(w, J);
    let Fe = j,
      se = (await ci("action", x, te, [M], O, w))[M.route.id];
    if (te.signal.aborted) {
      H.get(w) === J && H.delete(w);
      return;
    }
    if (f.v7_fetcherPersist && oe.has(w)) {
      if (er(se) || ft(se)) {
        un(w, dn(void 0));
        return;
      }
    } else {
      if (er(se))
        if ((H.delete(w), B > Fe)) {
          un(w, dn(void 0));
          return;
        } else
          return (
            Y.add(w),
            un(w, Pi(z)),
            bn(te, se, !1, { fetcherSubmission: z, preventScrollReset: F })
          );
      if (ft(se)) {
        Ht(w, T, se.error);
        return;
      }
    }
    if (wn(se)) throw it(400, { type: "defer-action" });
    let Ce = x.navigation.location || x.location,
      yr = Sr(e.history, Ce, J.signal),
      fi = a || s,
      Kt =
        x.navigation.state !== "idle"
          ? Qn(fi, x.navigation.location, l)
          : x.matches;
    Q(Kt, "Didn't find any matches after fetcher action");
    let It = ++j;
    U.set(w, It);
    let Ba = Pi(z, se.data);
    x.fetchers.set(w, Ba);
    let [di, $n] = Jd(
      e.history,
      x,
      Kt,
      z,
      Ce,
      !1,
      f.v7_skipActionErrorRevalidation,
      re,
      $e,
      rt,
      oe,
      Z,
      Y,
      fi,
      l,
      [M.route.id, se]
    );
    $n
      .filter((_e) => _e.key !== w)
      .forEach((_e) => {
        let xr = _e.key,
          If = x.fetchers.get(xr),
          c0 = Pi(void 0, If ? If.data : void 0);
        x.fetchers.set(xr, c0),
          cn(xr),
          _e.controller && H.set(xr, _e.controller);
      }),
      Ze({ fetchers: new Map(x.fetchers) });
    let Vo = () => $n.forEach((_e) => cn(_e.key));
    J.signal.addEventListener("abort", Vo);
    let { loaderResults: Io, fetcherResults: ie } = await Df(x, Kt, di, $n, yr);
    if (J.signal.aborted) return;
    J.signal.removeEventListener("abort", Vo),
      U.delete(w),
      H.delete(w),
      $n.forEach((_e) => H.delete(_e.key));
    let ke = ts(Io);
    if (ke) return bn(yr, ke.result, !1, { preventScrollReset: F });
    if (((ke = ts(ie)), ke))
      return Y.add(ke.key), bn(yr, ke.result, !1, { preventScrollReset: F });
    let { loaderData: vr, errors: hi } = rh(x, Kt, Io, void 0, $n, ie, Te);
    if (x.fetchers.has(w)) {
      let _e = dn(se.data);
      x.fetchers.set(w, _e);
    }
    Nf(It),
      x.navigation.state === "loading" && It > B
        ? (Q(L, "Expected pending action"),
          _ && _.abort(),
          gr(x.navigation.location, {
            matches: Kt,
            loaderData: vr,
            errors: hi,
            fetchers: new Map(x.fetchers),
          }))
        : (Ze({
            errors: hi,
            loaderData: ih(x.loaderData, vr, Kt, hi),
            fetchers: new Map(x.fetchers),
          }),
          (re = !1));
  }
  async function r0(w, T, D, M, O, b, G, F, z) {
    let I = x.fetchers.get(w);
    un(w, Pi(z, I ? I.data : void 0), { flushSync: G });
    let $ = new AbortController(),
      J = Sr(e.history, D, $.signal);
    if (b) {
      let se = await Oo(O, D, J.signal);
      if (se.type === "aborted") return;
      if (se.type === "error") {
        Ht(w, T, se.error, { flushSync: G });
        return;
      } else if (se.matches) (O = se.matches), (M = Mi(O, D));
      else {
        Ht(w, T, it(404, { pathname: D }), { flushSync: G });
        return;
      }
    }
    H.set(w, $);
    let te = j,
      ce = (await ci("loader", x, J, [M], O, w))[M.route.id];
    if (
      (wn(ce) && (ce = (await bc(ce, J.signal, !0)) || ce),
      H.get(w) === $ && H.delete(w),
      !J.signal.aborted)
    ) {
      if (oe.has(w)) {
        un(w, dn(void 0));
        return;
      }
      if (er(ce))
        if (B > te) {
          un(w, dn(void 0));
          return;
        } else {
          Y.add(w), await bn(J, ce, !1, { preventScrollReset: F });
          return;
        }
      if (ft(ce)) {
        Ht(w, T, ce.error);
        return;
      }
      Q(!wn(ce), "Unhandled fetcher deferred data"), un(w, dn(ce.data));
    }
  }
  async function bn(w, T, D, M) {
    let {
      submission: O,
      fetcherSubmission: b,
      preventScrollReset: G,
      replace: F,
    } = M === void 0 ? {} : M;
    T.response.headers.has("X-Remix-Revalidate") && (re = !0);
    let z = T.response.headers.get("Location");
    Q(z, "Expected a Location header on the redirect Response"),
      (z = th(z, new URL(w.url), l));
    let I = fo(x.location, z, { _isRedirect: !0 });
    if (n) {
      let se = !1;
      if (T.response.headers.has("X-Remix-Reload-Document")) se = !0;
      else if (Uc.test(z)) {
        const Ce = e.history.createURL(z);
        se = Ce.origin !== t.location.origin || sn(Ce.pathname, l) == null;
      }
      if (se) {
        F ? t.location.replace(z) : t.location.assign(z);
        return;
      }
    }
    _ = null;
    let $ =
        F === !0 || T.response.headers.has("X-Remix-Replace")
          ? Ne.Replace
          : Ne.Push,
      { formMethod: J, formAction: te, formEncType: Fe } = x.navigation;
    !O && !b && J && te && Fe && (O = lh(x.navigation));
    let ce = O || b;
    if (fw.has(T.response.status) && ce && Nt(ce.formMethod))
      await Un($, I, {
        submission: ge({}, ce, { formAction: z }),
        preventScrollReset: G || P,
        enableViewTransition: D ? A : void 0,
      });
    else {
      let se = ml(I, O);
      await Un($, I, {
        overrideNavigation: se,
        fetcherSubmission: b,
        preventScrollReset: G || P,
        enableViewTransition: D ? A : void 0,
      });
    }
  }
  async function ci(w, T, D, M, O, b) {
    let G,
      F = {};
    try {
      G = await xw(u, w, T, D, M, O, b, o, i);
    } catch (z) {
      return (
        M.forEach((I) => {
          F[I.route.id] = { type: ue.error, error: z };
        }),
        F
      );
    }
    for (let [z, I] of Object.entries(G))
      if (Cw(I)) {
        let $ = I.result;
        F[z] = {
          type: ue.redirect,
          response: Ew($, D, z, O, l, f.v7_relativeSplatPath),
        };
      } else F[z] = await Sw(I);
    return F;
  }
  async function Df(w, T, D, M, O) {
    let b = w.matches,
      G = ci("loader", w, O, D, T, null),
      F = Promise.all(
        M.map(async ($) => {
          if ($.matches && $.match && $.controller) {
            let te = (
              await ci(
                "loader",
                w,
                Sr(e.history, $.path, $.controller.signal),
                [$.match],
                $.matches,
                $.key
              )
            )[$.match.route.id];
            return { [$.key]: te };
          } else
            return Promise.resolve({
              [$.key]: { type: ue.error, error: it(404, { pathname: $.path }) },
            });
        })
      ),
      z = await G,
      I = (await F).reduce(($, J) => Object.assign($, J), {});
    return (
      await Promise.all([Dw(T, z, O.signal, b, w.loaderData), Lw(T, I, M)]),
      { loaderResults: z, fetcherResults: I }
    );
  }
  function Ia() {
    (re = !0),
      $e.push(...za()),
      Z.forEach((w, T) => {
        H.has(T) && rt.add(T), cn(T);
      });
  }
  function un(w, T, D) {
    D === void 0 && (D = {}),
      x.fetchers.set(w, T),
      Ze(
        { fetchers: new Map(x.fetchers) },
        { flushSync: (D && D.flushSync) === !0 }
      );
  }
  function Ht(w, T, D, M) {
    M === void 0 && (M = {});
    let O = Xn(x.matches, T);
    No(w),
      Ze(
        { errors: { [O.route.id]: D }, fetchers: new Map(x.fetchers) },
        { flushSync: (M && M.flushSync) === !0 }
      );
  }
  function Lf(w) {
    return (
      ve.set(w, (ve.get(w) || 0) + 1),
      oe.has(w) && oe.delete(w),
      x.fetchers.get(w) || dw
    );
  }
  function No(w) {
    let T = x.fetchers.get(w);
    H.has(w) && !(T && T.state === "loading" && U.has(w)) && cn(w),
      Z.delete(w),
      U.delete(w),
      Y.delete(w),
      f.v7_fetcherPersist && oe.delete(w),
      rt.delete(w),
      x.fetchers.delete(w);
  }
  function i0(w) {
    let T = (ve.get(w) || 0) - 1;
    T <= 0
      ? (ve.delete(w), oe.add(w), f.v7_fetcherPersist || No(w))
      : ve.set(w, T),
      Ze({ fetchers: new Map(x.fetchers) });
  }
  function cn(w) {
    let T = H.get(w);
    T && (T.abort(), H.delete(w));
  }
  function Mf(w) {
    for (let T of w) {
      let D = Lf(T),
        M = dn(D.data);
      x.fetchers.set(T, M);
    }
  }
  function _f() {
    let w = [],
      T = !1;
    for (let D of Y) {
      let M = x.fetchers.get(D);
      Q(M, "Expected fetcher: " + D),
        M.state === "loading" && (Y.delete(D), w.push(D), (T = !0));
    }
    return Mf(w), T;
  }
  function Nf(w) {
    let T = [];
    for (let [D, M] of U)
      if (M < w) {
        let O = x.fetchers.get(D);
        Q(O, "Expected fetcher: " + D),
          O.state === "loading" && (cn(D), U.delete(D), T.push(D));
      }
    return Mf(T), T.length > 0;
  }
  function o0(w, T) {
    let D = x.blockers.get(w) || Ei;
    return xe.get(w) !== T && xe.set(w, T), D;
  }
  function Af(w) {
    x.blockers.delete(w), xe.delete(w);
  }
  function Ao(w, T) {
    let D = x.blockers.get(w) || Ei;
    Q(
      (D.state === "unblocked" && T.state === "blocked") ||
        (D.state === "blocked" && T.state === "blocked") ||
        (D.state === "blocked" && T.state === "proceeding") ||
        (D.state === "blocked" && T.state === "unblocked") ||
        (D.state === "proceeding" && T.state === "unblocked"),
      "Invalid blocker state transition: " + D.state + " -> " + T.state
    );
    let M = new Map(x.blockers);
    M.set(w, T), Ze({ blockers: M });
  }
  function jf(w) {
    let { currentLocation: T, nextLocation: D, historyAction: M } = w;
    if (xe.size === 0) return;
    xe.size > 1 && ei(!1, "A router only supports one blocker at a time");
    let O = Array.from(xe.entries()),
      [b, G] = O[O.length - 1],
      F = x.blockers.get(b);
    if (
      !(F && F.state === "proceeding") &&
      G({ currentLocation: T, nextLocation: D, historyAction: M })
    )
      return b;
  }
  function Fa(w) {
    let T = it(404, { pathname: w }),
      D = a || s,
      { matches: M, route: O } = sh(D);
    return za(), { notFoundMatches: M, route: O, error: T };
  }
  function za(w) {
    let T = [];
    return (
      Te.forEach((D, M) => {
        (!w || w(M)) && (D.cancel(), T.push(M), Te.delete(M));
      }),
      T
    );
  }
  function s0(w, T, D) {
    if (((y = w), (C = T), (v = D || null), !p && x.navigation === pl)) {
      p = !0;
      let M = Vf(x.location, x.matches);
      M != null && Ze({ restoreScrollPosition: M });
    }
    return () => {
      (y = null), (C = null), (v = null);
    };
  }
  function Of(w, T) {
    return (
      (v &&
        v(
          w,
          T.map((M) => $x(M, x.loaderData))
        )) ||
      w.key
    );
  }
  function a0(w, T) {
    if (y && C) {
      let D = Of(w, T);
      y[D] = C();
    }
  }
  function Vf(w, T) {
    if (y) {
      let D = Of(w, T),
        M = y[D];
      if (typeof M == "number") return M;
    }
    return null;
  }
  function jo(w, T, D) {
    if (c)
      if (w) {
        if (Object.keys(w[0].params).length > 0)
          return { active: !0, matches: xs(T, D, l, !0) };
      } else return { active: !0, matches: xs(T, D, l, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Oo(w, T, D) {
    if (!c) return { type: "success", matches: w };
    let M = w;
    for (;;) {
      let O = a == null,
        b = a || s,
        G = o;
      try {
        await c({
          path: T,
          matches: M,
          patch: (I, $) => {
            D.aborted || eh(I, $, b, G, i);
          },
        });
      } catch (I) {
        return { type: "error", error: I, partialMatches: M };
      } finally {
        O && !D.aborted && (s = [...s]);
      }
      if (D.aborted) return { type: "aborted" };
      let F = Qn(b, T, l);
      if (F) return { type: "success", matches: F };
      let z = xs(b, T, l, !0);
      if (
        !z ||
        (M.length === z.length &&
          M.every((I, $) => I.route.id === z[$].route.id))
      )
        return { type: "success", matches: null };
      M = z;
    }
  }
  function l0(w) {
    (o = {}), (a = Ys(w, i, void 0, o));
  }
  function u0(w, T) {
    let D = a == null;
    eh(w, T, a || s, o, i), D && ((s = [...s]), Ze({}));
  }
  return (
    (R = {
      get basename() {
        return l;
      },
      get future() {
        return f;
      },
      get state() {
        return x;
      },
      get routes() {
        return s;
      },
      get window() {
        return t;
      },
      initialize: Va,
      subscribe: Xv,
      enableScrollRestoration: s0,
      navigate: kf,
      fetch: t0,
      revalidate: Zv,
      createHref: (w) => e.history.createHref(w),
      encodeLocation: (w) => e.history.encodeLocation(w),
      getFetcher: Lf,
      deleteFetcher: i0,
      dispose: Qv,
      getBlocker: o0,
      deleteBlocker: Af,
      patchRoutes: u0,
      _internalFetchControllers: H,
      _internalActiveDeferreds: Te,
      _internalSetRoutes: l0,
    }),
    R
  );
}
function mw(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Su(e, t, n, r, i, o, s, a) {
  let l, u;
  if (s) {
    l = [];
    for (let f of t)
      if ((l.push(f), f.route.id === s)) {
        u = f;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let c = Bc(i || ".", zc(l, o), sn(e.pathname, n) || e.pathname, a === "path");
  if (
    (i == null && ((c.search = e.search), (c.hash = e.hash)),
    (i == null || i === "" || i === ".") && u)
  ) {
    let f = $c(c.search);
    if (u.route.index && !f)
      c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
    else if (!u.route.index && f) {
      let d = new URLSearchParams(c.search),
        g = d.getAll("index");
      d.delete("index"),
        g.filter((v) => v).forEach((v) => d.append("index", v));
      let y = d.toString();
      c.search = y ? "?" + y : "";
    }
  }
  return (
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : Jt([n, c.pathname])),
    dr(c)
  );
}
function Xd(e, t, n, r) {
  if (!r || !mw(r)) return { path: n };
  if (r.formMethod && !Rw(r.formMethod))
    return { path: n, error: it(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: it(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    s = e ? o.toUpperCase() : o.toLowerCase(),
    a = ny(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Nt(s)) return i();
      let d =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((g, y) => {
              let [v, C] = y;
              return (
                "" +
                g +
                v +
                "=" +
                C +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: s,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Nt(s)) return i();
      try {
        let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: s,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  Q(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let l, u;
  if (r.formData) (l = Pu(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (l = Pu(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (u = nh(l));
  else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (u = nh(l));
    } catch {
      return i();
    }
  let c = {
    formMethod: s,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (Nt(c.formMethod)) return { path: n, submission: c };
  let f = In(n);
  return (
    t && f.search && $c(f.search) && l.append("index", ""),
    (f.search = "?" + l),
    { path: dr(f), submission: c }
  );
}
function Zd(e, t, n) {
  n === void 0 && (n = !1);
  let r = e.findIndex((i) => i.route.id === t);
  return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function Jd(e, t, n, r, i, o, s, a, l, u, c, f, d, g, y, v) {
  let C = v ? (ft(v[1]) ? v[1].error : v[1].data) : void 0,
    p = e.createURL(t.location),
    h = e.createURL(i),
    m = n;
  o && t.errors
    ? (m = Zd(n, Object.keys(t.errors)[0], !0))
    : v && ft(v[1]) && (m = Zd(n, v[0]));
  let S = v ? v[1].statusCode : void 0,
    R = s && S && S >= 400,
    x = m.filter((P, _) => {
      let { route: A } = P;
      if (A.lazy) return !0;
      if (A.loader == null) return !1;
      if (o) return Eu(A, t.loaderData, t.errors);
      if (
        gw(t.loaderData, t.matches[_], P) ||
        l.some((ae) => ae === P.route.id)
      )
        return !0;
      let K = t.matches[_],
        q = P;
      return qd(
        P,
        ge(
          {
            currentUrl: p,
            currentParams: K.params,
            nextUrl: h,
            nextParams: q.params,
          },
          r,
          {
            actionResult: C,
            actionStatus: S,
            defaultShouldRevalidate: R
              ? !1
              : a ||
                p.pathname + p.search === h.pathname + h.search ||
                p.search !== h.search ||
                ey(K, q),
          }
        )
      );
    }),
    L = [];
  return (
    f.forEach((P, _) => {
      if (o || !n.some((re) => re.route.id === P.routeId) || c.has(_)) return;
      let A = Qn(g, P.path, y);
      if (!A) {
        L.push({
          key: _,
          routeId: P.routeId,
          path: P.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let K = t.fetchers.get(_),
        q = Mi(A, P.path),
        ae = !1;
      d.has(_)
        ? (ae = !1)
        : u.has(_)
        ? (u.delete(_), (ae = !0))
        : K && K.state !== "idle" && K.data === void 0
        ? (ae = a)
        : (ae = qd(
            q,
            ge(
              {
                currentUrl: p,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: h,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: C,
                actionStatus: S,
                defaultShouldRevalidate: R ? !1 : a,
              }
            )
          )),
        ae &&
          L.push({
            key: _,
            routeId: P.routeId,
            path: P.path,
            matches: A,
            match: q,
            controller: new AbortController(),
          });
    }),
    [x, L]
  );
}
function Eu(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && t[e.id] !== void 0,
    i = n != null && n[e.id] !== void 0;
  return !r && i
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
    ? !0
    : !r && !i;
}
function gw(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function ey(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function qd(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function eh(e, t, n, r, i) {
  var o;
  let s;
  if (e) {
    let u = r[e];
    Q(u, "No route found to patch children into: routeId = " + e),
      u.children || (u.children = []),
      (s = u.children);
  } else s = n;
  let a = t.filter((u) => !s.some((c) => ty(u, c))),
    l = Ys(
      a,
      i,
      [e || "_", "patch", String(((o = s) == null ? void 0 : o.length) || "0")],
      r
    );
  s.push(...l);
}
function ty(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
      e.path === t.path &&
      e.caseSensitive === t.caseSensitive
    ? (!e.children || e.children.length === 0) &&
      (!t.children || t.children.length === 0)
      ? !0
      : e.children.every((n, r) => {
          var i;
          return (i = t.children) == null ? void 0 : i.some((o) => ty(n, o));
        })
    : !1;
}
async function yw(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  Q(i, "No route found in manifest");
  let o = {};
  for (let s in r) {
    let l = i[s] !== void 0 && s !== "hasErrorBoundary";
    ei(
      !l,
      'Route "' +
        i.id +
        '" has a static property "' +
        s +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + s + '" will be ignored.')
    ),
      !l && !Ux.has(s) && (o[s] = r[s]);
  }
  Object.assign(i, o), Object.assign(i, ge({}, t(i), { lazy: void 0 }));
}
async function vw(e) {
  let { matches: t } = e,
    n = t.filter((i) => i.shouldLoad);
  return (await Promise.all(n.map((i) => i.resolve()))).reduce(
    (i, o, s) => Object.assign(i, { [n[s].route.id]: o }),
    {}
  );
}
async function xw(e, t, n, r, i, o, s, a, l, u) {
  let c = o.map((g) => (g.route.lazy ? yw(g.route, l, a) : void 0)),
    f = o.map((g, y) => {
      let v = c[y],
        C = i.some((h) => h.route.id === g.route.id);
      return ge({}, g, {
        shouldLoad: C,
        resolve: async (h) => (
          h &&
            r.method === "GET" &&
            (g.route.lazy || g.route.loader) &&
            (C = !0),
          C
            ? ww(t, r, g, v, h, u)
            : Promise.resolve({ type: ue.data, result: void 0 })
        ),
      });
    }),
    d = await e({
      matches: f,
      request: r,
      params: o[0].params,
      fetcherKey: s,
      context: u,
    });
  try {
    await Promise.all(c);
  } catch {}
  return d;
}
async function ww(e, t, n, r, i, o) {
  let s,
    a,
    l = (u) => {
      let c,
        f = new Promise((y, v) => (c = v));
      (a = () => c()), t.signal.addEventListener("abort", a);
      let d = (y) =>
          typeof u != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : u(
                { request: t, params: n.params, context: o },
                ...(y !== void 0 ? [y] : [])
              ),
        g = (async () => {
          try {
            return { type: "data", result: await (i ? i((v) => d(v)) : d()) };
          } catch (y) {
            return { type: "error", result: y };
          }
        })();
      return Promise.race([g, f]);
    };
  try {
    let u = n.route[e];
    if (r)
      if (u) {
        let c,
          [f] = await Promise.all([
            l(u).catch((d) => {
              c = d;
            }),
            r,
          ]);
        if (c !== void 0) throw c;
        s = f;
      } else if ((await r, (u = n.route[e]), u)) s = await l(u);
      else if (e === "action") {
        let c = new URL(t.url),
          f = c.pathname + c.search;
        throw it(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: ue.data, result: void 0 };
    else if (u) s = await l(u);
    else {
      let c = new URL(t.url),
        f = c.pathname + c.search;
      throw it(404, { pathname: f });
    }
    Q(
      s.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (u) {
    return { type: ue.error, result: u };
  } finally {
    a && t.signal.removeEventListener("abort", a);
  }
  return s;
}
async function Sw(e) {
  let { result: t, type: n } = e;
  if (ry(t)) {
    let u;
    try {
      let c = t.headers.get("Content-Type");
      c && /\bapplication\/json\b/.test(c)
        ? t.body == null
          ? (u = null)
          : (u = await t.json())
        : (u = await t.text());
    } catch (c) {
      return { type: ue.error, error: c };
    }
    return n === ue.error
      ? {
          type: ue.error,
          error: new Xs(t.status, t.statusText, u),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: ue.data, data: u, statusCode: t.status, headers: t.headers };
  }
  if (n === ue.error) {
    if (ah(t)) {
      var r;
      if (t.data instanceof Error) {
        var i;
        return {
          type: ue.error,
          error: t.data,
          statusCode: (i = t.init) == null ? void 0 : i.status,
        };
      }
      t = new Xs(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data
      );
    }
    return { type: ue.error, error: t, statusCode: Ra(t) ? t.status : void 0 };
  }
  if (kw(t)) {
    var o, s;
    return {
      type: ue.deferred,
      deferredData: t,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers:
        ((s = t.init) == null ? void 0 : s.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (ah(t)) {
    var a, l;
    return {
      type: ue.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        (l = t.init) != null && l.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: ue.data, data: t };
}
function Ew(e, t, n, r, i, o) {
  let s = e.headers.get("Location");
  if (
    (Q(
      s,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Uc.test(s))
  ) {
    let a = r.slice(0, r.findIndex((l) => l.route.id === n) + 1);
    (s = Su(new URL(t.url), a, i, !0, s, o)), e.headers.set("Location", s);
  }
  return e;
}
function th(e, t, n) {
  if (Uc.test(e)) {
    let r = e,
      i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      o = sn(i.pathname, n) != null;
    if (i.origin === t.origin && o) return i.pathname + i.search + i.hash;
  }
  return e;
}
function Sr(e, t, n, r) {
  let i = e.createURL(ny(t)).toString(),
    o = { signal: n };
  if (r && Nt(r.formMethod)) {
    let { formMethod: s, formEncType: a } = r;
    (o.method = s.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = Pu(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function Pu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function nh(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Pw(e, t, n, r, i) {
  let o = {},
    s = null,
    a,
    l = !1,
    u = {},
    c = n && ft(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((f) => {
      if (!(f.route.id in t)) return;
      let d = f.route.id,
        g = t[d];
      if (
        (Q(!er(g), "Cannot handle redirect results in processLoaderData"),
        ft(g))
      ) {
        let y = g.error;
        c !== void 0 && ((y = c), (c = void 0)), (s = s || {});
        {
          let v = Xn(e, d);
          s[v.route.id] == null && (s[v.route.id] = y);
        }
        (o[d] = void 0),
          l || ((l = !0), (a = Ra(g.error) ? g.error.status : 500)),
          g.headers && (u[d] = g.headers);
      } else
        wn(g)
          ? (r.set(d, g.deferredData),
            (o[d] = g.deferredData.data),
            g.statusCode != null &&
              g.statusCode !== 200 &&
              !l &&
              (a = g.statusCode),
            g.headers && (u[d] = g.headers))
          : ((o[d] = g.data),
            g.statusCode && g.statusCode !== 200 && !l && (a = g.statusCode),
            g.headers && (u[d] = g.headers));
    }),
    c !== void 0 && n && ((s = { [n[0]]: c }), (o[n[0]] = void 0)),
    { loaderData: o, errors: s, statusCode: a || 200, loaderHeaders: u }
  );
}
function rh(e, t, n, r, i, o, s) {
  let { loaderData: a, errors: l } = Pw(t, n, r, s);
  return (
    i.forEach((u) => {
      let { key: c, match: f, controller: d } = u,
        g = o[c];
      if (
        (Q(g, "Did not find corresponding fetcher result"),
        !(d && d.signal.aborted))
      )
        if (ft(g)) {
          let y = Xn(e.matches, f == null ? void 0 : f.route.id);
          (l && l[y.route.id]) || (l = ge({}, l, { [y.route.id]: g.error })),
            e.fetchers.delete(c);
        } else if (er(g)) Q(!1, "Unhandled fetcher revalidation redirect");
        else if (wn(g)) Q(!1, "Unhandled fetcher deferred data");
        else {
          let y = dn(g.data);
          e.fetchers.set(c, y);
        }
    }),
    { loaderData: a, errors: l }
  );
}
function ih(e, t, n, r) {
  let i = ge({}, t);
  for (let o of n) {
    let s = o.route.id;
    if (
      (t.hasOwnProperty(s)
        ? t[s] !== void 0 && (i[s] = t[s])
        : e[s] !== void 0 && o.route.loader && (i[s] = e[s]),
      r && r.hasOwnProperty(s))
    )
      break;
  }
  return i;
}
function oh(e) {
  return e
    ? ft(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Xn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function sh(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function it(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: i,
      type: o,
      message: s,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i && n && r
          ? (l =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (l = "defer() is not supported in actions")
          : o === "invalid-body" && (l = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        i && n && r
          ? (l =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Xs(e || 500, a, new Error(l), !0)
  );
}
function ts(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, i] = t[n];
    if (er(i)) return { key: r, result: i };
  }
}
function ny(e) {
  let t = typeof e == "string" ? In(e) : e;
  return dr(ge({}, t, { hash: "" }));
}
function Tw(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Cw(e) {
  return ry(e.result) && cw.has(e.result.status);
}
function wn(e) {
  return e.type === ue.deferred;
}
function ft(e) {
  return e.type === ue.error;
}
function er(e) {
  return (e && e.type) === ue.redirect;
}
function ah(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function kw(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function ry(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Rw(e) {
  return uw.has(e.toLowerCase());
}
function Nt(e) {
  return aw.has(e.toLowerCase());
}
async function Dw(e, t, n, r, i) {
  let o = Object.entries(t);
  for (let s = 0; s < o.length; s++) {
    let [a, l] = o[s],
      u = e.find((d) => (d == null ? void 0 : d.route.id) === a);
    if (!u) continue;
    let c = r.find((d) => d.route.id === u.route.id),
      f = c != null && !ey(c, u) && (i && i[u.route.id]) !== void 0;
    wn(l) &&
      f &&
      (await bc(l, n, !1).then((d) => {
        d && (t[a] = d);
      }));
  }
}
async function Lw(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: i, routeId: o, controller: s } = n[r],
      a = t[i];
    e.find((u) => (u == null ? void 0 : u.route.id) === o) &&
      wn(a) &&
      (Q(
        s,
        "Expected an AbortController for revalidating fetcher deferred result"
      ),
      await bc(a, s.signal, !0).then((u) => {
        u && (t[i] = u);
      }));
  }
}
async function bc(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ue.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: ue.error, error: i };
      }
    return { type: ue.data, data: e.deferredData.data };
  }
}
function $c(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Mi(e, t) {
  let n = typeof t == "string" ? In(t).search : t.search;
  if (e[e.length - 1].route.index && $c(n || "")) return e[e.length - 1];
  let r = Zg(e);
  return r[r.length - 1];
}
function lh(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: s,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: s,
        text: void 0,
      };
  }
}
function ml(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Mw(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Pi(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function _w(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function dn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Nw(e, t) {
  try {
    let n = e.sessionStorage.getItem(qg);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {}
}
function Aw(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(qg, JSON.stringify(n));
    } catch (r) {
      ei(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.28.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zs() {
  return (
    (Zs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zs.apply(this, arguments)
  );
}
const Co = E.createContext(null),
  Wc = E.createContext(null),
  Fn = E.createContext(null),
  Hc = E.createContext(null),
  zn = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  iy = E.createContext(null);
function jw(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ko() || Q(!1);
  let { basename: r, navigator: i } = E.useContext(Fn),
    { hash: o, pathname: s, search: a } = Da(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : Jt([r, s])),
    i.createHref({ pathname: l, search: a, hash: o })
  );
}
function ko() {
  return E.useContext(Hc) != null;
}
function Ro() {
  return ko() || Q(!1), E.useContext(Hc).location;
}
function oy(e) {
  E.useContext(Fn).static || E.useLayoutEffect(e);
}
function Ow() {
  let { isDataRoute: e } = E.useContext(zn);
  return e ? Qw() : Vw();
}
function Vw() {
  ko() || Q(!1);
  let e = E.useContext(Co),
    { basename: t, future: n, navigator: r } = E.useContext(Fn),
    { matches: i } = E.useContext(zn),
    { pathname: o } = Ro(),
    s = JSON.stringify(zc(i, n.v7_relativeSplatPath)),
    a = E.useRef(!1);
  return (
    oy(() => {
      a.current = !0;
    }),
    E.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Bc(u, JSON.parse(s), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Jt([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, s, o, e]
    )
  );
}
const Iw = E.createContext(null);
function Fw(e) {
  let t = E.useContext(zn).outlet;
  return t && E.createElement(Iw.Provider, { value: e }, t);
}
function Da(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = E.useContext(Fn),
    { matches: i } = E.useContext(zn),
    { pathname: o } = Ro(),
    s = JSON.stringify(zc(i, r.v7_relativeSplatPath));
  return E.useMemo(() => Bc(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function zw(e, t, n, r) {
  ko() || Q(!1);
  let { navigator: i } = E.useContext(Fn),
    { matches: o } = E.useContext(zn),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Ro(),
    c;
  c = u;
  let f = c.pathname || "/",
    d = f;
  if (l !== "/") {
    let v = l.replace(/^\//, "").split("/");
    d = "/" + f.replace(/^\//, "").split("/").slice(v.length).join("/");
  }
  let g = Qn(e, { pathname: d });
  return Ww(
    g &&
      g.map((v) =>
        Object.assign({}, v, {
          params: Object.assign({}, a, v.params),
          pathname: Jt([
            l,
            i.encodeLocation
              ? i.encodeLocation(v.pathname).pathname
              : v.pathname,
          ]),
          pathnameBase:
            v.pathnameBase === "/"
              ? l
              : Jt([
                  l,
                  i.encodeLocation
                    ? i.encodeLocation(v.pathnameBase).pathname
                    : v.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
}
function Bw() {
  let e = Yw(),
    t = Ra(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? E.createElement("pre", { style: i }, n) : null,
    null
  );
}
const Uw = E.createElement(Bw, null);
class bw extends E.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? E.createElement(
          zn.Provider,
          { value: this.props.routeContext },
          E.createElement(iy.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function $w(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = E.useContext(Co);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(zn.Provider, { value: t }, r)
  );
}
function Ww(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = s.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    c >= 0 || Q(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: g } = n,
          y =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!g || g[f.route.id] === void 0);
        if (f.route.lazy || y) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, f, d) => {
    let g,
      y = !1,
      v = null,
      C = null;
    n &&
      ((g = a && f.route.id ? a[f.route.id] : void 0),
      (v = f.route.errorElement || Uw),
      l &&
        (u < 0 && d === 0
          ? (Xw("route-fallback"), (y = !0), (C = null))
          : u === d &&
            ((y = !0), (C = f.route.hydrateFallbackElement || null))));
    let p = t.concat(s.slice(0, d + 1)),
      h = () => {
        let m;
        return (
          g
            ? (m = v)
            : y
            ? (m = C)
            : f.route.Component
            ? (m = E.createElement(f.route.Component, null))
            : f.route.element
            ? (m = f.route.element)
            : (m = c),
          E.createElement($w, {
            match: f,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? E.createElement(bw, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: h(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var sy = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(sy || {}),
  Js = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Js || {});
function Hw(e) {
  let t = E.useContext(Co);
  return t || Q(!1), t;
}
function Kw(e) {
  let t = E.useContext(Wc);
  return t || Q(!1), t;
}
function Gw(e) {
  let t = E.useContext(zn);
  return t || Q(!1), t;
}
function ay(e) {
  let t = Gw(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Q(!1), n.route.id;
}
function Yw() {
  var e;
  let t = E.useContext(iy),
    n = Kw(Js.UseRouteError),
    r = ay(Js.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Qw() {
  let { router: e } = Hw(sy.UseNavigateStable),
    t = ay(Js.UseNavigateStable),
    n = E.useRef(!1);
  return (
    oy(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Zs({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const uh = {};
function Xw(e, t, n) {
  uh[e] || (uh[e] = !0);
}
const ch = {};
function Zw(e, t) {
  ch[t] || ((ch[t] = !0), console.warn(t));
}
const Er = (e, t, n) =>
  Zw(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + n + ".")
  );
function Jw(e, t) {
  (e == null ? void 0 : e.v7_startTransition) === void 0 &&
    Er(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 &&
      (!t || !t.v7_relativeSplatPath) &&
      Er(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      ),
    t &&
      (t.v7_fetcherPersist === void 0 &&
        Er(
          "v7_fetcherPersist",
          "The persistence behavior of fetchers is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"
        ),
      t.v7_normalizeFormMethod === void 0 &&
        Er(
          "v7_normalizeFormMethod",
          "Casing of `formMethod` fields is being normalized to uppercase in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"
        ),
      t.v7_partialHydration === void 0 &&
        Er(
          "v7_partialHydration",
          "`RouterProvider` hydration behavior is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"
        ),
      t.v7_skipActionErrorRevalidation === void 0 &&
        Er(
          "v7_skipActionErrorRevalidation",
          "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"
        ));
}
function qw(e) {
  return Fw(e.context);
}
function eS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ne.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  ko() && Q(!1);
  let l = t.replace(/^\/*/, "/"),
    u = E.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: Zs({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s]
    );
  typeof r == "string" && (r = In(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: g = null,
      key: y = "default",
    } = r,
    v = E.useMemo(() => {
      let C = sn(c, l);
      return C == null
        ? null
        : {
            location: { pathname: C, search: f, hash: d, state: g, key: y },
            navigationType: i,
          };
    }, [l, c, f, d, g, y, i]);
  return v == null
    ? null
    : E.createElement(
        Fn.Provider,
        { value: u },
        E.createElement(Hc.Provider, { children: n, value: v })
      );
}
new Promise(() => {});
function tS(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: E.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: E.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: E.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.28.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ti() {
  return (
    (ti = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ti.apply(this, arguments)
  );
}
function ly(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function nS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function rS(e, t) {
  return e.button === 0 && (!t || t === "_self") && !nS(e);
}
const iS = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  oS = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  sS = "6";
try {
  window.__reactRouterVersion = sS;
} catch {}
function aS(e, t) {
  return pw({
    basename: void 0,
    future: ti({}, void 0, { v7_prependBasename: !0 }),
    history: Fx({ window: void 0 }),
    hydrationData: lS(),
    routes: e,
    mapRouteProperties: tS,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function lS() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ti({}, t, { errors: uS(t.errors) })), t;
}
function uS(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Xs(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let s = new o(i.message);
            (s.stack = ""), (n[r] = s);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const uy = E.createContext({ isTransitioning: !1 }),
  cS = E.createContext(new Map()),
  fS = "startTransition",
  fh = k0[fS],
  dS = "flushSync",
  dh = Ix[dS];
function hS(e) {
  fh ? fh(e) : e();
}
function Ti(e) {
  dh ? dh(e) : e();
}
class pS {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function mS(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = E.useState(n.state),
    [s, a] = E.useState(),
    [l, u] = E.useState({ isTransitioning: !1 }),
    [c, f] = E.useState(),
    [d, g] = E.useState(),
    [y, v] = E.useState(),
    C = E.useRef(new Map()),
    { v7_startTransition: p } = r || {},
    h = E.useCallback(
      (P) => {
        p ? hS(P) : P();
      },
      [p]
    ),
    m = E.useCallback(
      (P, _) => {
        let { deletedFetchers: A, flushSync: K, viewTransitionOpts: q } = _;
        P.fetchers.forEach((re, $e) => {
          re.data !== void 0 && C.current.set($e, re.data);
        }),
          A.forEach((re) => C.current.delete(re));
        let ae =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!q || ae) {
          K ? Ti(() => o(P)) : h(() => o(P));
          return;
        }
        if (K) {
          Ti(() => {
            d && (c && c.resolve(), d.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: q.currentLocation,
                nextLocation: q.nextLocation,
              });
          });
          let re = n.window.document.startViewTransition(() => {
            Ti(() => o(P));
          });
          re.finished.finally(() => {
            Ti(() => {
              f(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            Ti(() => g(re));
          return;
        }
        d
          ? (c && c.resolve(),
            d.skipTransition(),
            v({
              state: P,
              currentLocation: q.currentLocation,
              nextLocation: q.nextLocation,
            }))
          : (a(P),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: q.currentLocation,
              nextLocation: q.nextLocation,
            }));
      },
      [n.window, d, c, C, h]
    );
  E.useLayoutEffect(() => n.subscribe(m), [n, m]),
    E.useEffect(() => {
      l.isTransitioning && !l.flushSync && f(new pS());
    }, [l]),
    E.useEffect(() => {
      if (c && s && n.window) {
        let P = s,
          _ = c.promise,
          A = n.window.document.startViewTransition(async () => {
            h(() => o(P)), await _;
          });
        A.finished.finally(() => {
          f(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          g(A);
      }
    }, [h, s, c, n.window]),
    E.useEffect(() => {
      c && s && i.location.key === s.location.key && c.resolve();
    }, [c, d, i.location, s]),
    E.useEffect(() => {
      !l.isTransitioning &&
        y &&
        (a(y.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        v(void 0));
    }, [l.isTransitioning, y]),
    E.useEffect(() => {}, []);
  let S = E.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (P) => n.navigate(P),
        push: (P, _, A) =>
          n.navigate(P, {
            state: _,
            preventScrollReset: A == null ? void 0 : A.preventScrollReset,
          }),
        replace: (P, _, A) =>
          n.navigate(P, {
            replace: !0,
            state: _,
            preventScrollReset: A == null ? void 0 : A.preventScrollReset,
          }),
      }),
      [n]
    ),
    R = n.basename || "/",
    x = E.useMemo(
      () => ({ router: n, navigator: S, static: !1, basename: R }),
      [n, S, R]
    ),
    L = E.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return (
    E.useEffect(() => Jw(r, n.future), [r, n.future]),
    E.createElement(
      E.Fragment,
      null,
      E.createElement(
        Co.Provider,
        { value: x },
        E.createElement(
          Wc.Provider,
          { value: i },
          E.createElement(
            cS.Provider,
            { value: C.current },
            E.createElement(
              uy.Provider,
              { value: l },
              E.createElement(
                eS,
                {
                  basename: R,
                  location: i.location,
                  navigationType: i.historyAction,
                  navigator: S,
                  future: L,
                },
                i.initialized || n.future.v7_partialHydration
                  ? E.createElement(gS, {
                      routes: n.routes,
                      future: n.future,
                      state: i,
                    })
                  : t
              )
            )
          )
        )
      ),
      null
    )
  );
}
const gS = E.memo(yS);
function yS(e) {
  let { routes: t, future: n, state: r } = e;
  return zw(t, void 0, r, n);
}
const vS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  xS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  qs = E.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: f,
      } = t,
      d = ly(t, iS),
      { basename: g } = E.useContext(Fn),
      y,
      v = !1;
    if (typeof u == "string" && xS.test(u) && ((y = u), vS))
      try {
        let m = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          R = sn(S.pathname, g);
        S.origin === m.origin && R != null
          ? (u = R + S.search + S.hash)
          : (v = !0);
      } catch {}
    let C = jw(u, { relative: i }),
      p = SS(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: f,
      });
    function h(m) {
      r && r(m), m.defaultPrevented || p(m);
    }
    return E.createElement(
      "a",
      ti({}, d, { href: y || C, onClick: v || o ? r : h, ref: n, target: l })
    );
  }),
  ea = E.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: s = !1,
        style: a,
        to: l,
        viewTransition: u,
        children: c,
      } = t,
      f = ly(t, oS),
      d = Da(l, { relative: f.relative }),
      g = Ro(),
      y = E.useContext(Wc),
      { navigator: v, basename: C } = E.useContext(Fn),
      p = y != null && ES(d) && u === !0,
      h = v.encodeLocation ? v.encodeLocation(d).pathname : d.pathname,
      m = g.pathname,
      S =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    i ||
      ((m = m.toLowerCase()),
      (S = S ? S.toLowerCase() : null),
      (h = h.toLowerCase())),
      S && C && (S = sn(S, C) || S);
    const R = h !== "/" && h.endsWith("/") ? h.length - 1 : h.length;
    let x = m === h || (!s && m.startsWith(h) && m.charAt(R) === "/"),
      L =
        S != null &&
        (S === h || (!s && S.startsWith(h) && S.charAt(h.length) === "/")),
      P = { isActive: x, isPending: L, isTransitioning: p },
      _ = x ? r : void 0,
      A;
    typeof o == "function"
      ? (A = o(P))
      : (A = [
          o,
          x ? "active" : null,
          L ? "pending" : null,
          p ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let K = typeof a == "function" ? a(P) : a;
    return E.createElement(
      qs,
      ti({}, f, {
        "aria-current": _,
        className: A,
        ref: n,
        style: K,
        to: l,
        viewTransition: u,
      }),
      typeof c == "function" ? c(P) : c
    );
  });
var Tu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Tu || (Tu = {}));
var hh;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(hh || (hh = {}));
function wS(e) {
  let t = E.useContext(Co);
  return t || Q(!1), t;
}
function SS(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = Ow(),
    u = Ro(),
    c = Da(e, { relative: s });
  return E.useCallback(
    (f) => {
      if (rS(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : dr(u) === dr(c);
        l(e, {
          replace: d,
          state: i,
          preventScrollReset: o,
          relative: s,
          viewTransition: a,
        });
      }
    },
    [u, l, c, r, i, n, e, o, s, a]
  );
}
function ES(e, t) {
  t === void 0 && (t = {});
  let n = E.useContext(uy);
  n == null && Q(!1);
  let { basename: r } = wS(Tu.useViewTransitionState),
    i = Da(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = sn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = sn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Qs(i.pathname, s) != null || Qs(i.pathname, o) != null;
}
const ir = ({ value: e }) =>
    k.jsx(k.Fragment, {
      children: k.jsx("p", {
        className:
          " capitalize  rounded-md lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-light bg-button transition-all duration-200 active:scale-95 ",
        children: e,
      }),
    }),
  cy = E.createContext({});
function PS(e) {
  const t = E.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Kc = E.createContext(null),
  fy = E.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function TS(e = !0) {
  const t = E.useContext(Kc);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = E.useId();
  E.useEffect(() => {
    e && i(o);
  }, [e]);
  const s = E.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const Gc = typeof window < "u",
  CS = Gc ? E.useLayoutEffect : E.useEffect,
  mt = (e) => e;
let Cu = mt;
function Yc(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const ni = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  qt = (e) => e * 1e3,
  en = (e) => e / 1e3,
  kS = { skipAnimations: !1, useManualTiming: !1 };
function RS(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const o = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    o.has(u) && (l.schedule(u), e()), u(s);
  }
  const l = {
    schedule: (u, c = !1, f = !1) => {
      const g = f && r ? t : n;
      return c && o.add(u), g.has(u) || g.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const ns = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  DS = 40;
function dy(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = ns.reduce((p, h) => ((p[h] = RS(o)), p), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = s,
    g = () => {
      const p = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, DS), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    y = () => {
      (n = !0), (r = !0), i.isProcessing || e(g);
    };
  return {
    schedule: ns.reduce((p, h) => {
      const m = s[h];
      return (p[h] = (S, R = !1, x = !1) => (n || y(), m.schedule(S, R, x))), p;
    }, {}),
    cancel: (p) => {
      for (let h = 0; h < ns.length; h++) s[ns[h]].cancel(p);
    },
    state: i,
    steps: s,
  };
}
const {
    schedule: me,
    cancel: Nn,
    state: Be,
    steps: gl,
  } = dy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : mt, !0),
  hy = E.createContext({ strict: !1 }),
  ph = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  ri = {};
for (const e in ph) ri[e] = { isEnabled: (t) => ph[e].some((n) => !!t[n]) };
function LS(e) {
  for (const t in e) ri[t] = { ...ri[t], ...e[t] };
}
const MS = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ta(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    MS.has(e)
  );
}
let py = (e) => !ta(e);
function _S(e) {
  e && (py = (t) => (t.startsWith("on") ? !ta(t) : e(t)));
}
try {
  _S(require("@emotion/is-prop-valid").default);
} catch {}
function NS(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((py(i) ||
        (n === !0 && ta(i)) ||
        (!t && !ta(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function AS(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const La = E.createContext({});
function ho(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ma(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Qc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Xc = ["initial", ...Qc];
function _a(e) {
  return Ma(e.animate) || Xc.some((t) => ho(e[t]));
}
function my(e) {
  return !!(_a(e) || e.variants);
}
function jS(e, t) {
  if (_a(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ho(n) ? n : void 0,
      animate: ho(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function OS(e) {
  const { initial: t, animate: n } = jS(e, E.useContext(La));
  return E.useMemo(() => ({ initial: t, animate: n }), [mh(t), mh(n)]);
}
function mh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const VS = Symbol.for("motionComponentSymbol");
function Or(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function IS(e, t, n) {
  return E.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Or(n) && (n.current = r));
    },
    [t]
  );
}
const Zc = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  FS = "framerAppearId",
  gy = "data-" + Zc(FS),
  { schedule: Jc, cancel: Dk } = dy(queueMicrotask, !1),
  yy = E.createContext({});
function zS(e, t, n, r, i) {
  var o, s;
  const { visualElement: a } = E.useContext(La),
    l = E.useContext(hy),
    u = E.useContext(Kc),
    c = E.useContext(fy).reducedMotion,
    f = E.useRef(null);
  (r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    g = E.useContext(yy);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    BS(f.current, n, i, g);
  const y = E.useRef(!1);
  E.useInsertionEffect(() => {
    d && y.current && d.update(n, u);
  });
  const v = n[gy],
    C = E.useRef(
      !!v &&
        !(
          !((o = window.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(window, v)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, v))
    );
  return (
    CS(() => {
      d &&
        ((y.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        Jc.render(d.render),
        C.current && d.animationState && d.animationState.animateChanges());
    }),
    E.useEffect(() => {
      d &&
        (!C.current && d.animationState && d.animationState.animateChanges(),
        C.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null ||
              p === void 0 ||
              p.call(window, v);
          }),
          (C.current = !1)));
    }),
    d
  );
}
function BS(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : vy(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && Or(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function vy(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : vy(e.parent);
}
function US({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var o, s;
  e && LS(e);
  function a(u, c) {
    let f;
    const d = { ...E.useContext(fy), ...u, layoutId: bS(u) },
      { isStatic: g } = d,
      y = OS(u),
      v = r(u, g);
    if (!g && Gc) {
      $S();
      const C = WS(d);
      (f = C.MeasureLayout),
        (y.visualElement = zS(i, v, d, t, C.ProjectionNode));
    }
    return k.jsxs(La.Provider, {
      value: y,
      children: [
        f && y.visualElement
          ? k.jsx(f, { visualElement: y.visualElement, ...d })
          : null,
        n(i, u, IS(v, y.visualElement, c), v, g, y.visualElement),
      ],
    });
  }
  a.displayName = `motion.${
    typeof i == "string"
      ? i
      : `create(${
          (s = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !==
            null && s !== void 0
            ? s
            : ""
        })`
  }`;
  const l = E.forwardRef(a);
  return (l[VS] = i), l;
}
function bS({ layoutId: e }) {
  const t = E.useContext(cy).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function $S(e, t) {
  E.useContext(hy).strict;
}
function WS(e) {
  const { drag: t, layout: n } = ri;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const HS = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function qc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(HS.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function gh(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function ef(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = gh(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = gh(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
const ku = (e) => Array.isArray(e),
  KS = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  GS = (e) => (ku(e) ? e[e.length - 1] || 0 : e),
  Ye = (e) => !!(e && e.getVelocity);
function ws(e) {
  const t = Ye(e) ? e.get() : e;
  return KS(t) ? t.toValue() : t;
}
function YS(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  o
) {
  const s = { latestValues: QS(r, i, o, e), renderState: t() };
  return (
    n &&
      ((s.onMount = (a) => n({ props: r, current: a, ...s })),
      (s.onUpdate = (a) => n(a))),
    s
  );
}
const xy = (e) => (t, n) => {
  const r = E.useContext(La),
    i = E.useContext(Kc),
    o = () => YS(e, t, r, i);
  return n ? o() : PS(o);
};
function QS(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = ws(o[d]);
  let { initial: s, animate: a } = e;
  const l = _a(e),
    u = my(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  if (f && typeof f != "boolean" && !Ma(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const y = ef(e, d[g]);
      if (y) {
        const { transitionEnd: v, transition: C, ...p } = y;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const S = c ? m.length - 1 : 0;
            m = m[S];
          }
          m !== null && (i[h] = m);
        }
        for (const h in v) i[h] = v[h];
      }
    }
  }
  return i;
}
const li = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  mr = new Set(li),
  wy = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Sy = wy("--"),
  XS = wy("var(--"),
  tf = (e) => (XS(e) ? ZS.test(e.split("/*")[0].trim()) : !1),
  ZS =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Ey = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  an = (e, t, n) => (n > t ? t : n < e ? e : n),
  ui = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  po = { ...ui, transform: (e) => an(0, 1, e) },
  rs = { ...ui, default: 1 },
  Do = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  hn = Do("deg"),
  $t = Do("%"),
  W = Do("px"),
  JS = Do("vh"),
  qS = Do("vw"),
  yh = {
    ...$t,
    parse: (e) => $t.parse(e) / 100,
    transform: (e) => $t.transform(e * 100),
  },
  eE = {
    borderWidth: W,
    borderTopWidth: W,
    borderRightWidth: W,
    borderBottomWidth: W,
    borderLeftWidth: W,
    borderRadius: W,
    radius: W,
    borderTopLeftRadius: W,
    borderTopRightRadius: W,
    borderBottomRightRadius: W,
    borderBottomLeftRadius: W,
    width: W,
    maxWidth: W,
    height: W,
    maxHeight: W,
    top: W,
    right: W,
    bottom: W,
    left: W,
    padding: W,
    paddingTop: W,
    paddingRight: W,
    paddingBottom: W,
    paddingLeft: W,
    margin: W,
    marginTop: W,
    marginRight: W,
    marginBottom: W,
    marginLeft: W,
    backgroundPositionX: W,
    backgroundPositionY: W,
  },
  tE = {
    rotate: hn,
    rotateX: hn,
    rotateY: hn,
    rotateZ: hn,
    scale: rs,
    scaleX: rs,
    scaleY: rs,
    scaleZ: rs,
    skew: hn,
    skewX: hn,
    skewY: hn,
    distance: W,
    translateX: W,
    translateY: W,
    translateZ: W,
    x: W,
    y: W,
    z: W,
    perspective: W,
    transformPerspective: W,
    opacity: po,
    originX: yh,
    originY: yh,
    originZ: W,
  },
  vh = { ...ui, transform: Math.round },
  nf = {
    ...eE,
    ...tE,
    zIndex: vh,
    size: W,
    fillOpacity: po,
    strokeOpacity: po,
    numOctaves: vh,
  },
  nE = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  rE = li.length;
function iE(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < rE; o++) {
    const s = li[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = Ey(a, nf[s]);
      if (!l) {
        i = !1;
        const c = nE[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function rf(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (mr.has(l)) {
      s = !0;
      continue;
    } else if (Sy(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Ey(u, nf[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = iE(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const oE = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  sE = { offset: "strokeDashoffset", array: "strokeDasharray" };
function aE(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? oE : sE;
  e[o.offset] = W.transform(-r);
  const s = W.transform(t),
    a = W.transform(n);
  e[o.array] = `${s} ${a}`;
}
function xh(e, t, n) {
  return typeof e == "string" ? e : W.transform(t + n * e);
}
function lE(e, t, n) {
  const r = xh(t, e.x, e.width),
    i = xh(n, e.y, e.height);
  return `${r} ${i}`;
}
function of(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f
) {
  if ((rf(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: g, dimensions: y } = e;
  d.transform && (y && (g.transform = d.transform), delete d.transform),
    y &&
      (i !== void 0 || o !== void 0 || g.transform) &&
      (g.transformOrigin = lE(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && aE(d, s, a, l, !1);
}
const sf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Py = () => ({ ...sf(), attrs: {} }),
  af = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Ty(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Cy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function ky(e, t, n, r) {
  Ty(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Cy.has(i) ? i : Zc(i), t.attrs[i]);
}
const na = {};
function uE(e) {
  Object.assign(na, e);
}
function Ry(e, { layout: t, layoutId: n }) {
  return (
    mr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!na[e] || e === "opacity"))
  );
}
function lf(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (Ye(i[s]) ||
      (t.style && Ye(t.style[s])) ||
      Ry(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
function Dy(e, t, n) {
  const r = lf(e, t, n);
  for (const i in e)
    if (Ye(e[i]) || Ye(t[i])) {
      const o =
        li.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
function cE(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const wh = ["x", "y", "width", "height", "cx", "cy", "r"],
  fE = {
    useVisualState: xy({
      scrapeMotionValuesFromProps: Dy,
      createRenderState: Py,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let o = !!e.drag;
        if (!o) {
          for (const a in i)
            if (mr.has(a)) {
              o = !0;
              break;
            }
        }
        if (!o) return;
        let s = !t;
        if (t)
          for (let a = 0; a < wh.length; a++) {
            const l = wh[a];
            e[l] !== t[l] && (s = !0);
          }
        s &&
          me.read(() => {
            cE(n, r),
              me.render(() => {
                of(r, i, af(n.tagName), e.transformTemplate), ky(n, r);
              });
          });
      },
    }),
  },
  dE = {
    useVisualState: xy({
      scrapeMotionValuesFromProps: lf,
      createRenderState: sf,
    }),
  };
function Ly(e, t, n) {
  for (const r in t) !Ye(t[r]) && !Ry(r, n) && (e[r] = t[r]);
}
function hE({ transformTemplate: e }, t) {
  return E.useMemo(() => {
    const n = sf();
    return rf(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function pE(e, t) {
  const n = e.style || {},
    r = {};
  return Ly(r, n, e), Object.assign(r, hE(e, t)), r;
}
function mE(e, t) {
  const n = {},
    r = pE(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function gE(e, t, n, r) {
  const i = E.useMemo(() => {
    const o = Py();
    return (
      of(o, t, af(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Ly(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function yE(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (qc(n) ? gE : mE)(r, o, s, n),
      u = NS(r, typeof n == "string", e),
      c = n !== E.Fragment ? { ...u, ...l, ref: i } : {},
      { children: f } = r,
      d = E.useMemo(() => (Ye(f) ? f.get() : f), [f]);
    return E.createElement(n, { ...c, children: d });
  };
}
function vE(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(qc(r) ? fE : dE),
      preloadedFeatures: e,
      useRender: yE(i),
      createVisualElement: t,
      Component: r,
    };
    return US(s);
  };
}
function My(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Na(e, t, n) {
  const r = e.getProps();
  return ef(r, t, n !== void 0 ? n : r.custom, e);
}
const xE = Yc(() => window.ScrollTimeline !== void 0);
class wE {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t))
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (xE() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class SE extends wE {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function uf(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Ru = 2e4;
function _y(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ru; ) (t += n), (r = e.next(t));
  return t >= Ru ? 1 / 0 : t;
}
function cf(e) {
  return typeof e == "function";
}
function Sh(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const ff = (e) => Array.isArray(e) && typeof e[0] == "number",
  EE = { linearEasing: void 0 };
function PE(e, t) {
  const n = Yc(e);
  return () => {
    var r;
    return (r = EE[t]) !== null && r !== void 0 ? r : n();
  };
}
const ra = PE(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Ny = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++) r += e(ni(0, i - 1, o)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Ay(e) {
  return !!(
    (typeof e == "function" && ra()) ||
    !e ||
    (typeof e == "string" && (e in Du || ra())) ||
    ff(e) ||
    (Array.isArray(e) && e.every(Ay))
  );
}
const _i = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Du = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: _i([0, 0.65, 0.55, 1]),
    circOut: _i([0.55, 0, 1, 0.45]),
    backIn: _i([0.31, 0.01, 0.66, -0.59]),
    backOut: _i([0.33, 1.53, 0.69, 0.99]),
  };
function jy(e, t) {
  if (e)
    return typeof e == "function" && ra()
      ? Ny(e, t)
      : ff(e)
      ? _i(e)
      : Array.isArray(e)
      ? e.map((n) => jy(n, t) || Du.easeOut)
      : Du[e];
}
const Lt = { x: !1, y: !1 };
function Oy() {
  return Lt.x || Lt.y;
}
function TE(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
function Vy(e, t) {
  const n = TE(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Eh(e) {
  return (t) => {
    t.pointerType === "touch" || Oy() || e(t);
  };
}
function CE(e, t, n = {}) {
  const [r, i, o] = Vy(e, n),
    s = Eh((a) => {
      const { target: l } = a,
        u = t(a);
      if (typeof u != "function" || !l) return;
      const c = Eh((f) => {
        u(f), l.removeEventListener("pointerleave", c);
      });
      l.addEventListener("pointerleave", c, i);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", s, i);
    }),
    o
  );
}
const Iy = (e, t) => (t ? (e === t ? !0 : Iy(e, t.parentElement)) : !1),
  df = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  kE = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function RE(e) {
  return kE.has(e.tagName) || e.tabIndex !== -1;
}
const Ni = new WeakSet();
function Ph(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function yl(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const DE = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Ph(() => {
    if (Ni.has(n)) return;
    yl(n, "down");
    const i = Ph(() => {
        yl(n, "up");
      }),
      o = () => yl(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Th(e) {
  return df(e) && !Oy();
}
function LE(e, t, n = {}) {
  const [r, i, o] = Vy(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!Th(a) || Ni.has(l)) return;
      Ni.add(l);
      const u = t(a),
        c = (g, y) => {
          window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            !(!Th(g) || !Ni.has(l)) &&
              (Ni.delete(l), typeof u == "function" && u(g, { success: y }));
        },
        f = (g) => {
          c(g, n.useGlobalTarget || Iy(l, g.target));
        },
        d = (g) => {
          c(g, !1);
        };
      window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i);
    };
  return (
    r.forEach((a) => {
      !RE(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
        a.addEventListener("focus", (u) => DE(u, i), i);
    }),
    o
  );
}
function ME(e) {
  return e === "x" || e === "y"
    ? Lt[e]
      ? null
      : ((Lt[e] = !0),
        () => {
          Lt[e] = !1;
        })
    : Lt.x || Lt.y
    ? null
    : ((Lt.x = Lt.y = !0),
      () => {
        Lt.x = Lt.y = !1;
      });
}
const Fy = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...li,
]);
let Ss;
function _E() {
  Ss = void 0;
}
const Wt = {
  now: () => (
    Ss === void 0 &&
      Wt.set(
        Be.isProcessing || kS.useManualTiming ? Be.timestamp : performance.now()
      ),
    Ss
  ),
  set: (e) => {
    (Ss = e), queueMicrotask(_E);
  },
};
function hf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function pf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class mf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return hf(this.subscriptions, t), () => pf(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function zy(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Ch = 30,
  NE = (e) => !isNaN(parseFloat(e));
class AE {
  constructor(t, n = {}) {
    (this.version = "11.18.1"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = Wt.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Wt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = NE(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new mf());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            me.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Wt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Ch
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ch);
    return zy(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function mo(e, t) {
  return new AE(e, t);
}
function jE(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, mo(n));
}
function OE(e, t) {
  const n = Na(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = GS(o[s]);
    jE(e, s, a);
  }
}
function VE(e) {
  return !!(Ye(e) && e.add);
}
function Lu(e, t) {
  const n = e.getValue("willChange");
  if (VE(n)) return n.add(t);
}
function By(e) {
  return e.props[gy];
}
const Uy = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  IE = 1e-7,
  FE = 12;
function zE(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = Uy(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > IE && ++a < FE);
  return s;
}
function Lo(e, t, n, r) {
  if (e === t && n === r) return mt;
  const i = (o) => zE(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Uy(i(o), t, r));
}
const by = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  $y = (e) => (t) => 1 - e(1 - t),
  Wy = Lo(0.33, 1.53, 0.69, 0.99),
  gf = $y(Wy),
  Hy = by(gf),
  Ky = (e) =>
    (e *= 2) < 1 ? 0.5 * gf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  yf = (e) => 1 - Math.sin(Math.acos(e)),
  Gy = $y(yf),
  Yy = by(yf),
  Qy = (e) => /^0[^.\s]+$/u.test(e);
function BE(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Qy(e)
    : !0;
}
const $i = (e) => Math.round(e * 1e5) / 1e5,
  vf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function UE(e) {
  return e == null;
}
const bE =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  xf = (e, t) => (n) =>
    !!(
      (typeof n == "string" && bE.test(n) && n.startsWith(e)) ||
      (t && !UE(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Xy = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(vf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  $E = (e) => an(0, 255, e),
  vl = { ...ui, transform: (e) => Math.round($E(e)) },
  tr = {
    test: xf("rgb", "red"),
    parse: Xy("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      vl.transform(e) +
      ", " +
      vl.transform(t) +
      ", " +
      vl.transform(n) +
      ", " +
      $i(po.transform(r)) +
      ")",
  };
function WE(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Mu = { test: xf("#"), parse: WE, transform: tr.transform },
  Vr = {
    test: xf("hsl", "hue"),
    parse: Xy("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      $t.transform($i(t)) +
      ", " +
      $t.transform($i(n)) +
      ", " +
      $i(po.transform(r)) +
      ")",
  },
  Ke = {
    test: (e) => tr.test(e) || Mu.test(e) || Vr.test(e),
    parse: (e) =>
      tr.test(e) ? tr.parse(e) : Vr.test(e) ? Vr.parse(e) : Mu.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? tr.transform(e)
        : Vr.transform(e),
  },
  HE =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function KE(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(vf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(HE)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Zy = "number",
  Jy = "color",
  GE = "var",
  YE = "var(",
  kh = "${}",
  QE =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function go(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      QE,
      (l) => (
        Ke.test(l)
          ? (r.color.push(o), i.push(Jy), n.push(Ke.parse(l)))
          : l.startsWith(YE)
          ? (r.var.push(o), i.push(GE), n.push(l))
          : (r.number.push(o), i.push(Zy), n.push(parseFloat(l))),
        ++o,
        kh
      )
    )
    .split(kh);
  return { values: n, split: a, indexes: r, types: i };
}
function qy(e) {
  return go(e).values;
}
function ev(e) {
  const { split: t, types: n } = go(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === Zy
          ? (o += $i(i[s]))
          : a === Jy
          ? (o += Ke.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const XE = (e) => (typeof e == "number" ? 0 : e);
function ZE(e) {
  const t = qy(e);
  return ev(e)(t.map(XE));
}
const An = {
    test: KE,
    parse: qy,
    createTransformer: ev,
    getAnimatableNone: ZE,
  },
  JE = new Set(["brightness", "contrast", "saturate", "opacity"]);
function qE(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(vf) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = JE.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const eP = /\b([a-z-]*)\(.*?\)/gu,
  _u = {
    ...An,
    getAnimatableNone: (e) => {
      const t = e.match(eP);
      return t ? t.map(qE).join(" ") : e;
    },
  },
  tP = {
    ...nf,
    color: Ke,
    backgroundColor: Ke,
    outlineColor: Ke,
    fill: Ke,
    stroke: Ke,
    borderColor: Ke,
    borderTopColor: Ke,
    borderRightColor: Ke,
    borderBottomColor: Ke,
    borderLeftColor: Ke,
    filter: _u,
    WebkitFilter: _u,
  },
  wf = (e) => tP[e];
function tv(e, t) {
  let n = wf(e);
  return (
    n !== _u && (n = An), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const nP = new Set(["auto", "none", "0"]);
function rP(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !nP.has(o) && go(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = tv(n, i);
}
const Rh = (e) => e === ui || e === W,
  Dh = (e, t) => parseFloat(e.split(", ")[t]),
  Lh =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Dh(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Dh(o[1], e) : 0;
      }
    },
  iP = new Set(["x", "y", "z"]),
  oP = li.filter((e) => !iP.has(e));
function sP(e) {
  const t = [];
  return (
    oP.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ii = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Lh(4, 13),
  y: Lh(5, 14),
};
ii.translateX = ii.x;
ii.translateY = ii.y;
const or = new Set();
let Nu = !1,
  Au = !1;
function nv() {
  if (Au) {
    const e = Array.from(or).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = sP(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Au = !1), (Nu = !1), or.forEach((e) => e.complete()), or.clear();
}
function rv() {
  or.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Au = !0);
  });
}
function aP() {
  rv(), nv();
}
class Sf {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (or.add(this),
          Nu || ((Nu = !0), me.read(rv), me.resolveKeyframes(nv)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      or.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), or.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const iv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  lP = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function uP(e) {
  const t = lP.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function ov(e, t, n = 1) {
  const [r, i] = uP(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return iv(s) ? parseFloat(s) : s;
  }
  return tf(i) ? ov(i, t, n + 1) : i;
}
const sv = (e) => (t) => t.test(e),
  cP = { test: (e) => e === "auto", parse: (e) => e },
  av = [ui, W, $t, hn, qS, JS, cP],
  Mh = (e) => av.find(sv(e));
class lv extends Sf {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), tf(u))) {
        const c = ov(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !Fy.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = Mh(i),
      a = Mh(o);
    if (s !== a)
      if (Rh(s) && Rh(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) BE(t[i]) && r.push(i);
    r.length && rP(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ii[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      a = i[s];
    (i[s] = ii[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
const _h = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (An.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function fP(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function dP(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = _h(i, t),
    a = _h(o, t);
  return !s || !a ? !1 : fP(e) || ((n === "spring" || cf(n)) && r);
}
const hP = (e) => e !== null;
function Aa(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(hP),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const pP = 40;
class uv {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Wt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > pP
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && aP(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Wt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !dP(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        l == null || l(Aa(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const Se = (e, t, n) => e + (t - e) * n;
function xl(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function mP({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = xl(l, a, e + 1 / 3)), (o = xl(l, a, e)), (s = xl(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function ia(e, t) {
  return (n) => (n > 0 ? t : e);
}
const wl = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  gP = [Mu, tr, Vr],
  yP = (e) => gP.find((t) => t.test(e));
function Nh(e) {
  const t = yP(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Vr && (n = mP(n)), n;
}
const Ah = (e, t) => {
    const n = Nh(e),
      r = Nh(t);
    if (!n || !r) return ia(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = wl(n.red, r.red, o)),
      (i.green = wl(n.green, r.green, o)),
      (i.blue = wl(n.blue, r.blue, o)),
      (i.alpha = Se(n.alpha, r.alpha, o)),
      tr.transform(i)
    );
  },
  vP = (e, t) => (n) => t(e(n)),
  Mo = (...e) => e.reduce(vP),
  ju = new Set(["none", "hidden"]);
function xP(e, t) {
  return ju.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function wP(e, t) {
  return (n) => Se(e, t, n);
}
function Ef(e) {
  return typeof e == "number"
    ? wP
    : typeof e == "string"
    ? tf(e)
      ? ia
      : Ke.test(e)
      ? Ah
      : PP
    : Array.isArray(e)
    ? cv
    : typeof e == "object"
    ? Ke.test(e)
      ? Ah
      : SP
    : ia;
}
function cv(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Ef(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function SP(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ef(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function EP(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
const PP = (e, t) => {
  const n = An.createTransformer(t),
    r = go(e),
    i = go(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (ju.has(e) && !i.values.length) || (ju.has(t) && !r.values.length)
      ? xP(e, t)
      : Mo(cv(EP(r, i), i.values), n)
    : ia(e, t);
};
function fv(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Se(e, t, n)
    : Ef(e)(e, t);
}
const TP = 5;
function dv(e, t, n) {
  const r = Math.max(t - TP, 0);
  return zy(n - e(r), t - r);
}
const Re = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  jh = 0.001;
function CP({
  duration: e = Re.duration,
  bounce: t = Re.bounce,
  velocity: n = Re.velocity,
  mass: r = Re.mass,
}) {
  let i,
    o,
    s = 1 - t;
  (s = an(Re.minDamping, Re.maxDamping, s)),
    (e = an(Re.minDuration, Re.maxDuration, en(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            g = Ou(u, s),
            y = Math.exp(-f);
          return jh - (d / g) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = Ou(Math.pow(u, 2), s);
          return ((-i(u) + jh > 0 ? -1 : 1) * ((d - g) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -0.001 + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = RP(i, o, a);
  if (((e = qt(e)), isNaN(l)))
    return { stiffness: Re.stiffness, damping: Re.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const kP = 12;
function RP(e, t, n) {
  let r = n;
  for (let i = 1; i < kP; i++) r = r - e(r) / t(r);
  return r;
}
function Ou(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const DP = ["duration", "bounce"],
  LP = ["stiffness", "damping", "mass"];
function Oh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function MP(e) {
  let t = {
    velocity: Re.velocity,
    stiffness: Re.stiffness,
    damping: Re.damping,
    mass: Re.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Oh(e, LP) && Oh(e, DP))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * an(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Re.mass, stiffness: i, damping: o };
    } else {
      const n = CP(e);
      (t = { ...t, ...n, mass: Re.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function hv(e = Re.visualDuration, t = Re.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: g,
    } = MP({ ...n, velocity: -en(n.velocity || 0) }),
    y = d || 0,
    v = u / (2 * Math.sqrt(l * c)),
    C = s - o,
    p = en(Math.sqrt(l / c)),
    h = Math.abs(C) < 5;
  r || (r = h ? Re.restSpeed.granular : Re.restSpeed.default),
    i || (i = h ? Re.restDelta.granular : Re.restDelta.default);
  let m;
  if (v < 1) {
    const R = Ou(p, v);
    m = (x) => {
      const L = Math.exp(-v * p * x);
      return (
        s - L * (((y + v * p * C) / R) * Math.sin(R * x) + C * Math.cos(R * x))
      );
    };
  } else if (v === 1) m = (R) => s - Math.exp(-p * R) * (C + (y + p * C) * R);
  else {
    const R = p * Math.sqrt(v * v - 1);
    m = (x) => {
      const L = Math.exp(-v * p * x),
        P = Math.min(R * x, 300);
      return (
        s - (L * ((y + v * p * C) * Math.sinh(P) + R * C * Math.cosh(P))) / R
      );
    };
  }
  const S = {
    calculatedDuration: (g && f) || null,
    next: (R) => {
      const x = m(R);
      if (g) a.done = R >= f;
      else {
        let L = 0;
        v < 1 && (L = R === 0 ? qt(y) : dv(m, R, x));
        const P = Math.abs(L) <= r,
          _ = Math.abs(s - x) <= i;
        a.done = P && _;
      }
      return (a.value = a.done ? s : x), a;
    },
    toString: () => {
      const R = Math.min(_y(S), Ru),
        x = Ny((L) => S.next(R * L).value, R, 30);
      return R + "ms " + x;
    },
  };
  return S;
}
function Vh({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    y = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
        ? a
        : l;
  let v = n * t;
  const C = f + v,
    p = s === void 0 ? C : s(C);
  p !== C && (v = p - f);
  const h = (P) => -v * Math.exp(-P / r),
    m = (P) => p + h(P),
    S = (P) => {
      const _ = h(P),
        A = m(P);
      (d.done = Math.abs(_) <= u), (d.value = d.done ? p : A);
    };
  let R, x;
  const L = (P) => {
    g(d.value) &&
      ((R = P),
      (x = hv({
        keyframes: [d.value, y(d.value)],
        velocity: dv(m, P, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    L(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let _ = !1;
        return (
          !x && R === void 0 && ((_ = !0), S(P), L(P)),
          R !== void 0 && P >= R ? x.next(P - R) : (!_ && S(P), d)
        );
      },
    }
  );
}
const _P = Lo(0.42, 0, 1, 1),
  NP = Lo(0, 0, 0.58, 1),
  pv = Lo(0.42, 0, 0.58, 1),
  AP = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ih = {
    linear: mt,
    easeIn: _P,
    easeInOut: pv,
    easeOut: NP,
    circIn: yf,
    circInOut: Yy,
    circOut: Gy,
    backIn: gf,
    backInOut: Hy,
    backOut: Wy,
    anticipate: Ky,
  },
  Fh = (e) => {
    if (ff(e)) {
      Cu(e.length === 4);
      const [t, n, r, i] = e;
      return Lo(t, n, r, i);
    } else if (typeof e == "string") return Cu(Ih[e] !== void 0), Ih[e];
    return e;
  };
function jP(e, t, n) {
  const r = [],
    i = n || fv,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || mt : t;
      a = Mo(l, a);
    }
    r.push(a);
  }
  return r;
}
function OP(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Cu(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = jP(t, r, i),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const d = ni(e[f], e[f + 1], c);
      return a[f](d);
    };
  return n ? (c) => u(an(e[0], e[o - 1], c)) : u;
}
function VP(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = ni(0, t, r);
    e.push(Se(n, 1, i));
  }
}
function IP(e) {
  const t = [0];
  return VP(t, e.length - 1), t;
}
function FP(e, t) {
  return e.map((n) => n * t);
}
function zP(e, t) {
  return e.map(() => t || pv).splice(0, e.length - 1);
}
function oa({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = AP(r) ? r.map(Fh) : Fh(r),
    o = { done: !1, value: t[0] },
    s = FP(n && n.length === t.length ? n : IP(t), e),
    a = OP(s, t, { ease: Array.isArray(i) ? i : zP(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const BP = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => me.update(t, !0),
      stop: () => Nn(t),
      now: () => (Be.isProcessing ? Be.timestamp : Wt.now()),
    };
  },
  UP = { decay: Vh, inertia: Vh, tween: oa, keyframes: oa, spring: hv },
  bP = (e) => e / 100;
class Pf extends uv {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
      s = (i == null ? void 0 : i.KeyframeResolver) || Sf,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new s(o, a, n, r, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      a = cf(n) ? n : UP[n] || oa;
    let l, u;
    a !== oa &&
      typeof t[0] != "number" &&
      ((l = Mo(bP, fv(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    o === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = _y(c));
    const { calculatedDuration: f } = c,
      d = f + i,
      g = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: d,
      repeat: g,
      repeatType: y,
      repeatDelay: v,
      onUpdate: C,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      S = o;
    if (g) {
      const P = Math.min(this.currentTime, c) / f;
      let _ = Math.floor(P),
        A = P % 1;
      !A && P >= 1 && (A = 1),
        A === 1 && _--,
        (_ = Math.min(_, g + 1)),
        !!(_ % 2) &&
          (y === "reverse"
            ? ((A = 1 - A), v && (A -= v / f))
            : y === "mirror" && (S = s)),
        (m = an(0, 1, A) * f);
    }
    const R = h ? { done: !1, value: l[0] } : S.next(m);
    a && (R.value = a(R.value));
    let { done: x } = R;
    !h &&
      u !== null &&
      (x = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const L =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && x));
    return (
      L && i !== void 0 && (R.value = Aa(l, this.options, i)),
      C && C(R.value),
      L && this.finish(),
      R
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? en(t.calculatedDuration) : 0;
  }
  get time() {
    return en(this.currentTime);
  }
  set time(t) {
    (t = qt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = en(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = BP, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const $P = new Set(["opacity", "clipPath", "filter", "transform"]);
function WP(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = jy(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const HP = Yc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  sa = 10,
  KP = 2e4;
function GP(e) {
  return cf(e.type) || e.type === "spring" || !Ay(e.ease);
}
function YP(e, t) {
  const n = new Pf({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < KP; ) (r = n.sample(o)), i.push(r.value), (o += sa);
  return { times: void 0, keyframes: i, duration: o - sa, ease: "linear" };
}
const mv = { anticipate: Ky, backInOut: Hy, circInOut: Yy };
function QP(e) {
  return e in mv;
}
class zh extends uv {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    (this.resolver = new lv(
      o,
      (s, a) => this.onKeyframesResolved(s, a),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof s == "string" && ra() && QP(s) && (s = mv[s]), GP(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: g,
          motionValue: y,
          element: v,
          ...C
        } = this.options,
        p = YP(t, C);
      (t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = p.duration),
        (o = p.times),
        (s = p.ease),
        (a = "keyframes");
    }
    const f = WP(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s,
    });
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Sh(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(Aa(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: f, duration: i, times: o, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return en(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return en(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = qt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return mt;
      const { animation: r } = n;
      Sh(r, t);
    }
    return mt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...g
        } = this.options,
        y = new Pf({
          ...g,
          keyframes: r,
          duration: i,
          type: o,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        v = qt(this.time);
      u.setWithVelocity(y.sample(v - sa).value, y.sample(v).value, sa);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: a,
    } = t;
    return (
      HP() &&
      r &&
      $P.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const XP = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  ZP = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  JP = { type: "keyframes", duration: 0.8 },
  qP = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  eT = (e, { keyframes: t }) =>
    t.length > 2
      ? JP
      : mr.has(e)
      ? e.startsWith("scale")
        ? ZP(t[1])
        : XP
      : qP;
function tT({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Tf =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = uf(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - qt(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (d) => {
        t.set(d), a.onUpdate && a.onUpdate(d);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    tT(a) || (c = { ...c, ...eT(e, c) }),
      c.duration && (c.duration = qt(c.duration)),
      c.repeatDelay && (c.repeatDelay = qt(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (f = !0)),
      f && !o && t.get() !== void 0)
    ) {
      const d = Aa(c.keyframes, a);
      if (d !== void 0)
        return (
          me.update(() => {
            c.onUpdate(d), c.onComplete();
          }),
          new SE([])
        );
    }
    return !o && zh.supports(c) ? new zh(c) : new Pf(c);
  };
function nT({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function gv(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null
      ),
      g = l[f];
    if (g === void 0 || (c && nT(c, f))) continue;
    const y = { delay: n, ...uf(s || {}, f) };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const p = By(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, f, me);
        h !== null && ((y.startTime = h), (v = !0));
      }
    }
    Lu(e, f),
      d.start(
        Tf(f, d, g, e.shouldReduceMotion && Fy.has(f) ? { type: !1 } : y, e, v)
      );
    const C = d.animation;
    C && u.push(C);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        me.update(() => {
          a && OE(e, a);
        });
      }),
    u
  );
}
function Vu(e, t, n = {}) {
  var r;
  const i = Na(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(gv(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return rT(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function rT(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(iT)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Vu(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function iT(e, t) {
  return e.sortNodePosition(t);
}
function oT(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Vu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Vu(e, t, n);
  else {
    const i = typeof t == "function" ? Na(e, t, n.custom) : t;
    r = Promise.all(gv(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const sT = Xc.length;
function yv(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? yv(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < sT; n++) {
    const r = Xc[n],
      i = e.props[r];
    (ho(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const aT = [...Qc].reverse(),
  lT = Qc.length;
function uT(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => oT(e, n, r)));
}
function cT(e) {
  let t = uT(e),
    n = Bh(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = Na(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: g, transitionEnd: y, ...v } = d;
      u = { ...u, ...v, ...y };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = yv(e.parent) || {},
      f = [],
      d = new Set();
    let g = {},
      y = 1 / 0;
    for (let C = 0; C < lT; C++) {
      const p = aT[C],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        S = ho(m),
        R = p === l ? h.isActive : null;
      R === !1 && (y = C);
      let x = m === c[p] && m !== u[p] && S;
      if (
        (x && r && e.manuallyAnimateOnMount && (x = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && R === null) ||
          (!m && !h.prevProp) ||
          Ma(m) ||
          typeof m == "boolean")
      )
        continue;
      const L = fT(h.prevProp, m);
      let P = L || (p === l && h.isActive && !x && S) || (C > y && S),
        _ = !1;
      const A = Array.isArray(m) ? m : [m];
      let K = A.reduce(i(p), {});
      R === !1 && (K = {});
      const { prevResolvedValues: q = {} } = h,
        ae = { ...q, ...K },
        re = (H) => {
          (P = !0),
            d.has(H) && ((_ = !0), d.delete(H)),
            (h.needsAnimating[H] = !0);
          const j = e.getValue(H);
          j && (j.liveStyle = !1);
        };
      for (const H in ae) {
        const j = K[H],
          B = q[H];
        if (g.hasOwnProperty(H)) continue;
        let U = !1;
        ku(j) && ku(B) ? (U = !My(j, B)) : (U = j !== B),
          U
            ? j != null
              ? re(H)
              : d.add(H)
            : j !== void 0 && d.has(H)
            ? re(H)
            : (h.protectedKeys[H] = !0);
      }
      (h.prevProp = m),
        (h.prevResolvedValues = K),
        h.isActive && (g = { ...g, ...K }),
        r && e.blockInitialAnimation && (P = !1),
        P &&
          (!(x && L) || _) &&
          f.push(...A.map((H) => ({ animation: H, options: { type: p } })));
    }
    if (d.size) {
      const C = {};
      d.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        m && (m.liveStyle = !0), (C[p] = h ?? null);
      }),
        f.push({ animation: C });
    }
    let v = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var g;
        return (g = d.animationState) === null || g === void 0
          ? void 0
          : g.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = s(l);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = Bh()), (r = !0);
    },
  };
}
function fT(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !My(t, e) : !1;
}
function Wn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Bh() {
  return {
    animate: Wn(!0),
    whileInView: Wn(),
    whileHover: Wn(),
    whileTap: Wn(),
    whileDrag: Wn(),
    whileFocus: Wn(),
    exit: Wn(),
  };
}
class Bn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class dT extends Bn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = cT(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ma(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let hT = 0;
class pT extends Bn {
  constructor() {
    super(...arguments), (this.id = hT++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const mT = { animation: { Feature: dT }, exit: { Feature: pT } };
function yo(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function _o(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const gT = (e) => (t) => df(t) && e(t, _o(t));
function Wi(e, t, n, r) {
  return yo(e, t, gT(n), r);
}
const Uh = (e, t) => Math.abs(e - t);
function yT(e, t) {
  const n = Uh(e.x, t.x),
    r = Uh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class vv {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = El(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          g = yT(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !g) return;
        const { point: y } = f,
          { timestamp: v } = Be;
        this.history.push({ ...y, timestamp: v });
        const { onStart: C, onMove: p } = this.handlers;
        d ||
          (C && C(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Sl(d, this.transformPagePoint)),
          me.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const C = El(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Sl(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(f, C), y && y(f, C);
      }),
      !df(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = _o(t),
      a = Sl(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = Be;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, El(a, this.history)),
      (this.removeListeners = Mo(
        Wi(this.contextWindow, "pointermove", this.handlePointerMove),
        Wi(this.contextWindow, "pointerup", this.handlePointerUp),
        Wi(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Nn(this.updatePoint);
  }
}
function Sl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function bh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function El({ point: e }, t) {
  return {
    point: e,
    delta: bh(e, xv(t)),
    offset: bh(e, vT(t)),
    velocity: xT(t, 0.1),
  };
}
function vT(e) {
  return e[0];
}
function xv(e) {
  return e[e.length - 1];
}
function xT(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = xv(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > qt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = en(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const wv = 1e-4,
  wT = 1 - wv,
  ST = 1 + wv,
  Sv = 0.01,
  ET = 0 - Sv,
  PT = 0 + Sv;
function yt(e) {
  return e.max - e.min;
}
function TT(e, t, n) {
  return Math.abs(e - t) <= n;
}
function $h(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Se(t.min, t.max, e.origin)),
    (e.scale = yt(n) / yt(t)),
    (e.translate = Se(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= wT && e.scale <= ST) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= ET && e.translate <= PT) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Hi(e, t, n, r) {
  $h(e.x, t.x, n.x, r ? r.originX : void 0),
    $h(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Wh(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + yt(t));
}
function CT(e, t, n) {
  Wh(e.x, t.x, n.x), Wh(e.y, t.y, n.y);
}
function Hh(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + yt(t));
}
function Ki(e, t, n) {
  Hh(e.x, t.x, n.x), Hh(e.y, t.y, n.y);
}
function kT(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Se(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Se(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Kh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function RT(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Kh(e.x, n, i), y: Kh(e.y, t, r) };
}
function Gh(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function DT(e, t) {
  return { x: Gh(e.x, t.x), y: Gh(e.y, t.y) };
}
function LT(e, t) {
  let n = 0.5;
  const r = yt(e),
    i = yt(t);
  return (
    i > r
      ? (n = ni(t.min, t.max - r, e.min))
      : r > i && (n = ni(e.min, e.max - i, t.min)),
    an(0, 1, n)
  );
}
function MT(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Iu = 0.35;
function _T(e = Iu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Iu),
    { x: Yh(e, "left", "right"), y: Yh(e, "top", "bottom") }
  );
}
function Yh(e, t, n) {
  return { min: Qh(e, t), max: Qh(e, n) };
}
function Qh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Xh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ir = () => ({ x: Xh(), y: Xh() }),
  Zh = () => ({ min: 0, max: 0 }),
  Le = () => ({ x: Zh(), y: Zh() });
function St(e) {
  return [e("x"), e("y")];
}
function Ev({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function NT({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function AT(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Pl(e) {
  return e === void 0 || e === 1;
}
function Fu({ scale: e, scaleX: t, scaleY: n }) {
  return !Pl(e) || !Pl(t) || !Pl(n);
}
function Gn(e) {
  return (
    Fu(e) ||
    Pv(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Pv(e) {
  return Jh(e.x) || Jh(e.y);
}
function Jh(e) {
  return e && e !== "0%";
}
function aa(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function qh(e, t, n, r, i) {
  return i !== void 0 && (e = aa(e, i, r)), aa(e, n, r) + t;
}
function zu(e, t = 0, n = 1, r, i) {
  (e.min = qh(e.min, t, n, r, i)), (e.max = qh(e.max, t, n, r, i));
}
function Tv(e, { x: t, y: n }) {
  zu(e.x, t.translate, t.scale, t.originPoint),
    zu(e.y, n.translate, n.scale, n.originPoint);
}
const ep = 0.999999999999,
  tp = 1.0000000000001;
function jT(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        zr(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Tv(e, s)),
      r && Gn(o.latestValues) && zr(e, o.latestValues));
  }
  t.x < tp && t.x > ep && (t.x = 1), t.y < tp && t.y > ep && (t.y = 1);
}
function Fr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function np(e, t, n, r, i = 0.5) {
  const o = Se(e.min, e.max, i);
  zu(e, t, n, o, r);
}
function zr(e, t) {
  np(e.x, t.x, t.scaleX, t.scale, t.originX),
    np(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Cv(e, t) {
  return Ev(AT(e.getBoundingClientRect(), t));
}
function OT(e, t, n) {
  const r = Cv(e, n),
    { scroll: i } = t;
  return i && (Fr(r.x, i.offset.x), Fr(r.y, i.offset.y)), r;
}
const kv = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  VT = new WeakMap();
class IT {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Le()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(_o(c).point);
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
        if (
          d &&
          !g &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = ME(d)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          St((C) => {
            let p = this.getAxisMotionValue(C).get() || 0;
            if ($t.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const m = h.layout.layoutBox[C];
                m && (p = yt(m) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[C] = p;
          }),
          y && me.postRender(() => y(c, f)),
          Lu(this.visualElement, "transform");
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: g,
          onDirectionLock: y,
          onDrag: v,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: C } = f;
        if (g && this.currentDirection === null) {
          (this.currentDirection = FT(C)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, C),
          this.updateAxis("y", f.point, C),
          this.visualElement.render(),
          v && v(c, f);
      },
      a = (c, f) => this.stop(c, f),
      l = () =>
        St((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new vv(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: kv(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && me.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !is(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = kT(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && Or(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = RT(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = _T(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        St((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = MT(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Or(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = OT(r, i.root, this.visualElement.getTransformPagePoint());
    let s = DT(i.layout.layoutBox, o);
    if (n) {
      const a = n(NT(s));
      (this.hasMutatedConstraints = !!a), a && (s = Ev(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = St((c) => {
        if (!is(c, n, this.currentDirection)) return;
        let f = l[c] || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Lu(this.visualElement, t), r.start(Tf(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    St((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    St((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    St((n) => {
      const { drag: r } = this.getProps();
      if (!is(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - Se(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Or(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    St((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = LT({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      St((s) => {
        if (!is(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(Se(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    VT.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Wi(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Or(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      me.read(r);
    const s = yo(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (St((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Iu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function is(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function FT(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class zT extends Bn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = mt),
      (this.removeListeners = mt),
      (this.controls = new IT(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || mt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const rp = (e) => (t, n) => {
  e && me.postRender(() => e(t, n));
};
class BT extends Bn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = mt);
  }
  onPointerDown(t) {
    this.session = new vv(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: kv(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: rp(t),
      onStart: rp(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && me.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Wi(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Es = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ip(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ci = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (W.test(e)) e = parseFloat(e);
        else return e;
      const n = ip(e, t.target.x),
        r = ip(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  UT = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = An.parse(e);
      if (i.length > 5) return r;
      const o = An.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = Se(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class bT extends E.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    uE($T),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Es.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              me.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Jc.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Rv(e) {
  const [t, n] = TS(),
    r = E.useContext(cy);
  return k.jsx(bT, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: E.useContext(yy),
    isPresent: t,
    safeToRemove: n,
  });
}
const $T = {
  borderRadius: {
    ...Ci,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Ci,
  borderTopRightRadius: Ci,
  borderBottomLeftRadius: Ci,
  borderBottomRightRadius: Ci,
  boxShadow: UT,
};
function WT(e, t, n) {
  const r = Ye(e) ? e : mo(e);
  return r.start(Tf("", r, t, n)), r.animation;
}
function HT(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const KT = (e, t) => e.depth - t.depth;
class GT {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    hf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    pf(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(KT),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function YT(e, t) {
  const n = Wt.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Nn(r), e(o - t));
    };
  return me.read(r, !0), () => Nn(r);
}
const Dv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  QT = Dv.length,
  op = (e) => (typeof e == "string" ? parseFloat(e) : e),
  sp = (e) => typeof e == "number" || W.test(e);
function XT(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Se(0, n.opacity !== void 0 ? n.opacity : 1, ZT(r))),
      (e.opacityExit = Se(t.opacity !== void 0 ? t.opacity : 1, 0, JT(r))))
    : o &&
      (e.opacity = Se(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < QT; s++) {
    const a = `border${Dv[s]}Radius`;
    let l = ap(t, a),
      u = ap(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || sp(l) === sp(u)
        ? ((e[a] = Math.max(Se(op(l), op(u), r), 0)),
          ($t.test(u) || $t.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = Se(t.rotate || 0, n.rotate || 0, r));
}
function ap(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ZT = Lv(0, 0.5, Gy),
  JT = Lv(0.5, 0.95, mt);
function Lv(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ni(e, t, r)));
}
function lp(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function wt(e, t) {
  lp(e.x, t.x), lp(e.y, t.y);
}
function up(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function cp(e, t, n, r, i) {
  return (
    (e -= t), (e = aa(e, 1 / n, r)), i !== void 0 && (e = aa(e, 1 / i, r)), e
  );
}
function qT(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    ($t.test(t) &&
      ((t = parseFloat(t)), (t = Se(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = Se(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = cp(e.min, t, n, a, i)),
    (e.max = cp(e.max, t, n, a, i));
}
function fp(e, t, [n, r, i], o, s) {
  qT(e, t[n], t[r], t[i], t.scale, o, s);
}
const eC = ["x", "scaleX", "originX"],
  tC = ["y", "scaleY", "originY"];
function dp(e, t, n, r) {
  fp(e.x, t, eC, n ? n.x : void 0, r ? r.x : void 0),
    fp(e.y, t, tC, n ? n.y : void 0, r ? r.y : void 0);
}
function hp(e) {
  return e.translate === 0 && e.scale === 1;
}
function Mv(e) {
  return hp(e.x) && hp(e.y);
}
function pp(e, t) {
  return e.min === t.min && e.max === t.max;
}
function nC(e, t) {
  return pp(e.x, t.x) && pp(e.y, t.y);
}
function mp(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function _v(e, t) {
  return mp(e.x, t.x) && mp(e.y, t.y);
}
function gp(e) {
  return yt(e.x) / yt(e.y);
}
function yp(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class rC {
  constructor() {
    this.members = [];
  }
  add(t) {
    hf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (pf(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function iC(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: g,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      g && (r += `skewX(${g}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Yn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Ai = typeof window < "u" && window.MotionDebug !== void 0,
  Tl = ["", "X", "Y", "Z"],
  oC = { visibility: "hidden" },
  vp = 1e3;
let sC = 0;
function Cl(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Nv(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = By(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", me, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Nv(r);
}
function Av({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = sC++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Ai &&
              (Yn.totalNodes =
                Yn.resolvedTargetDeltas =
                Yn.recalculatedProjection =
                  0),
            this.nodes.forEach(uC),
            this.nodes.forEach(pC),
            this.nodes.forEach(mC),
            this.nodes.forEach(cC),
            Ai && window.MotionDebug.record(Yn);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new GT());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new mf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = HT(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = YT(d, 250)),
            Es.hasAnimatedSinceResize &&
              ((Es.hasAnimatedSinceResize = !1), this.nodes.forEach(wp));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || wC,
                { onLayoutAnimationStart: C, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !_v(this.targetLayout, y) || g,
                m = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const S = { ...uf(v, "layout"), onPlay: C, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                d || wp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Nn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(gC),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Nv(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(xp);
        return;
      }
      this.isUpdating || this.nodes.forEach(dC),
        (this.isUpdating = !1),
        this.nodes.forEach(hC),
        this.nodes.forEach(aC),
        this.nodes.forEach(lC),
        this.clearAllSnapshots();
      const a = Wt.now();
      (Be.delta = an(0, 1e3 / 60, a - Be.timestamp)),
        (Be.timestamp = a),
        (Be.isProcessing = !0),
        gl.update.process(Be),
        gl.preRender.process(Be),
        gl.render.process(Be),
        (Be.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Jc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(fC), this.sharedNodes.forEach(yC);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        me.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      me.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Le()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Mv(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Gn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        SC(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return Le();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(EC)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Fr(l.x, c.offset.x), Fr(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = Le();
      if (
        (wt(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && wt(l, s), Fr(l.x, f.offset.x), Fr(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = Le();
      wt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          zr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Gn(c.latestValues) && zr(l, c.latestValues);
      }
      return Gn(this.latestValues) && zr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = Le();
      wt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Gn(u.latestValues)) continue;
        Fu(u.latestValues) && u.updateSnapshot();
        const c = Le(),
          f = u.measurePageBox();
        wt(c, f),
          dp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Gn(this.latestValues) && dp(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Be.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Be.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Le()),
              (this.relativeTargetOrigin = Le()),
              Ki(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              wt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Le()), (this.targetWithTransforms = Le())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                CT(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : wt(this.target, this.layout.layoutBox),
                Tv(this.target, this.targetDelta))
              : wt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Le()),
                (this.relativeTargetOrigin = Le()),
                Ki(this.relativeTargetOrigin, this.target, g.target),
                wt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ai && Yn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Fu(this.parent.latestValues) ||
          Pv(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Be.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      wt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        g = this.treeScale.y;
      jT(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Le()));
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (up(this.prevProjectionDelta.x, this.projectionDelta.x),
          up(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Hi(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== g ||
          !yp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !yp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        Ai && Yn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Ir()),
        (this.projectionDelta = Ir()),
        (this.projectionDeltaWithTransform = Ir());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = Ir();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = Le(),
        g = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = g !== y,
        C = this.getStack(),
        p = !C || C.members.length <= 1,
        h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(xC));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (S) => {
        const R = S / 1e3;
        Sp(f.x, s.x, R),
          Sp(f.y, s.y, R),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ki(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            vC(this.relativeTarget, this.relativeTargetOrigin, d, R),
            m && nC(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = Le()),
            wt(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), XT(c, u, this.latestValues, R, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = R);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Nn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = me.update(() => {
          (Es.hasAnimatedSinceResize = !0),
            (this.currentAnimation = WT(0, vp, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(vp),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          jv(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Le();
          const f = yt(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = yt(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        wt(a, l),
          zr(a, c),
          Hi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new rC()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Cl("z", s, u, this.animationValues);
      for (let c = 0; c < Tl.length; c++)
        Cl(`rotate${Tl[c]}`, s, u, this.animationValues),
          Cl(`skew${Tl[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return oC;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = ws(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = ws(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Gn(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = iC(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in na) {
        if (d[v] === void 0) continue;
        const { correct: C, applyTo: p } = na[v],
          h = u.transform === "none" ? d[v] : C(d[v], f);
        if (p) {
          const m = p.length;
          for (let S = 0; S < m; S++) u[p[S]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? ws(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(xp),
        this.root.sharedNodes.clear();
    }
  };
}
function aC(e) {
  e.updateLayout();
}
function lC(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? St((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = yt(d);
          (d.min = r[f].min), (d.max = d.min + g);
        })
      : jv(o, n.layoutBox, r) &&
        St((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = yt(r[f]);
          (d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const a = Ir();
    Hi(a, r, n.layoutBox);
    const l = Ir();
    s ? Hi(l, e.applyTransform(i, !0), n.measuredBox) : Hi(l, r, n.layoutBox);
    const u = !Mv(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = Le();
          Ki(y, n.layoutBox, d.layoutBox);
          const v = Le();
          Ki(v, r, g.layoutBox),
            _v(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function uC(e) {
  Ai && Yn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function cC(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function fC(e) {
  e.clearSnapshot();
}
function xp(e) {
  e.clearMeasurements();
}
function dC(e) {
  e.isLayoutDirty = !1;
}
function hC(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function wp(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function pC(e) {
  e.resolveTargetDelta();
}
function mC(e) {
  e.calcProjection();
}
function gC(e) {
  e.resetSkewAndRotation();
}
function yC(e) {
  e.removeLeadSnapshot();
}
function Sp(e, t, n) {
  (e.translate = Se(t.translate, 0, n)),
    (e.scale = Se(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Ep(e, t, n, r) {
  (e.min = Se(t.min, n.min, r)), (e.max = Se(t.max, n.max, r));
}
function vC(e, t, n, r) {
  Ep(e.x, t.x, n.x, r), Ep(e.y, t.y, n.y, r);
}
function xC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const wC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Pp = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Tp = Pp("applewebkit/") && !Pp("chrome/") ? Math.round : mt;
function Cp(e) {
  (e.min = Tp(e.min)), (e.max = Tp(e.max));
}
function SC(e) {
  Cp(e.x), Cp(e.y);
}
function jv(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !TT(gp(t), gp(n), 0.2))
  );
}
function EC(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const PC = Av({
    attachResizeListener: (e, t) => yo(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  kl = { current: void 0 },
  Ov = Av({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!kl.current) {
        const e = new PC({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (kl.current = e);
      }
      return kl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  TC = {
    pan: { Feature: BT },
    drag: { Feature: zT, ProjectionNode: Ov, MeasureLayout: Rv },
  };
function kp(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = r[i];
  o && me.postRender(() => o(t, _o(t)));
}
class CC extends Bn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = CE(
        t,
        (n) => (kp(this.node, n, "Start"), (r) => kp(this.node, r, "End"))
      ));
  }
  unmount() {}
}
class kC extends Bn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Mo(
      yo(this.node.current, "focus", () => this.onFocus()),
      yo(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Rp(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = r[i];
  o && me.postRender(() => o(t, _o(t)));
}
class RC extends Bn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = LE(
        t,
        (n) => (
          Rp(this.node, n, "Start"),
          (r, { success: i }) => Rp(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Bu = new WeakMap(),
  Rl = new WeakMap(),
  DC = (e) => {
    const t = Bu.get(e.target);
    t && t(e);
  },
  LC = (e) => {
    e.forEach(DC);
  };
function MC({ root: e, ...t }) {
  const n = e || document;
  Rl.has(n) || Rl.set(n, {});
  const r = Rl.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(LC, { root: e, ...t })), r[i];
}
function _C(e, t, n) {
  const r = MC(t);
  return (
    Bu.set(e, n),
    r.observe(e),
    () => {
      Bu.delete(e), r.unobserve(e);
    }
  );
}
const NC = { some: 0, all: 1 };
class AC extends Bn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : NC[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return _C(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(jC(t, n)) && this.startObserver();
  }
  unmount() {}
}
function jC({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const OC = {
    inView: { Feature: AC },
    tap: { Feature: RC },
    focus: { Feature: kC },
    hover: { Feature: CC },
  },
  VC = { layout: { ProjectionNode: Ov, MeasureLayout: Rv } },
  Uu = { current: null },
  Vv = { current: !1 };
function IC() {
  if (((Vv.current = !0), !!Gc))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Uu.current = e.matches);
      e.addListener(t), t();
    } else Uu.current = !1;
}
const FC = [...av, Ke, An],
  zC = (e) => FC.find(sv(e)),
  Dp = new WeakMap();
function BC(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (Ye(i)) e.addValue(r, i);
    else if (Ye(o)) e.addValue(r, mo(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, mo(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Lp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class UC {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Sf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const g = Wt.now();
        this.renderScheduledAt < g &&
          ((this.renderScheduledAt = g), me.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u, onUpdate: c } = s;
    (this.onUpdate = c),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = _a(n)),
      (this.isVariantNode = my(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const g in d) {
      const y = d[g];
      l[g] !== void 0 && Ye(y) && y.set(l[g], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Dp.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Vv.current || IC(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Uu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Dp.delete(this.current),
      this.projection && this.projection.unmount(),
      Nn(this.notifyUpdate),
      Nn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = mr.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && me.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in ri) {
      const n = ri[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Le();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Lp.length; r++) {
      const i = Lp[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = BC(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = mo(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (iv(i) || Qy(i))
          ? (i = parseFloat(i))
          : !zC(i) && An.test(n) && (i = tv(t, n)),
        this.setBaseTarget(t, Ye(i) ? i.get() : i)),
      Ye(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = ef(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Ye(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new mf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Iv extends UC {
  constructor() {
    super(...arguments), (this.KeyframeResolver = lv);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ye(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function bC(e) {
  return window.getComputedStyle(e);
}
class $C extends Iv {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Ty);
  }
  readValueFromInstance(t, n) {
    if (mr.has(n)) {
      const r = wf(n);
      return (r && r.default) || 0;
    } else {
      const r = bC(t),
        i = (Sy(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Cv(t, n);
  }
  build(t, n, r) {
    rf(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return lf(t, n, r);
  }
}
class WC extends Iv {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Le);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (mr.has(n)) {
      const r = wf(n);
      return (r && r.default) || 0;
    }
    return (n = Cy.has(n) ? n : Zc(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Dy(t, n, r);
  }
  build(t, n, r) {
    of(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    ky(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = af(t.tagName)), super.mount(t);
  }
}
const HC = (e, t) =>
    qc(e) ? new WC(t) : new $C(t, { allowProjection: e !== E.Fragment }),
  KC = vE({ ...mT, ...OC, ...TC, ...VC }, HC),
  Kr = AS(KC),
  GC = () => {
    const [e, t] = E.useState(!1),
      n = "Expenseease".split("");
    return k.jsx(k.Fragment, {
      children: k.jsx("header", {
        className: " inset-x-0 top-0 z-10 w-full bg-light",
        children: k.jsx("div", {
          className: "px-4 mx-auto sm:px-6 lg:px-8 ",
          children: k.jsxs("div", {
            className: "flex items-center  justify-around h-16 lg:h-20 gap-10",
            children: [
              k.jsx("div", {
                className: "   text-3xl font-bold tracking-wide",
                children: k.jsx(qs, {
                  to: "/",
                  className:
                    "flex hover:scale-105 transition-all duration-200 ease-linear",
                  children: n.map((r, i) =>
                    k.jsx(
                      Kr.div,
                      {
                        initial: { y: -200, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { duration: i / 9, type: "spring" },
                        children: r,
                      },
                      i
                    )
                  ),
                }),
              }),
              k.jsxs("div", {
                className: "flex   justify-center items-center gap-10",
                children: [
                  k.jsx("div", {
                    onClick: () => t(!e),
                    className:
                      " lg:flex    lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10",
                    children: e
                      ? k.jsx(ea, {
                          to: "/",
                          children: k.jsx(ir, { value: "home" }),
                        })
                      : k.jsx(ea, {
                          to: "/dashboard",
                          children: k.jsx(ir, { value: "dashboard" }),
                        }),
                  }),
                  k.jsxs("div", {
                    className: "hidden    md:inline-block",
                    children: [k.jsx(ir, { value: "Try for free" }), " "],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  },
  Fv = E.createContext(),
  zv = () => E.useContext(Fv),
  YC = ({ children: e }) => {
    const [t, n] = E.useState("");
    return k.jsx(Fv.Provider, { value: { user: t, setUser: n }, children: e });
  },
  Bv = E.createContext(),
  Cf = () => E.useContext(Bv),
  QC = ({ children: e }) => {
    const [t, n] = E.useState([]);
    return k.jsx(Bv.Provider, {
      value: { expenceData: t, setExpenceData: n },
      children: e,
    });
  },
  XC = () => (
    (document.title = "Expenseease"),
    k.jsx(k.Fragment, {
      children: k.jsx("main", {
        className: "",
        children: k.jsx(QC, {
          children: k.jsxs(YC, {
            children: [k.jsx(GC, {}), k.jsx(qw, {}), " "],
          }),
        }),
      }),
    })
  );
var Uv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Mp = ee.createContext && ee.createContext(Uv),
  ZC = ["attr", "size", "title"];
function JC(e, t) {
  if (e == null) return {};
  var n = qC(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function qC(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function la() {
  return (
    (la = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    la.apply(this, arguments)
  );
}
function _p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ua(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _p(Object(n), !0).forEach(function (r) {
          ek(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : _p(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ek(e, t, n) {
  return (
    (t = tk(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function tk(e) {
  var t = nk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nk(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bv(e) {
  return (
    e &&
    e.map((t, n) =>
      ee.createElement(t.tag, ua({ key: n }, t.attr), bv(t.child))
    )
  );
}
function $v(e) {
  return (t) =>
    ee.createElement(rk, la({ attr: ua({}, e.attr) }, t), bv(e.child));
}
function rk(e) {
  var t = (n) => {
    var { attr: r, size: i, title: o } = e,
      s = JC(e, ZC),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      ee.createElement(
        "svg",
        la(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: l,
            style: ua(ua({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && ee.createElement("title", null, o),
        e.children
      )
    );
  };
  return Mp !== void 0
    ? ee.createElement(Mp.Consumer, null, (n) => t(n))
    : t(Uv);
}
function ik(e) {
  return $v({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
        },
        child: [],
      },
    ],
  })(e);
}
const ok = () => {
  const e = "An easy way to keep track all expenses.".split(""),
    t = E.useRef(null),
    { setUser: n } = zv(),
    r = E.useCallback((i) => {
      i.preventDefault(), t.current.value !== "" && n(t.current.value);
    });
  return k.jsx(k.Fragment, {
    children: k.jsxs("main", {
      className: "bg-light lg:h-lvh w-full",
      children: [
        k.jsxs("div", {
          children: [
            k.jsxs("section", {
              className: "overflow-hidden ",
              children: [
                k.jsxs("div", {
                  className:
                    "flex flex-col lg:flex-row lg:items-stretch min-h-[750px] lg:min-h-[500px]  xl:min-h-[700px]",
                  children: [
                    k.jsx("div", {
                      className:
                        "flex items-center justify-center w-full lg:order-2 lg:w-7/12",
                      children: k.jsx("div", {
                        className:
                          "h-full px-4 pt-24 pb-16 sm:px-6  2xl:pr-32 lg:pt-40 lg:pb-14",
                        children: k.jsxs("div", {
                          className:
                            "flex flex-col justify-between flex-1 h-full",
                          children: [
                            k.jsxs("div", {
                              children: [
                                k.jsx("h1", {
                                  className:
                                    "text-4xl lg:text-3xl font-bold text-black sm:text-6xl xl:text-7xl",
                                  children: e.map((i, o) =>
                                    k.jsx(
                                      Kr.span,
                                      {
                                        className:
                                          "text-transparent bg-clip-text bg-purple-gradient",
                                        initial: { opacity: 0 },
                                        animate: { opacity: 1 },
                                        transition: {
                                          duration: 0.25,
                                          delay: o / 20,
                                        },
                                        children: i && i.length ? i : null,
                                      },
                                      o
                                    )
                                  ),
                                }),
                                k.jsx(Kr.p, {
                                  initial: { opacity: 0, x: 500 },
                                  animate: { opacity: 1, x: 0 },
                                  transition: { duration: 0.25, delay: 0.5 },
                                  className:
                                    "mt-6 font-semibold text-base text-black sm:text-xl lg ",
                                  children:
                                    "Our Expenseease helps you to predict your expenses based on your previous activity and shares how you should manage your money.",
                                }),
                                k.jsx("form", {
                                  className: "mt-6  ",
                                  onSubmit: r,
                                  children: k.jsxs("div", {
                                    className: "relative w-fit  mt-6",
                                    children: [
                                      k.jsx("input", {
                                        ref: t,
                                        type: "text",
                                        placeholder: "Your name",
                                        className:
                                          "block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-700 focus:border-neutral-950 focus:outline-none ",
                                      }),
                                      k.jsx("button", {
                                        className:
                                          "absolute inset-y-1 right-1 flex justify-center items-center",
                                        children: k.jsx(ir, {
                                          value: "submit",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                k.jsx("div", {
                                  className: "mt-5 w-fit",
                                  children: k.jsx(ea, {
                                    to: "/dashboard",
                                    children: k.jsx(ir, {
                                      value: "Get started for free",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            k.jsx("div", {
                              className:
                                "mt-8 border-t-2 border-black sm:mt-14",
                              children: k.jsxs("div", {
                                className:
                                  "pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14",
                                children: [
                                  k.jsxs("p", {
                                    className:
                                      "text-lg flex hover:underline  justify-center items-center gap-1 group font-semibold text-black",
                                    children: [
                                      "App available on",
                                      " ",
                                      k.jsxs("span", {
                                        className:
                                          "group-hover:translate-x-3 transition-all duration-150 ease-linear ",
                                        children: [" ", k.jsx(ik, {}), " "],
                                      }),
                                    ],
                                  }),
                                  k.jsxs("div", {
                                    className:
                                      "flex items-center mt-5 space-x-5 sm:mt-0",
                                    children: [
                                      k.jsx(qs, {
                                        className:
                                          "block transition-all duration-200 hover:opacity-80 focus:opacity-80",
                                        role: "button",
                                        children: k.jsx("img", {
                                          className:
                                            "w-auto rounded h-14 sm:h-16",
                                          src: "https://www.tailwindtap.com/assets/components/hero/expense-manager/app-store-button.png",
                                          alt: "",
                                        }),
                                      }),
                                      k.jsx(qs, {
                                        className:
                                          "block transition-all duration-200 hover:opacity-80 focus:opacity-80",
                                        role: "button",
                                        children: k.jsx("img", {
                                          className:
                                            "w-auto rounded h-14 sm:h-16",
                                          src: "https://www.tailwindtap.com/assets/components/hero/expense-manager/play-store-button.png",
                                          alt: "",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    k.jsx("div", {
                      className:
                        "relative w-full overflow-hidden lg:w-[70%] xl:w-8/12 lg:order-1",
                      children: k.jsx("div", {
                        className:
                          "lg:absolute lg:bottom-0 lg:left-0 w-full h-full flex justify-center items-center",
                        children: k.jsx("img", {
                          className:
                            "w-full max-w-none lg:max-w-[80%] xl:max-w-[80%] drop-shadow-lg object-cover",
                          src: "/src/assets/heroimage.png",
                          alt: "",
                        }),
                      }),
                    }),
                  ],
                }),
                " ",
              ],
            }),
            " ",
          ],
        }),
        " ",
      ],
    }),
  });
};
function Wv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Wv(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Sn() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Wv(e)) && (r && (r += " "), (r += t));
  return r;
}
const vo = (e) => typeof e == "number" && !isNaN(e),
  sr = (e) => typeof e == "string",
  ht = (e) => typeof e == "function",
  Ps = (e) => (sr(e) || ht(e) ? e : null),
  bu = (e) => E.isValidElement(e) || sr(e) || ht(e) || vo(e);
function sk(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: i } = e;
  requestAnimationFrame(() => {
    (i.minHeight = "initial"),
      (i.height = r + "px"),
      (i.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (i.height = "0"), (i.padding = "0"), (i.margin = "0"), setTimeout(t, n);
      });
  });
}
function ja(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: i = !0,
    collapseDuration: o = 300,
  } = e;
  return function (s) {
    let {
      children: a,
      position: l,
      preventExitTransition: u,
      done: c,
      nodeRef: f,
      isIn: d,
      playToast: g,
    } = s;
    const y = r ? `${t}--${l}` : t,
      v = r ? `${n}--${l}` : n,
      C = E.useRef(0);
    return (
      E.useLayoutEffect(() => {
        const p = f.current,
          h = y.split(" "),
          m = (S) => {
            S.target === f.current &&
              (g(),
              p.removeEventListener("animationend", m),
              p.removeEventListener("animationcancel", m),
              C.current === 0 &&
                S.type !== "animationcancel" &&
                p.classList.remove(...h));
          };
        p.classList.add(...h),
          p.addEventListener("animationend", m),
          p.addEventListener("animationcancel", m);
      }, []),
      E.useEffect(() => {
        const p = f.current,
          h = () => {
            p.removeEventListener("animationend", h), i ? sk(p, c, o) : c();
          };
        d ||
          (u
            ? h()
            : ((C.current = 1),
              (p.className += ` ${v}`),
              p.addEventListener("animationend", h)));
      }, [d]),
      ee.createElement(ee.Fragment, null, a)
    );
  };
}
function Np(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const qe = new Map();
let xo = [];
const $u = new Set(),
  ak = (e) => $u.forEach((t) => t(e)),
  Hv = () => qe.size > 0;
function Kv(e, t) {
  var n;
  if (t) return !((n = qe.get(t)) == null || !n.isToastActive(e));
  let r = !1;
  return (
    qe.forEach((i) => {
      i.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function Gv(e, t) {
  bu(e) &&
    (Hv() || xo.push({ content: e, options: t }),
    qe.forEach((n) => {
      n.buildToast(e, t);
    }));
}
function Ap(e, t) {
  qe.forEach((n) => {
    t != null && t != null && t.containerId
      ? (t == null ? void 0 : t.containerId) === n.id &&
        n.toggle(e, t == null ? void 0 : t.id)
      : n.toggle(e, t == null ? void 0 : t.id);
  });
}
function lk(e) {
  const {
    subscribe: t,
    getSnapshot: n,
    setProps: r,
  } = E.useRef(
    (function (o) {
      const s = o.containerId || 1;
      return {
        subscribe(a) {
          const l = (function (c, f, d) {
            let g = 1,
              y = 0,
              v = [],
              C = [],
              p = [],
              h = f;
            const m = new Map(),
              S = new Set(),
              R = () => {
                (p = Array.from(m.values())), S.forEach((P) => P());
              },
              x = (P) => {
                (C = P == null ? [] : C.filter((_) => _ !== P)), R();
              },
              L = (P) => {
                const {
                    toastId: _,
                    onOpen: A,
                    updateId: K,
                    children: q,
                  } = P.props,
                  ae = K == null;
                P.staleId && m.delete(P.staleId),
                  m.set(_, P),
                  (C = [...C, P.props.toastId].filter(
                    (re) => re !== P.staleId
                  )),
                  R(),
                  d(Np(P, ae ? "added" : "updated")),
                  ae && ht(A) && A(E.isValidElement(q) && q.props);
              };
            return {
              id: c,
              props: h,
              observe: (P) => (S.add(P), () => S.delete(P)),
              toggle: (P, _) => {
                m.forEach((A) => {
                  (_ != null && _ !== A.props.toastId) ||
                    (ht(A.toggle) && A.toggle(P));
                });
              },
              removeToast: x,
              toasts: m,
              clearQueue: () => {
                (y -= v.length), (v = []);
              },
              buildToast: (P, _) => {
                if (
                  ((Z) => {
                    let { containerId: ve, toastId: oe, updateId: Te } = Z;
                    const xe = ve ? ve !== c : c !== 1,
                      Xe = m.has(oe) && Te == null;
                    return xe || Xe;
                  })(_)
                )
                  return;
                const {
                    toastId: A,
                    updateId: K,
                    data: q,
                    staleId: ae,
                    delay: re,
                  } = _,
                  $e = () => {
                    x(A);
                  },
                  rt = K == null;
                rt && y++;
                const H = {
                  ...h,
                  style: h.toastStyle,
                  key: g++,
                  ...Object.fromEntries(
                    Object.entries(_).filter((Z) => {
                      let [ve, oe] = Z;
                      return oe != null;
                    })
                  ),
                  toastId: A,
                  updateId: K,
                  data: q,
                  closeToast: $e,
                  isIn: !1,
                  className: Ps(_.className || h.toastClassName),
                  bodyClassName: Ps(_.bodyClassName || h.bodyClassName),
                  progressClassName: Ps(
                    _.progressClassName || h.progressClassName
                  ),
                  autoClose:
                    !_.isLoading &&
                    ((j = _.autoClose),
                    (B = h.autoClose),
                    j === !1 || (vo(j) && j > 0) ? j : B),
                  deleteToast() {
                    const Z = m.get(A),
                      { onClose: ve, children: oe } = Z.props;
                    ht(ve) && ve(E.isValidElement(oe) && oe.props),
                      d(Np(Z, "removed")),
                      m.delete(A),
                      y--,
                      y < 0 && (y = 0),
                      v.length > 0 ? L(v.shift()) : R();
                  },
                };
                var j, B;
                (H.closeButton = h.closeButton),
                  _.closeButton === !1 || bu(_.closeButton)
                    ? (H.closeButton = _.closeButton)
                    : _.closeButton === !0 &&
                      (H.closeButton = !bu(h.closeButton) || h.closeButton);
                let U = P;
                E.isValidElement(P) && !sr(P.type)
                  ? (U = E.cloneElement(P, {
                      closeToast: $e,
                      toastProps: H,
                      data: q,
                    }))
                  : ht(P) &&
                    (U = P({ closeToast: $e, toastProps: H, data: q }));
                const Y = { content: U, props: H, staleId: ae };
                h.limit && h.limit > 0 && y > h.limit && rt
                  ? v.push(Y)
                  : vo(re)
                  ? setTimeout(() => {
                      L(Y);
                    }, re)
                  : L(Y);
              },
              setProps(P) {
                h = P;
              },
              setToggle: (P, _) => {
                m.get(P).toggle = _;
              },
              isToastActive: (P) => C.some((_) => _ === P),
              getSnapshot: () => p,
            };
          })(s, o, ak);
          qe.set(s, l);
          const u = l.observe(a);
          return (
            xo.forEach((c) => Gv(c.content, c.options)),
            (xo = []),
            () => {
              u(), qe.delete(s);
            }
          );
        },
        setProps(a) {
          var l;
          (l = qe.get(s)) == null || l.setProps(a);
        },
        getSnapshot() {
          var a;
          return (a = qe.get(s)) == null ? void 0 : a.getSnapshot();
        },
      };
    })(e)
  ).current;
  r(e);
  const i = E.useSyncExternalStore(t, n, n);
  return {
    getToastToRender: function (o) {
      if (!i) return [];
      const s = new Map();
      return (
        e.newestOnTop && i.reverse(),
        i.forEach((a) => {
          const { position: l } = a.props;
          s.has(l) || s.set(l, []), s.get(l).push(a);
        }),
        Array.from(s, (a) => o(a[0], a[1]))
      );
    },
    isToastActive: Kv,
    count: i == null ? void 0 : i.length,
  };
}
function uk(e) {
  const [t, n] = E.useState(!1),
    [r, i] = E.useState(!1),
    o = E.useRef(null),
    s = E.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: a,
      pauseOnHover: l,
      closeToast: u,
      onClick: c,
      closeOnClick: f,
    } = e;
  var d, g;
  function y() {
    n(!0);
  }
  function v() {
    n(!1);
  }
  function C(m) {
    const S = o.current;
    s.canDrag &&
      S &&
      ((s.didMove = !0),
      t && v(),
      (s.delta =
        e.draggableDirection === "x"
          ? m.clientX - s.start
          : m.clientY - s.start),
      s.start !== m.clientX && (s.canCloseOnClick = !1),
      (S.style.transform = `translate3d(${
        e.draggableDirection === "x"
          ? `${s.delta}px, var(--y)`
          : `0, calc(${s.delta}px + var(--y))`
      },0)`),
      (S.style.opacity = "" + (1 - Math.abs(s.delta / s.removalDistance))));
  }
  function p() {
    document.removeEventListener("pointermove", C),
      document.removeEventListener("pointerup", p);
    const m = o.current;
    if (s.canDrag && s.didMove && m) {
      if (((s.canDrag = !1), Math.abs(s.delta) > s.removalDistance))
        return i(!0), e.closeToast(), void e.collapseAll();
      (m.style.transition = "transform 0.2s, opacity 0.2s"),
        m.style.removeProperty("transform"),
        m.style.removeProperty("opacity");
    }
  }
  (g = qe.get(
    (d = { id: e.toastId, containerId: e.containerId, fn: n }).containerId || 1
  )) == null || g.setToggle(d.id, d.fn),
    E.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          document.hasFocus() || v(),
          window.addEventListener("focus", y),
          window.addEventListener("blur", v),
          () => {
            window.removeEventListener("focus", y),
              window.removeEventListener("blur", v);
          }
        );
    }, [e.pauseOnFocusLoss]);
  const h = {
    onPointerDown: function (m) {
      if (e.draggable === !0 || e.draggable === m.pointerType) {
        (s.didMove = !1),
          document.addEventListener("pointermove", C),
          document.addEventListener("pointerup", p);
        const S = o.current;
        (s.canCloseOnClick = !0),
          (s.canDrag = !0),
          (S.style.transition = "none"),
          e.draggableDirection === "x"
            ? ((s.start = m.clientX),
              (s.removalDistance = S.offsetWidth * (e.draggablePercent / 100)))
            : ((s.start = m.clientY),
              (s.removalDistance =
                (S.offsetHeight *
                  (e.draggablePercent === 80
                    ? 1.5 * e.draggablePercent
                    : e.draggablePercent)) /
                100));
      }
    },
    onPointerUp: function (m) {
      const {
        top: S,
        bottom: R,
        left: x,
        right: L,
      } = o.current.getBoundingClientRect();
      m.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      m.clientX >= x &&
      m.clientX <= L &&
      m.clientY >= S &&
      m.clientY <= R
        ? v()
        : y();
    },
  };
  return (
    a && l && ((h.onMouseEnter = v), e.stacked || (h.onMouseLeave = y)),
    f &&
      (h.onClick = (m) => {
        c && c(m), s.canCloseOnClick && u();
      }),
    {
      playToast: y,
      pauseToast: v,
      isRunning: t,
      preventExitTransition: r,
      toastRef: o,
      eventHandlers: h,
    }
  );
}
function ck(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: i = "default",
    hide: o,
    className: s,
    style: a,
    controlledProgress: l,
    progress: u,
    rtl: c,
    isIn: f,
    theme: d,
  } = e;
  const g = o || (l && u === 0),
    y = {
      ...a,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
    };
  l && (y.transform = `scaleX(${u})`);
  const v = Sn(
      "Toastify__progress-bar",
      l
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${d}`,
      `Toastify__progress-bar--${i}`,
      { "Toastify__progress-bar--rtl": c }
    ),
    C = ht(s) ? s({ rtl: c, type: i, defaultClassName: v }) : Sn(v, s),
    p = {
      [l && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        l && u < 1
          ? null
          : () => {
              f && r();
            },
    };
  return ee.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": g },
    ee.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${i}`,
    }),
    ee.createElement("div", {
      role: "progressbar",
      "aria-hidden": g ? "true" : "false",
      "aria-label": "notification timer",
      className: C,
      style: y,
      ...p,
    })
  );
}
let fk = 1;
const Yv = () => "" + fk++;
function dk(e) {
  return e && (sr(e.toastId) || vo(e.toastId)) ? e.toastId : Yv();
}
function Gi(e, t) {
  return Gv(e, t), t.toastId;
}
function ca(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: dk(t) };
}
function os(e) {
  return (t, n) => Gi(t, ca(e, n));
}
function fe(e, t) {
  return Gi(e, ca("default", t));
}
(fe.loading = (e, t) =>
  Gi(
    e,
    ca("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (fe.promise = function (e, t, n) {
    let r,
      { pending: i, error: o, success: s } = t;
    i && (r = sr(i) ? fe.loading(i, n) : fe.loading(i.render, { ...n, ...i }));
    const a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      l = (c, f, d) => {
        if (f == null) return void fe.dismiss(r);
        const g = { type: c, ...a, ...n, data: d },
          y = sr(f) ? { render: f } : f;
        return (
          r ? fe.update(r, { ...g, ...y }) : fe(y.render, { ...g, ...y }), d
        );
      },
      u = ht(e) ? e() : e;
    return u.then((c) => l("success", s, c)).catch((c) => l("error", o, c)), u;
  }),
  (fe.success = os("success")),
  (fe.info = os("info")),
  (fe.error = os("error")),
  (fe.warning = os("warning")),
  (fe.warn = fe.warning),
  (fe.dark = (e, t) => Gi(e, ca("default", { theme: "dark", ...t }))),
  (fe.dismiss = function (e) {
    (function (t) {
      var n;
      if (Hv()) {
        if (t == null || sr((n = t)) || vo(n))
          qe.forEach((r) => {
            r.removeToast(t);
          });
        else if (t && ("containerId" in t || "id" in t)) {
          const r = qe.get(t.containerId);
          r
            ? r.removeToast(t.id)
            : qe.forEach((i) => {
                i.removeToast(t.id);
              });
        }
      } else xo = xo.filter((r) => t != null && r.options.toastId !== t);
    })(e);
  }),
  (fe.clearWaitingQueue = function (e) {
    e === void 0 && (e = {}),
      qe.forEach((t) => {
        !t.props.limit ||
          (e.containerId && t.id !== e.containerId) ||
          t.clearQueue();
      });
  }),
  (fe.isActive = Kv),
  (fe.update = function (e, t) {
    t === void 0 && (t = {});
    const n = ((r, i) => {
      var o;
      let { containerId: s } = i;
      return (o = qe.get(s || 1)) == null ? void 0 : o.toasts.get(r);
    })(e, t);
    if (n) {
      const { props: r, content: i } = n,
        o = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: Yv() };
      o.toastId !== e && (o.staleId = e);
      const s = o.render || i;
      delete o.render, Gi(s, o);
    }
  }),
  (fe.done = (e) => {
    fe.update(e, { progress: 1 });
  }),
  (fe.onChange = function (e) {
    return (
      $u.add(e),
      () => {
        $u.delete(e);
      }
    );
  }),
  (fe.play = (e) => Ap(!0, e)),
  (fe.pause = (e) => Ap(!1, e));
const hk = typeof window < "u" ? E.useLayoutEffect : E.useEffect,
  ss = (e) => {
    let { theme: t, type: n, isLoading: r, ...i } = e;
    return ee.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...i,
    });
  },
  Dl = {
    info: function (e) {
      return ee.createElement(
        ss,
        { ...e },
        ee.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return ee.createElement(
        ss,
        { ...e },
        ee.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return ee.createElement(
        ss,
        { ...e },
        ee.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return ee.createElement(
        ss,
        { ...e },
        ee.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return ee.createElement("div", { className: "Toastify__spinner" });
    },
  },
  pk = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: i,
        playToast: o,
      } = uk(e),
      {
        closeButton: s,
        children: a,
        autoClose: l,
        onClick: u,
        type: c,
        hideProgressBar: f,
        closeToast: d,
        transition: g,
        position: y,
        className: v,
        style: C,
        bodyClassName: p,
        bodyStyle: h,
        progressClassName: m,
        progressStyle: S,
        updateId: R,
        role: x,
        progress: L,
        rtl: P,
        toastId: _,
        deleteToast: A,
        isIn: K,
        isLoading: q,
        closeOnClick: ae,
        theme: re,
      } = e,
      $e = Sn(
        "Toastify__toast",
        `Toastify__toast-theme--${re}`,
        `Toastify__toast--${c}`,
        { "Toastify__toast--rtl": P },
        { "Toastify__toast--close-on-click": ae }
      ),
      rt = ht(v)
        ? v({ rtl: P, position: y, type: c, defaultClassName: $e })
        : Sn($e, v),
      H = (function (Y) {
        let { theme: Z, type: ve, isLoading: oe, icon: Te } = Y,
          xe = null;
        const Xe = { theme: Z, type: ve };
        return (
          Te === !1 ||
            (ht(Te)
              ? (xe = Te({ ...Xe, isLoading: oe }))
              : E.isValidElement(Te)
              ? (xe = E.cloneElement(Te, Xe))
              : oe
              ? (xe = Dl.spinner())
              : ((Va) => Va in Dl)(ve) && (xe = Dl[ve](Xe))),
          xe
        );
      })(e),
      j = !!L || !l,
      B = { closeToast: d, type: c, theme: re };
    let U = null;
    return (
      s === !1 ||
        (U = ht(s)
          ? s(B)
          : E.isValidElement(s)
          ? E.cloneElement(s, B)
          : (function (Y) {
              let { closeToast: Z, theme: ve, ariaLabel: oe = "close" } = Y;
              return ee.createElement(
                "button",
                {
                  className: `Toastify__close-button Toastify__close-button--${ve}`,
                  type: "button",
                  onClick: (Te) => {
                    Te.stopPropagation(), Z(Te);
                  },
                  "aria-label": oe,
                },
                ee.createElement(
                  "svg",
                  { "aria-hidden": "true", viewBox: "0 0 14 16" },
                  ee.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                  })
                )
              );
            })(B)),
      ee.createElement(
        g,
        {
          isIn: K,
          done: A,
          position: y,
          preventExitTransition: n,
          nodeRef: r,
          playToast: o,
        },
        ee.createElement(
          "div",
          {
            id: _,
            onClick: u,
            "data-in": K,
            className: rt,
            ...i,
            style: C,
            ref: r,
          },
          ee.createElement(
            "div",
            {
              ...(K && { role: x }),
              className: ht(p) ? p({ type: c }) : Sn("Toastify__toast-body", p),
              style: h,
            },
            H != null &&
              ee.createElement(
                "div",
                {
                  className: Sn("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !q,
                  }),
                },
                H
              ),
            ee.createElement("div", null, a)
          ),
          U,
          ee.createElement(ck, {
            ...(R && !j ? { key: `pb-${R}` } : {}),
            rtl: P,
            theme: re,
            delay: l,
            isRunning: t,
            isIn: K,
            closeToast: d,
            hide: f,
            type: c,
            style: S,
            className: m,
            controlledProgress: j,
            progress: L || 0,
          })
        )
      )
    );
  },
  Oa = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  mk = ja(Oa("bounce", !0));
ja(Oa("slide", !0));
ja(Oa("zoom"));
ja(Oa("flip"));
const gk = {
  position: "top-right",
  transition: mk,
  autoClose: 5e3,
  closeButton: !0,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  draggable: "touch",
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light",
};
function yk(e) {
  let t = { ...gk, ...e };
  const n = e.stacked,
    [r, i] = E.useState(!0),
    o = E.useRef(null),
    { getToastToRender: s, isToastActive: a, count: l } = lk(t),
    { className: u, style: c, rtl: f, containerId: d } = t;
  function g(v) {
    const C = Sn(
      "Toastify__toast-container",
      `Toastify__toast-container--${v}`,
      { "Toastify__toast-container--rtl": f }
    );
    return ht(u)
      ? u({ position: v, rtl: f, defaultClassName: C })
      : Sn(C, Ps(u));
  }
  function y() {
    n && (i(!0), fe.play());
  }
  return (
    hk(() => {
      if (n) {
        var v;
        const C = o.current.querySelectorAll('[data-in="true"]'),
          p = 12,
          h = (v = t.position) == null ? void 0 : v.includes("top");
        let m = 0,
          S = 0;
        Array.from(C)
          .reverse()
          .forEach((R, x) => {
            const L = R;
            L.classList.add("Toastify__toast--stacked"),
              x > 0 && (L.dataset.collapsed = `${r}`),
              L.dataset.pos || (L.dataset.pos = h ? "top" : "bot");
            const P = m * (r ? 0.2 : 1) + (r ? 0 : p * x);
            L.style.setProperty("--y", `${h ? P : -1 * P}px`),
              L.style.setProperty("--g", `${p}`),
              L.style.setProperty("--s", "" + (1 - (r ? S : 0))),
              (m += L.offsetHeight),
              (S += 0.025);
          });
      }
    }, [r, l, n]),
    ee.createElement(
      "div",
      {
        ref: o,
        className: "Toastify",
        id: d,
        onMouseEnter: () => {
          n && (i(!1), fe.pause());
        },
        onMouseLeave: y,
      },
      s((v, C) => {
        const p = C.length ? { ...c } : { ...c, pointerEvents: "none" };
        return ee.createElement(
          "div",
          { className: g(v), style: p, key: `container-${v}` },
          C.map((h) => {
            let { content: m, props: S } = h;
            return ee.createElement(
              pk,
              {
                ...S,
                stacked: n,
                collapseAll: y,
                isIn: a(S.toastId, S.containerId),
                style: S.style,
                key: `toast-${S.key}`,
              },
              m
            );
          })
        );
      })
    )
  );
}
const vk = E.memo(({ setAddIncone: e, adDates: t }) => {
    const { adDate: n, setAddDate: r } = t,
      i = E.useRef(null),
      o = E.useCallback((s) => {
        s.preventDefault(),
          e((l) => ({
            ...l,
            addIncome: l.addIncome + Number.parseInt(i.current.value),
            balance: l.balance + Number.parseInt(i.current.value),
          }));
        const a = new Date().toLocaleDateString();
        r(a), fe("your budget has been added ");
      });
    return k.jsx(k.Fragment, {
      children: k.jsxs("main", {
        className:
          " relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-full flex flex-col justify-center items-center  px-10 py-10 rounded-lg border-2  border-blue-900  ",
        children: [
          k.jsx(yk, {
            position: "top-left",
            autoClose: 2e3,
            hideProgressBar: !1,
            newestOnTop: !1,
            closeOnClick: !0,
            rtl: !1,
            pauseOnFocusLoss: !0,
            draggable: !0,
            pauseOnHover: !0,
            theme: "dark",
          }),
          k.jsxs("div", {
            className:
              "grid grid-cols-2 h-full justify-between items-center   py-5",
            children: [
              k.jsxs("p", {
                className: "font-semibold capitalize text-lg md:text-xl ",
                children: ["Add your budget", " "],
              }),
              k.jsxs("p", {
                className:
                  "font-semibold  flex justify-center items-center capitalize text-lg  ",
                children: [
                  "last added date :",
                  " ",
                  k.jsx("span", {
                    className: `${
                      n
                        ? "border px-2 py-1 rounded-xl bg-success "
                        : "text-base "
                    }`,
                    children: n ? `${n}` : "-",
                  }),
                ],
              }),
            ],
          }),
          k.jsxs("form", {
            onSubmit: o,
            className:
              "flex flex-col w-full justify-center items-center gap-5 ",
            children: [
              k.jsx("input", {
                required: !0,
                ref: i,
                type: "number",
                placeholder: "Enter Budget",
                className:
                  "rounded-md py-3 px-2 shadow-md border-none outline-none focus:outline-success focus:outline-2",
              }),
              k.jsx("button", {
                type: "submit",
                children: k.jsx(ir, { value: "Add Budget" }),
              }),
            ],
          }),
        ],
      }),
    });
  }),
  xk = ({ value: e }) =>
    k.jsx(k.Fragment, {
      children: k.jsx("p", {
        className:
          " capitalize  rounded-md lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold  text-dark bg-warning transition-all duration-200 active:scale-95 ",
        children: e,
      }),
    }),
  wk = E.memo(({ setAddexpenses: e, expDates: t }) => {
    const { expDate: n, setExpDate: r } = t,
      i = E.useRef(null),
      o = E.useRef(null),
      s = E.useCallback((a) => {
        if ((a.preventDefault(), i.current.value === null)) return;
        e((u) => ({
          ...u,
          addexpensesmoney:
            u.addexpensesmoney + Number.parseInt(i.current.value),
          balance: u.balance - Number.parseInt(i.current.value),
          addIncome: u.addIncome - Number.parseInt(i.current.value),
          title: o.current.value,
        }));
        const l = new Date().toLocaleDateString();
        r(l);
      });
    return k.jsx(k.Fragment, {
      children: k.jsxs("main", {
        className:
          "relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]  px-10 py-10 rounded-lg border-2  border-blue-900 ",
        children: [
          k.jsxs("div", {
            className: "grid grid-cols-2 justify-around w-full  py-5",
            children: [
              k.jsxs("p", {
                className: "font-semibold capitalize text-lg md:text-xl",
                children: ["Add new expense", " "],
              }),
              k.jsxs("p", {
                className:
                  "font-semibold capitalize text-lg flex  justify-normal items-center",
                children: [
                  "last expense date :",
                  " ",
                  k.jsx("span", {
                    className: `${
                      n
                        ? "border px-2 py-1 rounded-xl bg-warning "
                        : "text-base "
                    }`,
                    children: n ? `${n}` : "-",
                  }),
                ],
              }),
            ],
          }),
          k.jsxs("form", {
            onSubmit: s,
            className: "flex flex-col justify-center items-center gap-5",
            children: [
              k.jsxs("div", {
                className:
                  "flex flex-col justify-center md:flex-row  items-center gap-4",
                children: [
                  k.jsx("input", {
                    type: "number",
                    required: !0,
                    ref: i,
                    placeholder: "Add expenses money",
                    className:
                      "rounded-md py-3 px-2 shadow-md border-none outline-none focus:outline-warning focus:outline-2",
                  }),
                  k.jsx("input", {
                    type: "text",
                    required: !0,
                    ref: o,
                    placeholder: "Add title of expenses",
                    className:
                      "rounded-md py-3 px-2 shadow-md border-none outline-none focus:outline-warning focus:outline-2",
                  }),
                ],
              }),
              k.jsxs("button", {
                type: "submit",
                children: [" ", k.jsx(xk, { value: "Add Expense" })],
              }),
            ],
          }),
        ],
      }),
    });
  });
function Sk(e) {
  return $v({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
        },
        child: [],
      },
    ],
  })(e);
}
const Ek = ({ value: e, date: t, handleDelete: n }) => (
    console.log(e),
    k.jsx(k.Fragment, {
      children: k.jsxs("tr", {
        className: "text-dark text-center",
        children: [
          k.jsx("th", {
            scope: "row",
            className:
              "px-1 py-2 md:px-6 md:py-4 font-medium  whitespace-nowrap ",
            children: k.jsxs("span", {
              className:
                "bg-warning px-2.5 py-2  md:px-5 rounded-2xl md:py-2 capitalize",
              children: [" ", e.title ? `${e.title}` : "no expenses added yet"],
            }),
          }),
          k.jsx("td", {
            className: "px-1 py-2 md:px-6 md:py-4 text-xl font-semibold  ",
            children: k.jsx("span", {
              children: e.addexpensesmoney ? `$${e.addexpensesmoney}` : "$0",
            }),
          }),
          k.jsx("td", {
            className: "px-1 py-2 md:px-6 md:py-4 text-xl font-semibold",
            children: k.jsx("span", {
              className: "capitalize",
              children: t || "- ",
            }),
          }),
          k.jsx("td", {
            className: "px-1 py-2 md:px-6 md:py-4",
            children: k.jsx("button", {
              onClick: () => n(e.title),
              className:
                "bg-warning rounded-lg shadow-2xl active:scale-95 transition-all duration-200 ease-linear shadow-[#111] px-1 py-0.5 text-white text-3xl ",
              children: k.jsx(Sk, {}),
            }),
          }),
        ],
      }),
    })
  ),
  Pk = E.memo(({ time: e }) => {
    const { expDate: t } = e,
      [n, r] = E.useState([]),
      { expenceData: i } = Cf();
    E.useEffect(() => {
      (() => {
        r((a) => [...a, i]);
      })();
    }, [i]);
    const o = (s) => {
      const a = n.filter((l) => l.title !== s);
      r(a);
    };
    return k.jsx(k.Fragment, {
      children: k.jsx("main", {
        className: "w-fit md:w-full border-2 border-[#111] rounded-md ",
        children: k.jsx("div", {
          className: "rounded-lg ",
          children: k.jsxs("table", {
            className: "w-full  text-left rtl:text-right ",
            children: [
              k.jsx("thead", {
                className:
                  "text-base text-light bg-button capitalize text-center ",
                children: k.jsxs("tr", {
                  children: [
                    k.jsx("th", {
                      scope: "col",
                      className: " px-2 py-3  md:px-6 md:py-3",
                      children: "expenses category",
                    }),
                    k.jsx("th", {
                      scope: "col",
                      className: " px-2 py-3  md:px-6 md:py-3",
                      children: "amount",
                    }),
                    k.jsx("th", {
                      scope: "col",
                      className: " px-2 py-3  md:px-6 md:py-3",
                      children: "date",
                    }),
                    k.jsx("th", {
                      scope: "col",
                      className: " px-2 py-3  md:px-6 md:py-3",
                      children: "edit",
                    }),
                  ],
                }),
              }),
              k.jsx("tbody", {
                className: "w-full",
                children: n
                  ? n.map((s, a) =>
                      k.jsx(Ek, { handleDelete: o, value: s, date: t }, a)
                    )
                  : null,
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Tk = () => {
    const { expenceData: e } = Cf();
    return k.jsx(k.Fragment, {
      children: k.jsx("main", {
        className:
          "shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full h-full px-10 py-10 rounded-lg border-2  border-blue-900  ",
        children: k.jsxs("div", {
          className: "flex justify-center items-center w-full h-full gap-10 ",
          children: [
            k.jsxs("p", {
              className: "font-semibold capitalize text-xl md:text-2xl",
              children: ["Total balance  : $ ", e.balance],
            }),
            k.jsxs("p", {
              className: "font-semibold capitalize text-xl md:text-2xl",
              children: ["Total expense  : $", e.addexpensesmoney],
            }),
          ],
        }),
      }),
    });
  },
  Ck = () => {
    const [e, t] = E.useState(""),
      [n, r] = E.useState(""),
      [i, o] = E.useState({
        addIncome: 0,
        addexpensesmoney: 0,
        balance: 0,
        title: "",
      }),
      { user: s } = zv(),
      { setExpenceData: a } = Cf();
    return (
      E.useEffect(() => {
        a(i);
      }, [i]),
      k.jsx(k.Fragment, {
        children: k.jsxs("main", {
          className:
            " overflow-hidden w-full bg-light relative group felx flex-col justify-center items-center",
          children: [
            k.jsx("div", {
              className:
                "absolute w-[20%] group-hover:w-full h-1 md:h-[1%] bg-purple-gradient left-[50%] -translate-x-[50%] top-0 transition-all duration-300 ease-linear",
            }),
            k.jsx("section", {
              className: "text-5xl  ml-5 py-6 font-bold",
              children: k.jsxs("p", {
                className: "",
                children: [
                  "Welcome",
                  " ",
                  k.jsxs("span", {
                    className:
                      "text-transparent bg-clip-text bg-purple-gradient capitalize",
                    children: [s ? `${s}` : "enter your name first", ","],
                  }),
                ],
              }),
            }),
            k.jsxs("div", {
              className:
                " pt-10 flex flex-col justify-center items-center gap-5 ",
              children: [
                k.jsxs("section", {
                  className:
                    "grid grid-cols-1 w-full lg:gap-0 gap-8  md:grid-cols-2 lg:grid-cols-3   justify-center items-center ",
                  children: [
                    k.jsx(Kr.section, {
                      initial: { y: -500 },
                      animate: { y: 0 },
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.5,
                      },
                      whileHover: {
                        scale: 1.04,
                        transition: { duration: 0.2, ease: "easeOut" },
                      },
                      className: "flex h-full  justify-center items-center ",
                      children: k.jsx(vk, {
                        setAddIncone: o,
                        adDates: { adDate: e, setAddDate: t },
                      }),
                    }),
                    k.jsx(Kr.section, {
                      initial: { y: -800 },
                      animate: { y: 0 },
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.7,
                      },
                      whileHover: {
                        scale: 1.04,
                        transition: { duration: 0.2, ease: "easeOut" },
                      },
                      className: "flex justify-center items-center",
                      children: k.jsx(wk, {
                        setAddexpenses: o,
                        expDates: { expDate: n, setExpDate: r },
                      }),
                    }),
                    k.jsx(Kr.section, {
                      initial: { y: -1200 },
                      animate: { y: 0 },
                      transition: { duration: 0.5, ease: "easeOut", delay: 1 },
                      whileHover: {
                        scale: 1.04,
                        transition: { duration: 0.2, ease: "easeOut" },
                      },
                      className: "flex justify-center items-center h-full ",
                      children: k.jsx(Tk, {}),
                    }),
                  ],
                }),
                k.jsx("section", {
                  className:
                    " py-10 flex justify-center items-center px-5 md:px-20  md:w-full lg:px-28 ",
                  children: k.jsx(Pk, { time: { expDate: n } }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  kk = () =>
    k.jsx("div", {
      className:
        "w-full h-lvh flex bg-light text-dark justify-center items-center ",
      children: k.jsx("section", {
        class: "",
        children: k.jsx("div", {
          class: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6",
          children: k.jsxs("div", {
            class: "mx-auto max-w-screen-sm text-center",
            children: [
              k.jsx("h1", {
                class:
                  "mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500",
                children: "404",
              }),
              k.jsx("p", {
                class:
                  "mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl",
                children: "Something's missing.",
              }),
              k.jsx("p", {
                class: "mb-4 text-lg font-light text-gray-500 ",
                children:
                  "Sorry, we can't find that page. You'll find lots to explore on the home page. ",
              }),
              k.jsx(ea, {
                to: "/",
                class:
                  "inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4",
                children: k.jsx(ir, { value: "Back to Homepage" }),
              }),
            ],
          }),
        }),
      }),
    }),
  Rk = aS([
    {
      path: "/",
      element: k.jsx(XC, {}),
      errorElement: k.jsx(kk, {}),
      children: [
        { path: "/", element: k.jsx(ok, {}) },
        { path: "/dashboard", element: k.jsx(Ck, {}) },
      ],
    },
  ]);
Yg(document.getElementById("root")).render(
  k.jsx(E.StrictMode, { children: k.jsx(mS, { router: Rk }) })
);
