import React from "react";
import { View, ScrollView, StyleSheet } from 'react-native';

import Form from './componentes/Form';

export default function NewCarro({ route }) {
    console.log(route.params);
    return <ScrollView>
        <View style={estilos.cesta}>
            <Form {...route.params} />
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
