import React,{useState,useEffect} from "react";
import { View,FlatList,StyleSheet,SafeAreaView,Button ,TextInput, Text} from "react-native";
import UpdateCategory from "./updateCategory";
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from "react-native-elements";


export default function AddCategory({navigation}){

    const [data,setData]=useState({
        name:"",
        id:"",
        description:""
    });
    const [name,setName]=useState({ name:"" });
    const [description,setDescription]=useState({description:""});

    const categoriesUrl ="https://northwind.vercel.app/api/categories"
  


    const submit = async (e) => {
        await fetch("https://northwind.vercel.app/api/categories",{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name,
          description
          })
        });
        navigation.navigate('Categories')
      }
   function handle(e){
       const newData = {...data}
       newData[e.target.id] = e.target.value
       setData(newData)

   }

    return(
        <View style={styles.mainContainer}>
        <SafeAreaView style={styles.mainContainer}>
              <View style={styles.container}>     
              <Text>Name</Text>
    <TextInput style={styles.input} onChangeText = {(val) => setName(val)} placeholder = 'Name' />
            <Text>Description</Text>
    <TextInput style={styles.input} onChangeText = {(val) => setDescription(val)} placeholder = 'Description' />
       <Button title= "Add New Category" color='#517fa4' onPress={()=>submit()}>Add New Category</Button>

               </View> 
        
               </SafeAreaView>
               </View>
    );

    };

    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            backgroundColor:'white',
            alignItems:'center',
            borderRadius:16,
            

        },
        mainContainer:{
            backgroundColor:'white',
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
        input : {
            borderWidth: 1,
            borderColor: '#777',
            margin: 10,
            padding: 8,
            width: 200,
            borderRadius: 16,
            textAlign: 'center',
          }
    });