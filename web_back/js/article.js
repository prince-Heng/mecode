var article_list = {
    getAndShow: function(Huidiao) {
        $.get(APIURLS.article_search, function(res) {
            Huidiao(res)
        })
    }
}