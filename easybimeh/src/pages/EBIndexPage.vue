<template>
    <q-page>
        <section id="main-banner" class="q-py-lg">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <q-img src="../../src/assets/isometric.svg" fit="contain" style="max-width: 600px;"></q-img>
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <q-img src="../../src/assets/Assetss.svg" fit="contain" style="max-width: 80px;"></q-img>
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
                        <a href="#">
                            شماره تماس : 02191691049 
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section id="main-products">
            <div class="products">

            </div>
        </section>
    </q-page>
</template>
  
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EBIndexPage',

    data() {
        return {

        }
    }
})
</script>
  
<style lang="scss" scoped>
    $bg-header: #2e39bf;
    $bg-footer: #0a0d35;
    $secondry-color: #09EBAF;
    #main-banner {
        background: url('../../src/assets/bg.svg') no-repeat center;
        background-size: cover;
        h1 {
            font-size: 32px;
            color: $secondry-color;
            display: inline;
            line-height: 0;
        }
        p {
            text-align: justify;
            color: #fff;
            font-size: 24px;
            span {
                color: #feb155;
            }
        }
        a {
            text-decoration: underline;
            color: #fff;
            font-size: 24px;
        }
    }
    #main-products {
        margin: auto;
        .products {
            background-color: #fff;
            border-radius: 30px;
        }
    }
    div {
        border: 1px solid red;
    }
</style>