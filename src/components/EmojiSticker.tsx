import { View } from "react-native";
import { Image, type ImageSource } from "expo-image";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
  maxSize: number;  // Add maxSize as a prop
};

export default function EmojiSticker({ imageSize, stickerSource, maxSize }: Props) {
  const scaleImage = useSharedValue(imageSize); // Initial scale is the imageSize
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Double tap gesture
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      // Scale up to double the size if not already at max size, else restore to original size
      if (scaleImage.value < maxSize) {
        scaleImage.value = Math.min(scaleImage.value * 2, maxSize); // Limit scaling to maxSize
      } else {
        scaleImage.value = imageSize; // Return to original size when double-tapped again
      }
    });

  // Triple tap gesture
  const tripleTap = Gesture.Tap()
    .numberOfTaps(3)
    .onStart(() => {
      // Scale up to four times the size if not already at max size, else restore to original size
      if (scaleImage.value < maxSize) {
        scaleImage.value = Math.min(scaleImage.value * 4, maxSize); // Limit scaling to maxSize
      } else {
        scaleImage.value = imageSize; // Return to original size when triple-tapped again
      }
    });

  // Combine both gestures to work simultaneously
  const combinedGestures = Gesture.Simultaneous(doubleTap, tripleTap);

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        {/* GestureDetector for both double-tap and triple-tap */}
        <GestureDetector gesture={combinedGestures}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
