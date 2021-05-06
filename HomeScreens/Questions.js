import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon, Input } from 'react-native-elements'
import { borderColor, primaryColor, secondaryColor } from '../publicValues/Color'
export default function Questions() {
      const [item1Selected, setitem1] = useState(false)
      const [item2Selected, setitem2] = useState(false)
      const [item3Selected, setitem3] = useState(false)
      const [item4Selected, setitem4] = useState(false)
      return (
            <View style={styles.container}>
                  <StatusBar
                        BarbarStyle="dark-content"
                        backgroundColor={primaryColor}></StatusBar>
                  <Text style={styles.enqueteTitle}>Enquete 3</Text>
                  <Text style={styles.questionIndex}> Question 1/10</Text>

                  <Text style={styles.question}>Le bridge était en démonstration comme sport olympiqueen 2012, qu'en pensez-vous ?

                  </Text>
                  <TouchableOpacity style={styles.item} onPress={() => setitem1(!item1Selected)}>
                        <Text style={styles.repText}>Reponse 1</Text>
                        <TouchableOpacity disabled style={
                              {
                                    borderColor: item1Selected ? secondaryColor : borderColor,
                                    borderRadius: 50,
                                    padding: item1Selected ? 5 : 12,
                                    borderWidth: !item1Selected ? 2 : 0
                              }}>
                              {item1Selected && <Icon name="checkmark-outline" type="ionicon" color="#fff" size={15} style={{ fontWeight: "900" }}></Icon>}
                        </TouchableOpacity>

                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item} onPress={() => setitem2(!item2Selected)}>
                        <Text style={styles.repText}>Reponse 1</Text>
                        <TouchableOpacity disabled style={
                              {
                                    borderColor: item2Selected ? secondaryColor : borderColor,
                                    borderRadius: 50,
                                    padding: item2Selected ? 5 : 12,
                                    borderWidth: !item2Selected ? 2 : 0
                              }}>
                              {item2Selected && <Icon name="checkmark-outline" type="ionicon" color="#fff" size={15} style={{ fontWeight: "900" }}></Icon>}
                        </TouchableOpacity>

                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item} onPress={() => setitem3(!item3Selected)}>
                        <Text style={styles.repText}>Reponse 1</Text>
                        <TouchableOpacity disabled style={
                              {
                                    borderColor: item3Selected ? secondaryColor : borderColor,
                                    borderRadius: 50,
                                    padding: item3Selected ? 5 : 12,
                                    borderWidth: !item3Selected ? 2 : 0
                              }}>
                              {item3Selected && <Icon name="checkmark-outline" type="ionicon" color="#fff" size={15} style={{ fontWeight: "900" }}></Icon>}
                        </TouchableOpacity>

                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item} onPress={() => setitem4(!item4Selected)}>
                        <Text style={styles.repText}>Reponse 1</Text>
                        <TouchableOpacity disabled style={
                              {
                                    borderColor: item4Selected ? secondaryColor : borderColor,
                                    borderRadius: 50,
                                    padding: item4Selected ? 5 : 12,
                                    borderWidth: !item4Selected ? 2 : 0
                              }}>
                              {item4Selected && <Icon name="checkmark-outline" type="ionicon" color="#fff" size={15} style={{ fontWeight: "900" }}></Icon>}
                        </TouchableOpacity>

                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn}>
                        <Text style={{
                              color: "#fff",
                              alignSelf: "center",
                              fontSize: 28,
                              fontFamily: "Poppins-Regular"
                        }}>Suivant</Text>
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
            enqueteTitle: {
                  fontSize: 35,
                  color: "#fff",
                  marginBottom: 30,
                  fontFamily: "Poppins-Bold"
            },
            questionIndex: {
                  fontSize: 28 - 7,
                  color: "#fff",
                  borderStyle: "dashed",
                  borderBottomWidth: 1,
                  borderBottomColor: "#fff",
                  marginBottom: 15,
                  opacity: 0.5,
                  fontFamily: "Poppins-Regular"
            },

            item: {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                  borderColor: borderColor,
                  borderWidth: 4,
                  height: 60,
                  width: "100%",
                  alignItems: "center",
                  borderRadius: 12,
                  marginBottom: 7
            },
            repText: {
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: 20,
                  fontFamily: "Poppins-Regular"
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
            question: {
                  color: "#fff",

                  fontSize: 22,
                  marginBottom: 10,
                  fontFamily: "Poppins-Medium"
            }

      }
)