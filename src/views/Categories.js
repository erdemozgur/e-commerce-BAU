import React,{useState,useEffect} from "react";
import { View, Text,FlatList,StyleSheet,ActivityIndicator,SafeAreaView,Button } from "react-native";
import UpdateCategory from "./updateCategory";
import { createStackNavigator } from 'react-navigation-stack';


export default function Categories({navigation}){

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

    function gotoUpdateCategory(id,description,name){
        navigation.navigate('UpdateCategory', {
        id:id,
        description:description,
        name:name,});
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
            <Button onPress={()=>gotoUpdateCategory(item.id,item.description,item.name)}>Update Categories</Button>
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