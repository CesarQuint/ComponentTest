<script>

    export let query = {
        page: 0
    }

    export let metadata = {
        page: 0,
        next: null,
        previous: null
    }
</script>


<nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a class="pagination-previous"><i class="fas fa-angle-left"></i></a>
    <a class="pagination-next"><i class="fas fa-angle-right"></i></a>
    <ul class="pagination-list">
      <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>

      <li><a class="pagination-link" aria-label="Goto page 86">{metadata.total}</a></li>
    </ul>
  </nav>