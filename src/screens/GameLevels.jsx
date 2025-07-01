import { useState, useEffect } from "react";
import { View, ScrollView, Image } from "react-native";
import * as Animatable from "react-native-animatable";

import { BackgroundContainer } from "../components/Background/Background";
import { Button, LevelButton } from "../components/Button/Button";
import { TextBasic } from "../components/Text/Text";

import { GameLevelsStyle } from "../styles/GameLevelsStyle";

import { LevelQuiz } from "./LevelQuiz";
import { HelpCenter } from "./HelpCenter";

import { getTotalLevel, getQuestionsLevel } from "../service/QuestionsService";
import { getOptionsLevel } from "../service/OptionsService";

export const GameLevels = () => {
  const [totalLevel, setTotalLevel] = useState(0);
  const [level, setLevel] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);

  const [openLevelQuiz, setOpenLevelQuiz] = useState(false);
  const handleCloseLevelQuiz = () => setOpenLevelQuiz(false);
  const handleOpenLevelQuiz = () => setOpenLevelQuiz(true);

  const [openHelpCenter, setOpenHelpCenter] = useState(false);
  const handleCloseHelpCenter = () => setOpenHelpCenter(false);
  const handleOpenHelpCenter = () => setOpenHelpCenter(true);

  const currentLevel = (indice) => {
    setLevel(indice + 1);
  };

  const totalLevelResult = async () => {
    try {
      const result = await getTotalLevel();
      setTotalLevel(result.data.totalLevel);
    } catch (error) {
      console.error("Erro ao obter total de níveis: ", error);
    }
  };

  const questionsLevel = async (level) => {
    try {
      const result = await getQuestionsLevel(level);
      setQuestions(result.data);
    } catch (error) {
      console.error("Erro ao obter questões: ", error);
    }
  };

  const optionsLevel = async (level) => {
    try {
      const result = await getOptionsLevel(level);
      setOptions(result.data);
    } catch (error) {
      console.error("Erro ao obter questões: ", error);
    }
  };

  useEffect(() => {
    totalLevelResult();
  }, []);

  useEffect(() => {
    if (level > 0 && level) {
      questionsLevel(level);
      optionsLevel(level);
    }
  }, [level]);
  return (
    <BackgroundContainer>
      <View>
        <View style={GameLevelsStyle.ContainerButtonHead}>
          <Button onPress={() => handleOpenHelpCenter()}>Ajuda</Button>
        </View>
        <View style={GameLevelsStyle.ContentTitle}>
          <TextBasic>Olá Astronauta!</TextBasic>
        </View>
        <View style={GameLevelsStyle.Body}>
          <Animatable.View delay={1000} animation="fadeInUp">
            <ScrollView style={GameLevelsStyle.scroll}>
              {Array.from({ length: totalLevel }, (_, index) => (
                <LevelButton
                  key={index}
                  disabled={false}
                  onPress={() => {
                    currentLevel(index);
                    handleOpenLevelQuiz();
                  }}
                >
                  Nível {index + 1}
                </LevelButton>
              ))}
            </ScrollView>
          </Animatable.View>
          <View style={GameLevelsStyle.ContentImage}>
            <View style={GameLevelsStyle.ContentStar}>
              <View>
                <View style={GameLevelsStyle.StarType1} />
                <View style={GameLevelsStyle.StarType2} />
              </View>
              <View>
                <View style={GameLevelsStyle.StarType4} />
                <View style={GameLevelsStyle.StarType3} />
              </View>
              <View>
                <View style={GameLevelsStyle.StarType1} />
                <View style={GameLevelsStyle.StarType2} />
              </View>
            </View>
            <View>
              <View style={GameLevelsStyle.StarType5} />
              <View style={GameLevelsStyle.StarType6} />
            </View>
            <Animatable.View delay={2000} animation="fadeInRight">
              <Image
                style={GameLevelsStyle.Image}
                source={require("../../assets/img/astronautaImg4.png")}
              />
            </Animatable.View>
          </View>
        </View>
      </View>
      <LevelQuiz
        open={openLevelQuiz}
        handleClose={handleCloseLevelQuiz}
        questions={questions}
        options={options}
      />
      <HelpCenter open={openHelpCenter} handleClose={handleCloseHelpCenter} />
    </BackgroundContainer>
  );
};
