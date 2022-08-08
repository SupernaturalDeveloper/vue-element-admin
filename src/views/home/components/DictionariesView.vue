<template>
    <div class="dictionariesView">
        <h2>数据字典</h2>
        <el-tabs type="border-card" @tab-click="tabHandler">
            <el-tab-pane label="未入库设备状态">
                <template v-if="tableData.length">
                    <dictionaries-table
                        :tableData="tableData"
                    ></dictionaries-table>
                </template>
            </el-tab-pane>
            <el-tab-pane label="已入库设备状态">
                <template v-if="tableData.length">
                    <dictionaries-table
                        :tableData="tableData"
                    ></dictionaries-table>
                </template>
            </el-tab-pane>
            <el-tab-pane label="设备分类">
                <template v-if="tableData.length">
                    <dictionaries-table
                        :tableData="tableData"
                    ></dictionaries-table>
                </template>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import DictionariesTable from "@/components/DictionariesTable";
    export default {
        name: "DictionariesView",
        components: {
            DictionariesTable,
        },
        data() {
            return {
                tableData: [],
            };
        },
        created() {
            this.tab0();
        },
        methods: {
            tabHandler(tab) {
                if (tab.index == 0) {
                    this.tab0();
                }
                if (tab.index == 1) {
                    this.tab1();
                }
                if (tab.index == 2) {
                    this.tab2();
                }
            },
            async tab0() {
                let res = await this.Req.getStatusListPre();
                this.tableData = res.data;
            },
            async tab1() {
                let res = await this.Req.getStatusListEquip();
                this.tableData = res.data;
            },
            async tab2() {
                let res = await this.Req.getCategoryList();
                this.tableData = res.data;
            },
        },
    };
</script>
<style lang="scss" scoped>
    .dictionariesView {
        height: 80vh;
        padding: 20px;
        h2 {
            font-size: 24px;
            padding-bottom: 20px;
        }
    }
</style>