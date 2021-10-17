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
import ChooseMeter from "./ChooseMeter.picker";
import Paying from "./loaders/Paying";

const BuyEnergy = ({ navigation, visible, setVisible }) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const {} = useSelector(({ User }) => User);
  const [fName, saveFName] = useState("");
  const [lName, saveLName] = useState("");
  const [email, saveEmail] = useState("");
  const [meter, saveMeter] = useState(null);
  const [loading, setLoading] = useState(false);

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
        backgroundColor: "rgba(52, 73, 94,0.8)",
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
          Buy
        </Typography>
        <Typography
          color="#fff"
          variant="title"
          customStyles={{ fontFamily: "Lato_500Medium", fontSize: 16 }}
        >
          Electricity
        </Typography>
      </Container>
      <Image
        source={require("../../assets/icons/energy.png")}
        style={{ width: 40, height: 40 }}
      />
      <Modal
        isVisible={visible}
        style={{ flex: 1, justifyContent: "flex-end", padding: 0, margin: 0 }}
        backdropColor="#1C2833"
        backdropOpacity={0.7}
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
              height: hp(45),
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
                // paddingTop: 10,
                // backgroundColor: "green",
              }}
            >
              <Container
                column
                middle
                center
                customStyles={{ paddingVertical: 10 }}
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
                  Meter and payment
                </Typography>
                <Typography
                  variant="title"
                  color="rgba(49,49,49,0.7)"
                  customStyles={{
                    fontSize: 17,
                    marginBottom: 3,
                    fontFamily: "Lato_400Regular",
                  }}
                >
                  Please add specifying parameters
                </Typography>
              </Container>

              <Container
                row
                center
                customStyles={{ marginBottom: 8, marginTop: 20 }}
              >
                <Typography
                  variant="h1"
                  color="rgba(49,49,49,0.8)"
                  customStyles={{
                    fontSize: 17,
                    marginRight: 10,
                    fontFamily: "Lato_500Medium",
                  }}
                >
                  Meter
                </Typography>
                <ChooseMeter
                  meter={meter}
                  saveMeter={saveMeter}
                  pickerVisible={pickerVisible}
                  setPickerVisible={setPickerVisible}
                />
              </Container>

              {/* momo number */}
              <Container row center>
                <Typography
                  variant="h1"
                  color="rgba(49,49,49,0.8)"
                  customStyles={{
                    fontSize: 17,
                    marginRight: 10,
                    fontFamily: "Lato_500Medium",
                  }}
                >
                  MoMo
                </Typography>
                <Input
                  value={lName}
                  onChangeText={(txt) => saveLName(txt)}
                  placeholderTextColor="rgba(51,51,51,.6)"
                  placeholder="Enter momo number"
                  keyboardType="number-pad"
                  inputStyles={{
                    color: "rgba(51,51,51,.9)",
                    fontSize: 15,
                    fontFamily: "RobotoSlab_400Regular",
                  }}
                  inputWrapperStyles={{
                    height: 40,
                    backgroundColor: "rgba(166, 172, 175, 0.15)",
                  }}
                  customStyles={{ flex: 0.8, marginBottom: 8 }}
                />
              </Container>

              {/* client address */}
              <Container row center customStyles={{ marginBottom: 8 }}>
                <Typography
                  variant="h1"
                  color="rgba(49,49,49,0.8)"
                  customStyles={{
                    fontSize: 17,
                    marginRight: 10,
                    fontFamily: "Lato_500Medium",
                  }}
                >
                  Amount
                </Typography>
                <Input
                  value={email}
                  onChangeText={(txt) => saveEmail(txt)}
                  placeholder="Provide Amount"
                  keyboardType="number-pad"
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
                  customStyles={{ flex: 0.8 }}
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
                height: hp(10),
                ...ifIphoneX({ paddingBottom: 30 }, { paddingBottom: 15 }),
              }}
            >
              <Container
                flex={1}
                middle
                center
                customStyles={{
                  height: "100%",
                }}
              >
                {loading ? (
                  <Paying />
                ) : (
                  <PrimaryButton
                    onPress={() => {
                      setLoading(true);
                      setTimeout(() => {
                        setLoading(false);
                        setVisible(false);
                        navigation.navigate("CREDITS");
                      }, 2000);
                    }}
                    bgColor="rgba(231, 76, 60,0.9)"
                    customStyles={{
                      borderRadius: 20,
                      paddingTop: 10,
                      paddingBottom: 10,
                      width: "70%",
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
                      Confirm Pay
                    </Typography>
                  </PrimaryButton>
                )}
              </Container>
            </Container>
          </Container>
        </KeyboardAvoidingView>
      </Modal>
    </ActionButton>
  );
};

export default connect(null, {})(BuyEnergy);
