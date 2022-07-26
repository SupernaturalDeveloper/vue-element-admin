<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<style lang="scss">
    @import "@/assets/styles/reset.css";
    .el-tabs__nav-wrap::after {
        background-color: #fff !important;
    }
    .el-tabs__nav {
        transform: translateX(36%) !important;
    }
</style>
