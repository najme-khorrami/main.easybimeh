<template>
  <q-page>
    <!-- banner and home section -->
    <section class="home-section bg-primary">
      <q-img src="../../src/assets/wave.svg" class="bottom-bg"></q-img> <!-- bottom background image -->
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-7 vertical-middle">
            <div class="q-py-lg vertical-middle"> 
              <q-img src="../../src/assets/svg-final-animated.svg" class="vertical-middle"></q-img>
            </div>
          </div>
          <div class="text-side col-12 col-sm-5 column justify-center q-pl-none">
            <div class="left-side text-center q-py-lg">
              <h2 class="text-white text-weight-bold q-px-sm">{{ headerDescription.title }}</h2>
              <p class="text-white">{{ headerDescription.content }}</p>
              <div class="q-mb-md">
                <q-btn padding="8px 12px">
                  <a href="infography" class="text-white">
                    {{ headerBtnLabel1 }}
                    <q-icon name="fa-solid fa-arrow-left" size="18px" class="q-pl-sm"></q-icon>
                  </a>
                </q-btn>
              </div>
              <q-btn padding="8px 16px" class="btn-label2" @click="scrollSignup">
                  {{ headerBtnLabel2 }}
              </q-btn>
            </div>
          </div>
          <div id="scroll" class="col-12 text-center">
            <span class="gt-xs text-white">اسکرول کنید</span>
            <q-img src="../../src/assets/scroll.svg" width="48px" height="128px" fit="contain"></q-img>
          </div>
        </div>
      </div>
    </section>
    <!-- steps section -->
    <section class="steps-section q-py-lg">
      <div class="container header row no-wrap justify-center items-center q-py-lg">
        <q-img src="../../src/assets/steps-icon.svg" width="40px" fit="contain" class="q-mr-sm"></q-img>
        <span>با چند گام ساده کسب و کار سنتی خودت رو الکترونیکی کن:</span>
      </div>
      <div class="lt-sm">
        <q-img src="../../src/assets/mobile-banner.png"></q-img>
      </div>
      <div class="gt-xs container">
        <div class="row no-wrap justify-around q-py-md" @mouseleave="deleteProgress">
          <q-card v-for="item in stepsList" :key="item.id" :id="item.id" class="step-item shadow-15 q-ma-md" @mouseover="runProgress">
            <q-card-section :id="item.id">
              <q-img :src="item.src" fit="contain" :ratio="1/1" max-width="200px" width="100%"></q-img>
            </q-card-section>
            <q-card-section class="q-mb-md" :id="item.id">
              <span >{{ item.title }}</span>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="container">
        <div class="gt-xs progress-container">
          <div class="steps">
            <div v-for="i in 4" :key="i" :class="['step','shadow-'+i]" :id="i">
              <span>{{i}}</span>
            </div>
          </div>
          <div class="progress-box">
            <div class="progress"></div>
          </div>
        </div>
      </div>

    </section>
  </q-page>

  <InsureCompsSlider />
  <ServicesComp />
  
</template>

<script>
import { defineComponent } from 'vue'
import InsureCompsSlider from 'components/InsureCompsSlider.vue';
import ServicesComp from 'components/ServicesComp.vue';
import axios from "axios";

export default defineComponent({
  name: 'IndexPage',
  components: {
    InsureCompsSlider,
    ServicesComp
  },

  data() {
    return {
      stepsList: [
        {id:1 ,title:'تو ایزی بیمه ثبت نام کن' ,src:'../../src/assets/step1.svg'},
        {id:2 ,title:'همکاران من ثبت نامت رو بررسی و تأیید میکنن' ,src:'../../src/assets/step2.svg'},
        {id:3 ,title:'وقت یه آموزش مختصره!' ,src:'../../src/assets/step3.svg'},
        {id:4 ,title:'به سایت اختصاصی خودت خوش اومدی!' ,src:'../../src/assets/step4.svg'}
      ],
      headerBtnLabel1: 'آشنایی بیشتر با ایزی بیمه',
      headerBtnLabel2: 'رایگان شروع کنید',
      headerDescription: ''
    }
  },
  created() {
    axios
    .get("https://server.easybimeh.com/api/Information?key=0")
    .then((response)=> {
        let data = response.data.message.information
        this.headerDescription = data.headerDescription[0]
    })
    .catch((error)=> {
        console.error(error);
    });
  },
  methods: {
    runProgress(event) {
      let step = event.target.id 
      let progressEl = document.querySelector('.progress')
      let length = 33.33 * (step - 1)
      progressEl.style.width = length+'%'
    },
    deleteProgress() {
      let progressEl = document.querySelector('.progress')
      progressEl.style.width = '0px'
    },
    scrollSignup() {
      let contactFooter = document.querySelector('#scroll-signup')
      window.scrollBy({
        top: contactFooter.getBoundingClientRect().y - 50,
        left: 0,
        behavior: "smooth",
      });
    },
  }
})
</script>

<style lang="scss" scoped>
  // home section
  .home-section {
    position: relative;
    height: fit-content;
    padding: 20px 0;
  }
  .bottom-bg {
    position: absolute;
    bottom: 0;
  }
  .left-side {
    & h2 {
      font-size: 26px;
      line-height: 50px;
      padding-bottom: 20px;
    }
    & p {
      font-size: 16px;
      line-height: 34px;
      padding-bottom: 8px;
    }
    & .q-btn {
      font-size: 18px;
      background: linear-gradient(90deg,#ed7e3c 0, #ffb154 100%);
      a {
        display: flex;
        align-items: center;
      }
      &.btn-label2 {
        background: linear-gradient(90deg,#09ebfa 0, #77d7dc 100%);
        color: #fff;
      }
    }
  }
  #scroll {
    position: relative;
    margin-top: -50px;
    span {
      margin: auto;
      writing-mode: vertical-rl;
      position: absolute;
      right: 50%;
      transform: translateX(50%) rotate(180deg);
      font-size: 12px;
    }
  }
  // steps section
  .steps-section {
    background: url(../../src/assets/new-pattern.svg) no-repeat center center;
    background-size: cover;
    .step-item {
      max-width: 300px;
      text-align: center;
      width: 100%;
      border-radius: 30px;
      span {
        font-size: 16px;
      }
    }
  }
  .progress-container {
    width: 80%;
    height: 150px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .progress-box {
      width: 100%;
      height: 2.5px;
      background-color: #cecece;
      .progress {
        width: 0%;
        height: 2.5px;
        background-color: $accent;
        transition: width 1s;
      }
    }
    .steps {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .step {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        background-color: $accent;
        rotate: 45deg;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          color: white;
          font-size: 16px;
          rotate: -45deg;
        }
      }
    }
    .progress,
    .step {
      box-shadow: -2px 4px 12px rgba(255, 153, 18, .65);
    }
  }

  @media (max-width: $breakpoint-sm-min) {  // 0 to 769px
    .home-section .left-side {
      h2 {
        font-size: 20px;
        line-height: 30px;
      }
      p {
        font-size: 15px;
        line-height: 26px;
      }
      .q-btn {
        font-size: 18px;
      }
    }
    .steps-section .header {
      justify-content: flex-start;
      span {
        font-size: 16px;
        white-space: pre-line;
        word-wrap: break-word;
        width: 100%;
        font-weight: 900;
      }
      .q-img {
        min-width: 40px !important;
      }
    }
  }
  @media (min-width: 769px) {  // 769px to ..
    .home-section .left-side {
      padding-left: 30px !important;
    }
  }
  @media (max-width: $breakpoint-xs-max) {  // 0 to 1200px
    .home-section {
      #scroll {
        margin-top: -10px;
        .q-img {
          margin-top: -60px;
        }
      }
      .left-side {
        .q-btn {
          width: 100%;
          a {
            width: 100%;
            display: block;
            text-align: center;
          }
        }
      }
    }
  } 
</style>