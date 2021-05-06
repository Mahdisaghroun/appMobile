import React from 'react'
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon, Input } from 'react-native-elements'


import { borderColor, primaryColor, secondaryColor } from '../publicValues/Color'
export default function AdminLogin({ navigation }) {
      return (
            <View style={styles.container}>
                  <StatusBar
                        BarbarStyle="dark-content"
                        backgroundColor={primaryColor}></StatusBar>
                  <TouchableOpacity style={{
                        alignSelf: "flex-start"
                  }} onPress={
                        () => {

                              navigation.goBack()
                        }
                  }>
                        <Icon type='ionicon' name="chevron-back" color="#fff" size={40}></Icon>
                  </TouchableOpacity>
                  <Text style={styles.topText}>Connexion Admin</Text>


                  <Input
                        placeholder="Adresse e-mail"
                        leftIcon={{ type: 'AntDesign', name: 'mail', color: "#fff" }}
                        style={{
                              borderBottomWidth: 0,
                              fontFamily: "Poppins-Regular",
                              color: "#fff"
                        }}

                        containerStyle={styles.input}
                        inputContainerStyle={styles.input}
                  //  onChangeText={value => this.setState({ comment: value })}
                  />
                  <Input
                        placeholder="Mot de passe"
                        leftIcon={{ type: 'AntDesign', name: 'lock', color: "#fff" }}
                        style={{
                              borderBottomWidth: 0, fontFamily: "Poppins-Regular",
                              color: "#fff"
                        }}


                        inputContainerStyle={styles.input}
                        containerStyle={styles.input}
                  // onChangeText={value => this.setState({ comment: value })}
                  />
                  <TouchableOpacity style={styles.btn}>
                        <Text style={{
                              color: "#fff",
                              alignSelf: "center",
                              fontSize: 28,
                              fontFamily: "Poppins-Regular"
                        }}>Connexion</Text>
                  </TouchableOpacity>
            </View >
      )
}
const styles = StyleSheet.create(
      {
            container: {
                  backgroundColor: primaryColor,
                  flex: 1,
                  justifyContent: "center",
                  padding: 20


            },
            topText: {
                  fontSize: 28,

                  textAlign: "left",
                  color: "#fff",
                  marginBottom: 15,
                  fontFamily: "Poppins-Bold"

            },
            label: {
                  fontSize: 17,
                  fontWeight: "300",
                  color: "#fff",
                  marginLeft: 12

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
                  height: 100,
                  width: 100,
                  borderRadius: 19,
                  marginTop: 50,
                  justifyContent: "center"
            }
      }
)