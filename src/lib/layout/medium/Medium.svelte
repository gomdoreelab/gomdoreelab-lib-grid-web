<script>
	import { onMount } from 'svelte';
	import { getResizeObserver } from 'gomdoreelab-lib-material-web';

	let {
		// Properties
		order = 'header', // "header" | "rail"
		// Slots
		_header,
		_body,
		_rail
	} = $props();

	onMount(() => {
		const header = document.querySelector('mdui-top-app-bar');
		const body = document.querySelector('.medium > .body');
		const rail = document.querySelector('mdui-navigation-rail');

		if (order === 'header') {
			getResizeObserver(header, (entry) => {
				const height = entry.borderBoxSize[0].blockSize ?? '64px';
				rail.style.top = `${height}px`;
			});
		}

		if (order === 'rail') {
			const width = rail.clientWidth;
			header.style.left = `${width}px`;
		}

		getResizeObserver(header, (entry) => {
			const headerHeight = entry.borderBoxSize[0].blockSize ?? '64px';
			const innerHeight = window.innerHeight;

			body.style.height = `${innerHeight - headerHeight}px`;
			body.style.paddingTop = `${headerHeight}px`;
		});
	});
</script>

<div class="medium">
	<section class="header">
		{@render _header?.()}
	</section>

	<section class="body">
		{@render _body?.()}
	</section>

	<section class="rail">
		{@render _rail?.()}
	</section>
</div>

<style>
	@import url('../../css/typography.css');

	.medium {
		display: flex;
		flex-direction: column;
		font-family: var(--gl-font-family-plain);
	}

	.body {
		overflow-y: scroll;
	}
</style>
