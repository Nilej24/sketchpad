const resetButton = document.querySelector("button");
const container = document.querySelector(".container");

function reset(sideSquares) {

	document.querySelectorAll(".container > *").forEach(square => square.remove());

	const squareSize = 512 / sideSquares;

	for(let x = 0; x < sideSquares; x++)
		for(let y = 0; y < sideSquares; y++) {
		
			const div = document.createElement("div");
			div.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`;
			div.addEventListener("mouseover", function (ev) {
			
				ev.target.style.backgroundColor = "black";
			
			});
			container.append(div);
		
		}

}

function promptReset() {

	const sideSquares = +prompt("enter the amount of squares per side. it's gotta be between 1 and 100", "16");

	if(!sideSquares || sideSquares < 1 || sideSquares > 100)
		console.log("enter a size within the range");
	else
		reset(sideSquares);

}

resetButton.onclick = promptReset;
document.addEventListener("keydown", ev => {if(ev.key == " ") promptReset();})

reset(16);