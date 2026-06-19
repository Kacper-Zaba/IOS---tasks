const initialTodos = [
  { id: 1, title: "Zaimplementować interfejs mobilny", done: false, priority: "high" },
  { id: 2, title: "Przejrzeć dokumentację Swift", done: true, priority: "medium" },
  { id: 3, title: "Skonfigurować repozytorium Git", done: false, priority: "high" }
];

function addTodoItem(todosList, newTitle, taskPriority = "medium") {
  const newTodo = {
    id: todosList.length > 0 ? Math.max(...todosList.map(t => t.id)) + 1 : 1,
    title: newTitle,
    done: false,
    priority: taskPriority
  };
  return [...todosList, newTodo];
}

function completeTodoItem(todosList, targetId) {
  return todosList.map(todo => {
    if (todo.id === targetId) {
      return { ...todo, done: true };
    }
    return todo;
  });
}

function getUncompletedTodos(todosList) {
  return todosList.filter(todo => todo.done === false);
}

function getTodosByPriority(todosList, searchPriority) {
  return todosList.filter(todo => todo.priority === searchPriority);
}

console.log("=== 1. STAN POCZĄTKOWY ===");
console.log(initialTodos);

console.log("\n=== 2. DODANIE NOWEGO ZADANIA (Niemutowalne) ===");
const updatedListAfterAdd = addTodoItem(initialTodos, "Przygotować raport końcowy", "low");
console.log(updatedListAfterAdd);

console.log("\n=== 3. ZMIANA STATUSU ZADANIA ID: 1 (Niemutowalne) ===");
const updatedListAfterComplete = completeTodoItem(updatedListAfterAdd, 1);
console.log(updatedListAfterComplete);

console.log("\n=== 4. FILTROWANIE NIEWYKONANYCH ZADAŃ ===");
const activeTasks = getUncompletedTodos(updatedListAfterComplete);
console.log(activeTasks);

console.log("\n=== 5. ROZSZERZENIE WŁASNE: Zadania o wysokim priorytecie (high) ===");
const highPriorityTasks = getTodosByPriority(updatedListAfterComplete, "high");
console.log(highPriorityTasks);

console.log("\n=== SPRAWDZENIE: Czy oryginalna lista na początku kodu pozostała nienaruszona? ===");
console.log(initialTodos[0].done === false ? "✅ TAK, dane są bezpieczne (czysty kod)." : "❌ NIE, dane zostały nadpisane.");
