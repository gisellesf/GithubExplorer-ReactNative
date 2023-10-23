// ** Import React
import React from "react";

// ** Import Library Material React Native
import { FlatList, StyleSheet, View } from "react-native";
import { Card, Text, Avatar } from "react-native-paper";

// ** Import React Navegation
import { useNavigation } from "@react-navigation/native";

// ** Imports Services
import githubServices from "../../services/githubServices";

export default function ListRepository({ data }) {

  const navigation = useNavigation();

  /**
   * Realiza requisição para lista de branches com base no
   * item/repositório clicado
   * @param {*} ownerItem - termo name do usuário para requisição
   * @param {*} repositoryItem - termo repositório para requisição
   *
   */
  const handleItemClick = async (ownerItem, repositoryItem) => {
    try {
      const response = await githubServices.requestGetBranches(
        ownerItem,
        repositoryItem
      );

      navigation.navigate("screenBranches", { data: response });
    } catch (error) {
      console.error("Erro ao buscar informações do GitHub:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.items}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <Card
            style={styles.cardContainer}
            onPress={() => handleItemClick(item.owner.login, item.name)}
          >
            <Card.Title
              title={item.full_name}
              titleStyle={styles.cardTitle}
              subtitle={item.name}
              subtitleStyle={styles.cardSubtitle}
              left={(props) => (
                <Avatar.Image
                  size={45}
                  source={{ uri: item.owner.avatar_url }}
                />
              )}
            />
            <Card.Content>
              <Text variant="titleLarge">{item.description}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  cardContainer: {
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 5,
  },
  cardTitle: {
    fontSize: 15,
  },
  cardSubtitle: {
    paddingBottom: 7,
  },
});
