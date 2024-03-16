import { c as create_ssr_component } from "./ssr.js";
const SectionWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="min-h-screen flex flex-col bg-slate-300 pb-12"><div class="flex flex-col flex-1 mx-auto w-full">${slots.default ? slots.default({}) : ``}</div></section>`;
});
export {
  SectionWrapper as S
};
