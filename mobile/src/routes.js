import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

export default (isSigned = false) => createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({
      SignIn,
      SignUp,
    }),
    App: createBottomTabNavigator({
      Dashboard,
      New: {
        screen: createStackNavigator(
          SelectProvider,
          SelectDateTime,
          Confirm,
        )
      },
      Profile,
    }, {
        tabBarOptions:
        {
            keyboardHidesTabBar: true,
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
            style: {
              backgroundColor: '#8d41a8',
            },
          },
        }
    ),
  }, {
    initialRouteName: isSigned ? 'App' : 'Sign'
  }),
);
