// Define variables
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// Define event listener for form submission
form.addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent form from submitting
	addTask(input.value); // Add task to list
	input.value = ""; // Reset input field
});

// Define function for adding a task to the list
function addTask(task) {
	const li = document.createElement("li");
	li.classList.add("list-group-item");
	li.innerText = task;
	li.addEventListener("click", function() {
		li.classList.toggle("completed");
	});
	todoList.appendChild(li);
}