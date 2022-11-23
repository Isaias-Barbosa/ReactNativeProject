import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Tarefa({ item, setTarefaSelecionada }) {
    const categorias = { Documentação: "#2F4F4F", Frontend: "#00BFFF", Backend: "#98FB98", BancoDeDados: "#DAA520" }
    const categoria_tarefa = { Rascunho: "#FFDEAD", EmAnalise: "#00CED1", Aprovado: "#00FF00", Rejeitado: "#DC143C", Feito: "#FFD700" }
    const estilos = styleFunction(categorias[item.categoria_desenvolvimento])
    const estilos_tarefa = styleFunction(categoria_tarefa[item.categoria_tarefa])

    return (
        <TouchableOpacity style={estilos.cartao} onPress={() => setTarefaSelecionada(item)}>
            <Text style={estilos.titulo}>{item.titulo}</Text>
            <Text style={estilos.categoria}>{item.categoria_desenvolvimento}</Text>
            <Text style={estilos_tarefa.categoria}>{item.categoria_tarefa}</Text>
            <Text style={estilos.texto} numberOfLines={5}>{item.texto}</Text>
        </TouchableOpacity>
    )
}

const styleFunction = (cor) => StyleSheet.create({
    cartao: {
        borderRadius: 8,
        backgroundColor: "#ffffff",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: 16,
        marginBottom: 8,
        borderTopWidth: 5,
        borderColor: cor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 4,
    },
    categoria: {
        borderRadius: 4,
        backgroundColor: cor,
        padding: 4,
        color: "#FAFAFA",
        alignSelf: "flex-start",
    },
    texto: {
        lineHeight: 28,
    }
})