import React, {useState} from "react";
import {View, Text, TextInput, FlatList, ScrollView, StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Card from "../components/Card";
import {spacing, colors, typography} from "../theme";
import {CLASES, NIVELES} from "../data/clases";
import { Ionicons } from "@expo/vector-icons";


export default function ClasesScreen ({navigation}) {
    //const { columnas, paddingHorizontal } = useSafeAreaInsets();
    const [nivel, setNivel] = useState('Todos');

    return (
        <View>
            <View>
                <Text>Aplicación de clases de inglés</Text>
                <View>
                    <Ionicons name="search" size={18}/>
                    <TextInput
                        placeholder="Buscar por nivel o profesor"
                        value={nivel}
                        onChangeText={setNivel}
                        autoCorrect={false}

                    />
                </View>
                
            </View>
        </View>
    )
}

