import styles from './Weather.module.css';
const Weather = ({weather}) => {
    return (
    <div className={styles['form-group']}>
        <h2 className={styles.title}>{weather.city}</h2>
        <h3>Temperature: {weather.temperature}°F</h3>
        <h3>Humidity: {weather.humidity}%</h3>
        <h3>Wind Speed: {weather.windSpeed} mph</h3>
    </div>
    );
};

export default Weather;