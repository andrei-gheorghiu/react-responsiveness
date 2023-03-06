import { atom as _, useAtom as u, useAtomValue as f } from "jotai";
const w = {
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
}, b = _({}), j = _(
  (i) => {
    var e;
    return ((e = Object.entries(i(b)).find(([, m]) => m == null ? void 0 : m.only)) == null ? void 0 : e[0]) || "";
  }
), O = () => {
  const [i, e] = u(b), m = f(j);
  return { addListeners: (p = w.Bootstrap_5) => {
    const x = Object.entries(p).sort(([, s], [, t]) => (s || 0) - (t || 0)).reduce((s, [t, a], n, l) => {
      var o;
      return s[t] = {
        min: a ? `(min-width: ${a}px)` : "",
        max: (o = l[n + 1]) != null && o[1] ? `(max-width: ${l[n + 1][1] - 0.1}px)` : ""
      }, s;
    }, {});
    e(
      (s) => Object.assign(
        s,
        ...Object.keys(x).map((t) => ({
          [t]: { min: !1, max: !1, only: !1 }
        }))
      )
    ), Object.entries(x).forEach(([s, t]) => {
      const a = {
        min: window.matchMedia(t.min),
        max: window.matchMedia(t.max)
      };
      Object.entries(a).forEach(([n, l]) => {
        const o = ({ matches: c }) => {
          e((r) => {
            var h;
            if (((h = r[s]) == null ? void 0 : h[n]) === c)
              return r;
            const { min: d, max: g } = {
              ...r[s],
              [n]: c
            };
            return {
              ...r,
              [s]: { min: d, max: g, only: d && g }
            };
          });
        };
        l.addEventListener("change", o), o(l);
      });
    });
  }, matches: i, currentInterval: m };
};
export {
  w as Presets,
  O as useReactResponsiveness
};
