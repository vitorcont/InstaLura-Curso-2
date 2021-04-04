/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react';
import { Text, Image, ScrollView, Dimensions, StyleSheet, FlatList, StatusBar, TouchableOpacity, TextInput, View } from 'react-native'
import style from './styles'
import LogIn from '../../Services/login'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';


const Login = ({navigation}) => {
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const tryLog = async () =>{
        try{
            const token = await LogIn(user,password)
            await AsyncStorage.setItem("instalura_token", token)
            navigation.navigate("Feed")
        }catch(erro){
            setErrorMsg(erro.message)
        }    
    }

    return (
        <View style={style.container}>
            <Image
                source={require("../../../res/img/alura-logo.png")}
                style={style.logo}
            />
            <View >
                <TextInput
                    placeholder="Usuario"
                    style={style.textInput}
                    onChangeText={texto => setUser(texto)}
                />
                <TextInput
                    placeholder="Senha"
                    style={style.textInput}
                    secureTextEntry={true}
                    onChangeText={texto => setPassword(texto)}
                />
                
            </View>
            <Text>{errorMsg}</Text>
            <TouchableOpacity 
                style={style.buttom}
                onPress={tryLog}
                >
                <Image
                    source={require("../../../res/img/login.png")}
                    style={style.img}
                />
                <Text style={style.text}> Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
