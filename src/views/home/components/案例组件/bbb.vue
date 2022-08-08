<template>
    <div v-if="check_options.length">
        <main-control
            title="设备登记"
            :check_options="check_options"
            :tableData="tableData"
            :pageNums="pageNums"
            :pageSize="pageSize"
            @searchList="searchListHandler"
            @changePageSize="changePageSize"
            @changePageCurren="changePageCurren"
        >
        </main-control>
    </div>
</template>

<script>
    import MainControl from "@/components/MainControl";
    export default {
        name: "ManagementView",
        data() {
            return {
                check_options: [],
                tableData: [],
                pageNums: 0,
                pageSize: 10,
                pageNo: 1,
                formInfo: {},
            };
        },
        components: {
            MainControl,
        },
        computed: {
            getFormInfo() {
                return Object.assign(this.formInfo, {
                    pageSize: this.pageSize,
                    pageNo: this.pageNo,
                });
            },
        },
        async created() {
            let getStatusListEquip = await this.Req.getStatusListEquip();
            this.check_options = getStatusListEquip.data;
            this.searchListHandler({
                pageNo: this.pageNo,
                pageSize: this.pageSize,
            });
        },

        methods: {
            async searchListHandler(formInfo) {
                this.formInfo = formInfo;
                let res = await this.Req.postEquipList(
                    Object.assign(this.formInfo, {
                        pageSize: this.pageSize,
                        pageNo: this.pageNo,
                    })
                );
                if (res.code === 1) {
                    alert("不存在！！！");
                    return;
                }
                let { list, total } = res.data;
                this.tableData = list;
                this.pageNums = total;
            },

            changePageCurren(val) {
                this.pageNo = val;
                this.searchListHandler(
                    Object.assign(this.formInfo, {
                        pageSize: this.pageSize,
                        pageNo: this.pageNo,
                    })
                );
            },
            changePageSize(val) {
                this.pageSize = val;
                this.searchListHandler(
                    Object.assign(this.formInfo, {
                        pageSize: this.pageSize,
                        pageNo: this.pageNo,
                    })
                );
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

