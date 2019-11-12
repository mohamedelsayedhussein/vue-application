<template>
    <div class="wrapper">
        <div class="container">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        <h1>welcome from header component</h1>
    </div>
</template>

<script>
export default {
    name : 'HeaderComponent',
};

</script>

<style scoped lang="scss">
h1 {
color: #f07;
}
</style>