// ** Import React
import React from "react";

// ** Import React Native
import { StyleSheet, Text, View } from "react-native";

// ** Import Library Material React Native
import { Appbar } from "react-native-paper";

export default function Header() {
  return (
    <View>
      <Appbar.Header style={styles.content}>
        <Appbar.Content title="Github Explorer" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginBottom: 3,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});
