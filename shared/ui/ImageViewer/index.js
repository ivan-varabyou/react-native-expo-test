import { Image } from "react-native";
import styles from "./styles";

function ImageViewer({ placeholderImageSource }) {
  return <Image source={placeholderImageSource} style={styles.image} />;
}

export default ImageViewer;
