// Function to get time from system and update it in webpage.
function time() {
	let dt = new Date();
	let hr = dt.getHours();
	let min = dt.getMinutes();
	let sec = dt.getSeconds();

	if (hr >= 12) {
		document.getElementById("am-pm-container").textContent = "PM";
	} else {
		document.getElementById("am-pm-container").textContent = "AM";
	}

	if (hr == 0) {
		hr = hr + 12;
	}

	if (hr > 12) {
		hr = hr - 12;
	}

	document.getElementById("hr-time-digits").textContent = hr;
	document.getElementById("min-time-digits").textContent = min;
	document.getElementById("sec-time-digits").textContent = sec;
}

// calling time at intreval of 1000 milliseconds
setInterval(time, 1000);

// Funcion to change, update images and messages according to time and alarm value set.
function myFunction() {
	// array storing the selected alarms values.
	let wakeUpTimeStr = document.getElementById("wakeUpTime-select").value;
	let lunchTimeStr = document.getElementById("lunchTime-select").value;
	let napTimeStr = document.getElementById("napTime-select").value;
	let nightTimeStr = document.getElementById("nightTime-select").value;

	let wakeUpTimeArr = wakeUpTimeStr.split(" ");
	let lunchTimeArr = lunchTimeStr.split(" ");
	let napTimeArr = napTimeStr.split(" ");
	let nightTimeArr = nightTimeStr.split(" ");

	// Overwriting display = none property after set-alarm-btn is clicked.
	document.getElementById("alarm-time-viewer").style.visibility = "visible";

	document.getElementById("wakeUpTime-span").textContent = wakeUpTimeStr;
	document.getElementById("lunchTime-span").textContent = lunchTimeStr;
	document.getElementById("napTime-span").textContent = napTimeStr;
	document.getElementById("nightTime-span").textContent = nightTimeStr;

	let currentTime = document.getElementById("hr-time-digits").textContent;
	let currentAmPm = document.getElementById("am-pm-container").textContent;

	if (Number(currentTime) === Number(wakeUpTimeArr[0]) && currentAmPm === wakeUpTimeArr[1]) {
		document.getElementById("big-img-container").style.backgroundImage = "url('./Assets/Images/morning_img.svg')";
		document.getElementById("time-status-text").textContent = "Grab Some helthy breakfast!!!";
		document.getElementById("alarm-status-text").textContent = "GOOD MORNING!! WAKE UP !!";
		// console.log("Gm");
	} else if (Number(currentTime) === Number(lunchTimeArr[0]) && currentAmPm === lunchTimeArr[1]) {
		document.getElementById("big-img-container").style.backgroundImage = "url('./Assets/Images/lunch_img.svg')";
		document.getElementById("time-status-text").textContent = "LET'S HAVE SOME LUNCH !!";
		document.getElementById("alarm-status-text").innerHTML = "GOOD AFTERNOON !! <br> HAVE NICE MEAL !!";
		// console.log("lunch");
	} else if (Number(currentTime) === Number(napTimeArr[0]) && currentAmPm === napTimeArr[1]) {
		document.getElementById("big-img-container").style.backgroundImage = "url('./Assets/Images/evening_img.png')";
		document.getElementById("time-status-text").textContent = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
		document.getElementById("alarm-status-text").textContent = "GOOD EVENING!!!";
		// console.log("evening");
	} else if (Number(currentTime) === Number(nightTimeArr[0]) && currentAmPm === nightTimeArr[1]) {
		document.getElementById("big-img-container").style.backgroundImage = "url('./Assets/Images/night_img.svg')";
		document.getElementById("time-status-text").textContent = "CLOSE YOUR EYES AND GO TO SLEEP...";
		document.getElementById("alarm-status-text").textContent = "GOOD NIGHT! SWEET DREAMS!!";
		// console.log("night");
	}
}

document.getElementById("set-alarm-btn").addEventListener("click", myFunction);
