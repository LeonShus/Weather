import CitySearch from './Search/CitySearch'
import style from './Weather.module.css'
import { IoWater } from 'react-icons/io5'
import { RiWindyLine } from 'react-icons/ri'



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

                        <div>
                            {weatherData.weather['0'].description.slice(0, 1).toUpperCase() + weatherData.weather['0'].description.slice(1)}
                        </div>
                        
                        <div>
                            <IoWater/> Humidity : {weatherData.main.humidity}%
                        </div>

                        <div>
                          <RiWindyLine />  Wind : {weatherData.wind.speed} m/s
                        </div>
                        
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