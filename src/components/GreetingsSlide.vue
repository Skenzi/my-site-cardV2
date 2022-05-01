<template>
    <div class="greetings">
        <h1 class="greetings__title">Privet</h1>
        <p class="greetings__greetings">Zaxodi</p>
        <ButtonLink class="greetings__link" color="green" pathTo="slides" text="В путь" />
    </div>
</template>
<script>
import ButtonLink from './ButtonLink.vue';

export default {
    name: 'GreetingsSlide',
    components: {
        ButtonLink,
    }
}
</script>
<style>
.greetings {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.greetings__title {

}
.greetings__greetings {
    
}
.greetings__link {
    align-self: center;
}
</style>