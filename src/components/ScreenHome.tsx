import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import axios from "axios";

import { CUPIST_URL } from "../constant";
import Loading from "./Loading";
import HomeCard from "./HomeCard";

function ScreenHome() {
  const [cardList, setCardList] = useState([] as any);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getTodayCardList();
    getTodayCardList();
  }, []);

  const getTodayCardList = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(CUPIST_URL.INRODUCTION);

      setCardList(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const getAdditionalCardList = async () => {
    try {
      setIsLoading(true);
      const {
        data: { data },
      } = await axios.get(CUPIST_URL.INRODUCTION_ADDITIONAL);

      setCardList([...cardList, ...data]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleOnEndReached = () => {
    if (isLoading) {
      return;
    } else {
      getAdditionalCardList();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={1}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
        data={cardList}
        ListFooterComponent={() => {
          return isLoading ? <Loading color={"#4B9CFF"} /> : <></>;
        }}
        onEndReached={handleOnEndReached}
        keyExtractor={(item) => item?.id}
        renderItem={({ item, index }) => (
          <HomeCard
            item={item}
            index={index}
            cardList={cardList}
            setCardList={setCardList}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
});

export default ScreenHome;
