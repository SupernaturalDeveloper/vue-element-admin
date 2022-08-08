<template>
    <register-and-management
        title="设备登记"
        listName="pre"
        statusListApi="getStatusListPre"
        listApi="postPreList"
        :flagAddMessage="true"
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