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
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import moment from "moment";
import { ifIphoneX } from "react-native-iphone-x-helper";

const FindMeter = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [userDetails, saveUserDetails] = useState(null);
  const {} = useSelector(({ User }) => User);
  const [fName, saveFName] = useState("");
  const [lName, saveLName] = useState("");
  const [email, saveEmail] = useState("");

  return (
    <ActionButton
      onPress={() => setVisible(true)}
      activeScale={0.95}
      tension={50}
      friction={7}
      useNativeDriver
      customStyles={{
        height: wp(40),
        width: wp(43),
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around",
        padding: 10,
        backgroundColor: "rgba(26, 82, 118,0.8)",
        borderRadius: 8,
      }}
    >
      <Container column>
        <Typography
          color="#fff"
          variant="h1"
          customStyles={{
            fontFamily: "Lato_600SemiBold",
            fontSize: 20,
            marginBottom: 3,
          }}
        >
          Find
        </Typography>
        <Typography
          color="#fff"
          variant="title"
          customStyles={{ fontFamily: "Lato_500Medium", fontSize: 16 }}
        >
          Meter No.
        </Typography>
      </Container>
      <Image
        source={require("../../assets/icons/search.png")}
        style={{ width: 45, height: 45 }}
      />
      <Modal
        isVisible={visible}
        style={{ flex: 1, justifyContent: "flex-end", padding: 0, margin: 0 }}
        backdropColor="#1C2833"
        backdropOpacity={0.4}
        backdropTransitionInTiming={0}
        backdropTransitionOutTiming={0}
        //   onBackdropPress={() => removeFromCart(1)}
      >
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={() => setVisible(false)}>
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
                  marginBottom: 20,
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
                  Find Meter No.
                </Typography>
              </Container>
              <Container
                row
                center
                space="space-between"
                customStyles={{ marginBottom: 8, paddingHorizontal: 20 }}
              >
                <Input
                  value={fName}
                  autoFocus
                  onChangeText={(txt) => saveFName(txt)}
                  placeholder="Enter meter no."
                  placeholderTextColor="rgba(51,51,51,.6)"
                  inputStyles={{
                    color: "rgba(51,51,51,.9)",
                    fontSize: 15,
                    fontFamily: "RobotoSlab_400Regular",
                  }}
                  inputWrapperStyles={{
                    height: 40,
                    backgroundColor: "rgba(166, 172, 175, 0.15)",
                  }}
                  customStyles={{ flex: 1 }}
                />
              </Container>
            </ScrollView>

            <Container
              row
              center
              flex={1}
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
              <Container
                flex={1}
                row
                middle
                center
                customStyles={{
                  height: "100%",
                }}
              >
                <PrimaryButton
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
                    Send
                  </Typography>
                </PrimaryButton>
              </Container>
              {/* <Container
                flex={1}
                row
                space="space-between"
                center
                customStyles={{
                  height: "100%",
                }}
              >
                <PrimaryButton
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
                    Save
                  </Typography>
                </PrimaryButton>
                <PrimaryButton
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
                    View Details
                  </Typography>
                </PrimaryButton>
              </Container> */}
            </Container>
          </Container>
        </KeyboardAvoidingView>
      </Modal>
    </ActionButton>
  );
};

export default connect(null, {})(FindMeter);
