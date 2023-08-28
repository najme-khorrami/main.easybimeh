<template>

</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";


export default defineComponent({
name: "PackagesComp",

setup() {
    axios
      .get("https://server.easybimeh.com/api/Information?key=0")
      .then(function (response) {
        response.data.message.plans.forEach(function (item) {

        });
 
        // console.log(companyList);
      })
      .catch(function (error) {
        console.error(error);
      });
    return {

    };
},
});
</script>

<style lang="scss" scoped>

</style>
  