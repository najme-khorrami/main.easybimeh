<template>
  <!-- package section -->
  <section class="package-section q-py-md">
    <div class="container">
      <div class="header row justify-between items-center">
        <div>
          <q-img src="../../src/assets/package-icon.svg" width="70px" height="100px" class="q-mr-sm"></q-img>
          <span>بسته ها</span>  
        </div>
        <q-btn class="packages-comparison q-py-md q-px-lg" @click="packagesComparison = true">
          <q-img src="../../src/assets/packages-comparison-icon.svg" width="20px"></q-img>
          <span class="text-white q-pl-md" style="font-size: 16px;">مقایسه بسته ها</span>
        </q-btn>
        <!-- dialog -->
        <q-dialog v-model="packagesComparison">
          <q-card>
            <q-card-section class="row justify-between">
              <div class="row items-center">
                <q-img src="../../src/assets/compare-icon.svg" width="40px" fit="contain" class="q-mr-sm"></q-img>
                <span style="font-size: 18px;">مقایسه بسته ها</span>
              </div>
              <q-btn class="packages-comparison text-white q-py-sm q-px-lg">
                <span class="q-pr-sm" style="font-size: 16px;">پرینت</span>
                <q-icon name="fa-solid fa-print"></q-icon>
              </q-btn>
            </q-card-section>
            <q-card-section class="main-section" horizontal>
              <!-- should make table -->
            </q-card-section>
          </q-card>
        </q-dialog>
        <!-- dialog -->
      </div>
      <carousel :items-to-show="1" dir="rtl" :items-to-scroll="1" :wrapAround="true" :autoplay="3000" :transition="1000" :pauseAutoplayOnHover="true" :breakpoints="breakpoints" @load="myFunction">
        <Slide v-for="item in plansList" :key="item.id">
          <q-card class="shadow-3 full-width" :class="item.className">
            <div class="card-header relative-position">
              <q-img :src="bgImage+item.id+'.svg'"></q-img>
              <span class="absolute-center q-pb-lg text-h6 text-center text-white">{{ item.title }}</span>
            </div>
            <q-card-section class="card-users">
              <span>با {{ item.users }} کاربر</span>
            </q-card-section>
            <q-card-section class="card-features">
              <div v-for="feature in item.features" :key="feature" class="justify-start">
                <q-img :src="checkIcon+item.id+'.svg'" width="15px" height="20px" fit="contain" class="q-mr-sm"></q-img>
                <span>{{ feature }}</span>
              </div>
            </q-card-section>
            <q-card-section horizontal class="card-dialog-btn">
              <q-btn icon-right="arrow_back" label="مشاهده کامل ویژگی های بسته" falt unelevated square align="between" class="full-width"></q-btn>
            </q-card-section>
            <q-card-section class="card-select-duration q-my-md q-pa-none">
              <div>
                <label for="select-price">بسته زمانی را انتخاب نمایید:</label>
                <q-select outlined :options="options" v-model="selectModel"></q-select>
              </div>
              <div class="row justify-between full-width text-teal-4 bg-teal-1 q-py-sm q-px-md" style="font-size: 16px;">
                <span>حق اشتراک ماهیانه</span>
                <span>{{  }}هزار تومان</span>
              </div>
            </q-card-section>
            <q-card-actions vertical horizontal>
              <q-btn icon="add_shopping_cart" label="فعال سازی" flat class="text-white" padding="8px"></q-btn>
            </q-card-actions>
          </q-card>
        </Slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { defineComponent,ref } from "vue";
import axios from "axios";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default defineComponent({
name: "PackagesComp",
components: {
    Carousel,
    Slide,
  },

setup() {
  let plansList = [];
  axios
    .get("https://server.easybimeh.com/api/Information?key=0")
    .then(function (response) {
      let count = 1;
      response.data.message.plans.forEach(function (item) {
        let featuresList = []
        for(var i=0;i<5;i++) {
          featuresList.push(item.easyBimehPlanFeatures[i].title)
        }
        let newItem = {
          id: count,
          title: item.easyBimehPlan.title,
          users: item.easyBimehPlan.maxUsers,
        //   discount: item.easyBimehPlanPrices.discount,
          features: featuresList,
          className: item.easyBimehPlan.packageClass
        }
        plansList.push(newItem)
        count++
      });
      console.log(response.data.message.plans);
    })
    .catch(function (error) {
      console.error(error);
    });
  return {
    packagesComparison: ref(false),
    plansList,
    bgImage: ref('../../src/assets/package-header'),
    checkIcon: ref('../../src/assets/check-pack'),
    slide: ref(1),
    breakpoints: {
      600: {
        itemsToShow: 2,
        itemsToScroll:2,
        wrapAround: 'true',
        snapAlign: 'start'
      },
      1200: {
        itemsToShow: 4,
        autoplay: false,
        wrapAround: false,
        mouseDrag: false,
      },
    },
    selectModel: ref(null),
    options: ['یک ساله', 'شش ماهه', 'سه ماهه']
  };
},
});
</script>

<style lang="scss" scoped>
  .packages-comparison {
    background: linear-gradient(90deg,#1763cc 0,#2370dc 28.65%,#307ff0 56.06%,#3888fb 82.88%,#3b8bff 100%);
    border-radius: 30px;
  }
  .q-dialog .main-section {
    background-color: #e8eaee;
  }
  .packagestyle1 {
    .card-users span ,
    .q-card__actions {
      background: linear-gradient(97.51deg,#1763cc 0,#2370dc 28.65%,#307ff0 56.06%,#3888fb 82.88%,#3b8bff 100%)!important;
    }
    .card-dialog-btn {
      color: #0084c6;
      background-color: lighten($color: #1763cc, $amount: 45%);
    }
  }
  .packagestyle2 {
    .card-users span ,
    .q-card__actions {
      background: linear-gradient(98.54deg,#af6a27 0,#c17a32 26.58%,#d58c3f 53.98%,#e29747 81.64%,#e69b4a 100%)!important;
    }
    .card-dialog-btn {
      color: #b06b29;
      background-color: lighten($color: #af6a27, $amount: 50%);
    }
  }
  .packagestyle3 {
    .card-users span ,
    .q-card__actions {
      background: linear-gradient(98.38deg,#9694a8 0,#b0adc8 23.01%,#c8c4e7 63.87%,#d1cdf2 100%)!important;
    }
    .card-dialog-btn {
      color: #9694a8;
      background-color: lighten($color: #9694a8, $amount: 30%);
    }
  }
  .packagestyle4 {
    .card-users span ,
    .q-card__actions {
      background: linear-gradient(97.28deg,#f0b213 0,#f5c625 59.33%,#fdea46 100%)!important;
    }
    .card-dialog-btn {
      color: #f0b622;
      background-color: lighten($color: #f0b622, $amount: 35%);
    }
  }
  div[class*="packagestyle"]  {
    .card-users span {
        width: 100%;
        display: inline-block;
        padding: 8px 15px;
        border-radius: 5px;
        margin-top: 20px;
        color: white;
        text-align: center;
    }
  }
  .card-features {
    line-height: 35px;
    text-align: left;
  }
  .carousel__item {
    width: 100%;
  }
  .carousel__slide {
    padding: 10px;
  }
</style>
  