<template>
    <div>
      <div class="top_bar">
        <div class="container">
          <div class="row">
            <div class="col d-flex flex-row align-items-center justify-content-between">
              <div class="top_bar_content ">
              <div class="top_bar_menu d-flex flex-row align-items-center justify-content-start">
                <i class="fa-solid fa-gift"></i>
                  <a href="#" class="px-1 mr-">Kampanyalar </a>
              </div>
              </div>
              <!-- d-flex flex-row align-items-center justify-content-center -->
              <div class="top_bar_user d-flex flex-row align-items-center justify-content-center ">
                  <div class="user_icon">
                      <i class="fa-regular fa-user"></i>
                  </div>
                  <div><router-link :to="{path:`/register`}">Kayıt Ol</router-link></div>
                  <div class="user_icon">
                    <i class="fa-solid fa-arrow-right-to-bracket" style="font-weigth:light;"></i>
                  </div>
                  <div><router-link :to="{path:`/login`}">Giriş Yap</router-link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'HeaderTopBar',
    data() {
        return {
        }
    },
}
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
</style>