<template>
    <div v-if="check_options.length">
        <main-control
            :title="title"
            :check_options="check_options"
            :tableData="tableData"
            :pageNums="pageNums"
            :pageSize="pageSize"
            :listName="listName"
            @searchList="searchListHandler"
            @changePageSize="changePageSize"
            @changePageCurren="changePageCurren"
        >
            <template v-if="flagAddMessage" #addMessage>
                <add-or-edit></add-or-edit>
            </template>
        </main-control>
    </div>
</template>

<script>
    import MainControl from "@/components/MainControl";
    import AddOrEdit from "@/components/AddOrEdit";

    export default {
        name: "RegisterAndManagement",
        props: {
            listName: String,
            title: String,
            statusListApi: String,
            listApi: String,
            flagAddMessage: {
                type: Boolean,
                default: false,
            },
        },
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
            AddOrEdit,
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
            let getStatusList = await this.Req[this.statusListApi]();
            this.check_options = getStatusList.data;
            this.$store.dispatch("postStatusList", getStatusList.data);
            this.searchListHandler({
                pageNo: this.pageNo,
                pageSize: this.pageSize,
            });
        },

        methods: {
            async searchListHandler(formInfo) {
                this.formInfo = formInfo;
                let res = await this.Req[this.listApi](this.getFormInfo);
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
                this.searchListHandler(this.getFormInfo);
            },
            changePageSize(val) {
                this.pageSize = val;
                this.searchListHandler(this.getFormInfo);
            },
        },
    };
</script>