import React, { useCallback, useEffect } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold }
    from '@expo-google-fonts/montserrat';

import Cesta from '../telas/Carros';
import mock from '../../src/mocks/carros';

import * as SplashScreen from 'expo-splash-screen';

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

    /*
      if (!fonteCarregada) {
        <SplashScreen />
      }
    */

    return (
        <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <StatusBar />
            <Cesta {...mock} navigation={navigation} />
        </SafeAreaView>
    );
}


