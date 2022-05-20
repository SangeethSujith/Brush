import {Text, View,Button} from 'react-native';
import React from 'react';
import Maindesign from '../styles/Maindesign';
const Home = () => {
  return (
    <View style={Maindesign.container}>
      <Text style={Maindesign.text}>Home Page</Text>
      <Button title='Click Here' onPress={()=>(alert('Button Clicked'))}/>
    </View>
  );
};

export default Home;
