// ** Import React
import React from "react";

// ** Import React Native
import { StyleSheet } from "react-native";

// ** Import Library Material React Native
import { Searchbar } from "react-native-paper";

export default function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery);
    }
  };

  return (
    <Searchbar
      style={styles.content}
      placeholder="Pesquisar repositório"
      onChangeText={onChangeSearch}
      onIconPress={() => {
        handleSearch();
      }}
      value={searchQuery}
      onSubmitEditing={handleSearch}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 15,
    marginBottom: 20,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 10,
  },
});
