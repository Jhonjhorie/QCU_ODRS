<script>
  import { goto } from "$app/navigation";

</script>

<div class="hidden sm:flex btn btn-success glass text-black absolute right-10 top-1/3 flex-col h-20" on:click={() => goto(`/Student/DocumentRequest`)}>
     
    <box-icon name='notepad' ></box-icon>
    Request
  </div>