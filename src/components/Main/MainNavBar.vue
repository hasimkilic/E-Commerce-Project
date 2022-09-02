<template>
  <div>
    <div class="top_bar_main">
      <div class="container mb-2">
        <div
          class="row d-flex flex-col align-items-center justify-content-start mb-2"
        >
          <div class="d-block">
            <h3 class="head-2">Organik Sebze & Meyve</h3>
          </div>
          <div
            class="col-lg-11 px-0 mx-auto mx-2 d-flex flex-row align-items-center justify-content-between"
          >
            <div class="abc d-flex">
              <div class="select ml-2">
                <select class="standard-select pr-4">
                  <option class="px-2" value="Option 1">Kategoriler</option>
                  <option class="px-2" value="Option 2">Option 2</option>
                  <option class="px-2" value="Option 3">Option 3</option>
                  <option class="px-2" value="Option 4">Option 4</option>
                  <option class="px-2" value="Option 5">Option 5</option>
                </select>
              </div>
              <div class="select mr-2">
                <select class="standard-select mr-1 pr-4">
                  <option class="px-2" value="Option 1">Miktar</option>
                  <option class="px-2" value="Option 2">Option 2</option>
                  <option class="px-2" value="Option 3">Option 3</option>
                  <option class="px-2" value="Option 4">Option 4</option>
                  <option class="px-2" value="Option 5">Option 5</option>
                </select>
              </div>
            </div>
            <label class="control control--checkbox mr-auto mt-2 d-flex align-items-center justify-content-center">
                <input type="checkbox"/>
                <div class="control__indicator mt-1"></div>
                <span class="mt-2 ml-1">Tükenenleri gösterme</span>
            </label>
            <div class="d-flex align-items-center justify-content-center abc">
              <div class="select mr-2">
                <select class="standard-select pr-4">
                  <option class="px-2" value="Option 1">Sırala</option>
                  <option class="px-2" value="Option 2">Option 2</option>
                  <option class="px-2" value="Option 3">Option 3</option>
                  <option class="px-2" value="Option 4">Option 4</option>
                  <option class="px-2" value="Option 5">Option 5</option>
                </select>
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
  name: "MainNavBar",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
</style>
