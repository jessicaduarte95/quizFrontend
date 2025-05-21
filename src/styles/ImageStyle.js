import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const ImageStyle = StyleSheet.create({
  ImageHome: {
    height: width > 700 ? 350 : 420,
    width: 410,
  },
  ImageChangePassword: {
    height: 500,
    width: 350,
  },
});
