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
          customStyles={{ fontFamily: "Lato_600SemiBold", fontSize: 23 }}
        >
          Power Pay
        </Typography>
        <Typography
          color="#1A5276"
          variant="title"
          customStyles={{
            fontFamily: "Lato_400Regular",
            fontSize: 16,
            marginBottom: 10,
            // letterSpacing: -1,
          }}
        >
          0103000907210
        </Typography>
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
