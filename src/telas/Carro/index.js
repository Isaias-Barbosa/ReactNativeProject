import React from "react";
import { View, ScrollView, StyleSheet } from 'react-native';

import Detalhes from './componentes/Detalhes';
import Botao from './componentes/Botao';

export default function Carro({ route, navigation, editcarro }) {
    console.log(route.params);
    return <ScrollView>
        <View style={estilos.cesta}>
            {/*
                <Carros {...mock} />
            */}
            <Detalhes {...route.params}
                navigation={navigation} />
            <Botao
                {...editcarro}
                {...route.params}
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