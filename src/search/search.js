import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Seach() {
  const navigation = useNavigation();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Insira uma cidade");
  const apiKey = "ce3ba89c9c48497a000bb4ee52aa86c4";
  const urlApi = "https://api.openweathermap.org/data/2.5/weather";

  const getWeatherData = async () => {
    try {
      const response = await axios.get(urlApi, {
        params: {
          q: city,
          appid: apiKey,
          units: "metric",
          lang: "pt_br",
        },
      });
      setWeatherData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    if (city) {
      getWeatherData();
    }
  }, [city]);

  return (
    <View style={styles.container}>
      <Image source={require("../../img/logo.png")} style={styles.logo} />
      <View style={styles.search}>
        <Text style={styles.title}>
          Boas vindas ao <Text style={styles.titleBlue}>TypeWeather</Text>
        </Text>
        <Text style={styles.text}>
          Escolha um local para ver a previsão do tempo
        </Text>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Buscar local"
            placeholderTextColor={"#7F7F98"}
            onChangeText={(value) => setCity(value)}
            onSubmitEditing={() => {
              getWeatherData;
              navigation.navigate("Climate", { weatherData, city });
            }}
            value={city}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13131A",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  logo: {
    width: 200,
    height: 32,
    top: 50,
    position: "absolute",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
  },
  titleBlue: {
    fontWeight: "700",
    color: "#8FB2F5",
  },
  text: {
    color: "#BFBFD4",
    fontSize: 15,
    marginTop: 10,
  },
  search: {
    alignItems: "center",
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 360,
    height: 56,
    marginTop: 40,
    backgroundColor: "#1E1E29",
  },
  inputText: {
    color: "#FAFAFA",
    textAlign: "left",
    width: 311,
    height: 30,
  },
});
