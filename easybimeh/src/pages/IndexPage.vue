<template>
  <q-page class="flex flex-center">
    <transition appear enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
      <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >

    </transition>
    <q-icon name="warning" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
