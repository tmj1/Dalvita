<template>
    <div class="welcome-area">
        <div class="container">
            <div class="welcome-content text-center">
                <h5>{{ subTitle }}</h5>
                <h1>{{ title }}</h1>
                <p>{{ desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Welcome To Dalvita",
                subTitle: "Who Are We",
                desc: "Компания DALVITA е международна компания с логистични центрове в Европа и Сърбия, чиято история започва началото на 2015 година, като компания, дистрибутор на продукти за здраве и красота. През последните 7 години марката се развива на международните пазари, като клиенти са главно физически лица, поръчващи продуктите чрез онлайн магазина на фирмата. "
            }
        },
    };
</script>
