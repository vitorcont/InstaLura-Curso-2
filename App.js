/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react';
import { Text, Image, ScrollView, Dimensions, StyleSheet, FlatList } from 'react-native'
import Header from './src/Components/Header/index'
import Picture from './src/Components/Picture/index';
import lerFotos from './src/Services/feed'
import Coments from './src/Components/Coments/index'

const App = () => {
  const [fotos, setFotos] = useState([])

  useEffect(() => {
    lerFotos(setFotos)
  }, [])
  return (
    <>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <>
            <Header
              usuario={item.userName}
              urlImage={item.userURL}
            />
            <Picture
              usuario={item.userName}
              urlImage={item.url}
              desc={item.description}
              qntLikes={item.likes}
            />
            <Coments 
              coments={item.comentarios} 
            />
          </>
        }
      />
    </>

  )
};

const largura = Dimensions.get('window').width
const style = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura,
  }
})


export default App;
