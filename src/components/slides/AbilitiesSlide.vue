<template>
        <div :class=textClasses class="container-f relitive left-0">
            <section class="slide-abilities-section">
                <h3>Языки программирования</h3>
                <ul>
                    <li>
                        JS(ES5+)
                    </li>

                    <li>
                        Python
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
                    <li>
                        SCSS
                    </li>
                </ul>
            </section>
        </div>
</template>

<script>
export default {
    props: ['textClasses'],
    name: 'slide-abilities',
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