<template>
    <div class="slide">
        <h2 :class=slideTitleClasses class="relitive left-0">Навыки</h2>
        <div :class=slideTextClasses class="container-f relitive left-0">
            <section class="slide-abilities-section">
            <h3>Языки программирования</h3>
            <ul>
            <li>
                JS(ES5+)
            </li>
            <li>
                PHP
            </li>
        </ul>
        </section>
        <section class="slide-abilities-section">
            <h3>Фреймворки, библиотеки</h3>
            <ul>
            <li>
                Redux
            </li>
            <li>
                React
            </li>
            <li>
                Vue
            </li>
            <li>
                SCSS
            </li>
        </ul>
        </section>
        <section class="slide-abilities-section">
            <h3>Верстка, стили</h3>
            <ul>
            <li>
                HTML5
            </li>
            <li>
                CSS3
            </li>
        </ul>
        </section>
        </div>
    </div>
</template>

<script>
export default {
    props: ['isChangeSlide'],
    name: 'slide-abilities',
    computed: {
        slideTitleClasses: function() {
            return {
                'slide__title--toLeft': this.isChangeSlide,
                'slide__title--fromLeft': !this.isChangeSlide,
            }
        },
        slideTextClasses: function() {
            return {
                'slide__body--toLeft': this.isChangeSlide,
                'slide__body--fromLeft': !this.isChangeSlide,
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
    .slide-abilities-section {
        flex: 1;
    }
</style>