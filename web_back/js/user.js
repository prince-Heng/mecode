var user = {


    logIn: function(myUser_name, myPassword, Hanshu) {
        $.post(
            'http://localhost:8000/admin/login', {
                user_name: myUser_name,
                password: myPassword
            },
            function(res) {
                console.log(res);
                Hanshu(res)
            }
        )
    }


}