<script>
	import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

	let document;
	let compact;
	let height = $state(0);
	let {
		// Properties
		header = 'small',
		theme = 'light',
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

<div class={`layout ${theme}`} bind:this={compact}>
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
	@import '$lib/css/light.css';
	@import '$lib/css/light-mc.css';
	@import '$lib/css/light-hc.css';
	@import '$lib/css/dark.css';
	@import '$lib/css/dark-mc.css';
	@import '$lib/css/dark-hc.css';

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
