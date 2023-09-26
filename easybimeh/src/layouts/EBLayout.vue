<template>
    <q-layout view="lHh Lpr lFf">
        <!-- menu header -->
        <div class="menu-header row items-center shadow-3">
            <div class="container full-width full-height">
                <q-toolbar class="full-width full-height justify-between" style="padding: 0;">
                    <q-btn flat class="btn--no-hover q-pa-none q-ma-none full-height" to="/">
                        <q-img src="../../src/assets/easybimeh-logo-white.svg" alt="ایزی بیمه" width="160px" fit="contain"></q-img>
                    </q-btn>
                    <div class="tabs full-height gt-sm row no-wrap justify-between items-center">
                        <div v-for="item in headerList" :key="item.id">
                            <a :href="item.link" class="block text-white q-px-md q-py-sm" style="font-size: 14px;white-space: nowrap;">{{ item.title }}</a>
                        </div>
                    </div>
                    <q-img src="../../src/assets/eb-connect.svg" width="200px" alt="eb-connect" fit="contain"></q-img>
                </q-toolbar>
            </div>
        </div>

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
            margin: 0 10px;
            a:hover {
                background-color: rgba(#6e6e6e, .2);
            }
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