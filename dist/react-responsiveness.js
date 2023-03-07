import * as L from "react";
import oe from "react";
var H = {}, Ie = {
  get exports() {
    return H;
  },
  set exports(d) {
    H = d;
  }
}, Y = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie;
function Ye() {
  if (ie)
    return Y;
  ie = 1;
  var d = oe, O = 60103;
  if (Y.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var g = Symbol.for;
    O = g("react.element"), Y.Fragment = g("react.fragment");
  }
  var S = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = Object.prototype.hasOwnProperty, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(x, c, b) {
    var i, o = {}, v = null, p = null;
    b !== void 0 && (v = "" + b), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (i in c)
      P.call(c, i) && !E.hasOwnProperty(i) && (o[i] = c[i]);
    if (x && x.defaultProps)
      for (i in c = x.defaultProps, c)
        o[i] === void 0 && (o[i] = c[i]);
    return { $$typeof: O, type: x, key: v, ref: p, props: o, _owner: S.current };
  }
  return Y.jsx = T, Y.jsxs = T, Y;
}
var G = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var se;
function Le() {
  return se || (se = 1, function(d) {
    process.env.NODE_ENV !== "production" && function() {
      var O = oe, g = 60103, S = 60106;
      d.Fragment = 60107;
      var P = 60108, E = 60114, T = 60109, x = 60110, c = 60112, b = 60113, i = 60120, o = 60115, v = 60116, p = 60121, C = 60122, y = 60117, $ = 60129, w = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var u = Symbol.for;
        g = u("react.element"), S = u("react.portal"), d.Fragment = u("react.fragment"), P = u("react.strict_mode"), E = u("react.profiler"), T = u("react.provider"), x = u("react.context"), c = u("react.forward_ref"), b = u("react.suspense"), i = u("react.suspense_list"), o = u("react.memo"), v = u("react.lazy"), p = u("react.block"), C = u("react.server.block"), y = u("react.fundamental"), u("react.scope"), u("react.opaque.id"), $ = u("react.debug_trace_mode"), u("react.offscreen"), w = u("react.legacy_hidden");
      }
      var A = typeof Symbol == "function" && Symbol.iterator, U = "@@iterator";
      function fe(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = A && e[A] || e[U];
        return typeof r == "function" ? r : null;
      }
      var W = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function m(e) {
        {
          for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
            t[n - 1] = arguments[n];
          le("error", e, t);
        }
      }
      function le(e, r, t) {
        {
          var n = W.ReactDebugCurrentFrame, f = "";
          if (k) {
            var l = R(k.type), s = k._owner;
            f += ve(l, k._source, s && R(s.type));
          }
          f += n.getStackAddendum(), f !== "" && (r += "%s", t = t.concat([f]));
          var a = t.map(function(_) {
            return "" + _;
          });
          a.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, a);
        }
      }
      var ce = !1;
      function de(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === d.Fragment || e === E || e === $ || e === P || e === b || e === i || e === w || ce || typeof e == "object" && e !== null && (e.$$typeof === v || e.$$typeof === o || e.$$typeof === T || e.$$typeof === x || e.$$typeof === c || e.$$typeof === y || e.$$typeof === p || e[0] === C));
      }
      var B = /^(.*)[\\\/]/;
      function ve(e, r, t) {
        var n = "";
        if (r) {
          var f = r.fileName, l = f.replace(B, "");
          if (/^index\./.test(l)) {
            var s = f.match(B);
            if (s) {
              var a = s[1];
              if (a) {
                var _ = a.replace(B, "");
                l = _ + "/" + l;
              }
            }
          }
          n = " (at " + l + ":" + r.lineNumber + ")";
        } else
          t && (n = " (created by " + t + ")");
        return `
    in ` + (e || "Unknown") + n;
      }
      var _e = 1;
      function me(e) {
        return e._status === _e ? e._result : null;
      }
      function pe(e, r, t) {
        var n = r.displayName || r.name || "";
        return e.displayName || (n !== "" ? t + "(" + n + ")" : t);
      }
      function R(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && m("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case d.Fragment:
            return "Fragment";
          case S:
            return "Portal";
          case E:
            return "Profiler";
          case P:
            return "StrictMode";
          case b:
            return "Suspense";
          case i:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case x:
              return "Context.Consumer";
            case T:
              return "Context.Provider";
            case c:
              return pe(e, e.render, "ForwardRef");
            case o:
              return R(e.type);
            case p:
              return R(e.render);
            case v: {
              var r = e, t = me(r);
              if (t)
                return R(t);
              break;
            }
          }
        return null;
      }
      var X = {};
      W.ReactDebugCurrentFrame;
      var k = null;
      function V(e) {
        k = e;
      }
      function Re(e, r, t, n, f) {
        {
          var l = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var s in e)
            if (l(e, s)) {
              var a = void 0;
              try {
                if (typeof e[s] != "function") {
                  var _ = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw _.name = "Invariant Violation", _;
                }
                a = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (h) {
                a = h;
              }
              a && !(a instanceof Error) && (V(f), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof a), V(null)), a instanceof Error && !(a.message in X) && (X[a.message] = !0, V(f), m("Failed %s type: %s", t, a.message), V(null));
            }
        }
      }
      var M = W.ReactCurrentOwner, F = Object.prototype.hasOwnProperty, Ee = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Z, Q, q;
      q = {};
      function ge(e) {
        if (F.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function xe(e) {
        if (F.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function he(e, r) {
        if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
          var t = R(M.current.type);
          q[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(M.current.type), e.ref), q[t] = !0);
        }
      }
      function Oe(e, r) {
        {
          var t = function() {
            Z || (Z = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: t,
            configurable: !0
          });
        }
      }
      function Pe(e, r) {
        {
          var t = function() {
            Q || (Q = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: t,
            configurable: !0
          });
        }
      }
      var Te = function(e, r, t, n, f, l, s) {
        var a = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: g,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: t,
          props: s,
          // Record the component responsible for creating this element.
          _owner: l
        };
        return a._store = {}, Object.defineProperty(a._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(a, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: n
        }), Object.defineProperty(a, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: f
        }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
      };
      function be(e, r, t, n, f) {
        {
          var l, s = {}, a = null, _ = null;
          t !== void 0 && (a = "" + t), xe(r) && (a = "" + r.key), ge(r) && (_ = r.ref, he(r, f));
          for (l in r)
            F.call(r, l) && !Ee.hasOwnProperty(l) && (s[l] = r[l]);
          if (e && e.defaultProps) {
            var h = e.defaultProps;
            for (l in h)
              s[l] === void 0 && (s[l] = h[l]);
          }
          if (a || _) {
            var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            a && Oe(s, j), _ && Pe(s, j);
          }
          return Te(e, a, _, f, n, M.current, s);
        }
      }
      var N = W.ReactCurrentOwner;
      W.ReactDebugCurrentFrame;
      function D(e) {
        k = e;
      }
      var z;
      z = !1;
      function J(e) {
        return typeof e == "object" && e !== null && e.$$typeof === g;
      }
      function ee() {
        {
          if (N.current) {
            var e = R(N.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function Ce(e) {
        {
          if (e !== void 0) {
            var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
            return `

Check your code at ` + r + ":" + t + ".";
          }
          return "";
        }
      }
      var re = {};
      function ye(e) {
        {
          var r = ee();
          if (!r) {
            var t = typeof e == "string" ? e : e.displayName || e.name;
            t && (r = `

Check the top-level render call using <` + t + ">.");
          }
          return r;
        }
      }
      function te(e, r) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var t = ye(r);
          if (re[t])
            return;
          re[t] = !0;
          var n = "";
          e && e._owner && e._owner !== N.current && (n = " It was passed a child from " + R(e._owner.type) + "."), D(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
        }
      }
      function ne(e, r) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              J(n) && te(n, r);
            }
          else if (J(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var f = fe(e);
            if (typeof f == "function" && f !== e.entries)
              for (var l = f.call(e), s; !(s = l.next()).done; )
                J(s.value) && te(s.value, r);
          }
        }
      }
      function je(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var t;
          if (typeof r == "function")
            t = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === o))
            t = r.propTypes;
          else
            return;
          if (t) {
            var n = R(r);
            Re(t, e.props, "prop", n, e);
          } else if (r.PropTypes !== void 0 && !z) {
            z = !0;
            var f = R(r);
            m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function we(e) {
        {
          for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
            var n = r[t];
            if (n !== "children" && n !== "key") {
              D(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
              break;
            }
          }
          e.ref !== null && (D(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
        }
      }
      function ae(e, r, t, n, f, l) {
        {
          var s = de(e);
          if (!s) {
            var a = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var _ = Ce(f);
            _ ? a += _ : a += ee();
            var h;
            e === null ? h = "null" : Array.isArray(e) ? h = "array" : e !== void 0 && e.$$typeof === g ? (h = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, a);
          }
          var j = be(e, r, t, f, l);
          if (j == null)
            return j;
          if (s) {
            var I = r.children;
            if (I !== void 0)
              if (n)
                if (Array.isArray(I)) {
                  for (var K = 0; K < I.length; K++)
                    ne(I[K], e);
                  Object.freeze && Object.freeze(I);
                } else
                  m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                ne(I, e);
          }
          return e === d.Fragment ? we(j) : je(j), j;
        }
      }
      function Se(e, r, t) {
        return ae(e, r, t, !0);
      }
      function Ae(e, r, t) {
        return ae(e, r, t, !1);
      }
      var ke = Ae, De = Se;
      d.jsx = ke, d.jsxs = De;
    }();
  }(G)), G;
}
(function(d) {
  process.env.NODE_ENV === "production" ? d.exports = Ye() : d.exports = Le();
})(Ie);
const $e = H.jsx, We = {
  Bootstrap_3: {
    xs: 0,
    sm: 576,
    lg: 992
  },
  Bootstrap_4: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  Bootstrap_5: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  },
  Bulma: {
    mobile: 0,
    tablet: 769,
    desktop: 1024,
    widescreen: 1216,
    fullhd: 1408
  },
  Chakra: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
    "2xl": 1472
  },
  Foundation: {
    small: 0,
    medium: 640,
    large: 1024,
    xlarge: 1200,
    xxlarge: 1440
  },
  Ionic: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  Material_Design: {
    xs: 0,
    sm_8: 600,
    sm_12: 905,
    md: 1240,
    lg: 1440
  },
  Materialize: {
    s: 0,
    m: 600,
    l: 992,
    xl: 1200
  },
  Material_UI: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1260,
    xl: 1920
  },
  Quasar: {
    xs: 0,
    sm: 600,
    md: 1024,
    lg: 1440,
    xl: 1920
  },
  Semantic_UI: {
    mobile: 0,
    tablet: 768,
    small_monitor: 992,
    large_monitor: 1200
  },
  Skeleton: {
    mobile: 0,
    phablet: 400,
    tablet: 550,
    desktop: 750,
    desktop_hd: 1e3,
    desktop_hd_lg: 1200
  },
  Tailwind_CSS: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
  },
  Windi_CSS: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
  }
}, ue = L.createContext(
  {}
), Ue = () => L.useContext(ue), Ve = ({
  children: d,
  breakpoints: O = We.Bootstrap_5
}) => {
  const [g, S] = L.useState(""), P = L.useMemo(
    () => Object.entries(O).sort(([, i], [, o]) => (i || 0) - (o || 0)).reduce((i, [o, v], p, C) => {
      var y;
      return i[o] = {
        min: v ? `(min-width: ${v}px)` : "",
        max: (y = C[p + 1]) != null && y[1] ? `(max-width: ${C[p + 1][1] - 0.1}px)` : ""
      }, i;
    }, {}),
    [O]
  ), [E, T] = L.useState(
    Object.assign(
      {},
      ...Object.keys(P).map((i) => ({
        [i]: { min: !1, max: !1, only: !1 }
      }))
    )
  );
  L.useLayoutEffect(() => {
    Object.entries(P).forEach(([i, o]) => {
      const v = {
        min: window.matchMedia(o.min),
        max: window.matchMedia(o.max)
      };
      Object.entries(v).forEach(([p, C]) => {
        const y = ({ matches: $ }) => T((w) => {
          var U;
          if (((U = w[i]) == null ? void 0 : U[p]) === $)
            return w;
          const { min: u, max: A } = {
            ...w[i],
            [p]: $
          };
          return i !== g && u && A && S(i), {
            ...w,
            [i]: { min: u, max: A, only: u && A }
          };
        });
        C.addEventListener("change", y), y(C);
      });
    });
  }, [O]);
  const x = (i) => {
    var o;
    return ((o = E[i]) == null ? void 0 : o.min) || !1;
  }, c = (i) => {
    var o;
    return ((o = E[i]) == null ? void 0 : o.min) || !1;
  }, b = (i) => {
    var o, v;
    return ((o = E[i]) == null ? void 0 : o.min) && ((v = E[i]) == null ? void 0 : v.max) || !1;
  };
  return /* @__PURE__ */ $e(
    ue.Provider,
    {
      value: { isMin: x, isMax: c, isOnly: b, matches: E, currentInterval: g },
      children: d
    }
  );
};
export {
  We as Presets,
  Ve as ResponsivenessProvider,
  Ue as useResponsiveness
};
