import React from "react";
import * as S from "./style";
import { TextInput, Text } from "react-native";
import { useController } from "react-hook-form";

export const Input = (props) => {
  const { placeholder, control, name, rules, secureTextEntry = false } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ control, name, defaultValue: "", rules });

  return (
    <>
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        secureTextEntry={secureTextEntry}
        style={S.Input.Input}
        placeholder={placeholder}
        placeholderTextColor="#D0D1CE"
      />
      {error && <Text style={S.Input.TextError}>{error.message}</Text>}
    </>
  );
};
