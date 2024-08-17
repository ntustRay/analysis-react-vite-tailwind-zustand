import {create} from 'zustand';

const APIKEY = import.meta.env.VITE_OPENWEATHER_API_KEY

const useWeatherStore = create((set, get) => ({
  city: 'Taipei',
  country: 'TW',
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

export default useWeatherStore;
