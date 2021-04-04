/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react';
import { Text, Image, ScrollView, Dimensions, StyleSheet, FlatList, StatusBar } from 'react-native'
import Header from '../../Components/Header/index'
import Picture from '../../Components/Picture/index';
import lerFotos from '../../Services/feed'
import addComent from '../../Services/coments'
import Coments from '../../Components/Coments/index'
import { LikeImg, LikePic } from '../../Services/likes'

const Feed = () => {
  const [fotos, setFotos] = useState([])

  useEffect(() => {
    lerFotos(setFotos)
  }, [])
  return (
    <>
      <StatusBar 
        backgroundColor="white"
        barStyle="dark-content"
      />
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
              LikeImg={LikeImg}
              LikePic={LikePic}
            />
            <Coments 
              coments={item.comentarios}
              novoComent={addComent} 
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


export default Feed;
