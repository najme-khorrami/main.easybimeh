<template>
    <section class="form q-my-md">
        <q-form ref="qForm" greedy>
            <div class="form-section-1 q-py-lg">
                <div class="header q-pl-md">
                    <q-img src="../../src/assets/office-info.svg" width="40px" height="40px" fit="contain"></q-img>
                    <span class="text-primary q-pl-sm">اطلاعات دفتر بیمه</span>
                </div>
                <div class="main">
                    <div class="column flex q-mt-md q-pl-md">
                        <div class="q-mb-sm column">
                            <div>
                                <label>
                                    نوع مرکز بیمه
                                    <span class="text-negative">*</span>
                                    :
                                </label>
                                <q-radio color="#616161" class="q-px-xs" dense v-model="insureType" val="InsurAgency"
                                    label="نمایندگی بیمه" />
                                <q-radio color="#616161" class="q-px-xs" dense v-model="insureType" val="InsurBrokerage"
                                    label="کارگزاری بیمه" />
                            </div>
                            <div ref="radioSlot1" class="text-negative" style="font-size: 14px;"></div>
                        </div>
                        <div class="column">
                            <div>
                                <label>
                                    شخصیت
                                    <span class="text-negative">*</span>
                                    :
                                </label>
                                <q-radio color="#616161" class="q-px-xs" dense v-model="personality" val="realPerson"
                                    label="حقیقی" />
                                <q-radio color="#616161" class="q-px-xs" dense v-model="personality" val="legalPerson"
                                    label="حقوقی" />
                            </div>
                            <div ref="radioSlot2" class="text-negative" style="font-size: 14px;"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                            <q-input borderless v-model="officeName" type="text" label-slot label-color="black"
                                placeholder="مانند: کارگزاری آسان بیمه" no-error-icon reactive-rules="false"
                                :rules="[val => val !== '' || 'نام دفتر بیمه الزامی است']">
                                <template #label>
                                    <div>نام دفتر بیمه <span class="text-red">*</span></div>
                                </template>
                            </q-input>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                            <q-input borderless v-model="codeAgency" type="text" label-slot label-color="black"
                                placeholder="مانند: 124513645" no-error-icon reactive-rules
                                :rules="[val => val !== '' || 'کد نمایندگی الزامی است']">
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
                            <q-select v-if="insureType == 'InsurAgency' || insureType == ''" borderless
                                v-model="insureCompany" label-slot label-color="black" :options="companiesOptions"
                                behavior="menu" no-error-icon reactive-rules
                                :rules="[val => val !== '' || 'نمایندگی کدام شرکت بیمه هستید؟ الزامی است']">
                                <template #label>
                                    <div>نمایندگی کدام شرکت بیمه هستید؟ <span class="text-red">*</span></div>
                                </template>
                                <template v-slot:append>
                                    <q-icon v-if="insureCompany !== ''" name="close"
                                        @click.stop.prevent="insureCompany = ''" class="cursor-pointer" size="14px" />
                                </template>
                            </q-select>
                            <q-select v-if="insureType == 'InsurBrokerage'" multiple borderless label-slot
                                v-model="insureCompany2" label-color="black" :options="companiesOptions" behavior="menu"
                                @update:model-value="onPopUp" ref="qSelRef" use-chips>
                                <template #label>
                                    <div>کارگزاری کدام شرکت های بیمه هستید؟</div>
                                </template>
                            </q-select>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                            <q-select borderless v-model="state" type="text" label-slot label-color="black"
                                :options="provinceOptions" behavior="menu" no-error-icon reactive-rules
                                :rules="[val => val !== '' || 'استان الزامی است']" @update:model-value="getProvinceId">
                                <template #label>
                                    <div>استان <span class="text-red">*</span></div>
                                </template>
                                <template v-slot:append>
                                    <q-icon v-if="state !== ''" name="close" @click.stop.prevent="state = ''"
                                        class="cursor-pointer" size="14px" />
                                </template>
                            </q-select>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                            <q-select borderless v-model="city" type="text" label-slot label-color="black"
                                :options="cityOptions" behavior="menu" no-error-icon reactive-rules
                                :rules="[val => val !== '' || 'شهرستان الزامی است']">
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
                                    <q-icon v-if="city !== ''" name="close" @click.stop.prevent="city = ''"
                                        class="cursor-pointer" size="14px" />
                                </template>
                            </q-select>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                            <q-input borderless v-model="email" type="email" label-slot label-color="black"
                                placeholder="مانند: easybimeh@gmail.com" no-error-icon reactive-rules
                                :rules="[(val) => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(val) || val == '' || 'مقدار ایمیل (اختیاری) معتبر نمی باشد']">
                                <template #label>
                                    <div>ایمیل (اختیاری)</div>
                                </template>
                            </q-input>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                            <q-input borderless v-model="phone" type="number" label-slot label-color="black"
                                placeholder="شماره تلفن خود را وارد کنید" no-error-icon reactive-rules
                                :rules="[val => val !== '' || 'تلفن الزامی است']">
                                <template #label>
                                    <div>تلفن <span class="text-red">*</span></div>
                                </template>
                            </q-input>
                        </div>
                        <div class="col-xs-12 q-px-md q-pt-md">
                            <q-input borderless v-model="address" type="text" label-slot label-color="black"
                                placeholder="نشانی خود را وارد نمایید" no-error-icon reactive-rules
                                :rules="[val => val !== '' || 'نشانی الزامی است']">
                                <template #label>
                                    <div>نشانی <span class="text-red">*</span></div>
                                </template>
                            </q-input>
                        </div>
                    </div>
                </div>
            </div>

            <q-separator spaced="md" class="q-mx-md" color="grey-3" />

            <div class="form-section-2 q-py-lg">
                <div class="header q-pl-md">
                    <q-img src="../../src/assets/manager-info.svg" width="40px" height="40px" fit="contain"></q-img>
                    <span class="text-primary q-pl-sm">اطلاعات مدیر (نماینده)</span>
                </div>
                <div class="main">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                            <q-input borderless v-model="name" type="text" label-slot label-color="black"
                                placeholder="نام خود را وارد نمایید" no-error-icon reactive-rules
                                :rules="[val => val !== '' || 'نام الزامی است', val => /^[^\d]+$/.test(val) || 'مقدار نام معتبر نمی باشد']">
                                <template #label>
                                    <div>نام <span class="text-red">*</span></div>
                                </template>
                            </q-input>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                            <q-input borderless v-model="family" type="text" label-slot label-color="black"
                                placeholder="نام خانوادگی خود را وارد نمایید" no-error-icon reactive-rules
                                :rules="[val => val !== '' || 'نام خانوادگی الزامی است', val => /^[^\d]+$/.test(val) || 'مقدار نام خانوادگی معتبر نمی باشد']">
                                <template #label>
                                    <div>نام خانوادگی <span class="text-red">*</span></div>
                                </template>
                            </q-input>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                            <q-input borderless v-model="password" type="number" label-slot label-color="black"
                                placeholder="تلفن همراه به منزله کلمه عبور شما است" no-error-icon reactive-rules
                                :rules="[val => val !== '' || 'تلفن همراه (کلمه عبور) الزامی است', val => /^09\d{9}$/.test(val) || 'مقدار  تلفن همراه (کلمه عبور) معتبر نمی باشد']">
                                <template #label>
                                    <div>تلفن همراه (کلمه عبور) <span class="text-red">*</span></div>
                                </template>
                            </q-input>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-xs-12 q-px-md q-pt-md">
                            <q-input borderless v-model="username" type="number" label-slot label-color="black"
                                placeholder="کد ملی به منزله نام کاربری شما است" no-error-icon reactive-rules
                                :rules="[val => val !== '' || 'کد ملی (نام کاربری ) الزامی است', val => /^[0-9]{10}$/.test(val) || 'مقدار کد ملی (نام کاربری) معتبر نمی باشد']">
                                <template #label>
                                    <div>کد ملی (نام کاربری) <span class="text-red">*</span></div>
                                </template>
                            </q-input>
                        </div>
                    </div>
                </div>
            </div>

            <q-separator spaced="md" class="q-mx-md" color="grey-3" />

            <div class="form-section-3 q-py-lg row">
                <div class="col-lg-6 col-xs-12 column justify-between">
                    <div class="header q-pl-md q-mb-md">
                        <q-img src="../../src/assets/domain-info.svg" width="40px" height="40px" fit="contain"></q-img>
                        <span class="text-primary q-pl-sm">اطلاعات دامنه</span>
                    </div>
                    <div class="domain-box q-my-md">
                        <div style="border-radius: 3px;" class="row no-wrap items-center bg-info q-mx-md" dir="ltr">
                            <span class="q-px-md gt-xs">https://</span>
                            <q-input dir="rtl" class="full-width bg-white" borderless v-model="domain" type="text"
                                label-slot label-color="black" placeholder="نام انگلیسی با حداقل 4 حرف وارد نمایید"
                                @update:model-value="siteAddress = 'https://' + domain + '.easybimeh.com'" no-error-icon
                                reactive-rules
                                :rules="[val => val !== '' || 'دامنه (عنوان سایت اختصاصی شما) الزامی است', val => /^[A-Za-z]{4,}$/.test(val) || 'آدرس سایت باید با حروف انگلیسی و حداقل 4 حرف باشد']">
                                <template #label>
                                    <div dir="rtl">دامنه (عنوان سایت اختصاصی شما) <span class="text-red">*</span></div>
                                </template>
                            </q-input>
                            <span class="q-px-md gt-xs">.easybimeh.com</span>
                        </div>
                        <div class="q-mx-md q-mt-md row justify-between items-baseline">
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
                                    <span>عبارتی که در اطلاعات دامنه ثبت می کنید، همان آدرس اینترنتی صفحه اختصاصی دفتر بیمه
                                        شما خواهد بود که می‌توانید آن را در اختیار دیگران قرار دهید تا از سایت شما دیدن
                                        کنند.</span>
                                </q-item-section>
                            </q-item>
                            <q-item class="items-start">
                                <q-item-section avatar style="min-width: 0;">
                                    <q-avatar style="width: 25px;height: 25px;">
                                        <img src="../../src/assets/tick.svg">
                                    </q-avatar>
                                </q-item-section>
                                <q-item-section>
                                    <span>برای ثبت این اطلاعات حتماً از حروف لاتین استفاده نمایید و ترجیحاً نامی ساده مانند
                                        نام دفتر بیمه برای دامنه خود انتخاب کنید.</span>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </div>
                </div>
            </div>

            <q-separator spaced="md" class="q-mx-md gt-sm" color="grey-3" />

            <div class="form-section-4 q-my-lg row">
                <div class="col-md-10 col-xs-12 full-height">
                    <div class="cart-box shadow-2 row no-wrap items-center full-height q-mr-md">
                        <div class="title q-pa-md" style="background-color: #e8ecf7;">مشخصات سبد خرید:</div>
                        <div class="q-pa-md">
                            <span>نام محصول:</span>
                            {{ packageName }} - {{ packageMonth }}
                        </div>
                        <div class="q-pa-md">
                            <span>قیمت محصول:</span>
                            {{ price }} ریال
                        </div>
                        <div class="last-item q-px-md">
                            <q-img src="../../src/assets/wallet.svg" width="30px" height="30px" fit="contain"></q-img>
                            <span class="q-pl-sm">مبلغ قابل پرداخت: </span>
                            <span class="text-positive">{{ price }} ریال</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-xs-12">
                    <button class="register-btn cursor-pointer" @click="onSubmit">ثبت نام</button>
                </div>
            </div>

        </q-form>
    </section>

    <!-- dialog -->
    <q-dialog v-model="alert">
        <q-card>
            <q-card-section>
                <div class="text-h6">تکمیل اطلاعات</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
                لطفا اطلاعات مورد نظر را تکمیل کنید
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="تایید" color="primary" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>

</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: 'RegisterForm',

  data() {
    return {
      insureType: '',
      personality: '',
      officeName: '',
      codeAgency: '',
      insureCompany: '',
      insureCompany2: [],
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
      domain: '',
      companiesOptions: [],
      provinceOptions: [],
      cityOptions: [],
      alert: false,
      userInfo: []
    }
  },
  watch: {
    insureType(val) {
      if(val !== '') this.$refs.radioSlot1.innerHTML = ''
    },
    personality(val) {
      if(val !== '') this.$refs.radioSlot2.innerHTML = ''
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
      this.$refs.qForm.validate().then(success => {
        if (success) {
          if (this.insureType == '') {
            this.$refs.radioSlot1.innerHTML = 'نوع مرکز بیمه الزامی است'
          }
          if (this.personality == '') {
            this.$refs.radioSlot2.innerHTML = 'نوع شخصیت بیمه الزامی است'
          }
          if(this.insureType !== '' && this.personality !== '') {
            let typeOfInsure,typeOfCode,typeOfCompany,companies;
            if(this.insureType == 'InsurAgency') {
                typeOfInsure = 'نمایندگی بیمه';
                typeOfCode =  'کد نمایندگی';
                typeOfCompany = 'شرکت بیمه';
                companies = this.insureCompany;
            }else {
                typeOfInsure = 'کارگزاری بیمه';
                typeOfCode = 'کد کارگزاری';
                typeOfCompany = 'شرکت های بیمه';
                companies = this.insureCompany2;
            }
            let typeOfPersonality = (this.personality == 'realPerson') ? 'حقیقی' : 'حقوقی';
            this.userInfo = [
                {id: 1,title: 'نوع دفتر بیمه',content: typeOfInsure},
                {id: 2,title: 'َشخصیت',content: typeOfPersonality},
                {id: 3,title: 'نام دفتر بیمه',content: this.officeName},
                {id: 4,title: typeOfCode ,content: this.codeAgency},
                {id: 5,title: typeOfCompany ,content: companies},
                {id: 6,title: 'نام',content: this.name},
                {id: 7,title: 'نام خانوادگی',content: this.family},
                {id: 8,title: 'تلفن همراه',content: this.password},
                {id: 9,title: 'کد ملی',content: this.username},
                {id: 10,title: 'ایمیل',content: this.email},
                {id: 11,title: 'تلفن',content: this.phone},
                {id: 12,title: 'استان',content: this.state},
                {id: 13,title: 'شهر',content: this.city},
                {id: 14,title: 'نشانی',content: this.address},
                {id: 15,title: 'دامنه (عنوان سایت اختصاصی شما)',content: 'https://' + this.domain + '.easybimeh.com'},
            ]
            this.$emit('changeComp', 'InformationForm')
            this.$emit('userInfo', this.userInfo)
          }
        }
        else {
          if (this.insureType == '') {
            this.$refs.radioSlot1.innerHTML = 'نوع مرکز بیمه الزامی است'
          }
          if (this.personality == '') {
            this.$refs.radioSlot2.innerHTML = 'نوع شخصیت بیمه الزامی است'
          }
          this.alert = true
        }
      })
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
    },
    onPopUp() {
      this.$refs.qSelRef.hidePopup()
    }
  }
})
</script>

<style lang="scss" scoped> 
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
:deep(.q-field__after) {
  padding: 0;
}
:deep(.q-chip) {
  background-color: transparent;
  border: 1px solid $primary;
  .q-icon {
    color: red;
  }
}
.domain-box {
  > div:first-child {
    height: 55px;
  }
  :deep(.q-field) {
    height: 55px;
  }
  :deep(.q-field__inner) {
    height: 60px;
    .q-field__bottom {
      transform: translateY(10px);
    }
  }
}

@media (max-width: $breakpoint-xs) {
    span.center {
      margin: auto;
    }
}
@media (max-width: $breakpoint-md-min) {
  .form-section-4 {
    margin-bottom: 60px;
    .cart-box {
      margin: 0 !important;
      flex-direction: column;
      align-items: flex-start;
      .title {
        width: 100%;
      }
      .last-item {
        padding-bottom: 10px;
      }
    }
    .register-btn {
      margin-top: 20px;;
      padding: 5px 0;
    }
  }
}
</style>