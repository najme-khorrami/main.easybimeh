<template>
  <q-layout view="lHh Lpr lFf">
    <!-- contact header -->
    <div class="contact-header bg-secondary">
      <div class="container">
        <a href="#">
          <q-icon name="fab fa-linkedin-in" size="20px" color="info" class="q-pa-sm"></q-icon>
        </a>
        <a href="#">
          <q-icon name="fab fa-telegram-plane" size="xs" color="info" class="q-pa-sm"></q-icon>
        </a>
        <a href="#">
          <q-icon name="fab fa-instagram" size="xs" color="info" class="q-pa-sm"></q-icon>
        </a>
        <a href="#">
          <q-icon name="fab fa-twitter" size="xs" color="info" class="q-pa-sm"></q-icon>
        </a>
      </div>

      
    </div>
    <!-- menu header -->
    <div class="menu-header bg-primary">

    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {

    return {

    }
  }
})
</script>
<style lang="scss" scoped>
  .contact-header {
    height: 35px;
  }
  .menu-header {
    height: 75px;
    position: sticky;
    top: 0;
  }
</style>