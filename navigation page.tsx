import React from 'react';
import { View, Text, Button, Touchable, TouchableOpacity,Alert,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from '@react-navigation/native-stack';



type RootStackParamList = {
    Home: undefined;
    Menu: undefined;
    ExtraPage: undefined;
};


type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};


function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>

                <Text style={{backgroundColor:"#adda", height:27,width:70,borderColor:"#dadada",textAlign:"center",borderRadius:10,}}>Click me!</Text>

            </TouchableOpacity>
        </View>
    );
}

function DetailsScreen({navigation}: HomeScreenProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={()=> navigation.navigate('ExtraPage')} style={{backgroundColor:"#adda", height:50,width:70,borderColor:"#dadada",borderRadius:10,}}>
            <Text>Go to Extra Screen</Text>
        </TouchableOpacity>
            
        </View>
    );
}
function ExtraScreen(){
    return(
        <View>
            <Text></Text>
        </View>
    )
}


const Stack = createNativeStackNavigator<RootStackParamList>();


function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Menu" component={DetailsScreen} />
            <Stack.Screen name="ExtraPage"component={ExtraScreen}/>
        </Stack.Navigator>
    );
}


export default function Main() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}
