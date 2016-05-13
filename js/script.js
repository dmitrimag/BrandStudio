addEventListener("load", Init);

function Init() {
	var user = "";
	
	var button = document.getElementById("auth-button");
	button.addEventListener("click", CheckForUser);

	var popup = document.getElementById("popup");

	var form = document.getElementById("auth-form");
	form.addEventListener("submit", CheckForm);

	var elems = form.elements;
	var authTitle = document.getElementById("auth-title");

	function CheckForUser() {
		if (!user) {
			ShowForm();
		} else {
			LogOut();
		}
	}

	function ShowForm() {
		elems.username.value = "";
		elems.password.value = "";
		popup.style.display = "block";
	}

	function CheckForm() {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
		if (!elems.username.value || !elems.password.value) {
			alert("Вы не ввели логин и/или пароль!");
			return false;
		}
		HideForm(elems.username.value);
	}

	function HideForm( username ) {
		popup.style.display = "none";
		if (username) {
			LogIn(username);
		}
	}

	document.addEventListener("keydown", function(e) {
		if (e.keyCode == 27) {
			HideForm();
		}
	});

	popup.addEventListener("click", function(e) {
		if (e.target.id == "popup") {
			HideForm();
		}
	});

	function LogIn( username ) {
		authTitle.innerText = "Здравствуйте, " + username + "!";
		button.value = "Выйти";
		user = username;
	}

	function LogOut() {
		authTitle.innerText = "Войдите в личный кабинет";
		button.value = "Войти";
		user = "";
	}
}