import React from "react";
import { Button } from "react-native";

const CustomButton = props => {
  const { title, onPress } = props;
  return <Button title={title} onPress={onPress} />;
};

export default CustomButton;
