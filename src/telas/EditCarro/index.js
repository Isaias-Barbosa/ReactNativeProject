import React from "react";
import { View, ScrollView, StyleSheet } from 'react-native';

import Form from './componentes/Form';

export default function EditCarro({ route, navigation }) {
    console.log(route.params);
    return <ScrollView>
        <View style={estilos.cesta}>
            <Form {...route.params}

                navigation={navigation}
            />

        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
