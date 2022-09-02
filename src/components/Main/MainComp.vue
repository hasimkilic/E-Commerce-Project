<template>
  <div class="mb-4">
    <Carousel/>
    <MainNavBar/>
    <div class="d-flex flex-wrap overflow-x-hidden justify-content-center align-items-center">
      <div v-for="i in 3 " :key="i">
        <Cards/>
      </div>
    </div>
  </div>
</template>

<script>
import MainNavBar from './MainNavBar.vue'
import Cards from './Cards.vue'
import Carousel from './Carousel.vue';
export default {
  name: "MainComp",
  components:{
    Cards,
    MainNavBar,
    Carousel
  },
  data() {
    return {
    };
  },
  methods:{
  }

};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

</style>
