import { StyleSheet, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import "moment/locale/pt-br";
import moment from "moment/moment";

const isNight = moment().hour() >= 18 || moment().hour() < 6;

moment().calendar;

const WeatherIcon = ({ condition }) => {
  console.log(condition);
  let iconSource;
  if (isNight) {
    iconSource = require("../../img/moon.png");
  } else {
    if (condition === "Clear") {
      iconSource = require("../../img/clearSun.png");
    } else if (condition === "Rain") {
      iconSource = require("../../img/rainTemp.png");
    } else if (condition === "Clouds") {
      iconSource = require("../../img/cloudsTemp.png");
    }
  }

  return <Image source={iconSource} style={{ width: 160, height: 160 }} />;
};

const BackWeatherIcon = ({ condition }) => {
  let iconSource;

  if (isNight) {
    iconSource = require("../../img/moonDay.png");
  } else {
    if (condition === "Clear") {
      iconSource = require("../../img/dayClear.png");
    } else if (condition === "Rain") {
      iconSource = require("../../img/rainDay2.png");
    } else if (condition === "Clouds") {
      iconSource = require("../../img/cloudsDay.png");
    }
  }

  return (
    <Image
      source={iconSource}
      style={{ borderRadius: 12, marginBottom: 50, width: 420, height: 400 }}
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
              style={styles.descripitionTemp}
            >{`${weatherData.weather[0].main}`}</Text>
          </View>
          <WeatherIcon condition={weatherData.weather[0].main} />
        </View>
      </View>

      <View style={styles.containerDesc}>
        <View style={styles.descripitions}>
          <View style={styles.descName}>
            <Image source={require("../../img/temperature.png")} />
            <Text style={styles.descripitionText}>Sensação térmica</Text>
          </View>
          <Text style={styles.valueDesc}>{`${Math.round(
            weatherData.main.feels_like
          )}°C`}</Text>
        </View>
        <View style={styles.descName}>
          <View style={styles.descripitions}>
            <Image source={require("../../img/rain.png")} />
            <Text style={styles.descripitionText}>Probabilidade de chuva </Text>
          </View>
          <Text
            style={styles.valueDesc}
          >{`  ${weatherData.main.humidity}%`}</Text>
        </View>
        <View style={styles.descripitions}>
          <View style={styles.descName}>
            <Image source={require("../../img/wind.png")} />
            <Text style={styles.descripitionText}>Velocidade do vento</Text>
          </View>
          <Text style={styles.valueDesc}>{`${Math.round(
            weatherData.wind.speed
          )} km/h`}</Text>
        </View>
        <View style={styles.descripitions}>
          <View style={styles.descName}>
            <Image source={require("../../img/drop.png")} />
            <Text style={styles.descripitionText}>Umidade do ar</Text>
          </View>
          <Text style={styles.valueDesc}>
            {`${weatherData.main.humidity}`}%
          </Text>
        </View>
        <View style={styles.descripitions}>
          <View style={styles.descName}>
            <Image source={require("../../img/sun.png")} />
            <Text style={styles.descripitionText}>Índice UV</Text>
          </View>
          <Text style={styles.valueDesc}>{`5`}</Text>
        </View>
      </View>

      <View style={styles.week}>
        <View style={styles.dayTemp}>
          <Text style={styles.textDay}>{`${moment()
            .add(1, "day")
            .format("ddd")}`}</Text>
          <Image source={require("../../img/rainDay.png")} />
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
          <Image source={require("../../img/sunClouds.png")} />
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
          <Image source={require("../../img/sunClouds.png")} />
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
          <Image source={require("../../img/rainDay.png")} />
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
          <Image source={require("../../img/rainDay.png")} />
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13131A",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 30,
    position: "relative",
  },
  descripitions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cityName: {
    color: "#FAFAFA",
    fontSize: 18,
    fontWeight: "700",
  },
  date: {
    fontSize: 12,
    color: "#FAFAFA",
    marginBottom: 150,
  },
  tempCity: {
    fontSize: 48,
    color: "#FFFFFF",
    fontWeight: "800",
    marginBottom: 15,
  },
  containerTemp: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 100,
  },
  imgTemp: {
    width: 100,
    height: 100,
  },
  maxMinTemp: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 6,
  },
  descripitionTemp: {
    fontSize: 15,
    color: "#FFFFFF",
  },
  descripitionText: {
    color: "#BFBFD4",
    fontSize: 14,
    borderLeftWidth: 1,
    fontWeight: "700",
    marginLeft: 10,
    paddingRight: 180,
  },
  containerDesc: {
    gap: 50,
    backgroundColor: "#16161F",
    padding: 10,
    borderRadius: 12,
    marginBottom: 20,
    justifyContent: "center",
  },
  valueDesc: {
    color: "#FAFAFA",
  },
  descName: {
    flexDirection: "row",
  },
  textDay: {
    color: "#BFBFD4",
    fontSize: 14,
    fontWeight: "700",
  },
  tempMaxDay: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FAFAFA",
  },
  tempMinDay: {
    fontSize: 14,
    fontWeight: "700",
    color: "#7F7F98",
  },
  dayTemp: {
    flexDirection: "column",
    alignItems: "center",
  },
  week: {
    backgroundColor: "#16161F",
    flexDirection: "row",
    padding: 10,
    borderRadius: 12,
    gap: 30,
  },
  tempContainer: {
    position: "absolute",
    top: 70,
    left: 60,
    padding: 10,
    marginBottom: 50,
  },
});
