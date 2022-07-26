<template>
    <div class="mainLogin">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="短信登录" name="first">
                <el-input v-model="iphone" placeholder="手机号"></el-input>
                <el-input placeholder="验证码" v-model="code">
                    <template slot="append">发送验证码</template>
                </el-input>
            </el-tab-pane>
            <el-tab-pane label="密码登录" name="second"
                ><el-input v-model="username" placeholder="用户名"></el-input>
                <el-input
                    placeholder="密码"
                    v-model="password"
                    show-password
                ></el-input>
            </el-tab-pane>
        </el-tabs>
        <el-button type="primary" @click="loginHandle">登录</el-button>
    </div>
</template>

<script>
    /*
                                                            系统管理员
                                                            测试账号：lidazhao
                                                            密码：Qwe123
                                                            手机：13800138001
                                                            验证码：654321

                                                            设备管理员
                                                            测试账号：wangerxiao
                                                            密码：Qwe123
                                                            手机：13800138002
                                                            验证码：654321

                                                            系统登陆/POST：http://jxsjs.com/equipment/login
                                                            参数：
                                                            type: 短信登陆sms、密码登陆password
                                                            短信登陆时：phone + code
                                                            密码登陆时：username + password
                                                            */
    export default {
        name: "MainLogin",

        data() {
            return {
                activeName: "first",
                iphone: "",
                code: "",
                username: "",
                password: "",
                indexView: 0,
            };
        },
        methods: {
            handleClick(tab, event) {
                this.indexView = tab.index;
                console.log(tab, event);
            },
            loginHandle() {
                const _this = this;

                // this.$axios.get("aa.json").then(res => console.log(res));
                // this.$axios({
                //     method: "post",
                //     url: "api/equipment/login",
                //     data: {
                //         username: _this.username,
                //         password: _this.password,
                //     },
                // }).then(res => console.log(res));
                // if (this.indexView == "0") {
                //     this.$axios
                //         .get({
                //             url: "aa.json",
                //         })
                //         .then(res => console.log(res))
                //         .catch(err => console.log(err));
                // }
                // if (this.indexView == "1") {
                //     this.$axios
                //         .post({
                //             url: "http://jxsjs.com/equipment/login",
                //             params: {
                //                 username: _this.username,
                //                 password: _this.password,
                //             },
                //         })
                //         .then(res => console.log(res))
                //         .catch(err => console.log(err));
                // }
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