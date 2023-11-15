import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { ImageViewer, Button } from "../../shared/ui";
import styles from "./styles";

const PlaceholderImage = require("../../assets/images/background-image.png");

function ChoosePhoto() {
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

export default ChoosePhoto;
