<template>
    
    <section id="header">
        <div class="container row">
            <div class="col-6 title">
                <h1>  سامانه جامع مدیریت کارگزاری آنلاین بیمه </h1>
                <p>
                    <span>
               فناوری اطلاعات در خدمت مبارزه با ویروس کرونا   </span>
                    <img src="../../src/assets/virus.png" alt="">
                </p>
            </div>
        </div>
        <div class="container row">
            <div class="col-6 detail">
                <p>  پروژه ای نوآورانه بر اساس نیاز اختصاصی کارگزاری های آنلاین </p>
                <p>و مبتنی بر الزامات فنی و امنیتی بیمه مرکزی </p>
            <div class="q-ma-lg">
                <div class="main-btn">
                    کارگزاری آنلاین بیمه 
                </div>
            </div>
            </div>
        </div>
    </section>

    <section id="btn">

    </section>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'OBIndexPage',

})
</script>

<style lang="scss" scoped>
    $green-color: rgb(7, 130,130);
    $yellow-color: #ffff66;
    $bg-color: #e0ebe6;
    $header-height: 80px;
    $light-blue: #82c9c9;
    
    #header {
        height: 100vh;
        background: url('../../src/assets/banner.svg') 50% no-repeat;
        background-size: cover;
        transform: translateY(calc( -80px - 4px));
        margin-bottom: calc( -80px - 4px);
        .title {
            margin-top: $header-height;
            h1 {
                font-size: 26px;
                font-weight: bold;
                text-shadow: -1px 2px #fff;
            }
            p {
                font-size: 18px;
                text-shadow: -1px 2px 5px #fff;
                justify-content: baseline;
                display: flex;
                img {
                    width: 30px;
                    margin: 0 5px;
                }
            }
        }
        .detail {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 100px;
            p {
                font-size: 18px;
                color: #fff;
                font-weight: 700;
                text-shadow: -1px 2px 2px #000;
            }
            .main-btn {
                background-color: $green-color;
                color: #fff;
                font-size: 16px;
                padding: 10px 20px;
                box-shadow: -3px 3px $light-blue;
                display: inline;
                border-radius: 15px;
            }
        }
    }
    .like-btn {
        background-color: $green-color;
        color: #fff;
        font-size: 16px;
        padding: 10px;
        display: inline;
        border-radius: 15px;
    }

    * {
        border: 1px solid blue;
    }
</style>