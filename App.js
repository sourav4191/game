import { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
   const [userNumber, setUserNumber] = useState();

   function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
   }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) {
      screen = <GameScreen />
    }

  return (
  <LinearGradient 
  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} locations={[0,0.5,0.6]}
  colors={['#4e0329', '#ddb52f', '#4de']} style={styles.rootScreen}> 
  <ImageBackground source={require('./images/background.png')} resizeMode="cover"
  style={styles.rootScreen}
  imageStyle={styles.backgroundimage}
  >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundimage: {
    opacity: 0.25
  }
});
