<template>
  <!-- companies and advantages section -->
  <section class="slider-section">
    <div class="slider-container q-pt-xl">
      <q-img src="../../src/assets/wave.svg" class="absolute-bottom"></q-img>
      <Carousel  :breakpoints="compBreakpoints" :items-to-show="3.3" :items-to-scroll="3" :autoplay="1500" :transition="1000" :wrap-around="true" :pauseAutoplayOnHover="true">
        <Slide  v-for="item in companyList" :key="item.enTitle">
          <div class="carousel__item bg-white">
            <a :href="item.url" class="q-pa-md" style="width: 100%;height: 100%;" target="_blank">
              <q-img :src="item.image" :ratio="1/1" fit="contain" :alt="item.title"></q-img>
            </a>
            <q-tooltip transition-show="fade" transition-hide="fade">{{ item.title }}</q-tooltip>
          </div>
        </Slide>
      </Carousel>
    </div>
    <div class="advantages-container bg-warning relative-position">
      <q-img src="../../src/assets/layer1.svg" class="right-side"></q-img>
      <q-img src="../../src/assets/layer2.svg" class="left-side absolute-bottom-right"></q-img>
      <div class="content q-py-xl">
        <h3 class="text-bold text-h4">ایزی بیمه چه قابلیت هایی دارد؟</h3>
        <p style="font-size: 16px;" class="q-pt-lg">
          به منظور شناخت دقیق تر محصول 
          <a href="https://media.easybimeh.com/marketplace/assets/easybimehcatalog.pdf" class="text-white text-bold" target="_blank">"اینجا"</a>
           کلیک کنید
        </p>
        <!-- active advantage box -->
        <div class="carousel-container" style="display: inline-flex;">
          <q-carousel v-model="slide" :autoplay="2500" animated infinite transition-duration="500" style="height: 100%;background-color: transparent;">
            <q-carousel-slide v-for="item in itemsList" :key="item.id" class="active-advantage bg-white q-pa-sm" :name="item.id">
              <span class="number text-white text-h5">
                <span>{{item.id}}</span>
              </span>
              <span class="title q-px-md">
                <span>{{ item.title }}</span>
              </span>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
  </section>
  <!-- information section -->
  <section class="information-section q-py-md">
    <div class="container special-container">
      <div class="header row items-center q-py-lg">
        <q-img src="../../src/assets/info.svg" width="40px" fit="contain" class="q-mr-sm"></q-img>
        <span class="text-weight-medium">دانستنی های بیمه</span>
      </div>
      <!-- slider -->
      <carousel :items-to-show="1" dir="rtl" :items-to-scroll="1" :wrapAround="true" :autoplay="3000" :transition="500" :pauseAutoplayOnHover="true" :breakpoints="breakpoints">
        <Slide v-for="item in insureInfoList" :key="item.id">
          <div class="carousel__item">
            <q-card class="my-card q-my-md q-pa-md relative-position shadow-5">
              <q-card-section class="img-box">
                <q-img :src="item.image" fit="contain"></q-img>
              </q-card-section>
              <q-card-section class="text-box q-mt-sm q-mt-none">
                <div class="text-h6 text-bold">{{ item.title }}</div>
                <div class="text-subtitle2 description q-pt-md">{{ item.about }}</div>
              </q-card-section>
              <q-card-section class="footer-card bg-primary q-pt-none row justify-between items-center absolute-bottom q-pt-md text-white">
                <span style="font-size: 16px;">شرایط بیمه نامه</span>
                <span class="text-bold text-h5">&#8592;</span>
              </q-card-section>
            </q-card>
          </div>
        </Slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </section>
</template>

<script>
import { defineComponent,ref,onMounted } from "vue";
import axios from "axios";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default defineComponent({
  name: "InsureCompsSlider",
  components: {
    Carousel,
    Slide,
    Navigation
  },

  setup() {
    let companyList = [];
    let insureInfoList = []
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
          if (newItem.image) companyList.push(newItem);
        });
        response.data.message.insuranceType.forEach(function(item){
          let newItem = {
            id: item.id,
            title: item.title,
            image: item.imageUrl,
            about: item.description,
            dialogContent: item.generalTerms
          }
          insureInfoList.push(newItem)
        })
        // console.log(companyList);
      })
      .catch(function (error) {
        console.error(error);
      });

    let itemsList = [
      {id:1 ,title:'استعلام آنلاین قیمت ها'},{id:2 ,title:'انتقال به دامنه خصوصی'},{id:3 ,title:'مدیریت محتوای سایت'},{id:4 ,title:'گزارشات متنوع'},{id:5 ,title:'معماری سرویس گرا'},{id:6 ,title:'یادآور بیمه'},{id:7 ,title:'کیف پول'},{id:8 ,title:'مدیریت عملکرد شبکه فروش'},{id:9 ,title:'تعریف شبکه فروش'},{id:10 ,title:'مدیریت کاربران'},{id:11 ,title:'سیستم احراز هویت'},{id:12 ,title:'پشتیبانی آنلاین'},{id:13 ,title:'پیگیری درخواست ها'},{id:14 ,title:'خدمات فروش آنلاین بیمه'}
    ]
     onMounted(() => {
      let leftArrow = document.querySelector('.carousel__prev')
      let rightArrow = document.querySelector('.carousel__next')
      leftArrow.innerHTML = '<i class="gt-sm fa-solid fa-arrow-left circle shadow-10 text-white q-pa-md bg-primary" style="font-size:20px;border-radius:50%;float:right;margin-right:150px;"></i>'
      rightArrow.innerHTML = '<i class="gt-sm fa-solid fa-arrow-right circle shadow-10 text-white q-pa-md bg-primary" style="font-size:20px;border-radius:50%;float:left;margin-left:150px;"></i>'
    })
    return {
      companyList,
      slide: ref(1),
      itemsList,
      insureInfoList,
      compBreakpoints: {
        480: {
          itemsToShow: 4,
        },
        600: {
          itemsToShow: 4.75,
        },
        769: {
          itemsToShow: 5.85,
        },
        850: {
          itemsToShow: 6.5,
        },
        1000: {
          itemsToShow: 7.95,
        },
        1100: {
          itemsToShow: 8.95,
        },
        1200: {
          itemsToShow: 9.85,
        },
        1400: {
          itemsToShow: 11.75,
        },
      },
      breakpoints: {
        600: {
          itemsToShow: 2,
          itemsToScroll:2,
          snapAlign: 'start'
        },
        1200: {
          itemsToShow: 3,
          itemsToScroll:3
        },
      },
    };
  },
});
</script>

<style lang="scss" scoped>
  // slider section 
  .slider-section {
    .slider-container {
      min-height: 245px;
      position: relative;
      background: $gradient-primary;
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
    .advantages-container {
      min-height: 290px;
      position: relative;
      .right-side {
        width: 21vw;
        position:absolute;
        left: 0;
      }
      .left-side {
        width: 45%;
      }
      > div {
        width: 70%;
        margin: auto;
        .active-advantage {
          border-radius: 30px;
          display: inline-flex;
          align-items: center;
          .number {
            background: $gradient-primary;
            border-radius: 50%;
            min-width: 50px;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .title {
            font-size: 16px;
            min-width: 100px;
            white-space: nowrap;
          }
        }
      }
    }
  }
  // information section
  .information-section {
    .carousel__item {
      width: 100%;
    }
    .carousel__slide {
      padding: 10px;
    }
    .my-card {
      height: 450px;
      border-radius: 5px;
      overflow: hidden;
      .img-box {
        border-radius: 10px;
        overflow: hidden;
        padding: 0;
        height: 160px;
        .q-img {
          width: 100%;
          height: 100%;
        }
      }
      .text-box {
        text-align: left;
        .description {
          height: 100px;
          overflow: hidden;
        }
      }
      .footer-card {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 769px) {  // 0 to 769px
    
    .information-section {
      .header span {
        font-size: 16px;
        font-weight: 900;
      }
    }
    .slider-container {
      height: 320px;
    }
    .advantages-container {
      .content {
        position: absolute;
        top: -140px;
        padding: 0 20px;
      }
      .right-side {
        display: none;
      }
      .left-side {
        width: 100% !important;
      }
      p {
        display: none;
      }
      h3 {
        font-size: 16px !important;
        font-weight: 200;
        color: white;
      }
      .active-advantage {
        padding: 5px;
        .number {
          min-width: 30px !important;
          width: 10px !important;
          height: 30px !important;
          font-size: 18px !important;
        }
        .title {
          font-size: 14px !important;
        }
      }
    }
  }  
  @media (max-width: 1200px) {  // 0 to 1200px
    .advantages-container {
      position: relative;
      .right-side {
        bottom: 50%;
        transform: translate(-50% , 50%);
      }
      h3 {
        font-size: 26px;
      }
    }
  }  
  @media (min-width: 1200px) {  // 1200px to ..
  .advantages-container {
    position: relative;
    .right-side {
       transform: translate(-50% , -50px);
    }
    }
  } 
</style>
