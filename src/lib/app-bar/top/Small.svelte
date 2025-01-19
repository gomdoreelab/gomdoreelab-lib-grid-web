<script>
	let {
		// Slots
		slotLeadingIcon,
		slotTrailingIcon,
		slotTitle
	} = $props();
</script>

<div class="top">
	<section>
		{@render slotLeadingIcon?.()}
	</section>
	<section>
		{@render slotTitle?.()}
	</section>
	<section>
		{@render slotTrailingIcon?.()}
	</section>
</div>

<style>
	:root {
		--container-height: 64px;
		--leading-icon-size: 24px;
		--trailing-icon-size: 24px;
		--avatar-shape: 15px;
		--avatar-size: 30px;
		--side-padding: 16px;
		--gap-elements: 24px;
		--target-size: 48px;
	}
	.top {
		display: grid;
		grid-template-columns: calc(var(--side-padding) + var(--target-size)) 1fr calc(
				var(--side-padding) + var(--target-size)
			);
		column-gap: var(--gap-elements);
		align-items: center;
		justify-items: center;
		height: var(--container-height);
	}
</style>
