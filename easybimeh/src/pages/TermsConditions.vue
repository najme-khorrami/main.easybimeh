<template>
  <q-page :style-fn="setHeight">
    <section>
      <div class="container">
        <div class="title q-py-xl">
          <h5 class="text-weight-bold">{{ termsConditions.title }}</h5>
        </div>
        <div class="content" v-html="termsConditions.content"></div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
  name: 'TermsConditions',

  data() {
    return {
      termsConditions: ''
    }
  },
  mounted() {
    axios
    .get("https://server.easybimeh.com/api/Information?key=0")
    .then((response)=> {
      this.termsConditions = response.data.message.information.termsconditions[0]
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
$text-color: #505050;
* {
  color: $text-color;
}
.content {
  font-size: 16px;
}
</style>