const universitySchedule = [
  { day: "poniedziałek", subject: "Systemy Operacyjne", room: "C02", online: false },
  { day: "wtorek", subject: "Programowanie Swift", room: "online", online: true },
  { day: "czwartek", subject: "Architektura iOS", room: "A10", online: false },
  { day: "piątek", subject: "Projekt Zespołowy", room: "online", online: true }
];

function getLessonsByDay(schedule, targetDay) {
  return schedule.filter(lesson => lesson.day.toLowerCase() === targetDay.toLowerCase());
}

function generateLessonDescriptions(lessonsList) {
  return lessonsList.map(lesson => {
    const classType = lesson.online ? "Zajęcia zdalne (Online)" : "Zajęcia stacjonarne (Na uczelni)";
    return `Przedmiot: ${lesson.subject} — Sala: ${lesson.room} — Tryb: ${classType}`;
  });
}

function filterClassesByMode(schedule, getOnlineOnly) {
  return schedule.filter(lesson => lesson.online === getOnlineOnly);
}

const totalClassesInWeek = universitySchedule.length;

console.log("=== OGÓLNE STATYSTYKI PLANERA ===");
console.log(`Łączna liczba spotkań w tym tygodniu: ${totalClassesInWeek}`);

console.log("\n=== RAPORT DLA WYBRANEGO DNIA (np. poniedziałek) ===");
const mondayLessons = getLessonsByDay(universitySchedule, "poniedziałek");
const mondayDescriptions = generateLessonDescriptions(mondayLessons);

if (mondayDescriptions.length > 0) {
  mondayDescriptions.forEach(desc => console.log(desc));
} else {
  console.log("Brak zaplanowanych zajęć w tym dniu! 🎉");
}

console.log("\n=== ROZSZERZENIE WŁASNE: Lista wyłącznie zajęć online ===");
const onlineOnlyClasses = filterClassesByMode(universitySchedule, true);
const onlineDescriptions = generateLessonDescriptions(onlineOnlyClasses);
onlineDescriptions.forEach(desc => console.log(`• ${desc}`));
