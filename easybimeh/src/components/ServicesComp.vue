<template>
  <!-- package section -->
  <section id="scroll-signup" class="package-section q-py-md">
    <div class="container">
      <div class="header row justify-between items-center">
        <div>
          <q-img src="../../src/assets/package-icon.svg" width="60px" height="100px" class="q-mr-sm"></q-img>
          <span class="text-weight-medium">سرویس ها</span>  
        </div>
        <q-btn class="packages-comparison q-py-md q-px-lg" @click="packagesComparison = true">
          <q-img src="../../src/assets/packages-comparison-icon.svg" width="20px"></q-img>
          <span class="text-white q-pl-md" style="font-size: 16px;">مقایسه سرویس ها</span>
        </q-btn>
        <!-- dialog -->
        <q-dialog v-model="packagesComparison" class="compare-dialog">
          <q-card style="width: 900px; max-width: 80vw;">
            <q-card-section class="top-header row justify-between">
              <div class="row items-center">
                <q-img src="../../src/assets/compare-icon.svg" width="40px" fit="contain" class="q-mr-sm"></q-img>
                <span style="font-size: 18px;">مقایسه بسته ها</span>
              </div>
              <q-btn class="packages-comparison text-white q-py-sm q-px-lg" onclick="window.print()">
                <span class="q-pr-sm" style="font-size: 16px;">پرینت</span>
                <q-icon name="fa-solid fa-print"></q-icon>
              </q-btn>
            </q-card-section>
            <q-card-section class="main-section row" horizontal>
              <div class="capabilities">
                <div class="header" style="font-size: 16px;">قابلیت ها</div>
                <div class="body">
                  <div v-for="(feature,index) in planComparison" :key="index" class="q-pa-xs flex flex-center" :style="{'height': index>21 ? '70px' : '30px'}">{{ feature }}</div>
                </div>
              </div>
              <div v-for="pack in packsCompare" :key="pack.id" :class="pack.class">
                <div class="header">{{ pack.title }}</div>
                <div v-for="(item,index) in pack.featuresState" :key="index" class="q-pa-xs flex flex-center" :style="{'height': index>21 ? '70px' : '30px'}">
                    <q-img v-if="item == true" src="../../src/assets/true.svg" width="9px"></q-img>
                    <q-img v-if="item == false" src="../../src/assets/false.svg" width="9px"></q-img>  
                  </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
      <carousel :items-to-show="1" dir="rtl" :items-to-scroll="1" :wrapAround="false" :autoplay="3000" :transition="1000" :pauseAutoplayOnHover="true" :breakpoints="breakpoints">
        <Slide v-for="(item,index) in plansList" :key="index">
          <q-card class="shadow-3 full-width" :class="item.easyBimehPlan.packageClass">
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
                  <q-select v-if="index==1" dense color="grey-7" outlined :options="options" v-model="agencyModel" class="q-ml-md" behavior="menu" @update:model-value="changeAgencyValue"></q-select> 
                  <q-select v-if="index==2" dense color="grey-7" outlined :options="options" v-model="brokerModel" class="q-ml-md" behavior="menu" @update:model-value="changeBrokerValue"></q-select> 
                </div>
                <div class="col-4 relative-position" style="height: 100%;">
                  <span class="absolute-top-right text-red-5 q-mr-sm q-mt-sm" style="font-size: 16px;">تخفیف</span>
                  <div style="width: 70px;height: 40px;" class="absolute-bottom-right">
                    <img src="../../src/assets/label.svg" style="width: 100%;height: 100%;" alt="" />
                    <div class="absolute-full row justify-end items-center">
                      <span v-if="index==1" class="text-white q-mr-sm" style="font-size: 20px;">{{ agencyPercent }}%</span>
                      <span v-if="index==2" class="text-white q-mr-sm" style="font-size: 20px;">{{ brokerPercent }}%</span>
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
                <span v-if="index == 1">{{ agencyPrice }} هزار تومان</span>
                <span v-if="index == 2">{{ brokerPrice }} هزار تومان</span>
              </div>
            </q-card-section>
            <q-card-actions vertical horizontal class="q-pa-none">
              <q-btn icon="add_shopping_cart" label="فعال سازی" flat class="text-white" padding="md" to="insuranceCentreRegistration" @click="gost(item,index,agencyModel,brokerModel)"></q-btn>
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
name: "ServicesComp",
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
        itemsToShow: 3,
        autoplay: false,
        wrapAround: false,
        mouseDrag: false,
      },
    },
    planComparison: '',
    packsCompare: '',
    plansState1: '',
    plansState2: '',
    plansState3: '',
    plansState4: '',
    packDialog: false,
    dialogContent: '',
    number: 0,
    agencyModel: 'یکساله',
    brokerModel: 'یکساله',
    options: ['سه ماهه','شش ماهه','یکساله'],
    agencyPercent: '',
    brokerPercent: '',
    agencyPrice: '',
    brokerPrice: ''
  }
},
created() {
  axios
  .get("https://server.easybimeh.com/api/Information?key=0")
  .then((response) => {
    this.plansList = response.data.message.plans
    this.agencyPrice = this.plansList[1].easyBimehPlanPrices[2].monthlyPrice.toString().slice(0,-4)
    this.brokerPrice = this.plansList[2].easyBimehPlanPrices[2].monthlyPrice.toString().slice(0,-4)

    this.agencyPercent = this.plansList[1].easyBimehPlanPrices[2].discount
    this.brokerPercent = this.plansList[2].easyBimehPlanPrices[2].discount
  })
  .catch((error) => {
    console.error(error);
  });
  axios
  .get("https://server.easybimeh.com/api/EasyBimehPlan/PlanComparison")
  .then((response) => {
    this.packsCompare  = response.data.message.plansState
    this.planComparison = response.data.message.features
    this.plansState1 = response.data.message.plansState[0].featuresState
    this.plansState2 = response.data.message.plansState[1].featuresState
    this.plansState3 = response.data.message.plansState[2].featuresState
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
  },
  changeAgencyValue(value) {
    this.plansList[1].easyBimehPlanPrices.forEach(element => {
      if (element.title == value) {
        this.agencyPercent = element.discount
        this.agencyPrice = element.monthlyPrice.toString().slice(0,-4)
      }
    });
  },
  changeBrokerValue(value) {
    this.plansList[2].easyBimehPlanPrices.forEach(element => {
      if (element.title == value) {
        this.brokerPercent = element.discount
        this.brokerPrice = element.monthlyPrice.toString().slice(0,-4)
      }
    });
  },

  gost(item,index,agency,broker) {
    localStorage.setItem('chosenPackage',JSON.stringify(item))
    if(index == 0) localStorage.setItem('subscription',JSON.stringify(" 14 روزه"))
    else if(index == 1) localStorage.setItem('subscription',JSON.stringify(agency))
    else if(index == 2) localStorage.setItem('subscription',JSON.stringify(broker))
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
        white-space: break-spaces;
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
      width: 220px;
      .header {
        background-color: #2f3061;
      }
    }
    .packagestyle1 {
      width: calc((100% - 220px)/3);
      .header {
        background: $gradient-primary;
      }
    }
    .packagestyle5 {
      width: calc((100% - 220px)/3);
      .header {
        background: linear-gradient(98.54deg,#af6a27 0,#c17a32 26.58%,#d58c3f 53.98%,#e29747 81.64%,#e69b4a 100%);
      }
    }
    .packagestyle6 {
      width: calc((100% - 220px)/3);
      .header {
        background: linear-gradient(98.38deg,#9694a8 0,#b0adc8 23.01%,#c8c4e7 63.87%,#d1cdf2 100%);
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
  // .packagestyle2 {
  //   .card-users span ,
  //   .q-card__actions {
  //     background: linear-gradient(98.54deg,#af6a27 0,#c17a32 26.58%,#d58c3f 53.98%,#e29747 81.64%,#e69b4a 100%)!important;
  //   }
  //   .card-dialog-btn {
  //     color: #b06b29;
  //     background-color: lighten($color: #af6a27, $amount: 50%);
  //   }
  // }
  // .packagestyle3 {
  //   .card-users span ,
  //   .q-card__actions {
  //     background: linear-gradient(98.38deg,#9694a8 0,#b0adc8 23.01%,#c8c4e7 63.87%,#d1cdf2 100%)!important;
  //   }
  //   .card-dialog-btn {
  //     color: #9694a8;
  //     background-color: lighten($color: #9694a8, $amount: 30%);
  //   }
  // }
  // .packagestyle4 {
  //   .card-users span ,
  //   .q-card__actions {
  //     background: linear-gradient(97.28deg,#f0b213 0,#f5c625 59.33%,#fdea46 100%)!important;
  //   }
  //   .card-dialog-btn {
  //     color: #f0b622;
  //     background-color: lighten($color: #f0b622, $amount: 35%);
  //   }
  // }
  .packagestyle5 {
    .card-users span ,
    .q-card__actions {
      background: linear-gradient(98.54deg,#af6a27 0,#c17a32 26.58%,#d58c3f 53.98%,#e29747 81.64%,#e69b4a 100%)!important;
    }
    .card-dialog-btn {
      color: #b06b29;
      background-color: lighten($color: #af6a27, $amount: 50%);
    }
  }
  .packagestyle6 {
    .card-users span ,
    .q-card__actions {
      background: linear-gradient(98.38deg,#9694a8 0,#b0adc8 23.01%,#c8c4e7 63.87%,#d1cdf2 100%)!important;
    }
    .card-dialog-btn {
      color: #9694a8;
      background-color: lighten($color: #9694a8, $amount: 30%);
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
    .package-section {
      min-height: 500px;
      .card-header {
        padding: 10px;
        .q-img {
          display: none;
        }
        span {
          position: relative;
          left: auto;
        }
      }
    }
    .packagestyle1 .card-header {
      background: $gradient-primary;
    }
    // .packagestyle2 .card-header {
    //   background: linear-gradient(98.54deg,#af6a27 0,#c17a32 26.58%,#d58c3f 53.98%,#e29747 81.64%,#e69b4a 100%);
    // }
    // .packagestyle3 .card-header {
    //   background: linear-gradient(98.38deg,#9694a8 0,#b0adc8 23.01%,#c8c4e7 63.87%,#d1cdf2 100%);
    // }
    // .packagestyle4 .card-header {
    //   background: linear-gradient(97.28deg,#f0b213 0,#f5c625 59.33%,#fdea46 100%);
    // }
    .packagestyle5 .card-header {
      background: linear-gradient(98.54deg,#af6a27 0,#c17a32 26.58%,#d58c3f 53.98%,#e29747 81.64%,#e69b4a 100%);
    }
    .packagestyle6 .card-header {
      background: linear-gradient(98.38deg,#9694a8 0,#b0adc8 23.01%,#c8c4e7 63.87%,#d1cdf2 100%);
    }
    .card-users span {
        margin: 0 !important;
    }
    .q-dialog.compare-dialog {
      .q-card {
        max-width: 100% !important;
      }
      .top-header {
        span {
          font-size: 16px !important;
        }
        .q-img {
          width: 30px !important;
        }
      }
    } 
    .q-dialog .main-section > div {
      margin: 2px;
      &.capabilities .header {
        font-size: 14px !important;
      }
      .header {
        height: 45px;
        font-size: 12px;
      }
    }
    .package-section .header {
      span {
        font-size: 16px;
        font-weight: 900;
      }
    }
  }
</style>
  