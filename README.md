# Svelte Infinite Scroll

[![npm version](https://badge.fury.io/js/svelte-infinite-scroll.svg)](https://www.npmjs.com/package/svelte-infinite-scroll) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-infinite-scroll/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-infinite-scroll.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-infinite-scroll) &bull; [![Dependencies](https://david-dm.org/andrelmlins/svelte-infinite-scroll.svg)](https://david-dm.org/andrelmlins/svelte-infinite-scroll) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/30d7b769-4f7a-40db-9575-032fca47b888/deploy-status)](https://app.netlify.com/sites/svelte-infinite-scroll/deploys) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/svelte-infinite-scroll.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/svelte-infinite-scroll/context:javascript)

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
cd svelte-infinite-scroll/example
yarn install && yarn start
```

## Examples

```js
<script>
  import SvelteInfiniteScroll from "svelte-infinite-scroll";
</script>

<div
  style="width:500px; height:500px;
  overflow-y:scroll;background:red;padding:20px">
  <div style="width:500px; height:900px; overflow-y:scroll; background:green" />
  <SvelteInfiniteScroll
    threshold={100}
    on:loadMore={() => {
      console.log('load');
    }} />
</div>
```

## Properties

Raw component props (before transform):

| Prop          | Type   | Description                |
| ------------- | ------ | -------------------------- |
| threshold     | number | Threshold to call loadMore |
| elementScroll | node   | Element to bind scroll     |
| loadMore      | func   | Call with offset           |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-infinite-scroll.png)](https://nodei.co/npm/svelte-infinite-scroll/)

## License

Svelte Infinite Scroll is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-infinite-scroll/blob/master/LICENSE).
