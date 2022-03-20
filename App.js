import React, { useState }  from 'react';
import { StyleSheet,  View, FlatList  , Alert } from 'react-native';
import AddList from './Components/addList';
import Header from './Components/Header';
import List from './Components/List';

export default function App() {

  const [Todo, setTodo] = useState([
    { components: "Like 👍", key: "1" },
    { components: "DisLike 👎", key: "2" },
    { components: "Love ❤", key: "3" },
    { components: "Funny 😂", key: "4" },
    { components: "Angry 😡", key: "5" },
    { components: "Wow 😲", key: "6" },
    { components: "Comment 📢", key: "7" },
    { components: "Share ↗", key: "8" },
    { components: "Subscribe 🙃", key: "9" },
    { components: "Answer 🤔", key: "10" },
    { components: "Tweet 🐓", key: "11" },
]);

const pressHandeler=(components)=>{
  Alert.alert( 'Alert',components ,[
    {text :'Ok', onPress :()=>console.log('stoped')}
  ]);
}

const summitHandeler=(components)=>{

  if(components.length >0){  
    setTodo((previosList) =>{
    return [
      {components : components , key : Math.random().toString() } ,
      ...previosList
    ];
  });
}
else {
  Alert.alert( 'Warrning','No item to be added' ,[
    {text :'understood', onPress :()=>console.log('stoped')}
  ]);
}


}

 

  return(
    <View style={styles.container}>
      {/* header */}
        <Header/>
        {/* ------------------------------------ */}
        <View style={styles.content}> 
                {/* list */}
                <View style={styles.list}>
                  <FlatList
                    data={Todo}
                    renderItem={({ item }) => (
                        <List item={item} pressHandeler={pressHandeler}/>
                    )}
                />
                </View>
        </View>
        {/* -------------------------------------- */}
        {/* footer */}
        <View style={styles.footer}>
          <AddList summitHandeler={summitHandeler} />                    
        </View>
    </View>

  );
}





const styles = StyleSheet.create({
  container: {
    flex :1,
    backgroundColor: '#E8EAED',
    
    },
 


  content:{
    paddingTop : 40,
    height : 500,
      },
   list :{
     marginLeft:30.
   },   
  


}
);













  // const [name, setName] = useState("Hello , let's start !");
  // const [age, setage] = useState(0);
  // const [Peaple, setPeaple] = useState([
  //   { name: 'Abdo', id: '23' },
  //   { name: 'Abdoelrahman', id : '22' },
  //   { name: 'Ali', id: '21' },
  //   { name: 'Ashraf', id: '19' },
  //   { name: 'Mohammed', id: '18' },
  //   { name: 'Abbas', id: '17' },
  //   { name: 'Ahmed', id: '16' },
  //   { name: 'Hassan', id: '15' },
  //   { name: 'Sayed', id: '14' },
  //   { name: 'Said', id: '13' },
  //   { name: 'Adham', id: '12' },
  //   { name: 'Akram', id: '11' },
  // ]);
  // /*return (
  //  <View style={styles.container}>
    
  //   <Text>Welcome {name}</Text>
  //    <Text> Enter your name : </Text>
  //    <TextInput 
  //    multiline
  //    style={styles.input}
  //    placeholder="e.g Abdelrahman "
  //    onChangeText={(val)=>setName(val)}/>
      
  //   <Text> Enter your age : </Text>
  //    <TextInput 
  //    keyboardType='numeric'
  //    style={styles.input}
  //    placeholder="e.g 99 "
  //    onChangeText={(val1)=>setage(val1)}/>
  //     <Text>you are {age}</Text>


  //     </View>
  // );
  // */

  // const pressHandeler=(id) =>{
  //     setPeaple((prevPeaple)=>{
  //       return prevPeaple.filter(i=> i.id !=id)
  //     })
  // }
  // return (
  //   <View style={styles.container}>
      
  //     <FlatList 
  //     numColumns={2}
  //     keyExtractor={(item)=> item.id}
  //       data={Peaple}
  //       renderItem={({ item }) =>(
  //         <TouchableOpacity onPress={()=> pressHandeler(item.id)} >
  //         <Text style={styles.item}>{item.name}</Text>
  //         </TouchableOpacity>
  //       )}
  //     />
      
  //     {/* <ScrollView>

  //       {Peaple.map((item) => {
  //         return (

  //           <View key={item.key}>
  //             <Text style={styles.item}>{item.name}</Text>
  //           </View>
  //         )
  //       })}

  //     </ScrollView> */}


  //   </View>
  // );




  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     //  alignItems: 'center',
  //     //    justifyContent: 'center',
  //     paddingTop: 100,
  //     marginHorizontal: 40,
  
  //   },
  
  //   buttonContainer: {
  //     backgroundColor: "blue",
  //   },
  
  //   input: {
  //     borderColor: "red",
  //     margin: 20,
  //     padding: 10,
  //     width: 200,
  //     borderWidth: 2,
  //   },
  
  //   item: {
  //     marginTop: 25,
  //     padding: 30,
  //     fontSize: 30,
  //     backgroundColor: "red",
  //     marginHorizontal :10
  //   }
  // });
