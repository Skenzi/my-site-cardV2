<template>
    <nav>
        <router-link to="/">Home</router-link>
        <button v-on:click="setActiveId('Bio')">БИО</button>
        <button v-on:click="setActiveId('Path to IT')">Путь в IT</button>
        <button v-on:click="setActiveId('Abilities')">Навыки и технологии</button>
        <button v-on:click="setActiveId('Contacts')">Контакты</button>
    </nav>
</template>
<script>
export default {
    name: 'MenuNavigation',
    props: ['setActiveId'],
}
</script>