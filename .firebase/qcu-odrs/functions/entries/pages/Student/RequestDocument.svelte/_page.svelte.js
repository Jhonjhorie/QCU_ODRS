import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { S as SectionWrapper } from "../../../../chunks/SectionWrapper.js";
import { H as Header } from "../../../../chunks/Header.js";
const RequestDoc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="flex flex-col items-center mt-5" data-svelte-h="svelte-1vd8z31"></main>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(RequestDoc, "RequestDoc").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
