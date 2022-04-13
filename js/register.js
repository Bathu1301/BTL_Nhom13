$(document).ready(function(){
    $("#submit").click(function(){
        var name = $("#firstname").val();
        var name = $("#lastname").val();
        var email = $("#email").val();
        var pass = $("#password").val();

        if(firstname.length == "")
        {
            $("#p1").text("Please enter your name");
            $("#firstname").focus();
            return false;
        }
        else if (lastname.length == "")
        {
            $("#p1").text("Please enter your name");
            $("#lasttname").focus();
            return false;
        }
        else if(email.length == ""){
            $("#p2").text("Please enter your email address");
            $("#email").focus();
            return false;
        }


        else if(pass.length == ""){
            $("#p3").text("Please enter your password");
            $("#password").focus();
            return false;
        }

        else{
            var con = confirm("Are you Done?");
            if(con == true)
            {
                alert("Welcome to our Website");
                return true;
            }
            else{
                return false;
            }
        }
    });
});


