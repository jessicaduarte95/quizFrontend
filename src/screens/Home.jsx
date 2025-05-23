import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { BackgroundContainer } from "../components/Background/Background";
import { Title, SubTitle } from "../components/Text/Text";
import { HomeStyle } from "../styles/HomeStyle";
import * as Animatable from "react-native-animatable";
import { RegisterUser } from "./RegisterUser";
import { Login } from "./Login";

export const Home = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const handleCloseRegister = () => setOpenRegister(false);
  const handleCloseLogin = () => setOpenLogin(false);

  return (
    <BackgroundContainer>
      <View style={HomeStyle.Container}>
        <Animatable.View
          animation="slideInRight"
          style={HomeStyle.ContainerTitleHome}
        >
          <SubTitle>Quiz</SubTitle>
          <Title>Universo</Title>
        </Animatable.View>
        <View>
          <Animatable.Image
            delay={1000}
            animation="fadeInUp"
            style={HomeStyle.ImageHome}
            source={require("../../img/astronautaImg5.png")}
          />
        </View>
        <StatusBar style="auto" />
        <RegisterUser open={openRegister} handleClose={handleCloseRegister} />
        <Login open={openLogin} handleClose={handleCloseLogin} />
      </View>
    </BackgroundContainer>
  );
};
