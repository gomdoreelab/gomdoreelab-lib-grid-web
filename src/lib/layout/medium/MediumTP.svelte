<script>
	import { onMount } from 'svelte';
	import { getResizeObserver } from 'gomdoreelab-lib-material-web';

	let {
		// Properties
		footerType = 'appbar', // "appbar" | 'navagation'
		// Slots
		_header,
		_left,
		_right,
		_footer
	} = $props();

	onMount(() => {
		const header = document.querySelector('mdui-top-app-bar');
		const body = document.querySelector('.medium > .body');
		const footer =
			footerType === 'appbar'
				? document.querySelector('mdui-bottom-app-bar')
				: document.querySelector('mdui-navigation-bar');

		getResizeObserver(header, (entry) => {
			const headerHeight = entry.borderBoxSize[0].blockSize ?? '64px';
			const footerHeight = footer.clientHeight;
			const innerHeight = window.innerHeight;

			body.style.height = `${innerHeight - headerHeight - footerHeight}px`;
		});
	});
</script>

<div class="medium">
	<section class="header">
		{@render _header?.()}
	</section>
	<section class="body">
		<section class="left">
			{@render _left?.()}
		</section>
		<section class="right">
			{@render _right?.()}
		</section>
	</section>

	<section class="footer">
		{@render _footer?.()}
	</section>
</div>

<style>
	@import '../../css/typography.css';

	.medium {
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
	.right {
		overflow-y: scroll;
	}
</style>
