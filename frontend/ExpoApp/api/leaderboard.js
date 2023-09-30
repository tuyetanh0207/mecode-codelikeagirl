import client from "./client"

export const getLeaderboard = async () => {
    try {
        console.log("render leaderboard");
        const res = await client.get('/campaign/leaderboard');
        console.log('Leaderboard: ', res.data);
        return res;

    } catch (error) {
        console.log(error)
    }
}

export const getUserRank = async (id) => {
    try {
        console.log("get user rank of id: ", id);
        const path = `/campaign/leaderboard/user/${id}/rank`; // Sử dụng dấu backtick
        const res = await client.get(path);
        console.log('RANK: ', res.data.rank);
        return res.data.rank;

    } catch (error) {
        console.log(error);
        throw error; // Throwing error để báo lỗi và dừng luồng thực thi
    }
}
