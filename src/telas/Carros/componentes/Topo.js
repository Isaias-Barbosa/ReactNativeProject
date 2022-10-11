import React from "react";
import { View, StyleSheet, Dimensions } from 'react-native';

import Texto from '../../../componentes/Texto';
import topo from '../../../../assets/frutas/cronos.jpg'

const width = Dimensions.get('screen').width;

export default function Topo({ titulo, descricao }) {
    return <>
        <View style={estilos.topo}>
            <Texto style={estilos.titulo}>{titulo}</Texto>
            <Texto style={estilos.descricao}>{descricao}</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        backgroundColor: "#F8F8FF",
    },
    titulo: {
        width: "100%",
        textAlign: "left",
        fontSize: 20,
        lineHeight: 26,
        color: "#000",
        fontWeight: "bold",
        padding: 16,
        borderRadius: 6,
    },
    descricao: {
        width: "100%",
        color: "#A3A3A3",
        textAlign: "left",
        fontSize: 15,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 6,
        paddingHorizontal: 16,
    }
});