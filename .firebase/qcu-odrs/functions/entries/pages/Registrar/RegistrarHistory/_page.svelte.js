import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { S as SectionWrapper } from "../../../../chunks/SectionWrapper.js";
import { P as PHeader2 } from "../../../../chunks/pHeader2.js";
import { R as RegistrarSidebar } from "../../../../chunks/RegistrarSidebar.js";
const css = {
  code: "tr.svelte-1v5hw8l:nth-child(even){background-color:rgba(41, 40, 40, 0.319)}th.svelte-1v5hw8l{font-weight:400;font-size:15px;padding:10px;color:black\r\n\r\n}td.svelte-1v5hw8l{color:black\r\n}",
  map: null
};
const RegistrarHistory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(PHeader2, "Header").$$render($$result, {}, {}, {})} <div class="flex flex-row gap-5 mx-auto w-full">${validate_component(RegistrarSidebar, "Sidebar").$$render($$result, {}, {}, {})} <div class="flex flex-col flex-1 mx-auto w-full" data-svelte-h="svelte-1hc11lo"><h1 class="pl-0 text-[30px] text-black font-bold">HISTORY</h1> <div class="overflow-x-auto"><table class="table "> <thead><tr class="svelte-1v5hw8l"><th class="svelte-1v5hw8l"></th> <th class="svelte-1v5hw8l">Transaction Number</th> <th class="svelte-1v5hw8l">Document Requested</th> <th class="svelte-1v5hw8l">Date</th> <th class="svelte-1v5hw8l">Status</th></tr></thead> <tbody> <tr class="svelte-1v5hw8l"><th class="svelte-1v5hw8l">1</th> <td class="svelte-1v5hw8l">10002321</td> <td class="svelte-1v5hw8l">Diploma</td> <td class="svelte-1v5hw8l">2/10/2024</td> <td class="svelte-1v5hw8l">For Validation</td></tr></tbody></table></div></div></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(RegistrarHistory, "RegistrarHistory").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
