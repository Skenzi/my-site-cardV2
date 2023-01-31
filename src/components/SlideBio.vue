<template>
    <div class="slide">
        <h2 :class=slideTitleClasses class="relitive left-0">Знакомство</h2>
        <div class="container-md relitive left-0" :class=slideTextClasses>
            <p>Меня зовут Дмитрий, если официально, то Клименко Дмитрий Александрович.</p>
            <p>Начинающий фронтенд-разработчик. Прошел курсы Хекслет 
                (<span class="image-container">
                    наведи на меня
                    <img :src=certificateSrc alt="сертификат" />
                </span>).
                Изначально относился к программированию как к хобби, но все больше и больше времени уделял ремеслу. И пришло озарение. А почему бы не попробовать себя в этой сфере.
            </p>
            <p>Занимаюсь также вырезкой по дереву и лепкой(в основном из глины).</p>
            <p>Не буду больше задерживать, прошу пройти на следующий слайд.</p>
        </div>
    </div>
</template>

<script>
import certificate from '../assets/certificatehexletjs2.png';
export default {
    props: ['isChangeSlide'],
    name: 'slide-bio',
    data() {
        return {
            certificateSrc: certificate,
        }
    },
    computed: {
        slideTitleClasses: function() {
            return {
                'slide__title': true,
                'slide__title--toLeft': this.isChangeSlide,
                'slide__title--fromLeft': !this.isChangeSlide,
            }
        },
        slideTextClasses: function() {
            return {
                'slide__body': true,
                'slide__body--toLeft': this.isChangeSlide,
                'slide__body--fromLeft': !this.isChangeSlide,
            }
        },

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
    .image-container {
        display: inline-block;
        text-decoration: underline;
    }
    .image-container img {
        width: 450px;
        height: 350px;
        display: none;
        position: absolute;
        right: -65%;
        bottom: -75%;
    }
    .image-container:hover img {
        display: block;
    }
</style>