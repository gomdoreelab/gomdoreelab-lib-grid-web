<script>
	// @ts-nocheck
	import { Drawer, List, ListItem, ButtonIcon, Icon } from 'gomdoreelab-lib-material-web';
	import { page } from '$app/state';
</script>

<Drawer open="true" contained="false">
	<List>
		<ListItem active={page.url.pathname === '/'} href="/">
			Home
			{#snippet _icon()}
				<Icon slot="icon" name="home"></Icon>
			{/snippet}
		</ListItem>
		<ListItem active={page.url.pathname === '/layout'} href="/layout">
			Layout
			{#snippet _icon()}
				<Icon slot="icon" name="view_sidebar"></Icon>
			{/snippet}
		</ListItem>
		<ListItem active={page.url.pathname === '/components'} href="/components">
			Components
			{#snippet _icon()}
				<Icon slot="icon" name="widgets"></Icon>
			{/snippet}
		</ListItem>
		<ListItem>
			-
			{#snippet _icon()}
				<Icon slot="icon" name="question_mark"></Icon>
			{/snippet}
		</ListItem>
	</List>
</Drawer>
