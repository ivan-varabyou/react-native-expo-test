import { Pressable, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./styles";

function Button({ label, theme }) {
  if (theme === "primary") {
    return (
      <View style={[styles.container, styles.primary.container]}>
        <Pressable
          style={[styles.button, styles.primary.button]}
          onPress={() => alert("You pressed a button.")}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, styles.primary.buttonLabel]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonConteiner}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

export default Button;
