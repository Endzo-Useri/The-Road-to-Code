const grid = document.querySelector(".grid")
const startBtn = document.getElementById("start")
const score = document.getElementById("score")
let squares = []
let currentSnake = [2, 1, 0]
let direction = 1	
// let width = 10

function createGrid() {
	for (let i = 0; i < 100; i++) {
		const square = document.createElement("div")
		square.classList.add("square")
		grid.appendChild(square)
		squares.push(square)
	}
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add("snake"))

function move() {
	const tail = currentSnake.pop()
	squares[tail].classList.remove("snake")
	currentSnake.unshift(currentSnake[0] + direction)
	squares[currentSnake[0]].classList.add("snake")
}
move()

let timerId = setInterval(move, 1000)
// clearInterval(timerId)
function control(e) {
	if (e.keyCode === 39) {
			console.log('right pressed')
// 			direction = 1
	} else if (e.keyCode === 38) {
			console.log('up pressed')
// 			direction = -width
	} else if (e.keyCode === 37) {
			console.log('left pressed')
// 			direction = -1
	} else if (e.keyCode === 40) {
			console.log('down pressed')
// 			direction = +width
	}
}
// document.addEventListener('keyup', control)