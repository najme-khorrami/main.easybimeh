<template>
  <q-page :style-fn="setHeight" class="flex flex-center">
    <section>
      <div class="header q-px-md q-py-md">
        <h2 class="text-weight-medium">انتقادات و پیشنهادات</h2>
      </div>
      <q-form class="q-my-md" @submit="onSubmit" ref="myForm" greedy>
        <div class="row">
          <div class="col-md-6 col-xs-12 q-px-md q-pt-md">
            <q-input borderless v-model="name" type="text" label-slot label-color="black" placeholder="نام خانوادگی خود را وارد نمایید" no-error-icon reactive-rules :rules="[ val => val !== '' || 'نام خانوادگی الزامی است']">
              <template #label>
                <div>نام و نام خانوادگی <span class="text-red">*</span></div>
              </template>
            </q-input>
          </div>
          <div class="col-md-6 col-xs-12 q-px-md q-pt-md">
            <q-input borderless v-model="emailModel" type="email" label-slot label-color="black" placeholder="ایمیل خود را وارد کنید" no-error-icon reactive-rules :rules="[val => val !== '' || 'ایمیل الزامی است' , val => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(val) || 'مقدار ایمیل معتبر نمی باشد']">
              <template #label>
                <div>ایمیل <span class="text-red">*</span></div>
              </template>
            </q-input>
          </div>
          <div class="col-12 q-px-md q-pt-md">
            <q-select borderless v-model="subject" label-slot label-color="black" :options="subjectOptions" behavior="menu" no-error-icon reactive-rules :rules="[ val => val !== '' || 'موضوع الزامی است']" @update:model-value="getProvinceId">
              <template #label>
                <div>موضوع <span class="text-red">*</span></div>
              </template>
              <template v-slot:append>
                <q-icon v-if="subject !== ''" name="close" @click.stop.prevent="subject = ''" class="cursor-pointer" size="14px" />
              </template>
            </q-select>
          </div>
          <div class="col-12 q-px-md q-pt-md">
            <q-input borderless v-model="text" type="textarea" placeholder="متن خود را بنویسید ..." />
          </div>
        </div>
        <div class="btn-group q-px-md q-pt-md">
          <q-btn label="انصراف" color="primary" class="cancle" to="/"></q-btn>
          <q-btn label="ثبت" color="primary" class="register" type="submit" ></q-btn>
        </div>
      </q-form>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import axios from "axios";

export default defineComponent({
  name: 'RegisterComplaint',

  data() {
    return {
      name: '',
      emailModel: '',
      subject: '',
      text: '',
      subjectOptions: [],
      setBorder: false
    }
  },
  created() {
    axios
    .get("https://server.easybimeh.com/api/SuggestionsCritic/0")
    .then((response) => {
      let subjects = response.data.message.subjects
      subjects.forEach(el => {
        this.subjectOptions.push(el.title)
      })
    })
    .catch((error) => {
      console.error(error);
    });
  },
  methods: {
    setHeight() {
      return { minHeight: '400px' }
    },
    onSubmit() {
      // axios.post('https://jsonplaceholder.typicode.com/users', {})
      // .then( (response) => {
      //   console.log(response);
      // })
      // .catch( (error) => {
      //   console.error(error);
      // });
      this.$refs.myForm.resetValidation()
      this.name = ''
      this.emailModel = ''
      this.subject = ''
      this.text = ''
    }
  }
})
</script>

<style lang="scss" scoped>
  section {
    width: 50%;
    background-color: #fff;
    padding: 0 50px 40px;
  }
  h2 {
    font-size: 24px;
  }
  :deep(.q-field__control) {
    color: black !important;
      &::after {
      border: 1px solid black;
      border-radius: 3px;
    }
  }
  :deep(.q-field__native),
  :deep(.q-field__label) {
    margin: 0 10px;
  }
  .btn-group {
    display: flex;
    justify-content: flex-end;
  }
  .register,
  .cancle {
    color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 200;
    border-radius: 3px;
    width: 185px;
    height: 60px;
  }
  .register {
    background: linear-gradient(104.96deg,#1763cc 0,#3b8bff 100%) !important;
    box-shadow: -4px 8px 22px -1px rgba(59,139,255,.75) !important;
    margin-left: 20px;
  }
  .cancle {
    background: linear-gradient(105.26deg,#ff9912 0,#ffb95c 100%) !important;
    box-shadow: -4px 8px 12px rgba(255,153,18,.65) !important;
  }

  @media (max-width: $breakpoint-xs) {
    section {
      width: 100%;
    }
  }
</style>