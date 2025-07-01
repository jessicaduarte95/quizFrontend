import { View, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { BasicModal } from "../components/Modal/Modal";
import { TitleChangePassword, TextHelpModal } from "../components/Text/Text";

import { HelpCenterStyle } from "../styles/HelpCenterStyle";

export const HelpCenter = (props) => {
  const { open, handleClose } = props;
  return (
    <BasicModal open={open} handleClose={handleClose}>
      <View style={HelpCenterStyle.CloseButton}>
        <TouchableOpacity
          onPress={() => {
            handleClose();
          }}
        >
          <Icon name="close" size={27} color="#D0D1CE" />
        </TouchableOpacity>
      </View>
      <View>
        <TitleChangePassword>
          Comando de Suporte Estelar{" "}
          {/* <Icon name="rocket" size={25.5} color="#D0D1CE" />
          <Icon name="rocket" size={25.5} color="#D0D1CE" />
          <Icon name="rocket" size={25.5} color="#D0D1CE" /> */}
        </TitleChangePassword>
        <View style={HelpCenterStyle.ContainerIcon}>
          <Icon name="rocket" size={25.5} color="#D0D1CE" />
          <Icon name="rocket" size={25.5} color="#D0D1CE" />
          <Icon name="rocket" size={25.5} color="#D0D1CE" />
        </View>
        <TextHelpModal>
          Prepare-se para embarcar em uma jornada emocionante de conhecimento
          científico e exploração do universo! Ao iniciar nosso jogo de
          perguntas, você começará no nível 1. Se você conseguir acertar 6 ou
          mais questões, desbloqueará o próximo nível e estará pronto para
          desafios ainda mais fascinantes. Cada pergunta é uma oportunidade de
          expandir seus horizontes e aprofundar seu entendimento sobre o mundo
          ao nosso redor. Esteja pronto para explorar conceitos científicos
          intrigantes e descobrir os mistérios do cosmos. Então, ajuste seu
          cinto de segurança, pois esta nave do conhecimento está prestes a
          decolar.
        </TextHelpModal>
      </View>
    </BasicModal>
  );
};
