import React from 'react'

const moment = require('moment');

const Daily = ({ day, temp, weather }) => {
    let date = new Date(day * 1000);
    return (
        <div className="lh-copy ba bl-0 bt-0 br-0 b--solid b--black-30">
            <h3>{moment(date).format('dddd')}</h3>
            <p className="gray">{moment(date).format('MMMM Do')}</p>
            <div>
                <h5>{parseInt((temp * 9 / 5) + 32)} °F </h5>
                <p><small>{weather.description}</small></p>
            </div>
        </div>
    )
}

export default Daily
