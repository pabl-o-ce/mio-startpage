<script lang="ts">
    import Header from './../components/header.svelte';
    import Search from './../components/search.svelte';
    import Bookmarks from './../components/bookmarks.svelte';
    import "../app.css"
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

<main class="h-full px-[3%] mx-auto relative overflow-hidden z-10">
    <Header/>
    <Search/>
    <Bookmarks/>
    <!-- <div class="absolute inset-0">
      <div class="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#6633ee36_100%)]"></div>
    </div> -->
    <img class="absolute top-0 left-0" src={"/img/stars.svg"} alt="" width="50%"/>
    <img class="absolute right-0 bottom-0" src={"/img/stars.svg"} alt="" width="50%"/>
    <img class="absolute left-0 bottom-0" src={"/img/stars.svg"} alt="" width="50%"/>
    <img class="absolute top-0 right-0" src={"/img/stars.svg"} alt="" width="50%"/>
</main>
