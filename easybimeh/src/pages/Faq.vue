<template>
    <q-page :style-fn="setHeight">
      <section class="faq-section q-py-md">
        <div class="container">
          <div class="title q-py-md column justify-center items-center">
            <q-img src="../../src/assets/top-questions.svg" width="120px" fit="contain"></q-img>
            <h6 class="text-weight-bold q-py-md">چطور می توانیم به شما کمک کنیم؟</h6>
            <div class="search-box shadow-1 q-px-md bg-white">
                <q-input borderless v-model="faqSearch" placeholder="پرسش یا واژه مورد نظر خود را جستجو کنید ...">
                    <template v-slot:prepend>
                    <q-icon name="search" />
                    </template>
                </q-input>
            </div>
          </div>
        </div>
        <div class="container">
            <section class="faq-items q-pt-lg">
                <div class="btn-box row">
                    <q-btn class="shadow-1 q-ma-xs btn--no-hover bg-white" rounded label="نمایش همه"></q-btn>
                    <q-btn class="shadow-1 q-ma-xs btn--no-hover bg-white" rounded label="عمومی"></q-btn>
                    <q-btn class="shadow-1 q-ma-xs btn--no-hover bg-white" rounded label="ثبت سفارش"></q-btn>
                </div>
                <q-list class="q-mx-xs q-my-sm bg-white">
                    <div class="faq-item shadow-2 q-mb-md" style="border-radius: 4px;overflow: hidden;" v-for="(item, index) in faq" :key="item.id">
                        <q-expansion-item expand-separator dense :label="index+1 +' - '+ item.question" class="full-width item--no-hover" :header-style="{ padding: '15px 25px',fontSize: '15px' }" @show="setBgColor" @hide="removeBgColor">
                            <q-card>
                            <q-card-section>
                                پاسخ: {{ item.answer }}
                            </q-card-section>
                            </q-card>
                        </q-expansion-item>
                    </div>
                </q-list>
            </section>
        </div>
        <div class="not-found column flex-center q-pa-lg">
            <span class="text-weight-medium q-pb-md">سوال مورد نظر شما یافت نشد؟ با ما تماس بگیرید:</span>
            <q-img src="../../src/assets/foter-question.svg" width="200px" :ratio="9/4" fit="contain"></q-img>
        </div>
      </section>
    </q-page>
</template>
  
<script>
import { defineComponent } from 'vue'
import axios from "axios";

export default defineComponent({
    name: 'Faq',

    data() {
        return {
            faq: []
        }
    },
    mounted() {
        axios
        .get("https://server.easybimeh.com/api/Faq")
        .then((response)=> {
            this.faq = response.data.message
        })
        .catch((error)=> {
            console.error(error);
        });
    },
    methods: {
        setHeight() {
            return { minHeight: '400px' }
        },
        setBgColor(evt) {
            let childEl = evt.target
            let parentStyle = childEl.parentNode.parentNode.style
            parentStyle.background = 'linear-gradient(45deg,#ffc371 0, #ff5f6d 100%)'
            childEl.classList.add('active')
            childEl.classList.remove('deactive')
        },
        removeBgColor(evt) {
            let childEl = evt.target
            let parentStyle = childEl.parentNode.parentNode.style
            parentStyle.background = 'none'
            childEl.classList.add('deactive')
            childEl.classList.remove('active')
        }
    }
})
</script>

<style lang="scss" scoped>
    :deep(.q-btn.btn--no-hover .q-focus-helper),
    :deep(.q-expansion-item.item--no-hover .q-focus-helper) {
        display: none;  /* no hover on elements*/
    }
    .faq-section {
        .title {
            .search-box {
                border-radius: 30px;
                width: 70%;
            }
        }
        .q-item:hover {
            background: linear-gradient(90deg,#ffc371 0,#ff5f6d 100%) !important;
        }
        .not-found {
            span {
                font-size: 16px;
            }
        }
    }
    :deep(.active) {
        color: white;
        padding: 8px 0;
        transition: .4s;
    }
    :deep(.deactive) {
        color: black;
        padding: 0 0;
        transition: .4s;
    }

    @media (max-width: 769px) {
        :deep(.q-item__label) {
            font-size: 13px;
            font-weight: 800;
        }   
    }
</style>