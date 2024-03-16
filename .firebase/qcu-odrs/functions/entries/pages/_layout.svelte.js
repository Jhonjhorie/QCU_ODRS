import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/auth";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="flex px-4 py-1 bg-white drop-shadow-md fixed bottom-0 w-full" data-svelte-h="svelte-hjakt7"><div class="h-[0.4px] bg-slate-400"></div> <p class="text-sm ">© 2024 Quezon City University</p></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
