<!-- <script>
	// @ts-nocheck
	import {
		Compact,
		Medium,
		MediumTP,
		ExpandedTP,
		Large,
		LargeTP,
		ExtraLarge,
		ExtraLargeAP
	} from '$lib/index.js';
	import {
		AppBarTop,
		AppBarTopTitle,
		AppBarBottom,
		getBreakPoint,
		addBreakPointEvent,
		ButtonIcon,
		Icon,
		Bar,
		BarItem,
		setColorSchemeHTML,
		Tooltip,
		Dropdown,
		Menu,
		MenuItem,
		getHTMLTheme,
		setHTMLTheme,
		Prose
	} from 'gomdoreelab-lib-material-web';
	import { onMount } from 'svelte';
	import NavigationBar from '$lib/snippet/navigation-bar/NavigationBar.svelte';
	import Rail from '$lib/snippet/rail/Rail.svelte';
	import Drawer from '$lib/snippet/drawer/Drawer.svelte';

	// 적응형 화면 제어
	let breakpoint = $state();
	const breakpointHandler = {
		compact: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) breakpoint = 'compact';
		},
		medium: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) breakpoint = 'medium';
		},
		expanded: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) breakpoint = 'expanded';
		},
		large: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) breakpoint = 'large';
		},
		extraLarge: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) breakpoint = 'extraLarge';
		}
	};

	// 태마
	let theme = $state();

	onMount(() => {
		// 적응형 화면 제어
		breakpoint = getBreakPoint();
		addBreakPointEvent(breakpointHandler);

		theme = getHTMLTheme();
	});
</script>

{#if ['compact'].includes(breakpoint)}
	<Compact>
		{#snippet _header()}
			<AppBarTop variant="medium" scroll-behavior="shrink elevate" scroll-target="#compact">
				<ButtonIcon>
					<Icon name="menu"></Icon>
				</ButtonIcon>
				<AppBarTopTitle>곰도리연구소</AppBarTopTitle>

				<Dropdown>
					{#snippet _trigger()}
						<div slot="trigger">
							<Tooltip content="테마">
								<ButtonIcon>
									<Icon name="wb_sunny--outlined"></Icon>
								</ButtonIcon>
							</Tooltip>
						</div>
					{/snippet}
					<Menu
						selects="single"
						value={theme}
						onchange={(event) => {
							theme = event.target.value;
							setHTMLTheme(theme);
						}}
					>
						<MenuItem value="light">Light</MenuItem>
						<MenuItem value="dark">Dark</MenuItem>
					</Menu>
				</Dropdown>
			</AppBarTop>
		{/snippet}
		{#snippet _body()}
			<Prose>
				<div class="content">
					<section>
						<h1>디자인</h1>
					</section>
					<section>
						<h3>지향점</h3>
						<p>{`${'모든 서비스에서 동일한 경험을 주고 싶어요.'.repeat(100)}`}</p>
					</section>
				</div>
			</Prose>
		{/snippet}
		{#snippet _footer()}
			<NavigationBar />
		{/snippet}
	</Compact>
{:else if ['medium'].includes(breakpoint)}
	<MediumTP>
		{#snippet _header()}
			<AppBarTop variant="small">
				<ButtonIcon>
					<Icon name="menu"></Icon>
				</ButtonIcon>
				<AppBarTopTitle>곰도리연구소 Medium</AppBarTopTitle>

				<Dropdown>
					{#snippet _trigger()}
						<div slot="trigger">
							<Tooltip content="테마">
								<ButtonIcon>
									<Icon name="wb_sunny--outlined"></Icon>
								</ButtonIcon>
							</Tooltip>
						</div>
					{/snippet}
					<Menu
						selects="single"
						value={theme}
						onchange={(event) => {
							theme = event.target.value;
							setHTMLTheme(theme);
						}}
					>
						<MenuItem value="light">Light</MenuItem>
						<MenuItem value="dark">Dark</MenuItem>
					</Menu>
				</Dropdown>
			</AppBarTop>
		{/snippet}
		{#snippet _body()}
			<Prose>
				<div class="content">
					<section>
						<h1>디자인</h1>
					</section>
					<section>
						<h3>지향점</h3>
						<p>{`${'모든 서비스에서 동일한 경험을 주고 싶어요.'.repeat(100)}`}</p>
					</section>
				</div>
			</Prose>
		{/snippet}
		{#snippet _complement()}
			<Prose>
				<div class="content">
					<section>
						<h1>디자인</h1>
					</section>
					<section>
						<h3>지향점</h3>
						<p>{`${'모든 서비스에서 동일한 경험을 주고 싶어요.'.repeat(100)}`}</p>
					</section>
				</div>
			</Prose>
		{/snippet}
		{#snippet _footer()}
			<NavigationBar />
		{/snippet}
	</MediumTP>
{:else if ['expanded'].includes(breakpoint)}
	<ExpandedTP>
		{#snippet _header()}
			<AppBarTop variant="small" order={1}>
				<ButtonIcon>
					<Icon name="menu"></Icon>
				</ButtonIcon>
				<AppBarTopTitle>곰도리연구소 Expanded</AppBarTopTitle>

				<Dropdown>
					{#snippet _trigger()}
						<div slot="trigger">
							<Tooltip content="테마">
								<ButtonIcon>
									<Icon name="wb_sunny--outlined"></Icon>
								</ButtonIcon>
							</Tooltip>
						</div>
					{/snippet}
					<Menu
						selects="single"
						value={theme}
						onchange={(event) => {
							theme = event.target.value;
							setHTMLTheme(theme);
						}}
					>
						<MenuItem value="light">Light</MenuItem>
						<MenuItem value="dark">Dark</MenuItem>
					</Menu>
				</Dropdown>
			</AppBarTop>
		{/snippet}
		{#snippet _body()}
			<Prose>
				<div class="content">
					<section>
						<h1>디자인</h1>
					</section>
					<section>
						<h3>지향점</h3>
						<p>{`${'모든 서비스에서 동일한 경험을 주고 싶어요.'.repeat(100)}`}</p>
					</section>
				</div>
			</Prose>
		{/snippet}
		{#snippet _complement()}
			<Prose>
				<div class="content">
					<section>
						<h1>디자인</h1>
					</section>
					<section>
						<h3>지향점</h3>
						<p>{`${'모든 서비스에서 동일한 경험을 주고 싶어요.'.repeat(100)}`}</p>
					</section>
				</div>
			</Prose>
		{/snippet}
		{#snippet _rail()}
			<Rail order={0} />
		{/snippet}
	</ExpandedTP>
{:else if ['large'].includes(breakpoint)}
	<LargeTP placement="left">
		{#snippet _header()}
			<AppBarTop variant="small" order={0}>
				<ButtonIcon>
					<Icon name="menu"></Icon>
				</ButtonIcon>
				<AppBarTopTitle>곰도리연구소 Large</AppBarTopTitle>

				<Dropdown>
					{#snippet _trigger()}
						<div slot="trigger">
							<Tooltip content="테마">
								<ButtonIcon>
									<Icon name="wb_sunny--outlined"></Icon>
								</ButtonIcon>
							</Tooltip>
						</div>
					{/snippet}
					<Menu
						selects="single"
						value={theme}
						onchange={(event) => {
							theme = event.target.value;
							setHTMLTheme(theme);
						}}
					>
						<MenuItem value="light">Light</MenuItem>
						<MenuItem value="dark">Dark</MenuItem>
					</Menu>
				</Dropdown>
			</AppBarTop>
		{/snippet}
		{#snippet _body()}
			<Prose>
				<div class="content">
					<section>
						<h1>디자인</h1>
					</section>
					<section>
						<h3>지향점</h3>
						<p>{`${'모든 서비스에서 동일한 경험을 주고 싶어요.'.repeat(100)}`}</p>
					</section>
				</div>
			</Prose>
		{/snippet}
		{#snippet _complement()}
			<Prose>
				<div class="content">
					<section>
						<h1>디자인</h1>
					</section>
					<section>
						<h3>지향점</h3>
						<p>{`${'모든 서비스에서 동일한 경험을 주고 싶어요.'.repeat(100)}`}</p>
					</section>
				</div>
			</Prose>
		{/snippet}
		{#snippet _rail()}
			<Rail order={1} />
		{/snippet}
	</LargeTP>
{:else if ['extraLarge'].includes(breakpoint)}
	<ExtraLargeAP>
		{#snippet _header()}
			<AppBarTop variant="small" order={2}>
				<ButtonIcon>
					<Icon name="menu"></Icon>
				</ButtonIcon>
				<AppBarTopTitle>곰도리연구소EL</AppBarTopTitle>

				<Dropdown>
					{#snippet _trigger()}
						<div slot="trigger">
							<Tooltip content="테마">
								<ButtonIcon>
									<Icon name="wb_sunny--outlined"></Icon>
								</ButtonIcon>
							</Tooltip>
						</div>
					{/snippet}
					<Menu
						selects="single"
						value={theme}
						onchange={(event) => {
							theme = event.target.value;
							setHTMLTheme(theme);
						}}
					>
						<MenuItem value="light">Light</MenuItem>
						<MenuItem value="dark">Dark</MenuItem>
					</Menu>
				</Dropdown>
			</AppBarTop>
		{/snippet}
		{#snippet _body()}
			<Prose>
				<div class="content">
					<section>
						<h1>디자인</h1>
					</section>
					<section>
						<h3>지향점</h3>
						<p>{`${'Main모든 서비스에서 동일한 경험을 주고 싶어요.'.repeat(100)}`}</p>
					</section>
				</div>
			</Prose>
		{/snippet}
		{#snippet _complement()}
			<Prose>
				<div class="content">
					<section>
						<h1>디자인</h1>
					</section>
					<section>
						<h3>지향점</h3>
						<p>{`${'Comp모든 서비스에서 동일한 경험을 주고 싶어요.'.repeat(100)}`}</p>
					</section>
				</div>
			</Prose>
		{/snippet}
		{#snippet _additional()}
			<Prose>
				<div class="content">
					<section>
						<h1>디자인</h1>
					</section>
					<section>
						<h3>지향점</h3>
						<p>{`${'Addi모든 서비스에서 동일한 경험을 주고 싶어요.'.repeat(100)}`}</p>
					</section>
				</div>
			</Prose>
		{/snippet}
		{#snippet _drawer()}
			<Drawer order={1} />
		{/snippet}
	</ExtraLargeAP>
{/if}

<style>
	.content {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		padding: 0 1rem;
	}

	.content > section:first-of-type {
		margin-top: 1rem;
	}

	.content > section:first-of-type > h1 {
		color: rgb(var(--mdui-color-primary));
	}
</style> -->
