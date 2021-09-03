import * as React from 'react';
import { Text, View, StyleSheet , TextInput,TouchableOpacity} from 'react-native';
import AppHeader from '../components/AppHeader'
export default class FormScreen extends React.Component {
  render(){
    return (
    <View style={styles.container}>
     <View>
      <AppHeader></AppHeader>
      <TextInput
    placeholder="Enter the pincode of the place"
    style={styles.inputBox}
    ></TextInput>
       <TextInput
    placeholder="Enter the time thing is stolen"
    style={styles.inputBox}
    ></TextInput>
       <TextInput
    placeholder="Enter the thing that is stolen"
    style={styles.inputBox}
    ></TextInput>
     <TextInput
    placeholder="Enter the place where it is stolen"
    style={styles.inputBox}
    ></TextInput>
     <TouchableOpacity style={[styles.button, { backgroundColor: 'yellow' }]}
      onPress={() => {
            this.goToSuggestion();
          }}>
     <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }
}
const styles = StyleSheet.create({
 
  inputBox: {
    marginTop: 50,
    marginBottom: 5,
    width: '90%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
   backgroundColor:'white'
  },
  button: {
    marginTop: 20,
    marginLeft: 50,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 30,
  },
  container: {
    backgroundColor:'red'
  }
});