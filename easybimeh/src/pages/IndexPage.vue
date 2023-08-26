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
      <div class="row q-my-md" @mouseleave="deleteProgress">
        <div class="col-3 my-card" v-for="item in stepsList" :key="item.id">
          <div class="step-item bg-white shadow-15 q-pa-lg column items-center no-wrap" :id="item.id" @mouseover="runProgress">
            <q-img :src="item.src" fit="contain" :id="item.id"></q-img>
            <span class="text-center q-pt-md" :id="item.id">{{ item.title }}</span>
          </div> 
        </div>
      </div>
      <div class="progress-container">
        <div class="steps">
          <div class="step shadow-3" id="1"><span>1</span></div>
          <div class="step shadow-3" id="2"><span>2</span></div>
          <div class="step shadow-3" id="3"><span>3</span></div>
          <div class="step shadow-3" id="4"><span>4</span></div>
        </div>
        <div class="progress-box">
          <div class="progress"></div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  setup() {
    const stepsList = [
      {id:1 ,title:'تو ایزی بیمه ثبت نام کن' ,src:'../../src/assets/step1.svg'},
      {id:2 ,title:'همکاران من ثبت نامت رو بررسی و تأیید میکنن' ,src:'../../src/assets/step2.svg'},
      {id:3 ,title:'وقت یه آموزش مختصره!' ,src:'../../src/assets/step3.svg'},
      {id:4 ,title:'به سایت اختصاصی خودت خوش اومدی!' ,src:'../../src/assets/step4.svg'}
    ]
    
    return {
      stepsList,
      step: ref(1),
      runProgress(event) {
        this.step = event.target.id 
        let progressEl = document.querySelector('.progress')
        if(this.step === '1') progressEl.style.width = '0px'
        else if(this.step === '2') progressEl.style.width = '33.33%'
        else if(this.step === '3') progressEl.style.width = '66.66%'
        else if(this.step === '4') progressEl.style.width = '100%'
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
    span {
      font-size: 22px;
    }
    .step-item {
      border-radius: 30px;
      width: 100%;
      max-width: 320px;
      height: 100%;
      max-height: 340px;
      margin: auto;
      span {
        font-size: 16px;
        margin-top: 20px;
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