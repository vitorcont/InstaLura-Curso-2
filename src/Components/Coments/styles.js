/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native'

const largura = Dimensions.get('window').width
const style=StyleSheet.create({
    imagem:{
      width: largura/16,
      height: largura/16,
    },
    inline:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:35,
    },
    textInput:{
      flex:1
    },
    container:{
      marginHorizontal:largura*0.02,
      marginTop:5,
    }
})

export default style