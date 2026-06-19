async function fetchWeatherDetails(latitude = 50.28, longitude = 19.56) {
  try {
    console.log(`📡 Pobieranie danych pogodowych dla współrzędnych: [Lat: ${latitude}, Lon: ${longitude}]...`);
    
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

    const networkResponse = await fetch(apiUrl);

    if (!networkResponse.ok) {
      throw new Error(`Błąd serwera API! Status odpowiedzi: ${networkResponse.status}`);
    }

    const weatherData = await networkResponse.json();

    const currentTemp = weatherData.current.temperature_2m;
    const currentWind = weatherData.current.wind_speed_10m;
    const tempUnit = weatherData.current_units.temperature_2m;
    const windUnit = weatherData.current_units.wind_speed_10m;

    console.log("\n====== AKTUALNY RAPORT POGODOWY ======");
    console.log(`• Temperatura powietrza: ${currentTemp} ${tempUnit}`);
    console.log(`• Prędkość wiatru: ${currentWind} ${windUnit}`);
    console.log("=======================================");

    const thermalComfort = interpretTemperature(currentTemp);
    console.log(`Komentarz synoptyka: ${thermalComfort}`);

  } catch (networkError) {
    console.error("🚨 Krytyczny błąd pobierania danych pogodowych!");
    console.error(`Szczegóły problemu: ${networkError.message}`);
  }
}

function interpretTemperature(temp) {
  if (temp >= 25) return "☀️ Jest upalnie! Pamiętaj o nawodnieniu.";
  if (temp >= 15) return "🌤️ Pogoda jest komfortowa i przyjemna.";
  if (temp >= 5) return "🧥 Jest chłodno, warto założyć kurtkę.";
  return "❄️ Uwaga, temperatura bliska zeru lub ujemna. Zimno!";
}

fetchWeatherDetails();
