import { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import routes from "../navigation/routes";

function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListing);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Retry" onPress={loadListings} />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
