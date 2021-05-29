    import React from 'react';
    import { View,Text,StyleSheet } from 'react-native';
    import { createStackNavigator } from 'react-navigation-stack';

    export default function UpdateCategory({navigation}){

    return(
        <View>
        <Text style={styles.text2}> Details of the Selected Product </Text>          
        <Text style={styles.text}> ID: {navigation.getParam('id', 'Not Found!')}</Text>
        <Text style={styles.text}> Description: {navigation.getParam('description', 'Not Found!')}</Text>
        <Text style={styles.text}> Name: {navigation.getParam('name', 'Not Found!')}</Text>
      </View> 

    );
    };

    const styles = StyleSheet.create({
        text: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        color: '#191970',
        textAlign: 'center'
        },
        text2: {
        fontFamily: 'Helvetica',
        fontSize: 40,
        color: '#663399',
        fontWeight: 'bold',
        textAlign: 'center'
        }    
        });

