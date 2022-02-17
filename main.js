function updateTrainNumber() {
	info = ""
	trainNumber = document.getElementById("trainnoinput").value.replace(/\b0+/g, '')
	if (trainNumber == "") {
		info += "<h2>Bir tren numarası girin</h2>"
	} else if (trainNumber <= 48 && trainNumber >= 1) {
		info += "<h2>Tren "+ trainNumber + "</h2>"
		if (trainNumber <= 8 && trainNumber >= 0) {
			info += "<p>Alstom - 1998/1999 üretimi</p>"
		} else if (trainNumber <= 31 && trainNumber >= 8) {
			info += "<p>Rotem 1 - 2008/2009/2010 üretimi</p>"
		} else if (trainNumber <= 48 && trainNumber >= 31) {
			info += "<p>Rotem 2 - 2017 üretimi</p>"
		}
		info += "<h3>Vagonlar</h3><table><tr><th>Mc1</td><td>15"
		if((trainNumber * 2 - 1) < 10) {
			info += "0"
		}
		info += (trainNumber * 2 - 1)
		info += "</td></tr><tr><th>T</td><td>11"
		if((trainNumber) < 10) {
			info += "0"
		}
		info += trainNumber
		info += "</td></tr><tr><th>M</td><td>13"
		if((trainNumber) < 10) {
			info += "0"
		}
		info += trainNumber
		info += "</td></tr><tr><th>Mc2</td><td>15"
		if((trainNumber * 2) < 10) {
			info += "0"
		}
		info += (trainNumber * 2)
		info += "</td></tr></table>"
	} else {
		info += "<h2>Tren/vagon numarası geçersiz</h2>"
	}
	updateTrainInfo(info)
}

function updateTrainInfo(info) {
	document.getElementById("traininfo").innerHTML = info
}

function modeChange(mode) {
	if (mode == "car") {
		document.getElementById("carnoinputdiv").style.display = "flex"
		document.getElementById("trainnoinputdiv").style.display = "none"
	} else {
		document.getElementById("carnoinputdiv").style.display = "none"
		document.getElementById("trainnoinputdiv").style.display = "flex"
	}
}

function updateCarNumber() {
	carNumber = document.getElementById("carnoinput").value
	if (!(carNumber.length == 4)) {
		document.getElementById("traininfo").innerHTML = "<h2>Vagon numarası geçersiz</h2>"
		return
	}
	if (carNumber.slice(0, 2) == "13" || carNumber.slice(0, 2) == "11") {
		document.getElementById("trainnoinput").value = carNumber.slice(2, 4)
		updateTrainNumber()
		return
	} else if (carNumber.slice(0, 2) == "15") {
		if ((carNumber.slice(2, 4) % 2) == 1) {
			document.getElementById("trainnoinput").value = (parseInt(carNumber.slice(2, 4)) + 1) / 2
		} else {
			document.getElementById("trainnoinput").value = carNumber.slice(2, 4) / 2
		}
		updateTrainNumber()
		return
	} else {
		document.getElementById("traininfo").innerHTML = "<h2>Vagon numarası geçersiz</h2>"
	}
}