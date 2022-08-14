import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { RootStackParamList, TopTabParamList } from "./types";
import { IMAGES } from "../constant";
import ScreenHome from "../components/ScreenHome";
import { StackNavigationProp } from "@react-navigation/stack";

const NearScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>근처</Text>
    </View>
  );
};

const LiveScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>라이브</Text>
    </View>
  );
};

const TopTab = createMaterialTopTabNavigator<TopTabParamList>();

type TopTabNavigationProp = StackNavigationProp<RootStackParamList, "Main">;

type Props = {
  navigation: TopTabNavigationProp;
};

function TopTabNavigation({ navigation }: Props) {
  const moveProfileEditPage = () => {
    navigation.navigate("ProfileEdit");
  };

  return (
    <>
      <TouchableOpacity style={styles.settingBtn} onPress={moveProfileEditPage}>
        <Image source={IMAGES.SETTING} />
      </TouchableOpacity>
      <TopTab.Navigator
        initialRouteName="MainFeed"
        screenOptions={{
          tabBarPressColor: "transparent",
          tabBarActiveTintColor: "#1A1A1A",
          tabBarInactiveTintColor: "#CCCCCC",
          tabBarStyle: {
            height: 56,
            paddingRight: "40%",
            justifyContent: "center",
          },
          tabBarIconStyle: {
            marginLeft: 8,
            top: 5,
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarLabelStyle: {
            fontSize: 20,
            width: "100%",
            fontWeight: "bold",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "black",
            marginLeft: 8,
            width: 70,
          },
        }}>
        <TopTab.Screen
          name="MainFeed"
          component={ScreenHome}
          options={{
            tabBarIcon: ({ color }) => {
              return (
                <Image source={IMAGES.GLAM} style={{ tintColor: color }} />
              );
            },
            tabBarShowLabel: false,
          }}
        />
        <TopTab.Screen
          name="Near"
          component={NearScreen}
          options={{ tabBarLabel: "근처" }}
        />
        <TopTab.Screen
          name="Feed"
          component={LiveScreen}
          options={{ tabBarLabel: "라이브" }}
        />
      </TopTab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  settingBtn: {
    position: "absolute",
    top: 20,
    right: 12,
    zIndex: 1,
  },
});

export default TopTabNavigation;
