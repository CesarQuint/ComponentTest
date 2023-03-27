<script>

    export let options = []

    export let size = null
    export let color = null
    export let state = ""
    export let icon = null

    export let isMultiple = false
    export let isRounded = false

</script>

<div
    class="control"
    class:has-icon-left={icon}
>
    <div 
    class="select is-{color} is-{size}"
    class:is-multiple={isMultiple}
    class:is-rounded={isRounded}
    >
        <select class="is-{state}">
            {#each options as option }
                <option>{option.text}</option>
            {/each}
        </select>
    </div>
    {#if icon}
        <span class="icon is-left">
            <i class="fas fa-{icon}"></i>
        </span>
    {/if}
</div>
