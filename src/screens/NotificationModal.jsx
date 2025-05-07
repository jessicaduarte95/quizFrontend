import React from "react";
import { BasicModal } from "../components/Modal/Modal";
import { Text, View } from "react-native";
import { TitleModal } from "../components/Text/Text";
import { CloseSaveButton } from "../components/Button/Button";
import { ButtonStyle } from "../styles/ButtonStyle";

export const NotificationModal = (props) => {
  const { open, handleClose, title, text } = props;

  return (
    <BasicModal open={open} handleClose={handleClose}>
      <TitleModal>{title}</TitleModal>
      <Text>{text}</Text>
      <View style={ButtonStyle.ContainerButtonNotification}>
        <CloseSaveButton
          onPress={() => {
            handleClose();
          }}
        >
          Ok
        </CloseSaveButton>
      </View>
    </BasicModal>
  );
};
