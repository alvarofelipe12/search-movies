<script>
    let value = "";
    let response = [];
    const handleInput = (event) => (value = event.target.value);

    $: if (value.length > 2) {
        fetch(`https://www.omdbapi.com/?s=${value}&apikey=daa402f6`)
        .then(res => res.json())
        .then(apiResponse => {
            response = apiResponse.Search;
            console.log(apiResponse);
        });
    }
</script>

<input type="text" {value} on:input={handleInput} />
