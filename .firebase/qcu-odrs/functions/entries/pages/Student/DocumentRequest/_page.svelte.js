import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../../chunks/ssr.js";
import { S as SectionWrapper } from "../../../../chunks/SectionWrapper.js";
import { H as Header } from "../../../../chunks/Header.js";
import "../../../../chunks/client.js";
import { S as StudDbBtn } from "../../../../chunks/StudDbBtn.js";
const DocReq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let docs = [
    {
      id: "Diploma",
      name: "TOR / Diploma",
      req: "Graduated and Complete Address"
    },
    {
      id: "TOR(Undergrad)",
      name: "TOR (Under Graduate)",
      req: "Last Academic Year Attended and Complete Address"
    },
    {
      id: "GradeSlip",
      name: "Grade Slip",
      req: "Academic Year and Semester"
    },
    {
      id: "Certification",
      name: "Other Certifications",
      req: "Office requesting the document (e.g., DSWD, CHED)"
    },
    {
      id: "Authentication",
      name: "Authentication / Certified True Copy",
      req: "Clear copy of the Document and bring the Original Copy upon Claiming"
    }
  ];
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(StudDbBtn, "StudDbBtn").$$render($$result, {}, {}, {})} <main class="flex flex-col items-center mt-5"><div class="card w-3/4 h-28 shadow-xl image-full" data-svelte-h="svelte-k2b6sw"><figure><img src="/QCU-Build.png" class="w-full h-full"></figure> <div class="card-body flex justify-center items-center"><h1 class="card-title text-5xl font-light italic">ONLINE DOCUMENT REQUEST SYSTEM</h1></div></div> <div class="card card-compact w-3/4 bg-slate-100 mt-3"><h2 class="card-title bg-slate-900 rounded-md p-2 text-white glass" data-svelte-h="svelte-1p7zwgx">AVAILABLE DOCUMENTS</h2> <div class="overflow-x-auto pb-3"><table class="table"> <thead data-svelte-h="svelte-m9p98h"><tr><th>Document</th> <th>Requirement</th></tr></thead> <tbody> ${each(docs, (doc) => {
        return `<tr class="hover:bg-slate-200"><td>${escape(doc.name)}</td> <td>${escape(doc.req)}</td> <button class="btn btn-success my-2 glass text-black" data-svelte-h="svelte-1wsoa8q"><box-icon name="mail-send"></box-icon>
                          Request</button> </tr>`;
      })}</tbody></table></div></div></main>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(DocReq, "DocReq").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
