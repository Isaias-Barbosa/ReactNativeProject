import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import Texto from '../../../componentes/Texto';

export default function Form({ titulo, add, imagemcarro }) {
    const [text, Nome] = React.useState();
    const [text1, Descricao] = React.useState();
    const [number, Valor] = React.useState();
    return <>
        <View style={styles.topo}>
            <Texto style={styles.titulo}>{titulo}</Texto>
        </View>
        <View style={styles.item}>
            <TextInput
                style={styles.input}
                onChangeText={Nome}
                value={text}
                placeholder="Nome"
            />
            <TextInput
                style={styles.input}
                onChangeText={Descricao}
                value={text1}
                placeholder="Descrição"
            />
            <TextInput
                style={styles.input}
                onChangeText={Valor}
                value={number}
                placeholder="Valor"
                keyboardType="numeric"
            />
            <Texto style={styles.nome}>{imagemcarro}</Texto>
            <TextInput
                style={styles.text}
                onChangeText={Nome}
                value={text}
                placeholder="Informe a URL da imagem"
            />
            <TouchableOpacity style={styles.edit} onPress={() => { }}>
                <Texto style={styles.textoBotao}>{add}</Texto>
            </TouchableOpacity>
        </View>
    </>
}
const styles = StyleSheet.create({
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
    item: {
        borderBottomWidth: 2,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        flexDirection: "column",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        height: 90,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
    nome: {
        width: "100%",
        textAlign: "left",
        fontSize: 20,
        lineHeight: 26,
        color: "#000",
        fontWeight: "bold",
        padding: 16,
        borderRadius: 6,
    },
});

