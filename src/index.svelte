<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";

  export let threshold = 0;
  export let elementScroll;

  const dispatch = createEventDispatcher();
  let isLoadMore = false;
  let component;

  $: {
    if (component || elementScroll) {
      const element = elementScroll ? elementScroll : component.parentNode;

      element.addEventListener("scroll", onScroll);
      element.addEventListener("resize", onScroll);
    }
  }

  const onScroll = e => {
    const offset =
      e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop;

    if (offset <= threshold) {
      if (!isLoadMore) {
        dispatch("loadMore");
      }
      isLoadMore = true;
    } else {
      isLoadMore = false;
    }
  };

  onDestroy(() => {
    const element = elementScroll ? elementScroll : component.parentNode;

    element.removeEventListener("scroll", null);
    element.removeEventListener("resize", null);
  });
</script>

<div bind:this={component} style="width:0px" />
