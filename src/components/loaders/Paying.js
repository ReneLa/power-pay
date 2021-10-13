import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";

export default () => {
  const loadAnim = useRef();
  useEffect(() => {
    if (loadAnim.current) {
      loadAnim.current.play();
    }
  }, []);

  return (
    <LottieView
      ref={loadAnim}
      style={{
        position: "absolute",
        width: 90,
        height: 90,
        // marginLeft: "-17%",
        // marginTop: "-7%",
        backgroundColor: "transparent",
        zIndex: 3,
      }}
      source={require("../../../assets/animations/paying.json")}
      autoPlay
      loop={true}
      speed={2}
      autoSize
      resizeMode="cover"
    />
  );
};
