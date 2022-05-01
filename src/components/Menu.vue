<template>
    <nav class="navigation">
        <ButtonLink class="navigation__link" color="green" pathTo="/" text="Home" />
        <button class="navigation__button" v-on:click="setActiveId('Bio')">БИО</button>
        <button class="navigation__button" v-on:click="setActiveId('Path to IT')">Путь в IT</button>
        <button class="navigation__button" v-on:click="setActiveId('Abilities')">Навыки и технологии</button>
        <button class="navigation__button" v-on:click="setActiveId('Contacts')">Контакты</button>
    </nav>
</template>
<script>
import ButtonLink from './ButtonLink.vue';

export default {
    name: 'MenuNavigation',
    props: ['setActiveId'],
    components: {
        ButtonLink,
    }
}
</script>
<style>
.navigation {

}
.navigation__button {
    padding: 20px 40px;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>