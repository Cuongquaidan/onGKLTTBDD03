import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";

const Login = () => {
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
