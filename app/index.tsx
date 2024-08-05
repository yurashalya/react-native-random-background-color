import { StyleSheet, Text, View, Platform } from "react-native";

const Page = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello there</Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    ...Platform.select({
      web: {
        cursor: "default",
      },
    }),
  },
});
