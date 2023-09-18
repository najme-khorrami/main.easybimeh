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
        <q-form @submit="onSubmit" greedy>

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
                <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                  <q-input borderless v-model="officeName" type="text" label-slot label-color="black" placeholder="مانند: کارگزاری آسان بیمه" no-error-icon reactive-rules="false" :rules="[ val => val !== '' || 'نام دفتر بیمه الزامی است']">
                    <template #label>
                      <div>نام دفتر بیمه <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                  <q-input borderless v-model="codeAgency" type="text" label-slot label-color="black" placeholder="مانند: 124513645" no-error-icon reactive-rules :rules="[ val => val !== '' || 'کد نمایندگی الزامی است']">
                    <template #label>
                      <div class="row">
                        <div v-if="insureType == 'InsurAgency' || insureType == ''">کد نمایندگی</div>
                        <div v-if="insureType == 'InsurBrokerage'">کد کارگزاری</div>
                        <span class="text-red q-pl-xs">*</span>
                      </div>
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-6 col-xs-12 q-px-md q-pt-md">
                  <q-select v-if="insureType == 'InsurAgency' || insureType == ''" borderless v-model="insureCompany" type="text" label-slot label-color="black" :options="companiesOptions" behavior="menu" no-error-icon reactive-rules :rules="[ val => val !== '' || 'نمایندگی کدام شرکت بیمه هستید؟ الزامی است']">
                    <template #label>
                      <div>نمایندگی کدام شرکت بیمه هستید؟ <span class="text-red">*</span></div>
                    </template>
                    <template v-slot:append>
                      <q-icon v-if="insureCompany !== ''" name="close" @click.stop.prevent="insureCompany = ''" class="cursor-pointer" size="14px" />
                    </template>
                  </q-select>
                  <!-- should fix -->
                  <q-select v-if="insureType == 'InsurBrokerage'" borderless v-model="insureCompany" type="text" label-slot label-color="black" :options="companiesOptions" behavior="menu" multiple>
                    <template #label>
                      <div>کارگزاری کدام شرکت های بیمه هستید؟</div>
                    </template>
                  </q-select>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                  <q-select borderless v-model="state" type="text" label-slot label-color="black" :options="provinceOptions" behavior="menu" no-error-icon reactive-rules :rules="[ val => val !== '' || 'استان الزامی است']" @update:model-value="getProvinceId">
                    <template #label>
                      <div>استان <span class="text-red">*</span></div>
                    </template>
                    <template v-slot:append>
                      <q-icon v-if="state !== ''" name="close" @click.stop.prevent="state = ''" class="cursor-pointer" size="14px" />
                    </template>
                  </q-select>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                  <q-select borderless v-model="city" type="text" label-slot label-color="black" :options="cityOptions" behavior="menu" no-error-icon reactive-rules :rules="[ val => val !== '' || 'شهرستان الزامی است']">
                    <template #label>
                      <div>شهرستان <span class="text-red">*</span></div>
                    </template>
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-italic text-grey">
                          موردی جهت انتخاب وجود ندارد
                        </q-item-section>
                      </q-item>
                    </template>
                    <template v-slot:append>
                      <q-icon v-if="city !== ''" name="close" @click.stop.prevent="city = ''" class="cursor-pointer" size="14px" />
                    </template>
                  </q-select>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                  <q-input borderless v-model="email" type="email" label-slot label-color="black" placeholder="مانند: easybimeh@gmail.com" no-error-icon reactive-rules :rules="[ (val) => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(val) || val == '' || 'مقدار ایمیل (اختیاری) معتبر نمی باشد']">
                    <template #label>
                      <div>ایمیل (اختیاری)</div>
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                  <q-input borderless v-model="phone" type="number" label-slot label-color="black" placeholder="شماره تلفن خود را وارد کنید" no-error-icon reactive-rules :rules="[ val =>  val !== '' || 'تلفن الزامی است']">
                    <template #label>
                      <div>تلفن <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
                <div class="col-xs-12 q-px-md q-pt-md">
                  <q-input borderless v-model="address" type="text" label-slot label-color="black" placeholder="نشانی خود را وارد نمایید" no-error-icon reactive-rules :rules="[ val => val !== '' || 'نشانی الزامی است']">
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
                <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                  <q-input borderless v-model="name" type="text" label-slot label-color="black" placeholder="نام خود را وارد نمایید" no-error-icon reactive-rules :rules="[ val => val !== '' || 'نام الزامی است' , val =>  /^[^\d]+$/.test(val) || 'مقدار نام معتبر نمی باشد']">
                    <template #label>
                      <div>نام <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                  <q-input borderless v-model="family" type="text" label-slot label-color="black" placeholder="نام خانوادگی خود را وارد نمایید" no-error-icon reactive-rules :rules="[ val => val !== '' || 'نام خانوادگی الزامی است' , val =>  /^[^\d]+$/.test(val) || 'مقدار نام خانوادگی معتبر نمی باشد']">
                    <template #label>
                      <div>نام خانوادگی <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                  <q-input borderless v-model="password" type="number" label-slot label-color="black" placeholder="تلفن همراه به منزله کلمه عبور شما است" no-error-icon reactive-rules :rules="[ val => val !== '' || 'تلفن همراه (کلمه عبور) الزامی است', val => /^09\d{9}$/.test(val) || 'مقدار  تلفن همراه (کلمه عبور) معتبر نمی باشد']">
                    <template #label>
                      <div>تلفن همراه (کلمه عبور) <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                  <q-input borderless v-model="username" type="number" label-slot label-color="black" placeholder="کد ملی به منزله نام کاربری شما است" no-error-icon reactive-rules :rules="[ val => val !== '' || 'کد ملی (نام کاربری ) الزامی است' , val => /^[0-9]{10}$/.test(val) || 'مقدار کد ملی (نام کاربری) معتبر نمی باشد']">
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
            <div class="col-lg-6 col-xs-12 column justify-between">
              <div class="header q-pl-md q-mb-md">
                <q-img src="../../src/assets/domain-info.svg" width="40px" height="40px" fit="contain"></q-img>
                <span class="text-primary q-pl-sm">اطلاعات دامنه</span>
              </div>
              <div class="domain-box q-my-md">
                <div style="border-radius: 3px;" class="row no-wrap items-center bg-info q-mx-md" dir="ltr">
                  <span class="q-px-md gt-xs">https://</span>
                  <q-input dir="rtl" class="full-width bg-white" borderless v-model="domain" type="text" label-slot label-color="black" placeholder="نام انگلیسی با حداقل 4 حرف وارد نمایید" @update:model-value="siteAddress='https://'+domain+'.easybimeh.com'">
                    <template #label>
                      <div dir="rtl">دامنه (عنوان سایت اختصاصی شما) <span class="text-red">*</span></div>
                    </template>
                  </q-input>
                  <span class="q-px-md gt-xs">.easybimeh.com</span>
                </div>
                <div class="q-mx-md q-mt-sm row justify-between items-baseline">
                  <img src="../../src/assets/right.svg" alt="" style="width: 25%;" class="gt-xs">
                  <span class="text-primary center">{{ siteAddress }}</span>
                  <img src="../../src/assets/left.svg" alt="" style="width: 25%;" class="gt-xs">
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xs-12">
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
          </div>

          <q-separator spaced="md" class="q-mx-md gt-sm" color="grey-3"/>

          <div class="form-section-4 q-my-lg row">
            <div class="col-10 full-height">
              <div class="cart-box shadow-2 row no-wrap items-center full-height q-mr-md">
                <div class="q-pa-md" style="background-color: #e8ecf7;">مشخصات سبد خرید:</div>
                <div class="q-pa-md">
                  <span>نام محصول:</span>
                  {{ packageName }} - {{ packageMonth }}
                </div>
                <div class="q-pa-md">
                  <span>قیمت محصول:</span>
                  {{ price }} ریال
                </div>
                <div class="q-px-md">
                  <q-img src="../../src/assets/wallet.svg" width="30px" height="30px" fit="contain"></q-img>
                  <span class="q-pl-sm">مبلغ قابل پرداخت: </span>
                  <span class="text-positive">{{ price }} ریال</span>
                </div>
              </div>
            </div>
            <div class="col-2">
              <button class="register-btn cursor-pointer" type="submit">ثبت نام</button>
            </div>
          </div>

        </q-form>
      </section>
    </div>  
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: 'insuranceCentreRegistration',

  data() {
    return {
      insureType: '',
      personality: '',
      officeName: '',
      codeAgency: '',
      insureCompany: '',
      state: '',
      city: '',
      email: '',
      phone: '',
      address: '',
      name: '',
      family: '',
      password: '',
      username:'',
      siteAddress: 'آدرس سایت شما',
      packageName: '',
      packageMonth: '',
      price: '',
      companiesOptions: [],
      provinceOptions: [],
      cityOptions: []
    }
  },
  created() {
    this.packageName = JSON.parse(localStorage.getItem('chosenPackage')).easyBimehPlan.title
    this.packageMonth = JSON.parse(localStorage.getItem('subscription'))
    let setPrice = JSON.parse(localStorage.getItem('chosenPackage')).easyBimehPlanPrices
    setPrice.forEach(element => {
      if(element.title == this.packageMonth) 
        this.price =  Number(element.price).toLocaleString()
    });

    axios
    .get("https://server.easybimeh.com/api/ComboData/Province")
    .then((response) => {
      let province = response.data.message
      province.forEach(el => {
        this.provinceOptions.push(el.title)
      })
    })
    .catch((error) => {
      console.error(error);
    });

    axios
    .get("https://server.easybimeh.com/api/ComboData/InsuranceCompany")
    .then((response) => {
      let companies = response.data.message
      companies.forEach(el => {
        this.companiesOptions.push(el.title)
      })
    })
    .catch((error) => {
      console.error(error);
    });
  },
  methods: {
    onSubmit() {
      alert('hello')
    },
    getProvinceId(val) {
      let id = this.provinceOptions.findIndex(function (item) {
        return item == val
      })
      this.cityOptions = []
      axios
      .get("https://server.easybimeh.com/api/ComboData/City", { params: { provinceId: id+1 } })
      .then((response) => {
        let cities = response.data.message
        cities.forEach(el => {
          this.cityOptions.push(el.title)
        })
      })
      .catch((error) => {
        console.error(error);
      });
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
  color: black !important;
    &::after {
    border: 1px solid black;
    border-radius: 3px;
  }
}
:deep(.q-field__native),
:deep(.q-field__label) {
  margin: 0 10px;
}
.register-btn {
  width: 100%;
  background: $gradient-primary;
  box-shadow: -2px 4px 16px $shadow-primary;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: 200;
  border-radius: 3px;
  height: 100%;
}
.form-section-4 {
  .cart-box {
    background-color: whitesmoke;
    border-radius: 3px;
    span {
      color: #757575;
    }
  }
}

@media (max-width: $breakpoint-xs) {
    span.center {
      margin: auto;
    }
}
</style>