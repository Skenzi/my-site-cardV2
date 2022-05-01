<template>
    <router-link class="button-link" :class=classLink :to=pathTo>{{text}}</router-link>
</template>
<script>
export default {
    props: ['color', 'pathTo', 'text'],
    computed: {
        classLink: function() {
            return {
                'button-link--green': this.color === 'green'
            }
        }
    }
}
</script>
<style>

</style>