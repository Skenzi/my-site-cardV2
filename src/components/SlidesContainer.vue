<template>
    <SlideComp v-bind:slide="slide" />
    <MenuNavigation v-bind:setActiveId="setActiveId" />
</template>
<script>
import SlideComp from './Slide.vue';
import MenuNavigation from './Menu.vue';

export default {
    name: 'SlidesContainer',
    data(){
        return {
            activeId: 'Bio',
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
        }
    },
    methods: {
        setActiveId: function(id) {
            this.activeId = id;
        }
    },
    components: {
        SlideComp,
        MenuNavigation,
    }
}
</script>