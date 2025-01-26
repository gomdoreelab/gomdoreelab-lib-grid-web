<script>
	import { onMount } from 'svelte';
	import { getResizeObserver } from 'gomdoreelab-lib-material-web';

	let {
		// Properties
		order = 'header', // "header" | "rail"
		smallPane = 'left', // "left" | "right"
		// Slots
		_header,
		_left,
		_center,
		_right,
		_rail
	} = $props();
	let minimumPaneSize = '412px';
	let additionalPaneSize = '400px';

	onMount(() => {
		const header = document.querySelector('mdui-top-app-bar');
		const body = document.querySelector('.extra-large > .body');
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

		switch (smallPane) {
			case 'left':
				body.style.gridTemplateColumns = `${minimumPaneSize} 1fr ${additionalPaneSize}`;
				break;

			case 'right':
				body.style.gridTemplateColumns = `${additionalPaneSize} 1fr ${minimumPaneSize}`;
				break;
		}

		getResizeObserver(header, (entry) => {
			const headerHeight = entry.borderBoxSize[0].blockSize ?? '64px';
			const innerHeight = window.innerHeight;

			body.style.height = `${innerHeight - headerHeight - footerHeight}px`;
		});
	});
</script>

<div class="extra-large">
	<section class="header">
		{@render _header?.()}
	</section>

	<section class="body">
		<section class="left">
			{@render _left?.()}
		</section>
		<section class="center">
			{@render _center?.()}
		</section>
		<section class="right">
			{@render _right?.()}
		</section>
	</section>

	<section class="rail">
		{@render _rail?.()}
	</section>
</div>

<style>
	@import '../../css/typography.css';

	.extra-large {
		display: flex;
		flex-direction: column;
		font-family: var(--gl-font-family-plain);
	}

	.body {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 24px;
	}

	.left,
	.center,
	.right {
		overflow-y: scroll;
	}
</style>
