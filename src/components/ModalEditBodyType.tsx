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
  openModalBodyType: boolean;
  setOpenModalBodyType: any;
  dialogInfo: any;
  body_type: string;
  setNewBodyType: any;
};

function ModalEditBodyType({
  openModalBodyType,
  setOpenModalBodyType,
  dialogInfo,
  body_type,
  setNewBodyType,
}: modalProps) {
  const [bodyTypeList, setBodyTypeList] = useState([] as any);

  const editProperty = (index: number) => {
    setNewBodyType(bodyTypeList[index].name);
    setOpenModalBodyType(false);
  };

  const { body_types } = dialogInfo;

  useEffect(() => {
    setBodyTypeList(body_types);
  }, []);

  return (
    <Modal
      isVisible={openModalBodyType}
      onBackdropPress={() => setOpenModalBodyType(false)}>
      <View style={styles.modalBox}>
        <View style={styles.titlebox}>
          <Text style={styles.title}>체형</Text>
        </View>
        <FlatList
          data={bodyTypeList}
          renderItem={({ item, index }: { item: any; index: number }) => {
            return (
              <TouchableOpacity
                style={styles.property}
                onPress={(e: any) => editProperty(index)}>
                <Text style={body_type === item ? { color: "#4B9CFF" } : null}>
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

export default ModalEditBodyType;
