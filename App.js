import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';
import Splash from './Splash';
import { useState } from 'react';
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(true);
  }, 2500)
  return (
    <View style={styles.container} >
      {isLoading ? <Home /> : <Splash />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
