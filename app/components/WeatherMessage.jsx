var React = require ('react');

var WeatherMessage = ({temp, location}) => {
        return(
            <p>It's it {temp} in {location}.</p>
        )
};

module.exports = WeatherMessage;