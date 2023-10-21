// ** Import React
import React from "react";

// ** Import React Native
import { View, StyleSheet, Text, StatusBar } from "react-native";

// ** Import Library Material React Native
import { Appbar } from 'react-native-paper';

export default function Header() {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Github Explorer" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
    </View>
  );
}
