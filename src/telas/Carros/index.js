import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import Cadastro from "./componentes/Cadastro"
import { Car } from "./componentes/Car"
import { useEffect, useState } from "react"
import { buscaCarro, criaTabela } from "../../servicos/Carros/"

export default function App() {

    useEffect(() => {
        criaTabela()
        mostraCarro()
    }, [])

    const [carros, setCarros] = useState([])

    async function mostraCarro() {
        const todosCarros = await buscaCarro()
        setCarros(todosCarros)
        console.log(todosCarros)
    }

    return (
        <SafeAreaView style={estilos.container}>
            <FlatList
                data={carros}
                renderItem={(carro) => <Car {...carro} />}
                keyExtractor={carro => carro.id} />
            <Cadastro mostraCarros={mostraCarro} />
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
})

