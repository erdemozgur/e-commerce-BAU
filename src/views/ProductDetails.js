import React, {useState,useEffect} from "react";
import { ScrollView } from 'react-native';
import { View,StyleSheet,Text,TouchableOpacity,FlatList } from "react-native";
import { createStackNavigator } from 'react-navigation-stack';


export default function ProductDetails({navigation}) {


    const styles2 = StyleSheet.create({
        text: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        color: '#50504F',
        textAlign: 'center',
        marginBottom:5
        },
        text2: {
        fontFamily: 'Helvetica',
        fontSize: 40,
        color: '#00000',
        opacity:0.8,
        fontWeight: 'bold',
        textAlign: 'center'
        },
        bar1: {
          backgroundColor:'#FEE5C6',
          marginTop:10,
          width:750,
          marginLeft:400,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30       
        }    
        });

    return (
        <ScrollView>
            {
              <View>
                <TouchableOpacity style={styles2.bar1} >
                 <Text style={styles2.text2}> Details of the Selected Product </Text>          
                 <Text style={styles2.text}> Product ID: {navigation.getParam('id', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Supplier ID: {navigation.getParam('supplierId', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Catergory ID: {navigation.getParam('categoryId', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Units In Stock: {navigation.getParam('unitsInStock', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Units On Order: {navigation.getParam('unitsOnOrder', 'Not Found!')}</Text>
                 <Text style={styles2.text}> Reorder Level: {navigation.getParam('reorderLevel', 'Not Found!')}</Text>
                </TouchableOpacity>
               </View>              
            }
        </ScrollView>
    )
}