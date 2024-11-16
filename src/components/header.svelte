<script lang="ts">
    let currentDate = $state(new Date());
    let date: string = $derived(`${currentDate.toLocaleDateString('en', { weekday: 'long' })}, ${currentDate.getDate()} ${currentDate.toLocaleDateString('en', { month: 'long' })}`);
    let time: string = $derived(currentDate.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric' }));

    // Replace onMount with effect
    $effect.root(() => {
        // Update every 1000 milliseconds (1 second)
        const updateInterval = 1000;

        // Set up interval
        const intervalId = setInterval(() => {
            currentDate = new Date();
        }, updateInterval);

        // Return cleanup function
        return () => clearInterval(intervalId);
    });
</script>
<nav class="bg-dark px-2 sm:px-4 py-2.5 rounded">
    <div class="container flex flex-nowrap items-center justify-center mx-auto">
        <div class="items-center justify-center my-0 mx-auto flex w-full order-1" id="navbar-cta">
            <ul class="w-auto flex justify-center p-4 mt-4 rounded-lg bg-dark flex-row space-x-8 font-bold md:mt-0 md:text-lg">
                <li>
                    <span>{time ?? '00:00'}</span>
                </li>
                <li>
                    <span>|</span>
                </li>
                <li>
                    <span>{date ?? 'No date'}</span>
                </li>
            </ul>
        </div>
    </div>
</nav>