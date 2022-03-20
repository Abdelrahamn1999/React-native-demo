import React from 'react';
import { StyleSheet, View,Text, TouchableOpacity  } from 'react-native';

export default function List({ item ,pressHandeler }) {
    
    return (
        <TouchableOpacity onPress={()=> pressHandeler(item.components)} style={styles.Listitems} >
            <View style={styles.SquareShape} />
            <Text style={styles.item}>{item.components}</Text>
            <View style={styles.CircleShape} />
        </TouchableOpacity>
    );
}







const styles = StyleSheet.create({
    Listitems:{
        flexDirection:'row',
        borderColor:"#bbb",
       borderWidth:1,
       width:335,
       borderRadius :10,
       backgroundColor:"#FFFFFF",
       marginBottom:10,
       height:50,
            paddingLeft : 15,
       paddingTop:10,
    },

    item: {
       paddingLeft :10 ,      
       fontSize:14,
       fontFamily:"Roboto", 
       width:150,     
    },

    SquareShape: {
        width:24 ,
        height: 24,
        backgroundColor: '#55BCF6',
        borderRadius : 5,
        opacity:0.4,
     
      },
      CircleShape: {
        marginTop:6,
        width: 12,
        height: 12,
        borderWidth:2,
        borderColor: '#55BCF6',
        borderRadius : 180/2,
        left:125,
      },



}
);
