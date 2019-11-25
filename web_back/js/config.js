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
    category_delete: baseUrl + '/admin/category_delete',


    // 文章搜索
    article_search: baseUrl + '/admin/search',
    article_del: baseUrl + '/admin/article_delete',
    article_add: baseUrl + '/admin/article_publish',
    article_edit: baseUrl + '/admin/article_edit',

    article_month_count: baseUrl + '/admin/month_article_count',
}