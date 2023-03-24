<script>

    export let type = 'text'
    export let value = null
    export let label = null
    export let icon = null
    export let color = null
    export let size = null
    export let placeholder = null

    export let loading = false 
    export let disabled = false
    export let readonly = false

    export let column = true

</script>

<div class:column={column}>
    <div class="field">
        {#if label}
            <label for={label} class="label">{ label }</label>
        {/if}
        <p class="control" class:has-icons-left={icon}>
            {#if type === 'text'}
                <input id={label} type="text" bind:value on:keyup on:focus class="input is-{ color } is-{ size }" { placeholder } { disabled } { readonly } />
            {/if}
            {#if type === 'number'}
                <input id={label}  type="number" bind:value on:keyup on:focus class="input is-{ color } is-{ size }" { placeholder } { disabled } { readonly } />
            {/if}
            {#if type === 'password'}
                <input id={label}  type="password" bind:value on:keyup on:focus class="input is-{ color } is-{ size }" { placeholder } { disabled } { readonly } />
            {/if}
          {#if icon}
            <span class="icon is-small is-left">
                <i class="fas fa-{icon}"></i>
            </span>
          {/if}
        </p>
    </div>
</div>
