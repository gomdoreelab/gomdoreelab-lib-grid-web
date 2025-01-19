<script>
	let {
		// Slots
		slotHeader,
		slotBody,
		slotBottom
	} = $props();
</script>

<div class="medium">
	{@render slotHeader?.()}
	{@render slotBody?.()}
	{@render slotBottom?.()}
</div>

<style>
	@import '/src/lib/css/typography.css';

	:root {
		--medium-side-margin: 24px;
		--medium-space-panes: 24px;
	}

	.medium {
		margin-left: var(--medium-side-margin);
		margin-right: var(--medium-side-margin);
		height: 100%;
		font-family: var(--typeface-plain);
	}
</style>
