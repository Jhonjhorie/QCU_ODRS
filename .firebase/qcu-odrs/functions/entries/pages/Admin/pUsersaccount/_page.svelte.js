import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { P as PHeader2 } from "../../../../chunks/pHeader2.js";
import { P as Psidebar } from "../../../../chunks/psidebar.js";
import { P as PBoxesaccounts } from "../../../../chunks/pBoxesaccounts.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-[105vh] w-full bg-slate-300">${validate_component(PHeader2, "PHeader").$$render($$result, {}, {}, {})} ${validate_component(Psidebar, "Psidebar").$$render($$result, {}, {}, {})} <div class="ml-[300px] p-5 "><h1 class="pl-0 text-[30px] text-black font-bold" data-svelte-h="svelte-f8umek">MANAGE ACCOUNTS <span class="float-end text-[20px] text-slate-600">USERS&#39; ACCOUNT</span></h1>  <div class="h-[200px] w-[200] flex gap-x-5">${validate_component(PBoxesaccounts, "PBoxesaccounts").$$render($$result, {}, {}, {})}  <div class="h-[70vh] w-[80%] bg-slate-100 mt-3 rounded-md shadow-md p-5 flex " data-svelte-h="svelte-117tjiz"><div class="overflow-x-auto w-[200%]"><table class="table "> <thead class="top-0 sticky bg-slate-900 z-30"><tr><th class="text-slate-200 text-[15px]">FULL NAME</th> <th class="text-slate-200 text-[15px]">COURSE</th> <th class="text-slate-200 text-[15px]">STUDENT ID</th></tr></thead> <tbody> <tr><td><div class="flex items-center gap-3"><div class="avatar"><div class="w-12 h-12"><img src="/jelly-avatar-icon.png" alt=""></div></div> <div><div class="font-medium text-black">Hart Hagerty</div></div></div></td> <td><span class="badge badge-ghost bg-slate-600 text-white badge-sm h-7">ENTREP</span></td> <td class="text-black">20-2020</td></tr>  <tr><td><div class="flex items-center gap-3"><div class="avatar"><div class="w-12 h-12"><img src="/jelly-avatar-icon.png" alt=""></div></div> <div><div class="text font-medium text-black">Liz cute</div></div></div></td> <td><span class="badge badge-ghost bg-slate-600 text-white badge-sm h-7">BSIT</span></td> <td class="text-black">19-2012</td></tr>  <tr><td><div class="flex items-center gap-3"><div class="avatar"><div class="w-12 h-12"><img src="/jelly-avatar-icon.png" alt=""></div></div> <div><div class="font-medium text-black">BABY CALMA JR.</div></div></div></td> <td><span class="badge badge-ghost bg-slate-600 text-white badge-sm h-7">BSA</span></td> <td class="text-black">19-1025</td></tr> </tbody> </table></div></div></div></div></div>`;
});
export {
  Page as default
};
