<script>
	import { onMount } from 'svelte';
	import { getResizeObserver } from 'gomdoreelab-lib-material-web';
	import '$lib/css/typography.css';

	let {
		footerType = 'appbar', // "appbar" | 'navagation'
		// Slots
		_header,
		_body,
		_footer
	} = $props();

	onMount(() => {
		const header = document.querySelector('mdui-top-app-bar');
		const body = document.querySelector('.compact > .body');
		const footer =
			footerType === 'appbar'
				? document.querySelector('mdui-bottom-app-bar')
				: document.querySelector('mdui-navigation-bar');

		getResizeObserver(header, (entry) => {
			const headerHeight = entry.borderBoxSize[0].blockSize ?? '64px';
			const footerHeight = footer.clientHeight;
			const innerHeight = window.innerHeight;

			body.style.height = `${innerHeight - headerHeight - footerHeight}px`;
			body.style.paddingTop = `${headerHeight}px`;
		});
	});
</script>

<div class="compact">
	<section class="header">
		{@render _header?.()}
	</section>

	<section class="body">
		{@render _body?.()}
	</section>

	<section class="footer">
		{@render _footer?.()}
	</section>
</div>

<style>
	.compact {
		display: flex;
		flex-direction: column;
		font-family: var(--gl-font-family-plain);
	}

	.body {
		overflow-y: scroll;
	}
</style>
