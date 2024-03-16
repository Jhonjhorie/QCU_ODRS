import { c as create_ssr_component, o as onDestroy, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { P as PHeader2 } from "../../../../chunks/pHeader2.js";
import { P as Psidebar } from "../../../../chunks/psidebar.js";
const PLivetime = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentDate = /* @__PURE__ */ new Date();
  let currentTime = /* @__PURE__ */ new Date();
  let currentYear = /* @__PURE__ */ new Date();
  const updateTime = () => {
    currentTime = /* @__PURE__ */ new Date();
  };
  const interval = setInterval(updateTime, 1e3);
  onDestroy(() => {
    clearInterval(interval);
  });
  return `<div class="text-[90px] text-black font-bold text-center">${escape(currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))}</div> <div class="text-[30px] text-black font-semibold text-center">${escape(currentDate.toLocaleDateString([], {
    month: "long",
    day: "numeric",
    year: "numeric"
  }))}</div> <div class="text-[30px] text-black font-semibold text-center">${escape(currentYear.toLocaleDateString([], { weekday: "long" }))}</div> <div class="flex gap-10 text-center mx-auto p-5 justify-center pt-10" data-svelte-h="svelte-3oflbg"><div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg"><h1 class="text-[#101010c4] font-semibold text-[100px]">34</h1> <h2 class="text-black font-bold text-[20px] ">Total User</h2></div> <div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg"><h1 class="text-[#101010c4] font-semibold text-[100px]">6</h1> <h2 class="text-black font-bold text-[20px] ">Documents</h2></div> <div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg"><h1 class="text-[#101010c4] font-semibold text-[100px]">4</h1> <h2 class="text-black font-bold text-[20px] ">Total Registrar</h2></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-[105vh] w-full bg-slate-300 ">${validate_component(PHeader2, "PHeader").$$render($$result, {}, {}, {})} ${validate_component(Psidebar, "Psidebar").$$render($$result, {}, {}, {})} <div class="ml-[300px] p-5 h-[70vh] "><h1 class="pl-0 text-[30px] text-black font-bold" data-svelte-h="svelte-14xkksl">DASHBOARD</h1> ${validate_component(PLivetime, "Livetime").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
