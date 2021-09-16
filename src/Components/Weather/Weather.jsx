import CitySearch from './Search/CitySearch'
import style from './Weather.module.css'



const Weather = (props) => {
    let weatherData = props.weather.weatherData

    // Отправляем запрос на сервер
    const changeCity = (city) => {
        props.setWeatherByCityName(city.slice(0, 1).toUpperCase() + city.slice(1))
    }

    return (
        <div className={style.container}>

            {/* Данные о погоде */}
            {weatherData &&
                <>
                    {/* Поиск  города */}
                    <div className={style.search}>
                        <CitySearch changeCity={changeCity} />
                    </div>


                    <div className={style.country}>
                        {weatherData.name}, {weatherData.sys.country}
                    </div>

                    <div className={style.temp}>
                        {Math.round(weatherData.main.temp)}&deg;
                    </div>

                    <div className={style.stats}>
                        {weatherData.weather['0'].description.slice(0, 1).toUpperCase() + weatherData.weather['0'].description.slice(1)}
                        <br />
                        Humidity : {weatherData.main.humidity}%
                        <br />
                        Wind : {weatherData.wind.speed} m/s
                    </div>
                </>
            }

            {/* пока нет данных */}
            {!weatherData &&
                <>
                    <div className={style.search}>
                        <CitySearch changeCity={changeCity} />
                    </div>

                    <div className={style.country}>
                        City
                    </div>

                    <div className={style.temp}>
                        C&deg;
                    </div>

                    <div className={style.stats}>
                        -/-
                        <br />
                        -/-
                        <br />
                        -/-
                    </div>
                </>
            }
        </div>
    )
}


export default Weather