import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BottomTabParamList } from "./types";
import { IMAGES } from "../constant";
import ScreenLive from "../components/ScreenLive";
import ScreenLike from "../components/ScreenLike";
import ScreenTalk from "../components/ScreenTalk";
import ScreenProfile from "../components/ScreenProfileEdit";
import TopTabNavigation from "./TopTabNavigation";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#1A1A1A",
        tabBarStyle: { height: 50 },
      }}>
      <BottomTab.Screen
        name="Home"
        component={TopTabNavigation}
        options={{
          tabBarIcon: ({ color }) => {
            return <Image source={IMAGES.HOME} style={{ tintColor: color }} />;
          },
          header: () => null,
        }}
      />
      <BottomTab.Screen
        name="Live"
        component={ScreenLive}
        options={{
          tabBarIcon: ({ color }) => {
            return <Image source={IMAGES.LIVE} style={{ tintColor: color }} />;
          },
          header: () => null,
        }}
      />
      <BottomTab.Screen
        name="Like"
        component={ScreenLike}
        options={{
          tabBarIcon: ({ color }) => {
            return <Image source={IMAGES.LIKE} style={{ tintColor: color }} />;
          },
          header: () => null,
        }}
      />
      <BottomTab.Screen
        name="Talk"
        component={ScreenTalk}
        options={{
          tabBarIcon: ({ color }) => {
            return <Image source={IMAGES.TALK} style={{ tintColor: color }} />;
          },
          header: () => null,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ScreenProfile}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Image source={IMAGES.PROFILE} style={{ tintColor: color }} />
            );
          },
          header: () => null,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigation;
