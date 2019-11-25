var article_list = {
    // 获取文章
    // 接口定义，需要传入必要的参数
    getAndShow: function(curPage, type, state, Huidiao) {
        $.get(APIURLS.article_search, {
            page: curPage,
            type: type,
            state: state
        }, function(res) {
            Huidiao(res)
        })
    },

    // 删除文章
    del: function(id, Huidiao) {
        $.get(APIURLS.article_del, {
            id: id
        }, function(res) {
            Huidiao(res)
        })
    },
    // 添加文章
    add: function(fd, Huidiao) {
        $.ajax({
            url: APIURLS.article_add,
            type: 'post',
            data: fd,
            processData: false, //不要让jqurey去处理formdata的数据
            contentType: false, //不适用默认的请求头
            success: function(res) {
                Huidiao(res)
            }
        })
    },

    // 编辑文章
    edit: function(fd, Huidiao) {
        $.ajax({
            url: APIURLS.article_edit,
            type: 'post',
            data: fd,
            processData: false, //不要让jqurey去处理formdata的数据
            contentType: false, //不适用默认的请求头
            success: function(res) {
                Huidiao(res)
            }
        })
    },

    // 获取文章详情
    getDetail: function(id, Huidiao) {
        $.get(APIURLS.article_search, {
            'id': id
        }, function(res) {
            Huidiao(res)
        })
    }
}