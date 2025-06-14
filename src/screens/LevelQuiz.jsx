import { View, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { BasicModal } from "../components/Modal/Modal";

import { LevelQuizStyle } from "../styles/LevelQuizStyle";

export const LevelQuiz = (props) => {
  const { open, handleClose, questions } = props;
  return (
    <BasicModal open={open} handleClose={handleClose}>
      <View>
        <View style={LevelQuizStyle.CloseButtom}>
          <TouchableOpacity
            onPress={() => {
              handleClose();
            }}
          >
            <Icon name="close" size={27} color="#D0D1CE" />
          </TouchableOpacity>
        </View>
      </View>
    </BasicModal>
  );
};
