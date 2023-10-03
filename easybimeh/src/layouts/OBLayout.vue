<template>
    <q-layout view="lHh Lpr lFf">

        <!-- header menu -->
        <header class="row items-center">
            <q-toolbar class="full-width full-height">
                <q-btn flat class="gt-sm btn--no-hover q-pa-none q-ma-none full-height" to="/">
                    <q-img src="../../src/assets/easyBime.png" alt="ایزی بیمه" width="150px" height="60px" fit="contain"></q-img>
                </q-btn>
                <button class="bar-btn lt-md absolute-left-center" @click="showMenu" :class="{close: ifShow}">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
                <q-toolbar-title>
                    <div class="tabs full-width gt-sm row no-wrap items-center">
                        <div v-for="item in headerList" :key="item.id" @click="call(item.scroll)" class="cursor-pointer">
                            <a  class="block text-white" style="text-wrap: nowrap;">{{ item.title }}</a>
                        </div>
                    </div>
                </q-toolbar-title>
                <div class="tel-btn">
                    مشاوره رایگان
                    <a href="tel:02191691049">02191691049</a>
                </div>
            </q-toolbar>
        </header>

        <q-page-container>
            <router-view />
        </q-page-container>

        <!-- copy right section -->
        <section id="copy-right" class="text-center text-white q-pa-md text-weight-light">
            <span class="secondry">{{ year }}</span>
            <span class="secondry"> © </span>
            <span>
                تمام حقوق این نرم افزار متعلق به 
                <a href="https://www.aka.co.ir/" class="text-info" target="_blank">شرکت معماران عصر دانش</a>
                می باشد.
            </span>
        </section>

    </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'OBLayout',

    data() {
        return {
            headerList: [
                {id:1,title:'کارگزاری آنلاین',scroll:'#btn'},
                {id:2,title:'قابلیت ها',scroll:'#samane'},
                {id:3,title:'ماژول ها',scroll:'#modulebox'},
                {id:4,title:'خرید لایسنس',scroll:'#licensetop'},
                {id:5,title:'خرید اقساطی',scroll:'#installmentbox'}
            ],
            year: '2023'
        }
    }
})
</script>

<style lang="scss" scoped>
    $green-color: rgb(7, 130,130);
    $yellow-color: #ffff66;
    $bg-color: #e0ebe6;
    $header-height: 80px;

    header {
        height: $header-height;
        margin: 2px 2px 2px 0;
        z-index: 2 !important;
        position: sticky;
        top: 0;
        background-color: rgba($green-color, .94);
        border-radius: 0 25px 25px 0;
        font-size: 16px;
        .tabs a {
            font-size: 16px !important;
            text-shadow: 1px 2px #000;
            padding: 8px;
            margin: 0 4px;
        }
        .tel-btn {
            background-color: $yellow-color;
            padding: 10px 15px;
            border-radius: 10px;
            a {
                color: #000;
            }
        }
    }
    #copy-right {
        background-color: $green-color;
        span {
            font-size: 16px;
        }
    }

    * {
        border: 1px solid red;
    }
</style>