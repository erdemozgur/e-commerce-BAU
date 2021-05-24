import React,{useState,useEffect} from "react";
import { View, Text,FlatList,StyleSheet,ActivityIndicator,SafeAreaView } from "react-native";



export default function Categories(){

    const [data,setData]=useState({});
    const categoriesUrl ="https://northwind.vercel.app/api/categories"
    const [name,setName]=useState([]);
    const [description,setDescription]=useState([]);
    const [id,setID]=useState([]);

    useEffect(()=>{
    fetch(categoriesUrl)
    .then((response)=>response.json())
    .then((json)=>{
        setData(json);
    })
     .catch((error)=>console.error(error))   
    });
    
    

    return(
        <SafeAreaView>

     
        <View style={styles.container}>
            <FlatList 
            data={data} keyExtractor={({id},index)=>id}
            renderItem={({item})=>(
            <View style={{paddingBottom:10}}>
            <Text style={styles.categoriesText}>
            {item.id}.{item.description},{item.name}
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