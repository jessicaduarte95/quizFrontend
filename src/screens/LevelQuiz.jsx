import { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { BasicModal } from "../components/Modal/Modal";
import { TitleModal, TextNumberQuestion } from "../components/Text/Text";
import { LevelButton } from "../components/Button/Button";

import { LevelQuizStyle } from "../styles/LevelQuizStyle";

export const LevelQuiz = (props) => {
  const { open, handleClose, questions, options } = props;
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState("");

  const handleNextQuestion = () => {
    setNumberQuestion((number) => number + 1);
  };

  const handleUpdateQuestion = () => {
    const result = questions.filter(
      (indice) => indice.numberQuestion == numberQuestion
    );
    setCurrentQuestion(result[0]?.question);
  };

  const handleFinishLevel = () => {
    setNumberQuestion(1);
    handleClose();
  };

  useEffect(() => {
    handleUpdateQuestion();
  }, [numberQuestion, questions]);
  return (
    <BasicModal open={open} handleClose={handleClose}>
      <View>
        <View style={LevelQuizStyle.CloseButton}>
          <TouchableOpacity
            onPress={() => {
              handleClose();
            }}
          >
            <Icon name="close" size={27} color="#D0D1CE" />
          </TouchableOpacity>
        </View>
        <TitleModal>{currentQuestion}</TitleModal>
        <TextNumberQuestion>Pergunta {numberQuestion}/10</TextNumberQuestion>
        <View style={LevelQuizStyle.NextButton}>
          <LevelButton
            onPress={() => {
              {
                numberQuestion != 10
                  ? handleNextQuestion()
                  : handleFinishLevel();
              }
            }}
          >
            Próxima
          </LevelButton>
        </View>
      </View>
    </BasicModal>
  );
};
