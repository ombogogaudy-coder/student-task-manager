let assignments = [];

function addAssignment() {
    const input = document.getElementById("assignmentInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter an assignment!");
        return;
    }

    assignments.push({
        name: task,
        completed: false
    });

    input.value = "";
    displayAssignments();
}

function displayAssignments() {
    const list = document.getElementById("assignmentList");
    const counter = document.getElementById("progress");

    list.innerHTML = "";

    assignments.forEach((task, index) => {
        const item = document.createElement("li");

        item.textContent = task.name;

        item.onclick = function () {
            assignments[index].completed =
                !assignments[index].completed;
            displayAssignments();
        };

        if (task.completed) {
            item.style.textDecoration = "line-through";
        }

        list.appendChild(item);
    });

    const completed = assignments.filter(
        task => task.completed
    ).length;

    counter.textContent =
        completed + " of " + assignments.length + " completed";
}
