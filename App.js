import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { ImageViewer, Button } from "./components";
import styles from "./app.styles";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          style={styles.image}
          placeholderImageSource={PlaceholderImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" />
        <Button label="Use this photo" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
