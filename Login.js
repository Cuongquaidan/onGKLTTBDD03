import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useState, useCallback, useReducer } from "react";
import { useAuth } from "./context/AuthContext";

const accounts = [
    {
        email: "mot@gmail.com",
        password: "mot",
    },
    {
        email: "hai@gmail.com",
        password: "hai",
    },
    {
        email: "ba@gmail.com",
        password: "ba",
    },
    {
        email: "bon@gmail.com",
        password: "bon",
    },
    {
        email: "nam@gmail.com",
        password: "nam",
    },
];

const initialState = {
    email: "",
    password: "",
};
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_EMAIL": {
            return { ...state, email: action.payload };
        }
        case "SET_PASSWORD": {
            return { ...state, password: action.payload };
        }
        default:
            return state;
    }
};
const Login = ({ navigation }) => {
    // const [email,setEmail]= useState("")
    // const [password,setPassword]= useState("")
    const { setEmailAuth, setPasswordAuth } = useAuth();
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleLogin = useCallback(() => {
        console.log(state?.password);
        if (
            accounts.some((item) => {
                return (
                    item.email === state?.email &&
                    item.password === state?.password
                );
            })
        ) {
            setPasswordAuth(state.password);
            setEmailAuth(state.email);

            navigation.navigate("Electronics");
            console.log("Dang nhap thang cong");
        } else {
            console.log("Dang nhap that bai");
        }
    }, [
        navigation,
        setEmailAuth,
        setPasswordAuth,
        state?.email,
        state?.password,
    ]);
    return (
        <View style={{ alignItems: "center", padding: 30 }}>
            <Image
                source={require("./assets/icon.png")}
                style={{ marginTop: 50 }}
            ></Image>
            <Text style={{ fontWeight: 700, fontSize: 30, marginTop: 20 }}>
                Hello again
            </Text>
            <Text style={{ color: "gray" }}>Login into your account</Text>

            <View
                style={{
                    flexDirection: "row",
                    position: "relative",
                    width: 300,
                    marginTop: 40,
                }}
            >
                <Image
                    source={require("./assets/Vector.png")}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: 10,
                        transform: "translateY(-50%)",
                    }}
                ></Image>
                <TextInput
                    placeholder="Enter your email address"
                    style={{
                        padding: 10,
                        borderWidth: 1,
                        borderRadius: 5,
                        flex: 1,
                        paddingHorizontal: 40,
                        color: "gray",
                    }}
                    onChangeText={(value) =>
                        dispatch({ type: "SET_EMAIL", payload: value })
                    }
                    value={state?.email}
                ></TextInput>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    position: "relative",
                    width: 300,
                    marginTop: 20,
                }}
            >
                <Image
                    source={require("./assets/lock.png")}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: 10,
                        transform: "translateY(-50%)",
                    }}
                ></Image>
                <TextInput
                    placeholder="Enter your password"
                    style={{
                        padding: 10,
                        borderWidth: 1,
                        borderRadius: 5,
                        flex: 1,
                        paddingHorizontal: 40,
                        color: "gray",
                    }}
                    onChangeText={(value) =>
                        dispatch({ type: "SET_PASSWORD", payload: value })
                    }
                    value={state?.password}
                ></TextInput>
                <Image
                    source={require("./assets/eye.png")}
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: 10,
                        transform: "translateY(-50%)",
                    }}
                ></Image>
            </View>
            <Text
                style={{
                    width: "100%",
                    textAlign: "right",
                    marginTop: 10,
                    color: "blue",
                    fontWeight: "bold",
                }}
            >
                Forget your password?
            </Text>
            <Pressable
                style={{
                    marginTop: 40,
                    backgroundColor: "blue",
                    padding: 8,
                    borderRadius: 10,
                    width: 300,
                }}
                onPress={() => handleLogin()}
            >
                <Text style={{ textAlign: "center", color: "white" }}>
                    Continue
                </Text>
            </Pressable>

            <View style={{ flexDirection: "row", marginTop: 40 }}>
                <View
                    style={{
                        flex: 1,
                        borderBottomWidth: 1,
                        borderColor: "gray",
                        width: 140,
                    }}
                ></View>
                <Text>or</Text>
                <View
                    style={{
                        flex: 1,
                        borderBottomWidth: 1,
                        borderColor: "gray",
                        width: 140,
                    }}
                ></View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20, gap: 10 }}>
                <Image
                    source={require("./assets/google.png")}
                    style={{ marginTop: 50 }}
                ></Image>
                <Image
                    source={require("./assets/face.png")}
                    style={{ marginTop: 50 }}
                ></Image>
                <Image
                    source={require("./assets/apple.png")}
                    style={{ marginTop: 50 }}
                ></Image>
            </View>
        </View>
    );
};

export default Login;
