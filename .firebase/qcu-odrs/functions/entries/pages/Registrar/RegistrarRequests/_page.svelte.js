import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { S as SectionWrapper } from "../../../../chunks/SectionWrapper.js";
import { P as PHeader2 } from "../../../../chunks/pHeader2.js";
import { R as RegistrarSidebar } from "../../../../chunks/RegistrarSidebar.js";
import "../../../../chunks/client.js";
const css = {
  code: "th.svelte-1fsjig3{font-weight:400;font-size:15px;padding:10px;color:black\r\n\r\n}td.svelte-1fsjig3{color:black\r\n}",
  map: null
};
const RegistrarRequests = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(PHeader2, "Header").$$render($$result, {}, {}, {})} <div class="flex flex-row gap-5 mx-auto w-full">${validate_component(RegistrarSidebar, "Sidebar").$$render($$result, {}, {}, {})} <div class="flex flex-col flex-1 mx-auto w-full"><h1 class="pl-0 text-[30px] text-black font-bold" data-svelte-h="svelte-1ofs1m9">REQUESTS</h1> <div class="overflow-x-auto"><table class="table"> <thead data-svelte-h="svelte-1wb92t2"><tr><th class="svelte-1fsjig3"></th> <th class="svelte-1fsjig3">Transaction Number</th> <th class="svelte-1fsjig3">Document Requested</th> <th class="svelte-1fsjig3">Date</th> <th class="svelte-1fsjig3">Status</th></tr></thead>   <tbody data-svelte-h="svelte-55gmny"> <tr class="hover:bg-blue-700"><th class="svelte-1fsjig3">1</th> <td class="svelte-1fsjig3">10002321</td> <td class="svelte-1fsjig3">Diploma</td> <td class="svelte-1fsjig3">2/10/2024</td> <td class="svelte-1fsjig3">For Validation</td></tr>  <tr class="hover:bg-blue-700"><th class="svelte-1fsjig3">2</th> <td class="svelte-1fsjig3">12022781</td> <td class="svelte-1fsjig3">TOR</td> <td class="svelte-1fsjig3">2/10/2024</td> <td class="svelte-1fsjig3">For Release</td></tr>  <tr class="hover:bg-blue-700"><th class="svelte-1fsjig3">3</th> <td class="svelte-1fsjig3">10092643</td> <td class="svelte-1fsjig3">Diploma</td> <td class="svelte-1fsjig3">2/10/2024</td> <td class="svelte-1fsjig3">Error</td></tr></tbody></table></div></div></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(RegistrarRequests, "RegistrarRequests").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
