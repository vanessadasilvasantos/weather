import { View, Text, Image } from "react-native";
import { styles } from "./style";

export default function TemperatureDescription({ image, text, value }) {
  return (
    <View style={[styles.descriptions]}>
      <View style={styles.descName}>
        <Image source={image} />
        <Text style={styles.descriptionText}>{text}</Text>
      </View>
      <Text style={styles.valueDesc}>{value}</Text>
    </View>
  );
}
