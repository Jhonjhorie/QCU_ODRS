import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/ssr.js";
import { S as SectionWrapper } from "../../../../chunks/SectionWrapper.js";
import "../../../../chunks/client.js";
import { H as Header } from "../../../../chunks/Header.js";
import { S as StudDbBtn } from "../../../../chunks/StudDbBtn.js";
const Account = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "jolina@gmail.com";
  let ln = "Salan";
  let fn = "Jolina";
  let mn = "Flores";
  let addr = "RD. 5 Bagong Silangan Quezon City";
  let phn = "09123456789";
  let stdn = "21-1946";
  let prog = "Bachelor of Science in Information Technology";
  let status = "Student";
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(StudDbBtn, "StudDbBtn").$$render($$result, {}, {}, {})} <main class="flex flex-col items-center mt-5"><div class="card card-compact justify-center w-3/4 bg-slate-100 mt-3 "><div class="bg-slate-900 rounded-md px-5 py-5 text-white glass w-full flex flex-row items-center justify-between" data-svelte-h="svelte-1ke4mi6"><h2 class="card-title">ACCOUNT</h2> <div class="btn btn-success glass text-white"><box-icon name="edit" type="solid" color="#ffffff"></box-icon>
                Edit Profile</div></div> <div class="flex flex-row py-5 px-10 shadow-2xl rounded-2xl"><div class="flex flex-col gap-1 w-full"><div class="form-control"> <label class="label" data-svelte-h="svelte-49x5vf"><span class="label-text font-semibold">Last Name:</span></label> <input type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5 " disabled${add_attribute("value", ln, 0)}></div> <div class="form-control"> <label class="label" data-svelte-h="svelte-a2wjch"><span class="label-text font-semibold">First Name:</span></label> <input type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5 " disabled${add_attribute("value", fn, 0)}></div> <div class="form-control"> <label class="label" data-svelte-h="svelte-1go6qig"><span class="label-text font-semibold">Middle Name:</span></label> <input type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5 " disabled${add_attribute("value", mn, 0)}></div> <div class="form-control"> <label class="label" data-svelte-h="svelte-m68y2g"><span class="label-text font-semibold">Address:</span></label> <input type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5 " disabled${add_attribute("value", addr, 0)}></div> <div class="form-control"> <label class="label" data-svelte-h="svelte-xbtoeh"><span class="label-text font-semibold">Phone Number:</span></label> <input type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5 " disabled${add_attribute("value", phn, 0)}></div></div> <div class="flex flex-col gap-1 w-full"><div class="form-control"> <label class="label" data-svelte-h="svelte-uptpr4"><span class="label-text font-semibold">Email Address:</span></label> <input type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5 " disabled${add_attribute("value", email, 0)}></div> <div class="form-control"> <label class="label" data-svelte-h="svelte-uwk1aj"><span class="label-text font-semibold">Student:</span></label> <input type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5 " disabled${add_attribute("value", stdn, 0)}></div> <div class="form-control"> <label class="label" data-svelte-h="svelte-1g3x51c"><span class="label-text font-semibold">Status:</span></label> <input type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5 " disabled${add_attribute("value", status, 0)}></div> <div class="flex flex-col gap-1 w-full"><div class="form-control"> <label class="label" data-svelte-h="svelte-1oy9obs"><span class="label-text font-semibold">Program:</span></label> <input type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5 " disabled${add_attribute("value", prog, 0)}></div></div></div></div></div></main>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(Account, "Acc").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
