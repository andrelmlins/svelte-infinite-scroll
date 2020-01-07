<script>
  import SvelteInfiniteScroll from "svelte-infinite-scroll";
  import allCountries from "./countries.js";

  let page = 0;
  let size = 20;
  let countries = [];

  $: countries = [
    ...countries,
    ...allCountries.slice(size * page, size * (page + 1))
  ];
</script>

<style>
  main {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    color: white;
    text-shadow: 1px 1px 2px black;
    margin: 0;
  }

  h4 {
    color: white;
    margin: 10px 0px;
  }

  ul {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    width: 400px;
    max-width: 40%;
    background-color: white;
    max-height: 400px;
    overflow-x: scroll;
    list-style: none;
    padding: 0;
  }

  li {
    padding: 15px;
    box-sizing: border-box;
    transition: 0.2s all;
    font-size: 14px;
  }

  li:hover {
    background-color: #eeeeee;
  }
</style>

<main>
  <h1>Svelte Infinite Scroll</h1>
  <h4>Infinite Scroll Component to Svelte</h4>
  <ul>
    {#each countries as country}
      <li>{country.name}</li>
    {/each}
    <SvelteInfiniteScroll
      hasMore={countries.length === allCountries.length}
      threshold={100}
      on:loadMore={() => page++} />
  </ul>
  <h5>
    Loaded items: {countries.length === allCountries.length ? 'Yes' : 'Not'}
  </h5>
</main>
