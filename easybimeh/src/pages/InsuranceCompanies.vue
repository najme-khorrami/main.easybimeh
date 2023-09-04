<template>
    <q-page :style-fn="setHeight">
      <section class="q-py-lg">
        <div class="container">
          <div class="title q-py-md row justify-between items-center">
            <span class="text-weight-bold">شرکت های بیمه</span>
            <q-btn to="/" class="btn-back shadow-9" icon="arrow_back"></q-btn>
          </div>
        </div>
        <div class="container">
            <div class="company row q-mb-md justify-center">
                <q-btn flat target="_blank" :href="item.link" v-for="item in insuranceCompany" :key="item.id" class="q-my-sm q-pt-sm btn--no-hover">
                    <q-img :src="item.metaMediaLogoFileUrl" width="125px" :ratio="1/1" fit="contain" :img-style="{ padding: '8px' }"></q-img>
                    <span>{{ item.title }}</span>
                    <q-tooltip transition-show="fade" transition-hide="fade">{{ item.title }}</q-tooltip>
                </q-btn>
            </div>
        </div>
      </section>
    </q-page>
</template>
  
<script>
import { defineComponent } from 'vue'
import axios from "axios";

export default defineComponent({
    name: 'InsuranceCompanies',

    data() {
        return {
            insuranceCompany: []
        }
    },
    mounted() {
        axios
        .get("https://server.easybimeh.com/api/Information?key=0")
        .then((response)=> {
            this.insuranceCompany = response.data.message.insuranceCompany
        })
        .catch((error)=> {
            console.error(error);
        });
    },
    methods: {
        setHeight() {
            return { minHeight: '400px' }
        }
    }
})
</script>

<style lang="scss" scoped>
    :deep(.q-btn.btn--no-hover .q-focus-helper) {
        display: none;  // no hovering on button
    }
    .title {
        span {
            font-size: 18px;
        }
        .btn-back {
            width: 50px;
            height: 50px;
            background: $gradient-primary;
            border-radius: 50%;
            color: white;
        }
    }
    .company {
        .q-btn {
            width: 130px;
            height: 130px;
            .q-img {
                background-color: $white;
            }
            span {
                font-size: 12px;
                white-space: nowrap;
            }
        }
    }
</style>