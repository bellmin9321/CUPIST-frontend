import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";

import axios from "axios";

import { CUPIST_URL, IMAGES } from "../constant";
import ScreenHomeCustom from "./ScreenHomeCustom";
import Loading from "./Loading";

const windowWidth = Dimensions.get("window").width;

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

  const deleteCard = (id: number) => {
    const filteredData = cardList.filter(
      (item: { id: number }) => item.id !== id,
    );
    setCardList(filteredData);
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
        renderItem={({ item, index }) => {
          const {
            name,
            age,
            introduction,
            job,
            distance,
            height,
            pictures,
            id,
          } = item;
          const picture = pictures[0];

          return (
            <>
              <View style={styles.card}>
                <TouchableOpacity style={{ width: "100%" }}>
                  <Image
                    style={{ height: "100%" }}
                    source={{ uri: CUPIST_URL.DEFAULT + picture }}
                  />
                </TouchableOpacity>
                <View style={styles.cardInfo}>
                  {index < 2 ? (
                    <View style={styles.recommendationBox}>
                      <Text style={styles.recommendation}>오늘의 추천</Text>
                    </View>
                  ) : null}
                  <LinearGradient colors={["#333333", "#33333300"]}>
                    <Text style={styles.name}>
                      {name}, {age}&nbsp;
                      <Image source={IMAGES.INFO} />
                    </Text>
                    <View>
                      {introduction ? (
                        <Text style={styles.introduction}>{introduction}</Text>
                      ) : (
                        <>
                          <Text style={styles.job_distance}>
                            {job}・{distance / 1000}km
                          </Text>
                          <Text style={styles.height}>{height}cm</Text>
                        </>
                      )}
                    </View>
                  </LinearGradient>

                  <View style={styles.buttonBox}>
                    <TouchableOpacity
                      style={styles.deleteBtn}
                      onPress={() => deleteCard(id)}>
                      <Image source={IMAGES.DELETE} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.likeBtn}
                      onPress={() => deleteCard(id)}>
                      <Text style={styles.like}>좋아요</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {index === 1 ? (
                <ScreenHomeCustom
                  cardList={cardList}
                  setCardList={setCardList}
                />
              ) : null}
            </>
          );
        }}
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
  card: {
    flex: 1,
    alignItems: "center",
    width: windowWidth - 6,
    height: windowWidth * 1.4 - 6,
    marginHorizontal: 3,
    marginTop: 12,
    borderRadius: 10,
    backgroundColor: "black",
  },
  cardInfo: {
    position: "absolute",
    width: "92%",
    left: 0,
    bottom: 0,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  recommendationBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    height: 27,
    width: 100,
    backgroundColor: "#FFFFFF25",
  },
  recommendation: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 12,
  },
  introduction: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 4,
  },
  job_distance: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 4,
  },
  height: {
    fontSize: 16,
    color: "#FFFFFF60",
  },
  buttonBox: {
    flexDirection: "row",
    marginTop: 20,
  },
  deleteBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    borderRadius: 4,
    backgroundColor: "#595959",
    color: "#FFFFFF",
    marginRight: 8,
  },
  likeBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 4,
    backgroundColor: "#4B9CFF",
  },
  like: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default ScreenHome;
