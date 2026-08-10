import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessage = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor excepturi voluptas tempora, ullam qui fugit maiores eaque eius?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eligendi sint quibusdam. Magnam alias omnis facilis assumenda labore expedita exercitationem dolores rem necessitatibus iure, delectus beatae laudantium maiores nobis voluptas?",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessage] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessage(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            refreshing={refreshing}
            onRefresh={() => {
              setMessage([
                {
                  id: 2,
                  title: "T2",
                  description: "D2",
                  image: require("../assets/mosh.jpg"),
                },
              ]);
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
