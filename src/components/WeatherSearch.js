import React, { useContext } from 'react'
import Context from "../Context"


const WeatherSearch = () => {
    const { getGeoCodes } = useContext(Context)
    return (
        <div className="pa4-l">
            <form onSubmit={getGeoCodes} className="bg-light-blue mw7 center pa4 br2-ns ba b--black-10">
                <fieldset className="cf bn ma0 pa0">
                    <legend className="pa0 f5 f4-ns mb3 black-80">Get your daily and 7-day forecast</legend>
                    <div className="cf">
                        <input name="searchLocation" autoComplete="off" className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" type="search" placeholder="Enter Address or Zip" />
                        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Get Forecast &rarr;" />
                    </div>
                </fieldset>
            </form>
        </div>

    )
}

export default WeatherSearch
