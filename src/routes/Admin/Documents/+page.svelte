<script>
  import PHeader from '../../../components/Admin/pHeader2.svelte';
  import Psidebar from '../../../components/Admin/psidebar.svelte';
  import { db } from "$lib/firebase/firebase";
  import { collection, getDocs, deleteDoc, doc }  from "firebase/firestore"; 
  import { onMount } from 'svelte';
  import { goto } from "$app/navigation";

    function gotoAdds (){
              goto('/Admin/AddDocs')
    }
    function gotoEdit (){
              goto('/Admin/Edit')
    }

    /**
   * @type {any[]}
   */
    let documents = [];
    let deleting = false;
    let documentToDelete = null;

    const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, 'document'));
    documents = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    };

    // @ts-ignore
    const deleteDocument = async (id) => {
    deleting = true;
    try {
      await deleteDoc(doc(db, 'document', id));
      documents = documents.filter(document => document.id !== id);
      console.log('Document Deleted!');
    } catch (error) {
      console.error("Error deleting document: ", error);
    } finally {
      deleting = false; 
      documentToDelete = null;
    }
   };




    onMount(fetchData);
</script>
<style>
    td {
        color: black;
        font-weight: 500;
    }
    th {
        font-size: 15px;
    }
</style>

<div class="h-[105vh] w-full bg-slate-300">
    <PHeader/>
    <Psidebar/>
  
    <div class="ml-[300px] p-5 ">
      <h1 class="pl-0 text-[30px] text-black font-bold">MANAGE DOCUMENT</h1>

        <div class="pt-2 pb-3">
          <button on:click={gotoAdds} class="btn w-[200px] bg-slate-900 hover:bg-slate-800 text-slate-200">ADD DOCUMENT</button>
        </div>

     
        <div class="w-[100%] h-[65vh] bg-slate-100 shadow-md rounded-md ">
          <div class="overflow-x-auto">
            <table class="table">
              <!-- head -->
            <thead class="sticky top-0 bg-slate-900">
              <tr>
                <th class="text-white font-light">Documents</th>
                <th class="text-white font-light">Requirement</th>
                <th class="text-white font-light">Price</th>
                <th class="text-white font-light w-52  ">Manage</th>
              </tr>
            </thead>
            <tbody>
              {#each documents as document}
                <tr>
                  <td>{document.doc_ID}</td>
                  <td>{document.requirements}</td>
                  <td>{document.price}</td>
                  <td><button class="hover:text-slate-100 hover:bg-green-600 p-1 px-2 rounded-sm duration-200 shadow-md ">Edit</button>
                    {#if deleting}
                      <span>Loading...</span>
                     {:else}
                    <button on:click={() => deleteDocument(document.id)} class="hover:text-slate-100 hover:bg-red-600 p-1 px-2 rounded-sm duration-200 shadow-md ">
                      Delete
                    </button>
                     {/if}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
      </div>
     

</div>