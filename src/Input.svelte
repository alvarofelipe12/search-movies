<script>
  import Movie from "./Movie.svelte";

  let value = "";
  let response = [];
  let loading = false;
  const handleInput = (event) => (value = event.target.value);

  $: if (value.length > 2) {
    loading = true;
    fetch(`https://www.omdbapi.com/?s=${value}&apikey=daa402f6`)
      .then((res) => res.json())
      .then((apiResponse) => {
        // if apiResponse has Search field is assigned, else throws an empty array
        response = apiResponse.Search || [];
        console.log(apiResponse);
        loading = false;
      });
  }
</script>

<input
  type="text"
  {value}
  on:input={handleInput}
  placeholder="Search movies..."
/>
{#if loading}
  <strong>Loading...</strong>
{:else}
  {#each response as { Title, Poster, Year }, index}
    <Movie
      index={index}
      title={Title}
      poster={Poster}
      year={Year}
    />
  {:else}
    <strong>We don't have movies</strong>
  {/each}
{/if}
