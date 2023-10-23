// ** Import React
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ** Imports Screens
import Home from "../screens/Home";
import ListBranches from "../components/ListBranches";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="screenBranches"
        component={ListBranches}
        options={{
          title: "Lista de Branches",
          headerStyle: {
            backgroundColor: "rgb(185, 12, 85)",
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
