<template>
  <nav class="main_nav">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="main_nav_content d-flex flex-row align-items-center justify-content-center"
          >
            <!-- Main Nav Menu -->
            <div class="main_nav_menu">
              <ul class="standard_dropdown main_nav_dropdown mr-4">
                <li>
                  <a href="#">Yeni Ürünler</a>
                </li>
                <li>
                  <a href="#">Fırsatlar</a>
                </li>
                <li>
                  <a href="#" class="isActive">Organik Sebze & Meyve</a>
                </li>
                <li>
                  <a href="#">Kahvaltılık</a>
                </li>
                <li>
                  <a href="#">Atıştırmalık</a>
                </li>
                <li>
                  <a href="#">Zeytinyağı</a>
                </li>
                <li>
                  <a href="#">Kuru Gıda</a>
                </li>
                <li>
                  <a href="#">Organik</a>
                </li>
                <li>
                  <a href="#">Fırından</a>
                </li>
                <li>
                  <a href="#">Fit & Form</a>
                </li>
              </ul>
            </div>
            <!-- Menu Trigger -->
            <div class="menu_trigger_container ml-auto">
              <div
                class="menu_trigger d-flex flex-row align-items-center justify-content-end"
              >
                <div class="menu_burger d-flex align-items-center justify-content-center">
                  <div class="menu_trigger_text">Menü</div>
                  <div class=" menu_burger_inner">
                    <span class="material-symbols-outlined my-4">menu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderMainNav",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
</style>
