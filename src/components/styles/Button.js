import React from "react";
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import TouchableScale from "react-native-touchable-scale";

const Button = styled(TouchableScale)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const PrimaryButton = styled(Button)`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${({ theme, bgColor }) => (bgColor ? bgColor : "#198CFF")};
  min-height: 25px;
  border-color: ${({ theme, bgColor }) => (bgColor ? bgColor : "#198CFF")};

  ${(props) => props.customStyles};
`;

const OutlinedButton = styled(Button)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-width: 0.5px;
  border-style: solid;
  ${({ bColor }) =>
    bColor &&
    css`
      border-color: ${bColor};
    `}

  border-radius: 5px;
  ${(props) => props.customStyles};
`;

const CommandButton = styled(Button)`
  height: 32px;
  background-color: ${({ theme, color }) => (color ? color : " #181920")};
  border-width: 0;
  border-radius: 0px;
  ${(props) => props.customStyles};
`;
const ActionButton = styled(Button)`
  padding-top: 0px;
  padding-right: 4px;
  padding-bottom: 0px;
  padding-left: 4px;
  ${(props) => props.customStyles};
`;

const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};

  border-radius: ${({ size }) => (size ? size : 0)};

  ${(props) => props.customStyles};
`;

export {
  PrimaryButton,
  OutlinedButton,
  CommandButton,
  ActionButton,
  IconButton,
};
