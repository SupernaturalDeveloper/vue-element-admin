<template>
    <div>
        <page-header></page-header>
        <div class="pageContent">
            <div class="pageMenu">
                <page-menu></page-menu>
            </div>
            <div class="pageView">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import PageHeader from "@/views/home/components/PageHeader";
    import PageMenu from "@/views/home/components/PageMenu";
    export default {
        name: "HomeView",
        components: {
            PageHeader,
            PageMenu,
        },
        data() {
            return {};
        },
        methods: {},
    };
</script>

<style lang="scss" scoped>
    .pageContent {
        display: flex;
        .pageView {
            width: 80%;
        }
    }
</style>