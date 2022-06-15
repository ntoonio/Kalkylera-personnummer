function calculate() {
	reset()

	var nr = document.getElementById("numbersInput").value

	const matches = nr.match( /(\d{2})?(\d{6}(\+|-)?\d{3})/ )

	if (matches == null || matches.length < 3) {
		alert("Inte ett giltigt personnummer ange ÅÅMMDD-NNN")
		document.getElementById("calculation").style.display = "none"
		return
	}

	nr = matches[2].replace("-", "").replace("+", "")
	console.log(matches)
	const sign = (matches.length >= 4 && matches[3] != undefined) ? matches[3] : "-"

	var nrOut = ""
	for (var i = 0; i < 9; i++) {
		nrOut += nr.charAt(i) + "\t"

		if (i == 5) {
			nrOut += sign + "\t"
		}
	}

	addText(1, nrOut)
	addText(1, "*	*	*	*	*	*		*	*	*")
	addText(1, "2	1	2	1	2	1		2	1	2")
	addText(1, "=	=	=	=	=	=		=	=	=")

	var multOut = []
	var multOutString = ""

	for (var i = 0; i < 9; i++) {
		const multiplier = (i + 1) % 2 == 0 ? 1 : 2
		const result = parseInt(nr.charAt(i)) * multiplier
		multOut.push(result)
		multOutString += result.toString() + "\t"

		if (i == 5) {
			multOutString += "\t"
		}
	}

	addText(1, multOutString)
	
	// This bby right here might seem stupid, but trust me, she's perfect
	const sumIn = multOut.join("").split("").map(x => parseInt(x))

	const sumOutCalculation = sumIn.join(" + ")
	const sumOut = sumIn.reduce(function(a, b) { return a + b }, 0)

	addText(2, sumOutCalculation + " = " + sumOut)
	
	const modulusOut = sumOut % 10

	addText(3, sumOut + " % 10 = " + modulusOut)

	const convertOut = 10 - modulusOut

	addText(4, "10 - " + modulusOut + " = " + convertOut)

	// In the edge case where we get 10, show the specific 10-left explanation
	if (convertOut == 10) {
		document.getElementById("10left").hidden = false
	}

	addText(5, convertOut % 10)
}

function addText(nr, val) {
	document.getElementById("pre" + nr.toString()).innerText += val + "\n"
}

function reset() {
	document.getElementById("calculation").style.display = ""
	document.getElementById("pre1").innerText = ""
	document.getElementById("pre2").innerText = ""
	document.getElementById("pre3").innerText = ""
	document.getElementById("pre4").innerText = ""
	document.getElementById("pre5").innerText = ""
}
