import { c as create_ssr_component, o as onDestroy, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { S as SectionWrapper } from "../../../../chunks/SectionWrapper.js";
import { P as PHeader2 } from "../../../../chunks/pHeader2.js";
import { R as RegistrarSidebar } from "../../../../chunks/RegistrarSidebar.js";
const RegistrarDashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(PHeader2, "Header").$$render($$result, {}, {}, {})} <div class="flex flex-row gap-5 mx-auto w-full">${validate_component(RegistrarSidebar, "Sidebar").$$render($$result, {}, {}, {})} <div class="flex flex-col flex-1 mx-auto w-full"><h1 class="pl-0 text-[30px] text-black font-bold" data-svelte-h="svelte-14xkksl">DASHBOARD</h1> <div class="text-[90px] text-black font-bold text-center">${escape(currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))}</div> <div class="text-[30px] text-black font-semibold text-center">${escape(currentDate.toLocaleDateString([], {
        month: "long",
        day: "numeric",
        year: "numeric"
      }))}</div> <div class="text-[30px] text-black font-semibold text-center">${escape(currentYear.toLocaleDateString([], { weekday: "long" }))}</div> <div class="flex flex-row gap-5 mt-5" data-svelte-h="svelte-152i74d"><div class="card w-96 bg-base-100 shadow-xl"><div class="card-body items-center text-center"><h2 class="card-title">Pending Request</h2> <p>10</p></div></div> <div class="card w-96 bg-base-100 shadow-xl"><div class="card-body items-center text-center"><h2 class="card-title">Completed Request</h2> <p>10</p></div></div> <div class="card w-96 bg-base-100 shadow-xl"><div class="card-body items-center text-center"><h2 class="card-title">Scheduled Request</h2> <p>10</p></div></div></div></div></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(RegistrarDashboard, "RegistrarDashboard").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
