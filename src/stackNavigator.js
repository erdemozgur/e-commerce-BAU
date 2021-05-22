import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './views/Home';

const AppNavigator = createStackNavigator(

    {

        Home: {

            screen: HomeScreen,

            navigationOptions: { title: 'Home' }

        }


    },

    {

        initialRouteName: "Home"

    }

);

export default AppNavigator;