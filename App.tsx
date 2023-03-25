import theme from "@theme/index";

import { ThemeProvider } from "styled-components";

import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import Loading from "@components/Loading";

import { StatusBar } from "react-native";

import Routes from "@routes/index";

export default function App() {
    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                barStyle="default"
                backgroundColor="transparent"
                translucent
            />
            {fontsLoaded ? <Routes /> : <Loading />}
        </ThemeProvider>
    );
}
