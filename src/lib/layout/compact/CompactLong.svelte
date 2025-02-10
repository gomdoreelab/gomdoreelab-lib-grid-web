<script>
	import { Layout, LayoutMain } from 'gomdoreelab-lib-material-web';
	import '../../css/typography.css';

	let {
		// Slots
		_header,
		_body,
		// And others
		...props
	} = $props();

	let innerHeight = $state(0);
</script>

<svelte:window bind:innerHeight />

<Layout style="font-family: var(--gl-font-family-plain); height: {innerHeight}px;" {...props}>
	{@render _header?.()}

	<LayoutMain id="compact">
		<main>
			{@render _body?.()}
		</main>
	</LayoutMain>
</Layout>
