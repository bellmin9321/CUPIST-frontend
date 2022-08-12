import React, { FunctionComponent } from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../navigation/types";

type ScreenLiveProp = StackNavigationProp<RootStackParamList, "Main">;

function ScreenLive() {
  const navigation = useNavigation<ScreenLiveProp>();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Live Screen</Text>
    </SafeAreaView>
  );
}

export default ScreenLive;
