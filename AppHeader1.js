import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
class AppHeader1 extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Theft Analysis </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'blue',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
export default AppHeader;