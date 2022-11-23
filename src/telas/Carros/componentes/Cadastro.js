import React, { useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { Picker } from '@react-native-picker/picker';
import { adicionaCarro } from '../../../servicos/Carros';

export default function Cadastro({ mostraCarros }) {

    const [titulo, setTitulo] = React.useState();
    const [number, setNumber] = React.useState();
    const [categoria, setCategoria] = React.useState("Carro")
    const [descricao, setDescricao] = React.useState();
    const [modalVisivel, setModalVisivel] = React.useState(false);

    async function salvaCarro() {
        const umCarro = {
            titulo: titulo,
            number: number,
            categoria: categoria,
            descricao: descricao,
        }
        await adicionaCarro(umCarro)
        mostraCarros()
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisivel}
                onRequestClose={() => { setModalVisivel(false) }}
            >
                <View style={estilos.centralizaModal}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={estilos.modal}>
                            <Text style={estilos.modalTitulo}>Criar Veículo</Text>
                            <Text style={estilos.modalSubTitulo}>Título do veículo</Text>
                            <TextInput
                                style={estilos.modalInput}
                                onChangeText={novoTitulo => setTitulo(novoTitulo)}
                                placeholder="Digite o nome do Veículo"
                                value={titulo} />
                            <Text style={estilos.modalSubTitulo}>Preço do Veículo</Text>
                            <TextInput
                                style={estilos.modalInput}
                                onChangeText={novoNumber => setNumber(novoNumber)}
                                keyboardType="numeric"
                                placeholder="Digite o Preço do Veiculo"
                                value={number} />
                            <Text style={estilos.modalSubTitulo}>Categoria</Text>
                            <View style={estilos.modalPicker}>
                                <Picker
                                    selectedValue={categoria}
                                    onValueChange={novaCategoria => setCategoria(novaCategoria)}>
                                    <Picker.Item label="Carro" value="Carro" />
                                    <Picker.Item label="Moto" value="Moto" />
                                </Picker>
                            </View>
                            <Text style={estilos.modalSubTitulo}>Conteúdo do Carro</Text>
                            <TextInput
                                style={estilos.modalInput}
                                multiline={true}
                                numberOfLines={3}
                                onChangeText={novoDescricao => setDescricao(novoDescricao)}
                                placeholder="Informe a descrição do Veículo"
                                value={descricao} />
                            <View style={estilos.modalBotoes}>
                                <TouchableOpacity style={estilos.modalBotaoSalvar} onPress={() => { salvaCarro() }}>
                                    <Text style={estilos.modalBotaoTexto}>Salvar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { setModalVisivel(false) }}>
                                    <Text style={estilos.modalBotaoTexto}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
            <TouchableOpacity onPress={() => { setModalVisivel(true) }} style={estilos.adicionarMemo}>
                <Text style={estilos.adicionarMemoTexto}>+</Text>
            </TouchableOpacity>
        </>
    )
}

const estilos = StyleSheet.create({
    centralizaModal: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end"
    },
    modal: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 32,
        marginTop: 8,
        marginHorizontal: 16,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    modalTitulo: {
        fontSize: 28,
        fontWeight: "600",
        marginBottom: 18,
    },
    modalInput: {
        fontSize: 18,
        marginBottom: 12,
        paddingHorizontal: 4,
        borderBottomWidth: 1,
        borderBottomColor: "#FF9A94",
    },
    modalPicker: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#EEEEEE",
        marginBottom: 12,
    },
    modalSubTitulo: {
        fontSize: 14,
        marginBottom: 8,
        fontWeight: "600"
    },
    modalBotoes: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    modalBotaoSalvar: {
        backgroundColor: "#2ea805",
        borderRadius: 5,
        padding: 8,
        width: 80,
        alignItems: "center",
    },
    modalBotaoDeletar: {
        backgroundColor: "#d62a18",
        borderRadius: 5,
        padding: 8,
        width: 80,
        alignItems: "center",
    },
    modalBotaoCancelar: {
        backgroundColor: "#057fa8",
        borderRadius: 5,
        padding: 8,
        width: 80,
        alignItems: "center",
    },
    modalBotaoTexto: {
        color: "#FFFFFF",
    },
    adicionarMemo: {
        backgroundColor: "#54ba32",
        justifyContent: "center",
        height: 64,
        width: 64,
        margin: 16,
        alignItems: "center",
        borderRadius: 9999,
        position: "absolute",
        bottom: 0,
        right: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    adicionarMemoTexto: {
        fontSize: 32,
        lineHeight: 40,
        color: "#FFFFFF",
    }
});
