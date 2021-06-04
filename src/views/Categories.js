import React,{useState,useEffect} from "react";
import { View, Text,FlatList,StyleSheet,ActivityIndicator,SafeAreaView,Button,TouchableHighlight } from "react-native";
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
        <SafeAreaView >
     
        <View style={{ flex: 1 ,alignItems:'center'}}> 
        <Button title="Add Category" color="#636e72"  style={styles.addButton} onPress={()=>gotoAddCategory()}>Add New Categories</Button>
            </View>
            <View style={{ flex: 1 ,alignItems:'center'}}> 
            <FlatList data={data} keyExtractor={({id},index)=>id} renderItem={({item})=>(
                <TouchableHighlight style={styles.elements}>
                <View style={{ backgroundColor: 'white' }}>
         
            <Text style={{ fontSize: 14, opacity: .6 , color: 'blue', textAlign:"center"}}> {item.id}</Text> 
            <Text style={{ fontSize: 14, opacity: .6 , color: 'blue',textAlign:"center"}}> {item.name}</Text> 
            <Text style={{ fontSize: 14, opacity: .6 , color: 'blue',textAlign:"center"}}> {item.description}</Text> 
            <Button title="Update Category" color="#a29bfe"  style={styles.updateButton} onPress={()=>gotoUpdateCategory(item.id,item.description,item.name)}>Update Categories</Button>
            <Button  title="Delete Category" color="#81ecec"  style={styles.deleteButton} onPress={()=> deleteApi(item.id)}>Delete Button</Button>
            </View>
            </TouchableHighlight>
    
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
        deleteButton:{
            width: "100px",
            height:"100px",
        },
        addButton:{
            width: "100px",
            height:"100px",
        },
        updateButton:{
            width: "100px",
            height:"100px",
        },
        elements: {
            height: 150,
            width: 500,
            margin: 10,
            borderRadius: 12,
            padding: 10,
            backgroundColor: '#FFF',
          },
          mainView: {
            alignItems:'center', 
          },
    });