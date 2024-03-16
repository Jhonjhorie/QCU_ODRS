import { c as create_ssr_component } from "./ssr.js";
import "./client.js";
const StudRFBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="btn btn-success glass text-black absolute right-10 top-1/3 flex flex-col h-20" data-svelte-h="svelte-y64hvs"><box-icon name="notepad"></box-icon>
    Request</div>`;
});
export {
  StudRFBtn as S
};
