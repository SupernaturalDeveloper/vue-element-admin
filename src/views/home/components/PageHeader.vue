<template>
    <div class="pageHeader">
        <div class="title">
            <img src="" alt="" />
            <span>设备管理系统</span>
        </div>
        <div class="control">
            <el-dropdown trigger="click" @command="commandHandle">
                <span class="el-dropdown-link">{{ user }}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="setPassword"
                        >修改密码</el-dropdown-item
                    >
                    <el-dropdown-item command="logout"
                        >退出登录</el-dropdown-item
                    >
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageHeader",

        data() {
            return {
                user: window.sessionStorage.getItem("user"),
            };
        },

        mounted() {},

        methods: {
            commandHandle(command) {
                this[command + ""]();
                // window.sessionStorage.removeItem("user");
                // this.$router.replace("/");
            },
            setPassword() {
                console.log(1);
            },
            logout() {
                console.log(2);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .pageHeader {
        padding: 20px 15px;
        display: flex;
        color: #fff;
        justify-content: space-between;
        align-items: center;
        background: rgba(1, 121, 196);
        .title {
            font-size: 22px;
        }
        .control {
            .el-dropdown-link {
                cursor: pointer;
                font-size: 16px;
                color: #fff;
            }
            .el-icon-arrow-down {
                font-size: 12px;
            }
            .demonstration {
                display: block;
                color: #8492a6;
                font-size: 14px;
                margin-bottom: 20px;
            }
        }
    }
</style>