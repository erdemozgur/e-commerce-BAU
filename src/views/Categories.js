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
        
    },[ getApi()]);

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

      function gotoAddCategory(){
        navigation.navigate('AddCategory');
      }
   
   

    return(
        <SafeAreaView>
        <View style={styles.container}>
        <View style={{ flex: 1 }}> 
             <Button title="Add Category" color="#FEE5C6"  style={styles.updateButton} onPress={()=>gotoAddCategory()}>Update Categories</Button>
            </View>
          
            <FlatList 
            data={data} keyExtractor={({id},index)=>id}
            renderItem={({item})=>(
            <View style={{paddingBottom:10}}>
            <Text style={styles.categoriesText}>
            {item.id}.{item.description},{item.name}
           
            </Text> 
            <View style={{ flex: 1, marginBottom: 10 }}> 
             <Button  title="Delete Category"  style={styles.deleteButton} onPress={()=> deleteApi(item.id)}>Delete Button</Button>
             </View>
            <View style={{ flex: 1 }}> 
             <Button title="Update Category" color="#FEE5C6"  style={styles.updateButton} onPress={()=>gotoUpdateCategory(item.id,item.description,item.name)}>Update Categories</Button>
            </View>
          
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
        categoriesText:{
            fontSize:26,
            fontWeight:"200",
        },
        deleteButton:{
            color:"blue",
            width: "100px",
            height:"100px",

        },
        addButton:{
            color:"red",
            width: "100px",
            height:"100px",
        },
        updateButton:{
            color:"black",
            width: "100px",
            height:"100px",
        },
    });