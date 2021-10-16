const grid = document.querySelector(".grid")
const startBtn = document.getElementById("start")
const score = document.getElementById("score")

function createGrid() {
	for (let i = 0; i < 100; i++) {
		const square = document.createElement("div")
		grid.appendChild(square)
	}
}