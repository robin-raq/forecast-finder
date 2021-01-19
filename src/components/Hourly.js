import React from 'react'
const moment = require('moment');

const Hourly = ({ hour, temp, weather }) => {
    let date = new Date(hour * 1000);
    return (
        <div className="lh-copy ba bl-0 bt-0 br-0 b--solid b--black-30">
            <div>
                <p >{moment(date).format('h:mm a')}</p>
                <h5>{parseInt((temp * 9 / 5) + 32)} °F </h5>

                <p><small className="text-muted">{weather.description}</small></p>
            </div>
        </div>
    )
}

export default Hourly
