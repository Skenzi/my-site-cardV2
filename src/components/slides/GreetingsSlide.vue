<template>
    <div :class="greetingsClasses" class="greetings">
        <div :class="contentClasses" class="greetings__content">
            <div class="greetings__title">{{titleDinamic}}<Cursor v-if="!isPrintedTitle" class="cursor" /></div>
            <div class="greetings__subtitle">{{subtitleDinamic}}<Cursor v-if="isPrintedTitle" class="cursor" /></div>
        </div>
        <ButtonLink v-if="isPrinted" class="greetings__link" pathTo="slides" text="Прошу за мной" />
    </div>
</template>
<script>
import ButtonLink from '../ButtonLink.vue';
import Cursor from '../Cursor.vue';

export default {
    name: 'GreetingsSlide',
    data() {
        return {
            titleStatic: 'Приветствую',
            titleDinamic: '',
            subtitleStatic: 'Прошу, заходите и располагайтесь. Я сейчас подойду...',
            subtitleDinamic: '',
            ind: 0,
            isPrintedTitle: false,
            isPrinted: false,
            delay: 100,
        }
    },
    methods: {
        printSubtitle: function() {
            const helper = async () => {
                const timer = setTimeout(() => {
                    this.subtitleDinamic += this.subtitleStatic[this.ind];
                    this.ind += 1;
                    if(this.ind === this.subtitleStatic.length) {
                        clearTimeout(timer);
                        this.isPrinted = true;
                    } else {
                        helper();
                    }
                }, this.delay)
            };
            helper();
        },
        printTitle: function() {
            const helper = async () => {
                const timer = setTimeout(() => {
                    this.titleDinamic += this.titleStatic[this.ind];
                    this.ind += 1;
                    if(this.ind === this.titleStatic.length) {
                        clearTimeout(timer);
                        this.isPrintedTitle = true;
                        this.ind = 0;
                        this.printSubtitle();
                    } else {
                        helper();
                    }
                }, this.delay)
            };
            helper();
        }
    },
    computed: {
        greetingsClasses: function() {
            return {
                dark: this.isPrinted,
            }
        },
        contentClasses: function() {
            return {
                mirage: this.isPrinted,
            }
        }
    },
    created() {
        this.printTitle();
    },
    components: {
        ButtonLink,
        Cursor,
    }
}
</script>
<style>
.greetings {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.greetings__content {
    display: flex;
    height: 100vh;
    width: 100vw;
    padding: 20px;
    justify-content: center;
    flex-direction: column;
}
.greetings__title {
    font-size: 52px;
}
.greetings__subtitle {
    font-size: 42px;
}
.greetings__link {
    position: absolute;
    top: 50%;
    left: 45%;
    align-self: center;
    opacity: 0;
    animation: show 2.5s 2.75s forwards;
}
.dark {
    height: 100vh;
    animation: dark 1.7s 1.05s forwards;
}
.mirage {
    animation: mirage 1.5s .35s forwards;
}
@keyframes mirage {
    to {
        opacity: 0;
    }
}
@keyframes dark {
    to {
        background-color: rgb(23, 22, 22);
    }
}
@keyframes show {
    to {
        opacity: 1;
    }
}
</style>