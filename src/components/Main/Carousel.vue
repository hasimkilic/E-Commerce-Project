<template>
  <div class="container">
    <div class="row">
      <div class="col-12 cold crsl mb-4" >
        <h2 class="head head-3">Ürünlerimiz</h2>
        <Carousel :autoplay="5000" :wrapAround="true" :transition="1500" :items-to-show="1" :pauseAutoplayOnHover="true" :itemsToScroll="1" :snapAlign="start">
          <template #slides >
            <Slide v-for="slide in 6" :key="slide" >
            <img src="../../../public/images/our-blog/post-thumb-01.jpg" alt="şirket-çilek">
            <img src="../../../public/images/our-blog/post-thumb-02.jpg" alt="şirket-havuç">
            <img src="../../../public/images/our-blog/post-thumb-03.jpg" alt="şirket-soğan">
            <img src="../../../public/images/our-blog/post-thumb-04.jpg" alt="şirket-avokado">
            <img src="../../../public/images/our-blog/post-thumb-05.jpg" alt="şirket-limon">
            <img src="../../../public/images/our-blog/post-thumb-06.jpg" alt="şirket-brokoli">
            </Slide>
          </template>  
          <template #addons>
            <Navigation />
            <Pagination />
        </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide ,Navigation , Pagination } from "vue3-carousel";
export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination  
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
</style>
