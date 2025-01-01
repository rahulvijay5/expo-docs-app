import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type ImageProps = {
  imgSource: ImageSource;
  selectedImage?:string;
};

export default function ImageViewer({ imgSource,selectedImage }: ImageProps) {
  const imagesource = selectedImage?{uri:selectedImage}:imgSource;

  return <Image source={imagesource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
