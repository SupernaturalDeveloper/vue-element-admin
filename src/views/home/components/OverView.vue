<template>
    <div class="overView">
        <div class="title">系统概览</div>
        <div class="tag">
            <el-tag class="number">
                <i class="el-icon-s-order"></i>
                <span>设备总数</span>
                {{ numberVal }}</el-tag
            >
            <el-tag class="amount number" type="success"
                ><i class="el-icon-s-data"></i>
                <span>设备总金额</span>
                {{ amountVal }}
            </el-tag>
        </div>
        <div class="statistical">
            <div id="sector"></div>
            <div id="histogram"></div>
        </div>
    </div>
</template>

<script>
    import { slow } from "@/util/base.js";
    export default {
        name: "OverView",
        data() {
            return {
                numberVal: 0,
                amountVal: 0,
            };
        },
        created() {
            this.showChart();
        },
        methods: {
            async showChart() {
                const _this = this;

                const collect = await this.Req.getOverviewStatus();
                const classification = await this.Req.getOverviewCategory();
                const overview = await this.Req.getOverview();
                Promise.resolve(overview).then(res => {
                    slow({
                        val: 0,
                        toVal: res.data.number,
                        callback(val) {
                            _this.numberVal = val;
                        },
                        fluent: 100,
                    });
                    slow({
                        val: 0,
                        toVal: res.data.amount,
                        callback(val) {
                            _this.amountVal = val;
                        },
                        fluent: 100,
                    });
                });

                var sector = _this.$echarts.init(document.getElementById("sector"));
                // console.log(_this.getOptions(collect.data, "value", "name"));
                sector.setOption({
                    title: {
                        text: "设备状态汇总",
                    },
                    series: [
                        {
                            type: "pie",
                            data: _this.getOptions(
                                collect.data,
                                "value",
                                "value",
                                "name",
                                "label"
                            ),
                        },
                    ],
                });

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
                        data: classification.data.label,
                    },
                    yAxis: {},
                    series: [
                        {
                            name: "销量",
                            type: "bar",
                            data: classification.data.value,
                            color: ["#ff0000"],
                        },
                    ],
                });
            },
            getOptions(obj, key1, key2, key3, key4) {
                return Array.from({ length: obj[key1].length }, (item, index) => {
                    return {
                        [key1]: obj[key2][index],
                        [key3]: obj[key4][index],
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

            .number {
                height: 100px;
                font-weight: 700;
                line-height: 100px;
                font-size: 40px;
                margin-left: 20px;
                position: relative;
                span {
                    position: absolute;
                    top: 0;
                    left: 0;
                    transform: translate(100%, -35%);
                    font-size: 16px;
                    font-weight: 400;
                }
            }
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