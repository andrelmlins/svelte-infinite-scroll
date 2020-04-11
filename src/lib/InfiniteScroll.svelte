<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";

  export let threshold = 0;
  export let horizontal = false;
  export let elementScroll = null;
  export let hasMore = true;
  export let reverse = false;

  const dispatch = createEventDispatcher();
  let isLoadMore = false;
  let component;
  let beforeScrollHeight;
  let beforeScrollTop;

  $: if (component || elementScroll) {
    const element = elementScroll ? elementScroll : component.parentNode;

    if (reverse) {
      element.scrollTop = element.scrollHeight;
    }

    element.addEventListener("scroll", onScroll);
    element.addEventListener("resize", onScroll);
  }

  $: if (isLoadMore && reverse) {
    const element = elementScroll ? elementScroll : component.parentNode;

    element.scrollTop =
      element.scrollHeight - beforeScrollHeight + beforeScrollTop;
  }

  const onScroll = e => {
    if (!hasMore) return;

    let offset = 0;

    if (reverse) {
      offset = horizontal ? e.target.scrollLeft : e.target.scrollTop;
    } else {
      offset = horizontal
        ? e.target.scrollWidth - e.target.clientWidth - e.target.scrollLeft
        : e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop;
    }

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

  onDestroy(() => {
    if (component || elementScroll) {
      const element = elementScroll ? elementScroll : component.parentNode;

      element.removeEventListener("scroll", null);
      element.removeEventListener("resize", null);
    }
  });
</script>

<div bind:this={component} style="width:0px" />
