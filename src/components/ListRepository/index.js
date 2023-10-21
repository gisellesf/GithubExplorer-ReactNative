// ** Import React
import React from 'react'

// ** Import Library Material React Native
import { List } from 'react-native-paper';

export default function ListRepository() {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Item
    title="First Item"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
  );
};
