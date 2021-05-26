import React, {useState,useEffect} from "react";
import { View,StyleSheet, Text } from "react-native";
import { Button } from 'react-native-elements'
import { ScrollView,TouchableOpacity } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import props from 'prop-types';

export default function GetProducts({navigation}) {
  
    const [products, setProducts] = useState([]);
    const getProducts = () =>
    {
        fetch('https://northwind.vercel.app/api/products')
        .then((res) =>  res.json())
        .then((data) => {
            setProducts(data);
        })
    }
    useEffect(() => {
        getProducts();
    }, []);


    const deleteProduct = (id) => {
        fetch( 'https://northwind.vercel.app/api/products/'+id,{
            method: 'DELETE'
        })
        .then(res => res.text())
        .then(() => { getProducts(); })
      }

    function movetoProductDetails(id,supplierId,categoryId,unitsInStock,unitsOnOrder,reorderLevel){
      navigation.navigate('ProductDetails', {
      id:id,
      supplierId:supplierId,
      categoryId:categoryId,
      unitsInStock:unitsInStock,
      unitsOnOrder:unitsOnOrder,
      reorderLevel:reorderLevel});
    }

    const styles = StyleSheet.create({
        text: {
         fontFamily: 'Helvetica',
         fontSize: 20,
         color: '#f5fffa',
         fontWeight: 'bold',
         textAlign: 'center'
        },

        bar: {
          backgroundColor:'#663399',
          margin:10,
          borderWidth: 5,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40         
        },
        Button1: {
          fontFamily: 'Helvetica',
          height:50,
          width:200,
          marginTop:2,
          padding:10,
          marginBottom:10,
          alignSelf: 'center'
        }
        
        });

    return (
      
        <ScrollView>
            {
              
                products.map((item) => (
                    <TouchableOpacity style={styles.bar} onPress={() => movetoProductDetails(item.id,
                    item.supplierId,
                    item.categoryId,
                    item.unitsInStock,
                    item.unitsOnOrder,
                    item.reorderLevel)}>
                        <Text style={styles.text}> Product Name: {item.name}</Text>
                        <Text style={styles.text}> Quantity Per Unit: {item.quantityPerUnit}</Text>
                        <Text style={styles.text}> Unit Price: {item.unitPrice + ' $'}</Text>
                        <Button title="Delete Product" style={styles.Button1} onPress={() => deleteProduct(item.id)}></Button>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )

}