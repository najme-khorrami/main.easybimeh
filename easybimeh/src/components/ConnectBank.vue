<template>
    <div>
        <h4>صفحه اتصال به درگاه بانکی</h4>
        <section class="main-section">
            <div>
                <q-img></q-img>
                <span>{{  }} ثبت نام شما با موفقیت انجام شد.</span>
            </div>
            <p>پرداخت با کلیه کارت های شتاب امکان پذیر است.</p>
            <div class="row">
                <div class="col-6 row no-wrap">
                    <div v-for="item in info" :key="item.id" :class="[item.className,'info-item']">
                        <span class="title">{{ item.title }}:</span>
                        <span class="content">{{ item.content }}</span>
                    </div>
                    <div class="row">
                        <q-input color="primary" outlined v-model="discountCode" label="کد تخفیف">
                        </q-input>
                        <q-btn>ثبت کد تخفیف</q-btn>
                    </div>
                    <div class="row">
                        <q-input color="primary" outlined v-model="referrerCode" label="کد معرف">
                        </q-input>
                        <q-btn>ثبت کد معرف</q-btn>
                    </div>
                    <div class="row">
                        <q-icon></q-icon>
                        <span>{{ portal }}</span>
                    </div>
                    <div>
                        <q-btn>انصراف</q-btn>
                        <q-btn>تایید و پرداخت</q-btn>    
                    </div>
                </div>
                <div class="col-6">
                    <q-img></q-img>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: 'ConnectBank',
    props:['userInfo'],
    data() {
        return {
            info: [
                {id:1 ,title:'نام محصول' ,content:'' ,className:'col-12'},
                {id:2 ,title:'کد رهگیری شما' ,content:'' ,className:'col-6'},
                {id:3 ,title:'تاریخ ثبت درخواست' ,content:'' ,className:'col-6'},
                {id:4 ,title:'وضعیت' ,content:'' ,className:'col-6'},
                {id:5 ,title:'هزینه عضویت' ,content:'' ,className:'col-6'},
                {id:6 ,title:'مبلغ تخفیف' ,content:'' ,className:'col-6'},
                {id:7 ,title:'مالیات بر ارزش افزوده' ,content:'' ,className:'col-6'},
                {id:8 ,title:'مبلغ قابل پرداخت' ,content:'' ,className:'col-6'}
            ],
            discountCode: '',
            referrerCode: '',
            portal: 'درگاه پرداخت بانک پاسارگاد'
        }
    },
    methods: {

    }
})
</script>

<style lang="scss" scoped>
.main-section {
    background-color: #fff;
    .info-item {
        background-color: #8d8a8a;
        padding: 5px 0;
        margin: 5px;
        border-radius: 5px;
        .title {
            font-weight: 400;
        }
        .content {
            font-weight: 600;
        }
    }
}
</style>