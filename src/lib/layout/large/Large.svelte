<script>
	import { onMount } from 'svelte';
	import { getBreakPoint, getResizeObserver } from 'gomdoreelab-lib-material-web';
	import '../../css/typography.css';

	let {
		// Properties
		order = 'header', // "header" | "drawer"
		// Slots
		_header,
		_body,
		_drawer
	} = $props();

	onMount(() => {
		const header = document.querySelector('mdui-top-app-bar');
		const body = document.querySelector('.large > .body');
		const drawer = document.querySelector('mdui-navigation-drawer');

		if (order === 'header') {
			getResizeObserver(header, (entry) => {
				const height = entry.borderBoxSize[0].blockSize ?? '64px';

				try {
					drawer.style.top = `${height}px`;
				} catch (error) {
					observer.unobserve();
				}
			});
		}

		if (order === 'drawer') {
			const width = drawer.clientWidth;
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

<div class="large">
	<section class="header">
		{@render _header?.()}
	</section>

	<section class="body">
		{@render _body?.()}
	</section>

	<section class="drawer">
		{@render _drawer?.()}
	</section>
</div>

<style>
	.large {
		display: flex;
		flex-direction: column;
		font-family: var(--gl-font-family-plain);
	}

	.body {
		overflow-y: scroll;
	}
</style>
