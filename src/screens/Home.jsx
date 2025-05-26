import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

import { BackgroundContainer } from "../components/Background/Background";
import { Title, SubTitle } from "../components/Text/Text";
import { RegisterUser } from "./RegisterUser";
import { Login } from "./Login";

import { HomeStyle } from "../styles/HomeStyle";

export const Home = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const handleCloseRegister = () => setOpenRegister(false);
  const handleCloseLogin = () => setOpenLogin(false);

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Ação executada após 2 segundos");
      navigation.navigate("GameLevels");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

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
            source={require("../../assets/img/astronautaImg5.png")}
          />
        </View>
        <StatusBar style="auto" />
        <RegisterUser open={openRegister} handleClose={handleCloseRegister} />
        <Login open={openLogin} handleClose={handleCloseLogin} />
      </View>
    </BackgroundContainer>
  );
};
