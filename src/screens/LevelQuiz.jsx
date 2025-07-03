import { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { BasicModal } from "../components/Modal/Modal";
import { TitleModal, TextNumberQuestion } from "../components/Text/Text";
import { LevelButton, OptionButton } from "../components/Button/Button";

import { LevelQuizStyle } from "../styles/LevelQuizStyle";

export const LevelQuiz = (props) => {
  const { open, handleClose, questions, options } = props;
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentOptions, setCurrentOptions] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [correctOption, setCorrectOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [points, setPoints] = useState(0);

  const handleNextQuestion = () => {
    setNumberQuestion((number) => number + 1);
    if (selectedQuestion?.correct) setPoints((prev) => prev + 1);

    setSelectedQuestion(null);
  };

  const handleUpdateQuestion = () => {
    const result = questions.filter(
      (indice) => indice.numberQuestion == numberQuestion
    );
    setCurrentQuestion(result[0]?.question);
  };

  const handleUpdateOptions = () => {
    const result = options.filter(
      (indice) => indice.question == numberQuestion
    );
    setCurrentOptions(result);
  };

  const checkQuestion = (indice) => {
    setSelectedOption(indice.id);
    setSelectedQuestion(indice);
    setDisabled(true);
    if (indice.correct) {
      setCorrectOption(true);
    }
  };

  const handleFinishLevel = () => {
    setNumberQuestion(1);
    handleClose();
    setDisabled(false);
    setCorrectOption(false);
    if (selectedQuestion?.correct) setPoints((prev) => prev + 1);

    setSelectedQuestion(null);
  };

  useEffect(() => {
    handleUpdateQuestion();
    handleUpdateOptions();
  }, [numberQuestion, questions, options]);
  return (
    <BasicModal open={open} handleClose={handleFinishLevel}>
      <View>
        <View style={LevelQuizStyle.CloseButton}>
          <TouchableOpacity
            onPress={() => {
              handleFinishLevel();
            }}
          >
            <Icon name="close" size={27} color="#D0D1CE" />
          </TouchableOpacity>
        </View>
        <TitleModal>{currentQuestion}</TitleModal>
        <TextNumberQuestion>Pergunta {numberQuestion}/10</TextNumberQuestion>
        <View style={LevelQuizStyle.ContainerOptions}>
          {currentOptions.map((indice) => (
            <OptionButton
              key={indice.id}
              onPress={() => {
                checkQuestion(indice);
              }}
              disabled={disabled}
              correctOption={correctOption}
              isSelected={selectedOption === indice.id}
            >
              {indice.option}
            </OptionButton>
          ))}
        </View>
        <View style={LevelQuizStyle.NextButton}>
          <LevelButton
            onPress={() => {
              {
                numberQuestion != 10
                  ? handleNextQuestion()
                  : handleFinishLevel();
                setDisabled(false);
                setCorrectOption(false);
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
