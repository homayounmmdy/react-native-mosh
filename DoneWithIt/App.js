import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView,Text, View } from 'react-native';

export default function App() {
  return ( 
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue'
  },
});
