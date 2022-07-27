<template>
    <div class="pageMenu">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="rgb(44,64,90)"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <el-menu-item index="1" @click="toRouteHandle(0)">
                <i class="el-icon-location"></i>
                <span slot="title">系统概览</span>
            </el-menu-item>
            <el-menu-item index="2" @click="toRouteHandle(1)">
                <i class="el-icon-menu"></i>
                <span slot="title">设备登记</span>
            </el-menu-item>
            <el-menu-item index="3" @click="toRouteHandle(2)">
                <i class="el-icon-document"></i>
                <span slot="title">设备管理</span>
            </el-menu-item>
            <el-menu-item index="4" @click="toRouteHandle(3)">
                <i class="el-icon-setting"></i>
                <span slot="title">数据字典</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "PageMenu",

        data() {
            return {
                routes: [
                    "/home",
                    "/home/register",
                    "/home/management",
                    "/home/dictionaries",
                ],
            };
        },

        mounted() {},

        methods: {
            toRouteHandle(index) {
                this.$router.replace(this.routes[index]);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .pageMenu {
        background: rgb(44, 64, 90);
        width: 260px;
        height: calc(100vh - 62px);
    }
</style>