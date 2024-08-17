import React, {useState, useEffect} from 'react';
import useWeatherStore from '../../stores/useWeatherStore';
import loadingIcon from '../../assets/loading.svg';
import locationIcon from '../../assets/location.svg';
import humidityIcon from '../../assets/humidity.svg';
import temperatureIcon from '../../assets/temperature.svg';
import {getTimeInTimezone} from '../../utils/utils';

const WeatherPage = () => {
  const {
    city,
    country,
    weatherData,
    loading,
    error,
    setCity,
    setCountry,
    fetchWeather
  } = useWeatherStore();

  const [inputError, setInputError] = useState([]);

  useEffect(() => {
    if (error) {
      setInputError(pre => [...pre, 'city', 'country']);
    }
  }, [error]);

  const handleFetchWeather = () => {
    if (city === '') {
      setInputError(pre => [...pre, 'city']);
      return;
    }
    if (country === '') {
      setInputError(pre => [...pre, 'country']);
      return;
    }
    setInputError([]);
    fetchWeather(city, country);
  };

  const getInputStyle = (input) => inputError.includes(input) ? '!border-errorRed' : 'border';

  const getWeatherIcon = (weather) => {
    const basePath = window.location.pathname.includes('github.io')
      ? `${window.location.pathname}assets/`
      : '/analysis-react-vite-tailwind-zustand/src/assets/';

    let iconFileName = '';

    switch (weather) {
      case 'Clear':
        iconFileName = 'clear-day.svg';
        break;
      case 'Clouds':
        iconFileName = 'cloudy.svg';
        break;
      case 'Rain':
        iconFileName = 'rain.svg';
        break;
      default:
        iconFileName = 'not-available.svg';
    }
    return `${basePath}${iconFileName}`;
  }


  return (
    <>
      <div className="text-black text-4xl">Today&rsquo;s Weather</div>
      <div className="mt-10 flex items-center">
        <div className="mr-[14px]">City</div>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onClick={() => setInputError(pre => pre.filter(i => i !== 'city'))}
          className={"w-[132px] h-10 flex-shrink-0 rounded border-[1px] p-2 mr-[14px] " + (city && "border-themeBlue ") + getInputStyle('city')}
        />
        <div className="mr-[14px]">Country</div>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onClick={() => setInputError(pre => pre.filter(i => i !== 'country'))}
          className={"w-[132px] h-10 flex-shrink-0 rounded border-[1px] p-2 mr-[14px] " + (country && "border-themeBlue ") + getInputStyle('country')}
        />
        <button onClick={handleFetchWeather} className={"flex justify-center items-center bg-themeBlue text-white w-[138px] h-10 flex-shrink-0 rounded "}>
          Search
        </button>
      </div>
      {error && <p className="ml-[42px] mt-3 text-errorRed">Not found the city or country</p>}
      {(weatherData || loading) && (
        <div className="flex flex-col justify-between w-[542px] h-[400px] mt-8 text-themeBlue flex-shrink-0 border-[1px] border-[rgba(0, 0, 0, 0.20)] bg-white p-8 rounded-lg">
          {loading ? <img src={loadingIcon} alt="loading" className="w-16 h-16 m-auto" /> :
            weatherData === 'NA' ? <div className="m-auto text-black">No Data</div> :
              <>
                <div id="upper" className="flex justify-between items-center">
                  <span className="flex text-xl font-bold">
                    <img src={locationIcon} alt="location" className="w-6 h-6 mr-1" />
                    {weatherData.name}
                  </span>
                  <span className="flex">
                    Today {getTimeInTimezone(weatherData.timezone)}
                  </span>
                </div>
                <div id="content" className="flex m-auto">
                  <img src={getWeatherIcon(weatherData.weather[0].main)} alt="weather" className="w-32 h-32 flex-shrink-0 mr-[11px]" />
                  <div id="info" className="flex flex-col">
                    <span className="text-[64px] h-[74px] leading-none">{Math.round(weatherData.main.temp)}°C</span>
                    <span className="text-2xl">{weatherData.weather[0].main}</span>
                    <span>{weatherData.weather[0].description}</span>
                  </div>
                </div>
                <div id="lower" className="flex justify-between items-center">
                  <span className="flex">
                    <img src={humidityIcon} alt="humidity" className="w-6 h-6 mr-1" />
                    Humidity: {weatherData.main.humidity}%
                  </span>
                  <span className="flex">
                    <img src={temperatureIcon} alt="temperature" className="w-6 h-6 mr-1" />
                    Temperature: {Math.round(weatherData.main.temp_min)}°C ~ {Math.round(weatherData.main.temp_max)}°C
                  </span>
                </div>
              </>}
        </div>
      )}
    </>
  );
};

export default WeatherPage;
