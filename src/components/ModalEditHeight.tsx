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
  openModalHeight: boolean;
  setOpenModalHeight: any;
  dialogInfo: any;
  height: string;
  setNewHeight: any;
};

function ModalEditProperty({
  openModalHeight,
  setOpenModalHeight,
  dialogInfo,
  height,
  setNewHeight,
}: modalProps) {
  const [heightList, setHeightList] = useState([] as any);

  const editProperty = (index: number) => {
    setNewHeight(heightList[index]);
    setOpenModalHeight(false);
  };

  const { height_range } = dialogInfo;

  useEffect(() => {
    setHeightList(
      [...Array(height_range.max - height_range.min + 1).keys()].map(
        (key) => key + height_range.min,
      ),
    );
  }, []);

  return (
    <Modal
      isVisible={openModalHeight}
      onBackdropPress={() => setOpenModalHeight(false)}>
      <View style={styles.modalBox}>
        <View style={styles.titlebox}>
          <Text style={styles.title}>키</Text>
        </View>
        <View style={styles.category}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={heightList}
            renderItem={({ item, index }: { item: string; index: number }) => {
              return (
                <TouchableOpacity
                  style={styles.property}
                  onPress={() => editProperty(index)}>
                  <Text style={height === item ? { color: "#4B9CFF" } : null}>
                    {item}cm
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
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
  category: {
    height: 352,
  },
  property: {
    justifyContent: "center",
    height: 44,
    marginHorizontal: 15,
  },
});

export default ModalEditProperty;
