/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native'

const largura = Dimensions.get('window').width/8
const style=StyleSheet.create({
    imagem:{
      width: largura,
      height: largura,
      margin: 10,
      borderRadius:50
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
    }
})

export default style