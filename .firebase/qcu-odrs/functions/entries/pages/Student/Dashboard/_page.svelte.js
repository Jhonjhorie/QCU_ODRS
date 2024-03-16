import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../../chunks/ssr.js";
import { S as SectionWrapper } from "../../../../chunks/SectionWrapper.js";
import { H as Header } from "../../../../chunks/Header.js";
import "../../../../chunks/client.js";
import { S as StudRFBtn } from "../../../../chunks/StudRFBtn.js";
const StudDashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let docsStatus = [
    {
      tnum: 109098284,
      name: "TOR / Diploma",
      status: 0
    },
    {
      tnum: 219098284,
      name: "TOR / Diploma",
      status: 0
    },
    {
      tnum: 119098284,
      name: "Grade Slip",
      status: 1
    },
    {
      tnum: 519098284,
      name: "Other Certifications",
      status: 1
    },
    {
      tnum: 329098284,
      name: "Authentication",
      status: 2
    }
  ];
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(StudRFBtn, "StudRfBtn").$$render($$result, {}, {}, {})} <main class="flex flex-col items-center mt-5"><div class="card card-compact w-3/4 shadow-xl items-center bg-white"><h2 class="card-title text-4xl w-full bg-slate-700 rounded-t-xl p-5 text-white glass" data-svelte-h="svelte-f12bqc">DASHBOARD</h2> <div class="px-2 pb-3 overflow-x-auto w-full"><table class="table"> <thead><tr><th></th> <th data-svelte-h="svelte-1j6jr3i">Transaction Number</th> <th data-svelte-h="svelte-1bjqbn5">Document</th> <th data-svelte-h="svelte-1sjfdhb">Status</th></tr></thead> <tbody> ${each(docsStatus, (doc, index) => {
        return `<tr class="hover:bg-slate-200"><td class="font-bold">${escape(index + 1)}</td> <td>${escape(doc.tnum)}</td> <td class="font-bold">${escape(doc.name)}</td> <td>${doc.status == 2 ? `<ul class="steps w-full" data-svelte-h="svelte-176wx7r"><li class="step step-success"></li> <li class="step step-success"></li> <li class="step step-success font-bold">Completed</li> </ul>` : `${doc.status == 1 ? `<ul class="steps w-full" data-svelte-h="svelte-7lf2fc"><li class="step step-warning"></li> <li class="step step-warning font-bold">Claiming</li> <li class="step"></li> </ul>` : `<ul class="steps w-full" data-svelte-h="svelte-5ucrk6"><li class="step step-info font-bold">Confirmation</li> <li class="step"></li> <li class="step"></li> </ul>`}`}</td> </tr>`;
      })}</tbody></table></div></div></main>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(StudDashboard, "Dashboard").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
