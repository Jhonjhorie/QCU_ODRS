import { c as create_ssr_component } from "./ssr.js";
const PHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="z-20 top-0 bg-[#E8E8E8] h-[120px] border-b-[10px] border-[#000450] shadow-lg " data-svelte-h="svelte-18gf8xy"><div class="flex "><img src="/QCULOGO.png" alt="logo" class="h-[80px] w-[80px] ml-10 mt-5"> <div class="ml-5"><h1 class="text-[30px] mt-6 mb-[-30px] font-semibold text-black">Quezon City University </h1><br> <span class="italic font-medium text-[18px] text-black">Good Life Starts Here!</span></div></div></header>`;
});
export {
  PHeader as P
};
