<script>
	import { Layout, LayoutItem, LayoutMain, getResizeObserver } from 'gomdoreelab-lib-material-web';
	import '../../css/typography.css';
	import { onDestroy, onMount } from 'svelte';

	let {
		// Properties
		placement = 'left',
		// Slots
		_header,
		_body,
		_complement,
		_rail,
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

	<LayoutMain id="expanded">
		<main>
			{@render _body?.()}
		</main>
	</LayoutMain>

	<LayoutItem
		{placement}
		style="height: calc(100% - 64px); width: 360px; overflow: auto;"
		order={3}
	>
		<complement>
			{@render _complement?.()}
		</complement>
	</LayoutItem>

	{@render _rail?.()}
</Layout>
