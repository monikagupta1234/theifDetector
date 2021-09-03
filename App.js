import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FormScreen from './screen/Formscreen'
import HomeScreen from './screen/Homescreen'
import ResultScreen from './screen/Resultscreen'
export default class App extends React.Component {
  render(){
    return (
    <View>
      <HomeScreen></HomeScreen>
      <FormScreen></FormScreen>
      <ResultScreen></ResultScreen>
    </View>
  );

  }
  
}
