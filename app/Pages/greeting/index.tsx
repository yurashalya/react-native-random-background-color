import { Text, Pressable } from "react-native";
import { memo } from "react";

import { styles } from "./styles";

type PageProps = {
  bgColor: string;
  onBackgroundColorChange: () => void;
};

export const GreetingView: React.FC<PageProps> = memo(
  ({ bgColor, onBackgroundColorChange }) => {
    return (
      <Pressable
        style={[styles.container, { backgroundColor: bgColor }]}
        onPress={onBackgroundColorChange}
      >
        <Text style={styles.title}>Hello there</Text>
      </Pressable>
    );
  }
);
