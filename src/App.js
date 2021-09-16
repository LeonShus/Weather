import React, { useEffect } from 'react';
import style from './App.module.css'
import Weather from './Components/Weather/Weather';
import { connect } from 'react-redux'
import { setWeatherByCityName, setWeatherByCords } from './Store/Reducers/WeatherReducer'

function App(props) {
  // Получаем данные по месту положения
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        props.setWeatherByCords(position.coords.latitude, position.coords.longitude)
    })
  },[])

  return (
    <div className={style.container}>
      <Weather weather={props.weather} setWeatherByCityName={props.setWeatherByCityName} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps, { setWeatherByCityName, setWeatherByCords })(App)
