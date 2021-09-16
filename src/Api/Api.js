import * as axios from 'axios'

const apiKey = 'fbc74a9620317bbdb6f2ca1d5b488f04'

export const weatherApi = {
    getWeatherByCityName(city){
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    },

    getWeatherByCords(lat, lon){
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    }
}