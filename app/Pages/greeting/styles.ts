import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animatedContainer: {
    flex: 1,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    ...(Platform.OS === "web" && { cursor: "default" }),
  },
});
