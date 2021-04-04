import React, { Fragment, useState } from 'react'
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import style from './styles'


const Coments = ({ coments,novoComent }) => {
    const [comentarios, setComentario] = useState(coments)
    const addComent = () => {
        Input.clear();
        const novo=novoComent("Vitor",InputContent)
        setComentario([...comentarios,novo])
    }
    let Input;
    let InputContent = "";
    return (
        <View style={style.container}>
            <FlatList
                data={comentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <Text>
                        <Text style={{ fontWeight: "700" }}>
                            {item.userName}
                        </Text> {item.text}
                    </Text>
                }
            />
            <View style={style.inline}>
                <TextInput
                    ref={textInput => Input = textInput}
                    onChangeText={text => InputContent = text}
                    placeholder="Comente aqui..."
                    style={style.textInput}
                />
                <TouchableOpacity
                    onPress={addComent}
                >
                    <Image
                        source={require("../../../res/img/send.png")}
                        style={style.imagem}
                    />
                </TouchableOpacity>
            </View>
        </View>


    )
}
export default Coments

