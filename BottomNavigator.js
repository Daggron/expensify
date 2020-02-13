import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from './components/Home'
import { createAppContainer } from 'react-navigation'
import { Footer, Button, Icon, FooterTab , Text } from 'native-base'


const BottomTabBar = createBottomTabNavigator({
    Home : {screen : Home}
},{
    initialRouteName : 'Home',
    tabBarComponent : props=>{
        return(
            <Footer style={{backgroundColor : "#F5F5F5" }}>
                <FooterTab style={{backgroundColor : "#f5f5f5"}}>
                    <Button   onPress={()=>props.navigation.navigate('Home')}>
                        <Icon name="star" />
                        <Text>
                            Home
                        </Text>
                    </Button>
                    <Button  >
                        <Icon name="arrow-up" />
                        <Text>
                            Credits
                        </Text>
                    </Button>
                    <Button >
                        
                        <Icon name="arrow-down" />
                        <Text>
                            Debits
                        </Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
})

export default createAppContainer(BottomTabBar);