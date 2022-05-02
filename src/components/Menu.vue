<template>
    <nav class="navigation" :class="classNavigation">
        <button v-on:click="setIsOpen()" class="navigation__button-fold"></button>
        <div class="navigation__wrapper">
            <button class="menu__button" v-on:click="setActiveId('Bio')">БИО</button>
            <button class="menu__button" v-on:click="setActiveId('Path to IT')">Путь в IT</button>
            <button class="menu__button" v-on:click="setActiveId('Abilities')">Навыки</button>
            <button class="menu__button" v-on:click="setActiveId('Contacts')">Контакты</button>
        </div>
    </nav>
</template>
<script>

export default {
    name: 'MenuNavigation',
    props: ['setActiveId', 'isOpen', 'setIsOpen'],
    computed: {
        classNavigation: function() {
            return {
                open: this.isOpen,
            }
        }
    },
}
</script>
<style>
.navigation {
    padding: 0 20px 20px 20px;
    position: absolute;
    bottom: -100px;
    right: 0;
    left: 0;
    box-shadow: 0 -10px 10px black;
    transition: 1s;
}
.navigation.open {
    bottom: 0;
}
.navigation__wrapper {
    display: flex;
    justify-content: space-between;
}
.navigation__button-fold {
    display: block;
    margin: 0 auto;
    margin-bottom: 40px;
    padding: 0;
    border: 20px solid transparent;
    border-bottom: 20px solid black;
    cursor: pointer;
    transition: 1s;
}
.navigation.open .navigation__button-fold {
    margin-top: 20px;
    margin-bottom: 20px;
    transform: rotate(180deg);
}
.navigation .menu__button {
    padding: 20px 40px;
    background: url('../images/button-decor.png');
    background-size: 100% 100%;
    cursor: pointer;
}
</style>