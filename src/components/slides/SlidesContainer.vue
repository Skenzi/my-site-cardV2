<template>
    <div class="slide-wrapper">
        <SlideBio v-if="activeId === 'Bio'" :isChangeSlide="isChangeSlide" />
        <SlideAbilities v-if="activeId === 'Abilities'" :isChangeSlide="isChangeSlide" />
        <SlideContacts v-if="activeId === 'Contacts'" :isChangeSlide="isChangeSlide" />
        <MenuNavigation :setIsOpen="setIsOpen" :slideHandler="slideHandler" :isOpen="isOpen" :namesSlides="namesSlides" />
    </div>
</template>
<script>
import MenuNavigation from '../Menu.vue';
import SlideBio from './SlideBio.vue';
import SlideAbilities from './SlideAbilities.vue';
import SlideContacts from './SlideContacts.vue';

export default {
    name: 'slides-container',
    data(){
        return {
            isOpen: false,
            activeId: 'Bio',
            isChangeSlide: false,
            namesSlides: ['Bio', 'Abilities', 'Contacts'],
    }},
    methods: {
        setIsOpen: function() {
            this.isOpen = !this.isOpen;
        },
        slideHandler: function(id) {
            this.isChangeSlide = true;
            setTimeout(() => {
                this.activeId = id;
                this.isChangeSlide = false;
            }, 1800)
        }
    },
    components: {
        MenuNavigation,
        SlideBio,
        SlideAbilities,
        SlideContacts,
    }
}
</script>
<style>
.slide-wrapper {
    height: 100vh;
    animation: undark 2s linear forwards;
}
.slide {
       height: 60vh;
       display: flex;
       flex-direction: column;
       justify-content: center;
       padding: 20px;
    }
    .slide__title--toLeft {
        animation: toLeft 4s ease;
    }
    .slide__body--toLeft {
        animation: toLeft 4.3s ease;
    }
    .slide__title--fromLeft {
        animation: fromLeft 3s ease;
    }
    .slide__body--fromLeft {
        animation: fromLeft 3.3s ease;
    }
    @keyframes fromLeft {
        from {
            left: -105%;
        }
    }
    @keyframes toLeft {
        to {
            left: -115%;
        }
    }
@keyframes undark {
    from {
        background-color: rgb(23, 22, 22);
    }
}
</style>