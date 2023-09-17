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
              <div class="column flex q-mt-md q-pl-md">
                <div class="radio-box q-mb-sm">
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
                <div class="col-lg-3 col-sm-6 col-xs-12 q-pa-md">
                  <q-input borderless v-model="phone" type="text" label-slot label-color="black" placeholder="مانند: کارگزاری آسان بیمه">
                    <template #label>
                      <div>نام دفتر بیمه <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-pa-md">
                  <q-input borderless v-model="phone" type="text" label-slot label-color="black" placeholder="مانند: 124513645">
                    <template #label>
                      <div>کد نمایندگی <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-6 col-xs-12 q-pa-md">
                  <q-select borderless v-model="insureType" type="text" label-slot label-color="black" :options="typeOptions" behavior="menu">
                    <template #label>
                      <div>نمایندگی کدام شرکت بیمه هستید؟ <span class="text-red">*</span></div>
                    </template>
                  </q-select>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-pa-md">
                  <q-select borderless v-model="insureType" type="text" label-slot label-color="black" :options="typeOptions" behavior="menu">
                    <template #label>
                      <div>استان <span class="text-red">*</span></div>
                    </template>
                  </q-select>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-pa-md">
                  <q-select borderless v-model="insureType" type="text" label-slot label-color="black" :options="typeOptions" behavior="menu">
                    <template #label>
                      <div>شهرستان <span class="text-red">*</span></div>
                    </template>
                  </q-select>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-pa-md">
                  <q-input borderless v-model="phone" type="text" label-slot label-color="black" placeholder="مانند: easybimeh@gmail.com">
                    <template #label>
                      <div>ایمیل (اختیاری)</div>
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-pa-md">
                  <q-input borderless v-model="phone" type="number" label-slot label-color="black" placeholder="شماره تلفن خود را وارد کنید">
                    <template #label>
                      <div>تلفن <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
                <div class="col-xs-12 q-pa-md">
                  <q-input borderless v-model="phone" type="number" label-slot label-color="black" placeholder="نشانی خود را وارد نمایید">
                    <template #label>
                      <div>نشانی <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
          </div>

          <q-separator spaced="md" class="q-mx-md" color="grey-3"/>

          <div class="form-section-2 q-py-lg">
            <div class="header q-pl-md">
              <q-img src="../../src/assets/manager-info.svg" width="40px" height="40px" fit="contain"></q-img>
              <span class="text-primary q-pl-sm">اطلاعات مدیر (نماینده)</span>
            </div>
            <div class="main">
              <div class="row">
                <div class="col-lg-3 col-sm-6 col-xs-12 q-pa-md">
                  <q-input borderless v-model="phone" type="text" label-slot label-color="black" placeholder="نام خود را وارد نمایید">
                    <template #label>
                      <div>نام <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-pa-md">
                  <q-input borderless v-model="phone" type="text" label-slot label-color="black" placeholder="نام خانوادگی خود را وارد نمایید">
                    <template #label>
                      <div>نام خانوادگی <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-pa-md">
                  <q-input borderless v-model="phone" type="text" label-slot label-color="black" placeholder="تلفن همراه به منزله کلمه عبور شما است">
                    <template #label>
                      <div>تلفن همراه (کلمه عبور) <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-pa-md">
                  <q-input borderless v-model="phone" type="number" label-slot label-color="black" placeholder="کد ملی به منزله نام کاربری شما است">
                    <template #label>
                      <div>کد ملی (نام کاربری) <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
          </div>

          <q-separator spaced="md" class="q-mx-md" color="grey-3"/>

          <div class="form-section-3 q-py-lg row">
            <div class="col-6 column justify-between">
              <div class="header q-pl-md">
                <q-img src="../../src/assets/domain-info.svg" width="40px" height="40px" fit="contain"></q-img>
                <span class="text-primary q-pl-sm">اطلاعات دامنه</span>
              </div>
              <div class="domain-box">
                <div style="border: 1px solid red;">
                  
                  <q-input borderless v-model="phone" type="text" label-slot label-color="black" placeholder="نام انگلیسی با حداقل 4 حرف وارد نمایید">
                    <template #label>
                      <div>دامنه (عنوان سایت اختصاصی شما) <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="guide shadow-1 q-py-xs">
                <q-list>
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="../../src/assets/help-info.svg">
                      </q-avatar>
                    </q-item-section>
                    <q-item-section class="text-weight-bold" style="font-size: 20px;">راهنما</q-item-section>
                  </q-item>
                  <q-item class="items-start">
                    <q-item-section avatar style="min-width: 0;">
                      <q-avatar style="width: 25px;height: 25px;">
                        <img src="../../src/assets/tick.svg">
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <span>عبارتی که در اطلاعات دامنه ثبت می کنید، همان آدرس اینترنتی صفحه اختصاصی دفتر بیمه شما خواهد بود که می‌توانید آن را در اختیار دیگران قرار دهید تا از سایت شما دیدن کنند.</span>
                    </q-item-section>
                  </q-item>
                  <q-item class="items-start">
                    <q-item-section avatar style="min-width: 0;">
                      <q-avatar style="width: 25px;height: 25px;">
                        <img src="../../src/assets/tick.svg">
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <span>برای ثبت این اطلاعات حتماً از حروف لاتین استفاده نمایید و ترجیحاً نامی ساده مانند نام دفتر بیمه برای دامنه خود انتخاب کنید.</span>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>

            <div class="main">
             
            </div>
          </div>

          <q-separator spaced="md" class="q-mx-md" color="grey-3"/>

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
:deep(.q-field__control) {
     &::after {
      border: 1px solid black;
      border-radius: 3px;
    }
}
:deep(.q-field__native),
:deep(.q-field__label) {
  margin: 0 10px;
}
</style>