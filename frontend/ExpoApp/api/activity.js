// import AsyncStorage from "@react-native-async-storage/async-storage"
import client from "./client"

export const activity = async (userLatitude, userLongitude) => {
    try {
        console.log("render task list")
        const res = await client.get('/activity/tasklist', {
            params: {
                latitude: userLatitude,
                longitude: userLongitude
            }

        })

        // console.log('Tasklist: ', res.data);
        return res;

    } catch (error) {
        console.log(error)

    }
}



export const getAvailableTaskList = async (userLatitude, userLongitude) => {
    try {
        console.log("render task list")


        const res = await client.get('/activity/available', {
            params: {
                latitude: userLatitude,
                longitude: userLongitude
            }

        })

        // console.log('Tasklist: ', res.data);
        return res;

    } catch (error) {
        console.log(error)

    }
}