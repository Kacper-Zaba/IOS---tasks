const PASSING_THRESHOLD = 3.0;

function processStudentGrades(gradesArray) {
  if (gradesArray.length === 0) {
    return { average: 0, status: "niezaliczone", gradeWord: "brak ocen" };
  }

  const sumOfGrades = gradesArray.reduce((total, grade) => total + grade, 0);
  const calculatedAverage = sumOfGrades / gradesArray.length;

  const finalStatus = calculatedAverage >= PASSING_THRESHOLD ? "zaliczone" : "niezaliczone";

  let gradeClassification = "";
  if (calculatedAverage >= 4.5) {
    gradeClassification = "bardzo dobry";
  } else if (calculatedAverage >= 3.5) {
    gradeClassification = "dobry";
  } else if (calculatedAverage >= 3.0) {
    gradeClassification = "dostateczny";
  } else {
    gradeClassification = "niedostateczny";
  }

  const qualifiesForScholarship = calculatedAverage >= 4.2;

  return {
    average: Number(calculatedAverage.toFixed(2)),
    status: finalStatus,
    wordGrade: gradeClassification,
    scholarship: qualifiesForScholarship
  };
}

const studentA_Grades = [3.5, 4.0, 5.0, 3.5, 4.5]; 
const studentB_Grades = [2.0, 3.0, 2.5, 3.0];

const resultA = processStudentGrades(studentA_Grades);
const resultB = processStudentGrades(studentB_Grades);

console.log("=== RAPORT STUDENTA A ===");
console.log(resultA);
console.log(`Podsumowanie tekstowe: Student uzyskał średnią ${resultA.average} (ocena: ${resultA.wordGrade}). Status: ${resultA.status.toUpperCase()}.`);
console.log(`Czy przysługuje stypendium: ${resultA.scholarship ? "🏅 TAK" : "NIE"}`);

console.log("\n=== RAPORT STUDENTA B ===");
console.log(resultB);
console.log(`Podsumowanie tekstowe: Student uzyskał średnią ${resultB.average} (ocena: ${resultB.wordGrade}). Status: ${resultB.status.toUpperCase()}.`);
