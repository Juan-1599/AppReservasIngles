import { Platform } from 'react-native';

export const colors = {
    fondo: '#f6f7fb',
    superficie: '#ffffff',
    primario: '#4f46e5',
    texto: '#111827',
    textoSuave: '#6b7280',
    borde: '#e5e7eb',
};

export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20
};

export const typography = {
    titulo: {fontSize: 20, fontWeight: '800', color: colors.texto},
    subtitulo: {fontSize: 18, fontWeight: '600', color: colors.texto},
    cuerpo: {fontSize: 15, fontWeight: '600', color: colors.texto},
    secundario: {fontSize: 13, color: colors.textoSuave},
    etiqueta: {fontSize: 12, fontWeight: '600'}
};

export const radius = {
    md: 12,
    full: 999,
};

export default {
    colors,
    spacing,
    typography,
    radius,
};