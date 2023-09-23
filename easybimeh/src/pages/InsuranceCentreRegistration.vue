<template>
  <q-page>
    <section class="top-header">
      <div class="container full-height">
        <div class="row justify-between items-center cursor-pointer full-height" @click="$router.push('/')">
          <div class="row items-center">
            <q-img src="../../src/assets/register-center.svg" class="q-mr-sm" fit="contain"></q-img>
            <h1 class="text-white q-my-none text-weight-regular">
              فرم ثبت نام مراکز بیمه ای 
              <span class="text-white">(نمایندگی / کارگزاری)</span>
            </h1>
          </div>
          <div>
            <span style="font-size: 16px;" class="gt-xs q-pr-sm">بازگشت</span>
            <q-icon size="22px" name="chevron_left" class="gt-xs"></q-icon>
          </div>
        </div>
      </div>
    </section>  
    <div class="container">
      <section class="video-btn q-my-sm relative-position">
        <q-btn outline label="مشاهده راهنمای تصویری" icon="play_circle_outlined" class="absolute-right q-pl-none q-pr-lg" href="https://www.aparat.com/v/HFneS" target="_blank"></q-btn>
      </section>

      <KeepAlive>
        <component :is="compName" @changeComp="compName = $event" @userInfo="setUserInfo($event)" :user-info="thisUser"/>
      </KeepAlive>

    </div>  
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import RegisterForm from 'components/RegisterForm.vue'
import InformationForm from 'components/InformationForm.vue'

export default defineComponent({
  name: 'InsuranceCentreRegistration',
  components: {
    RegisterForm,
    InformationForm
  },
  data() {
    return {
      compName: 'RegisterForm',
      thisUser: []
    }
  },
  methods: {
    setUserInfo(user) {
      this.thisUser = user
    }
  }
})
</script>

<style lang="scss" scoped> 
.top-header {
  background: $gradient-primary;
  height: 65px;
  color: white;
  .q-img {
    width: 40px;
    height: 40px;
  }
  h1 {
    font-size: 20px;
    line-height: 20px;
    span {
      font-size: 16px;
    }
  }
}
.video-btn {
  height: 40px;
  .q-btn {
    color: $warning;
  }
}

@media (max-width: $breakpoint-xs) {
  .top-header {
    h1 {
      font-size: 16px;
      span {
        font-size: 12px;
      }
    }
    .q-img {
      width: 35px !important;
      height: 35px !important;
    }
  } 
}
</style>