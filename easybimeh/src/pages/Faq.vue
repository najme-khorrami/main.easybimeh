<template>
    <q-page :style-fn="setHeight">
      <section class="faq-section q-py-md">
        <div class="container">
          <div class="title q-py-md column justify-center items-center">
            <q-img src="../../src/assets/top-questions.svg" width="120px" fit="contain"></q-img>
            <h6 class="text-weight-bold q-py-md">چطور می توانیم به شما کمک کنیم؟</h6>
            <div class="search-box">
                <!-- should fix -->
                <q-input :input-class="full-width" v-model="faqSearch" placeholder="پرسش یا واژه مورد نظر خود را جستجو کنید ...">
                    <template v-slot:prepend>
                    <q-icon name="search" />
                    </template>
                </q-input>
            </div>
          </div>
        </div>
        <div class="container">
            <section class="faq-items q-pt-lg">

            </section>
        </div>
      </section>
    </q-page>
</template>
  
<script>
import { defineComponent } from 'vue'
// import axios from "axios";

export default defineComponent({
    name: 'Faq',

    methods: {
        setHeight() {
            return { minHeight: '400px' }
        }
    }
})
</script>

<style lang="scss" scoped>
    .faq-section {
        .title {
            border: 1px solid red;
            .search-box {
                // border: 1px solid red;
            }
        }
        .faq-items {
            border: 1px solid red;
        }
    }
</style>