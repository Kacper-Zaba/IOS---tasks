const customMoviesList = [
  { title: "Inception", category: "sci-fi", rating: 8.8, watched: true, year: 2010 },
  { title: "The Dark Knight", category: "action", rating: 9.0, watched: false, year: 2008 },
  { title: "Interstellar", category: "sci-fi", rating: 8.6, watched: false, year: 2014 },
  { title: "Spirited Away", category: "animation", rating: 8.6, watched: true, year: 2001 },
  { title: "Gladiator", category: "drama", rating: 8.5, watched: false, year: 2000 }
];

const unwatchedMovies = customMoviesList.filter(movie => movie.watched === false);

const topRatedMovies = customMoviesList.filter(movie => movie.rating > 8.5);

const unwatchedTitles = unwatchedMovies.map(movie => movie.title);

console.log("=== RAPORT KATALOGU FILMÓW ===");
console.log("Wszystkie filmy nieobejrzane (tytuły):", unwatchedTitles);
console.log(`Liczba filmów z oceną powyżej 8.5: ${topRatedMovies.length}`);

function getAverageRatingOfUnwatched(moviesArray) {
  if (moviesArray.length === 0) return 0;
  
  const sumOfRatings = moviesArray.reduce((sum, movie) => sum + movie.rating, 0);
  const average = sumOfRatings / moviesArray.length;
  
  console.log("\n--- Analiza dodatkowa (Rozszerzenie) ---");
  console.log(`Średnia ocena filmów, których jeszcze nie oglądałeś: ${average.toFixed(2)} / 10`);
  
  const modernMovies = moviesArray.filter(movie => movie.year >= 2010);
  console.log(`W tym nieobejrzane filmy z roku 2010 lub nowsze:`, modernMovies.map(m => m.title));
}

getAverageRatingOfUnwatched(unwatchedMovies);
