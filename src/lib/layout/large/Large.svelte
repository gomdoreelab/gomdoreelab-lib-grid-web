<script>
	import { Layout, LayoutMain } from 'gomdoreelab-lib-material-web';
	import '../../css/typography.css';
	import { onDestroy, onMount } from 'svelte';

	let {
		// Slots
		_header,
		_body,
		_drawer,
		// And others
		...props
	} = $props();

	let innerHeight = $state(0);
	let innerWidth = $state(0);

	let observer;

	onMount(() => {
		let header = document.querySelector('mdui-top-app-bar');
		let order = header.order;

		if (order > 0) {
			observer = getResizeObserver(document.body, (_entry, _observer) => {
				const left = header.style.left.replace('px', '');
				header.style.width = `${innerWidth - left}px`;
			});
		}
	});

	onDestroy(() => {
		if (observer) observer.unobserve();
	});
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<Layout style="font-family: var(--gl-font-family-plain); height: {innerHeight}px;" {...props}>
	{@render _header?.()}

	<LayoutMain id="large">
		<main>
			{@render _body?.()}
		</main>
	</LayoutMain>

	{@render _drawer?.()}
</Layout>
