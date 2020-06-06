import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import { blue, white } from "../utils/colors";

const CustomButton = ({
  onPress,
  text,
  bg = blue,
  color = white,
  width = 300,
  margin = 0,
  border = { width: 0, color: white },
}) => {
  const styles = useStyles({ bg, color, width, margin, border });
  return (
    <TouchableOpacity
      style={
        Platform.OS === "ios" ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
      }
      onPress={onPress}
    >
      <Text style={styles.submitBtnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const useStyles = ({ bg, color, margin, border, width }) =>
  StyleSheet.create({
    iosSubmitBtn: {
      backgroundColor: bg,
      padding: 10,
      width: width,
      borderRadius: 7,
      height: 45,
      marginBottom: margin,
      borderWidth: border.width,
      borderColor: border.color,
    },
    AndroidSubmitBtn: {
      backgroundColor: bg,
      width: width,
      borderWidth: border.width,
      borderColor: border.color,
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      height: 45,
      borderRadius: 2,
      alignSelf: "flex-end",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: margin,
    },
    submitBtnText: {
      color: color,
      fontSize: 20,
      textAlign: "center",
    },
  });

export default CustomButton;
