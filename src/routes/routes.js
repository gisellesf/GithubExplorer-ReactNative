// ** Import React
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ** Imports Screens
import Home from "../screens/Home";
import BranchesScreen from "../screens/Branches";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="screenBranches" component={BranchesScreen}/>
    </Stack.Navigator>
  );
}
