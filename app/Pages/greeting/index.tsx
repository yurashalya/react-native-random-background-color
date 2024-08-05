import { Text, Pressable, Animated } from "react-native";
import { memo, useRef, useState } from "react";

import { styles } from "./styles";

type PageProps = {
  bgColor: string;
  onBackgroundColorChange: () => void;
};

export const GreetingView: React.FC<PageProps> = memo(
  ({ bgColor, onBackgroundColorChange }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const previousColor = useRef(bgColor);

    const handlePress = () => {
      previousColor.current = bgColor;

      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        animatedValue.setValue(0);
        onBackgroundColorChange();
      });
    };

    const interpolatedColor = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [previousColor.current, bgColor],
    });

    return (
      <Animated.View
        style={[
          styles.animatedContainer,
          { backgroundColor: interpolatedColor },
        ]}
      >
        <Pressable onPress={handlePress} style={styles.container}>
          <Text style={styles.title}>Hello there</Text>
        </Pressable>
      </Animated.View>
    );
  }
);
