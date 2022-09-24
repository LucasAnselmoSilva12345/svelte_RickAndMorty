<script>
  export let characterDataFromRequest; // this variable receive the "export" value  then yours values comes from another file
</script>

<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
  <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
    <img class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={characterDataFromRequest.image} alt={characterDataFromRequest.name}>
    <div class="flex-grow">
      <h2 class="text-white title-font font-medium">{characterDataFromRequest.name}</h2>
      <p class="text-gray-600">{characterDataFromRequest.species}</p>
    </div>
  </div>
</div>