<script>
  // import Counter from "./Counter.svelte";
  import Input from "./Input.svelte";

  // export let initialCounter;
  // export let name;
  const commonProps = { maxCounter: 5 };
</script>

<!-- <Counter initialCounter={initialCounter} name={name} {... commonProps} />
<Counter {... commonProps} /> -->
<section>
  <h1>Search Movies 🍿</h1>
  <Input />
</section>

<style>
  h1 {
    font-size: 32px;
  }
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
</style>
