# React Responsiveness

<p>
<a href="https://www.npmjs.com/package/react-responsiveness"><img src="https://img.shields.io/npm/dt/react-responsiveness.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/react-responsiveness"><img src="https://img.shields.io/npm/v/react-responsiveness.svg" alt="Latest Release"></a>
<a href="https://github.com/codemonk-digital/react-responsiveness/blob/main/LICENSE.MD"><img src="https://img.shields.io/npm/l/react-responsiveness.svg" alt="License"></a>
<a href="https://github.com/codemonk-digital/react-responsiveness/blob/main/package.json#L27"><img src="https://img.shields.io/badge/dependencies-0-brightgreen.svg" alt="Dependencies" /></a>
<a href="https://unpkg.com/react-responsiveness"><img src="https://img.badgesize.io/https://unpkg.com/react-responsiveness.svg?compression=gzip&label=umd:minzip" alt="unpkg umd min:gzip size" /></a>
<a href="https://circleci.com/gh/codemonk-digital/react-responsiveness/tree/main"><img src="https://circleci.com/gh/codemonk-digital/react-responsiveness/tree/main.svg?style=svg" alt="CircleCI" /></a>
<a href="https://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome"/></a>
</p>
Tiny plugin for working with responsiveness intervals, developed with a focus on ease of use and runtime performance.

I wanted something really easy to use, light as a feather.  
To be fair, I am a bit obsessed with both performance and ease of use. If curios, scroll down to [How it works](#how-it-works).

## Installation

#### yarn

```terminal
yarn add react-responsiveness
```

#### npm

```terminal
npm i react-responsiveness
```

## Demo

[codesandbox](https://codesandbox.io/p/github/codesandbox/codesandbox-template-vite-react/csb-ss87sf/react-responsiveness-v1?file=%2Fsrc%2FApp.tsx).

## Usage

#### A) Add provider

```tsx
import { ResponsivenessProvider, Presets } from "react-responsiveness";

function App() {
    // ...
}

const WithResponsiveness = () => (
  <ResponsivenessProvider breakpoints={Presets.Bootstrap_5}>
    <App />
  </ResponsivenessProvider>
);
export default WithResponsiveness;
```

_Note:_ Default breakpoints value is **_already set_** to Bootstrap 5's [responsiveness breakpoints](https://getbootstrap.com/docs/5.3/layout/breakpoints/#available-breakpoints) preset:

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

#### B) Inside provider:

```tsx
import { useResponsiveness } from "react-responsiveness";

const { isMin, isMax, isOnly, currentInterval } = useResponsiveness()

return (<>
   <div>Current interval {currentInterval}</div>
   {isMin('md') && (
       // @media (min-width: 768px)
       <div>content...</div>
   )}
   {isMax('md') && (
       // @media (max-width: 991.9px)
       <div>content...</div>
   )}
   {isOnly('md') && (
       // @media (min-width: 768px) and (max-width: 991.9px)
       <div>content...</div>
   )}
</>)
```

## Available presets:

`Bootstrap_3`, `Bootstrap_4`, `Bootstrap_5`, `Bulma`, `Chakra`, `Foundation`, `Ionic`, `Material_Design`, `Materialize`, `Material_UI`, `Quasar`, `Semantic_UI`, `Skeleton`, `Tailwind_CSS`, `Windi_CSS`

**Notes:**

- If you maintain a CSS framework (or use one often) and want its preset added, [open an issue](https://github.com/codemonk-digital/react-responsiveness/issues) or a PR.
- If you spot any inaccuracy in [presets](https://github.com/codemonk-digital/react-responsiveness/blob/main/lib/presets.ts) (either typo or due to library update), please, let me know, I'll correct it.

## Bespoke intervals:

```tsx
<ResponsivenessProvider
  breakpoints={{
    small: 0,
    medium: 777,
    large: 1234,
  }}
>
  // ...
</ResponsivenessProvider>
```

```tsx
import { useResponsiveness } from "react-responsiveness";

const { isOnly } = useResponsiveness()

return (<>
    {isOnly('medium') && (
        // @media (min-width: 777px) and (max-width: 1233.9px)
        <div>content...</div>
    )}
</>)
```

## How it works:

- uses the native [`window.matchMedia(queryString)`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) and only reacts to changes in the query's `matches` value. It's the same API powering CSS media queries
- listeners are placed on the `MediaQueryList` instances, meaning they are garbage collected as soon as the app is unmounted, without leaving bound events behind on `<body>` or `window` object
- no global pollution
- in terms of memory and/or CPU consumption, listening to `window.matchMadia` 'change' events is a few hundred times lighter than using the _"traditional"_ `resize` event listener method

## Got issues?

[Let me know!](https://github.com/codemonk-digital/react-responsiveness/issues)
