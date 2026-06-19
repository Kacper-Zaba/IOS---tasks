const personProfile = {
  firstName: "Kacper",
  lastName: "Żaba",
  homeCity: "Olkusz",
  userAge: 25,
  fieldOfStudy: "Informatyka",
  favoriteLanguage: "JavaScript",
  hobby: "rozwój aplikacji mobilnych"
};

console.log("Użytkownik: " + personProfile.firstName + " " + personProfile.lastName);

const descriptiveBio = `Student ${personProfile.firstName} ${personProfile.lastName} pochodzi z miasta ${personProfile.homeCity} i studiuje kierunek: ${personProfile.fieldOfStudy}.`;
console.log(descriptiveBio);

let maturityStatus = "";
if (personProfile.userAge >= 18) {
  maturityStatus = `Użytkownik jest pełnoletni (ma ${personProfile.userAge} lat) i posiada pełny dostęp do profilu.`;
} else {
  maturityStatus = `Użytkownik ma ${personProfile.userAge} lat i jest niepełnoletni.`;
}
console.log(maturityStatus);

function verifyDeveloperSpecs(profile) {
  if (profile.favoriteLanguage === "JavaScript") {
    return `Cześć ${profile.firstName}! Super, że Twoim ulubionym językiem jest ${profile.favoriteLanguage}. Twój cel (${profile.hobby}) jest teraz o wiele prostszy do osiągnięcia!`;
  } else {
    return `Witaj ${profile.firstName}. Powodzenia w rozwijaniu pasji, jaką jest ${profile.hobby}.`;
  }
}

const customGreeting = verifyDeveloperSpecs(personProfile);
console.log(customGreeting);
