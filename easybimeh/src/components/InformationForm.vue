<template>
    <section class="section-1 q-my-md">
        <h4>
            کاربر گرامی!
            <br>
            شما بر اساس مشخصات زیر درخواست فعالیت در سامانه ایزی بیمه را ثبت نموده اید:
        </h4>
        <div class="info-box shadow-2 q-my-md">
            <div class="header q-pa-md flex flex-center">
                <span>اطلاعات ثبت نام</span>
            </div>
            <div class="body full-width">
                <div>
                    <div v-for="user in userInfo.slice(0,4)" :key="user.id">
                        <span>{{ user.title }}: </span>
                        {{ user.content }}
                    </div>
                </div>
                <div>
                    <div v-for="user in userInfo.slice(4,5)" :key="user.id" class="row items-center">
                        <span class="q-mr-xs">{{ user.title }}: </span>
                        <div v-if="user.content.constructor === Array" class="row items-center">
                            <div class="q-mx-xs bg-grey-4 q-px-sm" style="font-size: 14px;border-radius: 15px;" v-for="(item,index) in user.content" :key="index">
                                {{ item }}
                            </div>
                        </div>
                        <div v-else>{{ user.content }}</div>
                    </div>
                    <div v-for="user in userInfo.slice(5,8)" :key="user.id">
                        <span>{{ user.title }}: </span>
                        {{ user.content }}
                    </div>
                </div>
                <div>
                    <div v-for="user in userInfo.slice(8,11)" :key="user.id">
                        <span>{{ user.title }}: </span>
                        {{ user.content }}
                    </div>
                </div>
                <div>
                    <div v-for="user in userInfo.slice(11,14)" :key="user.id">
                        <span>{{ user.title }}: </span>
                        {{ user.content }}
                    </div>
                </div>
                <div>
                    <div v-for="user in userInfo.slice(14,)" :key="user.id">
                        <span>{{ user.title }}: </span>
                        {{ user.content }}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-2 q-my-xl">
        <div class="cart-box shadow-2 row no-wrap items-center full-height">
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
    </section>

    <section class="section-3 q-pa-md">
        <h4 class="q-py-lg">چنانچه اطلاعات مورد تأیید است نسبت به ورود به پنل کاربری اقدام نمایید.</h4>
        <span>نکته:</span>
        <ul class="q-py-md">
            <li>نام کاربری شما،کد ملی شما و کلمه عبور شما شماره تلفن همراه می باشد.</li>
            <li>به منظور حفظ نکات امنیتی ، پس از اولین ورود نسبت به تغییر کلمه عبور خود اقدام نمایید.</li>
            <li>
                در صورتیکه امکان ورود به پنل خود را ندارید یا با خطایی مواجه شده اید، از طریق 
                <span>شماره پشتیبانی ایزی بیمه</span>
                با ما در ارتباط باشید.
            </li>
        </ul>
    </section>
    <div class="btn-group q-my-md">
        <q-btn flat class="edit shadow-10" label="ویرایش اطلاعات" @click="this.$emit('changeComp', 'RegisterForm')"></q-btn>
        <q-btn flat class="confirm shadow-10" label="تایید نهایی" @click="gotoPayment"></q-btn>
    </div>

    <!-- activation code dialog -->
    <q-dialog v-model="codeDialog" persistent ref="codeModal" class="payment-dialog">
        <q-card>
            <q-card-section class="relative-position">
                <q-btn flat icon="arrow_back" class="absolute-right" v-close-popup></q-btn>
            </q-card-section>
            <q-card-section>
                <div class="q-mt-md" style="font-size: 12px;font-weight: bold;">
                    لطفاً کد دریافت شده بر روی شماره همراه 
                    <span class="text-negative">{{ userPhone }}</span>
                    را وارد نمایید 
                </div>
            </q-card-section>
            <q-card-section>
                <q-input borderless v-model="code" type="text" label-slot no-error-icon reactive-rules :rules="[ val => val !== '' ]">
                    <template #label>
                        <div>کد فعالسازی <span class="text-negative">*</span></div>
                    </template>
                </q-input>
            </q-card-section>
            <q-card-section class="q-pt-none">
                <span>زمان باقیمانده</span>
                <!--timer-->
                <div id="countdown"></div>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn label="ارسال مجدد کد فعالسازی"></q-btn>
                <q-btn color="primary" label="اعتبارسنجی و ثبت نهایی"></q-btn>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: 'InformationForm',

  data() {
    return {
        packageName: '',
        packageMonth: '',
        price: '',
        userPhone: '',
        codeDialog: false,
        code: '',
        endTimer: ''
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
  },
  props:['userInfo'],
  mounted() {
    this.userPhone = this.userInfo[7].content
  },
  methods: {
    gotoPayment() {
        this.codeDialog = true
        this.setTimer()
        let nationalCode = this.userInfo.find((item)=>item.name == 'nationalCode')
        axios.get("https://server.easybimeh.com/api/Account/SendSmsToken", {
        headers: {
            'nationalCode':nationalCode,
            'mobile':this.userPhone
        }
        })
        .then(response => {
            console.log('res:',response)
        })
        .catch(error => {
            console.error(error);
        })
    },
    setTimer() {
        var timeInSecs;
        var ticker;
        var secs = 3*60
        timeInSecs = parseInt(secs);
        ticker = setInterval(function() {
            secs = timeInSecs;
            if (secs > 0) {
                timeInSecs--; 
            }
            else {
                clearInterval(ticker);
            }
            var mins = Math.floor(secs/60);
            secs %= 60;
            var pretty = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;
            document.getElementById("countdown").innerHTML = pretty;
        }, 1000);
    }
  }
})
</script>

<style lang="scss" scoped> 
.section-1 {
    h4 {
        font-size: 16px;
        font-weight: 600;
    }
    .info-box {
        display: flex;
        flex-direction: row;
        border-radius: 3px;
        overflow: hidden;
        font-size: 16px;
        .header {
            background-color: rgb(232, 236, 247);
            width: 180px;
            span {
                font-size: 16px;
            }
        }
        .body {
            background-color: whitesmoke;
            display: flex;
            flex-direction: column;
            > div {
                display: flex;
                flex-direction: row;
                align-items: center;
                border-bottom: .5px solid rgb(224, 224, 224);
                margin: 0 8px;
                padding: 10px;
                span {
                    color: #757575;
                }
                &:last-child {
                    border: none;
                }
                > div {
                    padding-right: 60px;
                }
            }
        }
    }
}
.section-2 {
  .cart-box {
    background-color: whitesmoke;
    border-radius: 3px;
    font-size: 16px;
    span {
      color: #757575;
    }
  }
}
.section-3 {
    border: 1px solid black;
    background-color: rgba(0,145,113,.08);
    border-radius: 3px;
    h4 {
        // color: #009171;
        font-size: 20px;
        font-weight: bold;
    }
    span {
        font-size: 16px;
        font-weight: bold;
        // color: #009171;
    }
    ul {
        list-style: none;

        li {
            &::before {
                content: "• ";
                // color: #009171;
            }
            font-size: 16px;
            span {
                // color: #009171;
                font-weight: bold;
            }
        }
    }
}
.btn-group {
    display: flex;
    justify-content: flex-end;
    .confirm,
    .edit {
        font-weight: 300;
        font-size: 18px;
        color: white;
        width: 255px;
        height: 60px;
    }
    .confirm {
        background: linear-gradient(104.92deg,#009171 0,#00d6a7 100%);
    }
    .edit {
        background: linear-gradient(105.26deg,#ff9912 0,#ffb95c 100%);
        margin-right: 15px;
    }
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
.payment-dialog {
    :deep(.q-focus-helper){
        display: none;
    }
}

@media (max-width: $breakpoint-xs) {
    .btn-group {
        .confirm,
        .edit {
            width: auto;
        }
    }
}
@media (max-width: $breakpoint-md-min) {
    .section-2 {
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
    }
    .btn-group {
        justify-content: space-between;
        .edit {
            background: linear-gradient(105.26deg,#ff9912 0,#ffb95c 100%);
            margin: 0;
        }
    }
}
@media (max-width: 1400px) {
    .section-1 {
        .info-box {
            flex-direction: column;
            .header {
                width: 100%;
                padding: 30px;
            }
            .body {
                > div {
                    flex-direction: column;
                    margin: 0 8px;
                    padding: 5px;
                    > div {
                        padding: 5px;
                    }
                }
            }
        }
    }
}
</style>