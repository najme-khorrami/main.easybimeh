<template>
  <q-page>
    <!-- banner and home section -->
    <section class="home-section bg-primary">
      <q-img src="../../src/assets/wave.svg" class="bottom-bg"></q-img> <!-- bottom background image -->
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-7">
            <div>
              <q-img src="../../src/assets/svg-final-animated.svg"></q-img>
            </div>
          </div>
          <div class="col-12 col-sm-5 column justify-end q-pl-md">
            <div class="left-side text-center">
              <h2 class="text-white text-weight-bold q-px-sm">ایزی بیمه؛ نرم افزار مدیریت دفاتر نمایندگی و کارگزاری بیمه</h2>
              <p class="text-white"> اگر می‌خواهید با تحول دیجیتال، کسب و کار خود را هوشمند کنید.اگر میخواهید وب سایت حرفه ای بیمه ای اختصاصی داشته باشید.اگر مدیریت عملکرد شبکه فروش دغدغه شماست.اگر می‌خواهید فروش آنلاین بیمه را تجربه کنید.ایزی بیمه همه این امکانات را در کنار ده‌ها قابلیت دیگر برای شما فراهم کرده است.</p>
              <q-btn padding="8px 12px">
                <a href="#" class="text-white">
                  کسب و کار خود را متحول کنید
                  <q-icon name="fa-solid fa-arrow-left" size="18px" class="q-pl-sm"></q-icon>
                </a>
              </q-btn>
            </div>
          </div>
          <div id="scroll" class="col-12 text-center">
            <span class="text-white">اسکرول کنید</span>
            <q-img src="../../src/assets/scroll.svg" width="48px" height="128px" fit="contain"></q-img>
          </div>
        </div>
      </div>
    </section>
    <!-- steps section -->
    <section class="steps-section q-py-md">
      <div class="header row justify-center items-center q-py-lg">
        <q-img src="../../src/assets/steps-icon.svg" width="40px" fit="contain" class="q-mr-sm"></q-img>
        <span>با چند گام ساده کسب و کار سنتی خودت رو الکترونیکی کن:</span>
      </div>
      <div class="container">
        <div class="row no-wrap justify-around" @mouseleave="deleteProgress">
          <q-card v-for="item in stepsList" :key="item.id" :id="item.id" class="step-item shadow-15 q-ma-md" @mouseover="runProgress">
            <q-card-section :id="item.id">
              <q-img :src="item.src" fit="contain" :ratio="1/1" width="200px"></q-img>
            </q-card-section>
            <q-card-section class="q-mb-md" :id="item.id">
              <span >{{ item.title }}</span>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="container">
        <div class="progress-container">
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
  <PackagesComp />
  
</template>

<script>
import { defineComponent } from 'vue'
import InsureCompsSlider from 'components/InsureCompsSlider.vue';
import PackagesComp from 'components/PackagesComp.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    InsureCompsSlider,
    PackagesComp
  },

  setup() {
    
    const stepsList = [
      {id:1 ,title:'تو ایزی بیمه ثبت نام کن' ,src:'../../src/assets/step1.svg'},
      {id:2 ,title:'همکاران من ثبت نامت رو بررسی و تأیید میکنن' ,src:'../../src/assets/step2.svg'},
      {id:3 ,title:'وقت یه آموزش مختصره!' ,src:'../../src/assets/step3.svg'},
      {id:4 ,title:'به سایت اختصاصی خودت خوش اومدی!' ,src:'../../src/assets/step4.svg'}
    ]
    return {
      stepsList,
      runProgress(event) {
        let step = event.target.id 
        let progressEl = document.querySelector('.progress')
        let length = 33.33 * (step - 1)
        progressEl.style.width = length+'%'
      },
      deleteProgress() {
        let progressEl = document.querySelector('.progress')
        progressEl.style.width = '0px'
      }
    }
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
    }
  }
  #scroll {
    position: relative;
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
      height: 3px;
      background-color: #cecece;
      .progress {
        width: 0%;
        height: 3px;
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
  }
</style>