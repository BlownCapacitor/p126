import React, {Component} from 'react';
import {
    View, Text, TextInput, 
    KeyboardAvoidingView, StyleSheet, TouchableOpacity, 
    Alert} from 'react-native';

import Camera from './p126camera';

export default class App extends React.Component{
    render(){
        return(
            <Camera/>
        )
    }
}