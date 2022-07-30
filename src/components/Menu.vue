<template>
    <div class="navigation__wrapper">
        <button class="navigation__button" v-on:click="toNext(-1)">&lt;</button>
        <button class="navigation__button" v-on:click="toNext(1)">&gt;</button>
    </div>
</template>
<script>

export default {
    name: 'MenuNavigation',
    props: ['isOpen', 'setIsOpen', 'slideHandler', 'namesSlides'],
    data() {
        return {
            activeId: 0,
        }
    },
    methods: {
        toNext(val) {
            let nextSlideId = this.activeId + val;
            if (nextSlideId === this.namesSlides.length) {
                nextSlideId = 0;
            }
            if(nextSlideId < 0) {
                nextSlideId = this.namesSlides.length - 1;
            }
            const nextNameSlide = this.namesSlides[nextSlideId];
            this.activeId = nextSlideId;
            this.slideHandler(nextNameSlide);
        }
    },
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
.navigation__wrapper {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
}
.navigation__button {
    padding: 20px 40px;
    background: url('../images/button-decor.png');
    background-size: 100% 100%;
    cursor: pointer;
}
</style>