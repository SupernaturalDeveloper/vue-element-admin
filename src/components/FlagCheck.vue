<template>
    <div class="flagCheck">
        <div v-for="item in flagCheckArr" :key="item.id">
            <span>{{ item.name }}</span>
            <i :style="{ background: item.color }"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FlagCheck",
        props: {
            flagCheckArr: Array,
        },
    };
</script>

<style lang="scss" scoped>
    .flagCheck {
        position: absolute;
        right: 30px;
        top: 30px;
        display: flex;
        & > div {
            width: 100px;
            i {
                display: inline-block;
                width: 8px;
                height: 8px;
                vertical-align: middle;
                margin-left: 4px;
            }
        }
    }
</style>