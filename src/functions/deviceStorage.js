import { AsyncStorage } from 'react-native'

const deviceStorage = {
    async clear() {
        try {
            await AsyncStorage.clear()
        } catch (error) {
            console.log('AsyncStorage error! : ' + error.message)
        }
    },
    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (error) {
            console.log('AsyncStorage error! : ' + error.message)
        }
    },
    async removeItem(key) {
        try {
            await AsyncStorage.removeItem(key)
        } catch (error) {
            console.log('AsyncStorage error! : ' + error.message)
        }
    },
    async saveApiToken(apiToken) {
        try {
            await AsyncStorage.setItem('userToken', JSON.stringify(apiToken))
        } catch (error) {
            console.log('AsyncStorage error! : ' + error.message)
        }
    },
    async getApiToken() {
        try {
            apiToken = JSON.parse(await AsyncStorage.getItem('userToken'))
            return apiToken
        } catch (error) {
            console.log('AsyncStorage error! : ' + error.message)
        }
    },
    async removeApiToken() {
        try {
            await AsyncStorage.removeItem('userToken')
        } catch (error) {
            console.log('AsyncStorage error! : ' + error.message)
        }
    },
    async saveUserInfo(userInfo) {
        try {
            await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
        } catch (error) {
            console.log('AsyncStorage error! : ' + error.message)
        }
    },
    async getUserInfo() {
        try {
            return JSON.parse(await AsyncStorage.getItem('userInfo'))
        } catch (error) {
            console.log('AsyncStorage error! : ' + error.message)
        }
    },
    async removeUserInfo() {
        try {
            await AsyncStorage.removeItem('userInfo')
        } catch (error) {
            console.log('AsyncStorage error! : ' + error.message)
        }
    },
    async saveWalkthrough(userInfo) {
        try {
            await AsyncStorage.setItem('walkthrough', JSON.stringify(userInfo))
        } catch (error) {
            console.log('AsyncStorage error! : ' + error.message)
        }
    },
    async getWalkthrough() {
        try {
            return JSON.parse(await AsyncStorage.getItem('walkthrough'))
        } catch (error) {
            console.log('AsyncStorage error! : ' + error.message)
        }
    },
}

export default deviceStorage