<template>
    
    <section id="header">
        <div class="container row">
            <div class="col-md-6 col-sm-8 col-xs-12 title">
                <h1>سامانه جامع مدیریت کارگزاری آنلاین بیمه </h1>
                <p>
                    <span>
               فناوری اطلاعات در خدمت مبارزه با ویروس کرونا </span>
                    <img src="../../src/assets/virus.png" alt="">
                </p>
            </div>
        </div>
        <div class="container row">
            <div class="col-md-6 col-sm-8 col-xs-12 detail">
                <p>  پروژه ای نوآورانه بر اساس نیاز اختصاصی کارگزاری های آنلاین </p>
                <p>و مبتنی بر الزامات فنی و امنیتی بیمه مرکزی </p>
            <div class="q-ma-lg">
                <div class="main-btn" @click="scroll('#btn')">
                   گارکزاری آنلاین چیست؟
                </div>
            </div>
            </div>
        </div>
    </section>

    <div class="container sections-container">

        <section id="btn">
            <div class="column">
                <div v-for="box in boxContent" :key="box.id" :class="['box',box.className]">
                    <div class="head">
                        <span>{{ box.title }}</span>
                        <q-img :src="`../../src/assets/${box.icon}`" width="30px" height="30px"></q-img>
                    </div>
                    <p>{{ box.pText }}</p>
                </div>                    
            </div>
        </section>

        <section id="about">
            <q-card>
                <q-card-section>
                    <q-img src="../../src/assets/organization.png" width="60px" height="60px"></q-img>           <span>شرکت معماران عصر دانش</span>
                </q-card-section>
                <q-card-section>
                    <p>
                    شرکتی دانش بنیان که از سال ۱۳۸۶ به صورت حرفه ای در حوزه ی تولید
                     نرم افزارهای سفارش مشتری فعال است (دارای رتبه از شورای عالی انفورماتیک کشور). اکنون با تکیه بر دانش و تجربه سال ها و انجام بیش از ده ها پروژه در ابعاد  کشوری، جهت رفع نیازهای فناورانه صنعت بیمه کشور اقدام به طراحی و تولید سرویسی جامع و رو به رشد نموده است که امروزه با نام تجاری 
                        <a href="https://easybimeh.com/" class="text-green">ایزی بیمه</a>
                        در فضای اینشورتک کشور شناخته شده است .
                    </p>
                </q-card-section>
            </q-card>
            <div class="about">
                <div class="box">
                    <div>
                        <span>سامانه جامع مدیریت کارگزاری آنلاین بیمه چیست ؟</span>
                        <q-img src="../../src/assets/lamp.png" width="30px" height="30px"></q-img>
                    </div>
                </div>
                <p>
                    <q-img src="../../src/assets/pin.png" width="25px" height="25px"></q-img>
                نام پروژه جدیدی است که بر اساس نیازهای اختصاصی کارگزاری های آنلاین
              و بر مبنای الزامات فنی، امنیتی سازمان بیمه مرکزی ج.ا.ا طراحی و تولید شده است 
                </p>
            </div>
        </section>

        <section id="samane">
            <div class="header">
                <q-img src="../../src/assets/doubletick-black.png" width="20px" height="20px" class="q-mr-sm"></q-img>
                <span>قابلیت ها</span>
            </div>
            <div class="body row justify-center q-mt-lg">
                <div class="box" v-for="(item,index) in capabilities.slice(0,4)" :key="index">
                    {{ item }}
                </div>
            </div>
            <div class="body row justify-center">
                <div class="box" v-for="(item,index) in capabilities.slice(4,6)" :key="index">
                    {{ item }}
                </div>
            </div>
        </section>

        <section id="modulebox">
            <div class="modulebox">
                <div class="title">
                    <q-img src="../../src/assets/pin.png" width="30px" height="30px"></q-img>
                    <span> سامانه جامع مدیریت کارگزاری آنلاین، مبتنی بر نیازهای کاربردی دفاتر کارگزاری آنلاین شامل 
            ماژول های ذیل می باشد که همگی به صورت یکپارچه در ارتباط هستند:</span>
                </div>
                <div class="body">
                    <OBTable />
                </div>
            </div>
            <div class="detail row justify-center">
                <q-img src="../../src/assets/pin.png" width="30px" height="30px" class="q-mr-sm"></q-img>
                <p>
                    دفاتر کارگزاری آنلاین می توانند نیازمندی های خود را با خرید  
                    <span>لایسنس</span>
                    نرم افزار تامین نمایند 
                </p>
            </div>
        </section>

        <section id="licensetop">
            <div class="title">
                خرید لایسنس
            </div>
            <div class="ul-box">
                <ul>
                    <li>
                        <q-img src="../../src/assets/pin-black.png" width="25px" height="25px"></q-img>
                        اصلی ترین ویژگی لایسنس 
                        <span>انطباق پذیری</span>
                        اپلیکیشن با نیاز مشتری می باشد.
                    </li>
                    <li>
                        <q-img src="../../src/assets/pin-black.png" width="25px" height="25px"></q-img>
                        با خرید لایسنس ، شرکت تولید کننده می بایست نیاز های مشتری را تا سطح رضایتمندی تامین نماید و توسعه سیستم در هر زمان براساس نیاز مشتری قابل برنامه ریزی است 
                    </li>
                    <li>
                        <q-img src="../../src/assets/pin-black.png" width="25px" height="25px"></q-img>
                        همچنین با خرید لایسنس ، مشتری مالک داده و نرم افزار است و
                        این نرم افزار جزئی از دارایی های سازمان خواهد بود که به راحتی قابلیت 
                        اتصال به سایر اپلیکیشن های سازمان را دارد و این مزیتی برای انجام تحلیل های هوشمند داده های سازمانی است
                    </li>
                    <li>
                        <q-img src="../../src/assets/pin-black.png" width="25px" height="25px"></q-img> قابل ذکر است که هزینه های نگهداری به عهده مشتری می باشد .
                    </li>
                </ul>
            </div>
        </section>

        <section id="installmentbox">
            <div class="title">
                خرید اقساطی
                <q-img src="../../src/assets/money.png" width="30px" height="30px"></q-img>
            </div>
            <div class="body">
                <div class="box" v-for="item in buyItems" :key="item.id">
                    <q-img src="../../src/assets/doubletick-green.png" width="25px" height="25px"></q-img>
                    <p>
                        {{ item.text1 }}
                        <span>{{ item.spantext }}</span>
                        {{ item.text2 }}
                    </p>
                </div>
            </div>
        </section>

    </div>

    <div class="contactus">
        <div class="container row items-end">
            <q-img src="../../src/assets/online.png" width="40px" height="50px"></q-img>
            <span> جهت مشاوره های خرید و آشنایی تخصصی با محصول با این شماره تماس حاصل فرمایید .</span>
            <a href="tel:02191691049">02191691049</a>
        </div>
    </div>

</template>

<script>
import { defineComponent } from 'vue'
import OBTable from 'components/OBTable.vue'

export default defineComponent({
    name: 'OBIndexPage',
    components: {
        OBTable
    },

    data() {
        return {
            boxContent: [
                {id:1,title:'کارگزاری آنلاین بیمه',pText:' کارگزاری آنلاین، عنوان مجوزی است که سازمان بیمه مرکزی جهت ساماندهی کارگزاری هایی که علاقه مند به فعالیت، بازارایابی و فروش بیمه نامه در فضای سایبری و اینترنت به صورت آنلاین و برخط هستند، طی آئین نامه شماره ۹۲/۲ اعلام نموده و متقاضیان را تشویق به دریافت این مجوز نموده است.',className:'box1',icon:''},
                {id:2,title:'امنیت',pText:' همانطور که مطلع هستید، فضای سایبری سرشار از مخاطرات است، در این بستر همه سامانه ها در دسترس و معرض تهدید از سوی کلاهبرداران، شیادان و هکرها هستند. تهدیدات امنیتی با توسعه سامانه ها رشد می کنند و ورود به این فضا، بدون تکیه به سامانه های امن و مورد تایید کاری پر مخاطره است با مطالعه آئین نامه کارگزاری آنلاین از سوی بیمه مرکزی ج.ا.ا به این مهم پی می  بریم که این مساله به قدری مهم است که در قالب ملزومات امنیتی جهت اخذ مجوز، تعیین شده و مورد بررسی و تایید قرار می گیرد.',className:'box2',icon:'lock.png'},
                {id:3,title:'یکپارچگی',pText:' همچنین یکی دیگر از مشکلات نرم افزارهای حوزه اینشورتک کشور و به طبع کارگزاری های آنلاین دسترسی به نرخ های انواع رشته ها از شرکت های مختلف بیمه گر بوده که  این مهم نیز در این آئین نامه به خوبی دیده شده و تلاشی بزرگ جهت رفع این مشکلات و تسهیل ورود کارگزاری های آنلاین به فضای اینشورتک کشور در حال انجام است و در نتیجه یکی دیگر از ملزومات اخذ این مجوز، ارائه تعهد و پایبندی به استفاده و اتصال از سوئیچ نرخ دهی  یکپارچه بیمه مرکزی است.',className:'box3',icon:'unit.png'},
            ],
            capabilities: [
                'قابلیت اتصال به سرویس شاهکار (جهت انطباق کد ملی و شماره تلفن)',' قابلیت اخذ مجوز نماد اعتماد الکترونیکی ','قابلیت اخذ گواهی ارزیابی امنیتی محصولات افتا از آزمایشگاه معتبر و  مورد تایید بیمه مرکزی  ','امکان اتصال به سوییچ نرخ دهی بیمه مرکزی','قابلیت اتصال به Tunnel اختصاصی بیمه مرکزی','قابلیت اتصال به سامانه سنهاب جهت ارائه استعلامات مورد نیاز '
            ],
            buyItems: [
                {id:1,text1:'پرداخت تسهیلات',spantext:'کم بهره',text2:'تا 70 درصد قیمت محصول'},
                {id:2,text1:'دوره تنفس',spantext:'3 تا 6 ماه',text2:'جهت آماده سازی در پرداخت اقساط'},
                {id:3,text1:'مدت زمان باز پرداخت وام',spantext:'حداکثر 3 سال',text2:'با دوره تنفس'}
            ]
        }
    },
    methods: {
        scroll(id) {
            let targetElem = document.querySelector(id)
            window.scrollBy({
                top: targetElem.getBoundingClientRect().y - 80,
                left: 0,
                behavior: "smooth",
            }); 
        }
    }
})
</script>

<style lang="scss" scoped>
    $green-color: rgb(7, 130,130);
    $yellow-color: #ffff66;
    $bg-color: #e0ebe6;
    $header-height: 80px;
    $light-blue: #82c9c9;
    $dark-green: #044949;
    $text-color: #24305E;
    $white-shadow: -2px 2px 5px #ffffff;
    $dark-shadow: -2px 2px 8px #051f1f;
    
    #header {
        height: 100vh;
        background: url('../../src/assets/banner.svg') 50% no-repeat;
        background-size: cover;
        transform: translateY(calc( -80px - 4px));
        margin-bottom: calc( -80px - 4px);
        .title {
            margin-top: $header-height;
            h1 {
                font-size: 26px;
                font-weight: bold;
                text-shadow: $white-shadow;
            }
            p {
                font-size: 18px;
                text-shadow: -1px 2px 5px #fff;
                justify-content: baseline;
                display: flex;
                img {
                    width: 30px;
                    height: 30px;
                    margin: 0 5px;
                }
            }
        }
        .detail {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 100px;
            p {
                font-size: 18px;
                color: #fff;
                font-weight: 700;
                text-shadow: $dark-shadow;
            }
            .main-btn {
                background-color: $green-color;
                color: #fff;
                font-size: 16px;
                padding: 10px 20px;
                box-shadow: -4px 4px $light-blue;
                display: inline;
                border-radius: 15px;
                cursor: pointer;
                &:hover {
                    background-color: $light-blue;
                    box-shadow: -4px 4px $green-color;
                }
            }
        }
    }
    .like-btn {
        background-color: $green-color;
        color: #fff;
        font-size: 16px;
        padding: 10px;
        display: inline;
        border-radius: 15px;
    }
    #btn {
        .box {
            box-shadow: -2px 8px 8px rgba(10,13,53,0.4);
            border-radius: 25px;
            padding: 30px;
            position: relative;
            background-color: #fff;
            margin-top: 60px;
            .head {
                position: absolute;
                top: -30px;
                left: 20px;
                background-color: $green-color;
                border-radius: 25px;
                padding: 8px 25px;
                text-align: center;
                span {
                    font-size: 17px;
                    color: #fff;
                }
            }
            p {
                font-size: 16px;
                line-height: 2;
            }
        }
        .box1 {
            .q-img {
                display: none;
            }
        }
        .box2 {
            width: 40%;
        }
        .box3 {
            width: 40%;
            align-self: flex-end;
        }
    }
    #about {
        margin: 30px 0;
        .q-card {
            border-radius: 25px;
            box-shadow: -4px 4px $green-color, -8px 8px $light-blue;
            padding: 30px;
            span {
                font-size: 17px;
                font-weight: 700;
            }
            p {
                font-size: 16px;
                line-height: 2;
            }
        }
        .about {
            margin-top: 30px;
            text-align: center;
            .box {
                    display: flex;
                    justify-content: center;
                > div {
                    border-radius: 25px;
                    border: 1px solid $dark-green;
                    padding: 15px 20px;
                    background-color: #fff;
                    span {
                        color: $dark-green;
                        font-size: 16px;
                        font-weight: 700;
                    }
                    &:hover {
                        background-color: $light-blue;
                        transform: scale(1.03);
                    }
                }
            }
            p {
                font-size: 15px;
                font-weight: 700;
                margin-top: 25px;
            }
        }
    }
    #samane {
        margin: 65px 0;
        text-align: center;
        .header {
            span {
                font-size: 20px;
                font-weight: 700;
            }
        }
        .body {
            flex-wrap: nowrap;
            .box {
                max-width: 170px;
                height: 150px;
                box-shadow: -6px 6px $green-color;
                border-radius: 15px;
                padding: 15px;
                font-size: 15px;
                background-color: #fff;
                margin: 20px;
                &:hover {
                    background-color: #bbddca;
                }
            }
        }
    }
    #modulebox {
        .modulebox {
            background-color: #fff;
            border-radius: 15px;
            padding: 20px;
            box-shadow: $dark-shadow;
            margin-bottom: 8px;
            .title {
                span {
                    font-size: 17px;
                    font-weight: 500;
                }
            }
            .body {
                margin: 20px auto 0;
            }
        }
        .detail {
            padding-top: 15px;
            p {
                font-size: 16px;
                font-style: italic;
                font-weight: 500;
                span {
                    color: $green-color;
                }
            }
        }
    }
    #licensetop {
        margin-top: 50px;
        text-align: center;
        .title {
            display: inline-block;
            background-color: $green-color;
            padding: 15px 30px;
            border-radius: 15px;
            box-shadow: $dark-shadow;
            color: #fff;
            font-size: 16px;
            margin: 15px 0;
        }
        .ul-box {
            background-color: #fff;
            box-shadow: $dark-shadow;
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 20px;
            ul {
                list-style-type: none;
                li {
                    font-size: 15px;
                    padding: 6px 0;
                    span {
                        color: $dark-green;
                    }
                    .q-img {
                        margin-right: 5px;
                    }
                }
            }
            text-align: start;
        }
    }
    #installmentbox {
        margin: 60px 0 30px;
        text-align: center;
        .title {
            display: inline-block;
            background-color: #fff !important;
            padding: 10px 30px;
            border-radius: 25px;
            color: $dark-green;
            font-size: 16px;
            margin: 20px 0;
            border: 1px solid $dark-green;
            font-weight: bold;
        } 
        .body {
            display: flex;
            justify-content: center;
            flex-wrap: nowrap;
            margin: 20px 0;
            .box {
                padding: 20px;
                border-radius: 15px;
                width: 190px;
                margin: 0 30px;
                background-color: #cce5d7;
                border: 2px solid #078282;
                box-shadow: -5px 5px #078282, -10px 10px #09aaaa, -15px 15px 4px #55f6f6;
                p {
                    display: inline;
                    line-height: 2;
                    font-size: 15px;
                    span {
                        font-weight: 800;
                        color: green;
                    }
                }
                &:hover {
                    transform: scale(1.025);
                }
            }
        }          
    }
    .contactus {
        background-color: $green-color;
        margin-top: 60px;
        box-shadow: $dark-shadow;
        padding: 15px 0;
        span {
            color: #fff;
            font-size: 17px;
            padding: 0 10px;
        }
        a {
            text-decoration: underline;
            font-size: 17px;
        }
        &:hover {
            background-color: $yellow-color;
            span {
                color: #000;
            }
        }
    }

    @media (max-width: $breakpoint-md-min) {
        #header {
            background: url('../../src/assets/middle-banner.svg') 50% no-repeat;
            background-size: cover;
            .title {
                margin-top: $header-height+40px;
            }
        }
        #btn {
            .box2,.box3 {
                width: 80%;
            }
        }
        #samane {
            .body {
                flex-wrap: nowrap;
                .box {
                    margin: 10px !important;
                }
            }
        }
    }
    @media (max-width: $breakpoint-sm-min) {
        #header {
            background: url('../../src/assets/mobile.svg') 50% no-repeat;
            background-size: cover;
            .title h1 {
                line-height: 24px;
                padding-bottom: 25px;
            }
            .detail {
                p {
                    font-size: 16px;
                    font-weight: 300;
                }
                .main-btn {
                    background-color: $yellow-color;
                    box-shadow: -1px 1px 5px #000;
                    color: #000;
                }
            }
        }
        #btn {
            .box2,.box3 {
                width: 100%;
            }
        }
        #samane {
            .header {
                span {
                    font-size: 18px;
                }
            }
            .body {
                flex-direction: column;
                align-items: center;
                .box {
                    flex-wrap: wrap !important;
                    max-width: 80% !important;
                    width: 100%;
                    height: auto !important;
                    font-size: 14px !important;
                    &:nth-of-type(even) {
                        background-color: aliceblue;
                        &:hover {
                            background-color: aliceblue;
                        }
                    }
                    &:nth-of-type(odd):hover {
                        background-color: #bbddca;
                    }
                }
            }
        }
        #installmentbox {
            .body {
                flex-direction: column;
                align-items: center;
                .box {
                    margin-bottom: 30px;
                }
            }
        }
    }
</style>