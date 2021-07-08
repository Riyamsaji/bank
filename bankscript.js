function getAccountDetails() {
    let name=nme.value;
    let account_number=acc_no.value;
    let balance=bal.value;
    let mobile=mob.value;
    let password=pwd.value;

    let account={name,account_number,balance,mobile,password}
    console.log(account);
    if(account_number in localStorage){
        error.innerHTML="Account number already exist"
    }
    else{
        localStorage.setItem(account.account_number,JSON.stringify(account))
        alert("Account added success")
        location.href="./login.html"
    }
}
function login() {
    let user_name=uname.value;
    let password=pwd.value;
    let login_account={user_name,password}
    console.log(login_account);

    let user=JSON.parse(localStorage.getItem(user_name))
    console.log(user);
    if(user_name in localStorage){
        if(user.password== password){
            alert("Login Success")
            sessionStorage.setItem("user",user_name)
            location.href="home.html"
        }
        else{
            error.innerHTML="*please enter a valid password"
        }
    }
    else{
        error.innerHTML="*invalid username"
    }
    
}
function balanceEnquiry(){
    let user=sessionStorage.getItem("user")
    let account=JSON.parse(localStorage.getItem(user))
    alert(account.balance)
}
var req=sessionStorage.getItem("user")
if(req){
    listitem.innerHTML=`$logout{req}`;
}