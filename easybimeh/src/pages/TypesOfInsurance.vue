<template>
  <q-page :style-fn="setHeight">
    <section class="q-py-lg">
      <div class="container">
        <div class="title q-py-md row justify-between items-center">
          <span class="text-weight-bold">انواع بیمه نامه ها</span>
          <q-btn to="/" class="btn-back shadow-9" icon="arrow_back"></q-btn>
        </div>
      </div>
      <div class="container">
        <div class="insure-boxes row q-mb-md">
          <q-card id="insure-item" class="cursor-pointer" v-for="item in insuranceTypes" :key="item.id">
            <q-card-section class="q-pa-none row justify-center items-center" style="height: 50%;">
              <img :src="item.imageUrl" :alt="item.title" class="q-pa-sm">
            </q-card-section>
            <q-card-section class="q-py-none q-px-xs row justify-center items-center" style="height: 50%;">
              <span class="text-center block">{{ item.title }}</span>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import axios from "axios";

export default defineComponent({
  name: 'typesOfInsurance',

  data() {
    return {
      insuranceTypes: []
    }
  },
  mounted() {
    axios
    .get("https://server.easybimeh.com/api/Information?key=0")
    .then((response)=> {
      this.insuranceTypes = response.data.message.insuranceType
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
    display: none;  /* no hover on buttons*/
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
  .insure-boxes {
    #insure-item  {
      width: 150px;
      height: 150px;
      border-radius: 10px;
      margin: 10px 5px;
      span {
        font-size: 12px;
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>