<template>
    <div style="height:100%">
        <HeaderMainComp class="border fixed-top bg-white" style="position:fixed; margin-bottom:1.5rem ;"/>
        <div class="container mt-4">
            <div class="row mx-auto tp">
                <div class="col-lg-6 mr-auto">
                    <div class="col mr-auto">
                        <div class="d-flex flex-column align-items-center justify-content-center">
                            <div class="mt-4 border-3 w-100 h-100">
                                <img class="img-fluid"
                                    style="width:100%; min-height: 250px; height: 325px; object-position: center;"
                                    src="../../public/images/products/p-07.jpg" alt="limon">
                            </div>
                            <div class="ml-2 mt-4" style="width:100%; cursor:pointer;">
                                <Carousel :autoplay="5000" :wrapAround="true" :transition="1500" :items-to-show="1"
                                    :pauseAutoplayOnHover="true" :itemsToScroll="1" :snapAlign="start"
                                    style="width:100% ; height: 130px;">
                                    <template #slides>
                                        <Slide v-for="slide in 3" :key="slide">
                                            <img class="img-fluid border-2 rounded-sml border-left-0"
                                                style="height:130px; width:100%;"
                                                src="../../public/images/products/p-07.jpg" alt="şirket-limon">
                                            <img class="img-fluid border-2 rounded-sml mx-2"
                                                style="height:130px; width:100%;"
                                                src="../../public/images/products/p-07.jpg" alt="şirket-brokoli">
                                            <img class="img-fluid border-2 rounded-sml border-right-0"
                                                style="height:130px; width:100%;"
                                                src="../../public/images/products/p-07.jpg" alt="şirket-avokado">
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
                </div>
                <div class="col-lg-6">
                    <div class="d-flex flex-column align-items-start justify-content-center ml-4 mt-4">
                        <div class=" ml-2">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="title">Organik Sebze & Meyve</h6>
                                <span class="txt-2 mt-4 d-flex justify-content-center align-items-center"
                                    style="cursor:pointer;">
                                    <span class="material-symbols-outlined heart mt-1 mr-2">favorite</span>
                                    Favorilere Ekle
                                </span>
                            </div>
                            <h2 class="text mt-3 mb-2">Limon</h2>
                            <p class="mt-4 desc">
                                Organik olarak sattığımız ürünümüz siz tüketicilere sunmak için en iyi koşullarda
                                muhafaza etmekteyiz.
                            </p>
                            <p class="mt-4">
                            <h2 class="mt-4 d-flex align-items-center justify-content-between">
                                <div>
                                    <span class="txt-2">Kg /</span>
                                    <span> ₺ 9.90 </span> 
                                    <del class="txt-3 ">₺ 19.90</del>
                                </div>
                                <span class="txt-5">%10</span>
                            </h2>
                            </p>
                            <div class="d-flex justify-content-start align-items-center brdr">
                                <button class="btn btn-2 mr-2" :disabled="disabled"
                                    v-if="this.count == 1 ? this.disabled == true : ' '" @click="this.count--">
                                    <span class="material-symbols-outlined">remove</span>
                                </button>
                                <button class="btn btn-2 mr-2" disabled v-else @click="this.count--">
                                    <span class="material-symbols-outlined">remove</span>
                                </button>
                                <button class="btn-3 ">{{ this.count }}</button>
                                <button class="btn btn-2 ml-2 mr-4" @click="this.count++">
                                    <span class="material-symbols-outlined">add</span>
                                </button>
                                <div class="ml-4 bt">
                                    <button class="btn">
                                        <span class="material-symbols-outlined">shopping_cart</span>
                                        <span>Sepete Ekle</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import HeaderMainComp from "../components/Header/HeaderMainComp.vue";
import Footer from "../components/Footer/Footer.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
export default {
    name: 'ProductDetail',
    components: {
        HeaderMainComp,
        Footer,
        Carousel,
        Slide,
        Navigation,
        Pagination
    },
    data() {
        return {
            disabled: false,
            count: 1,
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
$secondary: #A85CF9;
$white: #FFFFFF;
$txtShadow: rgba(0, 0, 0, .01) 0 0 1px;
$black: #000;
$yellow: #FFB200;
$red: #C21010;

.btn {
    font-size: 12px;
    position: relative;
    height: 50px;
    width: 125px;
    top: 45px;
    background-color: $secondary;
    color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    padding: 0 3px;
    &:hover {
        color: $secondary;
        border: 2px solid $secondary;
        transition: all .2s ease-in-out;
        background-color: $white;
    }
}
.bt {
    margin-left: 20px;

    span {
        font-size: 16px;
    }
}

.btn-2 {
    font-size: 20px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid $secondary;
    background-color: $white;
    color: $secondary;
    position: relative;
    top: 45px;
    text-align: center;

    &:not(:disabled):hover {
        color: $white;
        border: none;
        transition: all .2s ease-in-out;
        background-color: rgb(168, 92, 249);
    }

    &:disabled {
        background-color: #f5f5f5f6;
    }

}

.btn-3 {
    font-size: 20px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid $secondary;
    background-color: $white;
    color: $secondary;
    position: relative;
    top: 45px;
    text-align: center;
}

.border-2 {
    border: 1px solid rgba(168, 92, 249, 0.4);

    .top {
        margin-top: 5rem;
    }
}

.txt-2 {
    font-size: 16.2px;

    .heart {
        background-color: $white;

        &:hover {
            color: $red;
            transition: all .2s ease-in-out;
        }
    }
}

.txt-3 {
    font-size: 17px;
}

.txt-5 {
    margin-left: 18px;
    font-size: 18px;
    background-color: rgba(168, 92, 249, 0.3);
    border-radius: 5px;
    padding: 7px 10px;
}

.border-3 {
    border: 2px solid rgba(168, 92, 249, 0.4);
    border-radius: 8px;

    img {
        box-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    }
}

.rounded-sml {
    border-radius: 7px;
}

.title {
    color: $secondary;
}

h2 {
    &.text {
        text-shadow: $txtShadow;
        font-size: 3rem;
    }
}

.desc {
    font-size: 16px;
    margin-bottom: 2.5rem;
}
.tp{
    height:100vh;
    margin-top: 5.7rem;
}
@media only screen and (max-width: 991px) {
    .tp{
        margin-top: 10rem;
        margin-bottom: 10rem;
    }
}
</style>