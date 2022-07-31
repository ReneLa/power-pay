import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";
import Modal from "react-native-modal";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { connect, useDispatch, useSelector } from "react-redux";
import { top_up } from "../redux/actions";
import Paying from "./loaders/Paying";
import {
  ActionButton,
  Container,
  Input,
  PrimaryButton,
  Typography,
} from "./styles";

const BuyEnergy = ({ navigation, visible, setVisible, meterNo }) => {
  const dispatch = useDispatch();
  const [pickerVisible, setPickerVisible] = useState(false);
  const { paySuccess, paying, error } = useSelector(({ Pay }) => Pay);
  const [amount, setAmount] = useState("");
  const [meter, setMeter] = useState(meterNo ? meterNo : "");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      setAmount("");
      setMeter("");
      setPhone("");
    };
  }, []);
  useEffect(() => {
    if (paySuccess) {
      setVisible(false);
      // navigation.navigate("CREDITS");
    }
  }, [paySuccess]);

  const onPaying = () => {
    dispatch(top_up({ meter, phone, amount }));
  };
  return (
    <Modal
      isVisible={visible}
      style={{ flex: 1, justifyContent: "flex-end", padding: 0, margin: 0 }}
      backdropColor="#1C2833"
      backdropOpacity={0.7}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={0}
      onBackdropPress={() => setVisible(false)}
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
              <Input
                value={meter}
                onChangeText={(txt) => setMeter(txt)}
                placeholderTextColor="rgba(51,51,51,.6)"
                placeholder="Enter meter number"
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
                value={phone}
                onChangeText={(txt) => setPhone(txt)}
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
                value={amount}
                onChangeText={(txt) => setAmount(txt)}
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
              {paying ? (
                <Paying />
              ) : error ? (
                <Typography
                  variant="caption2"
                  color="#fff"
                  customStyles={{
                    fontSize: 16,
                    fontFamily: "RobotoSlab_500Medium",
                  }}
                >
                  {"Failed. Try again"}
                </Typography>
              ) : !paying && !error ? (
                <PrimaryButton
                  onPress={() => {
                    onPaying();
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
              ) : null}
            </Container>
          </Container>
        </Container>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default connect(null, {})(BuyEnergy);
