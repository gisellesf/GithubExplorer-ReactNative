// ** Import React
import React from "react";

// ** Import React Native
import { StyleSheet, View } from "react-native";

// ** Import Components
import Header from "../../components/Header";
import ListRepository from "../../components/ListRepository";
import Search from "../../components/Search";

// ** Import Services
import githubServices from "../../services/githubServices";

export default function Home() {
  const [searchResults, setSearchResults] = React.useState([]);

  /**
   * Realiza requisição de listar respositório com base no termo para pesquisa
   * @param {*} searchQuery - termo utilizado na pesquisa de repositórios
   */
  const handleSearch = async (searchQuery) => {
    try {
      const listRepositories = await githubServices.requestGetRepositories(
        searchQuery
      );
      setSearchResults(listRepositories);
    } catch (error) {
      console.error("Erro ao buscar informações do GitHub:", error.message);
    }
  };

  return (
    <View styles={styles.container}>
      <Header />
      <Search onSearch={handleSearch} />
      <ListRepository data={searchResults} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
