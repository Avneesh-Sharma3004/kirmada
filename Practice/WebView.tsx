import React from "react";
import { View, Text } from "react-native";
import { WebView } from 'react-native-webview'

{/*npm i react-native-webview se packeg install krenge kisi bhi website ka link lga kr use mobile screen pe run kra skte hain*/}

export default function Web ()  {
    return (
       <WebView source={{uri:"https://www.flipkart.com/"}} />
    )
}

