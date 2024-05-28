<script lang="ts">
    import Header from './../components/header.svelte';
    import Search from './../components/search.svelte';
    import Bookmarks from './../components/bookmarks.svelte';
    import "../app.scss"
    import BackgroundBeams from '../components/ui/BackgroundBeams.svelte';
</script>
<style lang="postcss">
    :global(html) {
      background-color: theme(colors.black);
      color: #29FD2E;
      font-family: 'Exo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      position: relative;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
    }
</style>

<main class="h-full px-[3%] mx-auto relative overflow-hidden">
    <Header/>
    <Search/>
    <Bookmarks/>
    <img class="absolute top-0 left-0 animate-pulse rotate" src={"/img/stars.svg"} alt="" width="50%"/>
    <img class="absolute right-0 bottom-0 animate-pulse rotate" src={"/img/stars.svg"} alt="" width="50%"/>
    <img class="absolute left-0 bottom-0 animate-pulse rotate0" src={"/img/stars.svg"} alt="" width="50%"/>
    <img class="absolute top-0 right-0 animate-pulse rotate" src={"/img/stars.svg"} alt="" width="50%"/>
</main>
<BackgroundBeams />