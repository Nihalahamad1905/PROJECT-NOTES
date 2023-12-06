function check(form) {
    username = new Array("admin1@gmail.com", "admin2", "admin3","admin4");
    password = new Array("admin1", "admin2", "admin3","admin4");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1] || form.userid.value == username[2] && form.pswrd.value == password[2] || form.userid.value == username[3] && form.pswrd.value == password[3])  {
		location.replace('index/index.html')// for login authorities//
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Incorrect Password")
	}
	else {
		alert("Incorrect Username or Password")
	}
}