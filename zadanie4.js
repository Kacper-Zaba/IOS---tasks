const holdsLaptop = true;
const holdsCharger = false;
const holdsNotebook = true;
const sessionType = "laboratorium"; 

const holdsStudentID = true;
const phoneBatteryLevel = 15; 

let isReadyForClasses = false;

if (sessionType === "laboratorium") {
  if (holdsLaptop) {
    isReadyForClasses = true;
  } else {
    isReadyForClasses = false;
  }
} else {
  if (holdsLaptop || holdsNotebook) {
    isReadyForClasses = true;
  } else {
    isReadyForClasses = false;
  }
}

const readinessReport = isReadyForClasses ? "STAN: Student jest GOTOWY na zajęcia." : "STAN: Student NIE JEST GOTOWY na zajęcia.";
console.log(readinessReport);

holdsLaptop && !holdsCharger && console.log("⚠️ Ostrzeżenie: Masz laptopa, ale brak ładowarki! Bateria może paść podczas zajęć.");

if (sessionType === "laboratorium") {
  console.log("📋 Informacja: Dzisiaj masz laboratoria – pamiętaj o przygotowaniu środowiska programistycznego.");
} else if (sessionType === "wyklad") {
  console.log("📋 Informacja: Dzisiaj masz wykład – przygotuj coś do robienia notatek.");
} else {
  console.log("📋 Informacja: Standardowy dzień na uczelni.");
}

console.log("\n--- Analiza dodatkowa (Rozszerzenie) ---");

if (!holdsStudentID) {
  console.log("🚨 Krytyczny błąd: Zapomniałeś legitymacji studenckiej!");
} else {
  console.log("✅ Legitymacja studencka znajduje się w portfelu.");
}

(phoneBatteryLevel < 20) && console.log(`🔋 Ostrzeżenie o telefonie: Twój poziom baterii to tylko ${phoneBatteryLevel}%. Weź powerbank!`);
