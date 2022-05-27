<template>
    <div class="slide">
        <h2>{{slide.title}}</h2>
        <p>{{slide.text}}</p>
    </div>
</template>

<script>
export default {
    props: ['slide'],
    name: 'SlideComp'
}
</script>
<style>
    .slide {
        
    }
</style>