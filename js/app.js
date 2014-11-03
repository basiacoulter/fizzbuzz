for (i=1; i<101; i++) {
	var p = document.createElement("p");
	p.textContent = i;
	document.getElementById("numbers").appendChild(p);
	if (i%3 == 0) {
		p.textContent = "fizz";
	} else if (i%5 == 0) {
		p.textContent = "buzz";
	}
}