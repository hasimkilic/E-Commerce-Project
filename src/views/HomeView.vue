<template>
  <div>
    <Header />
    <MainComp />
    <Footer />
    <transition name="fade">
      <div class="fixed-bottom float-right ml-auto mr-4 mb-2 " style="cursor:pointer; width: 48px;" v-show="scY > 300" @click="toTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#A85CF9"
          stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import MainComp from "../components/Main/MainComp.vue";
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    MainComp
  },
  data() {
    return {
      name: "Hello World",
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
</style>
