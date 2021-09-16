import React from 'react';
import {StyleSheet, Text, View, Button, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

export default class Camera extends React.Component{
        state = ({image = null})
        render(){
            let{image} = this.state
            return(<View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title = 'Gallery' onPress = {this.ImagePicker}/>
            </View>)
        }

componentDidMount(){
    this.getCameraPermissionAsync}
getCameraPermissionAsync = async()=>{
    if(Platform.OS !== 'web'){
        const{status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(status !== 'granted'){
            alert('Camera Permission Required!')
        } }
}

ImagePicker = async()=>{
    try{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All, 
            allowsEditing: true, 
            aspect: [4, 3], 
            quality: 1
        });
        if(! result.cancelled){
            this.setState({
                image: result.data
            })
            this.uploadImage(result.uri)
        }
    }
    catch(e){
        console.log(e)

    }
}

uploadImage = async(uri)=>{
    const data = new FormData()
    let fileName = uri.split("/")[uri.split("/").length - 1] 
    let type = `image/${uri.split('.')[uri.split('.').length - 1]}` 
    const fileToUpload = { uri: uri, name: filename, type: type}
    data.append('digit',fileToUpload)
    fetch('ngrok tcp 22',
    {method: "POST", 
    body: data, 
    headers: { "content-type": "multipart/form-data"},})
  .then((Response)=>Response.json())  
  .then((Result)=>{console.log('success:', Result)})
  .catch((Error)=>{console.error('error:', Error)})}}
