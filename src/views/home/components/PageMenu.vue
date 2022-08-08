<template>
    <div class="pageMenu">
        <el-menu
            :default-active="$route.path"
            router
            class="el-menu-vertical-demo"
            background-color="rgb(44,64,90)"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <el-menu-item
                v-for="(item, index) in routes"
                :key="index"
                :route="item"
                :index="item"
            >
                <span slot="title">{{ titles[index] }}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "PageMenu",
        data() {
            return {
                activeIndex: this.$route.path,
            };
        },
        data() {
            return {
                routes: [
                    "/home",
                    "/home/register",
                    "/home/management",
                    "/home/dictionaries",
                ],
                titles: ["系统概览", "设备登记", "设备管理", "数据字典"],
            };
        },

        mounted() {},

        methods: {},
    };
</script>

<style lang="scss" scoped>
    .pageMenu {
        background: rgb(44, 64, 90);
        width: 260px;
        height: calc(100vh - 62px);
    }
</style>