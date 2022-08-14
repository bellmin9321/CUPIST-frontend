import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import axios from "axios";
import { CUPIST_URL, IMAGES } from "../constant";

function HomeCustom({ cardList, setCardList }: any) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    if (isSelected) {
      getCustomCardList();
    }
  }, [isSelected]);

  const getCustomCardList = async () => {
    try {
      const {
        data: { data },
      } = await axios.post(CUPIST_URL.INRODUCTION_CUSTOM);

      setCardList([...data, ...cardList]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = () => {
    setIsSelected(true);
  };

  return (
    <View style={styles.customRecommendationLayout}>
      <View style={styles.customRecommendationBox}>
        <Text style={styles.title}>맞춤 추천</Text>
        <View style={styles.categoryBox}>
          <View style={styles.category1}>
            <View style={styles.categoryInfo}>
              <Image style={{ marginRight: 12 }} source={IMAGES.TODAY} />
              <Text style={{ color: "1A1A1A", marginRight: 6 }}>글램 추천</Text>
              <Image source={IMAGES.HOT} />
            </View>
            <TouchableOpacity style={styles.categoryBtn} onPress={handleSelect}>
              <Text style={styles.select}>선택</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.category1}>
            <View style={styles.categoryInfo}>
              <Image style={{ marginRight: 12 }} source={IMAGES.DIA} />
              <Text style={{ color: "1A1A1A", marginRight: 6 }}>
                최상위 매력
              </Text>
              <Image source={IMAGES.HOT} />
            </View>
            <TouchableOpacity style={styles.categoryBtn} onPress={handleSelect}>
              <Text style={styles.select}>선택</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.category2}>
            <View style={styles.categoryInfo}>
              <Image style={{ marginRight: 12 }} source={IMAGES.GLAMOUR} />
              <Text style={{ color: "1A1A1A", marginRight: 6 }}>
                볼륨감 있는 체형
              </Text>
              <Image source={IMAGES.HOT} />
            </View>
            <TouchableOpacity style={styles.categoryBtn} onPress={handleSelect}>
              <Text style={styles.select}>선택</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.category2}>
            <View style={styles.categoryInfo}>
              <Image style={{ marginRight: 12 }} source={IMAGES.WITHPET} />
              <Text style={{ color: "1A1A1A" }}>반려 동물을 키우는</Text>
            </View>
            <TouchableOpacity style={styles.categoryBtn} onPress={handleSelect}>
              <Text style={styles.select}>선택</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.allCategryBtn}>
            <Text style={{ color: "1A1A1A", fontWeight: "bold" }}>
              24개 항목 모두 보기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  customRecommendationLayout: {
    height: 350,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#E8E8E8",
    marginTop: 12,
    marginHorizontal: 3,
  },
  customRecommendationBox: {
    marginTop: 24,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  categoryBox: {
    flex: 1,
    flexDirection: "column",
  },
  category1: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    marginTop: 12,
  },
  category2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 62,
  },
  categoryInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 76,
    height: 32,
    borderRadius: 5,
    backgroundColor: "#4B9CFF",
  },
  select: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffff",
  },
  allCategryBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    marginVertical: 16,
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
  },
});

export default HomeCustom;
