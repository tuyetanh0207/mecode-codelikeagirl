import AsyncStorage from "@react-native-async-storage/async-storage"
import client from "./client"
export const signIn = async (email, password) => {
    try {
        console.log("running login")
        const signInRes = await client.post('/user/sign-in', {
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
            const res = await client.get('/user/sign-out', {
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

export const getAllPostOfUser = async (userId) => {
    try {
        const token = await AsyncStorage.getItem('token')
        if(token!=null){
            const res = await client.get(`/post/getallpost/${userId}`, {
                headers: {
                    Authorization: `JWT ${token}`
                }
            })
            if(res.data.success){
                return res.data
            }
        }
        return false
    } catch (error) {
        console.log('error inside getAllPostOfUser method', error.message)
        return false
    }
}

export const getUserInfo = async (userId) => {
    try {
        console.log("running login")
        const getInfoRes = await client.post(`/user/${userId}/getinfo`, {
            userId
        })
        if(getInfoRes.data.success) {
           const token = getInfoRes.data.token
        }
        return getInfoRes
    } catch (error) {
        console.log('error inside getUserInfo method')
        
    }
}
////campaign/leaderboard/user/:id/rank
export const getUserRankLatestCampaign = async (userId) => {
    try {
        const rankRes = await client.get(`/campaign/leaderboard/user/${userId}/rank`)
       console.log('rankREs', rankRes.data)
        return rankRes.data
    }
    catch(error){
        console.log('error while fetch rank', error)
    }
}



