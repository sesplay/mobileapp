import { createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import { AuthRoutes, AppRoutes, MainTabRoutes } from "./routes";

const AppNavigator = createStackNavigator({
    Index: createSwitchNavigator({
        Auth: { screen: createStackNavigator(
            AuthRoutes, {
                headerMode: "none"
            }
        )},
        App: { screen: createStackNavigator({
            Main: { screen: createBottomTabNavigator(
                MainTabRoutes
            ) },
            ...AppRoutes
        }, {
            headerMode: "none"
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