<script>
	import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';
	import { Theme } from '$lib/function/theme.js';
	import { onMount } from 'svelte';

	let document;
	let compact;

	// Theme
	const theme = new Theme('#0099ff');

	let height = $state(0);
	let {
		// Properties
		header = 'small',
		// theme = 'light',
		// Slots
		slotHeader,
		slotBody,
		slotBottom
	} = $props();
	let headerHeight = 0;

	switch (header) {
		case 'small':
			headerHeight = '64';

			break;

		default:
			break;
	}

	onMount(() => {
		theme.apply();
	});

	$effect(() => {
		if (!document.adoptedStyleSheets.includes(typescaleStyles.styleSheet)) {
			document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
		}

		compact.style.setProperty(
			'grid-template-rows',
			`${headerHeight}px ${height - 80 - headerHeight}px 80px`
		);
	});
</script>

<svelte:document bind:this={document} />
<svelte:window bind:innerHeight={height} />

<div class={`layout`} bind:this={compact}>
	<section class="header">
		{@render slotHeader?.()}
	</section>
	<section class="body">
		{@render slotBody?.()}
	</section>
	<section class="bottom">
		{@render slotBottom?.()}
	</section>
</div>

<style>
	:root {
		--compact-side-margin: 16px;
	}

	.layout {
		display: grid;
		height: 100vh;
	}

	.body {
		height: 100%;
		overflow-y: scroll;
	}
</style>
