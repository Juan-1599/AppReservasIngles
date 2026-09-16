import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import EtiquetaNivel from './EtiquetaNivel';
import {spacing, colors, typography} from '../theme';
import {CLASES} from '../data/clases';

export default function Card({ clase, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Image source={{ uri: clase.imagen }} />
            <View>
                <EtiquetaNivel nivel={clase.nivel} />
                <Text style={styles.titulo}> {clase.titulo} </Text>
                <Text style={styles.precio}> ${clase.precio.toFixed(2)} </Text>
                <Text style={styles.nivel}> Nivel: {clase.nivel} </Text>
                <Text style={styles.docente}> Docente: {clase.nombreDocente} </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 16,
        color: colors.texto
    },
    precio: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.texto,
        marginBottom: spacing.sm
    },
    nivel: {
        fontSize: 14,
        color: colors.texto,
        marginBottom: spacing.sm
    },
    docente: {
        fontSize: 14,
        color: colors.texto,
        marginBottom: spacing.sm
    },
});