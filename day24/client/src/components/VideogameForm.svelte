<script lang="ts">
import axios from "axios";

let name: string = "";
let platform: string = "";
let yearOfRelease: number = 0;
let genre: string = "";
let ratingESRB: string = "";
let goodGame: boolean = false;

async function submitForm() {
    const result = await axios.post("http://localhost:3002/videogame", {
        name: name,
        platform: platform,
        yearOfRelease: yearOfRelease,
        genre: genre,
        ratingESRB: ratingESRB,
        goodGame: goodGame
    })

    console.log(result);
}


</script>

<input bind:value={name} type="text" placeholder="Video Game Name" />
<input bind:value={platform} type="text" placeholder="Platform" />
<input bind:value={yearOfRelease} type="number" placeholder="YYYY" />
<input bind:value={genre} type="text" placeholder="Genre" />
<input bind:value={ratingESRB} type="text" placeholder="ESRB Rating" />
<input bind:value={goodGame} type="boolean" placeholder="Good? true/false" />
<br />
<button on:click={async () => await submitForm()}>Submit</button>