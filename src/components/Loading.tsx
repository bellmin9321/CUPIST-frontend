import React from "react";
import { ActivityIndicator } from "react-native";

function Loading({ color }: any) {
  return <ActivityIndicator size={"large"} color={color} />;
}

export default Loading;
