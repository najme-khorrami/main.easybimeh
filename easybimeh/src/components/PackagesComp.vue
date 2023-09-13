<template>
  <!-- package section -->
  <section id="scroll-signup" class="package-section q-py-md">
    <div class="container">
      <div class="header row justify-between items-center">
        <div>
          <q-img src="../../src/assets/package-icon.svg" width="60px" height="100px" class="q-mr-sm"></q-img>
          <span class="text-weight-medium">بسته ها</span>  
        </div>
        <q-btn class="packages-comparison q-py-md q-px-lg" @click="packagesComparison = true">
          <q-img src="../../src/assets/packages-comparison-icon.svg" width="20px"></q-img>
          <span class="text-white q-pl-md" style="font-size: 16px;">مقایسه بسته ها</span>
        </q-btn>
        <!-- dialog -->
        <q-dialog v-model="packagesComparison">
          <q-card style="width: 900px; max-width: 80vw;">
            <q-card-section class="row justify-between">
              <div class="row items-center">
                <q-img src="../../src/assets/compare-icon.svg" width="40px" fit="contain" class="q-mr-sm"></q-img>
                <span style="font-size: 18px;">مقایسه بسته ها</span>
              </div>
              <q-btn class="packages-comparison text-white q-py-sm q-px-lg" onclick="window.print()">
                <span class="q-pr-sm" style="font-size: 16px;">پرینت</span>
                <q-icon name="fa-solid fa-print"></q-icon>
              </q-btn>
            </q-card-section>
            <!-- <q-card-section>
              <q-table dense :rows="rows" :columns="columns" row-key="name" />
            </q-card-section> -->
            <q-card-section class="main-section row" horizontal>
              <div class="col capabilities">
                <div class="header" style="font-size: 16px;">قابلیت ها</div>
                <div class="body">
                  <div v-for="(feature,index) in planComparison" :key="index" class="q-pa-xs">{{ feature }}</div>
                </div>
              </div>
              <div class="col free-pack">
                <div class="header">بسته رایگان</div>
                <div class="body">
                  <div v-for="(item,index) in plansState1" :key="index" class="q-pa-xs">
                    <q-img v-if="item == true" src="../../src/assets/true.svg" width="9px"></q-img>
                    <q-img v-if="item == false" src="../../src/assets/false.svg" width="9px"></q-img>  
                  </div>
                </div>
              </div>
              <div class="col bronze-pack">
                <div class="header">بسته برنزی</div>
                <div class="body">
                  <div v-for="(item,index) in plansState2" :key="index" class="q-pa-xs">
                    <q-img v-if="item == true" src="../../src/assets/true.svg" width="9px"></q-img>
                    <q-img v-if="item == false" src="../../src/assets/false.svg" width="9px"></q-img>    
                  </div>
                </div>
              </div>
              <div class="col silver-pack">
                <div class="header">بسته نقره ای</div>
                <div class="body">
                  <div v-for="(item,index) in plansState3" :key="index" class="q-pa-xs">
                    <q-img v-if="item == true" src="../../src/assets/true.svg" width="9px"></q-img>
                    <q-img v-if="item == false" src="../../src/assets/false.svg" width="9px"></q-img>    
                  </div>
                </div>
              </div>
              <div class="col gold-pack">
                <div class="header">بسته طلایی</div>
                <div class="body">
                  <div v-for="(item,index) in plansState4" :key="index" class="q-pa-xs">
                    <q-img v-if="item == true" src="../../src/assets/true.svg" width="9px"></q-img>
                    <q-img v-if="item == false" src="../../src/assets/false.svg" width="9px"></q-img>  
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
      <carousel :items-to-show="1" dir="rtl" :items-to-scroll="1" :wrapAround="true" :autoplay="3000" :transition="1000" :pauseAutoplayOnHover="true" :breakpoints="breakpoints">
        <Slide v-for="(item,index) in plansList" :key="index">
          <q-card class="shadow-3 full-width " :class="item.easyBimehPlan.packageClass">
            <div class="card-header relative-position">
              <q-img :src="bgImage+index+'.svg'"></q-img>
              <span class="absolute-center q-pb-lg text-h6 text-center text-white">{{ item.easyBimehPlan.title }}</span>
            </div>
            <q-card-section class="card-users">
              <span>با {{ item.easyBimehPlan.maxUsers }} کاربر</span>
            </q-card-section>
            <q-card-section class="card-features">
              <div v-for="feature in item.easyBimehPlanFeatures.slice(0, 5)" :key="feature.id" class="justify-start text-no-wrap">
                <q-img :src="checkIcon+index+'.svg'" width="15px" height="20px" fit="contain" class="q-mr-sm"></q-img>
                <span class="text-no-wrap">{{ feature.title }}</span>
              </div>
            </q-card-section>
            <q-card-section horizontal class="card-dialog-btn">
              <q-btn icon-right="arrow_back" label="مشاهده کامل ویژگی های بسته" falt unelevated square align="between" class="full-width" @click="showPackDialog(evt,item,index)"></q-btn>
            </q-card-section>
            <q-card-section class="card-discount q-my-md q-pa-none">
              <div v-if="index !== 0" class="discount not-free row no-wrap items-end">
                <div class="col-8">
                  <label for="select-price" class="text-grey-7 text-no-wrap">بسته زمانی را انتخاب نمایید:</label>
                  <q-select dense color="grey-7" outlined :options="options" v-model="selectModel" class="q-ml-md" behavior="menu"></q-select> 
                </div>
                <div class="col-4 relative-position" style="height: 100%;">
                  <span class="absolute-top-right text-red-5 q-mr-sm q-mt-sm" style="font-size: 16px;">تخفیف</span>
                  <div style="width: 70px;height: 40px;" class="absolute-bottom-right">
                    <img src="../../src/assets/label.svg" style="width: 100%;height: 100%;" alt="" />
                    <div class="absolute-full row justify-end items-center">
                      <span class="text-white q-mr-sm" style="font-size: 20px;">{{  }}%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="index == 0" class="discount free relative-position">
                <div style="width: 200px;height: 40px;" class="absolute-bottom-right">
                  <img src="../../src/assets/free.svg" style="width: 100%;height: 100%;" alt="" />
                  <div class="absolute-full row justify-between items-center">
                    <span class="text-white q-ml-lg" style="font-size: 20px;">تخفیف</span>
                    <span class="text-white q-mr-sm" style="font-size: 20px;">100%</span>
                  </div>
                </div>
              </div>
              <div class="row justify-between full-width text-teal-4 bg-teal-1 q-py-sm q-px-md" style="font-size: 16px;">
                <span>حق اشتراک ماهیانه</span>
                <span v-if="index == 0">رایگان</span>
                <span v-if="index != 0">{{  }}%</span>
              </div>
            </q-card-section>
            <q-card-actions vertical horizontal class="q-pa-none">
              <q-btn icon="add_shopping_cart" label="فعال سازی" flat class="text-white" padding="md" href="insuranceCentreRegistration"></q-btn>
            </q-card-actions>
          </q-card>
        </Slide>
      </carousel>
      <!-- dialog for all features of a package -->
      <q-dialog v-model="packDialog" class="packageDialog">
        <q-card style="max-width: 80vw;">
          <q-card-section>
            <span class="text-weight-bold"> ویژگی های {{ dialogContent.easyBimehPlan.title }}</span>
          </q-card-section>
          <q-card-section style="max-height: 65vh" class="scroll">
            <div v-for="feature,index in dialogContent.easyBimehPlanFeatures" :key="feature.id" class="justify-start">
              <q-img :src="checkIcon+number+'.svg'" width="15px" height="20px" fit="contain" class="q-mr-sm"></q-img>
              <span>{{ feature.title }}</span>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn label="تایید" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default defineComponent({
name: "PackagesComp",
components: {
  Carousel,
  Slide,
},

data() {
  return {
    plansList: '',  // four cards introducing 4 packages
    packagesComparison: false,
    bgImage: '../../src/assets/package-header',
    checkIcon: '../../src/assets/check-pack',
    slide: 1,
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
    planComparison: '',
    plansState1: '',
    plansState2: '',
    plansState3: '',
    plansState4: '',
    packDialog: false,
    dialogContent: '',
    number: 0,
    selectModel: 'یک ساله', // should fix
    options: ['یک ساله','شش ماهه','سه ماهه']
  }
},
created() {
  axios
  .get("https://server.easybimeh.com/api/Information?key=0")
  .then((response) => {
    this.plansList = response.data.message.plans
  })
  .catch((error) => {
    console.error(error);
  });
  axios
  .get("https://server.easybimeh.com/api/EasyBimehPlan/PlanComparison")
  .then((response) => {
    this.planComparison = response.data.message.features
    this.plansState1 = response.data.message.plansState[0].featuresState
    this.plansState2 = response.data.message.plansState[1].featuresState
    this.plansState3 = response.data.message.plansState[2].featuresState
    this.plansState4 = response.data.message.plansState[3].featuresState
  })
  .catch((error) => {
    console.error(error);
  });
},
methods: {
  showPackDialog(evt,item,index) {
    this.packDialog = true
    this.dialogContent = item
    this.number = index
  }
}
});
</script>

<style lang="scss" scoped>
  .package-section {
    min-height: 500px;
  }
  .packages-comparison {
    background: $gradient-primary;
    border-radius: 30px;
  }
  .q-dialog .main-section {
    background-color: $bg-white;
    padding: 10px;
    text-align: center;
    > div {
      margin: 5px;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(146, 146, 146, 0.7);
      .header {
        color: white;
        font-size: 14px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .body {
        font-size: 12px;
        > div:nth-child(odd) {
          background-color: $bg-white;
        }
        > div:nth-child(even) {
          background-color: white;
        }
      }
    }
    .capabilities {
      .header {
        background-color: #2f3061;
      }
    }
    .free-pack {
      .header {
        background: $gradient-primary;
      }
    }
    .bronze-pack {
      .header {
        background: linear-gradient(98.54deg,#af6a27 0,#c17a32 26.58%,#d58c3f 53.98%,#e29747 81.64%,#e69b4a 100%);
      }
    }
    .silver-pack {
      .header {
        background: linear-gradient(98.38deg,#9694a8 0,#b0adc8 23.01%,#c8c4e7 63.87%,#d1cdf2 100%);
      }
    }
    .gold-pack {
      .header {
        background: linear-gradient(97.28deg,#f0b213 0,#f5c625 59.33%,#fdea46 100%);
      }
    }
  }
  .packagestyle1 {
    .card-users span ,
    .q-card__actions {
      background: $gradient-primary!important;
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
  .packageDialog {
    span {
      font-size: 16px;
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
  .card-discount .discount{
    height: 70px;
    margin-bottom: 20px;
  }

  @media (max-width: 769px) {  // 0 to 769px
    .package-section .header {
      span {
        font-size: 16px;
        font-weight: 900;
      }
    }
  }
</style>
  