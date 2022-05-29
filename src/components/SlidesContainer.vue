<template>
    <div class="slide-wrapper">
        <Slide :slide="slide" :isChangeSlide="isChangeSlide" />
        <MenuNavigation :setIsOpen="setIsOpen" :slideHandler="slideHandler" :isOpen="isOpen" />
    </div>
</template>
<script>
import Slide from './Slide.vue';
import MenuNavigation from './Menu.vue';

export default {
    name: 'slides-container',
    data(){
        return {
            isOpen: false,
            activeId: 'Bio',
            isChangeSlide: false,
            slides: [
                {
                title: 'Bio',
                text: 'Bio',
                },
                {
                title: 'Path to IT',
                text: 'Path to IT',
                },
                {
                title: 'Abilities',
                text: 'Abilities',
                },
                {
                title: 'Contacts',
                text: 'Contacts',
                }
            ]
        }
    },
    computed: {
        slide: function() {
            return this.slides.find(slide => slide.title === this.activeId);
        },
    },
    methods: {
        setIsOpen: function() {
            this.isOpen = !this.isOpen;
        },
        slideHandler: function(id) {
            this.isChangeSlide = true;
            setTimeout(() => {
                this.activeId = id;
                this.isChangeSlide = false;
            }, 1500)
        }
    },
    components: {
        Slide,
        MenuNavigation,
    }
}
</script>
<style>
.slide-wrapper {
    height: 100vh;
    background-color: rgb(21, 21, 21);
    animation: undark 1s 1s ease forwards;
}
@keyframes undark {
    to {
        background-color: white;
    }
}
</style>