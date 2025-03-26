import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { BasicModal } from "../components/Modal/Modal";
import { TitleModal } from "../components/Text/Text";
import { Input } from "../components/Input/Input";
import { Checkbox } from "../components/Checkbox/Checkbox";
import { CloseSaveButton } from "../components/Button/Button";
import { ButtonStyle } from "../styles/ButtonStyle";

export const RegisterUser = (props) => {
  const { open, handleClose } = props;

  const [isCheck, setIsCheck] = useState(false);
  const { handleSubmit, control, reset } = useForm();

  const isChecked = () => {
    setIsCheck(!isCheck);
  };

  const onSubmit = (data) => {
    console.log("Dados enviados:", data);
    reset();
  };

  return (
    <BasicModal open={open} handleClose={handleClose}>
      <TitleModal>Cadastrar</TitleModal>
      <Input
        name="name"
        control={control}
        placeholder={"Nome"}
        rules={{
          required: "Nome é obrigatório",
          minLength: {
            value: 3,
            message: "Nome deve ter pelo menos 3 caracteres",
          },
        }}
      />
      <Input
        name="email"
        control={control}
        placeholder={"Email"}
        rules={{
          required: "Email é obrigatório",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Email inválido",
          },
        }}
      />
      <Input
        name="password"
        control={control}
        placeholder={"Senha"}
        secureTextEntry={!isCheck}
        rules={{
          required: "Senha é obrigatória",
          minLength: {
            value: 6,
            message: "Senha deve ter pelo menos 6 caracteres",
          },
        }}
      />

      <Checkbox onPress={isChecked} isCheck={isCheck} />
      <View style={ButtonStyle.ContainerButtonRegister}>
        <CloseSaveButton
          onPress={() => {
            handleClose();
            reset();
          }}
        >
          Fechar
        </CloseSaveButton>
        <CloseSaveButton onPress={handleSubmit(onSubmit)}>
          Salvar
        </CloseSaveButton>
      </View>
    </BasicModal>
  );
};
