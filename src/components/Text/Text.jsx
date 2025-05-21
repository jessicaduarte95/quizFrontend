import React from "react";
import * as S from "./style";
import { Text } from "react-native";

export const Title = (props) => {
  const { children } = props;
  return <Text style={S.Text.Title}>{children}</Text>;
};

export const SubTitle = (props) => {
  const { children } = props;
  return <Text style={S.Text.SubTitle}>{children}</Text>;
};

export const TitleModal = (props) => {
  const { children } = props;
  return <Text style={S.Text.TitleModal}>{children}</Text>;
};

export const TitleChangePassword = (props) => {
  const { children } = props;
  return <Text style={S.Text.TitleChangePassword}>{children}</Text>;
};

export const TextBasic = (props) => {
  const { children } = props;
  return <Text style={S.Text.TextBasic}>{children}</Text>;
};
