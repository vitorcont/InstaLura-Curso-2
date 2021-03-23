/* eslint-disable prettier/prettier */
import React,{Fragment} from 'react'
import {Image, Text, View} from 'react-native'
import style from './styles'

const Header = ({usuario}) =>{
    return(
        <View style={style.header}>
            
            <Image 
                source={require('../../../res/img/alura.jpg')} 
                style={style.imagem}
            />
            <Text>{usuario}</Text>
        </View>
        
    )
}
export default Header

