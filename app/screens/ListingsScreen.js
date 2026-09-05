import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import listingsApi from "../api/listings";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    const response = await listingsApi.getListing();
     if (!response.ok) return
    setListings(response.data);
  };
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
