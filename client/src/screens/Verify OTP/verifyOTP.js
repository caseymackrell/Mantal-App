import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import { KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
let iconHeight = 26;
let iconWidth

const VerifyOTPScreen = ({ navigation }) => {

let textInput = useRef(null);
const lengthInput = 6;
const [internalVal, setInternalVal] = useState("");

const onChangeText = (val) => {

}



    return (
        <SafeAreaView style={styles.appContainer}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={50}
                behavior={'padding'}
                style = {styles.containerAvoidingView}>
                    <Text style={styles.titleStyle}>{"Input your code sent via SMS"}</Text>
                    <TextInput
                        onChangeText={onChangeText}
                        style={{width: 0, height: 0}}
                        value={internalVal}
                        maxLength={lengthInput}
                        returnKeyType="done"
                        keyboardType='numeric'
                        />
                </KeyboardAvoidingView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#2C2C2C',
     
      
    },
    containerAvoidingView: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    titleStyle: {
        marginVertical: 50,
        fontSize: 25,
        color: 'white'
    }
})

export default VerifyOTPScreen;