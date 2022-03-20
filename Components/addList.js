import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function AddList({ summitHandeler }) {

    const [components, setcomponents] = useState(' ');

    const changeHandeler = (val) => {
        setcomponents(val);
    }


    return (
        <View style={styles.footer}>
            <TextInput
                style={styles.input}
                placeholder='Write a task'
                onChangeText={(val) => changeHandeler(val)}
            />

            <TouchableOpacity onPress={() => summitHandeler(components)} >
               
                <View style={styles.addingButton}>
                <View style={styles.LineShape1} />
                <View style={styles.LineShape2} />
                </View>
            </TouchableOpacity>

        </View>
    );
}





const styles = StyleSheet.create({

    input: {
        width: 250,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 20,
        textAlign: 'center',


    },

    addingButton: {
        width: 50,
        height: 50,
        borderRadius: 180 / 2,
        backgroundColor: "#fff",
        marginLeft: 35,


    },

 
    footer: {
        marginLeft: 30,
        top: 100,
        flexDirection: 'row',
        width: 355,


    },
    LineShape1: {
        width: 25,
        height: 3,
        backgroundColor: '#C0C0C0',
        borderRadius: 5,
        alignSelf:'center',
        top:22,
    },

    LineShape2: {
        width: 25,
        height: 3,
        backgroundColor: '#C0C0C0',
        borderRadius: 5,
        alignSelf:'center',
        top:21,
        transform: [{ rotate: '90deg' }, ],
    },

}
);