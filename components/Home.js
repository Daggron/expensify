import React from 'react'
import { View , Text , Icon} from 'native-base'
import {StyleSheet, Dimensions} from 'react-native'
import Back from '../back.jpg'
import {Image , ScrollView} from 'react-native'
export default function Home() {
    return (
        <ScrollView>
            <View style={stylesheet.container}>
                <View style={{width : Dimensions.get('window').width-20 , height : 200 , padding : 20 , borderTopLeftRadius : 20, borderTopRightRadius : 20 ,borderBottomLeftRadius : 20 , borderBottomRightRadius : 20, backgroundColor : "#308F5A" , marginTop : 30 , marginBottom : 20 }} >
                        <View style={stylesheet.parallel}>
                            <View>
                                <Text style={{fontSize : 15 , color : "#f5f5f5"}}>
                                    Available Balance
                                </Text>
                                <Text style={{padding : 10, fontSize : 35 , color : "#fff"}}>
                                    3,000
                                </Text>
                            </View>
                            <View>
                                <Image source={Back} style={stylesheet.roundImage}  />
                            </View>
                        </View>
                        <View style={stylesheet.parallel}>
                            <Text style={{padding : 10 , color : "#f5f5f5"}}>
                                **** &nbsp; 6248
                            </Text>
                            <Text  style={{paddingHorizontal : 10 , color : "#f5f5f5" , backgroundColor:"#3cb371" , borderRadius : 10}}>
                                INR <Icon type="AntDesign" name="down" style={{fontSize : 10 , color : "#f5f5f5"}} />
                            </Text>
                        </View>
                </View>
                <View>
                </View>
            </View>
       </ScrollView>
    )
}

const stylesheet = StyleSheet.create({

    container : {
        flex : 1 ,
        alignItems : "center",
        backgroundColor : "#E8EFFF"
    },
    text:{
       color : "#1b1b1b"
    },
    roundImage : {
        height : 50 ,
        width : 50 ,
        borderTopLeftRadius : 25,
        borderTopRightRadius : 25 ,
        borderBottomLeftRadius : 25 , 
        borderBottomRightRadius : 25
    },
    parallel : {
        flex : 1,
        justifyContent : "space-between",
        alignItems : "center",
        flexDirection : "row",
        flexWrap : "wrap"
    }

})