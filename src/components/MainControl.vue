<template>
    <div class="reg">
        <h1 class="title">{{ title }}</h1>
        <template v-if="check_options.length">
            <flag-check :flagCheckArr="check_options"></flag-check>
        </template>
        <div class="container">
            <form-label
                @searchList="searchListHandler"
                :check_options="check_options"
            ></form-label>
            <div class="add-list">
                <div>
                    <slot name="addMessage"></slot>
                </div>
                <template v-if="getTableData.length">
                    <TableView
                        :listName="listName"
                        :check_options="check_options"
                        :tableData="getTableData"
                    />
                </template>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="pageSize"
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
    import FormLabel from "@/components/FormLabel";
    import FlagCheck from "@/components/FlagCheck";
    export default {
        name: "MainControl",
        props: {
            // 列表名
            listName: String,
            // 标题
            title: {
                type: String,
                default: "",
                required: true,
            },
            // 查询中的状态列表
            check_options: {
                type: Array,
                required: true,
            },
            // 右半边的列表
            tableData: {
                type: Array,
                required: true,
            },
            // 列表最大条数
            pageNums: {
                type: Number,
                required: true,
            },
            pageSize: {
                type: Number,
                required: true,
            },
        },
        data() {
            return {
                currentPage: 1,
            };
        },
        components: {
            TableView,
            FormLabel,
            FlagCheck,
        },
        computed: {
            getTableData() {
                return this.tableData;
            },
        },
        methods: {
            async searchListHandler(formInfo) {
                this.$emit("searchList", formInfo);
            },
            handleSizeChange(val) {
                this.$emit("changePageSize", val);
            },
            handleCurrentChange(val) {
                this.$emit("changePageCurren", val);
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

