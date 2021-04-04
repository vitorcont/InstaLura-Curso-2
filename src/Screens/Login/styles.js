import {Dimensions, StyleSheet} from 'react-native'
const largura= Dimensions.get('window').width;
const altura=Dimensions.get('window').height;
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        marginBottom:120
    },
    textInput:{
        // backgroundColor:"gray",
        borderRadius:10,
        padding:7,
        marginTop:10,
        width:largura/2,
        borderColor:"#b5b5b5",
        borderWidth:0.9
    },
    buttom:{
        marginTop: altura/13,
        alignItems:'center',
        flexDirection:'row',
    },
    img:{
        width:40,
        height:40,
    },
    text:{
        color:"black",
        fontSize:26,
    }
})

export default styles;