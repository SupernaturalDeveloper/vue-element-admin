<template>
    <div class="main-search">
        <h3 class="search-title">设备检索</h3>
        <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign"
        >
            <el-form-item label="设备编号">
                <el-input v-model="formLabelAlign.id"></el-input>
            </el-form-item>
            <el-form-item label="设备名称">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="设备状态">
                <el-select v-model="formLabelAlign.status" placeholder="请选择">
                    <template v-if="check_options.length">
                        <el-option
                            v-for="item in check_options"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                        >
                        </el-option>
                    </template>
                </el-select>
            </el-form-item>
            <el-form-item label="设备分类">
                <el-select
                    v-model="formLabelAlign.category"
                    placeholder="请选择"
                >
                    <template v-if="itemize.length">
                        <el-option
                            v-for="item in itemize"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                        >
                        </el-option>
                    </template>
                </el-select>
            </el-form-item>
            <el-button
                type="primary"
                @click.native="submitForm"
                class="search-btn"
                >查询</el-button
            >
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "FormLabel",
        props: {
            check_options: Array,
            strVal: {
                type: String,
                default: "name",
            },
            strName: {
                type: String,
                default: "value",
            },
        },
        data() {
            return {
                labelPosition: "left",
                formLabelAlign: {
                    id: "",
                    name: "",
                    status: "",
                    category: "",
                },
                itemize: [],
            };
        },

        async mounted() {
            let getCategoryList = await this.Req.getCategoryList();
            this.itemize = getCategoryList.data;
            this.$store.dispatch("postItemize", getCategoryList.data);
        },

        methods: {
            async submitForm() {
                this.$emit("searchList", this.formLabelAlign);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .main-search {
        flex: 2;
        height: calc(100% - 40px);
        // border-right: 1px solid #000;
        padding: 20px;

        .search-title {
            border-left: 4px solid blue;
            padding-left: 10px;
            margin-top: 10px;
            margin-left: 14px;
            font-size: 18px;
            margin-bottom: 20px;
        }

        .search-btn {
            width: 100%;
        }
    }
</style>