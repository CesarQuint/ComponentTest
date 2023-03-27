<script>
    import { createEventDispatcher } from 'svelte'
    import { fade } from 'svelte/transition'

    import { ModalStore } from '../stores'

    const dispatch = createEventDispatcher()

    export let block = false 
    export let type = 'content'
    export let title = null
    export let id = null

    $:show = $ModalStore === id

    function onClose() {
        ModalStore.set(null)
        dispatch('closed')
    }

</script>

{#if show}
    <div class="modal" class:is-active={ show } in:fade="{{duration: 200}}" out:fade="{{duration: 100}}">
        <div on:click={()=> !block && onClose()} class="modal-background"></div>
        <div class="modal-{type}">
            {#if type == 'card'}
                <header class="modal-card-head">
                    <p class="modal-card-title">{title}</p>
                    <button on:click={() => !block && onClose()} class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <div class="columns is-centered">
                        <div class="column is-11">
                            <slot></slot>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <slot name="buttons">
                    </slot>
                </footer>
            {/if}
            {#if type == 'content'}
                <div class="modal-content">
                    <slot></slot>
                </div>
            {/if}
        </div>
    </div>
{/if}
