<!-- 系统概况 -->
<template>
    <div>
        <div ref="pie" style="width: 430px; height: 420px"></div>
        <div v-if="arr">{{ arr }}</div>
    </div>
</template>

<script>
    import * as echarts from "echarts";
    export default {
        name: "pieCom",
        data() {
            return {
                arr: null,
            };
        },
        watch: {
            "$store.state.overArr": {
                immediate: true,
                handler() {
                    this.arr = this.$store.state.overArr;
                    this.EventTarget();
                },
            },
        },
        methods: {
            EventTarget() {
                console.log(this.arr);
                // let box = this.$refs.pie;
                // let myChart = echarts.init(box);
                // var option;
                // option = {
                //     title: {
                //         text: "设备状态汇总",
                //         left: "center",
                //         color: ["#c23431", "#2f4554", "#61a0a8", "#d48265"],
                //     },
                //     tooltip: {
                //         trigger: "item",
                //     },
                //     series: [
                //         {
                //             name: "Access From",
                //             type: "pie",
                //             radius: "50%",
                //             color: ["#c23431", "#2f4554", "#61a0a8", "#d48265"],
                //             data: this.arr,
                //             emphasis: {
                //                 itemStyle: {
                //                     shadowBlur: 10,
                //                     shadowOffsetX: 0,
                //                     shadowColor: "rgba(0, 0, 0, 0.5)",
                //                 },
                //             },
                //         },
                //     ],
                // };

                // if (option && typeof option === "object") {
                //     myChart.setOption(option);
                // }

                // window.addEventListener("resize", myChart.resize);
            },
        },
        mounted() {},
    };
</script>
