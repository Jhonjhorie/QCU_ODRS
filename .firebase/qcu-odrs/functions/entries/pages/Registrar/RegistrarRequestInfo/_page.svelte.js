import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { P as PHeader2 } from "../../../../chunks/pHeader2.js";
import "../../../../chunks/client.js";
import { S as SectionWrapper } from "../../../../chunks/SectionWrapper.js";
const RegistrarRequestsInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let status = "select";
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(PHeader2, "Header").$$render($$result, {}, {}, {})} <div class="px-60 pt-5"><div class="bg-base-300"><h1 class="p-5 font-bold" data-svelte-h="svelte-es4b60">REQUEST FOR DIPLOMA</h1> <div class="flex justify-center bg-slate-200 "><div class="flex flex-col"><h1 class="p-1 pt-2 font-bold" data-svelte-h="svelte-1244ul8">SOFT COPY</h1> <div class="flex flex-row gap-20" data-svelte-h="svelte-9yqt84"><label class="form-control w-full max-w-xs "><div class="label"><span class="label-text">Student Id</span></div> <input type="text" placeholder="21-2017" class="input input-bordered w-full max-w-xs " disabled></label> <label class="form-control w-full max-w-xs "><div class="label"><span class="label-text">Full Name</span></div> <input type="text" placeholder="Quiling, Jhon Jhorie A." class="input input-bordered w-full max-w-xs text-gray-50 " disabled></label></div> <div class="flex flex-row gap-20" data-svelte-h="svelte-83j3g2"><label class="form-control w-full max-w-xs "><div class="label"><span class="label-text">Year Graduated</span></div> <input type="text" placeholder="2025" class="input input-bordered w-full max-w-xs " disabled></label> <label class="form-control w-full max-w-xs "><div class="label"><span class="label-text">Request</span></div> <input type="text" placeholder="Diploma" class="input input-bordered w-full max-w-xs text-gray-50 " disabled></label></div> <hr> <div class="flex flex-row gap-20"><label class="form-control w-full max-w-xs " data-svelte-h="svelte-ny1imc"><div class="label"><span class="label-text">Upload Document</span></div> <input type="file" class="file-input file-input-bordered w-full max-w-xs"></label>  <label class="form-control w-full max-w-xs "><div class="label" data-svelte-h="svelte-1tjchx3"><span class="label-text">Select Status</span></div> <details class="dropdown"><summary class="m-1 btn btn-wide ">${escape(status)}</summary> <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"> <li><a data-svelte-h="svelte-acb96h">Complete</a></li>  <li><a data-svelte-h="svelte-1zxos9">Pending</a></li>  <li><a data-svelte-h="svelte-k6hd">Error</a></li></ul></details></label></div> <div class="flex flex-row gap-20 py-5 justify-center"><button class="btn hover" data-svelte-h="svelte-fmdc9o">Submit</button> <button class="btn hover" data-svelte-h="svelte-1xem2hi">Cancel</button></div></div></div></div></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(RegistrarRequestsInfo, "RegistrarRequestsInfo").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
