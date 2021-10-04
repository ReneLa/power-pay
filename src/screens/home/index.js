import React from "react";
import { StyleSheet, Text, View } from "react-native";
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

const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <Container
      flex={1}
      customStyles={{ paddingHorizontal: 20, paddingTop: insets.top }}
    >
      <Container column flex={0.2} customStyles={{ paddingTop: 30 }}>
        <Typography
          variant="title"
          color="#313131"
          customStyles={{
            textAlign: "center",
            fontSize: 17,
            fontFamily: "Lato_700Bold",
            marginBottom: 20,
          }}
        >
          Enter Cash Power No.
        </Typography>
        <Input
          // value={query}
          // onChangeText={(txt) => onChange(txt)}
          // onFocus={() => animateWidth(true)}
          // onBlur={() => animateWidth(false)}
          returnKeyType="search"
          placeholderTextColor="rgba(51,51,51,.6)"
          inputStyles={{
            color: "rgba(51,51,51,.9)",
            fontSize: 16,
            fontFamily: "Lato_400Regular",
          }}
          placeholder="Enter meter number"
          inputWrapperStyles={{
            borderRadius: 15,
            backgroundColor: "rgba(49,49,49,0.2)",
            height: hp(5.3),
            margin: 0,
            paddingHorizontal: 10,
          }}
          customStyles={{ flex: 1, margin: 0, padding: 0 }}
          icon={<AntDesign name="search1" size={16} color="rgba(0,0,0,.5)" />}
        />
      </Container>
      <Container column flex={0.2} customStyles={{ paddingTop: 10 }}>
        <Typography
          variant="title"
          color="#313131"
          customStyles={{
            textAlign: "center",
            fontSize: 17,
            fontFamily: "Lato_700Bold",
            marginBottom: 20,
          }}
        >
          You Saved Meters
        </Typography>
        {[1, 2].map((mtr) => {
          return <ActionButton></ActionButton>;
        })}
      </Container>
    </Container>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
