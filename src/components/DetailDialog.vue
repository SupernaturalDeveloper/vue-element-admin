<template>
    <div>
        <el-button size="mini" @click="handleDetail">详情</el-button>
        <el-dialog
            title="详情"
            :visible.sync="detailsDialogStatus"
            width="30%"
            center
        >
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>设备编号:{{ detailsDialogObj["id"] }}</span>
                </div>
                <div class="text item">
                    <span>设备名称:{{ detailsDialogObj["name"] }}</span>
                </div>
                <div class="text item">
                    <span>设备状态:{{ detailsDialogObj["status"] }}</span>
                </div>
                <div class="text item">
                    <span>设备分类:{{ detailsDialogObj["category"] }}</span>
                </div>
                <div class="text item">
                    <span>设备数量</span>:{{ detailsDialogObj["number"] }}</span>
                </div>
                <div class="text item">
                    <span>设备单价:{{ detailsDialogObj["price"] }}</span>
                </div>
                <div class="text item">
                    <span>购置日期:{{ detailsDialogObj["time"] }}</span>
                </div>
            </el-card>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "DetailDialog",
        props: ["detailsDialogObj"],
        data() {
            return {
                detailsDialogStatus: false,
            };
        },
        methods: {
            handleDetail() {
                console.log(this.detailsDialogObj);
                this.detailsDialogStatus = true;
            },
        },
    };
</script>

<style lang="scss" scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both;
    }

    .box-card {
        width: 480px;
    }
</style>