<template>
  <q-layout view="lHh Lpr lFf">
    <!-- contact header -->
    <div class="contact-header bg-secondary">
      <div class="container full-width">
        <div class="row justify-between">
          <div class="right-side row justify-center items-center">
            <a v-for="item in conIconList" :key="item.id" :href="item.href" :class="[item.name,'q-ma-xs','q-pa-xs']">
              <q-icon :name="item.icon" size="12px">
                <q-tooltip transition-show="fade" transition-hide="fade">{{ item.title }}</q-tooltip>
              </q-icon>
            </a>
          </div>
          <div class="left-side row justify-center items-center">
            <a href="aboutus" class="info text-white q-mr-md q-pa-xs">
              <q-icon name="fa-solid fa-circle-info" size="14px" class="q-px-xs"></q-icon>
              درباره ما
            </a>
            <a href="#" class="concat text-white q-pa-xs">
              <q-icon name="fa-regular fa-envelope-open" size="14px" class="q-px-xs"></q-icon>
              ارتباط با ما
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- menu header -->
    <div class="menu-header bg-primary row items-center shadow-1">
      <div class="container full-width full-height">
        <q-toolbar class="full-width full-height justify-between" style="padding: 0;">
          <q-img src="../../src/assets/easybimeh-logo-white.svg" alt="ایزی بیمه" width="150px" style="min-width:130px;" fit="fill"></q-img>
          <q-btn class="eb-connect full-height">
            <a href="#">
              <q-img src="../../src/assets/eb-connect.svg" alt="eb-connect" width="130px" height="30px" fit="contain"></q-img>
            </a>
          </q-btn>
          <q-btn color="info" padding="0 15px" size="14px" class="system-btn full-height">
            <a href="#">سامانه جامع مدیریت کارگزاری آنلاین</a>
          </q-btn>
          <q-tabs>
            <q-tab v-for="item in tabList" :key="item.id">
              <a :href="item.href" class="text-white" style="font-size: 14px;">{{ item.title }}</a>
            </q-tab>
          </q-tabs>
          <q-btn class="sign-up full-height" size="14px" padding="0 35px">
            <a href="#" class="text-white">ثبت نام</a>
          </q-btn>
      </q-toolbar>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- first footer -->
    <div class="footer-1 text-dark q-pa-md">
      <div class="container full-width">
        <div class="row full-width">
          <div class="col-3 column">
            <h6 class="q-my-xs q-mb-md text-weight-medium">امکانات سایت</h6>
            <ul>
              <li v-for="item in footerList" :key="item" class="facilities q-py-xs">
                <a href="#" class="text-weight-regular">{{ item }}</a>
              </li>
            </ul>
          </div>
          <div class="col column">
            <h6 class="q-my-xs q-mb-md text-weight-medium">ارتباط با ما</h6>
            <div v-for="item in footerConct" :key="item.title" class="row no-wrap items-center q-py-xs">
              <img :src="item.src" alt="">
              <span class="q-ml-sm text-weight-regular">{{ item.title }}</span>
            </div>
          </div>
          <!-- <div class="col"></div> -->
        </div>
      </div>
    </div>
    <!-- second footer -->
    <div class="footer-2 q-py-lg">
      <div class="container">
        <div class="row no-wrap items-center">
          <div class="q-pa-md">
            <q-img src="../../src/assets/easybimeh-logo-white.svg" width="150px"></q-img>
            <p class="text-white text-weight-light q-py-md" style="font-size: 14px;line-height: 30px;"> ایزی بیمه یک سامانه یکپارچه تحت وب است که ضمن ایجاد بستر ارائه خدمات بیمه الکترونیکی به دفاترنمایندگی بیمه ، مکانیزاسیون فعالیت های داخلی و شبکه فروش آنها را در یک فضای ساده و کاربر پسند فراهم
می کند. این سیستم مبتنی بر تکنولوژی رایانش ابری بوده و بدون اینکه دفاتر بیمه را با دردسرهای ناشی ازنگهداری و توسعه مواجه نماید ، امکانات مورد نیاز آنها را در یک فضای امن و مطمئن و بدون محدودیت زمانی و مکانی به آنها ارائه میکند. </p>
          </div>
          <div class="q-pa-md row no-wrap">
            <div class="bg-white q-pa-sm q-ma-sm rounded-borders shadow-3 row justify-center items-center" style="width: 110px;height: 160px;">
              <q-img src="../../src/assets/samandehi.png" alt="samandehi logo"></q-img>
            </div>
            <div class="bg-white q-pa-sm q-ma-sm rounded-borders shadow-3 row justify-center items-center" style="width: 110px;height: 160px;">
              <q-img src="https://logo.samandehi.ir/logo.aspx?id=133144&p=nbpdqftiqftinbpdshwlshwl" alt="enamd logo"></q-img>
            </div>
            <div class="bg-white q-pa-sm q-ma-sm rounded-borders shadow-3 row justify-center items-center" style="width: 110px;height: 160px;">
              <q-img src="../../src/assets/anjoman.png"></q-img>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- copy right section -->
    <section id="copy-right" class="bg-secondary text-center text-white q-pa-md text-weight-light">
      <span>2023</span>
      <span> © </span>
      <span>
        کلیه حقوق متعلق به 
        <a href="https://www.aka.co.ir/" class="text-info" target="_blank">شرکت معماران عصر دانش</a>
        می باشد.
      </span>
    </section>
  </q-layout>
</template>

<script>
import { defineComponent,ref,onMounted  } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const conIconList = [
      {id:1 ,name:'linkedin' ,href:'https://www.linkedin.com/company/easybimeh/' ,title:'Linkedin' ,icon:'fab fa-linkedin-in' },
      {id:2 ,name:'telegram' ,href:'https://t.me/easybimeh' ,title:'Telegram' ,icon:'fab fa-telegram-plane' },
      {id:3 ,name:'instagram' ,href:'https://www.instagram.com/easybimeh/' ,title:'Instagram' ,icon:'fab fa-instagram' },
      {id:4 ,name:'twitter' ,href:'https://twitter.com/BimehEasy' ,title:'Twitter' ,icon:'fab fa-twitter' },
    ]
    const tabList = [
      {id:1 ,title:'برخی از مشتریان' ,href:'#' },
      {id:2 ,title:'شرکت های بیمه' ,href:'#' },
      {id:3 ,title:'پرسش های متداول' ,href:'#' },
      {id:4 ,title:'پیگیری درخواست' ,href:'#' },
    ]
    const footerList = ['دانستنی های بیمه','پرسش های متداول','شرکت های بیمه','درباره ما','قوانین و مقررات','انتقادات و پیشنهادات','کاتالوگ ایزی بیمه']
    let footerConct = [
      {title:'info@easybimeh.com' ,src:'https://img.icons8.com/pulsar-color/30/3b8bff/secured-letter.png'},
      {title:'02191691049' ,src:'https://img.icons8.com/pulsar-color/30/3b8bff/phone.png'},
      {title: 'تهران - خیابان ولیعصر نبش خیابان توانیر(عباسپور) پلاک 2492 طبقه 1 واحد 104' ,src:'https://img.icons8.com/pulsar-color/30/3B8BFF/place-marker.png'}
    ]
    return {
      conIconList,
      tabList,
      footerList,
      footerConct,
    }
  }
})
</script>
<style lang="scss" scoped>
  // header
  .contact-header {
    height: 35px;
  }
  .menu-header {
    height: 75px;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .q-icon {
    transition: color .2s;
    vertical-align: baseline;
  }
  .linkedin .q-icon {
    color: $info;
    &:hover {
      color: $linkedin;
    }
  }
  .telegram .q-icon {
    color: $info;
    &:hover {
      color: $telegram;
    }
  }
  .instagram .q-icon {
    color: $info;
    &:hover {
      color: $instagram;
    }
  }
  .twitter .q-icon {
    color: $info;
    &:hover {
      color: $twitter;
    }
  }
  .info .q-icon,
  .concat .q-icon {
    color: $info;
  }
  .info, .concat {
    font-size: 12px;
    &:hover .q-icon{
      color: $telegram;
    }
  }
  .menu-header {
    padding: 10px 0;
  }
  .eb-connect {
    background: linear-gradient(104.3deg,#252eb0 0,#3440d6 100%);
  }
  .sign-up {
    background: linear-gradient(105.61deg,#ff9912 0,#ff9b17 25.89%,#ffa226 53.54%, #ffac3e 79%, #ffb95c 100%);
    white-space: nowrap;
  }
  .system-btn a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  // footer
  .footer-1 {
    background-color: $footer1;
    ul {
      list-style: none; 
      li::before {
        content: " ";
        background-color: $primary; 
        display: inline-block; 
        width: 4px;
        height: 4px;
        margin: 0 10px; 
      }
      .facilities a {
        color: #000;
        &:hover {
          color: $primary;
        }
      }
    }
  }
  .footer-2 {
    background: $gradient-primary;
  }
</style>