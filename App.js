/* eslint-disable prettier/prettier */
import React, {Fragment} from 'react';
import {Text,Image, ScrollView, Dimensions,StyleSheet, FlatList} from 'react-native'
import Header from './src/Components/Header/index'
import Picture from './src/Components/Picture/index';


const App = () => {

  return (
    <>
      <ScrollView>
        <FlatList 
          data={info}
          keyExtractor={(item)=>item.id.toString()}
          renderItem={({item})=>
            <>
              <Header usuario={item.usuario}/>
              <Picture />
            </>
          }
          />

      </ScrollView>
    </>
  
  )
};

const largura = Dimensions.get('window').width
const info=[
  {id:0, usuario:"Ricardo"},
  {id:1, usuario:"Marina"},
  {id:2, usuario:"Vitor"}
];


const style=StyleSheet.create({
  imagem:{
    width: largura,
    height: largura,
  }
})


export default App;
