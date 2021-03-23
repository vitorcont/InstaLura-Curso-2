/* eslint-disable prettier/prettier */
import React,{Fragment} from 'react'
import {Image, Text, View} from 'react-native'
import style from './styles'

const Picture = ({usuario}) =>{
    return(

            <Image 
                source={require('../../../res/img/alura.jpg')} 
                style={style.imagem} 
                />
    )
}
export default Picture