// AUTH
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import RegisterProfileScreen from "../screens/Auth/RegisterProfileScreen";

// HOME TAB
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";

export const AuthRoutes = {
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
    RegisterProfile: { screen: RegisterProfileScreen }
}

export const AppRoutes = {
}

export const MainTabRoutes = {
    
}

export const HomeRoutes = {
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen }
}