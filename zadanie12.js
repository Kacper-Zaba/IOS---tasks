const addressBookContacts = [
  { name: "Kamil Nowak", phone: "600-111-222", city: "Kraków", favorite: true },
  { name: "Karolina Żaba", phone: "700-333-444", city: "Olkusz", favorite: true },
  { name: "Michał Kowalski", phone: "500-444-555", city: "Kraków", favorite: false },
  { name: "Ewa Malek", phone: "800-666-777", city: "Warszawa", favorite: false }
];

function getContactsByCity(contacts, targetCity) {
  return contacts.filter(contact => contact.city.toLowerCase() === targetCity.toLowerCase());
}

function getFavoriteContacts(contacts) {
  return contacts.filter(contact => contact.favorite === true);
}

function formatContactDisplay(contactsList) {
  return contactsList.map(contact => `${contact.name} — ${contact.phone}`);
}

function searchContactsByNameFragment(contacts, nameFragment) {
  return contacts.filter(contact => 
    contact.name.toLowerCase().includes(nameFragment.toLowerCase())
  );
}

console.log("=== PRZYPADEK 1: Kontakty z Krakowa (Sformatowane) ===");
const krakowContacts = getContactsByCity(addressBookContacts, "Kraków");
const formattedKrakow = formatContactDisplay(krakowContacts);
console.log(formattedKrakow);

console.log("\n=== PRZYPADEK 2: Ulubione kontakty (Sformatowane) ===");
const favorites = getFavoriteContacts(addressBookContacts);
const formattedFavorites = formatContactDisplay(favorites);
console.log(formattedFavorites);

console.log("\n=== PRZYPADEK 3: Wynik rozszerzenia (Szukanie frazy 'ka') ===");
const searchResults = searchContactsByNameFragment(addressBookContacts, "ka");
const formattedSearch = formatContactDisplay(searchResults);
console.log(formattedSearch);
