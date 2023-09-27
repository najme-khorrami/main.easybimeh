<template>
    <q-page>
        <section id="main-banner">
            <div class="container">
                <div class="row q-my-lg justify-center items-center">
                    <div class="col-md-6 col-xs-12 flex flex-center">
                        <q-img src="../../src/assets/isometric.svg" fit="contain" style="max-width: 600px;"></q-img>
                    </div>
                    <div class="col-md-6 col-xs-12 self-end">
                        <q-img src="../../src/assets/Assetss.svg" fit="contain" style="max-width: 80px;" class="assetss-icon q-mb-md"></q-img>
                        <p>
                            <h1>EasyBimehConnect</h1>
                            یک ساب برند از ایزی بیمه است که وظیفه ارائه خدمات
                            <span>B2B</span>
                            را بر پایه 
                            <span>API</span>
                            و
                            <span>B2B2C</span>
                            را بر پایه 
                            <span>وایت لیبل </span>
                            بر عهده دارد. اگر اپلیکیشن و یا سایت غیر بیمه‌ای دارید و تمایل به فروش بیمه نامه دارید از امروز میتوانید با کمترین هزینه و کمترین زمان به زنجیره نوآوری در صنعت بیمه متصل شوید و تجارت جدیدی بسازید. 
                        </p>
                        <a :href="phone.link">
                            شماره تماس : {{ phone.title }} 
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="main-products">
            <div class="container">
                <div class="products q-pa-lg">
                    <div class="title"><span>محصولات اصلی</span></div>
                    <div class="body row">
                        <div class="col-xs-12 col-md-5">
                            <div class="box column">
                                <q-img src="../../src/assets/Asset4.svg"></q-img>
                                <div>
                                    <div class="header q-px-lg">
                                        <span class="block">وب سرویس ها</span>
                                    </div>
                                    <div class="content">
                                        <div v-for="item in webService" :key="item.id">
                                            <q-img src="../../src/assets/check.svg" width="22px" height="22px" fit="contain"></q-img>
                                            <p class="q-pl-sm">
                                                <span>{{ item.spanContent }}</span>
                                                {{ item.pContent }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gt-sm col-md-2">
                            <div style="width: 100%;height: 100%;" class="flex flex-center">
                                <div style="border-left: 1px solid #f4f3f9;height: 100%;"></div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-5">
                            <div class="box column">
                                <q-img src="../../src/assets/Asset-pc.svg"></q-img>
                                <div>
                                    <div class="header q-px-lg">
                                        <span class="block">وایت لیبل white label </span>
                                    </div>
                                    <div class="content">
                                        <div>
                                            <q-img src="../../src/assets/check.svg" width="22px" height="22px" fit="contain"></q-img>
                                            <p class="q-pl-xs">
                                                این محصول با قابلیت اتصال به پنل 
                                                <span style="font-weight: bold;font-size: 18px;">ایزی بیمه</span>
                                    قادر به ایجاد بستری مناسب برای فروش بیمه نامه در کسب و کارهای دیگر است 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-container q-mt-md">
                                    <q-btn label="وایت لیبل چیست؟بیشتر بدانید " icon-right="fa-solid fa-arrow-left" text-color="white" class="white-label-btn" :href="mainBtnHref"></q-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="feature-product q-mt-xl">
                    <div class="header">
                        <span>
                            ایزی بیمه کانکت (EBConnect)، هر آنچه برای آنلاین شدن نیاز دارید!
                        </span>
                    </div>
                    <div class="content">
                        <div v-for="(item,index) in featureProducts" :key="index">
                            <q-img src="../../src/assets/check.svg" width="22px" height="22px" fit="contain"></q-img>
                            <p style="display: inline;">{{ item }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </q-page>
</template>
  
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EBIndexPage',

    data() {
        return {
            phone: {title: '02191691049', link: 'tel:02191691049'},
            webService: [
                {id:1 ,spanContent:'Inquiry Services', pContent:'وب سرویس‌های استعلام نرخ بیمه نامه‌های همه شرکت‌ها '},
                {id:2 ,spanContent:'Submit Services', pContent:'وب سرویس‌های لازم برای ثبت درخواست صدور انواع بیمه نامه و محصولات بیمه‌ای '},
                {id:3 ,spanContent:'Sale Network Service', pContent:'وب سرویس‌های مربوط به ثبت اعضا و مدیریت و پرداخت کارمزد‌های شبکه فروش '}
            ],
            mainBtnHref: 'whitelabel',
            featureProducts: [
                ' ایبیکانکت یک سیستم مبتنی بر وب است که تمام نیازهای آنلاین یک دفتر نمایندگی بیمه یا کارگزاری بیمه یا پیشخوان فروش بیمه را برآورده می‌کند و باعث افزایش فروش هرچه بیشتر می‌شود. ',' در ایبیکانکت شما می‌توانید به تعداد نامحدود وب سرویس استعلام نرخ بیمه نامه، محصولات بیمه ای و پرداخت خسارت را به سرویس‌های آنلاین خود اضافه نمایید، بیمه نامه‌های قابل ارایه و شبکه فروش خود را در سیستم تعریف کنید و در نهایت از طریق پنل مدیریتی ایبیکانکت بر اساس ظرفیت‌ها و سیاست‌های فروش B2C و B2B، تمام وب سرویس‌ها و خدمات مستقیم خود را به صورت یک وب سرویس یکپارچه به سایت‌ها و سرویس‌های فروش خود متصل نمایید. ',' ظرفیت فروش را به طور قابل توجهی افزایش دهد. '
            ]
        }
    }
})
</script>
  
<style lang="scss" scoped>
    $bg-header: #2e39bf;
    $bg-footer: #0a0d35;
    $secondry-color: #09EBAF;
    $highlight-color: #feb155;
    $light-background: #f4f6f9;

    #main-banner {
        background: url('../../src/assets/bg.svg') no-repeat center;
        background-size: cover;
        padding: 30px 0 200px 0;
        h1 {
            font-size: 30px;
            color: $secondry-color;
            display: inline;
            line-height: 0;
        }
        p {
            text-align: justify;
            color: #fff;
            font-size: 22px;
            span {
                color: $highlight-color;
            }
        }
        a {
            text-decoration: underline;
            color: #fff;
            font-size: 22px;
        }
    }
    #main-products {
        background: url('../../src/assets/section-3-bg.svg');
        background-size: 40%;
        background-position: bottom right;
        background-repeat: no-repeat;
        background-color: #f4f6f9;
        margin: auto;
        background-color: $light-background;
        .products {
            background-color: #fff;
            border-radius: 30px;
            transform: translateY(-150px);
            margin-bottom: -150px;
            box-shadow: 1px 2px 3px rgba(10,13,53,.1);
            .title {
                text-align: center;
                font-size: 18px;
                font-weight: bold;
                color: $secondry-color;
            }
            .body {
                .box {
                    .q-img {
                        max-width: 250px;
                        max-height: 200px;
                        margin: auto;
                    }
                    .header {
                        color: $bg-header;
                        font-weight: bold;
                        font-size: 18px;
                    }
                    .content {
                        p {
                            display: inline;
                            font-size: 15px;
                            span {
                                color: $highlight-color;
                            }
                        }

                    }
                    .btn-container {
                        border: 2px solid $bg-header;
                        width: 330px;
                        .q-btn {
                            background-color: $bg-header;
                            font-size: 18px;
                            font-weight: 300;
                            bottom: 5px;
                            left: 5px;
                            width: 330px;
                            :deep(.q-btn__content) {
                                justify-content: flex-start;
                            }
                            :deep(i) {
                                font-size: 18px; 
                            }
                        }
                    }
                }
            }
        }
        .feature-product {
            
            .header {
                width: 60%;
                span {
                    font-size: 24px;
                    font-weight: 500;
                    color: $bg-header;
                }
            }
            .content {
                width: 60%;
                p {
                    font-size: 15px;
                }
            }
        }
    }
    div {
        border: 1px solid red;
    }

    @media (max-width: $breakpoint-md-min) {
        #main-banner {
            padding: 0;
            padding-bottom: 20px;
            .q-img {
                max-width: 450px !important;
                margin-bottom: 20px;
            }
            .q-img.assetss-icon {
                display: none;
            }
            h1 {
                display: block;
                line-height: normal;
                text-align: center;
            }
        }
        #main-products {
            margin: 0;
            .products {
                border-radius: 0;
                transform: translateY(0);
                .body {
                    .btn-container {
                        width: 100% !important;
                        .q-btn {
                            width: 100% !important;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: $breakpoint-sm) {
        #main-banner {
            p {
                font-size: 18px;
            }
        }
    }
</style>