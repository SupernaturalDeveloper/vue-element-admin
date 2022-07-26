<template>
    <div>
        <img class="login_bg" :src="bg" alt="" />
        <div class="loginView">
            <div class="login_left_bg">
                <div>
                    <h3>欢迎使用</h3>
                    <h3>设备管理系统</h3>
                </div>

                <img :src="bg2" alt="" />
            </div>
            <div class="login-cpn">
                <main-login></main-login>
            </div>
        </div>
    </div>
</template>

<script>
    import MainLogin from "@/views/login/components/MainLogin";
    export default {
        name: "LoginView",
        components: {
            MainLogin,
        },
        data() {
            return {
                bg: require("@/assets/img/login/login_bg2.jpg"),
                bg2: require("@/assets/img/login/login_bg4.jpg"),
            };
        },
        beforeRouteUpdate(to, from, next) {},
        mounted() {},

        methods: {},
    };
</script>

<style lang="scss" scoped>
    .login_bg {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .loginView {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        border-radius: 20px;
        overflow: hidden;
        .login_left_bg {
            position: relative;
            img {
                width: 600px;
                height: 400px;
            }
            div {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 40px;
                color: white;
                text-align: center;
                line-height: 60px;
            }
        }

        .login-cpn {
            background: #fff;
            width: 260px;
            height: 400px;
            padding: 0 50px;
        }
    }
</style>
