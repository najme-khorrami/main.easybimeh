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
      <section class="suggest-value text-center q-py-xl">
        <div class="title q-py-md">
          <h5 class="text-weight-bold">ارزش های پیشنهادی</h5>
        </div>
        <div class="caption q-py-md">
          <h6> ایزی بیمه چه مزایایی برای نمایندگان و کارگزاران بیمه ایجاد می‌کند؟ </h6>
        </div>
        
      </section>

    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Infography',

  methods: {
    setHeight() {
      return { minHeight: '400px' }
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
  }
</style>