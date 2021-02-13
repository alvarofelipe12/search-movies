<script>
    import Counter from './Counter.svelte'
    export let initialCounter;
    export let name;
</script>

<Counter initialCounter={initialCounter} name={name}/>
<Counter />