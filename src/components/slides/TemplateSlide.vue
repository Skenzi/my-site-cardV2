<template>
    <div class="slide">
        <h2 :class="titleClasses" class="relitive left-0">{{this.titleText}}</h2>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "template-slide",
    props: ["titleText", "titleClasses"],
}
</script>