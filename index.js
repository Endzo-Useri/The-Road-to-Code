const grid = document.querySelector(".grid")
const startBtn = document.getElementById("start")
const score = document.getElementById("score")
let squares = []
let currentSnake = [2, 1, 0]
let direction = 1	
let width = 10

function createGrid() {
	//create 100 of these elements with a for loop
	for (let i = 0; i < 100; i++) {
		//create element
		const square = document.createElement("div")
    //add styling to the element
		square.classList.add("square")
    //put the element into our grid
		grid.appendChild(square)
    //push it into a new squares array
		squares.push(square)
	}
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add("snake"))

function move() {
	if (
		(currentSnake[0] + width >= 100 && direction === 10) || //if snake has hit bottom
		(currentSnake[0] % width === 9 && direction === 1) || //if snake has hit right wall
		(currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
		()//if snake has hit top
	)
	return clearInterval(timerId)





  //remove last element from our currentSnake array
	const tail = currentSnake.pop()
	//remove styling from last element
	squares[tail].classList.remove("snake")
	//add square in direction we are heading
	currentSnake.unshift(currentSnake[0] + direction)
	//add styling so we can see it
	squares[currentSnake[0]].classList.add("snake")
}
move()

let timerId = setInterval(move, 1000)
clearInterval(timerId)

// 39 is right arrow
// 38 is for the up arrow
// 37 is for the left arrow
// 40 is for the down arrow

function control(e) {
	if (e.keyCode === 39) {
			console.log('right pressed')
			direction = 1
	} else if (e.keyCode === 38) {
			console.log('up pressed')
			direction = -width
	} else if (e.keyCode === 37) {
			console.log('left pressed')
			direction = -1
	} else if (e.keyCode === 40) {
			console.log('down pressed')
			direction = +width
	}
}
document.addEventListener('keydown', control)