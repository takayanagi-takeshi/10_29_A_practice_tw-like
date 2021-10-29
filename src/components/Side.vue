<template>
  <div class="side_wrapper">
      <div class="side_search">
        <div class="side_search_icon"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"></path>
          <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"></path>
        </svg></div>
        <form>
          <input type="text" placeholder="Search Twitter">
        </form>
      </div><!--side_search-->
    <div class="side_contents_wrapper">
      <h3 class="side_contents_wrapper_ttl">What's happening</h3>
      <ul class="side_trend_list">
        <li>
          <span class="trend_cat">News - Trending</span>
          <p class="trend_name">UNIQLO</p>
          <span class="trend_tag">Trending with<a href="#">フリース</a>,<a href="#">衣替え</a></span>
        </li>
      </ul>
    </div>
  </div><!--/sid_wrapper-->
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
