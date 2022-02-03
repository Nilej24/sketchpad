const container = document.querySelector(".container");
container.style.width = 16 * 16 + "px";

for(let x = 0; x < 16; x++)
	for(let y = 0; y < 16; y++) {
	
		const div = document.createElement("div");
		container.append(div);
	
	}

console.log("js working");