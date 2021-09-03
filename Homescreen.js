import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader'
export default class HomeScreen extends React.Component {
  render(){
    return (
    <View>
    <AppHeader></AppHeader>
      <Image style={styles.imageIcon} source={require('thief.jpg')}/> 
     <TextInput
     placeholder = "Enter the case "
     style={styles.inputBox}
     ></TextInput>
     <TouchableOpacity style={styles.button}>
     <Text>
     fill the form 
     </Text>
     </TouchableOpacity>
    </View>
  );
  }
}
const styles = StyleSheet.create({
  inputBox: {
    marginTop: 10,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
imageIcon:{
  marginTop:20,
  marginLeft:20
},
 button: {
    marginTop: 20,
    marginLeft: 120,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    background: 'blue',
  },
});