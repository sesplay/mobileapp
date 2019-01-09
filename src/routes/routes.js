// AUTH
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import RegisterProfileScreen from "../screens/Auth/RegisterProfileScreen";

// MAIN TAB 
import AccountScreen from "../screens/AccountScreen";

// HOME TAB
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";

// APP
import AboutScreen from "../screens/AboutScreen";
import MessageScreen from "../screens/MessageScreen";
import EventScreen from "../screens/EventScreen";

export const AuthRoutes = {
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
    RegisterProfile: { screen: RegisterProfileScreen }
}

export const AppRoutes = {
    About: { screen: AboutScreen }
}

export const MainTabRoutes = {
    Event: { screen: EventScreen},
    Message: { screen: MessageScreen },
    Account: { screen: AccountScreen }
}

export const HomeRoutes = {
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen }
}