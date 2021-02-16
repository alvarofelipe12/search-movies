<script>
    let value = "";
    let response = [];
    let loading = false;
    const handleInput = (event) => (value = event.target.value);

    $: if (value.length > 2) {
        loading = true;
        fetch(`https://www.omdbapi.com/?s=${value}&apikey=daa402f6`)
            .then((res) => res.json())
            .then((apiResponse) => {
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
{:else if response.length > 0}
    <strong>We have {response.length} movies</strong>
{:else}
    <strong>We don't have movies</strong>
{/if}
