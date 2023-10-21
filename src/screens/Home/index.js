import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';

function Home() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Button icon="camera" mode="contained" onPress={() => console.log('oiiii')}>Oláaaaa</Button>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});