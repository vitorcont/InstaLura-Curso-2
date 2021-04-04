import React, { Fragment, useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import style from './styles'



const Picture = ({ usuario, urlImage, desc, qntLikes,LikeImg,LikePic }) => {
    const [curtiu, setCurtiu] = useState(false)
    const [likes, setLikes] = useState(qntLikes)
    const clickLike = () => {
        const [novoCurtiu, qnt] = LikePic(curtiu, likes)
        setLikes(qnt)
        setCurtiu(novoCurtiu)

    }

    return (
        <>
            <Image
                source={{ uri: urlImage }}
                style={style.imagem}
            />
            <View style={style.desc}>
               
                <View style={style.numLikes}>
                   
                    <TouchableOpacity
                        onPress={clickLike}
                    >
                        <Image
                            source={LikeImg(curtiu)}
                            style={style.like}
                        />
                    </TouchableOpacity>
                    <Text> {likes} curtidas</Text>
                </View>
                <Text>
                    <Text style={{fontWeight:"700"}}>
                        {usuario} 
                    </Text> {desc}
                </Text>
            </View>
        </>
    )
}
export default Picture