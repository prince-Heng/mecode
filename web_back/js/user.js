var user = {
    logIn: function(myUser_name, myPassword, Hanshu) {
        $.post(
            APIURLS.user_logIn, {
                user_name: myUser_name,
                password: myPassword
            },
            function(res) {
                // console.log(res);
                Hanshu(res)
            }
        )
    },
    logOut: function(Huidiao) {
        $.post(APIURLS.user_logOut, function(res) {
            Huidiao(res);
        })
    },
    getLog: function(Huidiao) {
        $.get(APIURLS.user_getLog,
            function(res) {
                Huidiao(res)
            })
    }


}