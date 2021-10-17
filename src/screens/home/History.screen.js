import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
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

const HistoryTrans = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [meterNo, setMeter] = useState("");
  const {} = useSelector(({ User }) => User);

  const renderHistory = (hist) => {
    return (
      <Container
        row
        bgColor="rgba(215, 219, 221,0.5)"
        customStyles={{ marginBottom: 15, padding: 20, borderRadius: 10 }}
      >
        <Container column flex={0.4} space="flex-end">
          <Typography
            variant="title"
            color="rgba(51,51,51,0.8)"
            customStyles={{ marginBottom: 10 }}
          >
            Credits
          </Typography>
          <Typography
            variant="h1"
            color="rgba(51,51,51,0.9)"
            customStyles={{ fontSize: 20 }}
          >
            96.90
          </Typography>
        </Container>
        <Container column flex={0.6} space="flex-end" customStyles={{}}>
          <Container row space="space-between">
            <Typography
              variant="title"
              color="rgba(51,51,51,0.8)"
              customStyles={{ marginBottom: 10, fontSize: 17 }}
            >
              Amount
            </Typography>
            <Typography
              variant="title"
              color="rgba(51,51,51,0.8)"
              customStyles={{ marginBottom: 10 }}
            >
              20000
            </Typography>
          </Container>
          <Container row space="flex-end">
            <Typography variant="title" color="rgba(51,51,51,0.7)">
              on October 28, 2021
            </Typography>
          </Container>
        </Container>
      </Container>
    );
  };
  return (
    <Container
      flex={1}
      bgColor="#F4F6F7"
      customStyles={{ paddingHorizontal: 20, paddingTop: insets.top }}
    >
      <Container row center middle customStyles={{ marginBottom: 30 }}>
        <ActionButton
          onPress={() => navigation.goBack()}
          customStyles={{ left: 0, position: "absolute" }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </ActionButton>
        <Typography variant="title" color="rgba(51,51,51,0.9)">
          Purchase History
        </Typography>
      </Container>
      <ScrollView style={{ flex: 1 }}>
        <Typography
          variant="title"
          color="rgba(51,51,51,0.8)"
          customStyles={{ marginBottom: 10 }}
        >
          Today
        </Typography>
        {/* Current credits */}
        {[1].map((hst) => renderHistory(hst))}

        <Typography
          variant="title"
          color="rgba(51,51,51,0.8)"
          customStyles={{ marginBottom: 10 }}
        >
          Last Months
        </Typography>
        {/* Current credits */}
        {[1, 2, 3].map((hst) => renderHistory(hst))}
      </ScrollView>
    </Container>
  );
};

export default connect(null, {})(HistoryTrans);
const styles = StyleSheet.create({
  btnTiles: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
