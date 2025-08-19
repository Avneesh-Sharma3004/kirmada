import { Label } from '@react-navigation/elements';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';

const button = [
    { Label: '1', sub: '' },
    { Label: '2', sub: 'ABC' },
    { Label: '3', sub: 'DEF' },
    { Label: '4', sub: 'GHI' },
    { Label: '5', sub: 'JKL' },
    { Label: '6', sub: 'MNO' },
    { Label: '7', sub: 'PQRS' },
    { Label: '8', sub: 'TUV' },
    { Label: '9', sub: 'WXYZ' },
    { Label: '*', sub: '' },
    { Label: '0', sub: '+' },
    { Label: '#', sub: '' },
]

function Iphone() {
    const [input, setInput] = useState('')


    const handlePress = (val: any) => {
        setInput((prev) => prev + val);
    }
    const handleDelete = () => {
        setInput((prev) => prev.slice(0, -1));

    }


    return (

        <View style={styles.container}>
            <Text style={styles.input}>{input}</Text>
            <View style={styles.gride}>
                {button.map((btn, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => handlePress(btn.Label)} >
                        <Text style={styles.label}>{btn.Label}</Text>
                        {btn.sub !== '' && <Text style={styles.sub}>{btn.sub}</Text>}
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.bottomRow}>
                <TouchableOpacity style={styles.callButton} onPress={() => alert('Calling ${ input }')}>
                    <Ionicons name='call' size={27} color="#333" />
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={styles.erase} onPress={handleDelete}>
                        <Ionicons name="backspace" size={30} color="#333" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}
export default Iphone



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        alignItems: "center",
        borderColor: "#fff",
    },
    input: {
        fontSize: 32,
        marginBottom: 30,
        color: "#000",

    },
    gride: {
        width: "80%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        borderColor: "grey"

    },
    button: {
        width: 80,
        height: 80,
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 40,
        borderColor: "#888",
        backgroundColor: "#f2f2f2",
    },
    label: {
        fontSize: 28,
        color: "#000",
    },
    sub: {
        flexShrink: 12,
        color: "#888",
    },
    bottomRow: {
        marginTop: 20,
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    callButton: {
        backgroundColor: "green",
        padding: 16,
        borderRadius: 50,

    },
    erase: {

    }



})
