import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import axios from "axios";

import { SafeAreaView } from "react-native-safe-area-context";
import { CUPIST_URL, IMAGES } from "../constant";
import { RootStackParamList } from "../navigation/types";
import ModalEditHeight from "./ModalEditHeight";
import ModalEditBodyType from "./ModalEditBodyType";
import ModalEditEducation from "./ModalEditEducation";

type ProfileEditProp = StackNavigationProp<RootStackParamList, "ProfileEdit">;

type Props = {
  navigation: ProfileEditProp;
};

function ScreenProfileEdit({ navigation }: Props) {
  const [data, setData] = useState([] as any);
  const [pictures, setPictures] = useState([] as any);
  const [openModalHeight, setOpenModalHeight] = useState<boolean>(false);
  const [openModalBodyType, setOpenModalBodyType] = useState<boolean>(false);
  const [openModalEducation, setOpenModalEducation] = useState<boolean>(false);
  const [newHeight, setNewHeight] = useState<number>(data?.height);
  const [newBodyType, setNewBodyType] = useState<string>(data?.body_type);
  const [newEducation, setNewEducation] = useState<string>(data?.education);
  const [dialogInfo, setDialogInfo] = useState({} as any);

  const {
    gender,
    birthday,
    location,
    introduction,
    height,
    body_type,
    company,
    job,
    education,
    school,
  } = data;

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getProfileList();
  }, []);

  const getProfileList = async () => {
    try {
      const {
        data: { data, meta },
      } = await axios.get(CUPIST_URL.PROFILE);

      setDialogInfo(meta);
      setData(data);
      setPictures(data.pictures);
    } catch (error) {
      console.log(error);
    }
  };

  const hanldeModalHeight = () => {
    setOpenModalHeight(!openModalHeight);
  };
  const handleOpenModalBodyType = () => {
    setOpenModalBodyType(!openModalBodyType);
  };
  const hanldeModalEducation = () => {
    setOpenModalEducation(!openModalEducation);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
          <Image source={IMAGES.BACK} />
        </TouchableOpacity>
        <Text style={styles.title}>프로필 수정</Text>
      </View>
      <View style={styles.picturesBox}>
        <FlatList
          numColumns={2}
          removeClippedSubviews
          nestedScrollEnabled
          data={pictures}
          keyExtractor={(item, index) => item}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <Image
                  style={styles.picture}
                  source={{ uri: CUPIST_URL.DEFAULT + item }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.more}>
        <Text style={{ fontSize: 12, color: "7f7f7f" }}>
          다양한 매력을 보여줄 수 있는 사진을 올려주세요&nbsp;&nbsp;
          <Text style={{ fontWeight: "bold", color: "#595959" }}>
            더 알아보기
          </Text>
        </Text>
      </View>
      <View style={{ borderWidth: 0.2, borderColor: "#E8E8E8" }} />
      <View style={styles.infoRow}>
        <Text style={{ width: "35%", marginLeft: 16 }}>닉네임</Text>
        <Text style={{ color: "#4B9CFF", marginRight: 5 }}>라로앙</Text>
        <Image source={IMAGES.LOCK} />
      </View>
      <View style={styles.infoRow}>
        <Text style={{ width: "35%", marginLeft: 16 }}>성별</Text>
        <Text>{gender === "F" ? "여성" : "남성"}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={{ width: "35%", marginLeft: 16 }}>생일</Text>
        <Text style={{ color: "#4B9CFF" }}>{birthday}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={{ width: "35%", marginLeft: 16 }}>위치</Text>
        <Text style={{ color: "#4B9CFF" }}>{location?.split(" ")[0]}</Text>
      </View>
      <View style={{ borderWidth: 0.2, borderColor: "#E8E8E8" }} />
      <View style={styles.introduction}>
        <Text
          style={{
            top: 10,
            width: "35%",
            height: 35,
          }}>
          소개
        </Text>
        <Text style={{ color: "#CCCCCC" }}>{introduction}</Text>
        <Text style={{ height: 30 }}>
          SNS 아이디 등 연락처 입력 시 서비스 이용 제한됩니다
        </Text>
      </View>
      <View style={{ borderWidth: 0.2, borderColor: "#E8E8E8" }} />
      <View style={styles.infoRow}>
        <Text style={{ width: "35%", marginLeft: 16 }}>키</Text>
        <TouchableOpacity onPress={hanldeModalHeight}>
          <Text style={height ? { color: "#4B9CFF" } : { color: "#CCCCCC" }}>
            {height ? (newHeight ? newHeight : height) + "cm" : "선택해주세요"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoRow}>
        <Text style={{ width: "35%", marginLeft: 16 }}>체형</Text>
        <TouchableOpacity onPress={handleOpenModalBodyType}>
          <Text style={body_type ? { color: "#4B9CFF" } : { color: "#CCCCCC" }}>
            {body_type
              ? newBodyType
                ? newBodyType
                : body_type === "body_type_00"
                ? "통통"
                : "마른"
              : "선택해주세요"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ borderWidth: 0.2, borderColor: "#E8E8E8" }} />
      <View style={styles.infoRow}>
        <Text style={{ width: "35%", marginLeft: 16 }}>직장</Text>
        <Text style={company ? { color: "#4B9CFF" } : { color: "#CCCCCC" }}>
          {company ? company : "입력해주세요"}
        </Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={{ width: "35%", marginLeft: 16 }}>직업</Text>
        <Text style={job ? { color: "#4B9CFF" } : { color: "#CCCCCC" }}>
          {job ? job : "입력해주세요"}
        </Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={{ width: "35%", marginLeft: 16 }}>학력</Text>
        <TouchableOpacity onPress={hanldeModalEducation}>
          <Text
            style={
              newEducation || education
                ? { color: "#4B9CFF" }
                : { color: "#CCCCCC" }
            }>
            {newEducation
              ? newEducation
                ? newEducation
                : education
              : "선택해주세요"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoRow}>
        <Text style={{ width: "35%", marginLeft: 16 }}>학교</Text>
        <Text style={school ? { color: "#4B9CFF" } : { color: "#CCCCCC" }}>
          {school ? school : "입력해주세요"}
        </Text>
      </View>
      {openModalHeight && (
        <ModalEditHeight
          openModalHeight={openModalHeight}
          setOpenModalHeight={setOpenModalHeight}
          dialogInfo={dialogInfo}
          height={height}
          setNewHeight={setNewHeight}
        />
      )}
      {openModalBodyType && (
        <ModalEditBodyType
          openModalBodyType={openModalBodyType}
          setOpenModalBodyType={setOpenModalBodyType}
          dialogInfo={dialogInfo}
          body_type={body_type}
          setNewBodyType={setNewBodyType}
        />
      )}
      {openModalEducation && (
        <ModalEditEducation
          openModalEducation={openModalEducation}
          setOpenModalEducation={setOpenModalEducation}
          dialogInfo={dialogInfo}
          education={education}
          setNewEducation={setNewEducation}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    overflow: "scroll",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  backBtn: {
    position: "absolute",
    marginLeft: 10,
    left: 0,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  picturesBox: {
    height: 150,
    flexDirection: "column",
    borderRightColor: "blue",
  },
  picture: {
    flex: 1 / 3,
    margin: 1,
  },
  more: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
  },
  infoRow: {
    alignItems: "center",
    flexDirection: "row",
    height: 44,
  },
  introduction: {
    marginLeft: 16,
    flexDirection: "column",
  },
});

export default ScreenProfileEdit;
