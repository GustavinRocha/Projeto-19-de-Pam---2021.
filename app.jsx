import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicial from './workspace/PAMetec/Inicial.jsx';
import Sobre from './workspace/PAMetec/Sobre.jsx';
import Detalhes from './workspace/PAMetec/Detalhes.jsx';

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Tab.Navigator
      tabBarOptions={
        {
          labelStyle: { fontSize: 24 },
          style: {backgroundColor: '#00ced1'},
          activeTintColor: '#FFFFFF'
        }
      }
      >
        <Tab.Screen name="Inicial" component={Inicial} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Detalhes" component={Detalhes} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}