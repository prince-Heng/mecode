var comment = {

    add: function(name, content, article_id, callback) {
        $.post(APIURLS.comment_shou, {
            'name': name,
            'content': content,
            'article_id': article_id
        }, function(res) {
            callback(res)
        })
    },

    get: function(article_id, callback) {
        $.get(APIURLS.comment_get, {
            'article_id': article_id
        }, function(res) {
            callback(res)
        })
    }
}