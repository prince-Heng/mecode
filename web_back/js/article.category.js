var article_category = {
    // 获取内容
    getAndShow: function(hanshu) {
        $.get(APIURLS.category_show, function(res) {
            hanshu(res)
        })
    },

    // 删除
    delete: function(name_id, hanshu) {
        $.post(APIURLS.category_delete, {
            'id': name_id
        }, function(res) {
            hanshu(res)
        })
    },


    // 增加

    add: function(name, slug, hanshu) {
        $.post(APIURLS.category_add, {
            'name': name,
            'slug': slug
        }, function(res) {
            hanshu(res)
        })
    },


    // 编辑



    edit: function(cata_id, cata_name, cata_sulg, Huidiao) {
        $.post(APIURLS.category_edit, {
            'id': cata_id,
            'name': cata_name,
            'slug': cata_sulg
        }, function(res) {
            Huidiao(res);
        })
    }
}