import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { CUPIST_URL, IMAGES } from "../constant";

import HomeCustomRecommendation from "./HomeCustomRecommendation";

export type Props = {
  item: {
    name: string;
    age: number;
    introduction: string;
    job: string;
    distance: number;
    height: number;
    pictures: any;
    id: number;
  };
  index: number;
  cardList: any;
  setCardList: any;
};

const windowWidth = Dimensions.get("window").width;

function HomeCard({ item, index, cardList, setCardList }: Props) {
  const { name, age, introduction, job, distance, height, pictures, id } = item;
  const picture = pictures[0];

  const deleteCard = (id: number) => {
    const filteredData = cardList.filter(
      (item: { id: number }) => item.id !== id,
    );
    setCardList(filteredData);
  };

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
          {id < 3 ? (
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
        <HomeCustomRecommendation
          cardList={cardList}
          setCardList={setCardList}
        />
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
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

export default HomeCard;
