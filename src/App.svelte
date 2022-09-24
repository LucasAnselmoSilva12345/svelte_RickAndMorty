<script>

  let characters = [];

  async function getLoadCharactersAPIClient(){
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const {results} = await response.json()
    characters = results;
  }

  getLoadCharactersAPIClient();
</script>

<main>
  <h1>Rick and Morty Svelte</h1>

  <div>
    <button>Previous</button>
    <button>Next</button>
  </div>

  {#each characters as character}
    <div>
      <img src={character.image} alt={character.name}>
      <h2>{character.name}</h2>
      <h3>{character.species}</h3>
    </div>
  {/each}
</main>
