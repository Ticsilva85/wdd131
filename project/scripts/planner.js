
const STORAGE_KEY = "studyPlannerTasks";

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let currentFilter = "all";

const form = document.getElementById("task-form");
const list = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");
const filterButtons = document.querySelectorAll(".filter-btn");

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function createTaskId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function renderTasks() {
    list.innerHTML = "";

    const visibleTasks = tasks.filter(task => {
        if (currentFilter === "pending") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
    });

    emptyMessage.style.display = visibleTasks.length === 0 ? "block" : "none";

    visibleTasks.forEach(task => {
        const item = document.createElement("li");
        item.className = `task-item priority-${task.priority}${task.completed ? " completed" : ""}`;

        item.innerHTML = `
            <label class="task-check">
                <input type="checkbox" ${task.completed ? "checked" : ""}>
                <span></span>
            </label>
            <div class="task-info">
                <strong>${task.subject}</strong>
                <p>${task.name}</p>
                ${task.dueDate ? `<span class="task-date">Due: ${task.dueDate}</span>` : ""}
            </div>
            <span class="task-priority">${task.priority}</span>
            <button class="delete-btn" aria-label="Delete task">&times;</button>
        `;

        item.querySelector("input[type='checkbox']").addEventListener("change", () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        item.querySelector(".delete-btn").addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
        });

        list.appendChild(item);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const subject = document.getElementById("subject").value.trim();
    const name = document.getElementById("task-name").value.trim();
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    if (!subject || !name) return;

    tasks.push({
        id: createTaskId(),
        subject,
        name,
        dueDate,
        priority,
        completed: false
    });

    saveTasks();
    renderTasks();
    form.reset();
});

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

renderTasks();