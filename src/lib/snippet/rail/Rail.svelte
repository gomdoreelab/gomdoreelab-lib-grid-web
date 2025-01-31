<script>
	// @ts-nocheck
	import { Rail, RailItem, Icon } from 'gomdoreelab-lib-material-web';
	import { page } from '$app/state';
</script>

<Rail value={page.url.pathname}>
	<RailItem value="/">
		Home
		{#snippet _icon()}
			<Icon slot="icon" name="home"></Icon>
		{/snippet}
	</RailItem>
	<RailItem value="/layout" href="/layout">
		Layout
		{#snippet _icon()}
			<Icon slot="icon" name="view_sidebar"></Icon>
		{/snippet}
	</RailItem>
	<RailItem value="/components" href="/components">
		Components
		{#snippet _icon()}
			<Icon slot="icon" name="widgets"></Icon>
		{/snippet}
	</RailItem>
	<RailItem value="준비">
		-
		{#snippet _icon()}
			<Icon slot="icon" name="question_mark"></Icon>
		{/snippet}
	</RailItem>
</Rail>
