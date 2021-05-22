import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation'; 

class HomeScreen extends React.Component {

    render() {

      return (        

        <View>

        <Text>Home</Text>
        </View>

      );

    }

} 

const styles = StyleSheet.create({

    row: {
  
        flex: 1,
  
        flexDirection: 'row',
  
        justifyContent: 'center',
  
    },
  
    col: {
  
        flex: 1,
  
    },
  
  }); 

export default withNavigation(HomeScreen);
