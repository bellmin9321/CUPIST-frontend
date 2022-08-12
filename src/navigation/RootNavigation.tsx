import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "./types";
import BottomTabNavigation from "./BottomTabNavigation";

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName={"Main"} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"Main"} component={BottomTabNavigation} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
