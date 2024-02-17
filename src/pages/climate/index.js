import { Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import "moment/locale/pt-br";
import moment from "moment/moment";
import { styles } from "./styles";

//components

import Weekday from "../../components/Weekday";
import TemperatureDescription from "../../components/TemperatureDescription";

const isNight = moment().hour() >= 18 || moment().hour() < 6;

moment().calendar;

const WeatherIcon = ({ condition }) => {
  console.log(condition);
  let iconSource;
  if (isNight) {
    iconSource = require("../../img/iconTemp/moon.png");
  } else {
    if (condition === "Clear") {
      iconSource = require("../../img/iconTemp/clearSun.png");
    } else if (condition === "Rain") {
      iconSource = require("../../img/iconTemp/rainTemp.png");
    } else if (condition === "Clouds") {
      iconSource = require("../../img/iconTemp/cloudsTemp.png");
    }
  }

  return <Image source={iconSource} style={{ width: 160, height: 160 }} />;
};

const BackWeatherIcon = ({ condition }) => {
  let iconSource;

  if (isNight) {
    iconSource = require("../../img/backTempIcon/moonDay.png");
  } else {
    if (condition === "Clear") {
      iconSource = require("../../img/backTempIcon/dayClear.png");
    } else if (condition === "Rain") {
      iconSource = require("../../img/backTempIcon/rainDay2.png");
    } else if (condition === "Clouds") {
      iconSource = require("../../img/backTempIcon/cloudsDay.png");
    }
  }

  return (
    <Image
      source={iconSource}
      style={{
        borderRadius: 12,
        marginBottom: "5%",
        marginTop: "25%",
        width: "86%",
        height: "40%",
      }}
    />
  );
};

export default function Climate() {
  moment.locale("pt-br");
  const route = useRoute();
  const { weatherData, city } = route.params;

  const minDay = Math.round(weatherData.main.temp_min);
  const maxDay = Math.round(weatherData.main.temp_max);
  const umidityValue = weatherData.main.humidity;
  const windSpeed = Math.round(weatherData.wind.speed);
  const thermalSensation = Math.round(weatherData.main.feels_like);

  return (
    <View style={styles.container}>
      <BackWeatherIcon condition={weatherData.weather[0].main} />
      <View style={styles.tempContainer}>
        <Text style={styles.cityName}>{`${city}`}</Text>
        <Text style={styles.date}>{`${moment().format(
          "dddd"
        )}, ${moment().format("DD [de] MMMM [de] YYYY")}`}</Text>
        <View style={styles.containerTemp}>
          <View>
            <Text style={styles.tempCity}>{`${Math.round(
              weatherData.main.temp
            )}°C`}</Text>
            <Text style={styles.maxMinTemp}>{`${Math.round(
              weatherData.main.temp_min
            )}°C/ ${Math.round(weatherData.main.temp_max)}°C`}</Text>
            <Text
              style={styles.descriptionTemp}
            >{`${weatherData.weather[0].main}`}</Text>
          </View>
          <WeatherIcon condition={weatherData.weather[0].main} />
        </View>
      </View>

      <View style={styles.containerDesc}>
        <TemperatureDescription
          image={require("../../img/dayInformationIcon/temperature.png")}
          text="Sensação térmica"
          value={`${thermalSensation}°C`}
        />
        <TemperatureDescription
          image={require("../../img/dayInformationIcon/rain.png")}
          text="Probabilidade de chuva"
          value={`${umidityValue}%`}
        />
        <TemperatureDescription
          image={require("../../img/dayInformationIcon/wind.png")}
          text="Velocidade do vento"
          value={`${windSpeed} km/h`}
        />
        <TemperatureDescription
          image={require("../../img/dayInformationIcon/drop.png")}
          text="Umidade do ar"
          value={`${umidityValue}%`}
        />
        <TemperatureDescription
          image={require("../../img/dayInformationIcon/sun.png")}
          text="Índice UV"
          value="5"
        />
      </View>

      <View style={styles.week}>
        <Weekday
          day="1"
          image={require("../../img/iconDay/sunClouds.png")}
          maxDay={maxDay}
          minDay={minDay}
        />
        <Weekday
          day="2"
          image={require("../../img/iconDay/sunClouds.png")}
          maxDay={maxDay}
          minDay={minDay}
        />
        <Weekday
          day="3"
          image={require("../../img/iconDay/sunClouds.png")}
          maxDay={maxDay}
          minDay={minDay}
        />
        <Weekday
          day="4"
          image={require("../../img/iconDay/rainDay.png")}
          maxDay={maxDay}
          minDay={minDay}
        />
        <Weekday
          day="5"
          image={require("../../img/iconDay/rainDay.png")}
          minDay={minDay}
          maxDay={maxDay}
        />
      </View>
    </View>
  );
}
