<template>
    <div class="table-container">
        <table>
            <tr style="background-color:rgba(7, 130,130,0.7);">
                <th>عنوان</th>
                <th>نسخه پایه</th>
                <th>نسخه پیشرفته</th>
                <th>نسخه حرفه ای</th>
            </tr>
            <tr class="1">
                <td>{{ subTable[1] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="2">
                <td>{{ subTable[2] }}</td>
                <td colspan="3">کلیه شرکت های بیمه</td>
            </tr>
            <tr class="3">
                <td>{{ subTable[3] }}</td>
                <td colspan="3">نامحدود</td>
            </tr>
            <tr class="4">
                <td>{{ subTable[4] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="5">
                <td>{{ subTable[5] }}</td>
                <td colspan="3">تمامی رشته های بیمه ای</td>
            </tr>
            <tr class="6">
                <td>{{ subTable[6] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="7">
                <td>{{ subTable[7] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="8">
                <td>{{ subTable[8] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="9">
                <td>{{ subTable[9] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="10">
                <td>{{ subTable[10] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="11">
                <td>{{ subTable[11] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="12">
                <td>{{ subTable[12] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="13">
                <td>{{ subTable[13] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="14">
                <td>{{ subTable[14] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="15">
                <td>{{ subTable[15] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="16">
                <td>{{ subTable[16] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="17">
                <td>{{ subTable[17] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="18">
                <td>{{ subTable[18] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="19">
                <td>{{ subTable[19] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="20">
                <td>{{ subTable[20] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="21">
                <td>{{ subTable[21] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="22">
                <td>{{ subTable[22] }}</td>
                <td><img :src="xImg" alt="x"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="23">
                <td>{{ subTable[23] }}</td>
                <td><img :src="xImg" alt="x"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="24">
                <td>{{ subTable[24] }}</td>
                <td><img :src="xImg" alt="x"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="25">
                <td>{{ subTable[25] }}</td>
                <td><img :src="xImg" alt="x"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="26">
                <td>{{ subTable[26] }}</td>
                <td><img :src="xImg" alt="x"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="27">
                <td>{{ subTable[27] }}</td>
                <td><img :src="xImg" alt="x"></td>
                <td><img :src="xImg" alt="x"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="28">
                <td>{{ subTable[28] }}</td>
                <td><img :src="xImg" alt="x"></td>
                <td><img :src="xImg" alt="x"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="29">
                <td>{{ subTable[29] }}</td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="30">
                <td>{{ subTable[30] }}</td>
                <td>شش ماه</td>
                <td>شش ماه</td>
                <td>شش ماه</td>
            </tr>
            <tr class="31">
                <td>{{ subTable[31] }}</td>
                <td><img :src="xImg" alt="x"></td>
                <td><img :src="check" alt="tick"></td>
                <td><img :src="check" alt="tick"></td>
            </tr>
            <tr class="32">
                <td>{{ subTable[32] }}</td>
                <td colspan="3">6 ساعت آموزش راهبری و کاربری</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'OBTable',

    data() {
        return {
            check: '../../src/assets/checkmark.png',
            xImg: '../../src/assets/x.png',
            subTable: {
                1:' وبسایت اختصاصی' ,2:'تعداد شرکت بیمه' ,3:'تعداد کاربر واحد صدور و بازاریاب' ,4:'مدیریت کاربران' ,5:'امکان ارائه تمامی رشته های بیمه ای(استعلام نرخ، ثبت فرم،پیشنهاد و ثبت دستی و سیستمی)' ,6:'اتصال رایگان به سوئیچ نرخ دهی بیمه مرکزی(در صورت راه اندازی و در هر مقطع زمانی)' ,7:'امکان تعریف و فروش طرح برای انواع رشته های بیمه به صورت آنلاین ' ,8:'امکان ایمپورت اطلاعات بیمه گذاران و بیمه نامه های صادر شده قبلی' ,9:'شبکه فروش درختی بدون محدودیت و محاسبه کارمزد با الگوهای مختلف (درصدی و مبلغ ثابت)' ,10:'امکان ساخت لینک ارجاع تبلیغاتی جهت فروش بیمه نامه توسط بازاریابان(Affiliation)' ,11:'قابلیت ایجاد و مدیریت شعب بدون محدودیت تعداد شعب' ,12:'اتصال به سامانه پیامکی به صورت یکپارچه' ,13:'کیف پول و پرداخت ' ,14:' تعریف انواع تخفیف برای رشته های بیمه ' ,15:'مدیریت کمپین ها ' ,16:'مدیریت و آرشیو فایل ها ' ,17:'مدیریت محتوای سایت (CMS)' ,18:'ماژول CRM(نگهداری سوابق و پروفایل بیمه گذاران)', 19:'قابلیت ثبت و پیگیری خسارت ' ,20:'سرویس یادآور تمدید و اقساط بیمه نامه ' ,21:'طراحی گرافیکی صفحه اصلی سایت به صورت اختصاصی ' ,22:'قابلیت توسعه و شخصی سازی سامانه به درخواست مشتری (با دریافت هزینه مجزا)' ,23:'زیرسیستم انتشار و جذب آگهی استخدام و همکاری با ما ' ,24:'فرآیند جذب نماینده و واحد صدور بصورت برخط' ,25:'فرآیند جذب بازاریاب بصورت برخط' ,26:'قابلیت ارائه وایت لیبل فروش و ثبت درخواست بیمه نامه در سایر اپلیکیشن ها و سامانه ها به صورت مشارکتی ' ,27:'قابلیت ارائه  API‌ فروش و ثبت درخواست بیمه نامه در سایر اپلیکیشن ها و سامانه ها به صورت مشارکتی ' ,28:'ارائه سورس کد- محدود و مشروط ' ,29:'ارائه گواهی  SSL ‌رایگان ' ,30:'گارانتی محصول ' ,31:'امکان انعقاد قرارداد پشتیبانی بلند مدت پس از دوران گارانتی ' ,32:'آموزش رایگان سامانه '
            }
        }
    }
})
</script>

<style lang="scss" scoped>
    * {
        font-size: 17px;
    }
    th, td {
        border: 1px solid gray;
        text-align: center;
        padding: 8px;
    }
    tr:hover {
        transform: scale(1.01);
    }
    td:nth-child(1) {
        text-align: start;
        width: 66%;
    }
    tr:nth-child(odd) {
        background-color: rgba(45, 134, 89,0.23);
    }
    table {
        width: 100%;
    }
    .table-container {
        width: 85%;
        margin: auto;
        margin-top: 30px;
    }
    img[alt="tick"] {
        height: 24px;
    }
    img[alt="x"] {
        height: 15px;
    }

    @media (max-width: $breakpoint-sm-min) {
        .table-container {
            width: 100%;
        }
    }
</style>