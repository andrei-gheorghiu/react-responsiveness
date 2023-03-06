import * as d from "react";
import { atom as u, useAtom as O, useAtomValue as j } from "jotai";
const C = {
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
}, f = u({}), S = u(
  (s) => {
    var o;
    return ((o = Object.entries(s(f)).find(([, a]) => a == null ? void 0 : a.only)) == null ? void 0 : o[0]) || "";
  }
), B = () => {
  const [s, o] = O(f), a = j(S), h = (n = C.Bootstrap_5) => {
    const t = Object.entries(n).sort(([, e], [, l]) => (e || 0) - (l || 0)).reduce((e, [l, x], m, i) => {
      var r;
      return e[l] = {
        min: x ? `(min-width: ${x}px)` : "",
        max: (r = i[m + 1]) != null && r[1] ? `(max-width: ${i[m + 1][1] - 0.1}px)` : ""
      }, e;
    }, {});
    o(
      (e) => Object.assign(
        e,
        ...Object.keys(t).map((l) => ({
          [l]: { min: !1, max: !1, only: !1 }
        }))
      )
    ), Object.entries(t).forEach(([e, l]) => {
      const x = {
        min: window.matchMedia(l.min),
        max: window.matchMedia(l.max)
      };
      Object.entries(x).forEach(([m, i]) => {
        const r = ({ matches: g }) => {
          o((c) => {
            var p;
            if (((p = c[e]) == null ? void 0 : p[m]) === g)
              return c;
            const { min: b, max: _ } = {
              ...c[e],
              [m]: g
            };
            return {
              ...c,
              [e]: { min: b, max: _, only: b && _ }
            };
          });
        };
        i.addEventListener("change", r), r(i);
      });
    });
  }, k = d.useCallback(
    (n) => {
      var t;
      return (t = s == null ? void 0 : s[n]) == null ? void 0 : t.min;
    },
    [s]
  ), w = d.useCallback(
    (n) => {
      var t;
      return (t = s == null ? void 0 : s[n]) == null ? void 0 : t.max;
    },
    [s]
  ), M = d.useCallback(
    (n) => {
      var t;
      return (t = s == null ? void 0 : s[n]) == null ? void 0 : t.only;
    },
    [s]
  );
  return { addListeners: h, isMin: k, isMax: w, isOnly: M, currentInterval: a, matches: s };
};
export {
  C as Presets,
  B as useReactResponsiveness
};
