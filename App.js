import React, {useState} from 'react';
import { StyleSheet, Button, Text, View, Alert, TextInput, Switch } from 'react-native';

export default function App() {
  const [textValue, onChangeText] = React.useState('');
  const[switchState , setSwitchState ]= useState(false);
  const toggleSwitch=()=>{
    setSwitchState(!switchState)
    };
   
  return (
    <View style={switchState?appstyles.darkContainer:appstyles.whiteContainer}>
      <Text 
      style = {switchState?appstyles.darkHeraderText:appstyles.whiteHeaderText}>
        Using useState in React
      </Text>
      <Text 
      style = {switchState?appstyles.darkNormalText:appstyles.whiteNormalText}>
        Entered Text: {textValue}
      </Text>

      <TextInput style={switchState?appstyles.darkInput:appstyles.whiteInput} 
      aria-label='Name'
      placeholder='Enter Full Name'
      placeholderTextColor={switchState?'#ffff77':'#999999'}
      onChangeText={textValue =>onChangeText(textValue)}
      value={textValue}>
      </TextInput>
      <Button style={appstyles.clearButton} 
      onPress={()=>onChangeText('')}
      title='Clear Input'></Button>
      
      

      
      

      
      
    </View>
  );
}

const appstyles = StyleSheet.create({
  darkContainer:{
    flex: 1, 
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#121212',
  },
  whiteContainer:{
    flex: 1, 
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#ffffff',
  },
  darkHeraderText:{
    fontSize :18 ,
    color:"#ffffff",
    padding:20,
    fontWeight:'bold',
    textAlign: 'center',
  },
  whiteHeaderText:{
    fontSize :18 ,
    color:"#121212",
    padding:20,
    fontWeight:'bold',
    textAlign: 'center',
  },
  darkNormalText:{
    fontSize :22 ,
    color:"#ffffff",
    padding:20,
  },
  whiteNormalText:{
    fontSize :22 ,
    color:"#121212",
    padding:20,
  },
  darkInput:{
    fontSize :16 ,
    color:"#ffffff",
    padding:20,
  },
  whiteInput:{
    fontSize :16 ,
    color:"#121212",
    padding:20,
  },

})



