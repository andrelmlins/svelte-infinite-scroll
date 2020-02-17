import { render } from "@testing-library/svelte";

import SvelteInfiniteScroll from "./index.svelte";

test("shows proper heading when rendered", () => {
  const { container } = render(SvelteInfiniteScroll);

  expect(container.firstChild).not.toBe(null);
});
