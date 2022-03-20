import React  from 'react';
import { StyleSheet, Text, View, TextInput, FlatList , TouchableOpacity } from 'react-native';

export default function Header() {
  
  return(
    <View style={styles.header}>    
        <Text style={styles.title}>Today's task</Text>
    </View>
  );
}





const styles = StyleSheet.create({
    header :{
        height:150,
            },

    title:{
      fontFamily:'Roboto',
      fontWeight:"700",
      fontSize:24,
      color:"#1A1A1A",
      left:20,
      top:94,
      width:145,
      height:28,
      },

}
);