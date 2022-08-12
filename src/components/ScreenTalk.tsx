import React, { FunctionComponent } from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../navigation/types";

type ScreenTalkProp = StackNavigationProp<RootStackParamList, "Main">;

function ScreenTalk() {
  const navigation = useNavigation<ScreenTalkProp>();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Talk Screen</Text>
    </SafeAreaView>
  );
}

export default ScreenTalk;
