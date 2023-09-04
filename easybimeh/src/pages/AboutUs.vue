<template>
  <q-page :style-fn="setHeight">
    <section class="q-py-lg">
      <div class="container">
        <div class="title q-py-md">
          <q-img src="../../src/assets/aboutus-icon.svg" width="25px"></q-img>
          <span class="q-pl-sm text-primary">درباره ما</span>
        </div>
        <p class="text-weight-bold">{{ content }}</p>
        <div class="container">
          <q-separator inset spaced="50px"/>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import axios from "axios";

export default defineComponent({
  name: 'AboutUs',
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    axios
      .get("https://server.easybimeh.com/api/Information?key=0")
      .then((response)=> {
        this.content = response.data.message.information.about[0].content
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
  .title {
    span {
      font-size: 20px;
    }
  }
  p {
    font-size: 14px;
    line-height: 24px;
  }
</style>