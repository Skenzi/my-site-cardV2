<template>
    <div class="container-md relitive left-0" :class=textClasses>
        <p>Меня зовут Дмитрий, если официально, то Клименко Дмитрий Александрович.</p>
        <p>Начинающий фронтенд-разработчик. Прошел курсы Хекслет 
            (<span class="image-container">
                наведи на меня
                <img :src=certificateSrc alt="certificate" />
            </span>).
            Изначально относился к программированию как к хобби, но все больше и больше времени уделял ремеслу. И пришло озарение. А почему бы не попробовать себя в этой сфере. Параллельно изучаю Python и PHP, но пока далеко не ушел
        </p>
        <p>Занимаюсь также вырезкой по дереву и лепкой(в основном из глины).</p>
        <p>Не буду больше задерживать, прошу пройти на следующий слайд.</p>
    </div>
</template>

<script>
import certificate from '../../assets/certificatehexletjs2.png';
export default {
    props: ['textClasses'],
    name: 'slide-bio',
    data() {
        return {
            certificateSrc: certificate,
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