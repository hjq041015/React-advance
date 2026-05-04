const API_KEY = "2a488c0ee4d76c1427ef1d40f9dae172";

export async function getCurrentWeather(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    );

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getForecastWeather(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    );

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
