<script>
    let showModal = false;
  
    function closeModal() {
      showModal = false;
    }
  
    function confirmDelete() {
      deleteDocument(); // Call delete function when confirmed
      closeModal(); // Close the modal
    }
  </script>
  
  {#if showModal}
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-5 rounded-md shadow-md">
        <p class="text-lg font-semibold mb-4">Are you sure you want to delete this data?</p>
        <div class="flex justify-between">
          <button class="bg-red-500 text-white px-4 py-2 rounded-md mr-2" on:click={confirmDelete}>Delete</button>
          <button class="bg-gray-300 text-gray-800 px-4 py-2 rounded-md" on:click={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  {/if}