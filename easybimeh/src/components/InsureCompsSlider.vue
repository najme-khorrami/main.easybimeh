<template>
  <!-- companies and advantages section -->
  <section class="slider-section">
    <div class="slider-container q-pt-xl">
      <q-img src="../../src/assets/wave.svg" class="absolute-bottom"></q-img>
      <Carousel :items-to-show="11.95" :items-to-scroll="3" :autoplay="1500" :transition="1000" :wrap-around="true" :pauseAutoplayOnHover="true">
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
      <div class="q-py-xl">
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
    <div class="container">
      <div class="header row items-center q-py-lg">
        <q-img src="../../src/assets/info.svg" width="40px" fit="contain" class="q-mr-sm"></q-img>
        <span>دانستنی های بیمه</span>
      </div>
      <!-- slider -->
      <carousel :items-to-show="1" dir="rtl" :items-to-scroll="1" :wrapAround="true" :autoplay="3000" :transition="1000" :pauseAutoplayOnHover="true" :breakpoints="breakpoints" @load="myFunction">
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
      leftArrow.innerHTML = '<i class="fa-solid fa-arrow-left circle shadow-10 text-white q-pa-md bg-primary" style="font-size:20px;border-radius:50%;transform:translate(-80px);"></i>'
      rightArrow.innerHTML = '<i class="fa-solid fa-arrow-right circle shadow-10 text-white q-pa-md bg-primary" style="font-size:20px;border-radius:50%;transform:translate(80px);"></i>'
    })
    return {
      companyList,
      slide: ref(1),
      itemsList,
      insureInfoList,
      breakpoints: {
        600: {
          itemsToShow: 2,
          itemsToScroll:2
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
    .advantages-container {
      min-height: 290px;
      .right-side {
        width: 21%;
        position:absolute;
        left: 0;
        transform: translate(-50%,-20%);
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
            background: linear-gradient(126.18deg,#1763cc 0,#1c68d3 26.1%,#2d7beb 57.76%, #3787fa 92.17%, #3b8bff 100%);
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
    .carousel svg {
      border: 5px solid red !important;
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
</style>
