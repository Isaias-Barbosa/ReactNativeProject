import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';


import Texto from '../../../componentes/Texto';
export default function Itens({ titulo, lista, bt, navigation }) {
    return <>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        {lista.map(({ nome, imagem, preco, descricao, edit, imagemcarro }) => {
            return <View key={nome} style={estilos.item}>
                <Image source={imagem} style={estilos.imagem} />
                <Texto style={estilos.nome}>{nome}</Texto>
                <Texto style={estilos.preco}> {preco}</Texto>
                <TouchableOpacity style={estilos.bt}
                    onPress={() => navigation.navigate('Carro', { nome, imagem, preco, descricao, edit, imagemcarro })}>
                    <Texto style={estilos.textoBotao}>{bt}</Texto>
                </TouchableOpacity>
            </View>
        })}
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 1,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        textAlign: "center",
        borderBottomWidth: 2,
    },
    item: {
        borderBottomWidth: 2,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        flexDirection: "column",
    },
    imagem: {
        width: 96,
        height: 96,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 2,
        color: "#464646",

    },
    preco: {
        fontSize: 16,
        flexDirection: "column"
    },
    botao: {
        marginTop: 12,
        backgroundColor: "#2A9F85",
        paddingVertical: 13,
        borderRadius: 6,
        padding: 30,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 16,
        fontWeight: "bold",
    },
    bt: {
        marginTop: 1,
        backgroundColor: "#000",
        paddingVertical: 13,
        borderRadius: 6,
        padding: 13,
        width: "50%",
    },
});