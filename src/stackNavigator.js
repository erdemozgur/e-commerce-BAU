import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './views/Home';
import ProductsScreen from './views/Products';
import OrdersScreen from './views/Orders';
import CategoriesScreen from './views/Categories';


const AppNavigator = createStackNavigator(

    {

        Home: {

            screen: HomeScreen,

            navigationOptions: { title: 'Home' }

        },

        Products: {
            screen: ProductsScreen,
            navigationOptions: { title: 'Products'}
        },

        Orders: {
            screen: OrdersScreen,
            navigationOptions: { title: 'Orders'}
        },

        Categories: {
            screen: CategoriesScreen,
            navigationOptions: { title: 'Categories'}
        }
        


    },

    {

        initialRouteName: "Home"

    }

);

export default AppNavigator;