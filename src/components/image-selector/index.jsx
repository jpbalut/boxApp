import { Ionicons } from '@expo/vector-icons';

import { TouchableOpacity, View, Text, Image, Alert } from 'react-native';
import {requestCameraPermissionsAsync, launchCameraAsync } from 'expo-image-picker'

import { styles } from './styles';
import { COLORS } from '../../themes';
import { useState } from 'react';

const ImageSelector = ({ profileImage, onSelect }) => {
    const [image, setImage] = useState(null)

    const verifyPermissions = async() => {
        // const { status } = await requestMediaLibraryPermissionsAsync();
        const { status } = await requestCameraPermissionsAsync();
        if(status !== 'granted'){
            Alert.alert("Permission denied", "You need to grant camera permission to use this app.",
            [{text: "Okay"}])
            return false
        }
        return true
    }

    const onHandleTakePhoto=async()=>{
        // const isMediaPermission= await verifyPermissions()

        const isCameraPermission= await verifyPermissions()
        if(!isCameraPermission) return;
        // const result = await launchImageLibraryAsync({
        //     mediaTypes: 'Images'
        //     allowsEditing: true,
        //     aspect:[16,9],
        //     quality: 0.5,
        // })
        const result = await launchCameraAsync({
            mediaTypes: 'Images',
            allowsEditing: true,
            aspect:[16,9],
            quality: 0.5,
            base64: true,
        })

        onSelect({uri: result.assets[0].uri, base64: result.assets[0].base64})
        setImage(result.assets[0].uri)

        console.log({assets: result.assets})
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <TouchableOpacity onPress={onHandleTakePhoto}>
                {(image  || profileImage) ? (<Image source={{uri:image  || profileImage}} style={styles.image} resizeMode="contain"/>) : (<Ionicons name="ios-camera" size={24} color={COLORS.primary}/>) }
            </TouchableOpacity>
            </View>
        </View>
    )
};

export default ImageSelector;