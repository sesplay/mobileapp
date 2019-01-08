import { createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import { AuthRoutes, AppRoutes, MainTabRoutes, HomeRoutes } from "./routes";
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
                            headerMode: "none"
                        }
                    )},
                    ...MainTabRoutes
                }, {
                    tabBarOptions: {
                        activeTintColor: electric_green,
                        inactiveTintColor: very_light_pink,
                        labelStyle: {
                            ...robotoMedium,
                            fontSize: 12
                        },
                        style: {
                            borderColor: very_light_pink
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