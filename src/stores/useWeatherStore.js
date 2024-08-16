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
    //to do
  },
}));

export default useWeatherStore;
