<template>
    <div class="add">
        <el-table :data="tableData" height="500" style="width: 100%">
            <el-table-column label="设备编号">
                <!-- // category: "1" // id: "EQUIP786" // name: "宋该核" // number:
                "1" // price: "1123" // status: "STATUS1" // time: "0000-00-00" -->
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column label="设备名称">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="设备状态">
                <template slot-scope="scope">
                    <div v-html="getStatusItem(scope.row.status)"></div>
                </template>
            </el-table-column>
            <el-table-column label="设备分类">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{
                        getCategoryItem(scope.row.category)
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column label="设备数量">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{
                        scope.row.number
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column label="设备单价">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.price }}</span>
                </template>
            </el-table-column>
            <el-table-column label="购置时间">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.time }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="200px">
                <template slot-scope="scope">
                    <div class="control">
                        <detail-dialog
                            :detailsDialogObj="scope.row"
                        ></detail-dialog>
                        <template v-if="listName == 'pre'">
                            <template v-if="scope.row.status == 'STATUS1'">
                                <add-or-edit
                                    btnText="编辑"
                                    dialogTitle="设备登记编辑"
                                    :btnControl="false"
                                    :formObj="scope.row"
                                >
                                </add-or-edit>

                                <check-control
                                    :scopeObj="scope.row"
                                ></check-control>
                            </template>
                            <template v-else>
                                <put-in-storage
                                    :scopeObj="scope.row"
                                ></put-in-storage>
                            </template>
                            <!-- 判断是否审核 -->
                            <!-- 如果未审核 渲染编辑按钮和审核按钮 -->
                            <!-- 如果审核 渲染入库按钮  -->
                        </template>
                        <template v-if="listName == 'equip'">
                            <!-- 判断是否报废 -->
                            <!-- 如果报废 则不渲染 -->
                            <!-- 否则 渲染更改状态按钮 -->
                            <!-- 详情 -->

                            <change-status-btn
                                v-if="scope.row.status != 'STATUS6'"
                                :scopeObj="scope.row"
                            ></change-status-btn>
                        </template>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import DetailDialog from "@/components/DetailDialog";
    import AddOrEdit from "@/components/AddOrEdit";
    import CheckControl from "@/components/button/CheckControl";
    import PutInStorage from "@/components/button/PutInStorage";
    import ChangeStatusBtn from "@/components/button/ChangeStatusBtn";
    export default {
        props: ["tableData", "listName", "check_options"],
        data() {
            return {};
        },
        methods: {
            getStatusItem(status) {
                let statusItem = this.check_options.filter(
                    item => item.id == status || item.name == status
                )[0];
                // console.log(statusItem, status);
                return `<span>${statusItem.name}</span><i class="statusColor" style="vertical-align: middle;margin-left: 4px;display: inline-block;width:8px;height:8px;background: ${statusItem.color} "></i>`;
            },
            getCategoryItem(category) {
                let categoryItem = this.$store.state.itemize.filter(
                    item => item.id == category
                );
                return categoryItem.length ? categoryItem[0]["name"] : category;
            },
        },
        components: {
            DetailDialog,
            AddOrEdit,
            CheckControl,
            PutInStorage,
            ChangeStatusBtn,
        },
        mounted() {
            // console.log(this.listName, this.check_options);
        },
    };
</script>

<style lang="scss" scoped>
    .add {
        background: red;
    }
    .control {
        display: flex;
        div {
            margin-right: 5px;
        }
    }
</style>
