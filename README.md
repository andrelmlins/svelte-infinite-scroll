# Svelte Infinite Scroll

[![npm version](https://badge.fury.io/js/svelte-infinite-scroll.svg)](https://www.npmjs.com/package/svelte-infinite-scroll) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-infinite-scroll/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-infinite-scroll.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-infinite-scroll) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/a16b6807-8f05-4e03-8ed4-33e5162155bb/deploy-status)](https://app.netlify.com/sites/svelte-infinite-scroll/deploys) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/svelte-infinite-scroll.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/svelte-infinite-scroll/context:javascript) &bull; [![Gitter](https://badges.gitter.im/svelte-infinite-scroll/community.svg)](https://gitter.im/svelte-infinite-scroll/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Infinite Scroll Component to Svelte.

## Installation

```bash
npm i svelte-infinite-scroll

// or

yarn add svelte-infinite-scroll
```

_Note: to use this library in Sapper applications, install as devDependency. Take a look at [this link](https://github.com/sveltejs/sapper-template#using-external-components)._

## Demo [link](https://svelte-infinite-scroll.netlify.com/)

Local demo:

```bash
git clone https://github.com/andrelmlins/svelte-infinite-scroll.git
cd svelte-infinite-scroll
npm install && npm run dev
```

## Examples

An example of how to use the library:

```js
<script>
  import InfiniteScroll from "svelte-infinite-scroll";
  import allCountries from "./countries.js";

  let page = 0;
  let size = 20;
  let countries = [];

  $: countries = [
    ...countries,
    ...allCountries.splice(size * page, size * (page + 1) - 1)
  ];
</script>

<style>
  ul {
    width: 400px;
    max-height: 400px;
    overflow-x: scroll;
  }
</style>

<ul>
  {#each countries as country}
    <li>{country.name}</li>
  {/each}
  <InfiniteScroll threshold={100} on:loadMore={() => page++} />
</ul>
```

### Another examples

- Infinite scroll with requests | [Link](https://svelte.dev/repl/4863a658f3584b81bbe3d9f54eb67899) | [Author](https://github.com/kilianso)
- Infinite scroll reverse | [Link](https://svelte.dev/repl/36d00aa55c7c4ff68914ce314f4e1ca4) | [Author](https://github.com/andrelmlins)

## Properties

Component props:

| Prop            | Type   | Default | Description                               |
| --------------- | ------ | ------- | ----------------------------------------- |
| `threshold`     | number | 0       | Threshold to call loadMore                |
| `elementScroll` | node   | -       | Element to bind scroll                    |
| `window`        | bool   | false   | Bind scroll in window                     |
| `hasMore`       | bool   | true    | Tells you if there are more items to load |
| `horizontal`    | bool   | false   | Changing orientation                      |
| `reverse`       | bool   | false   | Revese scroll direction                   |

## Events

| Event      | Description                               |
| ---------- | ----------------------------------------- |
| `loadMore` | Tells you if there are more items to load |

## NPM statistics

Download stats for this NPM package.

[![NPM](https://nodei.co/npm/svelte-infinite-scroll.png)](https://nodei.co/npm/svelte-infinite-scroll/)

## License

Svelte Infinite Scroll is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-infinite-scroll/blob/master/LICENSE).
