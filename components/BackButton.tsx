import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { BackButtonProps } from "@/types";
import { useRouter } from "expo-router";
import { CaretLeft } from "phosphor-react-native";
import { colors, radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";

export default function BackButton({ style, iconSize = 26 }: BackButtonProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={[styles.button, style]}
    >
      <CaretLeft
        size={verticalScale(iconSize)}
        color={colors.white}
        weight="bold"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: radius._12,
    borderCurve: "continuous",
    alignSelf: "flex-start",
    backgroundColor: colors.neutral600,
  },
});
