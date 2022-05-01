<template>
    <nav class="navigation">
        <button class="navigation__button-fold"></button>
        <div class="navigation__wrapper">
            <ButtonLink class="navigation__link" color="green" pathTo="/" text="Home" />
            <div class="navigation__menu">
                <button class="menu__button" v-on:click="setActiveId('Bio')">БИО</button>
                <button class="menu__button" v-on:click="setActiveId('Path to IT')">Путь в IT</button>
                <button class="menu__button" v-on:click="setActiveId('Abilities')">Навыки и технологии</button>
                <button class="menu__button" v-on:click="setActiveId('Contacts')">Контакты</button>
            </div>
        </div>
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
    padding: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
}
.navigation__wrapper {
    display: flex;
}
.navigation__button-fold {
    display: block;
    margin: 0 auto;
    padding: 0;
    border: 20px solid white;
    border-bottom: 20px solid black;
}
.navigation .menu__button {
    padding: 20px 40px;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>