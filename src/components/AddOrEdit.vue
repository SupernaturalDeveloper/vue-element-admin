<template>
    <div class="add">
        <el-button
            type="primary"
            size="mini"
            @click="dialogFormVisible = true"
            >{{ btnText }}</el-button
        >

        <el-dialog
            :append-to-body="appendToBody"
            :title="dialogTitle"
            :visible.sync="dialogFormVisible"
        >
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <template v-if="ruleForm.id !== ''">
                    <el-form-item label="设备编号" prop="name">
                        <el-input v-model="ruleForm.id" disabled></el-input>
                    </el-form-item>
                </template>
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
                <el-form-item label="购置日期" prop="date">
                    <input
                        type="date"
                        placeholder="选择日期"
                        v-model="ruleForm.time"
                    />
                </el-form-item>
                <el-form-item>
                    <template v-if="btnControl">
                        <el-button
                            type="primary"
                            :plain="true"
                            @click="submitForm('ruleForm')"
                            >保存</el-button
                        >
                    </template>
                    <template v-else>
                        <el-button
                            :plain="true"
                            type="primary"
                            @click="updateHandler"
                            >保存</el-button
                        >
                    </template>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: {
            appendToBody: {
                type: Boolean,
                default: false,
            },
            btnText: {
                type: String,
                default: "登记新设备",
            },
            dialogTitle: {
                type: String,
                default: "设备登记添加",
            },
            btnControl: {
                type: Boolean,
                default: true,
            },
            formObj: {
                type: Object,
                default() {
                    return {
                        id: "",
                        name: "",
                        category: "",
                        number: "",
                        price: "",
                        time: "",
                    };
                },
            },
        },
        data() {
            return {
                dialogFormVisible: false,
                itemize: [],
                // name设备名称、category设备分类(传分类id)、number设备数量、price设备单价、time采购时间
                ruleForm: this.formObj,
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
            // 保存
            async updateHandler() {
                let res = await this.Req.postPreEdit(this.ruleForm);
                if (res.code === 0) {
                    this.$message({
                        message: "保存成功！！",
                        type: "success",
                    });
                    this.dialogFormVisible = false;
                    window.location.reload();
                    return;
                }
                this.$message.error("保存失败！！请检查！！");
            },
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
