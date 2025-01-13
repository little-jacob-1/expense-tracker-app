import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors, radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { CustomButtonProps } from "@/types";
import Loading from "./Loading";

const Button = ({
  style,
  children,
  onPress,
  loading = false,
}: CustomButtonProps) => {
  if (loading) {
    return (
      <View style={[styles.button, style, { backgroundColor: "transparent" }]}>
        <Loading />
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: verticalScale(52),
    borderCurve: "continuous",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: radius._17,
  },
});
