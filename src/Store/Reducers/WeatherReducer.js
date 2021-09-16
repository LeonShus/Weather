
import { weatherApi } from "../../Api/Api"

const SET_COUNTRY_WEATHER = 'Weather/SET-COUNTRY-WEATHER'

const initialValues = {
    city: 'EXAMPLE',
    temperature: 10,

    weatherData: null,

}

export const weatherReducer = (state = initialValues, action) => {
    switch (action.type) {
        case 'Weather/SET-COUNTRY-WEATHER':
            return { ...state, weatherData: { ...action.data } }
        default:
            return { ...state }
    }
}

export const setWeatherData = (data) => ({ type: SET_COUNTRY_WEATHER, data })


//Thunk

// Запрос по названию города
export const setWeatherByCityName = (city) => (dispatch) => {

    weatherApi.getWeatherByCityName(city)
        .then(response => {
            if (response.status >= 200 && response.status <= 299) {
                dispatch(setWeatherData(response.data))
            } else if (response.status >= 400) {
                console.log('No Information about your country')
            }

        })
        .catch(response => console.log(response))
}

//Запрлс по координатам
export const setWeatherByCords = (lat, lon) => (dispatch) => {

    weatherApi.getWeatherByCords(lat, lon)
        .then(response => {
            if (response.status >= 200 && response.status <= 299) {
                dispatch(setWeatherData(response.data))
            } else if (response.status >= 400) {
                console.log('No Information about your country')
            }

        })
        .catch(response => console.log(response))
}

