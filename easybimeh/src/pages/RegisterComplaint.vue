<template>
  <q-page :style-fn="setHeight">
    <!-- content -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RegisterComplaint',

  methods: {
    setHeight() {
      return { minHeight: '400px' }
    }
  }
})
</script>
