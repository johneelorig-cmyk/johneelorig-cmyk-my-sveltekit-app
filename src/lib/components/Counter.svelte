<script>
	let { count = 0 } = $props();
	
	function increment() {
		count += 1;
	}
	
	function decrement() {
		count -= 1;
	}
	
	function reset() {
		count = 0;
	}
</script>

<div class="counter">
	<h2>Counter: {count}</h2>
	<div class="buttons">
		<button onclick={decrement}>-</button>
		<button onclick={reset}>Reset</button>
		<button onclick={increment}>+</button>
	</div>
</div>

<style>
	.counter {
		text-align: center;
		padding: 2rem;
	}
	
	.buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-top: 1rem;
	}
	
	button {
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
	}
</style>
