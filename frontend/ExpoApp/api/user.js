import AsyncStorage from "@react-native-async-storage/async-storage"
import client from "./client"
export const signIn = async (email, password) => {
    try {
        const signInRes = await client.post('/sign-in', {
            email,
            password,
        })
        if(signInRes.data.success) {
           const token = signInRes.data.token
           const userInfo = JSON.stringify(signInRes.data.userInfo)
           console.log(userInfo)
           await AsyncStorage.setItem('token', token)
          await AsyncStorage.setItem('userInfo', userInfo)


        }
        return signInRes
    } catch (error) {
        console.log('error inside signin method')
        
    }
}

export const signOut = async () => {
    try {
        const token = await AsyncStorage.getItem('token')
        if(token!=null){
            const res = await client.get('/sign-out', {
                headers: {
                    Authorization: `JWT ${token}`
                }
            })
            if(res.data.success){
                await AsyncStorage.removeItem('token')
                return true
            }
        }
        return false
    } catch (error) {
        console.log('error inside signout method', error.message)
        
        return false
    }
}