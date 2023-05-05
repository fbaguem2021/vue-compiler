<template>
    <div>
        <p class="text-block">{{ msg }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Hello World'
        }
    }
}
</script>
<style scoped>
.text-block {
    color: red;
}
</style>