import { atom as p, useAtom as u, useAtomValue as M } from "jotai";
const f = {
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
}, h = p({}), w = p(
  (s) => {
    var o;
    return ((o = Object.entries(s(h)).find(([, m]) => m == null ? void 0 : m.only)) == null ? void 0 : o[0]) || "";
  }
), B = () => {
  const [s, o] = u(h), m = M(w);
  return { addListeners: (l = f.Bootstrap_5) => {
    const t = Object.entries(l).sort(([, e], [, n]) => (e || 0) - (n || 0)).reduce((e, [n, x], i, a) => {
      var r;
      return e[n] = {
        min: x ? `(min-width: ${x}px)` : "",
        max: (r = a[i + 1]) != null && r[1] ? `(max-width: ${a[i + 1][1] - 0.1}px)` : ""
      }, e;
    }, {});
    o(
      (e) => Object.assign(
        e,
        ...Object.keys(t).map((n) => ({
          [n]: { min: !1, max: !1, only: !1 }
        }))
      )
    ), Object.entries(t).forEach(([e, n]) => {
      const x = {
        min: window.matchMedia(n.min),
        max: window.matchMedia(n.max)
      };
      Object.entries(x).forEach(([i, a]) => {
        const r = ({ matches: c }) => {
          o((d) => {
            var b;
            if (((b = d[e]) == null ? void 0 : b[i]) === c)
              return d;
            const { min: g, max: _ } = {
              ...d[e],
              [i]: c
            };
            return {
              ...d,
              [e]: { min: g, max: _, only: g && _ }
            };
          });
        };
        a.addEventListener("change", r), r(a);
      });
    });
  }, isMin: (l) => {
    var t;
    return (t = s == null ? void 0 : s[l]) == null ? void 0 : t.min;
  }, isMax: (l) => {
    var t;
    return (t = s == null ? void 0 : s[l]) == null ? void 0 : t.max;
  }, isOnly: (l) => {
    var t;
    return (t = s == null ? void 0 : s[l]) == null ? void 0 : t.only;
  }, currentInterval: m, matches: s };
};
export {
  f as Presets,
  B as useReactResponsiveness
};
