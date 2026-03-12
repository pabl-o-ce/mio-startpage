<script lang="ts">
    import Search from './../components/search.svelte';
    import Bookmarks from './../components/bookmarks.svelte';
    import HackerNews from './../components/hackernews.svelte';
    import "../app.css"

    let { data } = $props();
</script>

<main class="min-h-full px-[3%] mx-auto relative z-10">
    <HackerNews initialStories={data.stories}/>
    <Search/>
    <Bookmarks/>
    <!-- <div class="absolute inset-0">
      <div class="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#6633ee36_100%)]"></div>
    </div> -->
    <img class="absolute top-0 left-0" src={"/img/stars.svg"} alt="" width="50%" height="auto" loading="lazy" decoding="async"/>
    <img class="absolute right-0 bottom-0" src={"/img/stars.svg"} alt="" width="50%" height="auto" loading="lazy" decoding="async"/>
    <img class="absolute left-0 bottom-0" src={"/img/stars.svg"} alt="" width="50%" height="auto" loading="lazy" decoding="async"/>
    <img class="absolute top-0 right-0" src={"/img/stars.svg"} alt="" width="50%" height="auto" loading="lazy" decoding="async"/>
</main>
