<template>
    <router-link class="button-link" :class=classLink :to=pathTo>{{text}}</router-link>
</template>
<script>
export default {
    name: 'button-link',
    props: ['color', 'pathTo', 'text'],
    computed: {
        classLink: function() {
            return {
                'button-link--dark': this.color === 'dark'
            }
        }
    }
}
</script>
<style>
.button-link {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: rgb(255, 255, 255);
    background-color: transparent;
}
.button-link--dark {
    background-color: rgb(45, 45, 45);
}
</style>