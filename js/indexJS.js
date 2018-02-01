 
function InvalidEmailMsg(textbox) {
    	if (textbox.value == '') {
        	textbox.setCustomValidity('Required email address');
    	}
    	else if (textbox.validity.typeMismatch){
        	textbox.setCustomValidity('please enter a valid email address');
    	}
    	else {
	       textbox.setCustomValidity('');
	       return true;
    	}
   	 return false;
	}
	
	function InvalidPasswordMsg(textbox){
		if (textbox.value == ''){
			textbox.setCustomValidity('Required Password');
		}	
		else if (textbox.value.trim() == ''){
					textbox.setCustomValidity('Only spaces are not allowed');
		}
		else{
			textbox.setCustomValidity('');
			return true;		
		}
		return false;
	}
	
$(document).ready(function(){
		
	$("#LoginForm").submit(function(e){
		
		e.preventDefault();
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		
		if(email.value != "pavanmadhyan@gmail.com"){
			email.setCustomValidy("Wrong Email Address");
		}
		else if(password.value != "sm04"){
			password.setCustomValidity("Wrong Password");					
		}
		else{
			location.replace("htmls/home.html");
			return;
		}
		alert("Login Failed");
		
	});
	
	$("#SignUpForm").submit(function(e){
		e.preventDefault();
		
		var email = document.getElementById("signupEmail");
		var pas1 = document.getElementById("signupPassword1");
		var pas2 = document.getElementById("signupPassword2");	
		
		if(email.value != "pavanmadhyan@gmail.com"){
			email.setCustomValidity("This Email Address Not Allowed.");
		}
		else if(pas1.value != pas2.value){
			pas2.setCustomValidity("Password doesn't match.");
		}
		else{
			alert("Sign Up Successful");
			return;
		}
	});
	
	var loginModal = document.getElementById("loginModal");
var signUpModal = document.getElementById("signUpModal");

var loginBtn = document.getElementById("homeLoginButton");
var signupBtn = document.getElementById("homeSignUpButton");

var loginSpan1 = document.getElementsByClassName("close")[0];
var loginSpan2 = document.getElementsByClassName("close")[1];
var signupSpan1 = document.getElementsByClassName("close")[2];
var signupSpan2 = document.getElementsByClassName("close")[3];



loginBtn.onclick = function(){
	loginModal.style.display = "block";
}

loginSpan1.onclick = function(){
	loginModal.style.display = "none";
}

loginSpan2.onclick = function(){
	loginModal.style.display = "none";
}

signupBtn.onclick = function(){
	signUpModal.style.display = "block";
}

signupSpan2.onclick = function(){
	signUpModal.style.display = "none";
}

signupSpan1.onclick = function(){
	signUpModal.style.display = "none";
}

window.onclick = function(event) {
}


}); // END OD document ready





