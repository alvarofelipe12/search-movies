import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
        initialCounter: 5
	}
});

export default app;