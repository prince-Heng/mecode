var article_list = {

    // 获取文章详情
    getDetail: function(id, Huidiao) {
        $.get(APIURLS.article_search, {
            'id': id
        }, function(res) {
            Huidiao(res)
        })
    },

    // 获取5张图片

    getFiveImg: function(callback) {
        $.get(APIURLS.article_search, {
            perpage: 5,
            state: '已发布'
        }, function(res) {
            callback(res);
        })
    }
}