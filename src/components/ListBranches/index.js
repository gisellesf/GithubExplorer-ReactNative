// ** Import React
import React from "react";

// ** Import Library Material React Native
import { FlatList, StyleSheet, View } from "react-native";
import { Card, List  } from "react-native-paper";

export default function ListBranches({ route }) {
  const { data } = route.params;
  console.log(data);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={({ name }) => name.toString()}
        renderItem={({ item }) => (
          <Card
            style={styles.cardContainer}
          >
            <Card.Title
              title={item.name}
              titleStyle={styles.cardTitle}
              subtitle={item.commit.url}
              subtitleStyle={styles.cardSubtitle}
              left={props => <List.Icon {...props} icon="source-branch" />}
            />
          </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
})