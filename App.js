import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Seach from "./src/pages/search";
import Climate from "./src/pages/climate";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Seach"
          component={Seach}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
