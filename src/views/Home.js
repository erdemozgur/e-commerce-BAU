import React from 'react';

import { View, StyleSheet,Text } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation'; 

class HomeScreen extends React.Component {

    render() {

      return (        

        <View>

        <Button title="Products" style={styles.Button} onPress={() => this.props.navigation.navigate('Products')}></Button>
        <Button title="Categories" style={styles.Button} onPress={() => this.props.navigation.navigate('Categories')}>Categories</Button>
        <Button title="Orders" style={styles.Button} onPress={() => this.props.navigation.navigate('Orders')}>Orders</Button>


        </View>

      );

    }

} 

const styles = StyleSheet.create({

    row: {
  
        flex: 3,
  
        flexDirection: 'row',
  
        justifyContent: 'center',
  
    },
  
    col: {
  
        flex: 3,
  
    },

    description: {

        fontSize: 100,


    },
    Button: {
        flex: 2,
        marginBottom: 10,
    }
  
  }); 

export default withNavigation(HomeScreen);
