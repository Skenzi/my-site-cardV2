<template>
    <div :key="slide.title" class="slide">
        <h2 :class="slideTitleClasses" class="slide__title">{{slide.title}}</h2>
        <p :class="slideTextClasses" class="slide__text">{{slide.text}}</p>
    </div>
</template>

<script>
export default {
    props: ['slide', 'isChangeSlide'],
    name: 'SlideComp',
    computed: {
        slideTitleClasses: function() {
            return {
                'slide__title--toLeft': this.isChangeSlide,
                'slide__title--fromLeft': !this.isChangeSlide,
            }
        },
        slideTextClasses: function() {
            return {
                'slide__text--toLeft': this.isChangeSlide,
                'slide__text--fromLeft': !this.isChangeSlide,
            }
        }
    },
}
</script>
<style>
    .slide {
       height: 60vh;
       display: flex;
       flex-direction: column;
       justify-content: center;
       padding: 20px;
    }
    .slide__title--toLeft {
        animation: toLeft 3s ease;
    }
    .slide__text--toLeft {
        animation: toLeft 3.5s ease;
    }
    .slide__title--fromLeft {
        animation: fromLeft 3s ease;
    }
    .slide__text--fromLeft {
        animation: fromLeft 3.5s ease;
    }
    @keyframes fromLeft {
        from {
            margin-left: -150px;
        }
    }
    @keyframes toLeft {
        to {
            margin-left: -150px;
        }
    }
</style>