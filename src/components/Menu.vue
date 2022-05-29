<template>
    <nav class="navigation" :class="classNavigation">
        <button v-on:click="setIsOpen()" class="navigation__button-fold"></button>
        <div class="navigation__wrapper">
            <button class="navigation__button" v-on:click="slideHandler('Bio')">БИО</button>
            <button class="navigation__button" v-on:click="slideHandler('Path to IT')">Путь в IT</button>
            <button class="navigation__button" v-on:click="slideHandler('Abilities')">Навыки</button>
            <button class="navigation__button" v-on:click="slideHandler('Contacts')">Контакты</button>
        </div>
    </nav>
</template>
<script>

export default {
    name: 'MenuNavigation',
    props: ['isOpen', 'setIsOpen', 'slideHandler'],
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
    box-shadow: 0 -10px 10px rgb(31, 31, 31);
    transition: 1s;
    animation: upNavigation 2s ease-in;
}
.navigation.open {
    bottom: 0;
}
.navigation__wrapper {
    display: flex;
    justify-content: space-around;
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
    transform: scaleY(-1);
}
.navigation__button {
    padding: 20px 40px;
    background: url('../images/button-decor.png');
    background-size: 100% 100%;
    cursor: pointer;
}
@keyframes upNavigation {
    from {
        bottom: -200px;
    }
}
</style>