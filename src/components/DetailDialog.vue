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
                    <template v-if="status1">
                        <div class="kRight">
                            <!-- 编辑 -->
                            <add-or-edit
                            btnText="编辑"
                            dialogTitle="设备登记编辑"
                            :btnControl="false"
                            :formObj="detailsDialogObj"
                            :appendToBody="true"
                        >
                        </add-or-edit>
                        <!-- 审核 -->
                        <check-control
                            :scopeObj="detailsDialogObj"
                        ></check-control>
                        </div>
                   </template>
                
                    <!-- 更改状态 -->
                        <change-status-btn v-if="status6" :scopeObj="detailsDialogObj"  :appendToBody="true"></change-status-btn>
                
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
    import AddOrEdit from "@/components/AddOrEdit";
    import CheckControl from "@/components/button/CheckControl";
    import ChangeStatusBtn from "@/components/button/ChangeStatusBtn";
    export default {
        name: "DetailDialog",
        props: {
            detailsDialogObj: Object,
            statusFlag: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                detailsDialogStatus: false,
            };
        },
        components: {
            CheckControl,
            AddOrEdit,
            ChangeStatusBtn,
        },
        computed: {
            status1() {
                return this.detailsDialogObj.status == "STATUS1";
            },
            status6() {
                let { status } = this.detailsDialogObj;
                return (
                    status == "STATUS3" ||
                    status == "STATUS4" ||
                    status == "STATUS5"
                );
            },
        },
        methods: {
            handleDetail() {
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
        width: 100%;
    }
    .kRight {
        display: flex;
        float: right;
        div {
            margin: 0 5px;
        }
    }
</style>