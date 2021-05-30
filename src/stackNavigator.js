import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './views/Home';
import ProductsScreen from './views/Products';
import OrdersScreen from './views/Orders';
import CategoriesScreen from './views/Categories';
import ProductDetailsScreen from './views/ProductDetails';

import UpdateCategoryScreen from './views/UpdateCategory';

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
        },

        ProductDetails: {
            screen: ProductDetailsScreen,
            navigationOptions: { title: 'ProductDetails'}
        },

        UpdateCategory: {
            screen: UpdateCategoryScreen,
            navigationOptions: { title: 'UpdateCategory'}
        }


    },

    {

        initialRouteName: "Home"

    }

);

export default AppNavigator;