const resetButton = document.querySelector("button");
const container = document.querySelector(".container");

let squareSize;

function reset(sideSquares) {

	document.querySelectorAll(".container > *").forEach(square => square.remove());

	squareSize = 512 / sideSquares;

	for(let x = 0; x < sideSquares; x++)
		for(let y = 0; y < sideSquares; y++) {
		
			const div = document.createElement("div");
			div.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`;
			div.addEventListener("mouseover", function (ev) {
			
				const rgb = ev.target.style.backgroundColor.slice(4, -1).split(", ");
				const brightness = +rgb[0];

				if(brightness < 255) {
					const newBr = brightness + 32;
					ev.target.style.backgroundColor = `rgb(${newBr}, ${newBr}, ${newBr})`;
				}
			
			});
			container.append(div);
		
		}

}

function promptReset() {

	const sideSquares = +prompt("enter the amount of squares per side. it's gotta be between 1 and 100", (512 / squareSize));

	if(!sideSquares || sideSquares < 1 || sideSquares > 100)
		console.log("enter a size within the range");
	else
		reset(sideSquares);

}

resetButton.onclick = promptReset;
document.addEventListener("keydown", ev => {if(ev.key == " ") promptReset();})

reset(16);