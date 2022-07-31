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
import { verifyMeter } from "../../redux/actions";
import BuyEnergy from "../../components/Buy.modal";
import FindMeter from "../../components/FindMeter.modal";
import Alert from "../../components/alert";
import AccountDetails from "../../components/AccountDetails.modal";
import Emergency from "../../components/emergency";

const Home = ({ navigation, verifyMeter }) => {
  const insets = useSafeAreaInsets();
  const [meterNo, setMeter] = useState("");
  const { meterInfo, verifying, savedMeters } = useSelector(({ User }) => User);
  const [chosenMeter, setChooseMeter] = useState(null);
  const [buyCredits, setBuyCredits] = useState(false);
  
  let emergency =
    "Please bbare with us as we are planning to repair bobin on your Area and we are expecting to cut off electricity from 1 Am to  5AM";

  const handleSubmit = () => {
    verifyMeter(meterNo);
  };

  const renderMeter = (mtr) => {
    return (
      <ActionButton
        onPress={() => {
          setChooseMeter(mtr);
        }}
        activeScale={0.95}
        tension={50}
        friction={7}
        useNativeDriver
        customStyles={{
          backgroundColor: "rgba(215, 219, 221,0.9)",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        <Typography
          color="#313131"
          variant="title"
          customStyles={{
            fontFamily: "Lato_500Medium",
            fontSize: 18,
            marginBottom: 5,
            // letterSpacing: -1,
          }}
        >
          {mtr.name}
        </Typography>
        <Typography
          color="#1A5276"
          variant="title"
          customStyles={{
            fontFamily: "Lato_400Regular",
            fontSize: 16,
            marginBottom: 3,
            // letterSpacing: -1,
          }}
        >
          {`Pivot : ${mtr.pivot}`}
        </Typography>
      </ActionButton>
    );
  };
  return (
    <Container
      flex={1}
      customStyles={{ paddingHorizontal: 20, paddingTop: insets.top }}
    >
      {/* header  */}
      <Container row center customStyles={{ paddingVertical: 10 }}>
        <Typography
          color="#313131"
          variant="h1"
          customStyles={{ fontFamily: "Lato_600SemiBold", fontSize: 23 }}
        >
          Power Pay
        </Typography>
      </Container>

      {/* action buttons */}
      <Container
        row
        center
        customStyles={{ paddingVertical: 10}}
        space="space-between"
      >
        <BuyEnergy
          navigation={navigation}
          visible={buyCredits}
          setVisible={setBuyCredits}
        />
        <FindMeter />
        
      </Container>

      <Container
        row
        center
        customStyles={{ paddingVertical: 10}}
        space="space-between"
      >
        <Alert/>
        <Emergency/>
        </Container>

      {/* Saved meter number */}
      <Container customStyles={{ paddingTop: 20 }}>
        <Typography
          color="#A6ACAF"
          customStyles={{
            fontFamily: "Lato_500Medium",
            fontSize: 16,
            marginBottom: 10,
          }}
        >
          Recent Meters
        </Typography>
        {savedMeters.map((mtr) => renderMeter(mtr))}
      </Container>
      {chosenMeter && (
        <AccountDetails
          navigation={navigation}
          visible={chosenMeter}
          setVisible={setChooseMeter}
          showBuy={setBuyCredits}
        />
      )}
    </Container>
  );
};

export default connect(null, { verifyMeter })(Home);
const styles = StyleSheet.create({
  btnTiles: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
