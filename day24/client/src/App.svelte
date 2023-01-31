<script lang="ts">
  import VideogameForm from "./components/VideogameForm.svelte";
  import VideogameList from "./components/VideogameList.svelte";

let displayForm: boolean = true;
function changeDisplay() {
displayForm = !displayForm;
}
</script>

<main>
  <button on:click={changeDisplay}>Change Display</button>
{#if displayForm}
  <VideogameForm />
{:else}
<VideogameList />
{/if}
</main>
