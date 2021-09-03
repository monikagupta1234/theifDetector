import * as React from 'react';
import { Text, View, StyleSheet , TextInput,TouchableOpacity,Image} from 'react-native';
import AppHeader from '../components/AppHeader'
export default class ResultScreen extends React.Component {
  render(){
    return (
    <View>
     <View>
      <AppHeader></AppHeader>
      <View style={styles.textContainer}>
       <Text style={styles.text}>Theft Analysis </Text>
       </View>
       <Image style={styles.imageIcon} source={require('bar.png')}/> 
       <Text style={styles.feedback}>Please Like or Dislike this App</Text>
     <TouchableOpacity style={styles.button}><Text>Like</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button1}><Text>Dislike</Text></TouchableOpacity>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
   text: {
    marginTop: 10,
    marginBottom:20
  },
  feedback : {
    textAlign: 'center',
    backgroundColor:'red'
  },
 button: {
    marginTop: 30,
    marginLeft: 190,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: 'center',
    width: 100,
    height: 30,
    background: 'blue',
  },
  button1: {
    marginLeft: 50,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    background: 'yellow',
  },
  textContainer:{
    backgroundColor: 'red',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});