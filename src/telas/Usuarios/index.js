import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import UsuarioEditor from "./componentes/Cadastro"
import { Usuarios } from "./componentes/Tela"
import { useState } from "react";

export default function App() {

    const [usuarios, setUsuarios] = useState([])

    async function mostraUsuarios() {
        const todosChaves = await AsyncStorage.getAllKeys()
        const todosUsuarios = await AsyncStorage.multiGet(todosChaves)
        setUsuarios(todosUsuarios)
        console.log(todosUsuarios)
    }


    return (
        <SafeAreaView style={estilos.container}>
            <FlatList
                data={usuarios}
                renderItem={(usuario) => <Usuarios {...usuario} />}
                keyExtractor={usuario => usuario[0]} />
            <UsuarioEditor mostraUsuarios={mostraUsuarios} />
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