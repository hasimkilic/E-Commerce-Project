<template>
  <div class="my-4 ">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-sm-6 mx-auto d-flex overflow-x-hidden justify-content-center align-items-center">
          <div class="cardcontainer my-1 mx-3 px-4" v-for="product in products" :key="product.id">
            <div class="photo">
              <router-link @click.native="scrollToTop" :to="{ path: `/urun/${product.title.toLowerCase()}` }">
                <img class="px-0" :src="product.src" :alt="product.title" />
              </router-link>
              <div class="photos d-flex align-items-center justify-content-center">
                <span class="material-symbols-outlined">favorite</span>
              </div>
              <div class="photos p-2 d-flex align-items-center justify-content-center">
                {{ product.sales }}
              </div>
              <div class="photos p-2 p-3 d-flex align-items-center justify-content-center">
                {{ product.case }}
              </div>
            </div>
            <div class="content">
              <p class="txt4">{{ product.title }}</p>
              <p class="txt5">
                <span class="underline">{{ product.quantity }} /</span>
                ₺{{ product.newPrice}}
                <sup class="underline czg">{{ product.oldPrice }}</sup>
              </p>
              <p class="txt2">{{ product.description }}</p>
            </div>
            <div class="footer">
              <span class="d-flex justify-content-center align-items-center text-center">
                <div class="d-flex justify-content-center align-items-center brdr">
                  <button class="btn btn-2" :disabled="disabled" v-if="product.count == 1 ? this.disabled == true : ' '"
                    @click="product.count--">
                    <span class="material-symbols-outlined">remove</span>
                  </button>
                  <button class="btn btn-2" disabled v-else @click="product.count--">
                    <span class="material-symbols-outlined">remove</span>
                  </button>
                  <button class="btn-3">{{ product.count }}</button>
                  <button class="btn btn-2" @click="product.count++">
                    <span class="material-symbols-outlined">add</span>
                  </button>
                </div>
                <div class="bt">
                  <button class="btn">
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <span>Sepete Ekle</span>
                  </button>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
      products: [
        {
          id: 1,
          count: 1,
          title: "Avokado",
          src: "images/products/p-05.jpg",
          sales: "%20",
          case: "Taze",
          quantity: "Adet",
          newPrice: "39.90",
          oldPrice: "₺ 49.90",
          description:
            "Organik olarak sattığımız ürünümüz siz tüketicilere sunmak için en iyi koşullarda muhafaza etmekteyiz",
        },
        {
          id: 2,
          count: 1,
          title: "Brokoli",
          src: "images/products/p-03.jpg",
          sales: "%10",
          case: "Taze",
          quantity: "Adet",
          newPrice: "₺ 14.99",
          oldPrice: "₺ 19.99",
          description:
            "Organik olarak sattığımız ürünümüz siz tüketicilere sunmak için en iyi koşullarda muhafaza etmekteyiz",
        },
        {
          id: 3,
          count: 1,
          title: "Limon",
          src: "images/products/p-07.jpg",
          sales: "%15",
          case: "Taze",
          quantity: "Kg",
          newPrice: "₺ 9.90",
          oldPrice: "₺ 19.90",
          description:
            "Organik olarak sattığımız ürünümüz siz tüketicilere sunmak için en iyi koşullarda muhafaza etmekteyiz",
        },
      ],
    };
  },
  methods:{
    scrollToTop() {
      window.scrollTo(0,0);
  }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
</style>
