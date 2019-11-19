var user = {


    logIn: function(myUser_name, myPassword, Hanshu) {
        $.post(
            'http://localhost:8000/admin/login', {
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
        $.post('http://localhost:8000/admin/logout', function(res) {
            Huidiao(res);
        })
    },
    getLog: function(Huidiao) {
        $.get('http://localhost:8000/admin/getuser',
            function(res) {
                Huidiao(res)
            })
    }


}