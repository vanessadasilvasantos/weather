import { styles } from "./style";
import { View, Text, Image } from "react-native";
import moment from "moment/moment";

export default function Weekday({ day, image, minDay, maxDay }) {
  return (
    <View style={styles.container}>
      <View style={styles.dayTemp}>
        <Text style={styles.textDay}>{`${moment()
          .add(day, "day")
          .format("ddd")}`}</Text>
        <Image source={image} />
        <Text style={styles.tempMaxDay}>{maxDay}°C</Text>
        <Text style={styles.tempMinDay}>{minDay}°C</Text>
      </View>
    </View>
  );
}
