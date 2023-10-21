// ** Import React
import React from "react";

// ** Import React Native
import { StyleSheet, Text, View } from "react-native";

import Header from "../../components/Header";
import ListRepository from "../../components/ListRepository";
import Search from "../../components/Search";

export default function Home() {
  return (
    
    <View>
      <Header />
      <Search/>
      <ListRepository/>
      {/* <View styles={styles.container}>
        <Text>Hello World</Text>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("oiiii")}
        >
          Oláaaaa
        </Button>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});