

<template>
    <div class="reg">
        <h1 class="title">设备登记</h1>
        <template v-if="flagCheckArr.length">
            <flag-check :flagCheckArr="flagCheckArr"></flag-check>
        </template>
        <div class="container">
            <form-label
                @searchList="searchListHandler"
                :check_options="check_options"
            ></form-label>
            <div class="add-list">
                <div>
                    <AddView />
                </div>
                <template v-if="tableData.length">
                    <TableView :tableData="tableData" />
                </template>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pageNums"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import TableView from "@/components/TableView";
    import AddView from "@/components/AddView";
    import FormLabel from "@/components/FormLabel";
    import FlagCheck from "@/components/FlagCheck";
    export default {
        name: "ManagementView",
        data() {
            return {
                flagCheckArr: [],
                check_options: [],
                currentPage: 1,
                pageNo: 1,
                pageSize: 10,
                tableData: [],
                itemize: [],
                pageNums: 0,
            };
        },
        computed: {
            getPageSize() {
                return {
                    pageSize: this.pageNums,
                };
            },
        },
        components: {
            TableView,
            AddView,
            FormLabel,
            FlagCheck,
        },
        async created() {
            let getStatusListPre = await this.Req.getStatusListPre();
            let flagCheck = await this.Req.getStatusListPre();
            this.flagCheckArr = flagCheck.data;
            this.check_options = getStatusListPre.data;
            this.getList();
        },

        methods: {
            async searchListHandler(formInfo) {
                let res = await this.Req.postPreList(
                    Object.assign(formInfo, this.getPageSize)
                );
                this.tableData = res.data.list;
                console.log(formInfo, res);
            },
            async getList() {
                const _this = this;
                let res = await this.Req.postPreList({
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                });
                let { list, total } = res.data;
                console.log(list, total);
                // list.forEach((item, index) => {
                //     list[index]["status"] = item["status"].includes("STATUS1")
                //         ? "未审核<i class='red'></i>"
                //         : "已审核<i class='green'></i>";
                // });
                this.tableData = list;
                this.pageNums = total;
            },
            handleSizeChange(val) {
                this.pageSize = val;
                this.getList();
            },
            handleCurrentChange(val) {
                this.pageNo = val;
                this.getList();
            },
            getOptions(obj) {
                return Array.from({ length: obj.value.length }, (item, index) => {
                    return {
                        value: obj.value[index],
                        name: obj.label[index],
                    };
                });
            },
        },
    };
</script>

<style lang="scss" scoped>
    .reg {
        width: calc(100% - 40px);
        position: relative;
        padding: 20px;

        .title {
            font-size: 24px;
        }

        .container {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-radius: 20px;
            // background-color: #f0f0f0;
            width: 100%;
            height: 100%;
            margin-top: 10px;

            .add-list {
                flex: 10;
                width: 100%;
                height: 100%;
                background-color: #fff;
            }
        }
    }
</style>

