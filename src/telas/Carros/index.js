import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Topo from './componentes/Topo';
import Botao from './componentes/Botao';
import Itens from './componentes/itens';


export default function Carros({ topo, itens, nbotao, navigation, cadastro, editcarro }) {
    return <ScrollView>
        <Topo {...topo} />
        <View style={estilos.cesta}>
            {/*
                <Carros {...mock} />
            */}
            <Itens
                {...itens}
                navigation={navigation}
            />
            <Botao
                {...nbotao}
                {...cadastro}
                navigation={navigation} />
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
