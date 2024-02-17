import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//components
import Search from "./src/pages/Search";
import Climate from "./src/pages/Climate";
import Weekday from "./src/components/Weekday";
import TemperatureDescription from "./src/components/TemperatureDescription";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Climate"
          component={Climate}
          options={{
            title: "",
            headerTransparent: true,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Weekday"
          component={Weekday}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="TemperatureDescription"
          component={TemperatureDescription}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
