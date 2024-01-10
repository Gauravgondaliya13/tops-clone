
// login
function gau()
{
    var gau=document.getElementById("mob1").value
    var pass=document.getElementById("mob2").value
    if(gau=='8140473064' && pass=='8140473064')
    {
        alert("You are Logged in successfully")
        window.location='index.html';
    }
    else{
        alert("Your email and Password are Incorrect try again");
        return false;
    }
}

// logout

function logout(){
    
   
       confirm('do u want to close')? window.location='index.html':window.location='login.htm'
    
}