<script lang="ts">
    import type { HNStory, HNSearchResponse, HNSortMode } from '$lib/types/hn';
    import { onMount } from 'svelte';
    import HnStoryCard from './hn-story-card.svelte';

    let { initialStories = [] }: { initialStories?: HNStory[] } = $props();

    // svelte-ignore state_referenced_locally
    const seedStories = initialStories;
    const hasSeedData = seedStories.length > 0;

    let stories: HNStory[] = $state(seedStories);
    let sortMode: HNSortMode = $state('points');
    let loading = $state(!hasSeedData);
    let error: string | null = $state(null);
    let track: HTMLUListElement | undefined = $state(undefined);

    const sortedStories = $derived.by(() => {
        const sorted = [...stories];
        switch (sortMode) {
            case 'new':
                return sorted.sort((a, b) => b.created_at_i - a.created_at_i);
            case 'points':
                return sorted.sort((a, b) => b.points - a.points);
            case 'comments':
                return sorted.sort((a, b) => b.num_comments - a.num_comments);
            default:
                return sortMode satisfies never;
        }
    });

    async function fetchStories() {
        try {
            error = null;
            const res = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=30');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data: HNSearchResponse = await res.json();
            stories = data.hits;
        } catch (e) {
            error = e instanceof Error ? e.message : 'Failed to load stories';
        } finally {
            loading = false;
        }
    }

    onMount(() => {
        if (!hasSeedData) fetchStories();
        const interval = setInterval(fetchStories, 5 * 60 * 1000);
        return () => clearInterval(interval);
    });

    const modes: { key: HNSortMode; label: string }[] = [
        { key: 'new', label: 'New' },
        { key: 'points', label: 'Points' },
        { key: 'comments', label: 'Comments' },
    ];

    function scrollLeft() {
        track?.scrollBy({ left: -300, behavior: 'smooth' });
    }

    function scrollRight() {
        track?.scrollBy({ left: 300, behavior: 'smooth' });
    }
</script>

<section class="w-full relative z-50 pt-6 pb-4">
    <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
            <img src="/img/hackernews.svg" alt="Hacker News" width="18" height="18" class="opacity-60" />
        </div>
        <div class="flex items-center gap-2">
            <div class="flex gap-1">
                {#each modes as { key, label }}
                    <button
                        onclick={() => sortMode = key}
                        class="px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors {sortMode === key
                            ? 'bg-[#29FD2E] text-black'
                            : 'text-[#29FD2E]/60 hover:text-[#29FD2E]/80'}"
                    >
                        {label}
                    </button>
                {/each}
            </div>
            <div class="flex gap-1 ml-2">
                <button
                    onclick={scrollLeft}
                    class="text-[#29FD2E]/40 hover:text-[#29FD2E]/80 transition-colors p-1"
                    aria-label="Scroll left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button
                    onclick={scrollRight}
                    class="text-[#29FD2E]/40 hover:text-[#29FD2E]/80 transition-colors p-1"
                    aria-label="Scroll right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
            </div>
        </div>
    </div>

    {#if loading}
        <p class="text-[#29FD2E]/40 text-sm text-center py-8 animate-pulse">Loading stories...</p>
    {:else if error}
        <div class="text-center py-8">
            <p class="text-red-400 text-sm mb-2">{error}</p>
            <button
                onclick={fetchStories}
                class="text-[#29FD2E]/60 text-xs hover:text-[#29FD2E] underline"
            >
                Retry
            </button>
        </div>
    {:else}
        <ul bind:this={track}
            class="flex gap-3 overflow-x-auto overscroll-x-contain
                   scroll-smooth snap-x snap-mandatory
                   pb-3
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {#each sortedStories as story, i (story.objectID)}
                <HnStoryCard {story} rank={i + 1} />
            {/each}
        </ul>
    {/if}
</section>
