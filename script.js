function calculate() {
	reset()

	const nr = document.getElementById("numbersInput").value

	var nrOut = ""
	iterate(function(i) {
		nrOut += nr.charAt(i) + "\t"
	})

	addText(1, nrOut)
	addText(1, "*	*	*	*	*	*	*	*	*")
	addText(1, "2	1	2	1	2	1	2	1	2")
	addText(1, "=	=	=	=	=	=	=	=	=")

	var multOut = []
	var multOutString = ""

	iterate(function(i) {
		const multiplier = (i + 1) % 2 == 0 ? 1 : 2
		const result = parseInt(nr.charAt(i)) * multiplier
		multOut.push(result)
		multOutString += result.toString() + "\t"
	})

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

	addText(5, convertOut)
}

function iterate(closure) {
	for (var i = 0; i < 9; i++) {
		closure(i)
	}
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