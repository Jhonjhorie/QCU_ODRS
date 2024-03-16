import { c as create_ssr_component } from "./ssr.js";
import "./client.js";
const StudDbBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="btn btn-info glass text-black absolute left-10 top-1/3 flex flex-col h-20" data-svelte-h="svelte-1w9pq4k"><box-icon name="dashboard" type="solid"></box-icon>
    Dashboard</div>`;
});
export {
  StudDbBtn as S
};
