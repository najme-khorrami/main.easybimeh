<template>
  <q-page>
    <section class="top-header">
      <div class="container full-height">
        <div class="row justify-between items-center cursor-pointer full-height" @click="$router.push('/')">
          <div class="row items-center">
            <q-img src="../../src/assets/register-center.svg" class="q-mr-sm" width="40px" height="40px"></q-img>
            <h1 class="text-white q-my-none text-weight-regular" style="font-size: 20px;line-height: 20px;">
              فرم ثبت نام مراکز بیمه ای 
              <span class="text-white" style="font-size: 16px;">(نمایندگی / کارگزاری)</span>
            </h1>
          </div>
          <div>
            <span style="font-size: 16px;" class="q-pr-sm">بازگشت</span>
            <q-icon size="22px" name="chevron_left"></q-icon>
          </div>
        </div>
      </div>
    </section>  
    <div class="container">
      <section class="video-btn q-my-sm relative-position">
        <q-btn outline label="مشاهده راهنمای تصویری" icon="play_circle_outlined" class="absolute-right q-pl-none q-pr-lg" href="https://www.aparat.com/v/HFneS" target="_blank"></q-btn>
      </section>
      <section class="form q-my-md">
        <q-form @submit="onSubmit" @reset="onReset">

          <div class="form-section-1 q-py-lg">
            <div class="header q-pl-md">
              <q-img src="../../src/assets/office-info.svg" width="40px" height="40px" fit="contain"></q-img>
              <span class="text-primary q-pl-sm">اطلاعات دفتر بیمه</span>
            </div>
            <div class="main">
              <div class="row flex q-mt-md q-pl-md">
                <div class="radio-box q-mr-md">
                  <label>
                    نوع مرکز بیمه
                    <span class="text-negative">*</span>
                    :
                  </label>
                  <q-radio color="#616161" class="q-px-xs" dense v-model="insureType" val="InsurAgency" label="نمایندگی بیمه" />
                  <q-radio color="#616161" class="q-px-xs" dense v-model="insureType" val="InsurBrokerage" label="کارگزاری بیمه" />
                </div>
                <div class="radio-box">
                  <label>
                    شخصیت
                    <span class="text-negative">*</span>
                    :
                  </label>
                  <q-radio color="#616161" class="q-px-xs" dense v-model="personality" val="realPerson" label="حقیقی" />
                  <q-radio color="#616161" class="q-px-xs" dense v-model="personality" val="legalPerson" label="حقوقی" />
                </div>
              </div>
              <div class="row">
                <div class="col-3 q-pa-md">
                  <q-input outlined v-model="phone" type="text" color="black" label="نام دفتر بیمه *" placeholder="مانند: کارگزاری آسان بیمه"></q-input>
                </div>
                <div class="col-3 q-pa-md">
                  <q-input outlined v-model="phone" type="text" color="black" label="کد نمایندگی *" placeholder="مانند: 124513645"></q-input>
                </div>
                <div class="col-6 q-pa-md">
                  <q-select outlined v-model="insureType" type="text" color="black" :options="typeOptions" label="نمایندگی کدام شرکت بیمه هستید؟ *" behavior="menu"></q-select>
                </div>
                <div class="col-3 q-pa-md">
                  <q-select outlined v-model="insureType" type="text" color="black" :options="typeOptions" label="استان *" behavior="menu"></q-select>
                </div>
                <div class="col-3 q-pa-md">
                  <q-select outlined v-model="insureType" type="text" color="black" :options="typeOptions" label="شهرستان *" behavior="menu"></q-select>
                </div>
                <div class="col-3 q-pa-md">
                  <q-input outlined v-model="phone" type="text" color="black" label="ایمیل (اختیاری)" placeholder="مانند: easybimeh@gmail.com"></q-input>
                </div>
                <div class="col-3 q-pa-md">
                  <q-input outlined v-model="phone" type="number" color="black" label="تلفن *" placeholder="شماره تلفن خود را وارد کنید"></q-input>
                </div>
                <div class="col-12 q-pa-md">
                  <q-input outlined v-model="phone" type="number" color="black" label="نشانی *" placeholder="نشانی خود را وارد نمایید"></q-input>
                </div>
              </div>
            </div>
          </div>

          <q-separator spaced="md" class="q-mx-md"/>

          <div class="form-section-2 q-py-lg">
            <div class="header q-pl-md">
              <q-img src="../../src/assets/manager-info.svg" width="40px" height="40px" fit="contain"></q-img>
              <span class="text-primary q-pl-sm">اطلاعات مدیر (نماینده)</span>
            </div>
            <div class="main">
              <div class="row">
                <div class="col-3 q-pa-md">
                  <q-input outlined v-model="phone" type="text" color="black" label="نام *" placeholder="نام خود را وارد نمایید"></q-input>
                </div>
                <div class="col-3 q-pa-md">
                  <q-input outlined v-model="phone" type="text" color="black" label="نام خانوادگی *" placeholder="نام خانوادگی خود را وارد نمایید"></q-input>
                </div>
                <div class="col-3 q-pa-md">
                  <q-input outlined v-model="phone" type="text" color="black" label="تلفن همراه (کلمه عبور) *" placeholder="تلفن همراه به منزله کلمه عبور شما است"></q-input>
                </div>
                <div class="col-3 q-pa-md">
                  <q-input outlined v-model="phone" type="number" color="black" label="کد ملی (نام کاربری) *" placeholder="کد ملی به منزله نام کاربری شما است"></q-input>
                </div>
              </div>
            </div>
          </div>

          <q-separator spaced="md" class="q-mx-md"/>

          <div class="form-section-3 q-py-lg row">
            <div class="col-6">
              <div class="header q-pl-md">
                <q-img src="../../src/assets/domain-info.svg" width="40px" height="40px" fit="contain"></q-img>
                <span class="text-primary q-pl-sm">اطلاعات دامنه</span>
              </div>
              <div class="domain-box"></div>
            </div>
            <div class="col-6">
              <div class="guide shadow-1 q-py-md">
                <div class="header q-pl-md">
                  <q-img src="../../src/assets/help-info.svg" width="40px" height="40px" fit="contain"></q-img>
                  <span class="q-pl-sm">راهنما</span>
                </div>
                <div class="q-px-md">
                  <q-img src="../../src/assets/tick.svg" class="q-ma-sm" width="25px" height="25px" fit="contain"></q-img>
                  <span>عبارتی که در اطلاعات دامنه ثبت می کنید، همان آدرس اینترنتی صفحه اختصاصی دفتر بیمه شما خواهد بود که می‌توانید آن را در اختیار دیگران قرار دهید تا از سایت شما دیدن کنند.</span>
                </div>
                <div class="q-px-md">
                  <q-img src="../../src/assets/tick.svg" class="q-ma-sm" width="25px" height="25px"  fit="contain"></q-img>
                  <span>برای ثبت این اطلاعات حتماً از حروف لاتین استفاده نمایید و ترجیحاً نامی ساده مانند نام دفتر بیمه برای دامنه خود انتخاب کنید.</span>
                </div>
              </div>
            </div>

            <div class="main">
             
            </div>
          </div>

          <q-separator spaced="md" class="q-mx-md"/>

          <div class="form-section-4 q-py-lg">
            
          </div>

        </q-form>
      </section>
    </div>  
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'insuranceCentreRegistration',

  data() {
    return {
      insureType: '',
      personality: '',
    }
  }
})
</script>

<style lang="scss" scoped> 
.top-header {
  background: $gradient-primary;
  height: 65px;
  color: white;
}
.video-btn {
  height: 40px;
  .q-btn {
    color: $warning;
  }
}
:deep(.q-icon.on-left) {
  margin: 0 15px !important;
}
.form {
  font-size: 16px;
  .header {
    span {
      font-size: 20px;
      font-weight: 700;
    }
  }
}
:deep(.q-radio .q-radio__label) {
  font-size: 14px;
  color: #616161;
}
.border {
  border: 1px solid red;
}
</style>