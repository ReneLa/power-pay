import React from "react";
import { Text, StyleSheet } from "react-native";

const Typography = (props) => {
  const {
    variant,
    size,
    transform,
    align,
    spacing, // letter-spacing
    customStyles,
    children,
    color,
    className,
    ...other
  } = props;

  const textStyles = [
    styles.text,
    variant === "h1" && styles.h1,
    variant === "h2" && styles.h2,
    variant === "title" && styles.title,
    variant === "body" && styles.body,
    variant === "caption" && styles.caption,
    variant === "caption2" && styles.caption2,
    color && { color: color },
    customStyles,
  ];

  return (
    <Text className={className} style={textStyles} {...other}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  // default style
  text: {
    color: "#FBFCFC",
    fontSize: 18,
    letterSpacing: 0.25,
    fontWeight: "500",
  },
  // variations
  h1: {
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: 0,
  },
  h2: {
    fontSize: 24,
    letterSpacing: 0.15,
  },

  title: {
    fontSize: 20,
    letterSpacing: -1,
    fontWeight: "600",
  },
  body: {
    fontSize: 16,
    letterSpacing: -1,
  },
  caption: {
    fontSize: 13,
    letterSpacing: 0.19,
  },
  caption2: {
    fontSize: 13,
    letterSpacing: 0.19,
  },
});
