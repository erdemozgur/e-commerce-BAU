import React,{useState,useEffect} from "react";
import { View, Text,FlatList,StyleSheet,ActivityIndicator,SafeAreaView,Button } from "react-native";
import {Icon } from "react-native-elements";


export default function Categories(){

    const [data,setData]=useState([]);
    const categoriesUrl ="https://northwind.vercel.app/api/categories"

    
    const getApi = () => {
        fetch(categoriesUrl)
        .then((response)=>response.json())
        .then((json)=>{
            setData(json);
        })
         .catch((error)=>console.error(error))   
    
    }

    useEffect(()=>{
        getApi();
    },[]);

    

    const deleteApi=(id)=>{
       
        fetch("https://northwind.vercel.app/api/categories/"+id,{
            method: 'DELETE'
        })
        .then((response)=>response.json())
        .then((data) =>{
            getApi();
        })      
    }
   

    return(
        <SafeAreaView>
        <View style={styles.container}>
            <FlatList 
            data={data} keyExtractor={({id},index)=>id}
            renderItem={({item})=>(
            <View style={{paddingBottom:10}}>
            <Text style={styles.categoriesText}>
            {item.id}.{item.description},{item.name}
            <Button onPress={()=> deleteApi(item.id)}></Button>
            </Text> 
             
            </View>
            )} >
            
            </FlatList>
        </View>

                

        </SafeAreaView>
    );

    };

    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            backgroundColor:"#fff",

        },
        categoriesText:{
            fontSize:26,
            fontWeight:"200",
        },
    });