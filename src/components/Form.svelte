<script>

    import { createEventDispatcher } from "svelte";
    import Button from "./Button.svelte";

    const dispatch = createEventDispatcher()

    export let loading = false

</script>

<form on:submit|preventDefault>
    <slot>
    </slot>
    
    {#if !loading}
        <Button on:click={()=>dispatch('canceled')} color='white' icon='ban' text='Cancelar'/>
        <Button type="submit" color='primary' icon='save' text='Guardar'/>
    {/if}
</form>