import { Text, View, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from "axios";
import { styles } from "./styles";

export default function Search() {
  const navigation = useNavigation();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
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
      <Image source={require("../../img/logo/logo.png")} style={styles.logo} />
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
          />
        </View>
      </View>
    </View>
  );
}
