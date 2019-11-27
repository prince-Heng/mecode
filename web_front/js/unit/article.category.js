var article_category = {
    // 获取内容
    getAndShow: function(hanshu) {
        $.get(APIURLS.category_show, function(res) {
            hanshu(res)
        })
    }
}