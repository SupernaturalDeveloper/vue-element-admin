<template>
    <div class="kRight">
        <el-button
            @click="innerVisible = true"
            style="float: right; margin: 0 5px; padding: 6px 8px"
            type="primary"
            >更改状态</el-button
        >
        <el-dialog
            title="设置状态"
            :visible.sync="innerVisible"
            width="20%"
            :append-to-body="appendToBody"
        >
            <div>
                <el-select
                    v-model="value"
                    style="width: 100%"
                    placeholder="请选择"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="innerVisible = false">取 消</el-button>
                <el-button type="primary" @click="changeStatus"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "ChangeStatusBtn",
        props: {
            scopeObj: Object,
            appendToBody: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                innerVisible: false,
                options: [],
                value: this.scopeObj.status,
            };
        },

        mounted() {
            this.options = this.$store.state.check_options.map(item => {
                return {
                    value: item.id,
                    label: item.name,
                };
            });
        },

        methods: {
            async changeStatus() {
                let res = await this.Req.postQquipSet({
                    id: this.scopeObj.id,
                    status: this.value,
                });
                if (res.code == 0) {
                    this.$message({
                        type: "success",
                        message: "状态更改成功!",
                    });
                    this.innerVisible = false;
                    window.location.reload();
                    return;
                }
                this.$message({
                    type: "success",
                    message: "状态更改失败!",
                });
            },
        },
    };
</script>

<style lang="scss" scoped>
    .kRight {
        float: right;
    }
</style>