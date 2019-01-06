// AUTH
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import RegisterProfileScreen from "../screens/Auth/RegisterProfileScreen";

// MAIN TAB
import HomeScreen from "../screens/HomeScreen";

export const AuthRoutes = {
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
    RegisterProfile: { screen: RegisterProfileScreen }
}

export const AppRoutes = {
}

export const MainTabRoutes = {
    Home: { screen: HomeScreen }
}