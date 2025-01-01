import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import ImageViewer from "@/src/components/ImageViewer";
import Button from "@/src/components/Button";

const placeholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image style={styles.image} source={placeholderImage} /> */}
        <ImageViewer imgSource={placeholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label={"Choose a Button"}/>
        <Button label={"Use this Photo."}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,

  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
