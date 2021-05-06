import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native'
import { Icon, Input } from 'react-native-elements'


import { borderColor, primaryColor, secondaryColor } from '../publicValues/Color'
export default function Home({ navigation }) {
    const [loading, setloading] = useState(false)
    return (
        <View style={styles.container}>
            <StatusBar
                BarbarStyle="dark-content"
                backgroundColor={primaryColor}></StatusBar>


            <View style={{
                justifyContent: "space-between"
            }}>
                <Text style={styles.label}>Merci d'enter votre lien de questionnaire pour commencer à répondre</Text>
                <Input
                    placeholder="Enter votre lien"
                    leftIcon={{ type: 'AntDesign', name: 'link', color: "#fff" }}
                    style={{
                        borderBottomWidth: 0,
                        fontFamily: "Poppins-Regular",
                        color: "#fff"
                    }}

                    containerStyle={styles.input}
                    inputContainerStyle={styles.input}
                //onChangeText={value => this.setState({ comment: value })}
                />

                <TouchableOpacity style={styles.btn} onPress={
                    () => {
                        setloading(true)
                        navigation.navigate('Questions')
                    }
                }>
                    {!loading && <Text style={{
                        color: "#fff",
                        alignSelf: "center",
                        fontSize: 17,

                        fontFamily: "Poppins-Regular"
                    }}>Commencer</Text>}
                    {loading && < ActivityIndicator animating color="#fff"></ActivityIndicator>}
                </TouchableOpacity>
                <View style={styles.bottomView}>

                    <TouchableOpacity style={styles.touchBottom} onPress={
                        () => {

                            navigation.navigate('ScanScreen')
                        }
                    }
                    >
                        <Icon
                            name="scan-outline"
                            type='ionicon'
                            color='#517fa4'
                            size={30}
                        />
                        <Text style={{
                            color: "#fff",
                            alignSelf: "center",
                            fontSize: 13,
                            fontFamily: "Poppins-Regular"
                        }}>Scan</Text>
                    </TouchableOpacity >

                    <TouchableOpacity style={styles.touchBottom} onPress={
                        () => {

                            navigation.navigate('AdminLogin')
                        }
                    }>
                        <Icon
                            name="user-cog"
                            type='font-awesome-5'
                            color='#517fa4'
                            size={30}
                        />
                        <Text style={{
                            color: "#fff",
                            alignSelf: "center",
                            fontSize: 13,
                            fontFamily: "Poppins-Regular"
                        }}>Admin</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </View >
    )
}
const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: primaryColor,
            flex: 1,
            justifyContent: "space-around",
            padding: 20


        },
        topText: {
            fontSize: 28,
            fontWeight: "700",
            textAlign: "left",
            color: "#fff"

        },
        label: {
            fontSize: 17,
            fontWeight: "300",
            color: "#fff",
            marginLeft: 12,
            fontFamily: "Poppins-Regular",
            marginBottom: 20,

        },
        input: {
            backgroundColor: borderColor,
            height: 60,
            width: "100%",
            marginBottom: 10,

            borderRadius: 12,
            borderBottomWidth: 0,
            paddingLeft: 5,
            fontFamily: "Poppins-Regular",
            color: "#fff",


        },
        btn: {
            justifyContent: "center",
            alignContent: "center",
            height: 60,
            alignSelf: "center",
            width: "100%",
            backgroundColor: secondaryColor,
            borderRadius: 12,


        },
        bottomView: {
            flexDirection: "row",
            justifyContent: "space-between"
        },
        touchBottom: {
            backgroundColor: borderColor,
            height: 80,
            width: 80,
            borderRadius: 19,
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center"


        }
    }
)