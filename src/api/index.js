import _ from "./axios"

// 系统概览
// 概览总数和总金额/GET：http://jxsjs.com/equipment/overview
// 设备状态汇总/GET：http://jxsjs.com/equipment/status-overview
// 设备分类汇总/GET：http://jxsjs.com/equipment/category-overview
const getOverview = () => _.getAxios("overview");
const getOverviewStatus = () => _.getAxios("status-overview");
const getOverviewCategory = () => _.getAxios("category-overview");

// 未入库设备状态列表/GET：http://jxsjs.com/equipment/status-list
// 参数：type=pre
const getStatusListPre = () => _.getAxios("status-list", { type: "pre" })

// 设备登记页的入库/post ：http://jxsjs.com/equipment/pre-approve
// 参数：id
const postPreApprove = id => _.postAxios("pre-approve", { id })
// 编辑未入库设备状态/POST：http://jxsjs.com/equipment/status-edit
// 参数：type=pre、id状态编号、 name状态名称、color状态颜色
const postStatusEditPre = function ({ id = null, name = null, color = null } = {}) {
    return _.postAxios("status-edit", {
        type: "pre",
        id, name, color
    })
}

// 未入库设备状态列表排序/POST：http://jxsjs.com/equipment/status-order
// 参数：type=pre、ids状态编号排序数组
const postStatusOrderPreIDS = function ({ ids = null } = {}) {
    return _.postAxios("status-order", {
        type: "pre",
        ids
    })
}

// 已入库设备状态列表/GET：http://jxsjs.com/equipment/status-list
// 参数：type=equip
const getStatusListEquip = () => _.getAxios('status-list', {
    type: "equip"
})

// 编辑已入库设备状态/POST：http://jxsjs.com/equipment/status-edit
// 参数：type=equip、id状态编号、 name状态名称、color状态颜色
const postStatusEditEquip = function ({ id = null, name = null, color = null } = {}) {
    return _.postAxios("status-edit", {
        type: "equip",
        id, name, color
    })
}

// 更改已入库设备状态 /post equip-set
// 参数 id设备编号 status更改后的状态
const postQquipSet = ({ id, status } = {}) => _.postAxios("equip-set", { id, status })

// 已入库设备状态列表排序/POST：http://jxsjs.com/equipment/status-order
// 参数：type=equip、ids状态编号排序数组
const postStatusOrderEquipIDS = function ({ ids = null } = {}) {
    return _.postAxios("status-order", {
        type: "equip",
        ids
    })
}

// 设备分类列表/GET：http://jxsjs.com/equipment/category-list
const getCategoryList = () => _.getAxios("category-list");

// 编辑设备分类/POST：http://jxsjs.com/equipment/category-edit
// 参数：id设备分类编号、 name设备分类名称
const postCategoryEdit = function ({ id = null, name = null } = {}) {
    return _.postAxios("category-edit", {
        id, name
    })
}

// 设备分类列表排序/POST：http://jxsjs.com/equipment/category-order
// 参数：ids设备分类编号排序数组
const postcategoryOrder = function ({ ids = null } = {}) {
    return _.postAxios("category-order", {
        ids
    })
}

// 设备登记列表/POST：http://jxsjs.com/equipment/pre-list
// 参数：pageNo当前页数1开始、pageSize每页条数、id设备编号、name设备名称、status设备状态(传状态id)、category设备分类(传分类id)
const postPreList = function ({ pageNo = null, pageSize = null, id = null, name = null, status = null, category = null } = {}) {
    return _.postAxios("pre-list", {
        pageNo, pageSize, id, name, status, category
    })
}

// 设备管理列表
//     http://jxsjs.com/equipment/equip-list  post
//     pageNo  开始页数
//     pageSize  每页条数
const postEquipList = function ({ pageNo = null, pageSize = null, id = null, name = null, status = null, category = null } = {}) {
    return _.postAxios("equip-list", {
        pageNo, pageSize, id, name, status, category
    })
}

// 添加设备/POST：http://jxsjs.com/equipment/pre-add
// 参数：name设备名称、category设备分类(传分类id)、number设备数量、price设备单价、time采购时间
const postPreAdd = function ({ name = null, category = null, number = null, price = null, time = null } = {}) {
    return _.postAxios("pre-add", {
        name, category, number, price, time
    })
}

// 编辑设备/POST：http://jxsjs.com/equipment/pre-edit
// 参数：id设备编号、name设备名称、category设备分类(传分类id)、number设备数量、price设备单价、time采购时间
const postPreEdit = function ({ id = null, name = null, category = null, number = null, price = null, time = null } = {}) {
    return _.postAxios("pre-edit", {
        id, name, category, number, price, time
    })
}


// 审核设备/POST：http://jxsjs.com/equipment/pre-check
// 参数：id设备编号
const postPreCheck = function ({ id = null } = {}) {
    return _.postAxios("pre-check", {
        id
    })
}


// 系统管理员
// 测试账号：lidazhao
// 密码：Qwe123
// 手机：13800138001
// 验证码：654321

// 设备管理员
// 测试账号：wangerxiao
// 密码：Qwe123
// 手机：13800138002
// 验证码：654321


// 系统登陆/POST：http://jxsjs.com/equipment/login
// 参数：
// type: 短信登陆sms、密码登陆password
// 短信登陆时：phone + code
// 密码登陆时：username + password
const postLogin = function ({ type = null, phone = null, code = null, username = null, password = null } = {}) {
    return _.postAxios("login", {
        type, phone, code, username, password
    })
}

// 发送手机验证码/POST：http://jxsjs.com/equipment/code
// 参数：phone手机号
const postCode = function ({ phone = null } = {}) {
    return _.postAxios("code", {
        phone
    })
}

// 当前登陆用户信息/GET：http://jxsjs.com/equipment/who
const getWho = () => _.getAxios("who");

// 退出登陆/POST：http://jxsjs.com/equipment/logout
const postLogout = () => _.postAxios("logout");

// 修改密码/POST：http://jxsjs.com/equipment/password-reset
// 参数：oldPw旧密码、newPw新密码
const postPasswordReset = function ({ oldPw = null, newPw = null } = {}) {
    return _.postAxios("password-reset", {
        oldPw, newPw
    })
}
export default {
    // 系统登陆/POST：http://jxsjs.com/equipment/login
    // 参数：
    // type: 短信登陆sms、密码登陆password
    // 短信登陆时：phone + code
    // 密码登陆时：username + password
    postLogin,
    // 发送手机验证码/POST：http://jxsjs.com/equipment/code
    // 参数：phone手机号
    postCode,
    // 当前登陆用户信息/GET：http://jxsjs.com/equipment/who
    // getWho,
    // 退出登陆/POST：http://jxsjs.com/equipment/logout
    postLogout,
    // 修改密码/POST：http://jxsjs.com/equipment/password-reset
    // 参数：oldPw旧密码、newPw新密码
    postPasswordReset,
    // 系统概览
    // 概览总数和总金额/GET 
    getOverview,
    // 设备状态汇总/GET
    getOverviewStatus,
    // 设备分类汇总/GET
    getOverviewCategory,
    // 未入库设备状态列表
    getStatusListPre,
    // 编辑未入库设备状态/POST
    // id状态编号、 name状态名称、color状态颜色
    postStatusEditPre,
    // 未入库设备状态列表排序/POST
    // ids状态编号排序数组
    postStatusOrderPreIDS,
    // 已入库设备状态列表
    getStatusListEquip,
    // 编辑已入库设备状态/POST
    // id状态编号、 name状态名称、color状态颜色
    postStatusEditEquip,
    // 已入库设备状态列表排序/POST
    // ds状态编号排序数组
    postStatusOrderEquipIDS,
    // 设备分类列表/GET
    getCategoryList,
    // 编辑设备分类/POST
    // id设备分类编号、 name设备分类名称
    postCategoryEdit,
    // 设备分类列表排序/POST
    // ids设备分类编号排序数组
    postcategoryOrder,
    // 设备登记列表/POST
    // pageNo当前页数1开始、pageSize每页条数、id设备编号、name设备名称、status设备状态(传状态id)、category设备分类(传分类id)
    postPreList,
    // 设备管理列表
    //     pageNo  开始页数
    //     pageSize  每页条数
    postEquipList,
    // 添加设备/POST
    // name设备名称、category设备分类(传分类id)、number设备数量、price设备单价、time采购时间
    postPreAdd,
    // 编辑设备
    // id设备编号、name设备名称、category设备分类(传分类id)、number设备数量、price设备单价、time采购时间
    postPreEdit,
    // 审核设备/POST
    // id设备编号
    postPreCheck,
    // 设备登记页的入库
    // 参数：id
    postPreApprove,
    // 更改已入库设备状态 /post equip-set
    // 参数 id设备编号 status更改后的状态
    postQquipSet
}