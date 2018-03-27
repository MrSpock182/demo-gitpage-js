function doSomething() {
	var date = new Date();
	var hours = date.getHours();
	
	console.log(date);
	console.log(hours);
	
	if(hours > 16) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://impactaservice.herokuapp.com", true);
		xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
				console.log("Wake herokuapp");
			}
		}
		xhr.send();
	} 
	else {
		console.log("Hour off");
	}
}

doSomething();
setInterval(doSomething, 300000);

