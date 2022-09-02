<template>
  <div>
    <div class="super_container">
      <header class="header">
        <HeaderTopBar />
        <HeaderMainComp />
        <HeaderMainNav />
      </header>
    </div>
  </div>
</template>

<script>
import HeaderTopBar from "./HeaderTopBar.vue";
import HeaderMainComp from "./HeaderMainComp.vue";
import HeaderMainNav from './HeaderMainNav.vue'
export default {
  name: "Header",
  components: {
    HeaderTopBar,
    HeaderMainComp,
    HeaderMainNav
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
</style>
