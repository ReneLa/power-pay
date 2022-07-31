import React, { useState, useRef, useEffect, Fragment } from "react";
import { connect, useSelector } from "react-redux";
import Modal from "react-native-modal";
import PropTypes from "prop-types";
import {
  Container,
  PrimaryButton,
  Typography,
  ActionButton,
  Input,
  IconButton,
} from "./styles";
import {} from "../redux/actions";
import { MaterialIcons, AntDesign, Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  Platform,
} from "react-native";

const { height, width } = Dimensions.get("window");

const ChooseMeters = ({
  navigation,
  pickerVisible,
  setPickerVisible,
  saveMeter,
  meter,
}) => {
  // const { savedMeters } = useSelector(({ User }) => User);

  return Platform.OS === "ios" ? (
    <ActionButton
      onPress={() => setPickerVisible(true)}
      activeScale={0.95}
      tension={50}
      friction={7}
      useNativeDriver
      customStyles={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 4,
        backgroundColor: "rgba(166, 172, 175, 0.15)",
        height: 40,
      }}
    >
      <Typography
        variant={"body"}
        customStyles={{
          color: "rgba(51,51,51,.7)",
          fontSize: 15,
        }}
      >
        {meter ? meter : "Choose meter no."}
      </Typography>

      <Modal
        testID={"modal"}
        style={{ justifyContent: "flex-end", padding: 0, margin: 0 }}
        onBackdropPress={() => setPickerVisible(false)}
        isVisible={pickerVisible}
        backdropColor="#12141A"
        backdropOpacity={0.5}
        backdropTransitionInTiming={100}
        backdropTransitionOutTiming={100}
      >
        <View
          style={{
            // height: 100,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: "#fff",
          }}
        >
          <Picker
            prompt
            selectedValue={meter}
            style={{ width: "100%" }}
            itemStyle={{ color: "rgba(41,41,41,.9)", fontWeight: "bold" }}
            onValueChange={(itemValue, itemIndex) => saveMeter(itemValue)}
          >
            {/* {savedMeters.map((mtr, i) => (
              <Picker.Item key={1} label={mtr.name} value={mtr.pivot} />
            ))} */}
          </Picker>
        </View>
      </Modal>
    </ActionButton>
  ) : null;
};

export default connect(null, {})(ChooseMeters);

{
  /**


 : (
    <Container
      customStyles={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        borderRadius: 4,
        backgroundColor: "#E5E7E9",
        borderWidth: 1,
        borderColor: theme.PRIMARY_BACKGROUND_COLOR,
        height: 40,
      }}
    >
      <Picker
        selectedValue={card_no}
        style={{ width: "100%" }}
        onValueChange={(itemValue, itemIndex) => setCard(itemValue)}
        itemStyle={{ color: "red" }}
      >
        {cards.map((card, i) => (
          <Picker.Item
            key={1}
            label={card.card.last_code.toUpperCase()}
            value={card.card.last_code}
          />
        ))}
      </Picker>
    </Container>
  );
*/
}
