<template>
    <div class="funfact-area bg-gray-3 pt-100 pb-70">
        <div class="container">
            <div class="row" v-observe-visibility="{callback: visibilityChanged, once: true}">
                <div class="col-lg-3 col-sm-6" v-for="(item, index) in funFacts" :key="index">
                    <div class="single-count text-center mb-30" v-if="isVisible">
                        <div class="count-icon">
                            <i :class="item.icon"></i>
                        </div>
                        <countTo :startVal='startVal' :endVal='item.endVal' :duration='4000'></countTo>
                        <h5 class="title">{{ item.title }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import countTo from 'vue-count-to';
    export default {
        components: { countTo },
        data () {
            return {
                startVal: 1,
                isVisible: false,
                funFacts: [
                    {
                        id: 1,
                        endVal: 15,
                        title: "Години опит",
                        icon: "pe-7s-portfolio"
                    },
                    {
                        id: 2,
                        endVal: 6900,
                        title: "Продадени продукта",
                        icon: "pe-7s-cup"
                    },
                    {
                        id: 3,
                        endVal: 580,
                        title: "VIP сътрудника",
                        icon: "pe-7s-light"
                    },
                    {
                        id: 4,
                        endVal: 8500,
                        title: "Hови Клиенти",
                        icon: "pe-7s-smile"
                    }
                ]
            }
        },
        methods: {
            visibilityChanged (isVisible) {
                this.isVisible = isVisible
            },
        },
    }
</script>
