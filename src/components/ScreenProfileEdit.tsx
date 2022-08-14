import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IMAGES } from "../constant";
import { RootStackParamList } from "../navigation/types";

type ProfileScreenProp = StackNavigationProp<RootStackParamList, "Main">;

type Props = {
  navigation: ProfileScreenProp;
};

function ScreenProfile({ navigation }: Props) {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={handleBack}>
        <Image source={IMAGES.BACK} />
      </TouchableOpacity>
      <Text>프로필 수정</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default ScreenProfile;
