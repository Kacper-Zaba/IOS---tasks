const customTasksList = ["wykłady", "siłownia", "nauka programowania"];

function generateDailySchedule(userName, tasks = ["odpoczynek", "relaks"]) {
  let scheduleText = `=== PLAN DNIA DLA: ${userName.toUpperCase()} ===\n`;
  scheduleText += `Dzisiaj zaplanowano następującą liczbę zadań: ${tasks.length}.\n`;
  
  tasks.forEach((task, index) => {
    scheduleText += `${index + 1}. ${task}\n`;
  });

  scheduleText += addMotivationalFooter(tasks.length);

  return scheduleText;
}

function addMotivationalFooter(tasksCount) {
  if (tasksCount >= 3) {
    return "💪 To będzie bardzo intensywny dzień! Powodzenia, dasz radę!";
  } else {
    return "☕ Spokojny dzień. Idealny czas na regenerację i złapanie oddechu.";
  }
}

console.log("--- Pierwsze wywołanie (z własną listą zadań) ---");
const firstPlan = generateDailySchedule("Kacper", customTasksList);
console.log(firstPlan);

console.log("\n--- Drugie wywołanie (wykorzystujące parametr domyślny) ---");
const secondPlan = generateDailySchedule("Tomasz"); 
console.log(secondPlan);
