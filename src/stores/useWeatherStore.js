import {create} from 'zustand';

const APIKEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const useWeatherStore = create((set, get) => ({
  city: '',
  country: '',
  weatherData: null,
  loading: false,
  error: null,

  setCity: (city) => set({city}),
  setCountry: (country) => set({country}),

  fetchWeather: async () => {
    set({loading: true, error: null});

    const state = get();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${state.city},${state.country}&units=metric&appid=${APIKEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (response.ok) {
        set({weatherData: data});
      } else {
        set({error: data.message});
        set({weatherData: 'NA'});
      }
    } catch (err) {
      console.error(err);
      set({error: 'Failed to fetch weather data.'});
    } finally {
      set({loading: false});
    }
  },
}));

// Get user's local coordinates
navigator.geolocation.getCurrentPosition(
  async (position) => {
    const {latitude, longitude} = position.coords;
    // Reverse geocoding to get the city and country based on coordinates
    try {
      const response = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${APIKEY}`);
      const data = await response.json();
      const {name, country} = data[0];
      useWeatherStore.getState().setCity(name);
      useWeatherStore.getState().setCountry(country);
      useWeatherStore.getState().fetchWeather();
    } catch (error) {
      console.error(error);
    }
  },
  (error) => {
    console.error(error);
  }
);

export default useWeatherStore;
