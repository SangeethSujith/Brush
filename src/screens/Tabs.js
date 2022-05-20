import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';
import Home from '../screens/Home';
import Post from '../screens/Post';
import Profile from '../screens/Profile';
import React from 'react';
const Tab = createBottomTabNavigator();
const Tabs = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {height: 65},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                resizeMode="contain"
                style={{tintColor: focused ? '#193CB6' : '#748c94'}}
                source={require('../images/home.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                resizeMode="contain"
                style={{tintColor: focused ? '#193CB6' : '#748c94'}}
                source={require('../images/add.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                resizeMode="contain"
                style={{tintColor: focused ? '#193CB6' : '#748c94'}}
                source={require('../images/profile.png')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
