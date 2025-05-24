import { Text, View } from "react-native";

import { BasicModal } from "../components/Modal/Modal";
import { TitleModal } from "../components/Text/Text";
import { CloseSaveButton } from "../components/Button/Button";

import { NotificationStyle } from "../styles/NotificationStyle";

export const NotificationModal = (props) => {
  const { open, handleClose, title, text } = props;

  return (
    <BasicModal open={open} handleClose={handleClose}>
      <TitleModal>{title}</TitleModal>
      <Text>{text}</Text>
      <View style={NotificationStyle.ContainerButtonNotification}>
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
