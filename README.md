# React Responsiveness

<p>
<a href="https://www.npmjs.com/package/react-responsiveness"><img src="https://img.shields.io/npm/dt/react-responsiveness.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/react-responsiveness"><img src="https://img.shields.io/npm/v/react-responsiveness.svg" alt="Latest Release"></a>
<a href="https://github.com/andrei-gheorghiu/react-responsiveness/blob/main/LICENSE.MD"><img src="https://img.shields.io/npm/l/react-responsiveness.svg" alt="License"></a>
<img src="https://img.shields.io/badge/dependencies-0-brightgreen.svg" alt="Dependencies" />
<a href="https://unpkg.com/react-responsiveness"><img src="https://img.badgesize.io/https://unpkg.com/react-responsiveness.svg?compression=gzip&label=umd:minzip" alt="unpkg umd min:gzip size" /></a>
<a href="https://circleci.com/gh/andrei-gheorghiu/react-responsiveness/tree/main"><img src="https://circleci.com/gh/andrei-gheorghiu/react-responsiveness/tree/main.svg?style=svg" alt="CircleCI" /></a>
<a href="https://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome"/></a>
</p>
Tiny plugin (in size - <code>~1.1 kB</code> gzipped - and in runtime resource consumption) for working with responsiveness intervals.

I wanted something really easy to use, light as a feather.  
To be fair, I am a bit obsessed with both performance and ease of use. If curios, scroll down to [How it works](#how-it-works).

### Installation

#### yarn

```terminal
yarn add react-responsiveness
```

#### npm

```terminal
npm i react-responsiveness
```

### Peer dependencies <sup>\*</sup>

- `react@ >= 16.x` (works with `v18.x`)
- `react-dom@ >= 16.x` (works with `v18.x`)
- `jotai@ >= 1.x` (works with `v2.x`)

<span>*</span> you need these deps in your project to use `react-responsiveness`

### Demo

[codesandbox](https://codesandbox.io/p/github/codesandbox/codesandbox-template-vite-react/csb-ss87sf/react-responsiveness?file=%2Fsrc%2FApp.tsx).

### Usage

_Note:_ The default config value is set to Bootstrap 5's [responsiveness breakpoints](https://getbootstrap.com/docs/5.3/layout/breakpoints/#available-breakpoints) preset:

```tsx
Presets.Bootstrap_5 = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};
```

#### A) Setup listeners:

```tsx
import { useReactResponsiveness } from "react-responsiveness";

function App() {
  const { addListeners } = useReactResponsiveness();
  React.useLayoutEffect(() => {
    addListeners();
  }, []);
  // ...
}
```

Can be in any other component, but I recommend App as it's first to render. This only needs to be done once.

#### B) Use in any component:

```tsx
import { useReactResponsiveness } from "react-responsiveness";

const { isMin, isMax, isOnly, currentInterval } = useReactResponsiveness()

return (<>
   <div>Current interval {currentInterval}</div>
   {isMin('sm') && (
       <!-- @media (min-width: 576px) -->
       <div>content...</div>
   )}
   {isMax('sm') && (
       <!-- @media (max-width: 767.9px) -->
       <div>content...</div>
   )}
   {isOnly('sm') && (
       <!-- @media (min-width: 576px) and (max-width: 767.9px) -->
       <div>content...</div>
   )}
</>)
```

#### Important notes

- It is only required to call `addListeners` once per page/app. `matches` and `currentInterval` are shared state across all components using the hook.
- The plugin uses `jotai` for sharing state across components (it's much like Recoil, except smaller).
  You need to install `jotai` in your project (`~6 kB` gzipped) to use `react-responsiveness`.

### Using Breakpoint Library presets:

In App:

```tsx
import { useReactResponsiveness, Presets } from "react-responsiveness";

const { addListeners } = useReactResponsiveness();
React.useLayoutEffect(() => {
  addListeners(Presets.Tailwind_CSS);
}, []);
```

Available presets:

`Bootstrap_3`, `Bootstrap_4`, `Bootstrap_5`, `Bulma`, `Chakra`, `Foundation`, `Ionic`, `Material_Design`, `Materialize`, `Material_UI`, `Quasar`, `Semantic_UI`, `Skeleton`, `Tailwind_CSS`, `Windi_CSS`

**Notes:**

- If you maintain a CSS framework (or use one often) and want its preset added, [open an issue](https://github.com/andrei-gheorghiu/react-responsiveness/issues) or a PR.
- If you spot any inconsistency in [the presets](https://github.com/andrei-gheorghiu/react-responsiveness/blob/main/lib/presets.ts) (either my typo or some library update), please, let me know, I'll correct it.

### Bespoke intervals:

In App:

```tsx
const { addListeners } = useReactResponsiveness();
React.useLayoutEffect(() => {
  addListeners({
    small: 0,
    medium: 777,
    large: 1234,
  });
}, []);
```

... then, in any component, including App:

```tsx
const { isOnly } = useReactResponsiveness()

return (<>
    {isOnly('medium') && (
        <!-- @media (min-width: 777px) and (max-width: 1233.9px) -->
        <div>content...</div>
    )}
</>)
```

### How it works:

- uses the native [`window.matchMedia(queryString)`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) and only reacts to changes in the query's `matches` value. It's the same API powering CSS media queries
- listeners are placed on the `MediaQueryList` instances, meaning they are garbage collected as soon as the app is unmounted, without leaving bound events behind on `<body>` or `window` object
- no global pollution
- only places listeners once and shares state across all components
- in terms of memory and/or CPU consumption, listening to `window.matchMadia` 'change' events is a few hundred times lighter than using the _"traditional"_ `resize` event listener method

### Got issues?

[Let me know!](https://github.com/andrei-gheorghiu/react-responsiveness/issues)
