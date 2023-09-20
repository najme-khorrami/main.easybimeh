<template>
  <q-layout view="lHh Lpr lFf">
    <!-- contact header -->
    <div class="contact-header bg-secondary">
      <div class="container full-width">
        <div class="row justify-between">
          <div class="right-side row justify-center items-center">
            <a v-for="item in conIconList" :key="item.id" class="cursor-pointer" :class="[item.name,'q-ma-xs','q-pa-xs']" target="_blank" :href="item.href">
              <q-icon :name="item.icon" size="12px">
                <q-tooltip transition-show="fade" transition-hide="fade">{{ item.title }}</q-tooltip>
              </q-icon>
            </a>
          </div>
          <div class="gt-sm left-side row justify-center items-center">
            <a href="aboutus" class="info text-white q-mr-md q-pa-xs">
              <q-icon name="fa-solid fa-circle-info" size="14px" class="q-px-xs"></q-icon>
              درباره ما
            </a>
            <a @click="scrollContactus" class="concat text-white q-pa-xs cursor-pointer">
              <q-icon name="fa-regular fa-envelope-open" size="14px" class="q-px-xs"></q-icon>
              تماس با ما
            </a>
          </div>
          <div class="lt-md left-side row justify-center items-center">
            <a @click="scrollSignup" class="concat text-white q-pa-xs cursor-pointer">
              ثبت نام
              <q-icon name="fa-solid fa-arrow-right-to-bracket" size="14px" class="q-px-xs"></q-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- menu header -->
    <div class="menu-header bg-primary row items-center shadow-1">
      <div class="container full-width full-height">
        <q-toolbar class="full-width full-height justify-between" style="padding: 0;">
          <q-btn flat class="btn--no-hover q-pa-none q-ma-none full-height" to="/">
            <q-img src="../../src/assets/easybimeh-logo-white.svg" alt="ایزی بیمه" width="180px" style="min-width:130px;" fit="fill"></q-img>
          </q-btn>
          <q-btn class="eb-connect full-height q-mx-sm" href="#">
            <q-img src="../../src/assets/eb-connect.svg" alt="eb-connect" width="130px" height="30px" fit="contain" class="gt-md"></q-img>
            <q-img src="../../src/assets/eb-short.svg" alt="eb-connect" width="25px" height="35px" fit="contain" class="lt-lg"></q-img>
          </q-btn>
          <q-btn color="info" padding="0 15px" size="14px" class="system-btn full-height">
            <a href="#" class="text-weight-light text-black">سامانه جامع مدیریت کارگزاری آنلاین</a>
          </q-btn>
          <div class="tabs full-height gt-sm row no-wrap justify-between items-center">
            <div v-for="item in tabList" :key="item.id">
              <a @click="showRequestDialog = (item.id == 4) ? true : false;" :href="item.href" class="block text-white q-pa-md" style="font-size: 14px;white-space: nowrap;">{{ item.title }}</a>
            </div>
          </div>
          <q-btn @click="scrollSignup" class="sign-up gt-sm full-height" size="14px" padding="0 35px">
            <a class="cursor-pointer text-white">ثبت نام</a>
          </q-btn>
          <button class="bar-btn lt-md absolute-right" @click="showMenu">
            <span></span><span></span><span></span>
          </button>
      </q-toolbar>
      </div>
    </div>

    <!-- toggle menu -->
    <section v-if="ifShow" class="lt-md full-menu bg-white q-px-lg column justify-between">
      <q-list>
        <q-item v-for="item in toggleMenuList" :key="item.id" class="item-menu">
          <a class="full-width text-black text-weight-medium q-py-sm" :href="item.href">{{ item.title }}</a>
        </q-item>
      </q-list>
      <div class="">
        <q-btn color="info" text-color="black" size="16px" class="text-weight-light" label="سامانه جامع مدیریت کارگزاری آنلاین"></q-btn>
      </div>
      <div class="row justify-center q-pb-md" style="position: sticky;bottom: 0;">
        <q-btn flat icon-right="info" label="درباره ما" style="border-left: 1px solid #dfdfdf;"></q-btn>
        <q-btn flat icon-right="phone" label="تماس با ما"></q-btn>
      </div>
    </section>

    <!-- dialog for following up request/sign up -->
    <q-dialog v-model="showRequestDialog" @hide="resetDialog">
      <q-card>
        <q-form @submit="onSubmit">
          <q-card-section class="row items-center">
            <q-img src="../../src/assets/note.svg" width="40px"></q-img>
            <div class="text-h6 q-pl-sm">پیگیری ثبت نام</div>
          </q-card-section>
          <q-card-section>
            <div class="row q-gutter-md">
              <q-input outlined v-model="trackingCode" dense label="کد رهگیری درخواست *" :rules="[val => val !== null && val !== '' || 'کد رهگیری را وارد کنید']" />
              <q-input outlined v-model="nationalCode" dense label="کد ملی متقاضی *" :rules="[val => val !== null && val !== '' || 'کد ملی متقاضی را وارد کنید']" />
              </div>
          </q-card-section>
          <q-separator />
          <q-card-actions align="right" class="q-pa-md">
            <q-btn padding="sm xl" class="text-weight-light" outline label="انصراف" color="primary" v-close-popup></q-btn>
            <q-btn padding="sm xl" class="text-weight-light" color="primary" type="submit" :disable="isAble = (trackingCode==''||nationalCode=='') ? true : false" label="پیگیری" ></q-btn>
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- first footer -->
    <div id="scroll-contactus" class="footer-1 text-dark q-pa-md">
      <div class="container full-width">
        <div class="row full-width">
          <div class="col-12 col-sm-4 column">
            <h6 class="q-my-xs q-mb-md text-weight-medium">امکانات سایت</h6>
            <ul>
              <li v-for="item in footerList" :key="item.id" class="facilities q-py-xs">
                <a :href="item.href" class="text-weight-regular" :target="item.target">{{ item.title }}</a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-sm-8 column contact-footer">
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
            <p class="text-white text-weight-light q-py-md" style="font-size: 14px;line-height: 30px;">{{ description }}</p>
          </div>
          <div class="q-pa-md row no-wrap">
            <!-- should add samandehi logo -->
            <div class="bg-white q-pa-sm q-ma-sm rounded-borders shadow-3 row justify-center items-center" style="width: 110px;height: 160px;">
              <a :href="samandehi" target="_blank">
                <img src="../../src/assets/samandehi.png" alt="samandehi logo" />
              </a>
            </div>
            <!-- should add enamad logo -->
            <div class="bg-white q-pa-sm q-ma-sm rounded-borders shadow-3 row justify-center items-center" style="width: 110px;height: 160px;">
              <a :href="enamadLink">
                <img src="" alt="enamad logo"/>
              </a>
            </div>
            <!-- should add anjoman logo -->
            <div class="cursor-pointer bg-white q-pa-sm q-ma-sm rounded-borders shadow-3 row justify-center items-center" style="width: 110px;height: 160px;" @click="anjomanDialog = true">
              <img src="../../src/assets/anjoman.png" /> 
            </div>
            <!-- anjoman dialog -->
            <q-dialog v-model="anjomanDialog">
              <q-card style="width: 900px; max-width: 80vw;">
                <q-card-section style="max-height: 50vh" class="scroll">
                  <q-img src="../../src/assets/certificate.jpg" fit="contain"></q-img>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn label="بستن" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
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
import { defineComponent } from 'vue'
import axios from "axios";

export default defineComponent({
  name: 'MainLayout',

  data() {
    return {
      conIconList: [
        {id:1 ,name:'linkedin' ,icon:'fab fa-linkedin-in'},
        {id:2 ,name:'telegram' ,icon:'fab fa-telegram-plane'},
        {id:3 ,name:'instagram' ,icon:'fab fa-instagram'},
        {id:4 ,name:'twitter' ,icon:'fab fa-twitter'},
      ],
      tabList: [
        {id:1 ,title:'برخی از مشتریان' ,href:'insuranceCentre' },
        {id:2 ,title:'شرکت های بیمه' ,href:'insuranceCompanies' },
        {id:3 ,title:'پرسش های متداول' ,href:'faq' },
        {id:4 ,title:'پیگیری درخواست' ,href:'#' },
      ],
      toggleMenuList: [
        {id:1 ,title:'ثبت نام' ,href:'#' },
        {id:2 ,title:'پیگیری درخواست' ,href:'#' },
        {id:3 ,title:'پرسش های متداول' ,href:'faq' },
        {id:4 ,title:'یادآور تمدید بیمه نامه' ,href:'#' },
        {id:5 ,title:'شرکت های بیمه' ,href:'insuranceCompanies' },
        {id:6 ,title:'برخی از مشتریان' ,href:'insuranceCentre' },
      ],
      footerList: [
        {id: 1,title: 'دانستنی های بیمه',href: 'typesOfInsurance',target: '_self'},
        {id: 2,title: 'پرسش های متداول',href: 'faq',target: '_self'},
        {id: 3,title: 'شرکت های بیمه',href: 'insuranceCompanies',target: '_self'},
        {id: 4,title: 'درباره ما',href: 'aboutus',target: '_self'},
        {id: 5,title: 'قوانین و مقررات',href: 'termsConditions',target: '_self'},
        {id: 6,title: 'انتقادات و پیشنهادات',href: 'registerComplaint',target: '_self'},
        {id: 7,title: 'کاتالوگ ایزی بیمه',href: 'https://media.easybimeh.com/marketplace/assets/easybimehcatalog.pdf',target: '_blank'}
      ],
      footerConct: [
        {title:'' ,src:'https://img.icons8.com/pulsar-color/30/3b8bff/secured-letter.png'},
        {title:'' ,src:'https://img.icons8.com/pulsar-color/30/3b8bff/phone.png'},
        {title:'' ,src:'https://img.icons8.com/pulsar-color/30/3B8BFF/place-marker.png'}
      ],
      trackingCode: '',
      nationalCode: '',
      ifShow: false,
      showRequestDialog: false,
      description: '',
      enamadLink: '',
      samandehi: '',
      anjomanDialog: false
    }
  },
  created() {
    axios
    .get("https://server.easybimeh.com/api/Information?key=0")
    .then((response) => {
      let data = response.data.message.information
      for (const key in data) {
        for(let i=0 ; i<4 ; i++) {
          if(this.conIconList[i].name == key) {
            this.conIconList[i].href = data[key][0].link
            this.conIconList[i].title = data[key][0].title
          }
        }
      }
      this.footerConct[0].title = data.email[0].content
      this.footerConct[1].title = data.tell[0].content
      this.footerConct[2].title = data.address[0].content
      this.description = data.description[0].content
      this.enamadLink = data.enamad[0].link
      this.samandehi = data.samandehi[0].link
    })
    .catch((error) => {
      console.error(error);
    }); 
  },
  methods: {
    showMenu() {
      this.ifShow = !this.ifShow
    },
    scrollContactus() {
      let contactFooter = document.querySelector('#scroll-contactus')
      window.scrollTo( 0, contactFooter.getBoundingClientRect().y - 50 );
    },
    scrollSignup() {
      if(this.$route.path === '/'){
        let contactFooter = document.querySelector('#scroll-signup')
        window.scrollBy({
          top: contactFooter.getBoundingClientRect().y - 50,
          left: 0,
          behavior: "smooth",
        });
      }else {
        this.$router.push('/')
        setTimeout(this.gotoSignup, 1000);
      }
    },
    gotoSignup() {
      let contactFooter = document.querySelector('#scroll-signup')
      window.scrollBy({
        top: contactFooter.getBoundingClientRect().y - 30,
        left: 0,
        behavior: "smooth",
      });
    },
    onSubmit() {
      // do sth on submit
      console.log("success")
    },
    resetDialog() {
      this.trackingCode = ''
      this.nationalCode = ''
    }
  }
})
</script>

<style lang="scss" scoped>
  :deep(.q-btn.btn--no-hover .q-focus-helper) {
    display: none;  /* no hover on buttons*/
  }
  // header
  .contact-header {
    height: 35px;
    z-index: 2;
  }
  .menu-header {
    height: 75px;
    position: sticky;
    top: 0;
    z-index: 2;
    .tabs div{
      transition: .4s;
      &:hover {
        background-color: rgba(70, 70, 70, 0.1);
      }
    }
    .bar-btn {
      width: 40px;
      height: 50px;
      padding: 5px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: transparent;
      border: 0;
      span {
        width: 100%;
        height: 3px;
        background-color: white;
      }
    }
  }
  .full-menu {
    z-index: 1;
    width: 100%;
    height:100vh;
    position: sticky;
    top: 75px;
    .item-menu {
      border-bottom: .5px solid #dfdfdf;
    }
    .item-menu:last-of-type {
      border-bottom: none;
    }
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
    img {
      display: block;
      width: 100%;
    }
  }
 
  @media (max-width: $breakpoint-sm-min) {  // 0 to 769px
    .contact-footer {
      h6 {
        margin-top: 25px;
      }
    }
    .footer-2 {
      > .container > .row {
        flex-direction: column;
      } 
    }
  }
  @media (max-width: $breakpoint-md-min) {  // 0 to 1024px
    .menu-header {
      .q-toolbar {
        justify-content: flex-start;
        .eb-connect {
          height: auto !important;
        }
      }
    }
  }
  @media (max-width: 1200px) {  // 0 to 1200px
    .system-btn {
        display: none;
    }
  }  
</style>