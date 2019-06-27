    function doLogin(){
        console.log("Do login call");
        var userid = document.getElementById('userid').value;  // read textbox value and store in userid
        var password = document.getElementById('password').value;
        if(userid == password){
            location.href="dashboard.html";
            // redirect to dashboard
        }
        else{
            let message = 'Invalid Userid or Password';
            document.getElementById('error').innerText = message;
            // print message on screen
        }
    }