import axios from 'axios'
const serverIPAddress = '192.168.1.3'; // the IPv4 address showing on the backend terminal !
export default axios.create({
    baseURL: `http://${serverIPAddress}:8000/v1`
});
