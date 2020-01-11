

var arrayStd = ['waleed rami@std' , '1'];
var arrayIug = ['mohammed khaled@iug' , '2'];
/* start this function for valid sign in*/
function validSignIn() {
    var userNameIn = document.forms['formSignIn']['nameSignIn'].value;
    var passwordIN = document.forms['formSignIn']['passwordSignIn'].value;
    
    if(userNameIn == ''){
        document.getElementById('requerdSignIn').innerHTML = 'please Enter user name';
        return false;
    }else if(!isNaN(userNameIn)){
        document.getElementById('requerdSignIn').innerHTML = 'please Enter text value in user name';
        return false;   
    }else if(passwordIN == ''){
        document.getElementById('requerdSignIn').innerHTML = 'please Enter password';
        return false;
    }else{
        for(var i = 0; i <= arrayStd.length ; i++){
            if(arrayStd[i] == userNameIn){
                i++;
                if(arrayStd[i] == passwordIN){
                   window.open('user-std.html');
                   return true;
                }else{
                    document.getElementById('requerdSignIn').innerHTML = 'error password';
                    return false;
                }
            }else{
                continue;
            }
        }
        for(var i = 0; i <= arrayIug.length ; i++){
            if(arrayIug[i] == userNameIn){
                i++;
                if(arrayIug[i] == passwordIN){
                   window.open('user-teacher.html');
                   return true;
                }else{
                    document.getElementById('requerdSignIn').innerHTML = 'error password';
                    return false;
                }
            }else{
                document.getElementById('requerdSignIn').innerHTML = 'not found';
                return false;
            }
       }
    }
}
/* end function for valid sign in*/

/* start  function for valid sign up*/
function validSignUp() {
    if (validUserName()){
        if(validEmail()){
            if(validPassword()){
                if(validCPassword()){
                    document.getElementById('requerdSuccess').innerHTML = 'all is done thank you \n go to sign in';
                    return false;  
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }     
    }else{
        return false;
    }
}
/* end function for valid sign up*/

    /* start function for valid user name*/
    function validUserName() {
    var userNameUp = document.forms['formSignUp']['nameUp'].value;
    var checkSpace = RegExp(" ").test(userNameUp);
    /* start valid input name*/ 
    if(userNameUp == ''){
        document.getElementById('requerdName').innerHTML = 'please Enter user name';
        return false;
    }else if(!isNaN(userNameUp)){
        document.getElementById('requerdName').innerHTML = 'please Enter text value in user name';
        return false;
    }else if(checkSpace == false ){
        document.getElementById('requerdName').innerHTML = 'please Enter space between  user name';
        return false;
    }else if(/[a-zA-z]/.test(userNameUp) != true){
        document.getElementById('requerdName').innerHTML = 'the input must be in english and with out Symbols';
        return false;
    }else{
        document.getElementById('requerdName').innerHTML = '';
        return true;     
    }
    }
    /* end function for valid user name*/
    
    /* start function for valid email*/
    function validEmail(){
        var emailUp = document.forms['formSignUp']['emailUp'].value;
        var atpos = emailUp.indexOf("@");
        var dotpos = emailUp.lastIndexOf(".");
        var checkSpaceEmail = RegExp(" ").test(emailUp);
        if(emailUp == ''){
            document.getElementById('requerdEmail').innerHTML = 'please Enter your email';
            return false;
        }else if(!/[a-zA-z]/.test(emailUp)){
            document.getElementById('requerdEmail').innerHTML = 'please Enter english email';
            return false;
        }else if (atpos < 1 || ( dotpos - atpos < 2 )) {
            document.getElementById('requerdEmail').innerHTML = 'please Enter correct email';
            return false;
        }
        else if (checkSpaceEmail == true) {
            document.getElementById('requerdEmail').innerHTML = 'please delete space from email';
            return false;
        }else{
            document.getElementById('requerdEmail').innerHTML = '';
            return true;     
        }
    }
    /* end function for valid email*/

    /* start function for valid password*/
    function validPassword(){
        var passwordUp = document.forms['formSignUp']['passwordUp'].value;        
        if(passwordUp == ''){
            document.getElementById('requerdPassword').innerHTML = 'please Enter password';
            return false;
        }else if(passwordUp.length < 7){
            document.getElementById('requerdPassword').innerHTML = 'the input must be more 8';
            return false;
        }else if(!/[a-z]/.test(passwordUp)){
            document.getElementById('requerdPassword').innerHTML = 'the input must be in inglish';
            return false;
        }else if(!/[A-Z]/.test(passwordUp)){
            document.getElementById('requerdPassword').innerHTML = 'the input must be have capital cha';
            return false;
        }else if(!/[0-9]/.test(passwordUp)){
            document.getElementById('requerdPassword').innerHTML = 'the input must be have numbers';
            return false;
        }else{
            document.getElementById('requerdPassword').innerHTML = '';
            return true;     
        }
    }

    /* end function for valid password*/

    /* start function for valid confirm password*/
    function validCPassword(){
        var CpasswordUp = document.forms['formSignUp']['confirmPasswordUp'].value;
        var passwordUp = document.forms['formSignUp']['passwordUp'].value;
        if(CpasswordUp == ''){
            document.getElementById('requerdCPassword').innerHTML = 'please Enter confirm password';
            return false;
        }else if(CpasswordUp !== passwordUp){
            document.getElementById('requerdCPassword').innerHTML = 'The two passwords are not equal';
            return false;
        }else{
            document.getElementById('requerdCPassword').innerHTML = ''; 
            return true;     
        }
    }
    /* end function for valid confirm password*/

    /*******************************************/
    
/* start function calculate GPA */
function calculateGpa(){
        var mark1 = document.forms['form-calculate']['mark1'].value;        
        var mark2 = document.forms['form-calculate']['mark2'].value;
        var mark3 = document.forms['form-calculate']['mark3'].value;
        var mark4 = document.forms['form-calculate']['mark4'].value;
        var hour1 = document.forms['form-calculate']['hours1'].value;
        var hour2 = document.forms['form-calculate']['hours2'].value;
        var hour3 = document.forms['form-calculate']['hours3'].value;
        var hour4 = document.forms['form-calculate']['hours4'].value;
        var hours = hour1 + hour2 + hour3 + hour4;
        if(mark1 == '' || mark2 == '' || mark3 == '' || mark4 == '' || hour4 == '' || hour3 == '' || hour2 == '' || hour1 == ''){
            document.getElementById('message').innerHTML = 'please add value in all inputs';
            return false;
        }else if(isNaN(mark1)|| isNaN(mark2) || isNaN(mark3) || isNaN(mark4) || isNaN(hour1) || isNaN(hour2) || isNaN(hour3) || isNaN(hour4)){
            document.getElementById('message').innerHTML = 'the all value must be number';
            return false;
        }
        var hours = parseInt(hour1) + parseInt(hour2) + parseInt(hour3) + parseInt(hour4);
        var gpa = (mark1 * hour1 + mark2 * hour2 + mark3 * hour3 + mark4 * hour4) / hours;

        if(gpa >= 60){
            document.getElementById('jpa-cal').innerHTML = gpa;
            return false;
        }else{
            document.getElementById('jpa-cal').innerHTML = '<p class="jpa-cal" style="color:red;margin:0;">'+gpa+'</p>';
            return false;
        }
}
/* end function calculate GPA */
/* start functions for local storage */

function addUser(){
    var name = document.forms['formNewUser']['name'].value;
    var email= document.forms['formNewUser']['email'].value;
    var password = document.forms['formNewUser']['password'].value;
    var age = document.forms['formNewUser']['age'].value;
    key = localStorage.length;
    user = {
        key:key+1,
        name:name,
        email:email,
        age:age,
        password:password
    }
    localStorage.setItem(key,JSON.stringify(user));
}

function getAllUser(){

    table = document.getElementById('table-users');
    for (i=0; i < localStorage.length ; i++){
        user = JSON.parse(localStorage.getItem(i));
        row = table.insertRow(-1);
        row.insertCell(0).innerHTML = user.key;
        row.insertCell(1).innerHTML = user.name;
        row.insertCell(2).innerHTML = user.email;
        row.insertCell(3).innerHTML = user.age;
        row.insertCell(4).innerHTML = user.password;
        row.insertCell(5).innerHTML = '<button class="btn-edit" onclick="editUser(this)">Edite</button>';
        row.insertCell(6).innerHTML = '<button class="btn-delete" onclick="deleteUser(this)">Delete</button>';
    }

    
};

function deleteUser(obj){
    row = obj.parentElement.parentElement;
    localStorage.removeItem(row.children[0].innerHTML);
    row.remove();
}
function editUser(obj){
    row = obj.parentElement.parentElement;
    key = row.children[0].innerHTML;

    for (i=1; i <= 4; i++){
        data = row.children[i].innerHTML;
        row.children[i].innerHTML = '<input type="text" value="'+data+'" class="input-edit">';
    }
    row.children[5].innerHTML = '<button class="btn-save" onclick="saveUser(this)">Save</button>';


}
function saveUser(obj){
    row = obj.parentElement.parentElement;
    key = row.children[0].innerHTML;
    name = row.children[1].children[0].value;
    email = row.children[2].children[0].value;
    age = row.children[3].children[0].value;
    password = row.children[4].children[0].value;
    user = {
        key:key,
        name:name,
        email:email,
        age:age,
        password:password
    }
    localStorage.setItem(key,JSON.stringify(user));
    
    row.children[1].innerHTML = user.name;
    row.children[2].innerHTML = user.email;
    row.children[3].innerHTML = user.age;
    row.children[4].innerHTML = user.password;
    row.children[5].innerHTML ='<button class="btn-edit" onclick="editUser(this)">Edite</button>';

}
/* end functions for local storage */
