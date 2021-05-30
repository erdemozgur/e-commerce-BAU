    import React, { useEffect, useState } from "react";
    import { View,Text,StyleSheet, TextInput, Button} from 'react-native';
    import { createStackNavigator } from 'react-navigation-stack';

    export default function UpdateCategory({navigation}){

      const [name, setName] = useState(navigation.getParam('name', 'Not Found!'))
      const [id, setID] = useState(navigation.getParam('id', 'Not Found!'))
      const [description, setDescription] = useState(navigation.getParam('description', 'Not Found!'))

      const submit = async () => {
        await fetch("https://northwind.vercel.app/api/categories/"+id,{
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name,
            description
          })
        });
        navigation.navigate('Categories')
      }

      return(
          <View style={styles.container}>
          <Text style={styles.text2}> Update Category </Text> 
          <Text style={styles.text}> Name: </Text>    
          <TextInput 
            style={styles.input}
            onChangeText = {(val) => setName(val)}
            placeholder = 'Name'
            value = {name} />

          <Text style={styles.text}> Description: </Text>
            <TextInput 
              style={styles.input}
              onChangeText = {(val) => setDescription(val)}
              placeholder = 'Description'
              value = {description} />

          <Button
            title= "Update"
            onPress={()=>submit()}
            />
        </View> 

      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
        text: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        color: '#191970',
        textAlign: 'center'
        },
        text2: {
        fontFamily: 'Helvetica',
        fontSize: 40,
        color: '#663399',
        fontWeight: 'bold',
        textAlign: 'center'
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

 