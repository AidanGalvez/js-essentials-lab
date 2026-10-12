import { useState, useCallback } from 'react';
import SelectCity from './components/SelectCity';
import Weather from './components/Weather';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState(null);

  const citySelectHandler = useCallback(async(city)=>{
    setIsLoading(true);
    setWeather(null);
    setError(null);

    try{
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=ad744ab327071545b7f5da447ec6816e&units=imperial`
      );

      if (!response.ok){
        if (response.status === 404)
          throw new Error(`City Not Found!`);
        else if (response.status === 401)
          throw new Error(`Non-Valid API!`);
        else
          throw new Error(`${response.status}`);
      }

      const data = await response.json();

      setWeather({
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      });

    } catch(err){
      setError(err.message);
    }

    setIsLoading(false);
  
  },[]);

  let content = <p>No city selected.</p>;
  if(isLoading){
    content = <p>Loading weather</p>;
  }
  else if(hasError){
    content = <p>Error: {hasError}</p>;
  }
  else if (weather){
    content = (<Weather weather={weather}></Weather>);
  }
  return (
    <main className="container">
      <section>
        <h1>Search for Weather</h1>
        <SelectCity onSelectedCity={citySelectHandler} />
      </section>
      <section>{content}</section>
    </main>
  );
}

export default App;