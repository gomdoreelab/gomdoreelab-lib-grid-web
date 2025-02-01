<script>
	import { Layout, LayoutItem, LayoutMain } from 'gomdoreelab-lib-material-web';
	import '../../css/typography.css';

	let {
		// Slots
		_header,
		_body,
		_complement,
		_footer,
		// And others
		...props
	} = $props();

	let innerHeight = $state(0);
	let innerWidth = $state(0);
	let width = $derived(innerWidth / 2);
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<Layout style="font-family: var(--gl-font-family-plain); height: {innerHeight}px;" {...props}>
	{@render _header?.()}

	<LayoutMain id="medium" style="width: {width}px;">
		<main>
			{@render _body?.()}
		</main>
	</LayoutMain>

	<LayoutItem
		placement="right"
		style="height: calc(100% - 64px - 80px); width: {width}px; overflow: auto;"
	>
		<complement>
			{@render _complement?.()}
		</complement>
	</LayoutItem>

	{@render _footer?.()}
</Layout>
