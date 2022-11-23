import { FlatList, SafeAreaView, StatusBar, StyleSheet, View } from "react-native"
import TarefaEditor from "./componentes/Cadastro"
import { Tarefa } from "./componentes/Tela"
import { useEffect, useState } from "react"
import { buscaTarefa, criaTabela, filtraPorCategoria } from "../../servicos/Banco"
import { Picker } from "@react-native-picker/picker"

export default function App() {

    useEffect(() => {
        criaTabela()
        mostraTarefa()
    }, [])

    const [tarefaSelecionada, setTarefaSelecionada] = useState({})
    const [tarefas, setTarefas] = useState([])
    const [categoria, setCategoria] = useState("Todos")

    async function mostraTarefa() {
        const todasTarefas = await buscaTarefa()
        setTarefas(todasTarefas)
        console.log(todasTarefas)
    }

    async function filtraLista(categoriaSelecionada) {
        setCategoria(categoriaSelecionada)
        if (categoriaSelecionada == "Todos") {
            mostraTarefa()
        } else {
            setTarefas(await filtraPorCategoria(categoriaSelecionada))
        }
    }

    return (
        <SafeAreaView style={estilos.container}>
            <FlatList
                data={tarefas}
                renderItem={(tarefa) => <Tarefa {...tarefa} setTarefaSelecionada={setTarefaSelecionada} />}
                keyExtractor={tarefa => tarefa.id}
                ListHeaderComponent={() => {
                    return (
                        <View style={estilos.picker}>
                            <Picker selectedValue={categoria} onValueChange={(categoriaSelecionada) => filtraLista(categoriaSelecionada)}>
                                <Picker.Item label="Todos" value="Todos" />
                                <Picker.Item label="Documentação" value="Documentação" />
                                <Picker.Item label="Front-end" value="Frontend" />
                                <Picker.Item label="Back-end" value="Backend" />
                                <Picker.Item label="BancoDeDados" value="BancoDeDados" />
                            </Picker>
                        </View>
                    )
                }} />
            <TarefaEditor mostraTarefa={mostraTarefa} tarefaSelecionada={tarefaSelecionada} setTarefaSelecionada={setTarefaSelecionada} />
            <StatusBar />
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "flex-start",
    },
    picker: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#EEEEEE",
        margin: 16,
    }
})