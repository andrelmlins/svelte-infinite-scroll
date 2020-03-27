# Svelte Infinite Scroll

[![npm version](https://badge.fury.io/js/svelte-infinite-scroll.svg)](https://www.npmjs.com/package/svelte-infinite-scroll) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-infinite-scroll/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-infinite-scroll.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-infinite-scroll) &bull; [![Dependencies](https://david-dm.org/andrelmlins/svelte-infinite-scroll.svg)](https://david-dm.org/andrelmlins/svelte-infinite-scroll) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/a16b6807-8f05-4e03-8ed4-33e5162155bb/deploy-status)](https://app.netlify.com/sites/svelte-infinite-scroll/deploys) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/svelte-infinite-scroll.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/svelte-infinite-scroll/context:javascript)

Infinite Scroll Component to Svelte

## Installation

```
npm i svelte-infinite-scroll
// OR
yarn add svelte-infinite-scroll
```

## Demo [Link](https://svelte-infinite-scroll.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/svelte-infinite-scroll.git
cd svelte-infinite-scroll
yarn && yarn start
```

## Examples

```js
<script>
  import SvelteInfiniteScroll from "svelte-infinite-scroll";
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
  <SvelteInfiniteScroll threshold={100} on:loadMore={() => page++} />
</ul>
```

## Properties

Component props:

| Prop          | Type   | Default | Description                               |
| ------------- | ------ | ------- | ----------------------------------------- |
| threshold     | number | 0       | Threshold to call loadMore                |
| elementScroll | node   | -       | Element to bind scroll                    |
| hasMore       | bool   | true    | Tells you if there are more items to load |
| loadMore      | func   | --      | Call with offset                          |
| horizontal    | bool   | false   | Changing orientation                      |

## Use with sapper

When using Svelte components installed from npm, Svelte needs the original component source. See the [link](https://github.com/sveltejs/sapper-template#using-external-components).

Install as `devDependency` or use the original component as below:

```js
import SvelteInfiniteScroll from "svelte-infinite-scroll/index.svelte";
```

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-infinite-scroll.png)](https://nodei.co/npm/svelte-infinite-scroll/)

## License

Svelte Infinite Scroll is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-infinite-scroll/blob/master/LICENSE).
