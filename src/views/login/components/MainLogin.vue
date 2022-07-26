<template>
    <div class="mainLogin">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="短信登录" name="first">
                <el-input
                    v-model="input1Iphone"
                    placeholder="手机号"
                ></el-input>
                <el-input placeholder="验证码" v-model="input2Iphone">
                    <template slot="append">发送验证码</template>
                </el-input>
                <el-button type="primary">登录</el-button>
            </el-tab-pane>
            <el-tab-pane label="密码登录" name="second"
                ><el-input
                    v-model="inputUsername"
                    placeholder="用户名"
                ></el-input>
                <el-input
                    placeholder="密码"
                    v-model="inputPassword"
                    show-password
                ></el-input>
                <el-button type="primary">登录</el-button>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "MainLogin",

        data() {
            return {
                activeName: "first",
                input1Iphone: "",
                input2Iphone: "",
                inputUsername: "",
                inputPassword: "",
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .mainLogin {
        padding-top: 60px;
    }
    .el-button--primary {
        display: block;
        width: 100%;
        margin-top: 10px;
    }
    .el-input {
        margin-top: 10px !important;
    }
</style>