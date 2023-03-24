<script>

    export let text = ''
    export let color = '' 
    export let link = {}
    export let isLight =false

</script>

<div class="notification is-{color}" class:is-light={isLight}>
    <button on:click class="delete"></button>
    {text}
    {#if link}
        <a href={link.href}>{link.text}</a>
    {/if}
</div>