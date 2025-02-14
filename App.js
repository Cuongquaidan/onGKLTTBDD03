import { Text, SafeAreaView, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Login";
import Electronics from "./Electronics";
import { AuthProvider } from "./context/AuthContext";
const Stack = createStackNavigator();
export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Electronics">
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    ></Stack.Screen>
                    <Stack.Screen
                        name="Electronics"
                        component={Electronics}
                        options={{ headerShown: false }}
                    ></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}
