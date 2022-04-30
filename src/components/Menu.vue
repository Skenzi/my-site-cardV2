<template>
    <nav>
        <router-link to="/">Home</router-link>
        <ButtonMenu v-on:click="setActiveId('Bio')" text="БИО" />
        <ButtonMenu v-on:click="setActiveId('Path to IT')" text="Путь в IT" />
        <ButtonMenu v-on:click="setActiveId('Abilities')" text="Навыки и технологии" />
        <ButtonMenu v-on:click="setActiveId('Contacts')" text="Контакты" />
    </nav>
</template>
<script>
import ButtonMenu from './Button.vue'
export default {
    name: 'MenuNavigation',
    props: ['setActiveId'],
    components: {
        ButtonMenu,
    }
}
</script>