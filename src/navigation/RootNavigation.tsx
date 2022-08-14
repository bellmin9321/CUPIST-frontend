import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "./types";
import BottomTabNavigation from "./BottomTabNavigation";
import ScreenProfileEdit from "../components/ScreenProfileEdit";

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={"Main"}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={"Main"}
        component={BottomTabNavigation}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Stack.Screen
        name={"ProfileEdit"}
        component={ScreenProfileEdit}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
