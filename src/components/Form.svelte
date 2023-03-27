<script>

    import { createEventDispatcher } from "svelte";

    import Button from "./Button.svelte";
    import Loading from "./Loading.svelte";

    const dispatch = createEventDispatcher()

    export let loading = false

</script>

<form on:submit|preventDefault>
    <slot>
    </slot>

    <Loading { loading } />

    {#if !loading}
        <slot name="buttons">
            <div class="buttons">
                <Button on:click={()=>dispatch('canceled')} color='white' icon='ban' text='Cancelar'/>
                <Button type="submit" color='primary' icon='save' text='Guardar'/>
            </div>
        </slot>
    {/if}
</form>