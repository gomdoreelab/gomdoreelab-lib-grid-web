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
	:root {
		--medium-side-margin: 24px;
		--medium-space-panes: 24px;
	}

	.medium {
		margin-left: var(--medium-side-margin);
		margin-right: var(--medium-side-margin);
		height: 100%;
	}
</style>
