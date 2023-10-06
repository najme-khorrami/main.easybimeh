<template>
    <q-layout view="lHh Lpr lFf">

        <!-- header menu -->
        <header class="row items-center">
            <q-toolbar class="full-width full-height">
                <button class="bar-btn lt-md absolute-left-center" @click="showMenu" :class="{close: ifShow}">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
                <q-btn flat class="btn--no-hover q-pa-none q-ma-none full-height logo" to="/">
                    <q-img src="../../src/assets/easyBime.png" alt="ایزی بیمه" width="150px" height="60px" fit="contain"></q-img>
                </q-btn>
                <q-toolbar-title>
                    <div class="tabs full-width gt-sm row no-wrap items-center">
                        <div v-for="item in headerList" :key="item.id" @click="call(item.scroll)" class="cursor-pointer">
                            <a  class="block text-white" style="text-wrap: nowrap;">{{ item.title }}</a>
                        </div>
                    </div>
                </q-toolbar-title>
                <div class="tel-btn gt-xs">
                    مشاوره رایگان
                    <a href="tel:02191691049">02191691049</a>
                </div>
            </q-toolbar>
        </header>

        <!-- toggle menu -->
        <section :class="{active: ifShow}" class="lt-md full-menu q-px-sm q-pb-xl column">
        <div>
            <q-item v-for="item in headerList" :key="item.id" class="item-menu">
                <a class="full-width text-weight-medium" @click="call(item.scroll)">{{ item.title }}</a>
            </q-item>
            <div class="q-mt-sm">
                <div class="tel-btn" style="position: absolute;left: 10px;">
                    مشاوره رایگان
                    <a href="tel:02191691049">02191691049</a>
                </div>
            </div>
        </div>
        </section>

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
            year: '2023',
            ifShow: false,
            sectionID: ''
        }
    },
    methods: {
        showMenu() {
            this.ifShow = !this.ifShow
        },
        call(method) {
            this.sectionID = method
            this.ifShow = false
            this.scroll()
        },
        scroll() {
            let targetElem = document.querySelector(this.sectionID)
            window.scrollBy({
                top: targetElem.getBoundingClientRect().y - 80,
                left: 0,
                behavior: "smooth",
            });           
        }
    }
})
</script>

<style lang="scss" scoped>
    $green-color: rgb(7, 130,130);
    $yellow-color: #ffff66;
    $bg-color: #e0ebe6;
    $header-height: 80px;
    .q-page-container {
        background-color: $bg-color;
        padding-bottom: 10px;
    }

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
            text-shadow: -1px 2px 3px #000;
            padding: 8px;
            margin: 0 4px;
        }
        .bar-btn {
            width: 40px;
            height: 50px;
            padding: 5px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            background-color: transparent;
            margin-right: 15px;
            border: 0;
            span {
                width: 100%;
                height: 3px;
                background-color: #000;
            }
        }
    }
    .tel-btn {
            background-color: $yellow-color;
            padding: 10px 15px;
            border-radius: 10px;
            box-shadow: -1px 1px 5px #000;
            cursor: pointer;
            &:hover {
                background-color: $green-color;
                border: 1px solid $yellow-color;
            }
            a {
                color: #000;
            }
        }
    #copy-right {
        background-color: $green-color;
        span {
            font-size: 16px;
        }
    }
    .full-menu {
        z-index: 2;
        width: 100%;
        position: fixed;
        top: $header-height;
        transition: .2s;
        display: none;
        background-color: $green-color;
        &.active {
            display: flex;
            height: auto;
            transition: .2s;
        }
        .item-menu {
            display: flex;
            align-items: center;
            border: .5px solid #dfdfdf;
            border-radius: 25px;
            margin-bottom: 5px;
            padding: 0;
            width: 100%;
            a {
                color: #fff;
                padding: 8px 15px;
            }
            &:nth-child(odd) {
                background-color: $green-color;
            }
            &:nth-child(even) {
                background-color: rgba(152, 205, 152,0.4);
            }
        }
    }

    @media (max-width: $breakpoint-sm-min) {
        header {
            margin: 0 !important;
            border-radius: 0 !important;
            background-color: $green-color;
            .logo {
                position: absolute;
                right: 20px;
            }
        }
    }
</style>