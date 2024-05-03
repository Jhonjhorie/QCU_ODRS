<script>
  import Header from "../Header.svelte";
  import SectionWrapper from "../SectionWrapper.svelte";
  import StudDbBtn from "./StudDbBtn.svelte";
  import StudRfBtn from "./StudRFBtn.svelte";

</script>


<SectionWrapper>
    <Header />
    <StudDbBtn />
    <main class="flex flex-col
    items-start sm:px-5 px-1 sm:mt-5 mt-2.5">
    <div class="card card-compact sm:w-[90%] w-full shadow-xl items-start bg-slate-200 ">
    
        <h2 class="card-title text-md sm:text-4xl w-full bg-green-700 sm:rounded-t-xl rounded-t-md glass sm:p-5 p-2 text-white">Tutorial</h2>
        <div role="tablist" class="tabs tabs-lifted w-full  glass max-h-[30rem] sm:max-h-[32rem] overflow-y-auto rounded-b-2xl">

            <input type="radio" name="my_tabs_2" role="tab" class="tab font-semibold text-sm sm:text-md mr-8 sm:mr-10 p-4 hover:bg-green-200" aria-label="Requesting" checked />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 p-6 ">
            <div class="flex flex-col sm:flex-row">
              <div>    
                Only with 4 Steps
                <ul class="steps steps-vertical">
                  
                  <li class="step step-success">
                    <div class="flex flex-row justify-center gap-5 items-center">
                    Click Request Tab
                    <img src="../reqbtn.png" class="h-28 w-28" alt="reqbtn"> 
                    or in header, 
                    <img src="../reqbtn2.png" class="h-28 w-28" alt="reqbtn">
                    </div>
                  </li>
                  <li class="step step-success">
                    <div class="flex flex-row justify-center gap-5 items-center">
                    Select the Document,
                    <img src="../reqDoc.png" class="h-28 w-28" alt="reqbtn"> 
                     in mobile just swipe from the left to the right
                    <img src="../reqDoc2.png" class="h-28 w-28" alt="reqbtn">
                    </div>
                  </li>
                  <li class="step step-success">
                    <div class="flex flex-row justify-center gap-5 items-center">
                      Fill Up the Required Information and Schedule Claiming
                      <img src="../reqValue.png" class="h-24 w-96" alt="reqbtn"> 
                  </li>
                  <li class="step step-success">
                    <div class="flex flex-row justify-center gap-5 items-center">
                      Choose the Mode of Payment
                      <img src="../modeofPay.png" class="h-20 w-96" alt="reqbtn"> 
                  </li>
                  HAHAHAH
                  <li class="step">
                    <div class="flex flex-row justify-center gap-5 items-center">
                      Submit,
                      <img src="../submit.png" class="h-24 w-96" alt="reqbtn"> 
                       or if online, Submit Proof of Payment
                      <img src="../submitonline.png" class="h-40 w-52" alt="reqbtn">
                      </div>
                  </li>
                  <li class="step">Confess your sins and Claim it in the day of judgement!</li>
                </ul>
              </div>
              
            </div>
            </div>
          
            <input type="radio" name="my_tabs_2" role="tab" class="tab font-semibold text-sm sm:text-md mr-8 sm:mr-10 p-4 hover:bg-green-200" aria-label="FAQ" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 p-6">

              <div class="collapse collapse-arrow bg-base-200 ">
                <input type="radio" name="my-accordion-2" /> 
                <div class="collapse-title text-sm sm:text-md font-medium">
                  How do I access the Online Document Requesting System?
                </div>
                <div class="collapse-content  text-xs sm:text-sm"> 
                  <p>To access the system, simply visit our website and log in using your Quezon City University student credentials. Once logged in, you'll be able to navigate through the system and submit your document requests.</p>
                </div>
              </div>

              <div class="collapse collapse-arrow bg-green-200">
                <input type="radio" name="my-accordion-2" /> 
                <div class="collapse-title text-sm sm:text-md  font-medium">
                  What types of documents can I request through this system?
                </div>
                <div class="collapse-content text-xs sm:text-sm"> 
                  <p>You can request a variety of academic documents, including transcripts, certificates, letters, and more. If you're unsure about a specific document, feel free to reach out to our support team for clarification.</p>
                </div>
              </div>

              <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div class="collapse-title text-sm sm:text-md  font-medium">
                  How long does it take for my request to be processed?
                </div>
                <div class="collapse-content text-xs sm:text-sm"> 
                  <p>Processing times may vary depending on the type of document requested and current demand. However, we strive to process requests promptly and efficiently. You can track the progress of your request through the system and will receive notifications regarding its status.</p>
                </div>
              </div>

              <div class="collapse collapse-arrow bg-green-200">
                <input type="radio" name="my-accordion-2" /> 
                <div class="collapse-title text-sm sm:text-md font-medium">
                  Can I cancel or modify my request after submission?
                </div>
                <div class="collapse-content text-xs sm:text-sm"> 
                  <p>Once a request has been submitted, modifications or cancellations may not be possible. However, if you encounter any issues or need to make changes, please contact our support team as soon as possible for assistance.</p>
                </div>
              </div>

              <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div class="collapse-title text-sm sm:text-md font-medium">
                  Is there a fee for using the Online Document Requesting System?
                </div>
                <div class="collapse-content text-xs sm:text-sm"> 
                  <p>There may be nominal fees associated with certain document requests. These fees are outlined during the request submission process. Payment methods will also be provided for your convenience.</p>
                </div>
              </div>

              <div class="collapse collapse-arrow bg-green-200">
                <input type="radio" name="my-accordion-2" /> 
                <div class="collapse-title text-sm sm:text-md font-medium">
                  How will I receive my requested documents?
                </div>
                <div class="collapse-content text-xs sm:text-sm"> 
                  <p>Upon processing completion, you can choose to receive your documents either electronically or physically, depending on the document type and your preference. Electronic documents will be sent to your registered email address, while physical documents can be collected from designated pick-up points or mailed to your provided address.</p>
                </div>
              </div>

              <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div class="collapse-title text-sm sm:text-md  font-medium">
                  Is my personal information secure within the system?
                </div>
                <div class="collapse-content text-xs sm:text-sm"> 
                  <p>Yes, we prioritize the security and confidentiality of your personal information. Our system employs industry-standard security measures to protect your data from unauthorized access or misuse.</p>
                </div>
              </div>

              <div class="collapse collapse-arrow bg-green-200">
                <input type="radio" name="my-accordion-2" /> 
                <div class="collapse-title text-sm sm:text-md  font-medium">
                  What should I do if I encounter technical issues while using the system?
                </div>
                <div class="collapse-content text-xs sm:text-sm"> 
                  <p>If you experience any technical difficulties or have questions about using the system, please don't hesitate to contact our support team for assistance. We're here to help resolve any issues and ensure a smooth user experience.</p>
                </div>
              </div>

              <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div class="collapse-title text-sm sm:text-md  font-medium">
                  Can I request documents on behalf of someone else?
                </div>
                <div class="collapse-content text-xs sm:text-sm"> 
                  <p>In certain cases, you may be authorized to request documents on behalf of another individual, such as a family member or legal guardian. However, you may be required to provide additional documentation or authorization for such requests. Please reach out to our support team for guidance in such situations.</p>
                </div>
              </div>

              <div class="collapse collapse-arrow bg-green-200">
                <input type="radio" name="my-accordion-2" /> 
                <div class="collapse-title text-sm sm:text-md  font-medium">
                  Who can I contact if I have further questions or need assistance?
                </div>
                <div class="collapse-content text-xs sm:text-sm"> 
                  <p>If you have any additional questions or need further assistance, please feel free to reach out to our support team via email, phone, or in-person during designated office hours. We're here to help and ensure that your document requesting experience is as smooth and convenient as possible.</p>
                </div>
              </div>

            </div>
          
            <input type="radio" name="my_tabs_2" role="tab" class="tab font-semibold text-sm sm:text-md mr-8 sm:mr-10 p-4 hover:bg-green-200" aria-label="About" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 p-6 text-justify text-xs sm:text-sm ">
                <b>Welcome to the Online Document Requesting System for Quezon City University!</b>
                <br /> <br />
                As third-year students of Quezon City University, we take great pride in presenting this innovative web-based platform designed to streamline and simplify the process of requesting documents within our academic community.
                <br /> <br />
                Our team of dedicated developers recognized the need for a more efficient and accessible system to manage document requests, whether it be transcripts, certificates, or other essential paperwork. With a deep understanding of the challenges students face in navigating administrative processes, we set out to create a solution that prioritizes user convenience and effectiveness.
                <br /> <br />
                This system is the result of our collective effort to harness technology for the benefit of our fellow students and faculty members. Through extensive research, meticulous planning, and rigorous testing, we have crafted a platform that offers:
                <br /> <br />
                <b>Convenience:</b> Say goodbye to long queues and paperwork. Our online system allows you to submit document requests from anywhere, at any time, using any device with internet access.
                <br /> 
                <b>Efficiency:</b> Experience swift processing times and prompt notifications regarding the status of your request. Our streamlined workflow ensures that your documents reach you in a timely manner.
                <br /> 
                <b>Transparency:</b> Track the progress of your request in real-time and receive updates at every stage of the process. No more guessing games – you'll always know exactly where your request stands.
                <br /> 
                <b>Security:</b> Rest assured that your personal information and documents are handled with the utmost care and confidentiality. Our system employs robust security measures to safeguard your data at every step.
                <br /> <br />
                As fellow students of Quezon City University, we understand the importance of reliable access to academic documents for various purposes, be it scholarship applications, job opportunities, or further education endeavors. With this Online Document Requesting System, we aim to empower our community with a tool that simplifies administrative procedures and enhances the overall academic experience.<br />
                <br />
                Thank you for entrusting us with your document requests. We are committed to continually improving and refining our system to better serve you. Together, let's embrace the future of document management at Quezon City University.
                <br />
            </div>
          </div>

    </div>
    </main>
</SectionWrapper>