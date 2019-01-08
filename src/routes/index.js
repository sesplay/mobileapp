import React from 'react'
import { createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import { AuthRoutes, AppRoutes, MainTabRoutes, HomeRoutes } from "./routes";
import { Icon } from '../components';
import { electric_green, very_light_pink } from '../styles/colors';
import { robotoMedium } from '../styles/fonts';

const AppNavigator = createStackNavigator({
    Index: createSwitchNavigator({
        Auth: { screen: createStackNavigator(
            AuthRoutes, {
                headerMode: "none"
            }
        )},
        App: { screen: createStackNavigator({
            Main: { screen: createBottomTabNavigator(
                {
                    Home: { screen: createStackNavigator(
                        HomeRoutes, {
                            headerMode: "none",
                            navigationOptions: {
                                title: "Home",
                                tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} size={22}/>,
                            }
                        }
                    )},
                    ...MainTabRoutes
                }, {
                    tabBarOptions: {
                        activeTintColor: electric_green,
                        inactiveTintColor: very_light_pink,
                        tabStyle: {
                            paddingTop: 4
                        },
                        labelStyle: {
                            ...robotoMedium,
                            fontSize: 12,
                            paddingBottom: 7
                        },
                        style: {
                            borderColor: very_light_pink,
                            height: 55
                        }
                    }
                }
            ) },
            ...AppRoutes
        }, {
            headerMode: "none",
        })}
    })
}, {
    headerMode: "none",
    mode: "modal",
    cardStyle: {
        backgroundColor: 'transparent',
        opacity: 1,
    },
})

export default createAppContainer(AppNavigator)