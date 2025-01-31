<script>
	// @ts-nocheck
	import { Bar, BarItem, Icon } from 'gomdoreelab-lib-material-web';
	import { page } from '$app/state';
</script>

<Bar value={page.url.pathname} label-visibility="labeled">
	<BarItem value="/" href="/">
		Home
		{#snippet _icon()}
			<Icon slot="icon" name="home"></Icon>
		{/snippet}
	</BarItem>
	<BarItem value="/layout" href="/layout">
		Layout
		{#snippet _icon()}
			<Icon slot="icon" name="view_sidebar"></Icon>
		{/snippet}
	</BarItem>
	<BarItem value="/components" href="/components">
		Components
		{#snippet _icon()}
			<Icon slot="icon" name="widgets"></Icon>
		{/snippet}
	</BarItem>
	<BarItem value="준비">
		-
		{#snippet _icon()}
			<Icon slot="icon" name="question_mark"></Icon>
		{/snippet}
	</BarItem>
</Bar>
