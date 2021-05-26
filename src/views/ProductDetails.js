import React, {useState,useEffect} from "react";
import { ScrollView } from 'react-native';
import { View,StyleSheet, Text } from "react-native";
import { createStackNavigator } from 'react-navigation-stack';


export default function ProductDetails({navigation}) {


    const styles2 = StyleSheet.create({
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

    return (
        <ScrollView>
            {
              <View>
                 <Text style={styles2.text2}> Details of the Selected Product </Text>          
                 <Text style={styles2.text}> Product ID: {navigation.getParam('id', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Supplier ID: {navigation.getParam('supplierId', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Catergory ID: {navigation.getParam('categoryId', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Units In Stock: {navigation.getParam('unitsInStock', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Units On Order: {navigation.getParam('unitsOnOrder', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Reorder Level: {navigation.getParam('reorderLevel', 'Not Found!')}</Text>
               </View>              
            }
        </ScrollView>
    )
}