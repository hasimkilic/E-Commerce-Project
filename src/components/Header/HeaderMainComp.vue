<template>
  <div class="header_main">
    <div class="container">
      <div class="row">
        <!-- Logo -->
        <div class="col-lg-2 col-sm-3 col-3 order-1">
          <div class="logo_container">
            <div class="logo"><a href="/">Logo</a></div>
          </div>
        </div>
        <div class="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
          <div class="header_search">
            <div class="header_search_content">
              <div class="header_search_form_container">
                <form action="#" class="header_search_form clearfix">
                  <input
                    type="search"
                    required="required"
                    class="header_search_input"
                    placeholder="Aramak istediğiniz ürünü giriniz..."
                  />
                  <div class="custom_dropdown">
                    <div class="custom_dropdown_list">
                      <div>
                        <span
                          @mouseover="mouseover" @mouseleave="mouseleave"
                          class="custom_dropdown_placeholder clc"
                          >Tüm Kategoriler</span
                        >
                        <i class="fas fa-chevron-down"></i>
                      </div>
                      <select class="custom_list clc" :class="{ isOpen }">
                        <option value="1">
                          <a class="clc" href="#">Tüm Kategoriler</a>
                        </option>
                        <option value="2"><a class="clc" href="#">Yeni Ürünler</a></option>
                        <option value="3"><a class="clc" href="#">Organik Meyve Sebze</a></option>
                        <option value="4"><a class="clc" href="#">Kahvaltılık</a></option>
                        <option value="5"><a class="clc" href="#">Atıştırmalık</a></option>
                        <option value="6"><a class="clc" href="#">Zeytinyağı</a></option>
                        <option value="7"><a class="clc" href="#">Kuru Gıda</a></option>
                        <option value="8"><a class="clc" href="#">Organik</a></option>
                        <option value="9"><a class="clc" href="#">Fırından</a></option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="header_search_button trans_300"
                    value="Submit"
                  >
                  <span class="material-symbols-outlined search-input">search</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
          <div
            class="heart_cart d-flex flex-row align-items-center justify-content-end"
          >
            <div
              class="heart d-flex flex-row align-items-center justify-content-end"
            >
              <div class="cart_icon">
                <i class="fa-regular fa-2x fa-heart"></i>
                <div class="cart_count"><span>5</span></div>
              </div>
              <div class="cart_content">
                <div class="cart_text"><a href="#">Favorilerim</a></div>
              </div>
            </div>
            <div class="cart">
              <div
                class="d-flex flex-row align-items-center justify-content-end "
              >
                <div class="cart_icon">
                  <i class="fa-solid fa-2x fa-basket-shopping"></i>
                  <div class="cart_count"><span>3</span></div>
                </div>
                <div class="cart_content">
                  <div class="cart_text"><router-link :to="{path:'/sepetim'}">Sepetim</router-link></div>
                  <div class="cart_price"> ₺ 79.90</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMainComp",
  data() {
    return {
      isOpen: null,
    };
  },
  methods: {
    mouseover() {
      this.isOpen = true;
    },
    mouseleave() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
</style>
