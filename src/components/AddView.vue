<template>
    <div class="add">
        <el-button type="primary" @click="dialogFormVisible = true"
            >设备登记</el-button
        >

        <el-dialog title="设备登记" :visible.sync="dialogFormVisible">
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="设备名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="设备分类" prop="category">
                    <el-select
                        v-model="ruleForm.category"
                        placeholder="请选择设备分类"
                    >
                        <template v-if="itemize.length">
                            <el-option
                                v-for="item in itemize"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id"
                            >
                            </el-option>
                        </template>
                    </el-select>
                </el-form-item>
                <el-form-item label="设备数量" prop="number">
                    <el-input v-model="ruleForm.number"></el-input>
                </el-form-item>
                <el-form-item label="设备单价" prop="price">
                    <el-input v-model="ruleForm.price"></el-input>
                </el-form-item>
                <el-form-item label="购置日期" prop="date" required>
                    <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="ruleForm.time"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')"
                        >立即创建</el-button
                    >
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialogFormVisible: false,
                itemize: [],
                // name设备名称、category设备分类(传分类id)、number设备数量、price设备单价、time采购时间
                ruleForm: {
                    name: "",
                    category: "",
                    number: "",
                    price: "",
                    time: "",
                },
                rules: {
                    name: [
                        {
                            required: true,
                            message: "请输入设备名称",
                            trigger: "blur",
                        },
                        {
                            min: 1,
                            max: 20,
                            message: "长度在 3 到 5 个字符",
                            trigger: "blur",
                        },
                    ],
                    number: [
                        {
                            required: true,
                            message: "请输入设备数量",
                            trigger: "blur",
                        },
                    ],
                    price: [
                        {
                            required: true,
                            message: "请输入设备单价",
                            trigger: "blur",
                        },
                    ],
                    category: [
                        {
                            required: true,
                            message: "请选择设备分类",
                            trigger: "change",
                        },
                    ],
                    time: [
                        {
                            type: "time",
                            required: true,
                            message: "请选择购置日期",
                            trigger: "change",
                        },
                    ],
                },
                formLabelWidth: "120px",
            };
        },
        async created() {
            let getCategoryList = await this.Req.getCategoryList();
            this.itemize = getCategoryList.data;
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        this.Req.postPreAdd(this.ruleForm).then(res => {
                            console.log(res);
                            if (res.code == 0) {
                                for (let key in this.ruleForm) {
                                    this.ruleForm[key] = "";
                                }
                                this.dialogFormVisible = false;
                            }
                        });
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        },
    };
</script>

<style lang="scss" scoped>
</style>
