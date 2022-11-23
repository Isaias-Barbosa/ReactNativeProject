import React, { useCallback, useEffect } from 'react';
import { TouchableOpacity, SafeAreaView, StatusBar, StyleSheet, View, Dimensions } from "react-native"
import { useFonts, Montserrat_400Regular, Montserrat_700Bold }
    from '@expo-google-fonts/montserrat';

import Texto from '../componentes/Texto';
import * as SplashScreen from 'expo-splash-screen';

const width = Dimensions.get('screen').width;
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
export default function App({ navigation }) {

    const [fonteCarregada] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold,
    });

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await SplashScreen.preventAutoHideAsync();
                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
            } catch (e) {
                console.warn(e);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fonteCarregada) {
            await SplashScreen.hideAsync();
        }
    }, [fonteCarregada]);

    if (!fonteCarregada) {
        return null;
    }

    return (
        <SafeAreaView style={estilos.container} onLayout={onLayoutRootView}>
            <View style={estilos.topo}>
                <Texto style={estilos.titulo}>Olá, Isaias</Texto>
                <Texto style={estilos.descricao}>Bem-Vindo a tela administrativa</Texto>
            </View>
            <Texto style={estilos.titulo}>Escolha aonde você quer ir!</Texto>
            <TouchableOpacity style={estilos.bt}
                onPress={() => navigation.navigate('Carros')}>
                <Texto style={estilos.textoBotao}>Carros</Texto>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.bt}
                onPress={() => navigation.navigate('Carro', { nome, imagem, preco, descricao, edit, imagemcarro })}>
                <Texto style={estilos.textoBotao}>Cadastrar Usuarios</Texto>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.bt}
                onPress={() => navigation.navigate('Carro', { nome, imagem, preco, descricao, edit, imagemcarro })}>
                <Texto style={estilos.textoBotao}>Listar Usuarios</Texto>
            </TouchableOpacity>
            <StatusBar />
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
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
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 16,
        fontWeight: "bold",
    },
    bt: {
        marginBottom: 50,
        backgroundColor: "#000",
        paddingVertical: 24,
        borderRadius: 6,
        width: "60%",
    },
})

