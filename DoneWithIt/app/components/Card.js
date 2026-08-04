import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow : 'hidden'
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: color.secondary,
    fontWeight: "bold",
  },
});

export default Card;
