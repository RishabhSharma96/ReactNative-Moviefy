import React from 'react';
import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import Topper from "../components/Topper.jsx";
import Player from "../components/Player.jsx";
import "../global.css";
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar style="light" backgroundColor="#000000" />
      <LinearGradient
        colors={['#000000', '#8B0000']}
        start={[0, 0]}
        end={[0, 1]}
        style={{ flex: 1 }}
      >


        <View>
          <Topper />
        </View>

        <View>
          <Player />
        </View>


      </LinearGradient>
    </ScrollView>
  );
};

export default App;
