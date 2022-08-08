<template>
    <el-button type="primary" size="mini" @click="putInStorage">入库</el-button>
</template>

<script>
    export default {
        name: "PutInStorage",
        props: ["scopeObj"],
        data() {
            return {};
        },

        mounted() {},

        methods: {
            // 入库
            putInStorage() {
                this.$confirm("您确认要入库通过该条信息吗?", "提示", {
                    confirmButtonText: "确定入库",
                    cancelButtonText: "暂不操作",
                    type: "warning",
                })
                    .then(() => {
                        this.requestPutIn(this.scopeObj);
                    })
                    .catch(() => {
                        this.$message({
                            type: "info",
                            message: "已取消操作",
                        });
                    });
            },
            async requestPutIn(obj) {
                let res = await this.Req.postPreApprove(obj.id);
                if (res.code === 0) {
                    this.$message({
                        type: "success",
                        message: "入库成功!",
                    });
                    return;
                }
                this.$message({
                    type: "success",
                    message: "入库失败!",
                });
            },
        },
    };
</script>

<style lang="scss" scoped>
</style>