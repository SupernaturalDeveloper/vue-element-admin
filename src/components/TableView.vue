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
                    <span
                        style="margin-left: 10px"
                        v-html="scope.row.status"
                    ></span>
                </template>
            </el-table-column>
            <el-table-column label="设备分类">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{
                        scope.row.category
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
                        <!-- 详情 -->
                        <detail-dialog
                            :detailsDialogObj="scope.row"
                        ></detail-dialog>
                        <!-- 判断是否审核 -->
                        <!-- 如果未审核 渲染编辑按钮和审核按钮 -->
                        <!-- 如果审核 渲染入库按钮  -->

                        <!-- 判断是否报废 -->
                        <!-- 如果报废 则不渲染 -->
                        <!-- 否则 渲染更改状态按钮 -->
                        <el-button
                            size="mini"
                            type="primary"
                            @click="handleDelete(scope.$index, scope.row)"
                            >更改状态</el-button
                        >
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import DetailDialog from "@/components/DetailDialog";
    export default {
        props: ["tableData"],
        data() {
            return {};
        },
        components: {
            DetailDialog,
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
