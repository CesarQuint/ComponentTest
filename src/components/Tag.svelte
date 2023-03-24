<script>

    export let color = ''
    export let text = ''
    export let size = 'normal'
    export let isLight = false 
    export let isRounded = false 
    export let isDelete = false
    export let deleteButton = false

</script>

<span
    
    class="tag is-{color} is-{size}"
    class:is-light={isLight}
    class:is-rounded={isRounded}
    class:is-delete={isDelete}
    >
    {text}
    {#if deleteButton}
        <button on:click class="delete"></button>
    {/if}
</span>