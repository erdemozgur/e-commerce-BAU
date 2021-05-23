import React, {useState,useEffect} from "react";
import { ScrollView } from 'react-native';
import { View,StyleSheet, Text } from "react-native";
import props from 'prop-types';


export default function ProductDetails() {


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
              <view>          
                 <Text style={styles2.text}> Id: {navigation.getParam('id')}</Text>
                 <Text style={styles2.text}> Supplier Id: {navigation.getParam('supplierId')}</Text>
                 <Text style={styles2.text}> Catergory Id: {navigation.getParam('categoryId')}</Text>
                 <Text style={styles2.text}> Units In Stock: {navigation.getParam('unitsInStock')}</Text>
                 <Text style={styles2.text}> Units On Order: {navigation.getParam('unitsOnOrder')}</Text>
                 <Text style={styles2.text}> Reorder Level: {navigation.getParam('reorderLevel')}</Text>
               </view>              
            }
        </ScrollView>
    )
}