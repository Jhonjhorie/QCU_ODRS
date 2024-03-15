<script>
  import { goto } from "$app/navigation";

    goto
</script>

<div class="btn btn-info glass text-black absolute left-10 top-1/3 flex flex-col h-20" on:click={() => goto(`/Student/Dashboard`)}>
     
    <box-icon name='dashboard' type='solid' ></box-icon>
    Dashboard
  </div>