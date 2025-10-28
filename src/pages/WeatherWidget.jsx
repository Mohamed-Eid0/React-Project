import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar.jsx";

const API_KEY = "0691c26c03182e08a143b8457a353fc2"; 

export default function WeatherWidget() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState("idle");

  const fetchWeather = async () => {
    try {
      setStatus("loading");
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(data);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-200 text-white p-10 flex flex-col items-center mt-16">
            
      
      <h1 className="text-3xl font-bold mb-6 mt-10 ">🌤️ Weather Widget</h1>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="px-4 py-2 rounded-xl text-white border border-white"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-300 px-4 py-2 rounded-xl hover:bg-blue-200"
        >
          Search
        </button>
      </div>

      {status === "loading" && <p>Fetching weather...</p>}
      {status === "error" && <p>City not found </p>}

      {weather && (
  <div className="bg-white text-blue-800 p-6 rounded-2xl shadow-lg w-72 text-center space-y-2">
          <h2 className="text-2xl font-bold">{weather.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="icon"
            className="mx-auto"
          />
          <p className="text-xl">{weather.main.temp} °C</p>
          <p className="capitalize">{weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
    </>
  );
}
