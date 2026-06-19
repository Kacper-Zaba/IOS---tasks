const customActivities = [
  { type: "bieg", minutes: 40, calories: 360 },
  { type: "rower", minutes: 45, calories: 380 },
  { type: "spacer", minutes: 25, calories: 110 },
  { type: "siłownia", minutes: 55, calories: 420 }
];

const totalMinutes = customActivities.reduce((sum, activity) => sum + activity.minutes, 0);

const totalCalories = customActivities.reduce((sum, activity) => sum + activity.calories, 0);

const longActivities = customActivities.filter(activity => activity.minutes > 30);
const longActivitiesTitles = longActivities.map(activity => activity.type);

const activityReport = `
====== RAPORT AKTYWNOŚCI SPORTOWEJ ======
• Łączny czas spędzony na treningach: ${totalMinutes} minut
• Całkowita liczba spalonych kalorii: ${totalCalories} kcal
• Treningi trwające powyżej 30 minut: ${longActivitiesTitles.join(", ")}
=========================================`;

console.log(activityReport);

function findMostIntenseWorkout(activitiesArray) {
  if (activitiesArray.length === 0) return;

  const mostCaloric = activitiesArray.reduce((max, activity) => {
    return activity.calories > max.calories ? activity : max;
  }, activitiesArray[0]);

  const caloriesPerMinute = totalCalories / totalMinutes;

  console.log("--- Analiza dodatkowa (Rozszerzenie) ---");
  console.log(`🔥 Najbardziej kaloryczny trening to: ${mostCaloric.type.toUpperCase()} (${mostCaloric.calories} kcal).`);
  console.log(`📊 Średnie spalanie podczas całego tygodnia: ${caloriesPerMinute.toFixed(2)} kcal / minutę.`);
}

findMostIntenseWorkout(customActivities);
