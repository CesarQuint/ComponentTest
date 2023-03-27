<script>
    import { createEventDispatcher } from "svelte";
    import { each } from "svelte/internal";

    let dispatch = createEventDispatcher()

    export let query = {
        page: 0
    }

    export let metadata = {
        page: 0,
        next: null,
        previous: null
    }

    function Change (v) {
        if( metadata.page + v < 0 )
            return
        if( metadata.page + v > metadata.pages - 5 )
            return
        metadata.page=metadata.page + v
        dispatch('changed')
        console.log(metadata.page);
    }

    
    function onNext() {

    if(metadata.next != null)
        query.page = metadata.next

    dispatch('change')
    }

    function onPrevious() {

    if(metadata.previous != null)
        query.page = metadata.previous

    dispatch('change')
    }

    function onReset() {
    query.page = 0
    dispatch('change')
    }


</script>


<nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a on:click={()=>{onPrevious(); Change(-1)}} class="pagination-previous"><i class="fas fa-angle-left"></i></a>
    <a on:click={()=>{onNext(); Change(1)}} class="pagination-next"><i class="fas fa-angle-right"></i></a>
    <div class="pagination-list">
      <div on:click={()=>metadata.page = 0} ><a class="pagination-link" aria-label="Goto page 1">{ 1 }</a></div>
      <div><span class="pagination-ellipsis">&hellip;</span></div>
      {#if metadata.pages>4 }
        <div on:click={()=>Change(0)}><a class="pagination-link" aria-label="Goto page ">{ metadata.page +2 }</a></div>
        <div on:click={()=>Change(1)}><a class="pagination-link" aria-label="Goto page ">{ metadata.page +3 }</a></div>
        <div on:click={()=>Change(2)}><a class="pagination-link" aria-label="Goto page ">{ metadata.page +4 }</a></div>
      {/if}
      <div><span class="pagination-ellipsis">&hellip;</span></div>
      <div  on:click={()=>metadata.page = metadata.pages-5}><a class="pagination-link" aria-label="Goto page 86">{metadata.pages}</a></div>
    </div>
  </nav>