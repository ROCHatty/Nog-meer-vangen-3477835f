function setError(msg) {
	document.querySelector("h4").innerText = 'Een error van type: "'+msg+'"';
}

function gooiButton() {
	try {
		bal.gooi();
	} catch (e) {
		if (e instanceof TypeError) {
			setError("TypeError");
		} else if (e instanceof  RangeError) {
			setError("RangeError");
		} else if (e instanceof  EvalError) {
			setError("EvalError");
		} else {
			document.querySelector("h4").innerText = e;
		}
	}
}

function vangButton() {
    try {
		bal.vang();
	} catch (e) {
		if (e instanceof TypeError) {
			setError("TypeError");
		} else if (e instanceof  RangeError) {
			setError("RangeError");
		} else if (e instanceof  EvalError) {
			setError("EvalError");
		} else {
			document.querySelector("h4").innerText = e;
		}
	}
}

function resetButton() {
    bal.reset();
}


var bal = {
    canvasBal: constructBal(),
    balPositie: "links",

    gooi: function () {
        if (this.balPositie != "links") {
            throw Error("bal in verkeerde positie")
        }
        this.draw(300, 50);
        this.balPositie = "midden";
    },

    vang: function () {
        if (this.balPositie != "midden") {
            throw Error("bal in verkeerde positie")
        }
        this.draw(500, 250);
        this.balPositie = "rechts";
    },

    reset: function () {
        this.draw(100, 250);
        this.balPositie = "links";
    },

    draw: function (x, y) {
        this.canvasBal.clearRect(0, 0, 600, 300);
        this.canvasBal.beginPath();
        this.canvasBal.arc(x, y, 50, 0, 2 * Math.PI);
        this.canvasBal.closePath();
        this.canvasBal.fill();
    },

    referenceErrorType: function() {
        this.bestaatNiet();
    },

    typeErrorType: function() {
        const a = 10;
        a = 20;
    },
}

function constructBal() {
    let bal = document.getElementById("bal").getContext("2d");
    bal.fillStyle = "red";
    bal.beginPath();
    bal.arc(100, 250, 50, 0, 2 * Math.PI);
    bal.closePath();
    bal.fill();
    return bal
}