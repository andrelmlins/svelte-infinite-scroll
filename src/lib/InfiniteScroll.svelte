<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";

  export let threshold = 0;
  export let horizontal = false;
  export let elementScroll = null;
  export let hasMore = true;
  export let reverse = false;
  export let window = false;

  const dispatch = createEventDispatcher();

  let isLoadMore = false;
  let component;
  let beforeScrollHeight;
  let beforeScrollTop;
  let element;

  $: if (element) {
    if (reverse) {
      element.scrollTop = element.scrollHeight;
    }
    element.addEventListener("scroll", onScroll);
    element.addEventListener("resize", onScroll);
  }

  $: if (isLoadMore && reverse) {
    element.scrollTop =
      element.scrollHeight - beforeScrollHeight + beforeScrollTop;
  }

  const onScroll = (e) => {
    if (!hasMore) return;
    const offset = calcOffset(e, reverse, horizontal);
    if (offset <= threshold) {
      if (!isLoadMore && hasMore) {
        dispatch("loadMore");
        beforeScrollHeight = e.target.scrollHeight;
        beforeScrollTop = e.target.scrollTop;
      }
      isLoadMore = true;
    } else {
      isLoadMore = false;
    }
  };

  const calcOffset = (e, reverse, horizontal) => {
    const element = e.target.documentElement
      ? e.target.documentElement
      : e.target;
    if (reverse) {
      return horizontal ? element.scrollLeft : element.scrollTop;
    }
    return horizontal
      ? element.scrollWidth - element.clientWidth - element.scrollLeft
      : element.scrollHeight - element.clientHeight - element.scrollTop;
  };

  const getElement = () => {
    if (window) {
      return document;
    }
    if (elementScroll) {
      return elementScroll;
    }
    return component && component.parentNode;
  };

  onMount(() => {
    element = getElement();
  });

  onDestroy(() => {
    if (element) {
      element.removeEventListener("scroll", onScroll);
      element.removeEventListener("resize", onScroll);
    }
  });
</script>

{#if !window && !elementScroll}
  <div bind:this={component} class="svelte-infinite-scroll" style="width: 0;" />
{/if}
