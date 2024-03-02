$(document).ready(function() {
    $("#login-container form").submit(function(e) {
        e.preventDefault();
        
        let userInput = $("#username").val();
        let userInputPassword = $("#password").val();
        var icon_done = '<i class="material-icons" style="color: green;">done</i>';
        var icon_close = '<i class="material-icons" style="color: red;">close</i>';

        if (userInput === "new_user") {
            $("#username").css('border-color', 'green');
            $('#username').after(icon_done)
        }        
        if (userInputPassword === "123456789") {
            $("#password").css('border-color', 'green');
            $("#password").after(icon_done);

        }
        if (userInput != "new_user") {
            $("#username").css('border-color', 'red');
            $('#login-container').find('p').remove();
            $('#login-container').append('<p>please, enter valid username</p>');
            $('#login-container').find('i').remove();
            $("#username").after(icon_close);

        }
        if (userInput === "") {
            $("#username").css('border-color', 'red');
            $('#login-container').find('p').remove();
            $('#login-container').append('<p>please, enter username</p>');
            $('#login-container').find('i').remove();
            $("#username").after(icon_close);

        }

        if (userInputPassword != "123456789") {
            $("#password").css('border-color', 'red');
            $('#login-container').find('p').remove();
            $('#login-container').append('<p>please, enter valid password</p>');
            $('#login-container').find('i').remove();
            $("#password").after(icon_close);

        }
        if (userInputPassword === "") {
            $("#password").css('border-color', 'red');
            $('#login-container').find('p').remove();
            $('#login-container').append('<p>please, enter password</p>');
            $('#login-container').find('i').remove();
            $("#password").after(icon_close);
        }

        if (userInput != "new_user" && userInputPassword != "123456789") {
            $("#username").css('border-color', 'red');
            $("#password").css('border-color', 'red');
            $('#login-container').find('p').remove();
            $('#login-container').find('i').remove();
            $('#login-container').append('<p>please, enter valid username and password</p>');
            $("#password").after(icon_close);
            $("#username").after(icon_close);

        }
        if (userInput === "new_user" && userInputPassword === "123456789") {
            $("#username").css('border-color', 'green');
            $("#password").css('border-color', 'green');
            $('#login-container').find('p').remove();
            $('#login-container').find('i').remove();
            $("#password").after(icon_done);
            $("#username").after(icon_done);
        }
    });
});