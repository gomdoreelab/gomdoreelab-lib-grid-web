<script>
	import { Compact, Medium, TopSmallAppBar } from '$lib/index.js';

	let width = $state(0);

	$effect(() => {});
</script>

<svelte:window bind:innerWidth={width} />

{#if width >= 600}
	<Medium>
		{#snippet slotBody()}
			<h1>Welcome to your library project</h1>
			<p>
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
			</p>
			<p>
				Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
			</p>
		{/snippet}
	</Medium>
{:else}
	<Compact header="small" theme="light">
		{#snippet slotHeader()}
			<TopSmallAppBar>
				{#snippet slotLeadingIcon()}
					gg
				{/snippet}
				{#snippet slotHeadline()}
					제목
				{/snippet}
				{#snippet slotTrailingIcon()}
					gg
				{/snippet}
			</TopSmallAppBar>
		{/snippet}
		{#snippet slotBody()}
			<h1>Welcome to your library project</h1>
			<p>
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
			</p>
			<p>
				Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
			</p>
		{/snippet}
		{#snippet slotBottom()}
			<p>
				{width}
			</p>
		{/snippet}
	</Compact>
{/if}
