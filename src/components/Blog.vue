<template>
    <div>
        <h1 class='text-white'>blogs ==> {{ id }}</h1>
            q is : {{ $route.query.q }}<br>
            name is : {{ $route.query.name }}
            <!-- query string(query parameters) syntax : ?q=number&name=the-name  -->
            <!-- بنطبع الكويري بالشكل اللى فوق وبنمررها داخل اتريبيوت ال "تو" فى ال راوتر لينك -->
            <!-- note: query string is optional -->
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            // id: this.$route.params.id,
            // declare id here to fetch it but data function will return it only at first one time, so web have to fetch it by props
            // هذه الطريقه تستخدم فى حالة الانتقال الغير مباشر بين الروتس اللى ليها باراميتر اللى هما بلوج 1 و بلوج 2 مثلا يعنى لما تدوس على بلوج 1 وعاوز تدوس على بلوج 2 لازم فى النص تدوس على راوت تانى غيرهم
            // عشان قيمة الباراميتر تتغير
        }
    },
    props: ['id'],
    // يتم تعريفها فى ملف الراوتس واعطائها القيمه ترو وهذا يعنى انه سوف يتم تمرير   قيمه الباراميتر الى البروبس
}
</script>