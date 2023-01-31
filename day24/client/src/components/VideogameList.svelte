<script lang="ts">
import axios from "axios";
  import { onMount } from "svelte";
  
    let videogames = [];
    async function getVideogames() {
        const result = await axios.get("http://localhost:3002/videogame")
    return result.data; // will be an array of the games
    }

    onMount(async function () {
        videogames = await getVideogames();
    })
</script>

{#each videogames as videogame}
{videogame.name}
<br />
{/each}