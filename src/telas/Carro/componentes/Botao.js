import React from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Topo({ navigation, titulo2, edit, nome, imagem, preco, descricao, imagemcarro, editar }) {
    return <>
        <View >
            <TouchableOpacity style={estilos.botao}
                onPress={() => navigation.navigate('EditCarro', { titulo2, nome, imagem, preco, descricao, imagemcarro, editar })}>
                <Texto style={estilos.textoBotao}>{edit}</Texto>
            </TouchableOpacity>
        </View>
    </>
}
const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    edit: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
});