import { Text, Pressable, Animated, View } from "react-native";
import { memo, useRef, useCallback, useEffect } from "react";

import { styles } from "./styles";

type PageProps = {
  bgColor: string;
  onBackgroundColorChange: () => void;
};

export const GreetingView: React.FC<PageProps> = memo(
  ({ bgColor, onBackgroundColorChange }) => {
    const animatedValue = useRef<Animated.Value>(new Animated.Value(0)).current;
    const previousColor = useRef<string>(bgColor);

    useEffect(() => {
      if (previousColor.current !== bgColor) {
        previousColor.current = bgColor;
      }
    }, [bgColor]);

    const handlePress = useCallback(() => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        animatedValue.setValue(0);
        onBackgroundColorChange();
      });
    }, [bgColor, onBackgroundColorChange, animatedValue]);

    const interpolatedColor = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [bgColor, previousColor.current],
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
          <View>
            <Text>Current Color: {bgColor}</Text>
          </View>
        </Pressable>
      </Animated.View>
    );
  }
);
