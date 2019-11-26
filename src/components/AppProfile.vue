<template>
    <div>
        <div class="profile">
            <p>first name is : {{ data.first_name}} </p>
            <p>last name is : {{ data.last_name}} </p>
            <p>email is : {{ data.email}} </p>
            <p>gender is : {{ data.gender}} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-profile',
    props: ['data']
}
</script>

<style scoped>
.profile {
    background: #976666;
    color: #fff;
    padding: .8rem 0;
    margin: .5rem 20rem;
}
</style>