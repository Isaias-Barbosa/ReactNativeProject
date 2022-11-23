import { Picker } from "@react-native-picker/picker"
import React, { useEffect, useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { adicionaTarefa, atualizaTarefa, removeTarefa } from "../../../servicos/Banco"

export default function TarefaEditor({ mostraTarefa, tarefaSelecionada, setTarefaSelecionada }) {
    useEffect(() => {
        if (tarefaSelecionada.id) {
            preencheModal()
            setTarefaParaAtualizar(true)
            setModalVisivel(true)
            return
        }
        setTarefaParaAtualizar(false)
    }, [tarefaSelecionada])

    const [titulo, setTitulo] = useState("")
    const [categoria_desenvolvimento, setCategoria] = useState("Documentação")
    const [categoria_tarefa, setCategoriaTarefa] = useState("Rascunho")
    const [texto, setTexto] = useState("")
    const [modalVisivel, setModalVisivel] = useState(false)
    const [tarefaParaAtualizar, setTarefaParaAtualizar] = useState(false)

    async function salvaTarefa() {
        const umaTarefa = {
            titulo: titulo,
            categoria_desenvolvimento: categoria_desenvolvimento,
            categoria_tarefa: categoria_tarefa,
            texto: texto,
        }
        await adicionaTarefa(umaTarefa)
        mostraTarefa()
        limpaModal()
    }

    async function modificaTarefa() {
        const umaTarefa = {
            titulo: titulo,
            categoria_desenvolvimento: categoria_desenvolvimento,
            categoria_tarefa: categoria_tarefa,
            texto: texto,
            id: tarefaSelecionada.id
        }
        await atualizaTarefa(umaTarefa)
        mostraTarefa()
        limpaModal()
    }

    async function deletaTarefa() {
        await removeTarefa(tarefaSelecionada)
        mostraTarefa()
        limpaModal()
    }

    function preencheModal() {
        setTitulo(tarefaSelecionada.titulo)
        setCategoria(tarefaSelecionada.categoria_desenvolvimento)
        setCategoriaTarefa(tarefaSelecionada.categoria_tarefa)
        setTexto(tarefaSelecionada.texto)
    }

    function limpaModal() {
        setTitulo("")
        setCategoria("Documentação")
        setCategoriaTarefa("Rascunho")
        setTexto("")
        setTarefaSelecionada({})
        setModalVisivel(false)
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
                            <Text style={estilos.modalTitulo}>Desenvolver Software</Text>
                            <Text style={estilos.modalSubTitulo}>Título do desenvolvimento</Text>
                            <TextInput
                                style={estilos.modalInput}
                                onChangeText={novoTitulo => setTitulo(novoTitulo)}
                                placeholder="Informe o titulo do Desenvolvimento"
                                value={titulo} />
                            <Text style={estilos.modalSubTitulo}>Categoria do Desenvolvedor</Text>
                            <View style={estilos.modalPicker}>
                                <Picker
                                    selectedValue={categoria_desenvolvimento}
                                    onValueChange={novaCategoria => setCategoria(novaCategoria)}>
                                    <Picker.Item label="Documentação" value="Documentacao" />
                                    <Picker.Item label="Front-end" value="Frontend" />
                                    <Picker.Item label="Back-end" value="Backend" />
                                    <Picker.Item label="BancoDeDados" value="BancoDeDados" />
                                </Picker>
                            </View>
                            <Text style={estilos.modalSubTitulo}>Qual o Estado ?</Text>
                            <View style={estilos.modalPicker}>
                                <Picker
                                    selectedValue={categoria_tarefa}
                                    onValueChange={novaCategoria => setCategoriaTarefa(novaCategoria)}>
                                    <Picker.Item label="Rascunho" value="Rascunho" />
                                    <Picker.Item label="Em Análise" value="EmAnalise" />
                                    <Picker.Item label="Aprovado" value="Aprovado" />
                                    <Picker.Item label="Rejeitado" value="Rejeitado" />
                                    <Picker.Item label="Feito" value="Feito" />
                                </Picker>
                            </View>
                            <Text style={estilos.modalSubTitulo}>Conteúdo do software</Text>
                            <TextInput
                                style={estilos.modalInput}
                                multiline={true}
                                numberOfLines={3}
                                onChangeText={novoTexto => setTexto(novoTexto)}
                                placeholder="Informe aqui alguma observação"
                                value={texto} />
                            <View style={estilos.modalBotoes}>
                                <TouchableOpacity style={estilos.modalBotaoSalvar} onPress={() => {
                                    tarefaParaAtualizar ? modificaTarefa() : salvaTarefa()
                                }}>
                                    <Text style={estilos.modalBotaoTexto}>Salvar</Text>
                                </TouchableOpacity>
                                {tarefaParaAtualizar ?
                                    <TouchableOpacity style={estilos.modalBotaoDeletar} onPress={() => { deletaTarefa() }}>
                                        <Text style={estilos.modalBotaoTexto}>Deletar</Text>
                                    </TouchableOpacity> : <></>
                                }
                                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { limpaModal() }}>
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