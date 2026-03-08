<script lang="ts">
    import type { HNStory } from '$lib/types/hn';

    interface Props {
        story: HNStory;
        rank: number;
    }
    let { story, rank }: Props = $props();

    const domain = $derived.by(() => {
        if (!story.url) return null;
        try {
            return new URL(story.url).hostname.replace('www.', '');
        } catch {
            return null;
        }
    });

    function timeAgo(dateStr: string): string {
        const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
        if (seconds < 60) return `${seconds}s`;
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h`;
        const days = Math.floor(hours / 24);
        return `${days}d`;
    }

    const hnLink = $derived(`https://news.ycombinator.com/item?id=${story.objectID}`);
</script>

<li class="snap-start shrink-0 w-72 flex flex-col rounded-lg border border-[#29FD2E]/10 bg-black/40 p-3 transition-colors hover:border-[#29FD2E]/30 hover:bg-[#29FD2E]/5">
    <div class="flex items-center justify-between text-xs mb-2">
        <span class="text-[#29FD2E]/30 font-mono">{rank}.</span>
        {#if domain}
            <span class="text-[#29FD2E]/25 truncate ml-2">{domain}</span>
        {/if}
    </div>

    <a
        href={story.url || hnLink}
        target="_blank"
        rel="noopener noreferrer"
        class="text-[#29FD2E] text-sm hover:underline line-clamp-3 leading-snug"
    >
        {story.title}
    </a>

    <div class="mt-auto pt-3 text-[#29FD2E]/40 text-xs flex gap-2 flex-wrap">
        <span>{story.points} pts</span>
        <a
            href={hnLink}
            target="_blank"
            rel="noopener noreferrer"
            class="hover:underline"
        >
            {story.num_comments} comments
        </a>
        <span>{timeAgo(story.created_at)}</span>
    </div>
</li>
