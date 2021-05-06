import React, { useEffect } from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { primaryColor } from '../publicValues/Color';
export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 5000);

  }, [])
  return (
    <View style={styles.container}>
      <StatusBar
        BarbarStyle="dark-content"
        backgroundColor={primaryColor}></StatusBar>
      <ActivityIndicator animating color="#fff" size={100}></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    justifyContent: 'center',
  },
});
