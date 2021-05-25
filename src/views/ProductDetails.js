import React, {useState,useEffect} from "react";
import { ScrollView } from 'react-native';
import { View,StyleSheet, Text } from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
// import props from 'prop-types';


export default function ProductDetails({navigation}) {


    const styles2 = StyleSheet.create({
        text: {
        fontFamily: 'Times New Roman',
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center'
        }     
        });

    return (
        <ScrollView>
            {
              <View>          
                 <Text style={styles2.text}> Id: {navigation.getParam('id', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Supplier Id: {navigation.getParam('supplierId', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Catergory Id: {navigation.getParam('categoryId', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Units In Stock: {navigation.getParam('unitsInStock', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Units On Order: {navigation.getParam('unitsOnOrder', 'Not Found!')}</Text>
               </View>              
            }
        </ScrollView>
    )
}