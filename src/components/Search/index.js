// ** Import React
import React from "react";

// ** Import React Native
import { StyleSheet } from "react-native";

// ** Import Library Material React Native
import { Searchbar } from 'react-native-paper';

export default function Search() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <Searchbar
      placeholder="Pesquisar repositório"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}

const styles = StyleSheet.create({});
