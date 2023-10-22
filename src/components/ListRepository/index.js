// ** Import React
import React from "react";

// ** Import Library Material React Native
import { FlatList, StyleSheet, View } from "react-native";
import { Card, Text, Button, Avatar } from "react-native-paper";

export default function ListRepository({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.items}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <Card
            style={styles.cardContainer}
            onPress={() => console.log("card")}
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
            <Card.Content >
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
  cardTitle:{
    fontSize: 15
  },
  cardSubtitle:{
    paddingBottom:7,
  },
});
