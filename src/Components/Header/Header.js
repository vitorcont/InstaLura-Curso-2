import React,{Fragment} from 'react'
import {Image, Text, View} from 'react-native'
import style from './styles'

const Header = ({usuario,urlImage}) =>{
    return(
        <View style={style.header}>
            
            <Image 
                source={{uri: urlImage}} 
                style={style.imagem}
            />
            <Text>{usuario}</Text>
        </View>
        
    )
}
export default Header

