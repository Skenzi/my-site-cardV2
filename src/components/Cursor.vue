<template>
    <div class="cursor"></div>
</template>
<script>
export default {
    name: 'cursor-text',
}
</script>
<style>
.cursor {
    display: inline-block;
    width: 3px;
    height: 80%;
    animation: blink .8s infinite;
}
@keyframes blink {
    0% {
        background-color: #fff;
    }
    100% {
        background-color: rgb(23, 22, 22);
    }
}
</style>