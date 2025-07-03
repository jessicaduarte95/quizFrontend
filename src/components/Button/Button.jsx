import React, { forwardRef } from "react";
import * as S from "./style";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

export const Button = (props) => {
  const { children, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={S.Button.Button}>
      <Text style={S.Button.Text}>{children}</Text>
    </TouchableOpacity>
  );
};

export const CloseSaveButton = forwardRef((props, ref) => {
  const { children, onPress, type, isLoading, ...rest } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={S.Button.CloseButton}
      type={type}
      {...rest}
    >
      {!isLoading && <Text style={S.Button.TextButton}>{children}</Text>}
      {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
    </TouchableOpacity>
  );
});

export const LevelButton = (props) => {
  const { children, onPress, disabled } = props;

  const getBackgroundColor = () => {
    if (!disabled) return "#000929";
    if (disabled) return "#00061B";
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[S.Button.ButtonLevels, { backgroundColor: getBackgroundColor() }]}
      disabled={disabled}
    >
      <Text style={S.Button.Text}>{children}</Text>
    </TouchableOpacity>
  );
};

export const OptionButton = (props) => {
  const { children, onPress, disabled, correctOption, isSelected } = props;

  const getBackgroundColor = () => {
    if (correctOption && disabled && isSelected) return "#1F7A1F";
    if (!correctOption && disabled && isSelected) return "#d60000";
    return "#000929";
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[S.Button.ButtonOption, { backgroundColor: getBackgroundColor() }]}
      disabled={disabled}
    >
      <Text style={S.Button.TextOption}>{children}</Text>
    </TouchableOpacity>
  );
};
