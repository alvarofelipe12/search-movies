<script>
    export let name = undefined;
    export let initialCounter = undefined;
    export let counter = 0;
    counter = initialCounter;
    export let maxCounter = 9;

    function handleClick() {
        name = "other name";
    }

    function counterHandleClick() {
        counter++;
    }

    $: isEvenOrOdd = counter % 2 === 0 ? "Is even" : "Is odd";
    $: if (counter > maxCounter) {
        if (counter > 9) {
            counter = 9;
        }
    }
</script>

<main>
    <button on:click={handleClick}>Change name</button>
    <h1>Hello {name}!</h1>
    <p>
        Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
        how to build Svelte apps.
    </p>
    <button on:click={counterHandleClick}>Increment</button>
    <span>{counter}</span>
    <span>{isEvenOrOdd}</span>
    <span>{counter % 2 === 0 ? "Is even" : "Is odd"}</span>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    span {
        color: red;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
