var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=dfcd804d5ac2cb66d0ab173bd22ed9a8&units=metric';

// dfcd804d5ac2cb66d0ab173bd22ed9a8

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else{
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}