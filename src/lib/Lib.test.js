import { render } from "@testing-library/svelte";

import SvelteInfiniteScroll from "./InfiniteScroll.svelte";

test("shows proper heading when rendered", () => {
  const { container } = render(SvelteInfiniteScroll);

  expect(container.firstChild).not.toBe(null);
});
