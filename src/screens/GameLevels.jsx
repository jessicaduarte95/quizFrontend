import { useState, useEffect } from "react";
import { View, ScrollView, Image } from "react-native";
import * as Animatable from "react-native-animatable";

import { BackgroundContainer } from "../components/Background/Background";
import { Button, LevelButton } from "../components/Button/Button";
import { TextBasic } from "../components/Text/Text";

import { GameLevelsStyle } from "../styles/GameLevelsStyle";

import { getTotalLevel } from "../service/QuestionsService";

export const GameLevels = () => {
  const [totalLevel, setTotalLevel] = useState(0);

  const totalLevelResult = async () => {
    try {
      const result = await getTotalLevel();
      setTotalLevel(result.data.totalLevel);
    } catch (error) {
      console.error("Erro ao obter total de níveis: ", error);
    }
  };

  useEffect(() => {
    totalLevelResult();
  }, []);
  return (
    <BackgroundContainer>
      <View>
        <View style={GameLevelsStyle.ContainerButtonHead}>
          <Button>Ajuda</Button>
        </View>
        <View style={GameLevelsStyle.ContentTitle}>
          <TextBasic>Olá Astronauta!</TextBasic>
        </View>
        <View style={GameLevelsStyle.Body}>
          <Animatable.View delay={1000} animation="fadeInUp">
            <ScrollView style={GameLevelsStyle.scroll}>
              {Array.from({ length: totalLevel }, (_, index) => (
                <LevelButton key={index} disabled={false}>
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
                source={require("../../img/astronautaImg4.png")}
              />
            </Animatable.View>
          </View>
        </View>
      </View>
    </BackgroundContainer>
  );
};
