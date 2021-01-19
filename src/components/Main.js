import React, { useState } from 'react'
import axios from "axios";
import Context from "../Context.js"
import Header from "./Header.js"
import Content from "./Content.js"
import WeatherSearch from "./WeatherSearch.js"
import CurrentWeather from "./CurrentWeather.js"
import Geocode from "react-geocode";


Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
const Main = () => {
    const [weather, setWeather] = useState()
    const [location, setLocation] = useState()
    const getGeoCodes = (e) => {
        e.preventDefault()
        const searchLocation = e.target.elements.searchLocation.value
        e.target.reset();
        Geocode.fromAddress(`${searchLocation}`).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log("from google", lat, lng);
                setLocation(searchLocation)
                api_request(lat, lng)

            },
            error => {
                console.error(error);
            }
        );

    }

    const api_request = async (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        const request = axios.get(url)
        const response = await request
        // console.log("from weather", response)
        setWeather(response.data)
    }

    return (
        <>
            <Header />
            <Content>
                <Context.Provider value={{ getGeoCodes, weather, location }}>
                    <WeatherSearch />
                    {weather && <CurrentWeather />}
                </Context.Provider>
            </Content>
        </>
    )
}

export default Main
