let count = 0;

const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

incrementButton.addEventListener('click', () => {
	count++;
	updateCount();
});

decrementButton.addEventListener('click', () => {
	count--;
	updateCount();
});

resetButton.addEventListener('click', () => {
	count = 0;
	updateCount();
});

function updateCount() {
	countElement.innerText = count;
}