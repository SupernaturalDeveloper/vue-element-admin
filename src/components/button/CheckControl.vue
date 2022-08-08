<template>
    <el-button type="primary" size="mini" @click="checkHandler">审核</el-button>
</template>

<script>
    export default {
        name: "CheckControl",
        props: ["scopeObj"],
        data() {
            return {};
        },

        mounted() {},

        methods: {
            // 审核
            checkHandler() {
                this.$confirm("您确认要审核通过该条信息吗?", "提示", {
                    confirmButtonText: "确定审核",
                    cancelButtonText: "暂不操作",
                    type: "warning",
                })
                    .then(() => {
                        this.requestCheckHandler(this.scopeObj);
                    })
                    .catch(() => {
                        this.$message({
                            type: "info",
                            message: "已取消操作",
                        });
                    });
            },
            async requestCheckHandler(obj) {
                let res = await this.Req.postPreCheck(this.scopeObj);
                if (res.code === 0) {
                    this.$message({
                        type: "success",
                        message: "审核成功!",
                    });
                    return;
                }
                this.$message({
                    type: "success",
                    message: "审核失败!",
                });
            },
        },
    };
</script>

<style lang="scss" scoped>
</style>