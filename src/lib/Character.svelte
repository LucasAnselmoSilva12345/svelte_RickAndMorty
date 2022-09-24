<script>
  export let characterDataFromRequest; // this variable receive the "export" value  then yours values comes from another file
</script>

<div>
  <img src={characterDataFromRequest.image} alt={characterDataFromRequest.name}>
  <h2>{characterDataFromRequest.name}</h2>
  <h3>{characterDataFromRequest.species}</h3>
</div>