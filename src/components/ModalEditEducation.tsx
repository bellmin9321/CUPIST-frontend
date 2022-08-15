import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";

type modalProps = {
  openModalEducation: boolean;
  setOpenModalEducation: any;
  dialogInfo: any;
  education: string;
  setNewEducation: any;
};

function ModalEditEducation({
  openModalEducation,
  setOpenModalEducation,
  dialogInfo,
  education,
  setNewEducation,
}: modalProps) {
  const [educationList, setEducationList] = useState([] as any);

  const editProperty = (index: number) => {
    setNewEducation(educationList[index].name);
    setOpenModalEducation(false);
  };

  const { educations } = dialogInfo;

  useEffect(() => {
    setEducationList(educations);
  }, []);

  return (
    <Modal
      isVisible={openModalEducation}
      onBackdropPress={() => setOpenModalEducation(false)}>
      <View style={styles.modalBox}>
        <View style={styles.titlebox}>
          <Text style={styles.title}>학력</Text>
        </View>
        <FlatList
          data={educationList}
          renderItem={({ item, index }: { item: any; index: number }) => {
            return (
              <TouchableOpacity
                style={styles.property}
                onPress={() => editProperty(index)}>
                <Text style={education === item ? { color: "#4B9CFF" } : null}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBox: {
    marginHorizontal: 40,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    maxWidth: 612,
  },
  titlebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  title: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
  property: {
    justifyContent: "center",
    height: 44,
    marginHorizontal: 15,
  },
});

export default ModalEditEducation;
