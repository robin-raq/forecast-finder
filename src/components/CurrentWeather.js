import React, { useContext, useState } from 'react'
import Context from "../Context"
import Hourly from "./Hourly"
import Daily from "./Daily"


const CurrentWeather = () => {
    const { weather, location } = useContext(Context)
    const { daily, hourly, current } = weather
    // console.log(weather)
    // console.log(hourly)
    console.log(daily)

    const [toggle, setToggle] = useState(false)

    const hourlyData = hourly.slice(1, 8)
    // console.log(hourlyData)
    const formatHourly = () => {
        return hourlyData.map((reading, index) => <Hourly hour={reading.dt} key={index} temp={reading.temp} weather={reading.weather[0]} />)
    }

    const formatDaily = () => {
        return daily.map((reading, index) => < Daily day={reading.dt} key={index} temp={reading.temp.day} weather={reading.weather[0]} />)
    }
    const toggleDisplay = () => {
        setToggle(!toggle)
        console.log(toggle)
    }

    return (

        <>
            <article className="cf ph3 ph5-ns pv5">
                <header className="fn fl-ns w-50-ns pr4-ns">
                    <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2"> Today's Forecast </h1>
                    <h4 className="f6 fw6">Location: <span>{location}</span> </h4>
                    <div className="fn fl-ns w-50-ns">
                        <dl className="f6 lh-title mv2">
                            <dt className="dib b">Timezone:&nbsp; </dt>
                            <dd className="dib ml0 gray"> <span>{weather.timezone}</span></dd>
                        </dl>
                        <dl className="f6 lh-title mv2">
                            <dt className="dib b">Temperature:&nbsp;</dt>
                            <dd className="dib ml0 gray"> <span> {parseInt((weather.current.temp * 9 / 5) + 32)} °F</span></dd>
                        </dl>
                        <dl className="f6 lh-title mv2">
                            <dt className="dib b">High:&nbsp;</dt>
                            <dd className="dib ml0 gray"> <span>{parseInt((daily[0].temp.max * 9 / 5) + 32)} °F</span></dd>
                        </dl>
                        <dl className="f6 lh-title mv2">
                            <dt className="dib b">Low:&nbsp;</dt>
                            <dd className="dib ml0 gray"> <span>{parseInt((daily[0].temp.min * 9 / 5) + 32)} °F</span></dd>
                        </dl>
                        <dl className="f6 lh-title mv2">
                            <dt className="dib b">Description:&nbsp;</dt>
                            <dd className="dib ml0 gray"> <span>{current.weather[0].description}</span></dd>
                        </dl>
                        <div className="pv3">
                            <a onClick={toggleDisplay} className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray bg-light-pink" href="#0"> {!toggle ? "See 7-day Forecast" : "See Hourly Forecast"}</a>
                        </div>
                    </div>

                </header>
                <div className="fn fl-ns w-50-ns" style={{ display: toggle ? 'none' : 'block' }}>
                    <h2> Hourly Forecast</h2>

                    <div>

                        {formatHourly()}

                    </div>

                </div>

                <div className="fn fl-ns w-50-ns" style={{ display: toggle ? 'block' : 'none' }}>
                    <h2> 7-day Forecast</h2>

                    <div>

                        {formatDaily()}

                    </div>

                </div>


            </article>

        </>

    )
}

export default CurrentWeather

