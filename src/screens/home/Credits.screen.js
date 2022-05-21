import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import {
  Container,
  Typography,
  Input,
  ActionButton,
} from "../../components/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { connect, useSelector } from "react-redux";

const CreditsDetails = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [meterNo, setMeter] = useState("");
  const {} = useSelector(({ User }) => User);

  return (
    <Container
      flex={1}
      bgColor="#F4F6F7"
      customStyles={{ paddingHorizontal: 20, paddingTop: insets.top }}
    >
      <Container row center space="space-between">
        <ActionButton onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </ActionButton>
      </Container>
      <Container flex={0.1} space="space-around" center>
        <Typography
          color="#313131"
          variant="h1"
          customStyles={{
            fontFamily: "Lato_600SemiBold",
            fontSize: 23,
            marginBottom: 20,
          }}
        >
          Power Pay
        </Typography>
      </Container>
      <Container
        flex={0.6}
        bgColor="rgba(214, 219, 223,0.9)"
        customStyles={{ marginHorizontal: 15, borderRadius: 10, padding: 20 }}
      >
        <Container middle center>
          <Typography variant="title" color="rgba(51,51,51,0.7)">
            Okay, Purchase successful
          </Typography>
        </Container>
        <Container middle center>
          <Typography
            variant="title"
            color="rgba(51,51,51,0.7)"
            customStyles={{ fontSize: 18 }}
          >
            01030009272321
          </Typography>
        </Container>
        <Container middle center>
          <Typography
            variant="title"
            color="rgba(51,51,51,0.7)"
            customStyles={{ fontSize: 18 }}
          >
            Rene La
          </Typography>
        </Container>
        <Container
          middle
          center
          flex={0.6}
          // bgColor="red"
          customStyles={{ marginTop: 10 }}
        >
          <Image
            source={require("../../../assets/icons/checked.png")}
            style={{ width: 80, height: 80, marginBottom: 20 }}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default connect(null, {})(CreditsDetails);
const styles = StyleSheet.create({
  btnTiles: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
