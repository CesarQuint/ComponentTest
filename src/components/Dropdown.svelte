<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

    export let options = []
    export let value = null
    export let column = true

    export let text = null
    export let icon = 'angle-down'
    export let color = ''

    export let isRight = false

    let isActive = false

    function setValue(option) {
      isActive = false
      value = option.value
      dispatch('selected',value)
      text = option.text
      if(option.click)
        option.click()
    }

</script>
  <div class:column={column}>
    <div class="dropdown " class:is-active={isActive} class:is-right={isRight}>
      <div class="dropdown-trigger">
        <button on:click={()=>isActive = !isActive} class="button is-{color}" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>{text}</span>
          {#if icon}
              <span class="icon">
                  <i class="fas fa-{icon}" aria-hidden="true"></i>
              </span>
          {/if}
        
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          {#each options as option }
            {#if option === 'divider'}
              <hr class="dropdown-divider"/>
            {:else}
              <a on:click={()=>setValue(option)} class="dropdown-item">
                {option.html || option.text}
              </a>
            {/if}
          {/each}
      </div>
    </div>
  </div>
</div>
