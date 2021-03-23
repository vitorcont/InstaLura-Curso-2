/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native'

const largura = Dimensions.get('window').width
const style=StyleSheet.create({
    imagem:{
      width: largura,
      height: largura,
      
    },
})

export default style