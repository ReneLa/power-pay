import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  ActionButton,
  Container,
  PrimaryButton,
  Typography,
} from "../../components/styles";
import { useNavigation } from "@react-navigation/native";
import { get_tranx_history } from "../../redux/actions";
import BuyEnergy from "../../components/Buy.modal";

const CreditsDetails = ({}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [buyCredits, setBuyCredits] = useState(false);
  const [meterNo, setMeter] = useState("");
  const { pivot } = useSelector(({ Meter }) => Meter);
  const { client, location } = pivot;
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

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 10 }}
      >
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
              Status
            </Typography>
            <Typography variant="h1" color="rgba(51,51,51,0.9)">
              {`${pivot.pivot.unit} units`}
            </Typography>
          </Container>
          <Container column flex={0.6} space="flex-end" customStyles={{}}>
            <Typography variant="title" color="rgba(51,51,51,0.7)">
              {new Date().toDateString()}
            </Typography>
          </Container>
        </Container>

        {/* power strength */}
        <Container
          row
          bgColor={
            pivot.pivot.unit < 5
              ? "rgba(231, 76, 60,0.9)"
              : pivot.pivot.unit < 12
              ? "orange"
              : "green"
          }
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
              {pivot.pivot.unit < 5
                ? "Low"
                : pivot.pivot.unit < 12
                ? "Medium"
                : "Excelent"}
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
            {pivot?.pivot.number}
          </Typography>

          <Typography
            variant="title"
            color="rgba(51,51,51,0.7)"
            customStyles={{ fontSize: 16, marginBottom: 5, marginTop: 20 }}
          >
            Location
          </Typography>

          <Typography variant="title" color="rgba(51,51,51,0.9)">
            {location}
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
            {client?.first_name + " " + client?.last_name}
          </Typography>
          <Typography
            variant="title"
            color="rgba(51,51,51,0.7)"
            customStyles={{ fontSize: 16, marginBottom: 5, marginTop: 10 }}
          >
            Phone
          </Typography>

          <Typography variant="title" color="rgba(51,51,51,0.9)">
            {client?.phone}
          </Typography>
        </Container>
      </ScrollView>

      {/* Bottom action buttons */}
      <Container
        row
        center
        bgColor="#fff"
        space="space-around"
        customStyles={{
          paddingTop: 15,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          ...ifIphoneX({ paddingBottom: 25 }, { paddingBottom: 10 }),
        }}
      >
        <PrimaryButton
          onPress={() => {
            dispatch(get_tranx_history(pivot?.pivot.number));
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
          onPress={() => setBuyCredits(true)}
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
      <BuyEnergy
        navigation={navigation}
        meter={pivot?.pivot.number}
        visible={buyCredits}
        setVisible={setBuyCredits}
      />
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
