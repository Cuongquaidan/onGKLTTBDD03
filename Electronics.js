import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
    Pressable,
    TextInput,
} from "react-native";
import React, { useState } from "react";

const Electronics = ({ navigation }) => {
    const [category, setCategory] = useState("Smart phone");
    const [dongSP, setDongSP] = useState("isBestSales");
    const [isSeeAll, setIsSeeAll] = useState(false);
    const data = [
        {
            image: require("./assets/1.png"),
            name: "Smart phone",
            price: 999,
            type: "Smart phone",
            isBestSales: true,
            isBestMatched: true,
            isPopular: true,
        },
        {
            image: require("./assets/2.png"),
            name: "Smart phone",
            price: 899,
            type: "Ipad",
            isBestSales: false,
            isBestMatched: false,
            isPopular: false,
        },
        {
            image: require("./assets/3.png"),
            name: "Smart phone",
            price: 999,
            type: "Smart phone",
            isBestSales: true,
            isBestMatched: true,
            isPopular: true,
        },
        {
            image: require("./assets/4.png"),
            name: "Smart phone",
            price: 799,
            type: "Macbook",
            isBestSales: false,
            isBestMatched: true,
            isPopular: false,
        },
        {
            image: require("./assets/1.png"),
            name: "Smart phone",
            price: 999,
            type: "Smart phone",
            isBestSales: true,
            isBestMatched: true,
            isPopular: true,
        },
        {
            image: require("./assets/2.png"),
            name: "Smart phone",
            price: 899,
            type: "Ipad",
            isBestSales: true,
            isBestMatched: true,
            isPopular: true,
        },
        {
            image: require("./assets/3.png"),
            name: "Smart phone",
            price: 999,
            type: "Smart phone",
            isBestSales: true,
            isBestMatched: true,
            isPopular: true,
        },
        {
            image: require("./assets/4.png"),
            name: "Smart phone",
            price: 799,
            type: "Macbook",
            isBestSales: true,
            isBestMatched: true,
            isPopular: true,
        },
        {
            image: require("./assets/4.png"),
            name: "Smart phone",
            price: 799,
            type: "Macbook",
            isBestSales: false,
            isBestMatched: true,
            isPopular: false,
        },
        {
            image: require("./assets/1.png"),
            name: "Smart phone",
            price: 999,
            type: "Smart phone",
            isBestSales: true,
            isBestMatched: true,
            isPopular: true,
        },
        {
            image: require("./assets/2.png"),
            name: "Smart phone",
            price: 899,
            type: "Ipad",
            isBestSales: true,
            isBestMatched: true,
            isPopular: true,
        },
        {
            image: require("./assets/3.png"),
            name: "Smart phone",
            price: 999,
            type: "Smart phone",
            isBestSales: true,
            isBestMatched: true,
            isPopular: true,
        },
        {
            image: require("./assets/4.png"),
            name: "Smart phone",
            price: 799,
            type: "Macbook",
            isBestSales: true,
            isBestMatched: true,
            isPopular: true,
        },
    ];
    const dataFilter = data.filter((item) => {
        if (dongSP === "isBestSales") {
            return item.type === category && item.isBestSales === true;
        } else if (dongSP === "isBestMatched") {
            return item.type === category && item.isBestMatched === true;
        } else {
            return item.type === category && item.isPopular === true;
        }
    });

    const dataFilter2 = isSeeAll ? dataFilter : dataFilter.slice(0, 4);

    return (
        <SafeAreaView style={{ padding: 20, alignItems: "center" }}>
            {" "}
            <ScrollView
                style={{ flex: 1, width: "100%" }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            gap: 10,
                            alignItems: "center",
                        }}
                    >
                        <Pressable>
                            <Text style={{ fontWeight: 700 }}>{"<"}</Text>
                        </Pressable>
                        <Text style={{ fontWeight: 700, fontSize: 20 }}>
                            Electronics
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require("./assets/codicon_account.png")}
                            style={{}}
                        ></Image>
                    </View>
                </View>
                <View>
                    <View
                        style={{
                            flexDirection: "row",
                            position: "relative",
                            width: 300,
                            marginTop: 40,
                        }}
                    >
                        <Image
                            source={require("./assets/search.png")}
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: 10,
                                transform: "translateY(-50%)",
                            }}
                        ></Image>
                        <TextInput
                            placeholder="Search"
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
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 40,
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontWeight: 700, fontSize: 20 }}>
                        Categories
                    </Text>
                    <Pressable onPress={() => setIsSeeAll((prev) => !prev)}>
                        <Text style={{ fontSize: 16 }}>See all</Text>
                    </Pressable>
                </View>
                <View
                    style={{
                        marginTop: 20,
                        flexDirection: "row",
                        width: "100%",
                        gap: 2,
                    }}
                >
                    <Pressable
                        style={{
                            width: "33%",
                            backgroundColor: "blue",
                            height: 100,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                        }}
                        onPress={() => setCategory("Smart phone")}
                    >
                        <Image
                            source={require("./assets/smart.png")}
                            style={{}}
                        ></Image>
                    </Pressable>
                    <Pressable
                        style={{
                            width: "33%",
                            backgroundColor: "red",
                            height: 100,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                        }}
                        onPress={() => setCategory("Ipad")}
                    >
                        <Image
                            source={require("./assets/ipad.png")}
                            style={{}}
                        ></Image>
                    </Pressable>
                    <Pressable
                        style={{
                            width: "33%",
                            backgroundColor: "yellow",
                            height: 100,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                        }}
                        onPress={() => setCategory("Macbook")}
                    >
                        <Image
                            source={require("./assets/macbook.png")}
                            style={{}}
                        ></Image>
                    </Pressable>
                </View>

                <View
                    style={{
                        marginTop: 20,
                        flexDirection: "row",
                        width: "100%",
                        gap: 2,
                    }}
                >
                    <Pressable
                        style={{
                            width: "33%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                        }}
                        onPress={() => setDongSP("isBestSales")}
                    >
                        <Text style={{ color: "blue" }}>Best sales</Text>
                    </Pressable>
                    <Pressable
                        style={{
                            width: "33%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                        }}
                        onPress={() => setDongSP("isBestMatched")}
                    >
                        <Text style={{ color: "blue" }}>Best matched</Text>
                    </Pressable>
                    <Pressable
                        style={{
                            width: "33%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                        }}
                        onPress={() => setDongSP("isPopular")}
                    >
                        <Text style={{ color: "blue" }}>Popular</Text>
                    </Pressable>
                </View>

                <View style={{ width: "100%", height: 350 }}>
                    {dataFilter2.map((item) => (
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: 20,
                            }}
                        >
                            <Image source={item.image} style={{}}></Image>
                            <View>
                                <Text style={{ fontWeight: 700 }}>
                                    {item.name}
                                </Text>
                                <Image
                                    source={require("./assets/Rating_5.png")}
                                    style={{}}
                                ></Image>
                            </View>
                            <Text style={{ fontWeight: 700, color: "purple" }}>
                                {item.price}$
                            </Text>
                        </View>
                    ))}

                    <View style={{ padding: 8 }}>
                        <Pressable
                            style={{
                                backgroundColor: "gray",
                                padding: 10,
                                borderRadius: 5,
                                width: "100%",
                            }}
                            onPress={() => setIsSeeAll((prev) => !prev)}
                        >
                            <Text
                                style={{ color: "white", textAlign: "center" }}
                            >
                                SEE ALL
                            </Text>
                        </Pressable>

                        <Image
                            source={require("./assets/banner.png")}
                            style={{ marginTop: 20 }}
                        ></Image>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Electronics;
