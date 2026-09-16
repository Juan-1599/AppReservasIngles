import react from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import DetalleClaseScreen from "../screens/DetalleClaseScreen";
import ClasesScreen from "../screens/ClasesScreen";
import { colors } from "../theme";

const Stack = createNativeStackNavigator();

export default function ClasesStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={ClasesScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DetalleClase"
                component={DetalleClaseScreen}
                options={{title:'Detalle', headerBackTitle: 'Atrás'}}
            />

        </Stack.Navigator>
    );
}