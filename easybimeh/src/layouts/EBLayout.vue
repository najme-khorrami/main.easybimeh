<template>
    <q-layout view="lHh Lpr lFf">
        <!-- menu header -->
        <div class="menu-header row items-center shadow-1">
            <div class="container full-width full-height">
                <q-toolbar class="full-width full-height justify-between" style="padding: 0;">
                    <q-btn flat class="btn--no-hover q-pa-none q-ma-none full-height" to="/">
                        <q-img src="../../src/assets/easybimeh-logo-white.svg" alt="ایزی بیمه" width="180px"
                            style="min-width:130px;" fit="fill"></q-img>
                    </q-btn>
                    <div class="tabs full-height gt-sm row no-wrap justify-between items-center">
                        <div v-for="item in tabList" :key="item.id">
                            <a @click="showRequestDialog = (item.id == 4) ? true : false;" :href="item.href"
                                class="block text-white q-pa-md" style="font-size: 14px;white-space: nowrap;">{{ item.title
                                }}</a>
                        </div>
                    </div>
                </q-toolbar>
            </div>
        </div>
    </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EBLayout',

    data() {
        return {
            // headerList: [
            //     {id:1 ,title: 'محصولات اصلی',link: ''},
            //     {id:2 ,title: 'مزیت‌های رقابتی',link: ''},
            //     {id:3 ,title: 'وایت لیبل ایبیکانکت',link: ''},
            //     {id:4 ,title: 'امکانات مدیریتی و کنترلی',link: ''},
            //     {id:5 ,title: 'ارائه دهنده API برای صنعت بیمه',link: ''},
            //     {id:6 ,title: '',link: ''}
            // ]
        }
    }
})
</script>

<style lang="scss" scoped>
    $bg-header: #2e39bf;
    .menu-header {
        background-color: $bg-header;
        height: 72px;
    }
</style>