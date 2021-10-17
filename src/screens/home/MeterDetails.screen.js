import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import {
  Container,
  Typography,
  Input,
  ActionButton,
  PrimaryButton,
} from "../../components/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { connect, useSelector } from "react-redux";
import { ProgressBar, Colors } from "react-native-paper";
import { ifIphoneX } from "react-native-iphone-x-helper";

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
      <Container row center middle>
        <ActionButton
          onPress={() => navigation.goBack()}
          customStyles={{ left: 0, position: "absolute" }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </ActionButton>
        <Typography variant="title" color="rgba(51,51,51,0.9)">
          Account Details
        </Typography>
      </Container>

      {/* Current credits */}
      <Container
        row
        bgColor="rgba(215, 219, 221,0.5)"
        customStyles={{ marginTop: 30, padding: 20, borderRadius: 10 }}
      >
        <Container column flex={0.4} space="flex-end">
          <Typography
            variant="title"
            color="rgba(51,51,51,0.8)"
            customStyles={{ marginBottom: 10 }}
          >
            Balance
          </Typography>
          <Typography variant="h1" color="rgba(51,51,51,0.9)">
            96.90
          </Typography>
        </Container>
        <Container column flex={0.6} space="flex-end" customStyles={{}}>
          <Typography variant="title" color="rgba(51,51,51,0.7)">
            on October 28, 2021
          </Typography>
        </Container>
      </Container>

      {/* power strength */}
      <Container
        row
        bgColor="rgba(231, 76, 60,0.9)"
        customStyles={{ marginTop: 30, padding: 20, borderRadius: 10 }}
      >
        <Container column flex={0.2} middle customStyles={{}}>
          <MaterialCommunityIcons
            name="network-strength-2-alert"
            size={40}
            color="#fff"
          />
        </Container>
        <Container column flex={0.8} space="flex-end" customStyles={{}}>
          <Typography
            variant="title"
            color="#fff"
            customStyles={{ marginBottom: 10 }}
          >
            Strength
          </Typography>
          <Typography variant="h1" color="#fff">
            Low
          </Typography>
        </Container>
      </Container>

      {/* Meter details */}
      <Container
        customStyles={{
          marginTop: 30,
          borderBottomColor: "rgba(215, 219, 221,1)",
          borderBottomWidth: 1,
          paddingBottom: 10,
        }}
      >
        <Typography
          variant="title"
          color="rgba(51,51,51,0.8)"
          customStyles={{ marginBottom: 15 }}
        >
          Meter Details
        </Typography>

        <Typography
          variant="title"
          color="rgba(51,51,51,0.7)"
          customStyles={{ fontSize: 16, marginBottom: 5 }}
        >
          Pivot number
        </Typography>

        <Typography variant="title" color="rgba(51,51,51,0.9)">
          01030009272321
        </Typography>
      </Container>

      {/* Owner details */}
      <Container
        customStyles={{
          marginTop: 30,
          borderBottomColor: "rgba(215, 219, 221,1)",
          borderBottomWidth: 1,
          paddingBottom: 10,
        }}
      >
        <Typography
          variant="title"
          color="rgba(51,51,51,0.8)"
          customStyles={{ marginBottom: 15 }}
        >
          Account Owner Details
        </Typography>

        <Typography
          variant="title"
          color="rgba(51,51,51,0.7)"
          customStyles={{ fontSize: 16, marginBottom: 5 }}
        >
          Names
        </Typography>

        <Typography variant="title" color="rgba(51,51,51,0.9)">
          Rene La
        </Typography>
      </Container>

      {/* usage percentage */}
      <Container
        customStyles={{
          marginTop: 30,
          paddingBottom: 10,
        }}
      >
        <Typography
          variant="title"
          color="rgba(51,51,51,0.8)"
          customStyles={{ marginBottom: 15 }}
        >
          Usage
        </Typography>

        <Typography
          variant="title"
          color="rgba(51,51,51,1)"
          customStyles={{ fontSize: 20, marginBottom: 10 }}
        >
          80%
        </Typography>

        <ProgressBar progress={0.8} color={Colors.red800} />
      </Container>

      {/* Bottom action buttons */}
      <Container
        row
        center
        space="space-around"
        customStyles={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          ...ifIphoneX({ paddingBottom: 25 }, { paddingBottom: 10 }),
        }}
      >
        <PrimaryButton
          onPress={() => {
            navigation.navigate("HISTORY-PURCHASE");
          }}
          bgColor="transparent"
          customStyles={{
            borderRadius: 20,
            paddingTop: 10,
            paddingBottom: 10,
            width: "40%",
            borderWidth: 0.5,
            borderColor: "rgba(51,51,51,0.6)",
          }}
        >
          <Typography
            variant="caption2"
            color="#313131"
            customStyles={{
              fontSize: 16,
              fontFamily: "RobotoSlab_500Medium",
            }}
          >
            History
          </Typography>
        </PrimaryButton>
        <PrimaryButton
          onPress={() => {
            // setVisible(null);
            // showBuy(true);
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
