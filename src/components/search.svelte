<script lang="ts">
    let search = '';

    function handleKeyPress(event: KeyboardEvent) {
        console.log(search);
        switch(event.key){
            case 'Enter':
                window.location.href = `https://www.duckduckgo.com/?q=${search}`;
                break;
            default:
                break;
        }
    }
</script>

<section class="pt-10 pb-6 relative z-50 border-bottom mt-4 md:mt-20">
    <img class="search-icon font-bold absolute top-12 left-4" src={'/img/shuttle.svg'} width="45" alt='icon'/>
    <input class="w-full h-16 font-bold text-4xl indent-16 rounded caret-transparent bg-[#000600] color-[#29fd2e] block focus:outline-none focus-visible:ring-0 focus-visible:ring-[#000600]" bind:value={search} on:keypress={handleKeyPress} type="text" placeholder="" aria-label="Full-width input" autoFocus/>
</section>