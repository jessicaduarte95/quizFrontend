import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import { Button } from "../components/Button/Button";
import { BackgroundContainer } from "../components/Background/Background";
import { TitleChangePassword, TextBasic } from "../components/Text/Text";
import { InputBasic } from "../components/Input/Input";

import { ButtonStyle } from "../styles/ButtonStyle";
import { ImageStyle } from "../styles/ImageStyle";
import { ChangePasswordStyle } from "../styles/ChangePasswordStyle";

export const ChangePassword = () => {
  const navigation = useNavigation();
  const { handleSubmit, control, reset } = useForm();

  return (
    <BackgroundContainer>
      <View style={ChangePasswordStyle.Container}>
        <View style={ChangePasswordStyle.Content}>
          <View style={ButtonStyle.ContainerButtonLogOut}>
            <Button
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              Sair
            </Button>
          </View>
          <TitleChangePassword>Alterar Senha</TitleChangePassword>
          <TextBasic>
            Para redefinir sua senha, por favor, insira seu endereço de email
            abaixo.
          </TextBasic>
          <View>
            <InputBasic
              name="email"
              control={control}
              placeholder={"Digite seu Email"}
            />
          </View>
        </View>
        <View style={ChangePasswordStyle.ContentImg}>
          <Animatable.Image
            delay={500}
            animation="fadeInUp"
            style={ImageStyle.ImageChangePassword}
            source={require("../../img/astronautaImg6.png")}
          />
        </View>
      </View>
    </BackgroundContainer>
  );
};
