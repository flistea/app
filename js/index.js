// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
	if (localStorage != undefined && (window.localStorage.getItem("stu") === null){
		console.log("Local storage is supported");
		$('#prefs').show();
	} else if (localStorage != undefined && (window.localStorage.getItem("stu") !== null) {
		$('#prefs').hide();
		$('#homeScreen').show();
	} else {
		console.log("local storage not supported");
	}
}

function submitForm(){
	var stu = $('[name="stu"]').val();
	var staff = $('[name="staff"]').val();
	var app = $('[name="app"]').val();
	var guest = $('[name="guest"]').val();
	
	window.localStorage.setItem("stu", stu);
	window.localStorage.setItem("staff", staff);
	window.localStorage.setItem("app", app);
	window.localStorage.setItem("guest", guest);
	
}