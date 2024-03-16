import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, f as each } from "../../../../../chunks/ssr.js";
import { S as SectionWrapper } from "../../../../../chunks/SectionWrapper.js";
import { H as Header } from "../../../../../chunks/Header.js";
import { p as page } from "../../../../../chunks/stores.js";
import { S as StudRFBtn } from "../../../../../chunks/StudRFBtn.js";
import { S as StudDbBtn } from "../../../../../chunks/StudDbBtn.js";
const DocReqFor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const ReqDoc = $page.params.document;
  let req = "";
  if (ReqDoc == "Diploma") {
    req = "Graduated";
  } else if (ReqDoc == "TOR(Undergrad)") {
    req = "Undergrad";
  } else if (ReqDoc == "GradeSlip") {
    req = "YearSem";
  } else if (ReqDoc == "Certification") {
    req = "Certification";
  } else if (ReqDoc == "Authentication") {
    req = "Authentication";
  }
  let yearr = "Select Year";
  let semm = "Select Semester";
  let certt = "Select Certification";
  const Year = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const Sem = ["1st Sem", "2nd Sem"];
  const Cert = [
    "Certification of Excellence",
    "Certification of Honors",
    "Certification of High Honors",
    "Certification of Highest Honors"
  ];
  $$unsubscribe_page();
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(StudDbBtn, "StudDbBtn").$$render($$result, {}, {}, {})} ${validate_component(StudRFBtn, "StudRfBtn").$$render($$result, {}, {}, {})} <main class="flex flex-col items-center mt-5"><div class="card card-compact w-1/3 bg-slate-100 mt-3"><h2 class="card-title bg-slate-900 rounded-md px-5 py-5 text-white glass">Request For ${escape(ReqDoc)}</h2> <form class="card-body px-5 py-10"><div class="form-control" data-svelte-h="svelte-1oow0hf"><label class="label"><span class="label-text">Student ID:</span></label> <input type="number" placeholder="Student ID" class="input input-bordered"></div> <div class="form-control mt-2" data-svelte-h="svelte-1ng4h4z"><label class="label"><span class="label-text">Full Name:</span></label> <input type="text" placeholder="ex: Last Name, First Name Middle Initial" class="input input-bordered"></div> ${req == "Graduated" ? `<div class="form-control mt-2" data-svelte-h="svelte-14zmw70"><label class="label"><span class="label-text">Year Graduated:</span></label> <input type="number" placeholder="ex: 2020" class="input input-bordered"></div>` : ``} ${req == "Undergrad" ? `<div class="form-control mt-2" data-svelte-h="svelte-1nzly9b"><label class="label"><span class="label-text">Last Academic Year Attended:</span></label> <input type="number" placeholder="ex: 2020" class="input input-bordered"></div>` : ``} ${req == "YearSem" ? `<div class="form-control mt-2 flex flex-row w-full gap-2"><div class="dropdown dropdown-top w-1/2"> <label class="label" data-svelte-h="svelte-9cwgww"><span class="label-text">Year:</span></label> <div tabindex="0" role="button" class="btn w-full">${escape(yearr)}</div>  <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">${each(Year, (item) => {
        return `<li><a>${escape(item)}</a></li>`;
      })}</ul></div> <div class="dropdown dropdown-top w-1/2"> <label class="label" data-svelte-h="svelte-15939l1"><span class="label-text">Semester:</span></label> <div tabindex="0" role="button" class="btn w-full">${escape(semm)}</div>  <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">${each(Sem, (item) => {
        return `<li><a>${escape(item)}</a></li>`;
      })}</ul></div></div>` : ``} ${req == "Certification" ? `<div class="form-control mt-2 flex"><div class="dropdown dropdown-top"> <label class="label" data-svelte-h="svelte-l0buof"><span class="label-text">Certification:</span></label> <div tabindex="0" role="button" class="btn w-full">${escape(certt)}</div>  <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">${each(Cert, (item) => {
        return `<li><a>${escape(item)}</a></li>`;
      })}</ul></div></div>` : ``} ${req == "Authentication" ? `` : ``} <div class="form-control mt-2 flex flex-row gap-2"><label class="label cursor-pointer gap-5"><input type="radio" name="radio-10" class="radio checked:bg-blue-500" required checked value="0"${""}> <span class="label-text" data-svelte-h="svelte-jyrka">Soft Copy</span></label> <label class="label cursor-pointer gap-5"><input type="radio" name="radio-10" class="radio checked:bg-green-500" required checked value="1"${""}> <span class="label-text" data-svelte-h="svelte-1l44du5">Hard Copy</span></label></div> <div class="form-control my-5 items-end" data-svelte-h="svelte-151ql83"><button class="btn bg-blue-900 w-60 text-white hover:text-black text-xl glass">Submit</button></div></form></div></main>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(DocReqFor, "DocReqFor").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
