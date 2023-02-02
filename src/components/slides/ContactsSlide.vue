<template>
        <div :class=textClasses class="container-f relitive left-0">
            <div class="f-row">
                <span>Телефон: </span>
                <a href="tel:+79221236723">8(922)-123-67-23</a>
            </div>
            <div class="f-row">
                <span>Почта: </span>
                <a href="mailto:dedooman@mail.ru">dedooman@mail.ru</a>
            </div>
            <div class="f-row">
                <span>Запасная почта: </span>
                <a href="mailto:fitronavm@gmail.com">fitronavm@gmail.com</a>
            </div>
            <div class="f-row">
                <span>GutHub: </span>
                <a target="_blank" href="https://github.com/Skenzi">Skenzi</a>
            </div>
        </div>
</template>

<script>
export default {
    props: ['textClasses'],
    name: 'slide-contacts',
}
</script>
<style>
    .slide {
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
    }
</style>