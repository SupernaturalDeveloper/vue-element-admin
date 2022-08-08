<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" class="tableTh" label="编号">
        </el-table-column>
        <el-table-column prop="name" class="tableTh" label="名称">
        </el-table-column>
        <template v-if="tableData[0]['color']">
            <el-table-column prop="color" class="tableTh" label="颜色">
            </el-table-column>
        </template>
    </el-table>
</template>

<script>
    export default {
        name: "DictionariesTable",
        props: {
            tableData: Array,
        },
    };
</script>

<style lang="scss" scoped>
    .tableTh {
        text-align: center !important;
    }
</style>