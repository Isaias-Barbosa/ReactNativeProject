import React from "react";
import { View, Image, StyleSheet } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({ nome, preco, descricao, imagem }) {
    return <>
        <View>
            <Image source={imagem} style={estilos.imagem} />
            <Texto style={estilos.nome}>{nome}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
            <Texto style={estilos.descricao}>{descricao}</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    imagem: {
        width: "100%",
        height: 206,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },

});