import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Dash from "react-native-dash";
import { connect, useSelector } from "react-redux";
import {} from "../redux/actions";
import {
  Container,
  PrimaryButton,
  Typography,
  ActionButton,
  Input,
} from "./styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AntDesign, Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";
import moment from "moment";
import { ifIphoneX } from "react-native-iphone-x-helper";

const AccountDetails = ({ navigation, visible, setVisible, showBuy }) => {
  const [userDetails, saveUserDetails] = useState(null);
  const [fName, saveFName] = useState("");
  const [lName, saveLName] = useState("");
  const [email, saveEmail] = useState("");

  return (
    <Modal
      isVisible={visible}
      style={{ flex: 1, justifyContent: "flex-end", padding: 0, margin: 0 }}
      backdropColor="#1C2833"
      backdropOpacity={0.4}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={0}
      //   onBackdropPress={() => removeFromCart(1)}
    >
      <TouchableWithoutFeedback onPress={() => setVisible(null)}>
        <Container flex={1} />
      </TouchableWithoutFeedback>
      <Container
        column
        bgColor="#fff"
        customStyles={{
          height: hp(40),
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          paddingTop: 10,
          shadowColor: "rgba(0,0,0,0.5)",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 2.84,
          elevation: 5,
        }}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingHorizontal: 14,
            paddingTop: 10,
            // backgroundColor: "green",
          }}
        >
          <Container
            column
            middle
            center
            customStyles={{
              paddingBottom: 15,
              marginBottom: 10,
            }}
          >
            <Typography
              variant="h1"
              color="rgba(49,49,49,0.8)"
              customStyles={{
                fontSize: 17,
                marginBottom: 3,
                fontFamily: "Lato_600SemiBold",
              }}
            >
              Meter recent actions
            </Typography>
            <Container
              customStyles={{
                borderBottomColor: "#000",
                borderBottomWidth: 4,
                width: 40,
                marginTop: 5,
              }}
            />
          </Container>
          <Container
            row
            center
            space="space-between"
            customStyles={{ marginBottom: 8, paddingHorizontal: 20 }}
          >
            <Container column center space="space-between">
              <FontAwesome name="dot-circle-o" size={18} color="black" />
              <Container
                customStyles={{
                  height: 30,
                  borderLeftWidth: 2,
                  borderLeftColor: "black",
                  marginVertical: 5,
                }}
              />
              <FontAwesome name="dot-circle-o" size={18} color="black" />
            </Container>
            <Container flex={1}></Container>
          </Container>

          <Container
            row
            center
            space="space-between"
            customStyles={{ marginBottom: 8, paddingHorizontal: 18 }}
          >
            <Container column center space="space-between">
              <FontAwesome name="dot-circle-o" size={18} color="black" />
              <Container
                customStyles={{
                  height: 30,
                  borderLeftWidth: 2,
                  borderLeftColor: "black",
                  marginVertical: 5,
                }}
              />
              <FontAwesome name="dot-circle-o" size={18} color="black" />
            </Container>
            <Container flex={1}></Container>
          </Container>
        </ScrollView>

        <Container
          row
          center
          space="space-evenly"
          bgColor="rgba(52, 73, 94,0.8)"
          customStyles={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            paddingHorizontal: 15,
            paddingTop: 15,
            ...ifIphoneX({ paddingBottom: 30 }, { paddingBottom: 15 }),
          }}
        >
          <PrimaryButton
            onPress={() => {
              setVisible(null);
              navigation.navigate("METER-DETAILS");
            }}
            bgColor="transparent"
            customStyles={{
              borderRadius: 20,
              paddingTop: 10,
              paddingBottom: 10,
              width: "45%",
              borderWidth: 0.5,
              borderColor: "#fff",
            }}
          >
            <Typography
              variant="caption2"
              color="#fff"
              customStyles={{
                fontSize: 16,
                fontFamily: "RobotoSlab_500Medium",
              }}
            >
              View Details
            </Typography>
          </PrimaryButton>
          <PrimaryButton
            onPress={() => {
              setVisible(null);
              showBuy(true);
            }}
            bgColor="rgba(231, 76, 60,0.9)"
            customStyles={{
              borderRadius: 20,
              paddingTop: 10,
              paddingBottom: 10,
              width: "45%",
            }}
          >
            <Typography
              variant="caption2"
              color="#fff"
              customStyles={{
                fontSize: 16,
                fontFamily: "RobotoSlab_500Medium",
              }}
            >
              Buy Credits
            </Typography>
          </PrimaryButton>
        </Container>
      </Container>
    </Modal>
  );
};

export default connect(null, {})(AccountDetails);
