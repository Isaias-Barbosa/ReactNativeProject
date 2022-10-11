import React from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Topo({ botaoB, navigation, titulo, add, imagemcarro }) {
    return <>
        <View >
            <TouchableOpacity style={estilos.botao}
                onPress={() => navigation.navigate('NovoCarro', { titulo, imagemcarro, add })}>
                <Texto style={estilos.textoBotao}>{botaoB}</Texto>
            </TouchableOpacity>
        </View>
    </>
}

const estilos = StyleSheet.create({
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
});