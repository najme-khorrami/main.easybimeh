<template>
    <q-page :style-fn="setHeight">
      <section class="q-py-lg">
        <div class="container">
          <div class="title q-py-md row justify-between items-center">
            <span class="text-weight-bold">برخی از مشتریان</span>
            <q-btn to="/" class="btn-back shadow-9" icon="arrow_back"></q-btn>
          </div>
        </div>
        <div class="container">
            <!-- content of this page -->
        </div>
      </section>
    </q-page>
</template>
  
<script>
import { defineComponent } from 'vue'
// import axios from "axios";

export default defineComponent({
    name: 'InsuranceCentre',

    methods: {
        setHeight() {
            return { minHeight: '400px' }
        }
    }
})
</script>

<style lang="scss" scoped>
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
</style>