import React from "react";
import {
  Text, TextInput,
  TouchableOpacity,

  View
} from "react-native";
import styled, { css } from "styled-components/native";
import Container from "./Container";

const Wrapper = styled(Container)`
  display: flex;
  padding-bottom: 5px;
  padding-top: 5px;
  ${(props) => props.customStyles};
`;
const InputWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  height: 45px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#181920")};
  border-radius: ${({ radius }) => (radius ? radius : "5px")};

  ${({ border }) =>
    border &&
    css`
      border-bottom-color: ${border};
      border-bottom-width: 0.7px;
    `};
  ${(props) => props.inputWrapperStyles};
`;
const InputText = styled(TextInput)`
  display: flex;
  flex: 1;
  font-size: 18px;
  padding: 8px;
  color: #f5f5f5;
  ::placeholder {
    color: red;
    font-weight: 400;
    font-size: 10px;
  }
  ${(props) => props.inputStyles};
`;
const OutlinedInput = styled(InputText)`
  border-radius: 3px;
  border: 0.5px solid gray;
  padding: 15px 10px;
  ${(props) => props.inputStyles};
`;
const LeftIcon = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
const RightButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Label = styled(Text)`
  color: #fff;
  ${(props) => props.labelStyles}
`;

const Input = ({
  secure,
  label,
  borderColor,
  bgColor,
  outlined,
  borderRadius,
  icon,
  rightBtn,
  height,
  onRightPress,
  inputStyles,
  customStyles,
  labelStyles,
  inputWrapperStyles,
  number,
  email,
  phone,
  ...inputProps
}) => {
  const [toggleSecure, setToggleSecure] = React.useState(false);
  const isSecure = toggleSecure ? false : secure;

  const inputType = email
    ? "email-address"
    : number
    ? "numeric"
    : phone
    ? "phone-pad"
    : "default";

  return (
    <Wrapper customStyles={customStyles}>
      {label && <Label labelStyles={labelStyles}>{label}</Label>}
      <InputWrapper
        radius={borderRadius}
        bgColor={bgColor}
        inputWrapperStyles={inputWrapperStyles}
      >
        {icon && <LeftIcon labelStyles={labelStyles}>{icon}</LeftIcon>}
        <InputText
          secureTextEntry={isSecure}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          inputStyles={inputStyles}
          {...inputProps}
        />
        {rightBtn && <RightButton>{rightBtn}</RightButton>}
      </InputWrapper>
    </Wrapper>
  );
};

export default Input;
