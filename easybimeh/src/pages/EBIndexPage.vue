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
                <div id="products" class="products q-pa-lg">
                    <div class="title"><span>محصولات اصلی</span></div>
                    <div class="body row">
                        <div class="col-xs-12 col-md-5">
                            <div class="box column">
                                <q-img src="../../src/assets/Asset4.svg" fit="contain"></q-img>
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
                                <q-img src="../../src/assets/Asset-pc.svg" fit="contain"></q-img>
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
                    <div class="header q-mt-lg">
                        <span>
                            ایزی بیمه کانکت (EBConnect)، هر آنچه برای آنلاین شدن نیاز دارید!
                        </span>
                    </div>
                    <div class="content q-my-md">
                        <div v-for="(item,index) in featureProducts" :key="index" class="q-pb-sm">
                            <q-img src="../../src/assets/check.svg" width="22px" height="22px" fit="contain"></q-img>
                            <p style="display: inline;">{{ item }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="why-is-better" class="q-py-lg">
            <div class="title">
                <span>چرا وایت لیبل ایبیکانکت بهتر است؟ </span>
            </div>
            <div class="main q-py-md">
                <div class="container row justify-center items-center">
                    <q-card>
                        <q-card-section>
                            <img src="../../src/assets/section6.svg" alt="">
                        </q-card-section>
                        <q-card-section class="q-pt-none" tag="p">
                            شما 
                            <span>خدمات فروش</span>
                            انواع بیمه نامه از تمام شرکت‌ها و محصولات را همزمان خواهید داشت
                        </q-card-section>
                    </q-card>
                    <q-card>
                        <q-card-section>
                            <img src="../../src/assets/image4.svg" alt="">
                        </q-card-section>
                        <q-card-section class="q-pt-none" tag="p">
                            انجام
                            <span>خدمات تخصصی سئو</span>
                            با امکان نوشتن بلاگ توسط شما
                        </q-card-section>
                    </q-card>
                    <q-card>
                        <q-card-section>
                            <img src="../../src/assets/image3.svg" alt="">
                        </q-card-section>
                        <q-card-section class="q-pt-none" tag="p">
                            قدرت رقابتی بالا و کسب سود بالاتر
                        </q-card-section>
                    </q-card>
                    <q-card>
                        <q-card-section>
                            <img src="../../src/assets/image2.svg" alt="">
                        </q-card-section>
                        <q-card-section class="q-pt-none" tag="p">
                            متصل به سامانه شرکت‌ها و ارائه لحظه ای بهترین قیمت    
                        </q-card-section>
                    </q-card>
                    <q-card>
                        <q-card-section>
                            <img src="../../src/assets/image5.svg" alt="">
                        </q-card-section>
                        <q-card-section class="q-pt-none" tag="p">
                            ارسال 
                            <span>پیامک</span>
                            با نام شما
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </section>

        <section id="advantages" class="q-pt-lg">
            <div class="row items-end">
                <div class="image-box">
                    <img src="../../src/assets/section-5-bg.svg" alt="">
                </div>
                <div class="text-box">
                    <div class="title">
                        <span>مزیت‌های رقابتی ایبیکانکت </span>
                    </div>
                    <div class="li">
                        <img src="../../src/assets/check.svg" alt="">
                        <p> ایبیکانکت سعی دارد با توجه به شرایط بازار و نیاز‌های خاص دفاتر نمایندگی و کارگزاری فروش بیمه نامه در ایران، با ارائه طیف کاملی از نیازهای آنلاین به صورت SaaS، تمام امکانات یک دفتر آنلاین ATO را با کمترین هزینه و ریسک در اختیار فعالان این بازار قرار دهد. </p>
                    </div>
                    <div class="li">
                        <img src="../../src/assets/check.svg" alt="">
                        <p> در حالی که محصولات مشابه داخلی و خارجی موجود در بازار تنها قسمتی از این ویژگی‌ها را تحت پوشش قرار میدهند و همزمان هزینه راه اندازی بسیار بالایی دارند، راهکارهای ایبیکانکت برای افزایش فروش آنلاین محصولات بیمه ای بدون هیچ هزینه اولیه ای انجام می‌شود و کسب و کارهای مختلف می‌توانند بر اساس نیاز و اندازه خود از این ویژگی‌ها استفاده نمایند. </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="managment" class="q-py-lg">
            <div class="title q-pb-md">
                <span>امکانات مدیریتی و کنترلی ایبیکانکت</span>
            </div>
            <div class="container row justify-center">
                <q-card>
                    <q-card-section>
                        <img src="../../src/assets/section6.svg" alt="">
                    </q-card-section>
                    <q-card-section>
                        <p> مدیریت کاربران، مشتریان، شبکه فروش، محصولات بیمه ای، شرکت ها، کارمزد ها، درگاه پرداخت و ..</p>
                    </q-card-section>
                </q-card>
                <q-card>
                    <q-card-section>
                        <img src="../../src/assets/sec7.svg" alt="">
                    </q-card-section>
                    <q-card-section>
                        <p>پشتیبانی از کانالهای فروش B2C B2B و ایزی بیمه و دامنه اختصاصی </p>
                    </q-card-section>
                </q-card>
            </div>
        </section>

        <section id="web-service" class="q-py-lg">
            <div class="container">
                <div class="title">
                    <span>مهم ترین مزایای وب سرویس </span>
                </div>
                <div class="body">
                    <article>
                        <div v-for="(item,index) in webserviceAdv.slice(0,4)" :key="index">
                            <img src="../../src/assets/check.svg" alt="">
                            <p>{{ item }}</p>
                        </div>
                    </article>
                    <article>
                        <div v-for="(item,index) in webserviceAdv.slice(4,8)" :key="index">
                            <img src="../../src/assets/check.svg" alt="">
                            <p>{{ item }}</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <section id="api-provider" class="q-pt-lg row items-end">
            <div class="text-box">
                <div class="title">
                    <span>ارائه دهنده API برای صنعت بیمه </span>
                </div>
                <div class="body">
                    <div v-for="(item,index) in apiProvider" :key="index">
                        <img src="../../src/assets/check.svg" alt="">
                        <p>{{ item }}</p>
                    </div>
                </div>
            </div>
            <div class="image-box">
                <img src="../../src/assets/section8.svg" alt="">
            </div>
        </section>

        <section id="webservice-provider" class="q-py-lg">
            <div class="container">
                <div class="title">
                    <span>ارائه سرویس‌های بیمه </span>
                    <p>ابزارهای یکپارچه سازی ایبیکانکت برای پیاده سازی بدون ریسک EDI و XML</p>
                </div>
                <div class="box-container row">
                    <div class="column">
                        <q-card class="box box1">
                            <q-card-section>
                                <span>بیمه گذاران</span>
                            </q-card-section>
                            <q-card-section>
                                <div v-for="(item,index) in box1" :key="index">
                                    <img src="../../src/assets/check.svg" alt="">
                                    <p>{{ item }}</p>
                                </div>
                            </q-card-section>
                        </q-card>
                        <q-card class="box box2">
                            <q-card-section>
                                <span>این نرم افزار همانطور که می‌خواهید ایفای نقش می‌کند </span>
                            </q-card-section>
                            <q-card-section>
                                <div v-for="item in box2" :key="item.id" class="item q-py-sm">
                                    <img src="../../src/assets/check.svg" alt="">
                                    <span>{{ item.title }}</span>
                                    <p>{{ item.ptext }}</p>
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="column">
                        <q-card class="box box3">
                            <q-card-section>
                                <span> API‌هایی برای دفاتر نمایندگی </span>
                            </q-card-section>
                            <q-card-section>
                                <div v-for="(item,index) in box3" :key="index">
                                    <img src="../../src/assets/check.svg" alt="">
                                    <p>{{ item }}</p>
                                </div>
                            </q-card-section>
                        </q-card>
                        <q-card class="box box4">
                            <q-card-section>
                                <span>سرویس ایبیکانکت با عملکردی صحیح و قابل اطمینان</span>
                            </q-card-section>
                            <q-card-section>
                                <div v-for="(item,index) in box4_1" :key="index">
                                    <img src="../../src/assets/check.svg" alt="">
                                    <p>{{ item }}</p>
                                </div>
                                <div v-for="item in box4_2" :key="item.id" class="item q-py-sm">
                                    <img src="../../src/assets/check.svg" alt="">
                                    <span>{{ item.title }}</span>
                                    <br>
                                    <p>{{ item.ptext }}</p>
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="column">
                        <q-card class="box box5">
                            <q-card-section>
                                <span> وب سایت ها، اپلیکیشن‌های موبایلی و رسانه‌ی اجتماعی </span>
                            </q-card-section>
                            <q-card-section>
                                <div v-for="(item,index) in box5" :key="index">
                                    <img src="../../src/assets/check.svg" alt="">
                                    <p>{{ item }}</p>
                                </div>
                            </q-card-section>
                        </q-card>
                        <q-card class="box box6">
                            <q-card-section>
                                <span>در XML اصلی ایبیکانکت چه سرویسهایی وجود دارد؟</span>
                            </q-card-section>
                            <q-card-section style="position: relative;">
                                <div v-for="(item,index) in box6_1" :key="index">
                                    <p>{{ item }}</p>
                                </div>
                                <div v-for="(item,index) in box6_2" :key="index">
                                    <img src="../../src/assets/check.svg" alt="">
                                    <span>{{ item }}</span>
                                </div>
                                <q-img src="../../src/assets/img-sec9.svg" width="100px" fit="contain" style="position: absolute;left:40px;top: 50%;"></q-img>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>
            <img src="../../src/assets/footer.svg" class="bg" alt="">
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
            ],
            webserviceAdv: [
                ' دسترسی آنی به محصولات و طرح‌های بیمه ای همه شرکت‌های بیمه بصورت لحظه ای ',' رقابتی بودن قیمت‌ها و ارائه پایین ترین نرخ‌ها ',' سرعت بالا و پایداری سیستم ',' امکان ارائه اطلاعات در دو فرمت استاندارد XML و JSON ',' پروتکل‌های استاندارد و امنیت بالای وب سرویس ',' در دسترس بودن تابع‌های پیش نوشته شده به زبان #C ',' دردسترس بودن پنل RESELLER برای وب سرویس '
            ],
            apiProvider: [
                ' درصورتیکه قصد توسعه‌ی یک واسط ساده و یا پیاده سازی یک معماری خدمات محور جامع (CSA) را دارید، ایبیکانکت به ارائه‌ی یک سری از ابزارهای یکپارچه سازی بیمه ای، تجارب و تخصص‌های فنی پرداخته تا بتواند با کاهش زمان توسعه و حذف ریسک، شما را در رساندن به موفقیت یاری نماید ',' API خدمات اطلاعاتی بیمه ای تحت وب که به مشتریان این امکان را می‌دهد تا به مشاهده‌ی سوابق بیمه ای و کلیه‌ی سیاست‌های بیمه ای خود بپردازند. نرم افزار پیشنهادی ما به یکپارچه سازی و مدیریت API‌های قانونی با سرعتی بالا پرداخته است. از این رو در صورتیکه پروژه‌ی شما ماهیتی پیچیده داشته باشد، ما شما را در سهولت کار یاری می‌نماییم. ',' ما به یکپارچه سازی API/XML برای شرکت‌های بیمه ای پرداخته‌ایم تا بتوانند از مزایای حجم اطلاعاتی گسترده ای که در پایگاه‌های داده ای ذخیره شده است بهره ببرند. ',' استانداردهای داده ای زبان نشان گذاری توسعه پذیر (XML) با هدف انتقال و ذخیره سازی کارآمد داده‌های بیمه ای بین هسته‌های بیمه ای و وب سایت‌هایی که خدمات بیمه ای ارائه می‌دهند طراحی شده است. با این سیستم می‌توانید خدماتتان را به سایر صنایع نیز عرضه نمایید و سیاست‌های بیمه ای‌تان را در اختیار مشتریان صنایعی دیگر مانند صنایع خودرو در جهت خرید خودرو، بیمه مالکین خانه، بیمه مسافرت برای اپلیکیشن‌های مسافرتی، بیمه اجاره و بیمه عمر برای افرادی که ازدواج کرده‌اند و یا صاحب بچه هستند قرار دهید. ',' یک شرکت بیمه ای با ارائه‌ی API‌ها برای این اپلیکیشن‌ها در حوزه‌های مختلف، این فرصت را دارد تا مشتریان جدیدی را با تمرکز بر روی حوزه‌هایی که حتی به فکر بیمه‌ی خدمات خود نیافتاده اند جذب نماید. '
            ],
            box1: [
                ' بیمه گذاران می‌توانند مشتریان شما را بدون هیچ کاغذ بازی در ظرف چند ثانیه جذب نمایند. ',' برای مثال شما می‌توانید API‌ها را در اختیار اعضای اتحادیه‌های گوناگون، کارفرمایان و غیره قرار دهید تا آن‌ها خدمات بیمه ایشان را در اختیار مشتریان و یا کارمندانشان قرار دهند. ',' API‌ها می‌توانند شما را در انجام آسان تر و سریع تر کسب و کارتان یاری نمایند. '
            ],
            box2: [
                {id:1 ,title:'کانکتور‌های API:' ,ptext:' در چند دقیقه می‌توان به صورت خودکار به استخراج فراداده‌ها از سیستم بیمه ای اصلی و یک API استاندارد که شامل منطق بیمه می‌باشد دست یافت. '},
                {id:2 ,title:'توسعه API:' ,ptext:' توسعه با یک کلیک به این معنا بوده که API را می‌توان به آسانی مصرف نموده و یا آن را توسط هر توسعه دهنده‌ی دیگری برای هر سرویس دیجیتالی مورد استفاده قرار داد. '},
                {id:3 ,title:'طراحی API:' ,ptext:' با استفاده از ویزاردها و قالب‌های داخلی می‌توان به صورت خودکار به توسعه‌ی کامپوننت‌ها در داخل اپلیکیشن‌های موبایلی و یا وب، API‌هایی از نوع REST و یا خدمات وب SOA پرداخت. '},
                {id:4 ,title:' تست API:' ,ptext:' مدیریت آسان API‌ها به وسیله‌ی پنل نظارتی و مدیریت به منظور پیدا کردن همه‌ی تراکنش‌ها و فعالیت‌ها '},
                {id:5 ,title:' ارتقاء API:' ,ptext:' تزریق چندین لایه‌ی امنیتی و افزایش کارائی. در صورت نیاز می‌توان به ویرایش فراداده‌ها به منظور ایجاد یک راهکار سفارشی پرداخت. '},
                {id:6 ,title:' مدیریت API:' ,ptext:' مدیریت آسان API‌ها به وسیله‌ی پنل نظارتی و مدیریت API به منظور پیدا کردن همه‌ی تراکنش‌ها و فعالیت‌ها '}
            ],
            box3: [
                ' بسیاری از API‌ها را می‌توان به صورت داخلی مورد استفاده قرار داد و یا بعضی از آن‌ها را به صورت عمومی با شرکایتان استفاده نمایید تا فرصت‌های تجاری بیشتری را کسب نمایید و به جذب مشتریان بیشتری بپردازید ',' برای مثال بجای اینکه API‌ها تنها در اختیار شرکای انتخابی قرار گیرند، می‌توان آن‌ها را به صورت عمومی در اختیار هر نماینده ای قرار داد تا از آن‌ها برای فروش خدمات بیمه ای استفاده نماید. ',' همچنین ممکن است یک API را در اختیار یک اپلیکیشن قرار دهید تا شرکتتان از فرصت حضور در بازارهای جدید استفاده نماید '
            ],
            box4_1: [
                ' سرویس API ایبیکانکت روشی ایمن و صحیح است که در آن راهکاری سریع و قابل اطمینان را توسعه می‌دهیم. این روش می‌تواند به سیستم‌های پشتیبان اصلی شرکت‌های بیمه ای از طریق موبایل، بستر ابری و راهکارهای تحت وب متصل شود. با بهره برداری از این سرویس در سیستم فروشگاه و وب سایت الکترونیکی‌ می‌توان از مزایای آن بهره برد. ',' با بهره برداری از این نرم افزار در سیستم فروشگاه و وب سایت الکترونیکی‌تان می‌توانید از مزایای آن برخوردار شوید. خدمات ما محدودیت سنی و جنسیتی ندارد و از استانداردهای خاصی پیروی می‌نماید. '
            ],
            box4_2: [
                {id:1 ,title:'سرعت' ,ptext:' ارائه‌ی راهکارهای API در ظرف چند دقیقه به جای چندین ماه '},
                {id:2 ,title:'سادگی' ,ptext:' حذف نیاز در بکارگیری مجموعه ای از فناوری‌های پیچیده '},
                {id:3 ,title:'امنیت' ,ptext:' کاهش ریسک شکست با API‌هایی قوی از نظر امنیتی '}
            ],
            box5: [
                ' در این حوزه شما نقش یک مشتری API را بر عهده دارید و مصرف کننده‌ی اطلاعات وب سایت خودتان نیز هستید. روندهای جدیدی را می‌توان در وب سایت ها، اپلیکیشن‌ها و رسانه‌های اجتماعی در پیش گرفت تا خدمات بیمه ای خود را در اختیار کسب و کارها قرار دهید و از فرصت‌های بی شمار این روندها نیز استفاده نمایید. برای مثال همه‌ی وب سایت‌های فروشگاه‌های الکترونیکی از این نوع خدمت استفاده می‌کنند و آن را در کسب و کار خود نیز به کار گرفته‌اند؛ این کار به آن‌ها در مسائلی که به رضایت مندی مشتری ربط دارد کمک می‌نماید. ',' پاسخ به خواسته‌ها و نیازمندی‌های مشتریان و کسب و کارها می‌تواند شما را قادر سازد تا راهکارهای بیمه ای را به آن‌ها پیشنهاد کنید. می‌توان از فرصت‌های بیمه ای جدیدی مانند بیمه‌ی سفر، ازدواج و زایمان نیز استفاده نمود. '
            ],
            box6_1: [
                ' یکی از مزایای عمده‌ی XML این است که انواع دسته بندی‌های بیمه ای را در خود جای داده است.',' خدمات XML ایبیکانکت، شامل پیام‌های تجاری استانداردی است که برای انتقال اطلاعات در بین شرکت‌های بیمه ای و واسطه ها، دفاتر نمایندگان، وب سایت‌های فروش الکترونیک و سرویس دهندگان آنلاین در حوزه‌های زیر کاربرد دارد: '
            ],
            box6_2: [
                ' بیمه شخص ثالث ','بیمه بدنه خودرو','بیمه مسئولیت','بیمه عمر','بیمه مسافرتی','بیمه حوادث','بیمه آتش سوزی'
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
        .row {
            & > div:nth-child(1) {
                padding-right: 15px;
            }
            & > div:nth-child(2) {
                padding-left: 15px;
            }
        }
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
        background-color: $light-background;
        margin: auto;
        background-color: $light-background;
        .products {
            background-color: #fff;
            border-radius: 30px;
            transform: translateY(-150px);
            margin-bottom: -130px;
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
                        margin: 20px auto;
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
    #why-is-better {
        background-color: #fff;
        .title {
            text-align: center;
            span {
                color: $bg-header;
                font-size: 24px;
                font-weight: bold;
            }
        }
        .main {
            background: url('../../src/assets/sinos.svg') 20% 40% no-repeat;

            .q-card {
                width: 195px;
                height: 195px;
                text-align: center;
                margin: 15px 15px 0;
                border-radius: 30px;
                box-shadow: 2px 10px 12px rgba(10,13,53,.08);
                img {
                    width: 58px;
                    height: 55px;
                }
                p {
                    font-weight: bold;
                    span {
                        color: $bg-header;
                    }
                }
            }
        }
    }
    #advantages {
        background-color: $light-background;
        .image-box {
            width: 30%;
            img {
                display: block;
            }
        }
        .text-box {
            padding: 0 150px 0 50px;
            .title span {
                font-size: 24px;
                color: $bg-header;
                font-weight: bold;
                display: block;
                margin-bottom: 15px;
            }
            width: 70%;
            .li {
                padding-bottom: 15px;
                line-height: 25px;
                img {
                    width: 22px;
                    height: 22px;
                    margin-right: 8px;
                    border: 1px solid red;
                    transform: translateY(5px);
                }
                p {
                    font-size: 15px;
                    display: inline;
                }
            }
        }
    }
    #managment {
        background: url('../../src/assets/bg.svg') center no-repeat;
        background-size: cover;
        .title {
            text-align: center;
            span {
                color: #fff;
                font-weight: bold;
                font-size: 24px;
            }
        }
        .q-card {
            text-align: center;
            width: 400px;
            height: 250px;
            border-radius: 30px;
            margin: 10px;
            box-shadow: 2px 10px 12px rgba(10,13,53,.15);
            p {
                font-size: 18px;
            }
            img {
                width: 99px;
                height: 95px;
            }
        }
    }
    #web-service {
        background-color: #fff;
        .title span {
            font-size: 24px;
            font-weight: bold;
            color: $bg-header;
        }
        .body { 
            display: flex;
            line-height: 25px;
            article {
                p {
                    font-size: 15px;
                    display: inline;
                }
                img {
                    width: 20px;
                    height: 20px;
                    transform: translateY(5px);
                    margin-right: 8px;
                }
            }
            article:nth-child(2) {
                padding-left: 50px;
            }
        }
    }
    #api-provider {
        background-color: $light-background;
        .text-box {
            width: 60%;
            padding: 0 0 0 150px;
            margin: 10px 0 20px 0;
            .title {
                color: $bg-header;
                font-size: 24px;
                font-weight: bold;
            }
            .body {
                line-height: 25px;
                img {
                    width: 22px;
                    height: 22px;
                    margin-right: 8px;
                    transform: translateY(5px);
                }
                p {
                    display: inline;
                }
            }
        }
        .image-box {
            width: 40%;
            img {
                display: block;
            }
        }
    }
    #webservice-provider {
        background: url('../../src/assets/sinos.svg') 50% no-repeat;
        position: relative;
        .title {
            text-align: center;
            span {
                color: $bg-header;
                font-size: 24px;
                font-weight: bold;
            }
            p {
                font-size: 20px;
                font-weight: bold;
            }
        }
        .box-container {
            .column {
                width: 33.33%;
                .box {
                    margin: 12px 8px;
                    border-radius: 30px;
                    box-shadow: 2px 10px 12px rgba(10,13,53,.12);
                    .q-card__section:nth-of-type(1) {
                        background-color: $bg-header;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        height: 80px;
                        span {
                            color: #fff;
                            font-size: 18px;
                            font-weight: 400;
                        }
                    }
                    .q-card__section:nth-of-type(2) {
                        line-height: 25px;
                        span {
                            font-size: 18px;
                            font-weight: bold;
                            color: $bg-header;
                        }
                    }
                    p {
                        font-size: 15px;
                        display: inline;
                    }
                    img {
                        width: 20px;
                        height: 20px;
                        transform: translateY(5px);
                        margin-right: 8px;
                    }
                }
                .box2,.box4
                .q-card__section:nth-of-type(2) {
                    .item {
                        border-bottom: 1px solid rgb(226, 226, 226);
                        &:last-of-type {
                            border-bottom: none;
                        }
                    }
                }
            }
        }
        img.bg {
            position: absolute;
            width: 100vw;
            height: auto;
            left: 0;
            bottom: 0;
            z-index: -1;
        }
    }
    
    @media (max-width: $breakpoint-md-max) {
        #advantages .text-box {
            padding: 0 100px 0 50px;
        }
        #api-provider {
            .text-box {
                padding: 0 0 0 100px;
            }
        }
    }
    @media (max-width: 1200px) {
        #webservice-provider {
            .box-container {
                .column {
                    width: 50%;
                }
            }
        }
    }
    @media (max-width: $breakpoint-md-min) {
        #main-banner {
            padding: 0;
            padding-bottom: 20px;
            .row {
                & > div:nth-child(1) {
                    padding-right: 0;
                    margin-top: 30px;
                }
                & > div:nth-child(2) {
                    padding-left: 0;
                }
            }
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
            background-size: 100%;
            margin: 0;
            .container {
                padding: 0;
            }
            .products {
                width: 100%;
                margin: 0;
                border-radius: 0;
                transform: translateY(0);
                box-shadow: none !important;
                .title {
                    display: none;
                }
                .body {
                    .btn-container {
                        width: 100% !important;
                        .q-btn {
                            width: 100% !important;
                        }
                    }
                    .box > div {
                        padding: 20px 0;
                        .header span {
                            padding-bottom: 8px;
                        }
                        .content > div {
                            padding-bottom: 8px;
                        }
                        &.btn-container {
                            padding: 0;
                        }
                    }
                }
            }
            .feature-product {
                min-height: 700px;
                padding: 0 20px;
                .header,
                .content {
                    width: 100%;
                }
                .header {
                    text-wrap: wrap;
                }
            }
        }
        #advantages .text-box {
            padding: 0 20px !important;
        }
        #api-provider {
            .text-box {
                padding: 0 20px !important;
                width: 100%;
            }
            .image-box {
                width: 100%;
            }
        }
    }
    @media (max-width: $breakpoint-sm) {
        #main-banner {
            p {
                font-size: 18px;
            }
        }
        #main-products {
            .feature-product {
                margin-top: 10px;
                .header span {
                    font-size: 16px;
                    font-weight: bold;
                }
                .content p {
                    font-size: 15px;
                }
            }
        }
        #why-is-better {
            .title {
                span {
                    font-size: 18px;
                }
            }
            .main {
                background: none;
                .container {
                    padding: 0;
                }
                .q-card {
                    width: 100%;
                    height: auto;
                    margin: 0 20px;
                    border-radius: 0;
                    box-shadow: none !important;
                    padding-top: 20px;
                    border-bottom: 1px solid #f4f3f9;
                    p {
                        font-size: 16px;
                    }
                }
            }
        }
        #advantages {
            > div {
                flex-direction: column-reverse;
            }
            .image-box {
                width: 100%;
            }
            .text-box {
                .title span {
                    font-size: 24px;
                }
                width: 100%;
            }
        }
        #api-provider {
            .title span {
                font-size: 20px;
            }
        }
        #webservice-provider {
            .title {
                span {
                    font-size: 20px;
                }
                p {
                    font-size: 15px;
                }
            }
        }
    }
    @media (max-width: 900px) {
        #web-service {
            .title span {
                font-size: 20px;
            }
            .body { 
                flex-direction: column;
                article:nth-child(2) {
                    padding-left: 0;
                }
            }
        }
        #webservice-provider {
            background: none;
            .box-container {
                .column {
                    width: 100%;
                    .box {
                        margin: 12px 40px;
                        border-radius: 0;
                        .q-card__section:nth-of-type(1) {
                            span {
                                font-size: 16px;
                            }
                        }
                        .q-card__section:nth-of-type(2) {
                            line-height: 23px;
                            span {
                                font-size: 16px;
                            }
                        }
                        img {
                            width: 18px;
                            height: 18px;
                        }
                    }
                }
            }
            img.bg {
                display: none;
            }
        }
    }
    @media (max-width: $breakpoint-sm-min) {
        #advantages {
            .text-box {
                padding: 0 10px !important;
                .title span {
                    font-size: 20px;
                }
            }
        }
        #api-provider {
            .text-box {
                padding: 0 10px !important;
                margin-bottom: 0;
            }
        }
        #managment {
            .title span {
                font-size: 18px;
            }
        }
        #webservice-provider {
            .container {
                padding: 0 0;
            }
            .box-container {
                .column {
                    .box {
                        margin: 12px 0;
                    }
                }
            }
        }
    }
</style>