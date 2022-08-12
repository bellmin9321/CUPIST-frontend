import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeTabParamList } from "./types";
import ScreenHome from "../components/ScreenHome";
import ScreenLive from "../components/ScreenLive";
import ScreenLike from "../components/ScreenLike";
import ScreenTalk from "../components/ScreenTalk";
import ScreenProfile from "../components/ScreenProfile";
import { IMAGES } from "../constant";

const Tab = createBottomTabNavigator<HomeTabParamList>();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#1A1A1A",
        tabBarStyle: { height: 50 },
      }}>
      <Tab.Screen
        name="Home"
        component={ScreenHome}
        options={{
          tabBarIcon: ({ color }) => {
            return <Image source={IMAGES.HOME} style={{ tintColor: color }} />;
          },
        }}
      />
      <Tab.Screen
        name="Live"
        component={ScreenLive}
        options={{
          tabBarIcon: ({ color }) => {
            return <Image source={IMAGES.LIVE} style={{ tintColor: color }} />;
          },
        }}
      />
      <Tab.Screen
        name="Like"
        component={ScreenLike}
        options={{
          tabBarIcon: ({ color }) => {
            return <Image source={IMAGES.LIKE} style={{ tintColor: color }} />;
          },
        }}
      />
      <Tab.Screen
        name="Talk"
        component={ScreenTalk}
        options={{
          tabBarIcon: ({ color }) => {
            return <Image source={IMAGES.TALK} style={{ tintColor: color }} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ScreenProfile}
        options={{
          tabBarIcon: ({ color }) => {
            return <Image source={IMAGES.PROFILE} style={{ tintColor: color }} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
