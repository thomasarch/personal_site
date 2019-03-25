const heading = document.querySelector('.container h1');
const bubble = document.querySelector('.bubble');


const color_list = ['blue', 'red', 'yellow', 'blue', 'green', 'red']
const array = [...heading.innerHTML]
let newInnerHTML = ""
array.forEach(letter => {
	if (letter != " ") {
		letter = `<span>${letter}</span>`
	} else
	{
		letter
	}
	newInnerHTML = newInnerHTML.concat(letter)
})
heading.innerHTML = newInnerHTML
const letters = document.querySelectorAll('.container span')


function addColors() {
	letters.forEach((letter, index) => {
		letter.classList.add(color_list[index % 6])
	});
}

function removeColors() {
	letters.forEach((letter, index) => {
		letter.classList.remove(color_list[index % 6])
	});
}

function isPressed() {
	console.log('pressed')
	bubble.classList.add('pressed')
}

function unPressed() {
	console.log('unpressed')
	bubble.classList.remove('pressed')
}

bubble.addEventListener('mouseover', addColors)
bubble.addEventListener('mouseout', removeColors)
bubble.addEventListener('mousedown', isPressed)
bubble.addEventListener('mouseup', unPressed)



