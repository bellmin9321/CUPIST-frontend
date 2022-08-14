import "react-native-gesture-handler";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigation from "../navigation/RootNavigation";
import { StatusBar, View } from "react-native";
import { GlobalStyle } from "../utils/globalStyle";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <SafeAreaProvider style={GlobalStyle.app}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <RootNavigation />
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
