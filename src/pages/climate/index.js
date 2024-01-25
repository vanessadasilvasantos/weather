import { Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import "moment/locale/pt-br";
import moment from "moment/moment";
import { styles } from "./styles";

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
        <View style={styles.descriptions}>
          <View style={styles.descName}>
            <Image
              source={require("../../img/dayInformationIcon/temperature.png")}
            />
            <Text style={styles.descriptionText}>Sensação térmica</Text>
          </View>
          <Text style={styles.valueDesc}>{`${Math.round(
            weatherData.main.feels_like
          )}°C`}</Text>
        </View>
        <View style={styles.descriptions}>
          <View style={styles.descName}>
            <Image source={require("../../img/dayInformationIcon/rain.png")} />
            <Text style={styles.descriptionText}>Probabilidade de chuva </Text>
          </View>
          <Text
            style={styles.valueDesc}
          >{`  ${weatherData.main.humidity}%`}</Text>
        </View>
        <View style={styles.descriptions}>
          <View style={styles.descName}>
            <Image source={require("../../img/dayInformationIcon/wind.png")} />
            <Text style={styles.descriptionText}>Velocidade do vento</Text>
          </View>
          <Text style={styles.valueDesc}>{`${Math.round(
            weatherData.wind.speed
          )} km/h`}</Text>
        </View>
        <View style={styles.descriptions}>
          <View style={styles.descName}>
            <Image source={require("../../img/dayInformationIcon/drop.png")} />
            <Text style={styles.descriptionText}>Umidade do ar</Text>
          </View>
          <Text style={styles.valueDesc}>
            {`${weatherData.main.humidity}`}%
          </Text>
        </View>
        <View style={styles.descriptions}>
          <View style={styles.descName}>
            <Image source={require("../../img/dayInformationIcon/sun.png")} />
            <Text style={styles.descriptionText}>Índice UV</Text>
          </View>
          <Text style={styles.valueDesc}>{`5`}</Text>
        </View>
      </View>

      <View style={styles.week}>
        <View style={styles.dayTemp}>
          <Text style={styles.textDay}>{`${moment()
            .add(1, "day")
            .format("ddd")}`}</Text>
          <Image source={require("../../img/iconDay/rainDay.png")} />
          <Text style={styles.tempMaxDay}>{`${Math.round(
            weatherData.main.temp_max
          )}°C`}</Text>
          <Text style={styles.tempMinDay}>{`${Math.round(
            weatherData.main.temp_min
          )}°C`}</Text>
        </View>
        <View style={styles.dayTemp}>
          <Text style={styles.textDay}>{`${moment()
            .add(2, "day")
            .format("ddd")}`}</Text>
          <Image source={require("../../img/iconDay/sunClouds.png")} />
          <Text style={styles.tempMaxDay}>{`${Math.round(
            weatherData.main.temp_max
          )}°C`}</Text>
          <Text style={styles.tempMinDay}>{`${Math.round(
            weatherData.main.temp_min
          )}°C`}</Text>
        </View>
        <View style={styles.dayTemp}>
          <Text style={styles.textDay}>{`${moment()
            .add(3, "day")
            .format("ddd")}`}</Text>
          <Image source={require("../../img/iconDay/sunClouds.png")} />
          <Text style={styles.tempMaxDay}>{`${Math.round(
            weatherData.main.temp_max
          )}°C`}</Text>
          <Text style={styles.tempMinDay}>{`${Math.round(
            weatherData.main.temp_min
          )}°C`}</Text>
        </View>
        <View style={styles.dayTemp}>
          <Text style={styles.textDay}>{`${moment()
            .add(4, "day")
            .format("ddd")}`}</Text>
          <Image source={require("../../img/iconDay/rainDay.png")} />
          <Text style={styles.tempMaxDay}>{`${Math.round(
            weatherData.main.temp_max
          )}°C`}</Text>
          <Text style={styles.tempMinDay}>{`${Math.round(
            weatherData.main.temp_min
          )}°C`}</Text>
        </View>
        <View style={styles.dayTemp}>
          <Text style={styles.textDay}>{`${moment()
            .add(5, "day")
            .format("ddd")}`}</Text>
          <Image source={require("../../img/iconDay/rainDay.png")} />
          <Text style={styles.tempMaxDay}>{`${Math.round(
            weatherData.main.temp_max
          )}°C`}</Text>
          <Text style={styles.tempMinDay}>{`${Math.round(
            weatherData.main.temp_min
          )}°C`}</Text>
        </View>
      </View>
    </View>
  );
}
