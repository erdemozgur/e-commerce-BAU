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
         color: '#00000',
         marginTop:10,
         fontWeight: 'bold',
         textAlign: 'center',
         opacity:0.8
        },
        text1: {
         fontFamily: 'Helvetica',
         fontSize: 15,
         color: '#50504F',
         textAlign: 'center'
        },
        bar: {
          alignItems:'center',
          backgroundColor:'#E0EBFE',
          margin:10,
          width:750,
          borderWidth:2,
          borderColor: '#50504F',
          marginLeft:400,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30         
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
                        <Text style={styles.text1}> Quantity Per Unit: {item.quantityPerUnit}</Text>
                        <Text style={styles.text1}> Unit Price: {item.unitPrice + ' $'}</Text>
                        <Button title="Delete Product"  style={styles.Button1} onPress={() => deleteProduct(item.id)}></Button>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )

}