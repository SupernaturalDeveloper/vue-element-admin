<template>
    <div class="overView">
        <div class="title">系统概览</div>
        <div class="tag"></div>
        <div class="statistical">
            <div id="sector"></div>
            <div id="histogram"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OverView",

        data() {
            return {};
        },
        mounted() {
            this.showChart();
        },
        methods: {
            async showChart() {
                const _this = this;
                const collect = await this.$axios.get(
                    "xx/equipment/status-overview"
                );
                const classification = await this.$axios.get(
                    "xx/equipment/category-overview"
                );
                new Promise((resolve, reject) => {
                    resolve(_this.getOptions(collect.data.data));
                }).then(res => {
                    var sector = _this.$echarts.init(
                        document.getElementById("sector")
                    );
                    sector.setOption({
                        title: {
                            text: "设备状态汇总",
                        },
                        series: [
                            {
                                type: "pie",
                                data: res,
                            },
                        ],
                    });
                });
                new Promise((resolve, reject) => {
                    resolve(classification.data.data);
                }).then(res => {
                    var histogram = _this.$echarts.init(
                        document.getElementById("histogram")
                    );
                    // 绘制图表
                    histogram.setOption({
                        title: {
                            text: "设备分类汇总",
                        },
                        tooltip: {},
                        xAxis: {
                            type: "category",
                            axisLabel: {
                                interval: 0,
                                rotate: 30,
                            },
                            data: res.label,
                        },
                        yAxis: {},
                        series: [
                            {
                                name: "销量",
                                type: "bar",
                                data: res.value,
                                color: ["#ff0000"],
                            },
                        ],
                    });
                });
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
    .overView {
        .title {
            font-size: 26px;
            color: #333;
            padding: 20px;
        }
        .tag {
            display: flex;
        }
        .statistical {
            display: flex;
            margin-top: 20px;
            div {
                height: 500px;
                border-radius: 10px;
                background: rgb(243, 243, 243);
                margin: 0 20px;
            }
            #sector {
                width: 40%;
            }
            #histogram {
                width: 50%;
            }
        }
    }
</style>