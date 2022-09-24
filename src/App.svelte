<script>
  import Character from "./lib/Character.svelte";
  let characters = [];
  let page = 1;

  async function getLoadCharactersAPIClient(){
    const response = await fetch('https://rickandmortyapi.com/api/character?page=' + page);
    const {results} = await response.json()
    characters = results;

    console.log(characters)
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

<main class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Team</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div class="flex justify-between mb-4">
      <button on:click={previousPage} disabled={page <= 1} class="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
        Prev
      </button>
      <button on:click={nextPage} class="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
        Next
      </button>
    </div>
    <div class="flex flex-wrap -m-2">
      {#each characters as character}
          <Character characterDataFromRequest={character}/>
        {/each}
    </div>
  </div>
</main>