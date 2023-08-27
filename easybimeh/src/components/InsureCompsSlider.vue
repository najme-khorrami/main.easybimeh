<template>
  <section class="slider-section">
    <div class="slider-container q-pt-xl">
      <q-img src="../../src/assets/wave.svg" class="absolute-bottom"></q-img>
      <Carousel :items-to-show="11.95" :items-to-scroll="3" :autoplay="1500" :transition="1000" :wrap-around="true" :pauseAutoplayOnHover="true">
        <Slide  v-for="item in introList" :key="item.enTitle">
          <div class="carousel__item bg-white">
            <a :href="item.url" class="q-pa-md" style="width: 100%;height: 100%;" target="_blank">
              <q-img :src="item.image" :ratio="1/1" fit="contain" :alt="item.title"></q-img>
            </a>
            <q-tooltip transition-show="fade" transition-hide="fade">{{ item.title }}</q-tooltip>
          </div>
        </Slide>
      </Carousel>
    </div>
    <div class="advantages-container bg-warning relative-position" style="min-height: 290px;">
      <q-img src="../../src/assets/layer1.svg" width="21%" style="position:absolute;right: 0;overflow: visible;transform: translate(50%,-20%);"></q-img>
      <q-img src="../../src/assets/layer2.svg" width="45%" class="absolute-bottom-right" style="overflow: visible;"></q-img>
      <div class="q-py-xl" style="width: 70%;border: 1px solid red;margin: auto;">
        <h3 style="font-size: 26px;" class="text-bold">ایزی بیمه چه قابلیت هایی دارد؟</h3>
        <p style="font-size: 16px;" class="q-py-lg">
          به منظور شناخت دقیق تر محصول 
          <a href="https://media.easybimeh.com/marketplace/assets/easybimehcatalog.pdf" class="text-white text-bold" target="_blank">"اینجا"</a>
           کلیک کنید
        </p>
        <div class="active-advantage bg-white q-pa-md row" style="border-radius: 30px;">
          <span class="number text-white bg-primary text-bold text-h5" style="border-radius: 50%;width: 50px;height: 50px;display: flex;justify-content: center;align-items: center;">1</span>
          <span class="title" style="display: flex;">کیف پول</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default defineComponent({
  name: "InsureCompsSlider",
  components: {
    Carousel,
    Slide
  },

  setup() {
    let introList = [];
    axios
      .get("https://server.easybimeh.com/api/Information?key=0")
      .then(function (response) {
        response.data.message.insuranceCompany.forEach(function (item) {
          let newItem = {
            id: item.id,
            title: item.title,
            enTitle: item.englishTitle,
            image: item.metaMediaLogoFileUrl,
            url: item.link,
          };
          if (newItem.image) introList.push(newItem);
        });
        console.log(introList);
      })
      .catch(function (error) {
        console.error(error);
      });
    return {
      introList,
    };
  },
});
</script>

<style lang="scss" scoped>
  .slider-section {
    .slider-container {
      min-height: 245px;
      position: relative;
      background: linear-gradient(90deg,#1763cc 0,#1c68d3 26.1%,#2d7beb 57.76%,#3787fa 92.17%,#3b8bff 100%);
      > .q-img {
        position: absolute;
      }
      .carousel__slide {
        .carousel__item {
          width: 110px;
          height: 110px;
          border-radius: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
      }
    }
  }
</style>
