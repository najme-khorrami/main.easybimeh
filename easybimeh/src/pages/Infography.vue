<template>
  <q-page :style-fn="setHeight">
    <div class="container">
      <section class="reason text-center q-py-md">
        <div class="title q-py-md">
          <h4 class="text-weight-bold">چرا ایزی بیمه؟</h4>
        </div>
        <div class="caption q-py-md">
          <h6>با ایزی بیمه به استقبال تحولات تکنولوژی در صنعت بیمه بروید</h6>
        </div>
        <p>نقش موثر بکارگیری فناوری در توانمندسازی کسب و کارها از یک طرف و افزایش ضریب نفوذ اینترنت و رسوخ مفاهیم تجارت الکترونیکی و کسب و کار الکترونیکی در زندگی روزمره افراد از سوی دیگر، تلنگری برای کسب و کارهای سنتی به حساب می‌آید. حفظ و تضمین بقای کسب و کارها در فضای رقابتی امروز، مستلزم همسویی آنها با تحولات فناورانه است. آنچه مسلم است، توسعه و نگهداری نرم‌افزارها و سخت افزارهایی که بتوانند بستر مناسب برای ارائه خدمات الکترونیکی را در اختیار کسب و کارها قراردهند، فارغ از هزینه‌های قابل توجه آن موضوعی تخصصی و پرچالش است که قطعاً در توان کسب و کارهای کوچک و حتی متوسط نیست. </p>
      </section>
      <section class="result text-center q-py-md">
        <div class="title q-py-md">
          <h6 class="text-weight-bold">راه حل ایزی بیمه چیست؟</h6>
        </div>
        <p>ایـزی‌بیمـه راه حلی نرم‌افزاری جامع و یکپارچه است که در تعامل مستقیم با فعالان صنعت بیمه و بر اساس نیازمندی‌های شناسایی شده این حوزه توسعه یافته است این سامانه بدون درگیر نمودن نمایندگان و کارگزاران بیمه با دردسرهای ناشی از نگهداری و توسعه نرم‌افزار، بستر ارائه خدمات بیمه الکترونیکی و همچنین مکانیزاسیون فعالیتهای داخلی و شبکه فروش را در یک فضای ساده و کاربر پسند برای آنها فراهم نموده است. ایزی بیمه خدمات اتوماسیون و هوشمند سازی مراکز بیمه را به‌عنوان یک خدمت و در غالب نرم‌افزار ارائه می‌کند (software as a service) برای استفاده از خدمات ایزی بیمه، کافیست به سایت ایزی بیمه انتخاب و سپس اطلاعات دفتر بیمه خود را ثبت نمایید و به راحتی سایت و پنل اختصاصی خود را دریافت کنید. </p>
      </section>
      <section class="suggest-value text-center q-py-lg">
        <div class="title q-py-md">
          <h5 class="text-weight-bold">ارزش های پیشنهادی</h5>
        </div>
        <div class="caption q-py-sm">
          <h6> ایزی بیمه چه مزایایی برای نمایندگان و کارگزاران بیمه ایجاد می‌کند؟ </h6>
        </div>
        <div class="box-container row justify-center q-py-md">
          <div class="box row shadow-1 q-ma-sm" v-for="item in boxContent" :key="item.id">
            <div class="number">{{ item.id }}</div>
            <div class="content q-pa-md q-pl-lg">
              <div class="topic q-pb-md">
                <h6 class="text-primary text-weight-bold">{{ item.title }}</h6>
              </div>
              <ul>
                <li v-for=" (li,index) in item.items" :key="index" class="text-weight-medium">{{ li }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="list-container q-py-sm">
          <div class="list" v-for="item in boxContent" :key="item.id">
            <div class="content q-pa-md">
              <div class="topic q-pb-md">
                <h6 class="text-primary text-weight-bold">{{item.id}}-{{ item.title }}</h6>
              </div>
              <ul>
                <li v-for=" (li,index) in item.items" :key="index" class="text-weight-medium">{{ li }}</li>
              </ul>
            </div>
            <q-separator v-if="item.id != 5"/>
          </div>
        </div>
      </section>
      <section class="beneficiaries">
        <div class="title q-py-md text-center">
          <h5 class="text-weight-bold">ذینفعان</h5>
        </div>
        <div class="benef-content full-width">
          <div>
            <img src="../../src/assets/Pyramid.svg" alt="">
          </div>
          <div class="list-group">
            <div v-for="item in beneficiaries" :key="item.id" :class="item.class">
              <div class="header">
                <span>{{ item.title }}</span>
              </div>
              <div class="li-row">
                <div>
                  <ul class="inline-block">
                    <li v-for=" (li,index) in item.item1" :key="index">{{ li }}</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li v-for=" (li,index) in item.item2" :key="index">{{ li }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="services q-mt-md">
      <div class="container">
        <div class="service-header text-center">
          <h4 class="text-white">چگونه از خدمات ایزی بیمه استفاده کنیم؟</h4>
        </div>
        <div class="service">
          <h5 class="text-white">مدل اشتراکی (اجاره ای)</h5>
          <ul>
            <li>
              در این مدل کلیه هزینه‌های برپایی، نگهداری و میزبانی نرم‌افزار برعهده مجموعه 
              <span>ایزی بیمه</span>
              می‌باشد و مسئولیت
              <span>پشتیبانی 42*7</span>
              ، حفظ امنیت اطلاعات و سرویس‌دهی توسط ایزی بیمه تضمین می‌گردد.
            </li>
            <li>
              مراکز بیمه می‌توانند در این مدل به‌صورت 
              <span>رایگان</span>
              ثبت نام نموده و به مدت یک ماه بصورت رایگان از خدمات سامانه بهره‌مند گردیده و از نزدیک با قابلیت‌های آن آشنا گردند.
            </li>
            <li>
              پس از اتمام دوره یک ماهه، مراکز بیمه می‌توانند با توجه به نیازمندی خود نسبت به تمدید بسته رایگان یا خرید یکی از بسته‌های 
              <span>طلایی</span>
              ،
              <span>نقره ای</span>
              یا 
              <span> برنزی </span>
              اقدام نموده و از خدمات سامانه بهره‌مند گردند.
            </li>
            <li>
              هزینه این مدل قطعاً از مدل اختصاصی مقرون به صرفه‌تر بوده و نمایندگان و کارگزارانی که از این مدل استفاده می‌کنند بلافاصله و بصورت همزمان از امکانات جدید و توسعه‌ای سامانه بهره‌مند خواهند شد. 
            </li>
          </ul>
          <div class="more-info">
            برای فعالسازی اشتراک 
            <a @click="gotoPackages" class="cursor-pointer text-info">اینجا</a>
            کلیک کنید
          </div>
        </div>
        <div class="service">
          <h5 class="text-white">مدل اختصاصی (خرید لایسنس)</h5>
          <ul>
            <li>
              این مدل برای 
              <span>شرکتهای بیمه‌ای</span>
              و 
              <span>کارگزاران</span>
              و 
              <span>نمایندگانی</span>
               که در مقیاس بزرگ فعالیت می‌کنند کاربرد دارد. شرکت‌هایی که می‌خواهند سامانه و اطلاعات مربوط به آن بر روی سرورهای اختصاصی خودشان پیاده و عرضه شود، می‌توانند از مدل اختصاصی استفاده کنند.
            </li>
            <li>
              در این مدل با توجه به نیازمندی و سطح کاربری شرکت‌ها و مراکز بیمه؛ قیمت گذاری محصول صورت گرفته و پس از انعقاد قرارد داد، یک نسخه اجرایی از سامانه ایزی بیمه بر روی 
              <span>دامنه اختصاصی</span>
              و 
              <span> سرورهای اختصاصی</span>
              خریدار راه‌اندازی و تحویل خواهد شد. 
            </li>
          </ul>
          <div class="more-info">
            جهت دریافت مشاوره رایگان، با شماره 02191691049 تماس بگیرید
          </div>
        </div>
        <div class="img-container">
          <q-img src="../../src/assets/cp.svg" fit="contain"></q-img>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Infography',

  data() {
    return {
      boxContent: [
        {id:1 ,title:'اتوماسیون فعالیت های داخلی مراکز بیمه ' ,items:[
          ' افزایش سرعت ، دقت و کیفیت ارائه خدمات',' کاهش چشمگیر هزینه های اداری',' قابلیت کنترل و نظارت لحظه ای بر فعالیت ها '
        ]},
        {id:2 ,title:'مدیریت ارتباط با مشتریان' ,items:[
          ' افزایش و بهبودی توانمندی جذب و حفظ مشتری',' کاهش هزینه های بازاریابی و فروش',' امکان شناسایی رفتار و الگوهای خرید مشتریان',' ارتقاء سطح کیفی خدمات و رضایتمندی مشتریان',' افزایش میزان وفاداری مشتریان'
        ]},
        {id:3 ,title:' مدیریت عملکرد شبکه فروش' ,items:[
          ' قابلیت تعریف و ایجاد دسترسی برای بازاریابان و پرسنل ستادی',' تعریف و ایجاد پرتفوی شبکه فروش',' ارائه گزارشات عملکرد شبکه فروش',' محاسبه کارمزد و سوابق تسویه و پرداختها به همراه گزارشات مالی'
        ]},
        {id:4 ,title:' وب سایت اختصاصی با قابلیت فروش الکترونیکی بیمه' ,items:[
          ' معرفی کسب و کار به سایرین بصورت الکترونیکی و در فضای وب','صرفه جویی در هزینه‌های تبلیغات و چاپ بروشور و کاتالوگ برای معرفی محصولات و خدمات ',' برندسازی و دیده شدن در جستجو‌های اینترنتی',' دسترسی و ارائه خدمات بدون محدودیت زمانی و مکانی '
        ]},
        {id:5 ,title:' دریافت خدمات پایدار و با کیفیت بصورت اشتراکی' ,items:[
          ' حذف هزینه‌های تولید و نگهداری نرم‌افزار',' اجتناب از چالش‌ها و دردسرهای توسعه نرم‌افزار',' انتخاب بسته خدماتی متناسب با نیازمندی‌های کسب و کار و پرداخت',' هزینه اجاره ناچیز در ازای خدمات دریافتی '
        ]}
      ],
      beneficiaries: [
        {id:1 ,title:'کارگزاران و نمایندگان بیمه' ,class:'list-1' ,item1:[' وب سایت و فضای کاری اختصاصی',' فروش الکترونیکی انواع بیمه نامه',' تعریف و فروش انواع طرح‌های بیمه‌ای',' تعریف سطوح دسترسی و حساب کاربری برای کلیه همکاران',' کارتابل اختصاصی کاربران با امکان ارجاع و پیگیری',' درگاه پرداخت و کیف پول',' تعریف شبکه فروش و محاسبه خودکار کارمزد'] ,item2:[' پیام رسانی و اعلان هوشمند به مشتریان',' قابلیت تعریف و تخصیص کدهای تخفیف ',' قابلیت تعریف کمپین‌های مناسبتی ',' مدیریت محتوای سایت (اخبار، اطلاعیه‌ها، اطلاعات تماس...)',' اطلاع رسانی محصولات و خدمات بیمه‌ای جدید به مشتریان',' یادآوری خودکار تمدید بیمه‌نامه']},
        {id:2 ,title:'شرکت های بیمه' ,class:'list-2' ,item1:[' امکان ایجاد شعبه مجازی',' امکان ایجاد سامانه یکپارچه شبکه فروش',' امکان مانیتورینگ عملکرد شعب و نمایندگان'] ,item2:[' دریافت گزارشات تحلیلی و امکان بهره‌گیری از',' ابزار هوش تجاری (BI) ']},
        {id:3 ,title:'بیمه گذاران سازمانی و حقیقی' ,class:'list-3' ,item1:[' استعلام آنلاین شرایط و قیمت انواع بیمه‌نامه ها',' ثبت آنلاین درخواست بیمه‌نامه',' پیگیری آنلاین درخواست‌های ثبت شده'] ,item2:[' کارتابل اختصاصی با قابلیت مشاهده سوابق درخواست‌ها',' کیف پول ']},
      ]
    }
  },
  methods: {
    setHeight() {
      return { minHeight: '400px' }
    },
    gotoPackages() {
      this.$router.push('/')
      setTimeout(this.scrollPackages, 1000);
    },
    scrollPackages() {
      let contactFooter = document.querySelector('#scroll-signup')
      window.scrollBy({
        top: contactFooter.getBoundingClientRect().y - 30,
        left: 0,
        behavior: "smooth",
      });
    }
  }
})
</script>

<style lang="scss" scoped>
  $grey-color: #757575;
  $black-color: #212121;
  .title {
    color: $black-color;
  }
  .caption {
    color: $grey-color;
  }
  p{
    color: $black-color;
    font-size: 16px;
    line-height: 30px;
    text-align: justify;
    text-align-last: center;
  }
  .suggest-value {
    .box {
      width: 555px;
      height: 200px;
      border-radius: 30px;
      overflow: hidden;
      text-align: start;
      .number {
        height: 100%;
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(162.33deg,#ffb95c 0,#ffac3e 25.89%,#ffa226 53.54%,#ff9b17 79%,#ff9912 100%);
        color: white;
        font-size: 56px;
      }
      .content {
        width: 85%;
        height: 100%;
      }
      ul {
        list-style-image: url('../../src/assets/red.svg');
        list-style-position: inside;
      }
    }
  }
  .list-container {
    display: none;
    .list {
      text-align: start;
      .topic h6 {
        font-size: 17px;
      }
      ul {
        list-style-image: url('../../src/assets/red.svg');
        list-style-position: inside;
      }
    }
  }
  .beneficiaries {
    .benef-content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      img {
        max-width: 600px;
        max-height: 500px;
      }
      > div {
        width: 50%;
      }
      .list-group {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding-left: 50px;
        .header span{
          font-weight: 600;
          font-size: 20px;  
          display: inline-block;
          margin-bottom: 8px;
        }
        .li-row {
          display: flex;
          flex-direction: row;
          div {
            padding: 0 20px 20px 0;
            min-width: 250px;
          }
        }
        ul {
          list-style-position: inside;
          li {
            font-size: 10px;
            font-weight: 600;
          }
        }
      }
    }
    .list-1 {
      .header span{
        color: $accent;
      }
      ul {
        list-style-image: url('../../src/assets/yelow.svg');
      }
    }
    .list-2 {
      .header span{
        color: #e5273a;
      }
      ul {
        list-style-image: url('../../src/assets/red.svg');
      }
    }
    .list-3 {
      .header span{
        color: $primary ;
      }
      ul {
        list-style-image: url('../../src/assets/blue.svg');
      }
    }
  }
  .services {
    background-color: #2f3061;
    padding-top: 50px;
    .service-header {
      h4 {
        background-color: $primary;
        border-radius: 50px;
        display: inline-block;
        padding: 20px 35px;
        font-size: 24px;
        font-weight: bold;
      }
    }
    .service {
      padding-top: 30px;
      h5 {
        background-color: $warning;
        border-radius: 50px;
        display: inline-block;
        padding: 10px 30px;
        font-size: 20px;
        font-weight: bold;
      }
      ul {
        list-style-image: url('../../src/assets/yelow.svg');
        list-style-position: inside;
        padding: 20px 0;
        line-height: 30px;
        li {
          color: white;
          font-size: 15px;
          span {
            color: $warning;
            font-weight: bold;
          }
        }
      }
      .more-info {
        font-size: 17px;
        font-weight: bold;
        color: $warning;
        padding: 0 0 15px 15px;
      }
    }
    .img-container {
      text-align: center;
      padding-top: 20px;
      .q-img {
        max-width: 600px;
      }
    }
  }

  @media (max-width: 1200px) {   /* 0 to 1200px*/
    .benef-content {
      flex-direction: column !important;
      align-items: center !important;
      > div {
        width: 100% !important;
        .li-row {
          div {
            padding: 0 20px 20px 0;
          }
        }
      }
      > div:nth-of-type(1) {
        display: flex;
        justify-content: center;
      }
    }
  }
  @media (max-width: 940px) {   /* 0 to 940px*/
    .container {
      padding: 0 10%;
    }
    h4 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
    .caption > * {
      font-size: 16px;
    }
    .box-container {
      display: none;
    }
    .list-container {
      display: block;
    }
    .benef-content {
      img {
        max-width: 350px !important;
        max-height: 250px !important;
      }
      .list-group{
        padding: 10px !important;
        .header {
          padding-top: 10px;
        }
        .li-row {
          flex-direction: column !important;
          div {
            padding: 0 0 !important;
            li {
              font-size: 15px;
              font-weight: 500;
            }
          }
        }
      }
    }
    .services {
      .service-header {
        h4 {
          background-color: transparent;
          border-radius: 50px;
          padding: 0;
          font-size: 20px;
        }
      }
      .service {
        padding-top: 2px;
        h5 {
          background-color: $warning;
          border-radius: 50px;
          padding: 8px 25px;
          font-size: 18px;
        }
      }
    }
  }
  @media (max-width: 600px) {  /* 0 to 600px*/
    .container {
      padding: 0 5%;
    }
  }
</style>