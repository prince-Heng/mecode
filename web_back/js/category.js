var baseUrl = 'http://localhost:8000';
var APIURLS = {
    // 登录接口
    user_logIn: baseUrl + '/admin/login',
    // 退出接口
    user_logOut: baseUrl + '/admin/logout',
    // 获取登录信息接口
    user_getLog: baseUrl + '/admin/getuser',


    // 文章搜索接口
    category_show: baseUrl + '/admin/category_search',
    // 新增文章接口
    category_add: baseUrl + '/admin/category_add',
    // 编辑文章接口
    category_edit: baseUrl + '/admin/category_edit',
    // 删除文章接口
    category_delete: baseUrl + '/admin/category_delete'

}