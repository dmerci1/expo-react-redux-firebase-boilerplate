import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import LoginScreen from '../Auth/LoginScreen';
import RegisterScreen from '../Auth/RegisterScreen';
import Test from '../Test';

const Navigator = createBottomTabNavigator({
login: { screen: LoginScreen},
register: { screen: RegisterScreen},
test: { screen: Test }
});

export default Navigator;
