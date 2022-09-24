<script>
  import Character from "./lib/Character.svelte";
  let characters = [];
  let page = 1;

  async function getLoadCharactersAPIClient(){
    const response = await fetch('https://rickandmortyapi.com/api/character?page=' + page);
    const {results} = await response.json()
    characters = results;
  }
  getLoadCharactersAPIClient();

  function nextPage(){
    page++;
    getLoadCharactersAPIClient();
  }

  function previousPage(){
    page--;
    getLoadCharactersAPIClient();
  }
</script>

<main>
  <h1>Rick and Morty Svelte</h1>

  <div>
    <button on:click={previousPage} disabled={page <= 1}>Previous</button>
    <button on:click={nextPage}>Next</button>
  </div>

  {#each characters as character}
    <Character characterDataFromRequest={character}/>
  {/each}
</main>
