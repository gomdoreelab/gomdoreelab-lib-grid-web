<script>
	import { Compact, Medium, ExpandedTP } from '$lib/index.js';
	import {
		AppBarTop,
		AppBarTopTitle,
		AppBarBottom,
		Rail,
		ButtonIcon,
		Icon,
		Drawer
	} from 'gomdoreelab-lib-material-web';
	import { onMount } from 'svelte';

	let breakpoint = $state();

	function addBreakPointEvent() {
		const compact = window.matchMedia('(min-width: 0px) and (max-width: 599px)');
		compact.addEventListener('change', (event) => {
			if (event.matches) breakpoint = 'compact';
		});

		const medium = window.matchMedia('(min-width: 600px) and (max-width: 839px)');
		medium.addEventListener('change', (event) => {
			if (event.matches) breakpoint = 'medium';
		});

		const expanded = window.matchMedia('(min-width: 840px) and (max-width: 1199px)');
		expanded.addEventListener('change', (event) => {
			if (event.matches) breakpoint = 'expanded';
		});

		const large = window.matchMedia('(min-width: 1200px) and (max-width: 1599px)');
		large.addEventListener('change', (event) => {
			if (event.matches) breakpoint = 'large';
		});

		const extraLarge = window.matchMedia('(min-width: 1600px)');
		extraLarge.addEventListener('change', (event) => {
			if (event.matches) breakpoint = 'extraLarge';
		});

		// Excecute Once
		if (window.matchMedia('(min-width: 0px) and (max-width: 599px)').matches) return 'compact';
		if (window.matchMedia('(min-width: 600px) and (max-width: 839px)').matches) return 'medium';
		if (window.matchMedia('(min-width: 840px) and (max-width: 1199px)').matches) return 'expanded';
		if (window.matchMedia('(min-width: 1200px) and (max-width: 1599px)').matches) return 'large';
		return 'extraLarge';
	}

	onMount(() => {
		breakpoint = addBreakPointEvent();
	});
</script>

{#if breakpoint === 'compact'}
	<Compact footerType="appbar">
		{#snippet _header()}
			<AppBarTop
				variant="medium"
				scroll-target=".compact > .body"
				scroll-behavior="shrink"
				scroll-threshold="30"
			>
				<ButtonIcon>
					<Icon>menu</Icon>
				</ButtonIcon>
				<AppBarTopTitle>Title</AppBarTopTitle>
				<ButtonIcon>
					<Icon>menu</Icon>
				</ButtonIcon>
			</AppBarTop>
		{/snippet}
		{#snippet _body()}
			<div class="content">
				Place navigation components close to edges of the window where they’re easier to reach. Use
				a navigation rail or modal navigation drawer for single-pane layouts. Use a navigation bar
				for two-pane layouts. The navigation rail can be hidden in secondary destinations as long as
				the primary destination can still be accessed using a back button.Place navigation
				components close to edges of the window where they’re easier to reach. Use a navigation rail
				or modal navigation drawer for single-pane layouts. Use a navigation bar for two-pane
				layouts. The navigation rail can be hidden in secondary destinations as long as the primary
				destination can still be accessed using a back button.Place navigation components close to
				edges of the window where they’re easier to reach. Use a navigation rail or modal navigation
				drawer for single-pane layouts. Use a navigation bar for two-pane layouts. The navigation
				rail can be hidden in secondary destinations as long as the primary destination can still be
				accessed using a back button.Place navigation components close to edges of the window where
				they’re easier to reach. Use a navigation rail or modal navigation drawer for single-pane
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				Place navigation components close to edges of the window where they’re easier to reach. Use
				a navigation rail or modal navigation drawer for single-pane layouts. Use a navigation bar
				for two-pane layouts. The navigation rail can be hidden in secondary destinations as long as
				the primary destination can still be accessed using a back button.Place navigation
				components close to edges of the window where they’re easier to reach. Use a navigation rail
				or modal navigation drawer for single-pane layouts. Use a navigation bar for two-pane
				layouts. The navigation rail can be hidden in secondary destinations as long as the primary
				destination can still be accessed using a back button.Place navigation components close to
				edges of the window where they’re easier to reach. Use a navigation rail or modal navigation
				drawer for single-pane layouts. Use a navigation bar for two-pane layouts. The navigation
				rail can be hidden in secondary destinations as long as the primary destination can still be
				accessed using a back button.Place navigation components close to edges of the window where
				they’re easier to reach. Use a navigation rail or modal navigation drawer for single-pane
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
			</div>
		{/snippet}
		{#snippet _footer()}
			<AppBarBottom scroll-target=".compact > .body"></AppBarBottom>
		{/snippet}
	</Compact>
{:else if breakpoint === 'medium'}
	<Medium order="header">
		{#snippet _header()}
			<AppBarTop
				variant="medium"
				scroll-target=".medium > .body"
				scroll-behavior="shrink"
				scroll-threshold="30"
			>
				<ButtonIcon>
					<Icon>menu</Icon>
				</ButtonIcon>
				<AppBarTopTitle>Title</AppBarTopTitle>
				<ButtonIcon>
					<Icon>menu</Icon>
				</ButtonIcon>
			</AppBarTop>
		{/snippet}
		{#snippet _body()}
			<div class="content">
				Place navigation components close to edges of the window where they’re easier to reach. Use
				a navigation rail or modal navigation drawer for single-pane layouts. Use a navigation bar
				for two-pane layouts. The navigation rail can be hidden in secondary destinations as long as
				the primary destination can still be accessed using a back button.Place navigation
				components close to edges of the window where they’re easier to reach. Use a navigation rail
				or modal navigation drawer for single-pane layouts. Use a navigation bar for two-pane
				layouts. The navigation rail can be hidden in secondary destinations as long as the primary
				destination can still be accessed using a back button.Place navigation components close to
				edges of the window where they’re easier to reach. Use a navigation rail or modal navigation
				drawer for single-pane layouts. Use a navigation bar for two-pane layouts. The navigation
				rail can be hidden in secondary destinations as long as the primary destination can still be
				accessed using a back button.Place navigation components close to edges of the window where
				they’re easier to reach. Use a navigation rail or modal navigation drawer for single-pane
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				Place navigation components close to edges of the window where they’re easier to reach. Use
				a navigation rail or modal navigation drawer for single-pane layouts. Use a navigation bar
				for two-pane layouts. The navigation rail can be hidden in secondary destinations as long as
				the primary destination can still be accessed using a back button.Place navigation
				components close to edges of the window where they’re easier to reach. Use a navigation rail
				or modal navigation drawer for single-pane layouts. Use a navigation bar for two-pane
				layouts. The navigation rail can be hidden in secondary destinations as long as the primary
				destination can still be accessed using a back button.Place navigation components close to
				edges of the window where they’re easier to reach. Use a navigation rail or modal navigation
				drawer for single-pane layouts. Use a navigation bar for two-pane layouts. The navigation
				rail can be hidden in secondary destinations as long as the primary destination can still be
				accessed using a back button.Place navigation components close to edges of the window where
				they’re easier to reach. Use a navigation rail or modal navigation drawer for single-pane
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
			</div>
		{/snippet}
		{#snippet _rail()}
			<Rail></Rail>
		{/snippet}
	</Medium>
{:else if breakpoint === 'expanded'}
	<ExpandedTP smallPane="right" order="header">
		{#snippet _header()}
			<AppBarTop>
				<ButtonIcon>
					<Icon>menu</Icon>
				</ButtonIcon>
				<AppBarTopTitle>Title</AppBarTopTitle>
				<ButtonIcon>
					<Icon>menu</Icon>
				</ButtonIcon>
			</AppBarTop>
		{/snippet}
		{#snippet _left()}
			<div class="content">
				Place navigation components close to edges of the window where they’re easier to reach. Use
				a navigation rail or modal navigation drawer for single-pane layouts. Use a navigation bar
				for two-pane layouts. The navigation rail can be hidden in secondary destinations as long as
				the primary destination can still be accessed using a back button.Place navigation
				components close to edges of the window where they’re easier to reach. Use a navigation rail
				or modal navigation drawer for single-pane layouts. Use a navigation bar for two-pane
				layouts. The navigation rail can be hidden in secondary destinations as long as the primary
				destination can still be accessed using a back button.Place navigation components close to
				edges of the window where they’re easier to reach. Use a navigation rail or modal navigation
				drawer for single-pane layouts. Use a navigation bar for two-pane layouts. The navigation
				rail can be hidden in secondary destinations as long as the primary destination can still be
				accessed using a back button.Place navigation components close to edges of the window where
				they’re easier to reach. Use a navigation rail or modal navigation drawer for single-pane
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				Place navigation components close to edges of the window where they’re easier to reach. Use
				a navigation rail or modal navigation drawer for single-pane layouts. Use a navigation bar
				for two-pane layouts. The navigation rail can be hidden in secondary destinations as long as
				the primary destination can still be accessed using a back button.Place navigation
				components close to edges of the window where they’re easier to reach. Use a navigation rail
				or modal navigation drawer for single-pane layouts. Use a navigation bar for two-pane
				layouts. The navigation rail can be hidden in secondary destinations as long as the primary
				destination can still be accessed using a back button.Place navigation components close to
				edges of the window where they’re easier to reach. Use a navigation rail or modal navigation
				drawer for single-pane layouts. Use a navigation bar for two-pane layouts. The navigation
				rail can be hidden in secondary destinations as long as the primary destination can still be
				accessed using a back button.Place navigation components close to edges of the window where
				they’re easier to reach. Use a navigation rail or modal navigation drawer for single-pane
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
			</div>
		{/snippet}
		{#snippet _right()}
			<div class="content">
				Place navigation components close to edges of the window where they’re easier to reach. Use
				a navigation rail or modal navigation drawer for single-pane layouts. Use a navigation bar
				for two-pane layouts. The navigation rail can be hidden in secondary destinations as long as
				the primary destination can still be accessed using a back button.Place navigation
				components close to edges of the window where they’re easier to reach. Use a navigation rail
				or modal navigation drawer for single-pane layouts. Use a navigation bar for two-pane
				layouts. The navigation rail can be hidden in secondary destinations as long as the primary
				destination can still be accessed using a back button.Place navigation components close to
				edges of the window where they’re easier to reach. Use a navigation rail or modal navigation
				drawer for single-pane layouts. Use a navigation bar for two-pane layouts. The navigation
				rail can be hidden in secondary destinations as long as the primary destination can still be
				accessed using a back button.Place navigation components close to edges of the window where
				they’re easier to reach. Use a navigation rail or modal navigation drawer for single-pane
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				Place navigation components close to edges of the window where they’re easier to reach. Use
				a navigation rail or modal navigation drawer for single-pane layouts. Use a navigation bar
				for two-pane layouts. The navigation rail can be hidden in secondary destinations as long as
				the primary destination can still be accessed using a back button.Place navigation
				components close to edges of the window where they’re easier to reach. Use a navigation rail
				or modal navigation drawer for single-pane layouts. Use a navigation bar for two-pane
				layouts. The navigation rail can be hidden in secondary destinations as long as the primary
				destination can still be accessed using a back button.Place navigation components close to
				edges of the window where they’re easier to reach. Use a navigation rail or modal navigation
				drawer for single-pane layouts. Use a navigation bar for two-pane layouts. The navigation
				rail can be hidden in secondary destinations as long as the primary destination can still be
				accessed using a back button.Place navigation components close to edges of the window where
				they’re easier to reach. Use a navigation rail or modal navigation drawer for single-pane
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
				layouts. Use a navigation bar for two-pane layouts. The navigation rail can be hidden in
				secondary destinations as long as the primary destination can still be accessed using a back
				button.Place navigation components close to edges of the window where they’re easier to
				reach. Use a navigation rail or modal navigation drawer for single-pane layouts. Use a
				navigation bar for two-pane layouts. The navigation rail can be hidden in secondary
				destinations as long as the primary destination can still be accessed using a back button.
			</div>
		{/snippet}
		{#snippet _footer()}
			<AppBarBottom scroll-target=".compact > .body"></AppBarBottom>
		{/snippet}
	</ExpandedTP>
{/if}
