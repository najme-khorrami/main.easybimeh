<template>
    <q-layout view="lHh Lpr lFf">
        <!-- menu header -->
        <div class="menu-header row items-center shadow-3">
            <div class="container full-width full-height">
                <q-toolbar class="full-width full-height justify-between" style="padding: 0;" inset>
                    <q-btn flat class="gt-sm btn--no-hover q-pa-none q-ma-none full-height" to="/">
                        <q-img src="../../src/assets/easybimeh-logo-white.svg" alt="ایزی بیمه" width="140px" fit="contain"></q-img>
                    </q-btn>
                    <button class="bar-btn lt-md absolute-left-center" @click="showMenu" :class="{close: ifShow}">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                    <q-toolbar-title style="padding: 0;margin: 0 10px;" >
                        <div class="tabs full-width gt-sm row no-wrap justify-between items-center">
                            <div v-for="item in headerList" :key="item.id" >
                                <a :href="item.link" class="block text-white" style="font-size: 14px;text-wrap: nowrap;">{{ item.title }}</a>
                            </div>
                        </div>
                    </q-toolbar-title>
                    <q-img src="../../src/assets/eb-connect.svg" width="100%" height="100%" alt="eb-connect" fit="contain" style="max-width: 160px;"></q-img>
                </q-toolbar>
            </div>
        </div>
            
        <!-- toggle menu -->
        <section :class="{active: ifShow}" class="lt-md full-menu bg-white q-px-lg column">
            <q-list>
                <q-item class="item-menu">
                    <a class="full-width text-black text-weight-medium q-py-sm" href="/">صفحه اصلی</a>
                </q-item>
                <q-item v-for="item in headerList" :key="item.id" class="item-menu">
                    <a class="full-width text-black text-weight-medium q-py-sm" :href="item.link">{{ item.title }}</a>
                </q-item>
            </q-list>
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
                <a href="https://www.aka.co.ir/" class="secondry" target="_blank">شرکت معماران عصر دانش</a>
                می باشد.
            </span>
        </section>
    </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EBLayout',

    data() {
        return {
            headerList: [
                {id:1 ,title: 'محصولات اصلی',link: '#'},
                {id:2 ,title: 'مزیت‌های رقابتی',link: '#'},
                {id:3 ,title: 'وایت لیبل ایبیکانکت',link: '#'},
                {id:4 ,title: 'امکانات مدیریتی و کنترلی',link: '#'},
                {id:5 ,title: 'ارائه دهنده API برای صنعت بیمه',link: '#'},
                {id:6 ,title: 'ارائه سرویس های بیمه',link: '#'}
            ],
            year: '2023',
            ifShow: false
        }
    },
    methods: {
        showMenu() {
            this.ifShow = !this.ifShow
        }
    }
})
</script>

<style lang="scss" scoped>
    $bg-header: #2e39bf;
    $bg-footer: #0a0d35;
    $secondry-color: #09EBAF;
    .menu-header {
        background-color: $bg-header;
        height: 72px;
        position: sticky;
        top: 0;
        z-index: 2;
        .tabs {
            a {
                padding: 6px 7px;
            }
            a:hover {
                background-color: rgba(#6e6e6e, .3);
                border-radius: 3px;
            }
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
            border: 0;
            span {
                width: 100%;
                height: 3px;
                background-color: white;
                transition: .3s ease-in-out;
                transform-origin: left center;
            }
            &.close {
                span:nth-child(1) {
                transform: rotate(45deg);
                }
                span:nth-child(2) {
                width: 0%;
                opacity: 0;
                transition: .1s;
                }
                span:nth-child(3) {
                transform: rotate(-45deg);
                }
            }
        }
    }
    .full-menu {
        z-index: 1;
        width: 100%;
        height:calc(100vh - 35px);
        position: sticky;
        top: 75px;
        transform: translateY(-130vh);
        transition: transform .5s ease, opacity ease .2s;
        margin-bottom: -100vh;
        &.active {
        transform: translateY(0);
        transition: transform .5s ease, opacity ease .2s;
        }
        .item-menu {
        border-bottom: .5px solid #dfdfdf;
        }
        .item-menu:last-of-type {
        border-bottom: none;
        }
    }
    #copy-right {
        background-color: $bg-footer;
        font-size: 16px;
        .secondry {
            color: $secondry-color;
        }
    }
</style>