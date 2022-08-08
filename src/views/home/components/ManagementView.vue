<template>
    <register-and-management
        title="设备管理"
        statusListApi="getStatusListEquip"
        listApi="postEquipList"
    ></register-and-management>
</template>

<script>
    import RegisterAndManagement from "@/components/RegisterAndManagement";
    export default {
        name: "RegisterView",
        components: {
            RegisterAndManagement,
        },
    };
</script>

<style lang="scss" scoped>
</style>