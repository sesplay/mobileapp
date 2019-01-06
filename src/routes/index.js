import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { AuthRoutes } from "./routes";

const AppNavigator = createStackNavigator({
    Index: createSwitchNavigator({
        Auth: { screen: createStackNavigator(
            AuthRoutes, {
                headerMode: "none"
            }
        )}
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