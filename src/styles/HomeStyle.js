import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const HomeStyle = StyleSheet.create({
  Container: {
    justifyContent: "flex-end",
    height: "100%",
  },
  ContainerTitleHome: {
    justifyContent: "center",
    paddingHorizontal: 45,
    paddingVertical: 60,
  },
  ImageHome: {
    height: width > 700 ? 350 : 420,
    width: 410,
  },
  ContainerButtonHome: {
    marginTop: 54,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    gap: 20,
  },
});
