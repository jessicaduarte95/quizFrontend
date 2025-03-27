import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { BackgroundContainer } from "../components/Background/Background";
import { Button } from "../components/Button/Button";
import { Title, SubTitle } from "../components/Text/Text";
import { ButtonStyle } from "../styles/ButtonStyle";
import { TitleStyle } from "../styles/TitleStyle";
import { ImageStyle } from "../styles/ImageStyle";
import * as Animatable from "react-native-animatable";
import { RegisterUser } from "./RegisterUser";
import { Login } from "./Login";

export const Home = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  return (
    <BackgroundContainer>
      <View style={ButtonStyle.ContainerButtonHome}>
        <Button onPress={handleOpenLogin}>Entrar</Button>
        <Button onPress={handleOpenRegister}>Cadastrar</Button>
      </View>
      <Animatable.View
        animation="slideInRight"
        style={TitleStyle.ContainerTitleHome}
      >
        <SubTitle>Quiz</SubTitle>
        <Title>Universo</Title>
      </Animatable.View>
      <View>
        <Animatable.Image
          delay={1000}
          animation="fadeInUp"
          style={ImageStyle.ImageHome}
          source={require("../../img/astronautaImg5.png")}
        />
      </View>
      <StatusBar style="auto" />
      <RegisterUser open={openRegister} handleClose={handleCloseRegister} />
      <Login open={openLogin} handleClose={handleCloseLogin} />
    </BackgroundContainer>
  );
};
